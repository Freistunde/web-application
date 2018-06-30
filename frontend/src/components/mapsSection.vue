<template>
  <div class="position-relative">
    <Map class="position-absolute h-100 w-100" ref="map"></Map>
    <div class="flying-content">
      <div class="position-absolute">
        <MapOverlay id="mapOverlay"></MapOverlay>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./map";
import MapOverlay from "./mapOverlay/mapOverlayBasic";

export default {
  components: {
    Map,
    MapOverlay
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
#mapOverlay {
  width: 90vw;
}
</style>
