function bukaUcapan() {
    const frontView = document.getElementById('front-view');
    const insideView = document.getElementById('inside-view');
    const mainCard = document.getElementById('main-card');
    const musik = document.getElementById('backsound');

    mainCard.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        frontView.classList.add('hidden');
        insideView.classList.remove('hidden');
        mainCard.style.transform = 'scale(1)';
        
        // Muter lagu About You pas di-klik
        musik.play().catch(error => {
            console.log("Autoplay keblokir browser. Butuh klik user dulu.");
        });
    }, 300);
}
