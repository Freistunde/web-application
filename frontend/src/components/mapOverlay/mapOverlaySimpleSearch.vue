<template>
  <div class="text-light mx-3">
    <div class="text-center">
      <img src="./../../assets/Freistunde_Icon.svg" class="fs-logo my-2" />
    </div>

    <b-form @search="onSearch" @extendedSearch="onExtendedSearch" v-if="show">
      <b-form-group id="exampleInputGroup1" label="Wo soll es hin gehen?" label-for="exampleInput1">
        <b-form-input id="exampleInput1" type="email" v-model="form.destination" placeholder="Stadt, Ort, Land, ...">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3" label="Wie viel Zeit hast du?" label-for="exampleInput3">
        <b-form-select id="exampleInput3" :options="times" v-model="form.time">
        </b-form-select>
      </b-form-group>
      <b-button type="search" variant="primary" class="fs-bg">SUCHEN!</b-button>
      <b-button type="extendedSearch" variant="outline-light" class="float-right">Erweiterte Suche</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        destination: "",
        time: ""
      },
      times: [
        { text: "Wähle einen Zeitraum", value: null },
        "30 Minuten",
        "1 Stunde",
        "2 Stunden",
        "3 Stunden"
      ],
      show: true
    };
  },
  methods: {
    onSearch(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onExtendedSearch(evt) {
      this.$emit('showextendedsearch');
    }
  }
};
</script>

<style lang="scss">
.fs-logo {
  max-height: 150px;
  max-width: 50%;
}

.fs-bg {
  background: #005b96;
}
</style>
