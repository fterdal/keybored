console.log('Finn Terdal');
class Box {
  width: number;
  height: number;
  color: string;
  backgroundColor: string;

  constructor(
    width: number = 100,
    height: number = 100,
    color: string = 'black',
    backgroundColor: string = 'cyan'
  ) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }

  render(target?: Box) {
    if (!target) {
      const box = document.createElement('DIV');
      box.style.border = `2px solid ${this.color}`;
      box.style.width = `${this.width}px`;
      box.style.height = `${this.height}px`;
      box.style.backgroundColor = this.backgroundColor;
      const body = document.querySelector('body');
      console.log(body);
      body?.append(box);
    }
  }
}

const button = document.getElementById('create-box');
button?.addEventListener('click', function () {
  const box = new Box();
  console.log(box);
  box.render();
});
