document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Membuat Efek Salju ---
    const snowContainer = document.getElementById('snow-container');
    const snowflakeChars = ['❅', '❆', '❄', '•'];
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Karakter salju acak
        snowflake.innerHTML = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        
        // Posisi horizontal acak
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // Ukuran acak
        const size = Math.random() * 1.5 + 0.5;
        snowflake.style.fontSize = size + 'em';
        
        // Durasi jatuh acak (antara 5s sampai 15s)
        const duration = Math.random() * 10 + 5;
        snowflake.style.animationDuration = duration + 's';
        
        // Opacity acak
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        
        snowContainer.appendChild(snowflake);
        
        // Hapus elemen setelah jatuh ke bawah agar tidak memenuhi layar
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }
    
    // Buat salju baru setiap 200 milidetik
    setInterval(createSnowflake, 200);

    // --- 2. Animasi Fade-in pada Daftar Acara ---
    const agendaItems = document.querySelectorAll('.agenda-item');
    
    agendaItems.forEach((item, index) => {
        // Delay animasi bertahap untuk setiap item
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200); // 200ms jeda antar item
    });
});