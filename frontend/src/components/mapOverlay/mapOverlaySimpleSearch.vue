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
        <b-btn variant="light" class="border border-light" @click="onExtendedSearch">Erweiterte Suche</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import axios from "axios";

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
	  
	  var info = this.form.searchstring;
	  var activities;
	  if(isNaN(info)) {	  
	  axios
        .get("http://localhost:3000/api/activities/place/" + info)
        
		.then(response => {				
          this.activities = response.data;		 
		  this.$parent.$parent.$refs.map.showActivities(this.activities);		  
        })
		.catch(error => {		   
		  this.$parent.$parent.$refs.map.showActivities(this.activities);	
		});
	  }
	  else{
	  axios
        .get("http://localhost:3000/api/activities/id/" + info)
        
		.then(response => {			  
          this.activities = response.data;		 
		  this.$parent.$parent.$refs.map.showActivities(this.activities);		  
        })
		.catch(error => {		   
		  this.$parent.$parent.$refs.map.showActivities(this.activities);	
		});
		}
	  
	  
	  
      
	  
	  /** TODO
	  /* Suche erstellen
	  /*
	  **/
	  
      //alert(JSON.stringify(this.form));
	  //console.log("So Suche jetzt"+ form);
    },
    onExtendedSearch(evt) {
	  this.$parent.$parent.$refs.map.clearMap();
      this.$emit("showextendedsearch");
    }
  }
};

var activityMock = [
  {
    title: "Hochschule",
    description: "Nicht so geil",
    duration: 30,
    voting: 4,
    id: "act1",
    coordinates: [7.270899, 51.447625],
    categoriesID: ["cat1", "cat2"]
  },
  {
    title: "Ruhr Uni",
    description: "Auch nicht so geil",
    duration: 30,
    voting: 4,
    id: "act1",
    coordinates: [7.262179, 51.443018],
    categoriesID: ["cat1", "cat2"]
  },
  {
    title: "Sportanlagen Halle Markstraße",
    description: "Auch nicht so geil",
    duration: 30,
    voting: 4,
    id: "act1",
    coordinates: [7.246549, 51.450068],
    categoriesID: ["cat1", "cat2"]
  }
  
];

</script>

<style lang="scss">
</style>
