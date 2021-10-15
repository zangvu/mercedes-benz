function renderItems(classNames, destination, folder) {
  let html = '';

  for (let i = 1; i <= 32; i++) {
    html += `<div class="${classNames}">
      <a href="#">
        <img src="./img/${folder}/${folder}${i}.webp" alt="news${i}">
        <div class="news__overlay">
            <h4>Mercedes-EQ Formula E Team.</h4>
            <p>In our new video series, INSIDE AMG, Product Manager Felix Schönhofer meets
                talented
                Mercedes-AMG experts.</p>
        </div>
      </a>
  </div>`;
  }

  destination.innerHTML = html;
}
renderItems(
  'news__item news__item--news',
  document.getElementsByClassName('news__grid--news')[0],
  'news'
);
renderItems(
  'news__item news__item--popular',
  document.getElementsByClassName('news__grid--popular')[0],
  'pop'
);
renderItems(
  'news__item news__item--videos',
  document.getElementsByClassName('news__grid--videos')[0],
  'videos'
);

let initItems = document.getElementsByClassName('news__item');
for (let i = 0; i < initItems.length; i++) {
  if (i % 32 == 0 && i / 32 <= 3) {
    i = i + 14;
  }
  const e = initItems[i];
  e.classList.add('d-none');
}

function onNewsClick(section, btnName) {
  let items = document.getElementsByClassName(section);

  if (items.length >= 14) {
    for (let i = 14; i < items.length; i++) {
      const e = items[i];
      e.classList.remove('d-none');
      e.classList.add('shown');
    }
    let btn = document.getElementsByClassName(btnName)[0];
    btn.classList.add('d-none');
  }
}

// copy from https://cssanimation.rocks/scroll-animations/
// Detect request animation frame

var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    // window.addEventListener('scroll', function () {
    //   var st = window.pageYOffset || document.documentElement.scrollTop;
    //   if (st > lastScrollTop) {
    //     console.log('down');
    // downscroll code
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
    // }
    // });
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
