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