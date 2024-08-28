let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
   
    e.preventDefault();
  
    deferredPrompt = e;

    document.getElementById('myButton').style.display = 'block';
});

document.getElementById('myButton').addEventListener('click', () => {
    if (deferredPrompt) {
     
        deferredPrompt.prompt();
     
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('تمت إضافة التطبيق إلى الشاشة الرئيسية');
            } else {
                console.log('لم يتم إضافة التطبيق إلى الشاشة الرئيسية');
            }
            deferredPrompt = null;
        });
    }
});
console.log('تمت إضافة التطبيق إلى الشاشة الرئيسية');





document.addEventListener('DOMContentLoaded', function () {
    function typeWriter(element, speed) {
        let text = element.innerHTML;
        element.innerHTML = '';
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    const pElement = document.getElementById('typewriter');
    if (pElement) {
        typeWriter(pElement, 35); 
    }
});


