function toggleMenu() {
  const nav = document.querySelector('.navbarGroup');
  nav.classList.toggle('active');
}

document.querySelectorAll('.navbarText').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbarGroup').classList.remove('active');
  });
});


// SEARCH ARTIKEL
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

// SEARCH VIDEO
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