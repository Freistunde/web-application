<template>
  <div>
    <b-modal ref="myModalRef" hide-footer :title="informations.Name">
      <div class="d-block text-center">
        <p>{{informations.Kommentar}}</p>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Schließen</b-btn>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      informations: []
    }
  },
  methods: {
    showModal(id) {
      axios
        .get("http://localhost:3000/api/activities/id/" + id)
        .then(response => {				
          this.informations = response.data[0];
		  console.log(response.data[0].Name);
        });
		
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.informations = {}
      this.$refs.myModalRef.hide();
    }
  }
};
</script>

<style lang="scss">
</style>
