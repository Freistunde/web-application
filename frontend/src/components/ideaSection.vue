<template>
  <div class="h-100 flying-content">
    <div class="row">
      <div class="col-12 align-self-center fa text-center">
        <span class="title mt-5 mb-5">
          <span class="far fa-lightbulb"></span> Die Idee
        </span>
      </div>
    </div>
    <div class="row w-100 no-gutters p-2 border border-bottom-0 border-left-0 border-right-0">
      <b-btn @click="showModal('1')">Test Modal</b-btn>
      <!--
        TODO:
        Add a text about our idea
        -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showModal: function(id) {
      this.$parent.$refs.detailview.showModal(id);
    }
  }
};
</script>

<style lang="scss">
</style>
