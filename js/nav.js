const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
      <div class="nav">
          <img src="img/dark-logo.png"  class="brand-logo" alt="">
          <div class="nav-items">
              <div class="search">
                  <input type="text" class="search-box" placeholder="search brand, product">
                  <a href="/searchpage.html">
                  <button class="search-btn"> Search </button>
                  </a>
              </div>
              <a href="/js/signUp.html"><img src="img/user.png" alt=""></a>
              <a href="#"><img src="img/cart.png" alt=""></a>
          </div>
      </div>
      <ul class="links-container">
          <li class="link-item"><a href="/index1.html" class="link">home</a></li>
          <li class="link-item"><a href="/womenscollection.html" class="link">women</a></li>
          <li class="link-item"><a href="/mencoll.html" class="link">men</a></li>
          <li class="link-item"><a href="#" class="link">kids</a></li>
          <li class="link-item"><a href="#" class="link">accessories</a></li>
      </ul>
  `;
};

createNav();
