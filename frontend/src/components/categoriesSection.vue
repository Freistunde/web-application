<template>
  <div class="h-100 flying-content">
    <div class="row sticky-top section-header">
      <div class="col-12 align-self-center fa text-center text-dark">
        <span class="title mt-5 mb-5">
          <span class="far fa-clone"></span> Kategorien
        </span>
      </div>
      <div class="col-12 align-self-center fa text-center p-2 border border-left-0 border-right-0">
        <span class="my-4 w-50 px-5">
          <div class="mx-5">
            <div class="text-light mx-5 px-5">
              <b-form-input class="border border-secondary" placeholder="Suche" v-model="searchbar"></b-form-input>
            </div>
          </div>
        </span>
      </div>
    </div>
    <div class="row w-100 no-gutters p-2">
      <div v-show="!detailedView">
	    <p class="text-dark border-0" id="ViewCategories">  </p>
        <b-card-group columns>
          <b-card class="text-dark border-0" v-for="category in categories" :key="category.Kat_ID" :title="category.Name" :img-src="'http://localhost:3000/api/categories/img/' + category.Kat_ID" img-fluid :img-alt="category.Kat_ID" img-top>
            <p v-if="category.Beschreibung" class="card-text">
              {{category.Beschreibung}}
            </p>
            <small v-if="category.childs" class="text-muted">{{category.childs}} Aktivitäten</small>
            <b-button @click="setview(category.Kat_ID)" variant="primary">Details</b-button>
          </b-card>
        </b-card-group>
      </div>
      <!--
        TODO:
        Get detailedView working
        Add a full width card to detailed view with a list of all activities in this specific category.
        -->
      <div v-show="detailedView">
        <b-card-group>
          <b-card class="text-dark border-0">
            <p class="card-text" id="catsford">
              Testtext
            </p>
            <small class="text-muted">Aktivitäten</small></br></br>
            <b-button @click="resetview" variant="primary">Zurück</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      detailedView: false,
      categories: [],
      searchbar: ""
    };
  },
  watch: {
    searchbar: function() {
      this.debouncedSearch();
    }
  },
  created() {
    var el = this.$el;
    axios.get("http://localhost:3000/api/categories/").then(response => {     
	  this.categories = response.data;
    });

    this.debouncedSearch = _.debounce(this.search, 500);
  },
  methods: {
    search: function() {
      axios
        .get("http://localhost:3000/api/categories/search/" + this.searchbar)
        .then(response => {	
	document.getElementById("ViewCategories").innerHTML = "";		
          this.categories = response.data;
        })
		.catch(error => {
		  this.categories = null;
		  document.getElementById("ViewCategories").innerHTML = "No Categories found";
		  console.log(error.response.status);
		});
    },
    quartered: function(offset) {
      return this.categories.filter((cat, idx) => (idx - offset) % 4 === 0);
    },
    setview: function(id) {
      axios
        .get("http://localhost:3000/api/categories/" + id + "/activities/")
        .then(response => {	
	    document.getElementById("catsford").innerHTML = JSON.stringify(response.data);
        this.detailedView = true;
        })
		.catch(error => {
		  document.getElementById("catsford").innerHTML = JSON.stringify(error.response.data);
          this.detailedView = true;
		});
	  
    },
    resetview: function() {
      this.detailedView = false;
    }
  }
};
</script>

<style lang="scss">
.section-header {
  background: #f2f2f2;
}
</style>
