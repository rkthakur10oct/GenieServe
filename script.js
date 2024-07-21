// script.js
function sendMessage() {
    const messageInput = document.getElementById('message').value;
    const encodedMessage = encodeURIComponent(messageInput);
    const phoneNumber = '919801533948'; // WhatsApp phone number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
}
