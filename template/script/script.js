document.addEventListener('DOMContentLoaded', function () {
    // Get references to buttons and the shared audio element
    const zoneAButton = document.getElementById('zoneAButton');
    const zoneBButton = document.getElementById('zoneBButton');
    const zoneCButton = document.getElementById('zoneCButton');
    const zoneDButton = document.getElementById('zoneDButton');
    const zoneEButton = document.getElementById('zoneEButton');
    const zoneFButton = document.getElementById('zoneFButton');
    
    // Get reference to the shared audio element
    const zoneAudio = document.getElementById('zoneAudio');

    // Function to play the shared audio when a button is clicked
    function playAudio() {
        zoneAudio.currentTime = 0; // Reset audio to the beginning
        zoneAudio.play();
    }

    // Attach the playAudio function to each button's click event
    zoneAButton.addEventListener('click', playAudio);
    zoneBButton.addEventListener('click', playAudio);
    zoneCButton.addEventListener('click', playAudio);
    zoneDButton.addEventListener('click', playAudio);
    zoneEButton.addEventListener('click', playAudio);
    zoneFButton.addEventListener('click', playAudio);
});
