<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Verifică dacă datele au fost trimise
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $imei = isset($_POST['imei']) ? trim($_POST['imei']) : null;
    $serviceId = isset($_POST['serviceId']) ? $_POST['serviceId'] : null;

    if (!$imei || !$serviceId) {
        echo json_encode(['error' => true, 'message' => 'IMEI sau ServiceID lipsă.']);
        exit;
    }

    $apiKey = "5MN-TUG-3QD-MDQ-OW0-M5V-P7J-MST";
    $myCheck = [
        "service" => $serviceId,
        "imei" => $imei,
        "key" => $apiKey
    ];

    $ch = curl_init("https://api.ifreeicloud.co.uk/");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $myCheck);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 60);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo json_encode(['error' => true, 'message' => 'Eroare în comunicarea cu serverul: ' . curl_error($ch)]);
        curl_close($ch);
        exit;
    }

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        echo json_encode(['error' => true, 'message' => "Serverul a returnat un cod de eroare: $httpCode"]);
        exit;
    }

    // Parsează răspunsul API
    $apiData = json_decode($response, true);
    
    // Verifică dacă avem un răspuns valid
    if (!$apiData || json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => true, 'message' => 'Răspuns invalid de la API. ' . json_last_error_msg()]);
        exit;
    }
    
    // Verifică dacă API-ul a returnat o eroare
    if (isset($apiData['error']) && $apiData['error'] !== false) {
        $errorMessage = isset($apiData['message']) ? $apiData['message'] : 'Eroare necunoscută de la API.';
        echo json_encode(['error' => true, 'message' => $errorMessage]);
        exit;
    }
    
    // Formatează datele pentru interfața noastră
    $formattedData = [
        'error' => false,
        'icloudStatus' => isset($apiData['icloud']) ? $apiData['icloud'] : 'Necunoscut',
        'deviceInfo' => [
            'model' => isset($apiData['model']) ? $apiData['model'] : 'Necunoscut',
            'serial' => isset($apiData['serial']) ? $apiData['serial'] : 'Necunoscut',
            'purchaseDate' => isset($apiData['purchase_date']) ? formatDate($apiData['purchase_date']) : 'Necunoscută'
        ],
        'warranty' => [
            'active' => isset($apiData['warranty_status']) && strtolower($apiData['warranty_status']) === 'active',
            'daysRemaining' => isset($apiData['warranty_details']['est_days_left']) ? $apiData['warranty_details']['est_days_left'] : 0,
            'technicalSupport' => isset($apiData['warranty_details']['telephone_technical_support']) && strtolower($apiData['warranty_details']['telephone_technical_support']) === 'active',
            'repairService' => isset($apiData['warranty_details']['repairs_and_service_coverage']) && strtolower($apiData['warranty_details']['repairs_and_service_coverage']) === 'active'
        ],
        'lockStatus' => [
            'mdm' => isset($apiData['mdm']) && strtolower($apiData['mdm']) === 'on',
            'blacklisted' => isset($apiData['blacklist']) && strtolower($apiData['blacklist']) === 'blacklisted',
            'simLocked' => isset($apiData['simlock']) && strtolower($apiData['simlock']) === 'locked',
            'carrier' => isset($apiData['carrier']) ? $apiData['carrier'] : 'Necunoscut'
        ]
    ];
    
    // Adăugăm răspunsul brut pentru debugging dacă este necesar
    if (isset($_GET['debug']) && $_GET['debug'] === 'true') {
        $formattedData['raw_response'] = $apiData;
    }
    
    echo json_encode($formattedData);
    exit;
} else {
    echo json_encode(['error' => true, 'message' => 'Metoda cererii nu este POST.']);
    exit;
}

// Funcție pentru formatarea datei
function formatDate($dateString) {
    if (!$dateString) return 'Necunoscută';
    
    try {
        $date = new DateTime($dateString);
        return $date->format('d-m-Y');
    } catch (Exception $e) {
        return $dateString; // Returnează string-ul original dacă nu poate fi parsat
    }
}
?>