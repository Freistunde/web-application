<template>
  <div id="app">
    <Navbar class="position-fixed w-100 border-bottom border-light" style="z-index: 3000;"></Navbar>
    <div class="position-relative header-height-with-offset" id="header">
      <div class="position-absolute w-100 header-height header-offset">
        <Map class="header-height">
        </Map>
      </div>
      <div class="position-absolute w-50 header-offset">
        <div class="w-75 header-height">
          <MapOverlayBasic>
          </MapOverlayBasic>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="text-center my-4">
            <b-btn variant="primary" class="fs-bg" href="#getstarted">Mehr Informationen!</b-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid fs-bg text-light " id="getstarted">
      <div class="row section-height">
        <div class="col-12 align-self-center">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <h3>Spruch</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <hr />
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <b-btn variant="light" size="lg">Jetzt anmelden!</b-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 align-self-end text-center my-5">
          <a href="#categories" class="text-light"><i class="fas fa-angle-down fa-2x"></i></a>
        </div>
      </div>
    </div>

    <div class="container-fluid" id="categories">
      <div class="row">
        <div class="col">
          <div class="text-center my-4">
            <h3>Kategorien</h3>
          </div>
        </div>
      </div>
    </div>

    <CategorySection id="content2">
    </CategorySection>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Map from "./components/map";
import MapOverlayBasic from "./components/mapOverlay/mapOverlayBasic";
import CategorySection from "./components/categoriesSection";
/*
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
*/
export default {
  components: {
    Navbar,
    Map,
    MapOverlayBasic,
    CategorySection
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      message: "Hello"
    };
  }
};
</script>

<style lang="scss">
.header-height {
  height: 500px;
}

.header-height-with-offset {
  height: 560px;
}

.fs-bg {
  background: #005b96;
}

.section-height {
  height: 100vh;
}

.header-offset {
  margin-top: 60px;
}
</style>
