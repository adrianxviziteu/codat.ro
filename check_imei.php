<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Verifică dacă datele au fost trimise
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $imei = isset($_POST['imei']) ? trim($_POST['imei']) : null;
    $serviceId = isset($_POST['serviceId']) ? intval($_POST['serviceId']) : null;

    if (!$imei || !$serviceId) {
        echo json_encode(['success' => false, 'error' => 'IMEI sau ServiceID lipsă.']);
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
        echo json_encode(['success' => false, 'error' => 'Eroare cURL: ' . curl_error($ch)]);
        curl_close($ch);
        exit;
    }

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        echo json_encode(['success' => false, 'error' => "Cod HTTP: $httpCode"]);
        exit;
    }

    // Răspuns brut pentru debugging
    echo json_encode(['success' => true, 'raw_response' => $response]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'Metoda cererii nu este POST.']);
    exit;
}
?>