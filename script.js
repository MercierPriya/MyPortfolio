function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

const coverbtn=document.querySelector('#coverbtn');

coverbtn.addEventListener('click',function(event){
    event.preventDefault();
    const coverText=document.getElementById('cover');
const lessText=document.getElementById('less')
if (coverText.style.display === 'none') {
    coverText.style.display = 'block'; // Show more text
    lessText.style.display = 'none'; // Hide the brief text
    this.innerHTML = 'Voir Moins'; // Change the button text to 'See Less'
} else {
    coverText.style.display = 'none'; // Hide extra text
    lessText.style.display = 'block'; // Show brief text
    this.innerHTML = 'Voir Plus'; // Change the button text to 'See More'
}
})
document.getElementById('show-education-btn').addEventListener('click', function()
 {
    const educationContent = document.getElementById('education-content');
    educationContent.style.display = educationContent.style.display === 'none' ? 'block' : 'none';
})

// recuperer les donnees 
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupération des valeurs du formulaire
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Vérification si tous les champs sont remplis
        if (!name || !email || !phone || !subject || !message) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Objet contenant les données du formulaire
        const formData = {
            name,
            email,
            phone,
            subject,
            message
        };

        // Affichage des données dans la console pour vérifier
        console.log("Données du formulaire :", formData);

        // Envoyer les données au serveur
        fetch('https://mercierpriya.github.io/submit-form', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Message de confirmation
            contactForm.reset(); // Réinitialise le formulaire
        })
        .catch(error => console.error("Erreur lors de l'envoi :" ,error));
    });
});
