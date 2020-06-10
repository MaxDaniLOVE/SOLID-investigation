const typeRadioBtns = document.querySelector('.change-type');
const factoryRadioBtns = document.querySelector('.change-factory');
const factoryTitle = document.querySelector('.factory-result');
const typeTitle = document.querySelector('.type-result');

class Sedan {
  getType() {
    return 'I am a sedan';
  }
};

class Hatchback {
  getType() {
    return 'I am a hatchback';
  }
};

class Toyota {
  getDescription() {
    return 'Toyota made me';
  }
};

class Mazda {
  getDescription() {
    return 'Mazda made me';
  }
};

class AbstractCarFactory {
  createSedan() {
    return new Sedan();
  }

  chooseToyotaCompany() {
    return new Toyota();
  }

  createHatchback() {
    return new Hatchback();
  }

  chooseMazdaCompany() {
    return new Mazda();
  }
}

const factory = new AbstractCarFactory();

typeRadioBtns.addEventListener('change', ({ target }) => {
  const { value } = target;
  let car;
  switch (value) {
    case 'sedan':
      car = factory.createSedan();
      break;
    case 'hatchback':
      car = factory.createHatchback();
      break;
    default:
      break;
  }
  typeTitle.innerHTML = car.getType();
})

factoryRadioBtns.addEventListener('change', ({ target }) => {
  const { value } = target;
  let creator;
  switch (value) {
    case 'toyota':
      creator = factory.chooseToyotaCompany();
      break;
    case 'mazda':
      creator = factory.chooseMazdaCompany();
      break;
    default:
      break;
  }
  factoryTitle.innerHTML = creator.getDescription();
});
