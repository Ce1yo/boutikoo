<?php
header('Content-Type: application/json');

// Récupération des données du formulaire
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Adresse email de destination
$to = 'gbcelyo@gmail.com';

// Création du contenu de l'email
$emailContent = "Nouveau message depuis le formulaire de contact Boutikoo\n\n";
$emailContent .= "Nom: " . $name . "\n";
$emailContent .= "Email: " . $email . "\n";
$emailContent .= "Téléphone: " . $phone . "\n";
$emailContent .= "Sujet: " . $subject . "\n\n";
$emailContent .= "Message:\n" . $message;

// En-têtes de l'email
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoi de l'email
$mailSent = mail($to, "Contact Boutikoo: " . $subject, $emailContent, $headers);

// Réponse au format JSON
if ($mailSent) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>