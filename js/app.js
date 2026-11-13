const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const cards = document.querySelectorAll('.plan');

cards.forEach(card => {
  const btn = card.querySelector('.plan__btn');

  btn.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

const box = document.querySelector('.slider');
const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.slider__dot');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');

let index = 0;

function show() {
  const step = slides[0].offsetWidth + 30;
  const max = track.scrollWidth - box.offsetWidth;
  const x = Math.min(index * step, max);
  track.style.transform = `translateX(-${x}px)`;

  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

next.onclick = () => {
  if (index < slides.length - 1) index++;
  show();
};

prev.onclick = () => {
  if (index > 0) index--;
  show();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    show();
  };
});

window.addEventListener('resize', show);
