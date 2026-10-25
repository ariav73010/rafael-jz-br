const cars = [
  ['Nissan Skyline GT-R R33','JDM · Skyline','nissan skyline gt-r33.jpg'],
  ['Nissan Skyline GT-R R32','JDM · Skyline','nissan skyline gt-r32.jpg'],
  ['BMW E36','BMW · alemão','bmw e36.jpg'],
  ['Ferrari 458 Italia','esportivo italiano','ferrari 458 italia.jpg'],
  ['Mazda RX-7 Veilside','Velozes e Furiosos','mazda rx7.jpg'],
  ['Mitsubishi Eclipse','Velozes e Furiosos','mitsubishi eclipse.jpg'],
  ['Dodge Challenger','muscle car','dodge challenger.jpg'],
  ['Dodge Charger','Velozes e Furiosos','dodge charger.jpg'],
  ['Mazda Miata','roadster · JDM','mazda miata.jpg'],
  ['Audi RS6','esportivo · alemão','audi rs6.jpg'],
  ['Nissan Silvia S15','JDM · Silvia','nissan silvia s15.jpg'],
  ['Nissan Silvia S14','JDM · Silvia','nissan silvia s14.jpg'],
  ['Nissan Silvia S13','JDM · Silvia','nissan silvia s13.jpg'],
  ['Toyota Supra MK4','Velozes e Furiosos','toyota supra mk4.jpg'],
  ['Honda Civic EJ1','Velozes e Furiosos','honda civic ej1.jpg']
];

const grid = document.querySelector('#car-grid');
cars.forEach(([name, tag, image]) => {
  const card = document.createElement('article');
  card.className = 'car-card';
  const img = document.createElement('img');
  img.src = `assets/cars/${encodeURIComponent(image)}`;
  img.alt = name;
  img.loading = 'lazy';
  const info = document.createElement('div');
  const title = document.createElement('h4');
  title.textContent = name;
  const label = document.createElement('span');
  label.textContent = tag;
  info.append(title, label);
  card.append(img, info);
  grid.append(card);
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  toggle.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
  toggle.textContent = '☰';
}));
