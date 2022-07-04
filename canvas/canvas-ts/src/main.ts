import './style.css'

const el = document.querySelector<HTMLCanvasElement>('#canvas')!;

const app = el.getContext('2d')!;
app.fillStyle = 'red';
app.arc(100,100,50,0, 2 * Math.PI);
app.fill();
