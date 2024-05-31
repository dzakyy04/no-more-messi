function containsMessi() {
  return document.body.innerText.toLowerCase().includes('messi');
}

function closeRonaldo() {
  const ronaldoSiu = document.getElementById('ronaldoSiu');
  const closeButton = document.getElementById('closeButton');

    const ronaldoElements = document.querySelectorAll('[class^="ronaldo"]');
    ronaldoElements.forEach(element => {
      element.style.transition = 'left 0.5s ease-in-out';
      element.style.left = '-100%';
    });

    setTimeout(() => {
      ronaldoElements.forEach(element => {
        element.remove();
      });
      ronaldoSiu.remove();
      if (closeButton) {
        closeButton.remove();
      }
    }, 500);
}



function getRandomPosition() {
  const offset = 200; // Ukuran elemen
  const maxX = window.innerWidth - offset;
  const maxY = window.innerHeight - offset;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return { x: randomX, y: randomY };
}

function createRonaldoGif(src, className) {
  const { x, y } = getRandomPosition();
  const element = document.createElement('img');
  element.className = className;
  element.src = src;
  element.style.position = 'fixed';
  element.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  element.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  element.width = '200';
  element.height = '200';
  element.style.border = 'none';
  element.style.zIndex = '9998';
  element.scrolling = 'no';
  document.body.appendChild(element);
}

function addRonaldo() {
  const ronaldoSiu = document.createElement('iframe');
  ronaldoSiu.id = 'ronaldoSiu';
  ronaldoSiu.src = 'https://extensions-no-more-messi.netlify.app';
  ronaldoSiu.style.position = 'fixed';
  ronaldoSiu.style.top = '50%';
  ronaldoSiu.style.left = '50%';
  ronaldoSiu.style.width = '400px';
  ronaldoSiu.style.height = '300px';
  ronaldoSiu.style.transform = 'translate(-50%, -50%)';
  ronaldoSiu.style.border = 'none';
  ronaldoSiu.style.zIndex = '9999';
  ronaldoSiu.scrolling = 'no';
  document.body.appendChild(ronaldoSiu);

  for (let i = 1; i <=7; i++) {
    createRonaldoGif('https://media.tenor.com/kCxPlOI0PoUAAAAi/shopee-dance.gif', `ronaldoShopee${i}`);
    createRonaldoGif('https://media.tenor.com/i37ndnhnHOMAAAAi/siuu-hi.gif', `ronaldoCelebration${i}`);

    animateRonaldo(`.ronaldoShopee${i}`);
    animateRonaldo(`.ronaldoCelebration${i}`);
  }

  const closeButton = document.createElement('button');
  closeButton.id = 'closeButton';
  closeButton.textContent = 'Close';
  closeButton.style.position = 'fixed';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.zIndex = '1000';
  closeButton.addEventListener('click', closeRonaldo);
  document.body.appendChild(closeButton);
}

function makeNewPosition(){
    var h = window.innerHeight - 50;
    var w = window.innerWidth - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh, nw];    
}

function animateRonaldo(myclass){
    var newq = makeNewPosition();
    var element = document.querySelector(myclass);
    var currentTop = parseInt(getComputedStyle(element).top);
    var currentLeft = parseInt(getComputedStyle(element).left);
    
    var distance = Math.sqrt(Math.pow(newq[0] - currentTop, 2) + Math.pow(newq[1] - currentLeft, 2));
    var speed = 1000; // Set your desired speed here
    var time = distance / speed * 3000; // Convert speed to time (milliseconds)
    
    element.style.transition = "transform " + time + "ms";
    element.style.transform = "translate(" + (newq[1] - currentLeft) + "px, " + (newq[0] - currentTop) + "px)";
    
    setTimeout(function() {
        animateRonaldo(myclass);
    }, time);
}

if (containsMessi()) {
  addRonaldo();
}
