const artworks = [
  {
    "id": 1,
    "title": "Silence of the mix",
    "media": "Mixed media on canvas",
    "size": "210cm x 160cm",
    "year": 2024,
    "image": "images/work-01.jpg"
  },
  {
    "id": 2,
    "title": "Diversity together",
    "media": "Mixed media on canvas",
    "size": "300cm x 160cm",
    "year": 2024,
    "image": "images/work-02.jpg"
  },
  {
    "id": 3,
    "title": "Dimensio of Speech",
    "media": "Mixed media on canvas",
    "size": "160cm x 160cm",
    "year": 2024,
    "image": "images/work-03.jpg"
  },
  {
    "id": 4,
    "title": "Emotional silence",
    "media": "Mixed media on canvas",
    "size": "300cm x 160cm",
    "year": 2024,
    "image": "images/work-04.jpg"
  },
  {
    "id": 5,
    "title": "Leading idea",
    "media": "Mixed media on canvas",
    "size": "160cm x 160cm",
    "year": 2024,
    "image": "images/work-05.jpg"
  },
  {
    "id": 6,
    "title": "Gulit",
    "media": "Mixed media on canvas",
    "size": "150cm x 150cm",
    "year": 2024,
    "image": "images/work-06.jpg"
  },
  {
    "id": 7,
    "title": "Untitled",
    "media": "Mixed media on canvas",
    "size": "210cm x 160cm",
    "year": 2024,
    "image": "images/work-07.jpg"
  },
  {
    "id": 8,
    "title": "Heatstroke",
    "media": "Mixed media on canvas",
    "size": "210cm x 160cm",
    "year": 2024,
    "image": "images/work-08.jpg"
  },
  {
    "id": 9,
    "title": "Visual dimension",
    "media": "Mixed media",
    "size": "210cm x 160cm",
    "year": 2024,
    "image": "images/work-09.jpg"
  },
  {
    "id": 10,
    "title": "Deep integration",
    "media": "Mixed media on canvas",
    "size": "120cm x 110cm",
    "year": 2024,
    "image": "images/work-10.jpg"
  },
  {
    "id": 11,
    "title": "Noise in the city",
    "media": "Mixed media on canvas",
    "size": "150cm x 150cm",
    "year": 2024,
    "image": "images/work-11.jpg"
  },
  {
    "id": 12,
    "title": "Game being in human",
    "media": "Mixed media on canvas",
    "size": "150cm x 150cm",
    "year": 2024,
    "image": "images/work-12.jpg"
  },
  {
    "id": 13,
    "title": "Game being in human",
    "media": "Mixed media on canvas",
    "size": "150cm x 150cm",
    "year": 2024,
    "image": "images/work-13.jpg"
  },
  {
    "id": 14,
    "title": "So and so",
    "media": "Mixed media on canvas",
    "size": "120cm x 110cm",
    "year": 2024,
    "image": "images/work-14.jpg"
  },
  {
    "id": 15,
    "title": "Untitled",
    "media": "Charchol on paper",
    "size": "150cm x 150cm",
    "year": 2023,
    "image": "images/work-15.jpg"
  },
  {
    "id": 16,
    "title": "Untitled",
    "media": "Charchol on paper",
    "size": "150cm x 150cm",
    "year": 2022,
    "image": "images/work-16.jpg"
  },
  {
    "id": 17,
    "title": "Untitle",
    "media": "Mixed media on canvas",
    "size": "120cm x 110cm",
    "year": 2023,
    "image": "images/work-17.jpg"
  },
  {
    "id": 18,
    "title": "The nonlinear inheritance",
    "media": "Mixed media on canvas",
    "size": "120cm x 110cm",
    "year": 2023,
    "image": "images/work-18.jpg"
  },
  {
    "id": 19,
    "title": "Untitle",
    "media": "Mixed media on canvas",
    "size": "120cm x 110cm",
    "year": 2023,
    "image": "images/work-19.jpg"
  },
  {
    "id": 20,
    "title": "Identity in the depth of silence",
    "media": "Mixed media on canvas",
    "size": "280cm x 190cm",
    "year": 2023,
    "image": "images/work-20.jpg"
  },
  {
    "id": 21,
    "title": "Untitle",
    "media": "Mixed media on canvas",
    "size": "60cm x 50cm",
    "year": 2023,
    "image": "images/work-21.jpg"
  },
  {
    "id": 22,
    "title": "Speech pattern",
    "media": "Mixed media on canvas",
    "size": "140cm x 120cm",
    "year": 2023,
    "image": "images/work-22.jpg"
  },
  {
    "id": 23,
    "title": "Identity in fate",
    "media": "Mixed media on canvas",
    "size": "150cm x 125cm",
    "year": 2023,
    "image": "images/work-23.jpg"
  },
  {
    "id": 24,
    "title": "Gift with sleep in a frame",
    "media": "Mixed media on canvas",
    "size": "120cm x 110cm",
    "year": 2023,
    "image": "images/work-24.jpg"
  },
  {
    "id": 25,
    "title": "Layered ideas",
    "media": "Mixed media on canvas",
    "size": "120cm x 110cm",
    "year": 2023,
    "image": "images/work-25.jpg"
  },
  {
    "id": 26,
    "title": "Order with my radius",
    "media": "Mixed media on canvas",
    "size": "180cm x 180cm",
    "year": 2023,
    "image": "images/work-26.jpg"
  },
  {
    "id": 27,
    "title": "Pieces with loads",
    "media": "Acrylic and oil on canvas",
    "size": "50cm x 50cm",
    "year": 2023,
    "image": "images/work-27.jpg"
  },
  {
    "id": 28,
    "title": "Shadow of the wind",
    "media": "Mixed media on canvas",
    "size": "180cm x 180cm",
    "year": 2023,
    "image": "images/work-28.jpg"
  },
  {
    "id": 29,
    "title": "profile shape speech",
    "media": "Mixed media on canvas",
    "size": "140cm x 120cm",
    "year": 2023,
    "image": "images/work-29.jpg"
  },
  {
    "id": 30,
    "title": "Order and disorder I",
    "media": "Mixed media on canvas",
    "size": "140cm x 130cm",
    "year": 2023,
    "image": "images/work-30.jpg"
  },
  {
    "id": 31,
    "title": "Order and disorder II",
    "media": "Mixed media on canvas",
    "size": "140cm x 120cm",
    "year": 2023,
    "image": "images/work-31.jpg"
  },
  {
    "id": 32,
    "title": "Order and disorder III",
    "media": "Mixed media on canvas",
    "size": "140cm x 120cm",
    "year": 2023,
    "image": "images/work-32.jpg"
  },
  {
    "id": 33,
    "title": "Speech patterns",
    "media": "Mixed media on canvas",
    "size": "140cm x 120cm",
    "year": 2023,
    "image": "images/work-33.jpg"
  },
  {
    "id": 34,
    "title": "Beauty in time",
    "media": "Mixed media on canvas",
    "size": "140cm x 120cm",
    "year": 2023,
    "image": "images/work-34.jpg"
  },
  {
    "id": 35,
    "title": "Integration with in difference",
    "media": "Mixed media on canvas",
    "size": "50cm x 50cm",
    "year": 2023,
    "image": "images/work-35.jpg"
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const yearFilters = document.getElementById("yearFilters");
const workCount = document.getElementById("workCount");
const noResults = document.getElementById("noResults");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const artDialog = document.getElementById("artDialog");
const dialogClose = document.getElementById("dialogClose");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialogTitle");
const dialogMeta = document.getElementById("dialogMeta");
const dialogIndex = document.getElementById("dialogIndex");
const dialogPrev = document.getElementById("dialogPrev");
const dialogNext = document.getElementById("dialogNext");

let selectedYear = "all";
let visibleWorks = [...artworks];
let currentIndex = 0;

const years = [...new Set(artworks.map(work => work.year))].sort((a,b) => b-a);

function renderYearFilters(){
  yearFilters.innerHTML = [
    `<button class="year-button active" data-year="all" type="button">All</button>`,
    ...years.map(year => `<button class="year-button" data-year="${year}" type="button">${year}</button>`)
  ].join("");
  yearFilters.querySelectorAll(".year-button").forEach(button => {
    button.addEventListener("click", () => {
      selectedYear = button.dataset.year;
      yearFilters.querySelectorAll(".year-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      filterWorks();
    });
  });
}

function filterWorks(){
  const query = searchInput.value.trim().toLowerCase();
  visibleWorks = artworks.filter(work => {
    const matchesYear = selectedYear === "all" || String(work.year) === selectedYear;
    const searchable = `${work.title} ${work.media} ${work.size} ${work.year}`.toLowerCase();
    return matchesYear && searchable.includes(query);
  });
  renderGallery();
}

function renderGallery(){
  workCount.textContent = `${visibleWorks.length} / ${artworks.length} works`;
  noResults.hidden = visibleWorks.length !== 0;
  gallery.innerHTML = visibleWorks.map((work,index) => `
    <article class="art-card" data-index="${index}" tabindex="0" role="button" aria-label="Open ${work.title}">
      <div class="art-image-wrap"><img src="${work.image}" alt="${work.title} — ${work.year}" loading="lazy"></div>
      <div class="art-info">
        <div class="art-title">${work.title}</div>
        <div class="art-meta">${work.year}<br>${work.media}</div>
      </div>
    </article>
  `).join("");
  gallery.querySelectorAll(".art-card").forEach(card => {
    const open = () => openArtwork(Number(card.dataset.index));
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if(event.key === "Enter" || event.key === " "){event.preventDefault();open();}
    });
  });
}

function openArtwork(index){
  currentIndex = index;
  const work = visibleWorks[currentIndex];
  dialogImage.src = work.image;
  dialogImage.alt = `${work.title} — ${work.year}`;
  dialogTitle.textContent = work.title;
  dialogMeta.textContent = `${work.year} · ${work.media} · ${work.size}`;
  dialogIndex.textContent = `${String(currentIndex+1).padStart(2,"0")} / ${String(visibleWorks.length).padStart(2,"0")}`;
  if(typeof artDialog.showModal === "function") artDialog.showModal();
  else artDialog.setAttribute("open","");
}

function changeArtwork(direction){
  if(!visibleWorks.length) return;
  currentIndex = (currentIndex + direction + visibleWorks.length) % visibleWorks.length;
  openArtwork(currentIndex);
}

function closeArtwork(){if(artDialog.open) artDialog.close();}
dialogPrev.addEventListener("click",()=>changeArtwork(-1));
dialogNext.addEventListener("click",()=>changeArtwork(1));
dialogClose.addEventListener("click",closeArtwork);
artDialog.addEventListener("click",event=>{if(event.target===artDialog)closeArtwork();});
document.addEventListener("keydown",event=>{
  if(!artDialog.open)return;
  if(event.key==="ArrowLeft")changeArtwork(-1);
  if(event.key==="ArrowRight")changeArtwork(1);
  if(event.key==="Escape")closeArtwork();
});
let touchStartX=null;
artDialog.addEventListener("touchstart",event=>{touchStartX=event.changedTouches[0].screenX;},{passive:true});
artDialog.addEventListener("touchend",event=>{
  if(touchStartX===null)return;
  const delta=event.changedTouches[0].screenX-touchStartX;
  if(Math.abs(delta)>45)changeArtwork(delta>0?-1:1);
  touchStartX=null;
},{passive:true});
searchInput.addEventListener("input",filterWorks);

function setMenu(open){
  mobileMenu.classList.toggle("open",open);
  mobileMenu.setAttribute("aria-hidden",String(!open));
  menuButton.setAttribute("aria-expanded",String(open));
}
menuButton.addEventListener("click",()=>setMenu(true));
closeMenu.addEventListener("click",()=>setMenu(false));
mobileMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>setMenu(false)));

renderYearFilters();
renderGallery();
