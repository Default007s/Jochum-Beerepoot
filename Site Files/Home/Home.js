let subhd1 = document.querySelector(".subHd1");
let subhd2 = document.querySelector(".subHd2");
let subhd3 = document.querySelector(".subHd3");

let allblocks = document.querySelector(".threeSections");

let value = screen.width;

setTimeout(function changeSides() {
  if (value <= 414) {
    allblocks.innerHTML = `<section class="s1">
        <div class="blocks">
          <div class="b b1"></div>
          <div class="b b2"></div>
          <div class="b b3"></div>
          <div class="b b4"></div>
        </div>
      <h1 class="subHd1" >Products</h1 >
      </section >
      <section class="s2">
        <h1 class="subHd2">Websites</h1>
        <div class="blocks">
          <div class="b b1"></div>
          <div class="b b2"></div>
          <div class="b b3"></div>
          <div class="b b4"></div>
        </div>
      </section>
      <section class="s3">
        <div class="blocks">
          <div class="b b1"></div>
          <div class="b b2"></div>
          <div class="b b3"></div>
          <div class="b b4"></div>
        </div>
        <h1 class="subHd3">Illustrations</h1>
      </section>`;
  } else if (value > 414) {
    allblocks.innerHTML = `<section class="s1">
      <h1 class="subHd1" >Product Design</h1 >
        <div class="blocks">
          <div class="b b1"></div>
          <div class="b b2"></div>
          <div class="b b3"></div>
          <div class="b b4"></div>
        </div>
      </section >
      <section class="s2">
        <h1 class="subHd2">Web Design</h1>
        <div class="blocks">
          <div class="b b1"></div>
          <div class="b b2"></div>
          <div class="b b3"></div>
          <div class="b b4"></div>
        </div>
      </section>
      <section class="s3">
        <h1 class="subHd3">Others</h1>
        <div class="blocks">
          <div class="b b1"></div>
          <div class="b b2"></div>
          <div class="b b3"></div>
          <div class="b b4"></div>
        </div>
      </section>`;
  }
}, 50);
