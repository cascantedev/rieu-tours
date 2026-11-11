(function () {
  const hero = document.getElementById('rsHero');
  const slides = document.querySelectorAll('.rs-slide');
  const dotsBox = document.querySelector('.rs-dots');
  const nextBtn = document.querySelector('.rs-next');
  const prevBtn = document.querySelector('.rs-prev');

  if (!slides.length) { return; }

  let cur = 0, timer;

  const dots = [];
  slides.forEach((_, n) => {
    const d = document.createElement('span');
    d.onclick = () => go(n);
    if (dotsBox) dotsBox.appendChild(d);
    dots.push(d);
  });

  function go(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('on');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('on');

    
    clearInterval(timer);
    timer = setInterval(() => go(cur + 1), 4000);
  }

  if (nextBtn) nextBtn.onclick = () => go(cur + 1);
  if (prevBtn) prevBtn.onclick = () => go(cur - 1);
  go(0);
})();





const tours = {
  tour1:{title:"2-Days Tarangire National Park & Ngorongoro Safari",img:"images/tarangire ngorongoro.jpg",
    days:"2 Days",group:"10 Max",adult:"$1,300",child:"$650",
    desc:"On this short safari of 2 days you will visit the Ngorongoro Crater and Tarangire National Park, known as the land of giants, the baobab trees and large herds of elephants."},
  tour2:{title:"2-Day Tarangire National Park & Ngorongoro Crater Safari",img:"images/ngorongoro crater.jpg",
    days:"2 Days",group:"20 Max",adult:"$1,300",child:"$650",
    desc:"Weka maelezo ya safari hii hapa."},
  tour3:{title:"6-Day Serengeti, Ngorongoro, Tarangire & Lake Manyara",img:"images/serengeti.jpg",
    days:"6 Days",group:"20 Max",adult:"$0",child:"$0",
    desc:"Weka maelezo ya safari hii hapa."}
};

const modal = document.getElementById('tourModal');
let current = null;

document.querySelectorAll('.tour-card').forEach(card=>{
  card.addEventListener('click',()=>{
    current = tours[card.dataset.id];
    mImg.src = current.img;
    mTitle.textContent = current.title;
    mDays.textContent = current.days;
    mGroup.textContent = current.group;
    mDesc.textContent = current.desc;
    mAdult.textContent = current.adult;
    mChild.textContent = current.child;
    modal.classList.add('open');
  });
});

closeModal.onclick = ()=> modal.classList.remove('open');
modal.addEventListener('click',e=>{ if(e.target===modal) modal.classList.remove('open'); });

document.querySelectorAll('.counter button').forEach(b=>{
  b.onclick = ()=>{
    const el = document.getElementById(b.dataset.t);
    const min = b.dataset.t==='fAdults' ? 1 : 0;
    el.textContent = Math.max(min, +el.textContent + +b.dataset.d);
  };
});

bookingForm.addEventListener('submit',e=>{
  e.preventDefault();
  const msg = `Booking Request%0ATour: ${current.title}%0ADate: ${fDate.value}`
    + `%0AAdults: ${fAdults.textContent}, Children: ${fChildren.textContent}`
    + `%0AName: ${fName.value}%0AEmail: ${fEmail.value}%0APhone: ${fPhone.value}`;
  window.open(`https://wa.me/255679542803?text=${msg}`,'_blank');
});
