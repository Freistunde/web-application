<template>
  <div class="text-light mx-3 py-3 w-100">
    <b-input-group class="w-100">
      <b-form-select class="border border-light" v-model="form.menu" :options="menufields" />
      <b-form-input class="border border-light" v-if="form.menu === 'place'" v-model="form.searchstring" placeholder="Stadt, Postleitzahl oder Ort"></b-form-input>
      <b-form-select class="border border-light" v-if="form.menu === 'time'" v-model="form.time" :options="times" />
      <b-input-group-append>
        <b-btn variant="light" class="border border-light" @click="onSearch">
          <span class="fa fa-search"></span>
        </b-btn>
        <b-btn variant="light" class="border border-light">Erweiterte Suche</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        menu: "place",
        time: null,
        searchstring: "",
      },
      menufields: [
        {
          value: "place",
          text: "Wo soll es hin gehen?"
        },
        {
          value: "time",
          text: "Wir viel Zeit hast du?"
        }
      ],
      times: [
        { text: "Wähle einen Zeitraum", value: null },
        { text: "30 Minuten", value: 30 },
        { text: "1 Stunde", value: 60 },
        { text: "2 Stunden", value: 120 },
        { text: "3 Stunden", value: 180 }
      ],

    };
  },
  methods: {
    onSearch(evt) {
      evt.preventDefault();
      this.$parent.$parent.$refs.map.showActivities();
      alert(JSON.stringify(this.form));
    },
    onExtendedSearch(evt) {
      this.$emit("showextendedsearch");
    }
  }
};
</script>

<style lang="scss">
</style>
