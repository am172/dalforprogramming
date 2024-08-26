console.log("JavaScript file loaded");

let close = document.getElementById("menu-close");
let btn = document.getElementById("menu-btn");
let amr = document.querySelectorAll('nav .navigation ul');

btn.onclick = function () {
  amr.forEach(function (navItem) {
    navItem.classList.add("active");
  });
};

close.onclick = function () {
  amr.forEach(function (navItem) {
    navItem.classList.remove("active");
  });
};



// let bot = document.getElementById('open');
// let botc = document.getElementById('close');
// const box = document.querySelector('.expert-box');


// bot.onclick = function(){
//     box.style.display="flex";
//     bot.style.display="none";
//     botc.style.display="flex";
// };

// botc.onclick = function(){
//     box.style.display="none";
//     bot.style.display="flex";
//     botc.style.display="none";
// };
// Get all the sections

const sections = document.querySelectorAll('section');

// Loop over each section
sections.forEach(section => {
  // Get the buttons in the section
  const openBtn = section.querySelector('#open');
  const closeBtn = section.querySelector('#close');
  const box = section.querySelector('.expert-box');

  // Add click event listeners to the buttons if they exist
  if (openBtn && closeBtn && box) {
    openBtn.onclick = function () {
      box.style.display = "flex";
      openBtn.style.display = "none";
      closeBtn.style.display = "flex";
    };

    closeBtn.onclick = function () {
      box.style.display = "none";
      openBtn.style.display = "flex";
      closeBtn.style.display = "none";
    };
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('load').addEventListener('click', function () {
    location.reload();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('yellow').addEventListener('click', function () {
    location.reload();
  });
});



// let opn = document.getElementById('opn');
// let cls = document.getElementById('cls');
// let mzd = document.getElementsByClassName('mazid')

// opn.onclick = function(){
//   mzd.style.display= "";
//   opn.style.display="none";
// cls.style.display= "flex";
// }
let opn = document.getElementById('opn');
let cls = document.getElementById('cls');
let mzd = document.getElementsByClassName('mazid');

opn.onclick = function () {
  mzd[0].style.display = "block";
  opn.style.display = "none";
  cls.style.display = "flex";
}
cls.onclick = function () {
  mzd[0].style.display = "none";
  opn.style.display = "flex";
  cls.style.display = "none";
}

let footer = document.querySelectorAll('.footer-col');

Array.from(footer).forEach(footer => {
  footer.style.display = "none";
});



// search

document.getElementById('searchInput').addEventListener('keyup', function () {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var content = document.getElementById('content');  // استبدل content بمعرف القسم الذي يحتوي على المحتوى
  var paragraphs = content.getElementsByTagName('p');  // يمكنك تحديد نوع العناصر حسب نوع المحتوى (مثلاً <div>، <li>، إلخ)

  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.textContent || paragraph.innerText;
    var innerHTML = paragraph.innerHTML;

    if (text.toLowerCase().indexOf(input) > -1) {
      var regex = new RegExp(input, "gi");
      var highlightedText = text.replace(regex, function (match) {
        return '<span class="highlight">' + match + '</span>';
      });
      paragraph.innerHTML = highlightedText;
    } else {
      paragraph.innerHTML = text;
    }
  }
});



document.getElementById('toggle-theme').addEventListener('click', function () {

  console.log("amrroshdysayed");
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    this.textContent = 'الوضع النهاري';
  } else {
    this.textContent = 'الوضع الليلي';
  }
});




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
    typeWriter(pElement, 50); // Adjust speed as needed
  }
});





const navElement = document.querySelectorAll('nav');
console.log(navElement);








