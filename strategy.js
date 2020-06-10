const printField = document.querySelector('.print-field');
const radioBtns = document.querySelector('.change-printer');
const printerTitle = document.querySelector('.print-title');

class Printers {
  constructor(strategy) {
    this.strategy = strategy;
  };
  print = () => {
    return this.strategy();
  }
};

const colorfulStrategy = () => {
  printerTitle.innerHTML = 'Colorful';
  printField.style.background = 'linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)'
};

const blackAndWhiteStrategy = () => {
  printerTitle.innerHTML = 'Black and white';
  printField.style.background = 'linear-gradient(to right, black, white)'
};

const intermittentStrategy = () => {
  printerTitle.innerHTML = 'Intermittent printing';
  printField.style.background = 'linear-gradient(90deg, rgba(0,0,0,1) 8%, rgba(255,255,255,1) 8%, rgba(0,0,0,1) 12%, rgba(255,255,255,1) 12%, rgba(255,255,255,1) 28%, rgba(0,0,0,1) 28%, rgba(255,255,255,1) 34%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 55%, rgba(255,255,255,1) 55%, rgba(0,0,0,1) 57%, rgba(0,0,0,1) 70%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 93%, rgba(0,0,0,1) 93%)'
};

const colorfulPrinter = new Printers(colorfulStrategy);
const blackAndWhitePrinter = new Printers(blackAndWhiteStrategy);
const intermittentPrinter = new Printers(intermittentStrategy);

radioBtns.addEventListener('change', (e) => {
  const { value } = e.target;
  switch (value) {
    case 'colorfulStrategy':
      colorfulPrinter.print();
      break;
    case 'blackAndWhiteStrategy':
      blackAndWhitePrinter.print();
      break;
    case 'intermittentStrategy':
      intermittentPrinter.print();
      break;
    default:
      break;
  }
})
