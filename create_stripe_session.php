<?php
require 'stripe-php/init.php';

// Folosim cheia de test Stripe în loc de cea live pentru a permite testarea
\Stripe\Stripe::setApiKey('sk_test_51QhqbjIm5aVYrrf0SpmmrLuA9FdfBZyKY7vXoHQjJMCrRBnRSYH9NRaAJwPBXKZJYVqv7H3kTiOBP0s72N9KDMmj00Hgf6CXqD');

// Preluăm datele din cererea GET
$imei = isset($_GET['imei']) ? trim($_GET['imei']) : null;
$serviceId = isset($_GET['serviceId']) ? intval($_GET['serviceId']) : null;

// ✅ Definim prețurile corecte pentru fiecare serviciu (în bani, nu lei)
$prices = [
    205 => 300, // 3 LEI pentru Verificare SIMPLĂ
    281 => 500, // 5 LEI pentru Verificare PRO
];

// ✅ Verificăm dacă datele sunt corecte
if (!$imei || !$serviceId || !isset($prices[$serviceId])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Date lipsă sau serviciu invalid']);
    exit;
}

// ✅ Selectăm prețul corect pe baza serviciului ales
$price = $prices[$serviceId];

// ✅ Alegem numele serviciului pentru Stripe
$serviceName = ($serviceId == 281) ? 'Verificare PRO' : 'Verificare Simplă';

try {
    // ✅ Creează sesiunea Stripe
    $session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'ron',
                'product_data' => ['name' => $serviceName],
                'unit_amount' => $price, // Stripe cere suma în bani (ex: 300 = 3 RON)
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',
        'success_url' => 'http://localhost:8000/public/succes.html?imei=' . urlencode($imei) . '&serviceId=' . $serviceId,
        'cancel_url' => 'http://localhost:8000/public/cancel_payment.html',
        'metadata' => [
            'imei' => $imei,
            'serviceId' => $serviceId,
        ],
    ]);

    // Redirecționăm utilizatorul către pagina de checkout Stripe
    header('Location: ' . $session->url);
    exit();
} catch (\Exception $e) {
    http_response_code(500);
    echo 'Eroare: ' . $e->getMessage();
}