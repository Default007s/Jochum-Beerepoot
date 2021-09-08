let threeComps = document.querySelector(".threeComps");
let value = screen.width;

setTimeout(function changeSides() {
  if (value <= 414) {
    threeComps.innerHTML = ` <section>
        <div class="sr"></div>
        <div class="sl">
          <h1 class="code">XXXX-XX-XX</h1>
          <h1 class="compHead">
            Lorem ipsum dolor sit amet, consectetur elitr.
          </h1>
          <h1 class="readMore">
            Read more
            <span class="rmarrow"><i class="fas fa-chevron-right"></i></span>
          </h1>
        </div>
      </section>
      <section>
        <div class="sr"></div>
        <div class="sl">
          <h1 class="code">XXXX-XX-XX</h1>
          <h1 class="compHead">
            Lorem ipsum dolor sit amet, consectetur elitr.
          </h1>
          <h1 class="readMore">
            Read more
            <span class="rmarrow"><i class="fas fa-chevron-right"></i></span>
          </h1>
        </div>
      </section>`;
  } else if (value > 414) {
    threeComps.innerHTML = `<section>
        <div class="sl">
          <h1 class="code">XXXX-XX-XX</h1>
          <h1 class="compHead">
            Lorem ipsum dolor sit amet, consectetur elitr.
          </h1>
          <h1 class="readMore">
            Read more
            <span class="rmarrow"><i class="fas fa-chevron-right"></i></span>
          </h1>
        </div>
        
        <div class="sr"></div>
      </section>
      <section>
        <div class="sr"></div>
        <div class="sl">
          <h1 class="code">XXXX-XX-XX</h1>
          <h1 class="compHead">
            Lorem ipsum dolor sit amet, consectetur elitr.
          </h1>
          <h1 class="readMore">
            Read more
            <span class="rmarrow"><i class="fas fa-chevron-right"></i></span>
          </h1>
        </div>
      </section>`;
  }
}, 50);
