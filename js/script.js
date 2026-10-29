document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Membuat Efek Salju ---
    const snowContainer = document.getElementById('snow-container');
    const snowflakeChars = ['❅', '❆', '❄', '•'];
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        snowflake.innerHTML = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        const size = Math.random() * 1.5 + 0.5;
        snowflake.style.fontSize = size + 'em';
        
        const duration = Math.random() * 10 + 5;
        snowflake.style.animationDuration = duration + 's';
        
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        
        snowContainer.appendChild(snowflake);
        
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }
    
    setInterval(createSnowflake, 200);

    // --- 2. Animasi Fade-in pada Daftar Acara ---
    const agendaItems = document.querySelectorAll('.agenda-item');
    
    agendaItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200);
    });
});
