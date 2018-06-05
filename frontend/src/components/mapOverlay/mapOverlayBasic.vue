<template>
  <div class="overlay-container">
    <SimpleSearch>
    </SimpleSearch>
  </div>
</template>

<script>
import SimpleSearch from "./mapOverlaySimpleSearch";

export default {
  components: {
    SimpleSearch
  },
  data() {
    return {

    }
  }
};
</script>

<style lang="scss">
.overlay-container {
  width: 100%;
  height: 100%;
  background: rgba(52,61,70,0.8);
}
</style>
