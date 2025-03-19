<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verifică dacă avem IMEI în cerere
if (!isset($_GET['imei'])) {
    header('Content-Type: application/json');
    echo json_encode(['error' => true, 'message' => 'IMEI lipsă.']);
    exit;
}

$imei = trim($_GET['imei']);
$serviceId = isset($_GET['serviceId']) ? $_GET['serviceId'] : '281'; // Default la serviciul PRO

// Includem biblioteca FPDF
require('libs/fpdf/fpdf.php');

// Obține datele IMEI de la API
function getIMEIData($imei, $serviceId) {
    // Simulăm o cerere POST către scriptul nostru check_imei.php
    $postData = http_build_query([
        'imei' => $imei,
        'serviceId' => $serviceId
    ]);
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => $postData
        ]
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/check_imei.php', false, $context);
    
    if ($result === FALSE) {
        return ['error' => true, 'message' => 'Nu s-au putut obține datele de la API.'];
    }
    
    return json_decode($result, true);
}

// Obține datele
$data = getIMEIData($imei, $serviceId);

// Verifică dacă avem erori
if (isset($data['error']) && $data['error'] === true) {
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

// Definește clasa PDF cu header și footer personalizate
class PDF extends FPDF {
    // Header
    function Header() {
        $this->SetFont('Arial', 'B', 15);
        $this->Cell(0, 10, 'RAPORT VERIFICARE IMEI', 0, 1, 'C');
        $this->SetFont('Arial', 'I', 10);
        $this->Cell(0, 5, 'codat.ro - Serviciu verificare IMEI pentru iPhone', 0, 1, 'C');
        $this->Ln(10);
    }
    
    // Footer
    function Footer() {
        $this->SetY(-15);
        $this->SetFont('Arial', 'I', 8);
        $this->Cell(0, 10, 'Pagina ' . $this->PageNo() . '/{nb}', 0, 0, 'C');
        $this->Cell(0, 10, 'Generat la ' . date('d-m-Y H:i:s'), 0, 0, 'R');
    }
    
    // Titlu secțiune
    function SectionTitle($title) {
        $this->SetFont('Arial', 'B', 12);
        $this->SetFillColor(230, 230, 230);
        $this->Cell(0, 8, $title, 0, 1, 'L', true);
        $this->Ln(2);
    }
    
    // Rând info
    function InfoRow($label, $value, $highlight = false) {
        $this->SetFont('Arial', 'B', 10);
        $this->Cell(60, 6, $label . ':', 0, 0);
        
        if ($highlight) {
            $this->SetFont('Arial', 'B', 10);
            $this->SetTextColor(0, 102, 204); // Albastru pentru valori importante
        } else {
            $this->SetFont('Arial', '', 10);
            $this->SetTextColor(0, 0, 0); // Negru standard
        }
        
        $this->Cell(0, 6, $value, 0, 1);
        $this->SetTextColor(0, 0, 0); // Reset la culoarea standard
    }
    
    // Rând status
    function StatusRow($label, $status, $isGood) {
        $this->SetFont('Arial', 'B', 10);
        $this->Cell(60, 6, $label . ':', 0, 0);
        
        $this->SetFont('Arial', 'B', 10);
        if ($isGood) {
            $this->SetTextColor(0, 153, 0); // Verde pentru status bun
        } else {
            $this->SetTextColor(204, 0, 0); // Roșu pentru status rău
        }
        
        $this->Cell(0, 6, $status, 0, 1);
        $this->SetTextColor(0, 0, 0); // Reset la culoarea standard
    }
}

// Crează PDF
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();

// Adaugă informații de bază
$pdf->SectionTitle('Informații de bază');
$pdf->InfoRow('IMEI', $imei, true);
$pdf->InfoRow('Tip verificare', $serviceId === '205' ? 'Verificare Basic' : 'Verificare PRO', false);
$pdf->InfoRow('Data raport', date('d-m-Y H:i:s'), false);
$pdf->Ln(5);

// Informații dispozitiv
$pdf->SectionTitle('Informații dispozitiv');
if (isset($data['deviceInfo'])) {
    $pdf->InfoRow('Model', $data['deviceInfo']['model'] ?? 'Necunoscut', true);
    $pdf->InfoRow('Număr serial', $data['deviceInfo']['serial'] ?? 'Necunoscut', true);
    $pdf->InfoRow('Data achiziție estimată', $data['deviceInfo']['purchaseDate'] ?? 'Necunoscută', false);
} else {
    $pdf->InfoRow('Status', 'Informații indisponibile', false);
}
$pdf->Ln(5);

// Status iCloud & Activare
$pdf->SectionTitle('Status iCloud & Activare');
if (isset($data['icloudStatus'])) {
    $isClean = strtolower($data['icloudStatus']) === 'clean';
    $pdf->StatusRow('iCloud', $data['icloudStatus'], $isClean);
    $pdf->StatusRow('Activare', 'Activat', true);
} else {
    $pdf->InfoRow('Status', 'Informații indisponibile', false);
}
$pdf->Ln(5);

// Garanție
$pdf->SectionTitle('Status garanție');
if (isset($data['warranty'])) {
    $warrantyStatus = $data['warranty']['active'] ? 'Activă' : 'Expirată';
    $pdf->StatusRow('Status garanție', $warrantyStatus, $data['warranty']['active']);
    $pdf->InfoRow('Zile rămase', $data['warranty']['daysRemaining'] ?? '0', false);
    $pdf->StatusRow('Suport tehnic', $data['warranty']['technicalSupport'] ? 'DISPONIBIL' : 'INDISPONIBIL', $data['warranty']['technicalSupport']);
    $pdf->StatusRow('Servicii reparații', $data['warranty']['repairService'] ? 'DISPONIBIL' : 'INDISPONIBIL', $data['warranty']['repairService']);
} else {
    $pdf->InfoRow('Status', 'Informații indisponibile', false);
}
$pdf->Ln(5);

// Status blocaje
$pdf->SectionTitle('Status blocaje');
if (isset($data['lockStatus'])) {
    $pdf->StatusRow('MDM', $data['lockStatus']['mdm'] ? 'ACTIV' : 'INACTIV', !$data['lockStatus']['mdm']);
    $pdf->StatusRow('Blacklist', $data['lockStatus']['blacklisted'] ? 'DA' : 'NU', !$data['lockStatus']['blacklisted']);
    $pdf->StatusRow('SIM lock', $data['lockStatus']['simLocked'] ? 'BLOCAT' : 'LIBER', !$data['lockStatus']['simLocked']);
    $pdf->InfoRow('Operator', $data['lockStatus']['carrier'] ?? 'Necunoscut', false);
} else {
    $pdf->InfoRow('Status', 'Informații indisponibile', false);
}

// Adaugă notă de final
$pdf->Ln(10);
$pdf->SetFont('Arial', 'I', 8);
$pdf->MultiCell(0, 4, 'Notă: Acest raport a fost generat automat și conține informații bazate pe serviciile API externe. Aceste informații sunt furnizate \"ca atare\" fără nicio garanție privind acuratețea sau completitudinea lor. Pentru asistență, vă rugăm să contactați echipa noastră de suport.');

// Output PDF
$pdf->Output('D', 'IMEI_Report_' . $imei . '.pdf');
?> 