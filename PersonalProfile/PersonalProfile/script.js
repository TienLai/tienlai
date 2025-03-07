
// Interactive profile image viewer
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image-container');
    
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            // Create modal backdrop
            const backdrop = document.createElement('div');
            backdrop.style.position = 'fixed';
            backdrop.style.top = '0';
            backdrop.style.left = '0';
            backdrop.style.width = '100%';
            backdrop.style.height = '100%';
            backdrop.style.backgroundColor = 'rgba(45, 27, 78, 0.9)';
            backdrop.style.display = 'flex';
            backdrop.style.justifyContent = 'center';
            backdrop.style.alignItems = 'center';
            backdrop.style.zIndex = '1000';
            backdrop.style.cursor = 'pointer';
            backdrop.style.backdropFilter = 'blur(5px)';
            
            // Create enlarged image
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.querySelector('img').src;
            enlargedImg.style.maxWidth = '80%';
            enlargedImg.style.maxHeight = '80%';
            enlargedImg.style.objectFit = 'contain';
            enlargedImg.style.border = '3px solid';
            enlargedImg.style.borderImage = 'linear-gradient(to bottom right, #45dddd, #c293ff) 1';
            enlargedImg.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            enlargedImg.style.transition = 'transform 0.3s ease';
            enlargedImg.style.animation = 'fade-up 0.3s ease forwards';
            
            backdrop.appendChild(enlargedImg);
            document.body.appendChild(backdrop);
            
            // Close on click
            backdrop.addEventListener('click', function() {
                this.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(this);
                }, 300);
            });
        });
    }
});
