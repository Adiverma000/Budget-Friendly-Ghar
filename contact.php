<?php
/*
 * EstateElite — contact.php
 * Handles contact form submissions
 * Validates input, optionally sends email, returns JSON response
 *
 * HOW IT WORKS:
 *  1. Receives POST data from the contact form
 *  2. Sanitizes and validates each field
 *  3. (Optional) Sends an email using PHP mail()
 *  4. Returns a JSON response with status: "success" or "error"
 *
 * TO ENABLE EMAIL: set $sendEmail = true and update $recipientEmail
 */

/* ---- Configuration ---- */
$sendEmail      = false;              // Set true to send actual emails
$recipientEmail = "hello@estateelite.com"; // Your receiving email address
$siteTitle      = "EstateElite";

/* ---- CORS / Content-Type headers ---- */
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

/* ---- Only accept POST requests ---- */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed."]);
    exit;
}

/* ================================================================
   HELPER: Sanitize a string input
   ================================================================ */
function sanitize(string $input): string {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, "UTF-8");
}

/* ================================================================
   1. Collect & sanitize inputs
   ================================================================ */
$name     = sanitize($_POST["name"]     ?? "");
$email    = sanitize($_POST["email"]    ?? "");
$phone    = sanitize($_POST["phone"]    ?? "");
$interest = sanitize($_POST["interest"] ?? "");
$message  = sanitize($_POST["message"]  ?? "");

/* ================================================================
   2. Validate required fields
   ================================================================ */
$errors = [];

if (empty($name)) {
    $errors[] = "Name is required.";
}

if (empty($email)) {
    $errors[] = "Email address is required.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Please enter a valid email address.";
}

if (empty($message)) {
    $errors[] = "Message is required.";
} elseif (strlen($message) < 10) {
    $errors[] = "Message must be at least 10 characters.";
}

/* Return validation errors */
if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        "status"  => "error",
        "message" => implode(" ", $errors),
        "errors"  => $errors
    ]);
    exit;
}

/* ================================================================
   3. (Optional) Send email via PHP mail()
   ================================================================ */
$emailSent = false;

if ($sendEmail) {
    $subject = "[{$siteTitle}] New Enquiry from {$name}";

    $body  = "You received a new enquiry from the {$siteTitle} website.\n\n";
    $body .= "-------------------------------------------\n";
    $body .= "Name     : {$name}\n";
    $body .= "Email    : {$email}\n";
    $body .= "Phone    : " . ($phone ?: "Not provided") . "\n";
    $body .= "Interest : " . ($interest ?: "Not specified") . "\n";
    $body .= "-------------------------------------------\n\n";
    $body .= "Message:\n{$message}\n";

    $headers  = "From: {$siteTitle} <noreply@estateelite.com>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $emailSent = mail($recipientEmail, $subject, $body, $headers);
}

/* ================================================================
   4. Log submission to a text file (local backup)
   ================================================================ */
$logDir  = __DIR__ . "/logs";
$logFile = $logDir . "/enquiries.log";

if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
}

$timestamp  = date("Y-m-d H:i:s");
$logEntry   = "[{$timestamp}] Name: {$name} | Email: {$email} | Phone: {$phone} | Interest: {$interest}" . PHP_EOL;
$logEntry  .= "Message: {$message}" . PHP_EOL;
$logEntry  .= str_repeat("-", 60) . PHP_EOL;

file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

/* ================================================================
   5. Return success response
   ================================================================ */
http_response_code(200);
echo json_encode([
    "status"    => "success",
    "message"   => "Thank you, {$name}! We'll be in touch within 24 hours.",
    "email_sent" => $emailSent
]);
exit;
?>