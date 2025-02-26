function showMessage() {
    let surpriseDiv = document.getElementById("surpriseMessage");
    surpriseDiv.style.display = "block";
    
    // Play birthday music
    let audio = new Audio('WhatsApp Audio 2025-02-26 at 17.38.55_c41edde3.mp3'); // Make sure to add a Happy Birthday MP3 file
    audio.play();

    // Fireworks effect
    for (let i = 0; i < 20; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        document.body.appendChild(firework);
        
        firework.style.left = Math.random() * window.innerWidth + "px";
        firework.style.top = Math.random() * window.innerHeight + "px";

        setTimeout(() => firework.remove(), 1500);
    }

    // Alert with a sweet birthday message
    setTimeout(() => {
        alert("🎉 Happy Birthday! 🎂 May your day be filled with joy and surprises! 🎁✨");
    }, 1000);
}
