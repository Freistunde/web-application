<template>
  <div id="app">
    <div class="ct" id="t1">
      <div class="ct" id="t2">
        <div class="ct" id="t3">
          <div class="ct" id="t4">
            <div class="ct" id="t5">

              <!-- Menu -->
              <ul id="menu">
                <a href="#t1">
                  <li class="icon fa fs-icon" id="home">
                    <img src="./assets/Freistunde_Icon.svg" />
                  </li>
                </a>
                <a href="#t2">
                  <li class="icon far fa-map" id="search"></li>
                </a>
                <a href="#t3">
                  <li class="icon far fa-clone" id="categories"></li>
                </a>
                <a href="#t4">
                  <li class="icon far fa-lightbulb" id="idea"></li>
                </a>
                <a href="#t5">
                  <li class="icon fa fa-users" id="aboutus"></li>
                </a>
              </ul>

              <!-- Content -->
              <!-- Home -->
              <div class="page" id="p1">
                <section class="icon fa">
                  <img src="./assets/Freistunde_Icon.svg" class="home-icon" />
                  <span class="title">Freistunde</span>
                  <p class="hint">
                    Wo deine Zeit dir gehört!
                  </p>
                </section>
              </div>

              <!-- Search -->
              <div class="page" id="p2">
                <MapsSection class="h-100"></MapsSection>
              </div>

              <!-- Categories -->
              <div class="page" id="p3">
                <CategorySection class="h-100 w-body"></CategorySection>
              </div>

              <!-- Idea -->
              <div class="page" id="p4">
                <IdeaSection class="h-100 w-body"></IdeaSection>
              </div>

              <!-- Team -->
              <div class="page" id="p5">
                <TeamSection class="h-100 w-body"></TeamSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ActivityModal ref="detailview"></ActivityModal>
  </div>
</template>

<script>
import MapOverlayBasic from "./components/mapOverlay/mapOverlayBasic";
import CategorySection from "./components/categoriesSection";
import MapsSection from "./components/mapsSection";
import IdeaSection from "./components/ideaSection";
import TeamSection from "./components/teamSection";
import ActivityModal from "./components/activityModal";

export default {
  components: {
    MapsSection,
    MapOverlayBasic,
    CategorySection,
    IdeaSection,
    TeamSection,
    ActivityModal
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      message: "Hello"
    }
  }
};
</script>

<style lang="scss">
.home-icon {
  height: 20vh;
}

.w-body {
  width: 90vw;
}

.fs-icon img {
  width: 40px;
  height: auto;
}
</style>
