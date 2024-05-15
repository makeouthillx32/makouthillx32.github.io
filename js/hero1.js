// hero1.js
document.addEventListener('DOMContentLoaded', function() {
    const observerContainer = document.createElement('div');
    observerContainer.className = 'moving-container';
    observerContainer.style.cssText = `
        position: fixed; background: rgba(0, 0, 0, 0.8);
        border: 5px solid black; border-radius: 30px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        overflow: hidden; display: flex; justify-content: center; align-items: center;
        zIndex: 10000; transition: all 0.5s ease; top: 50%; transform: translateY(-50%);
    `;
    document.body.appendChild(observerContainer);

    const sections = document.querySelectorAll('.h-screen');
    const gifs = {
        'hero2': 'images/hero2.gif',
        'hero3': 'images/hero3.gif',
        'hero4': 'images/hero4.gif',
        'hero5': 'images/hero5.gif',
        'hero6': 'images/hero6.gif',
        'hero8': 'images/hero8.gif',
        'hero9': 'images/hero9.gif',
        'default': 'images/default.gif'  // Default GIF
    };

    function updateObserver() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let foundSection = false;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                const className = section.className.match(/hero\d+/) ? section.className.match(/hero\d+/)[0] : 'default';
                observerContainer.style.backgroundImage = `url(${gifs[className]})`;
                observerContainer.style.backgroundSize = 'cover';
                observerContainer.style.backgroundPosition = 'center';
                adjustPosition(className);
                foundSection = true;
            }
        });

        if (!foundSection) {
            observerContainer.style.backgroundImage = `url(${gifs['default']})`;
            observerContainer.style.backgroundSize = 'cover';
            observerContainer.style.backgroundPosition = 'center';
            observerContainer.textContent = "Not currently viewing any hero section";
            adjustPosition('default');  // Adjust default positioning
        }
    }

function adjustPosition(className) {
    observerContainer.style.right = '';
    observerContainer.style.left = '';
    observerContainer.style.transform = '';

    if (className === 'hero2') {
        observerContainer.style.left = '10%';  // Adjust this value to position horizontally
        observerContainer.style.top = '85%';  // Adjust this value to position vertically
        observerContainer.style.transform = 'translate(-50%, -50%)';  // Fine-tune transform as needed
    } else if (['hero3', 'hero4'].includes(className)) {
        const hero2 = document.querySelector('.hero2').offsetTop;
        const hero3 = document.querySelector('.hero3').offsetTop;
        const scrollRange = hero3 - hero2;
        const progress = Math.min(1, (window.scrollY - hero2) / scrollRange);
        observerContainer.style.right = '10px';
        observerContainer.style.top = '50%';
        observerContainer.style.transform = 'translateY(-50%)';
    } else {
        observerContainer.style.right = '10px';
        observerContainer.style.top = '50%';
        observerContainer.style.transform = 'translateY(-50%)';
    }
}

    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    }

    window.addEventListener('scroll', debounce(updateObserver, 20));
    updateObserver(); // Initialize on page load
});
