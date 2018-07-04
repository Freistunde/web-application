<template>
  <div id="app">
    <Mapbox :access-token="mb.accessToken" :map-options="mb.mapOptions" :geolocate-control="mb.geolocateControl" :scale-control="mb.scaleControl" :fullscreen-control="mb.fullscreenControl" @map-load="mapLoad" @map-init="mapInitialized">
    </Mapbox>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue";
import * as mapboxgl from "mapbox-gl";

export default {
  components: {
    Mapbox
  },
  methods: {
    mapInitialized(map) {
      this.map = map;
	  this.Markers = [];
      //this.showActivities(activityMock);
    },
    mapLoad(map) {
      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;	   
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
          labelLayerId = layers[i].id;
          break;
        }
      }
      map.addLayer(
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",
            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"]
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"]
            ],
            "fill-extrusion-opacity": 0.6
          }
        },
        labelLayerId
      );
    },
    showDetailModal: function(id) {	  
      this.$root.$refs.detailview.showModal(id);
    },
	clearMap: function() {      
	  alert("Noch nicht bereit");
    },
    showActivities: function(activities) {
      var map = this.map;	  
      console.log('Adding Activities');
	 
      var oldmarkers = new mapboxgl.Marker().setLngLat([0,0]).addTo(map);
      oldmarkers.remove();	  
	  
      var list = createMarkerList(activities);
	 
      list.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement("div");
        el.className = "marker";

        // make a marker for each feature and add to the map
        var a = new mapboxgl.Marker(el)	
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `<div class="card-body">
                  <h5 class="card-title text-dark">${marker.properties.title}</h5>
                  <a href="#" @click="showDetailModal(marker.properties.id)" class="btn btn-primary">Mehr Infos</a>
                </div>`
              )
          )
          .addTo(map);	  
      });
	  
    }
  },
  data: () => {
    return {
      map: {},
      mb: {
        accessToken:
          "pk.eyJ1IjoibWFpaGVpIiwiYSI6ImNqaDZidHIwejFqbTQzMm8yczA5ZXg2eGkifQ.wvhQbFLBEgt1NONFroy1dg",
        mapOptions: {
          style: "mapbox://styles/mapbox/streets-v9",
          center: [7.228317, 51.455397],
          zoom: 12,
          pitch: 60, // pitch in degrees
          attributionControl: false,
          logoPosition: "bottom-right"
        },
        geolocateControl: {
          show: true,
          position: "top-right"
        },
        scaleControl: {
          show: true,
          position: "bottom-right"
        },
        fullscreenControl: {
          show: true,
          position: "top-right"
        }
      }
    };
  }
};

var transformToMarker = function(activity) { 
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [activity.Latitude, activity.Longitude]
    },
    properties: {
      title: activity.Name,
      description: activity.Kommentar,
      id: activity.Aktivität_ID
    }
  };
};

var createMarkerList = function(activities) {
  var markers = {
    type: "FeatureCollection",
    features: []
  };

  for (var count in activities) {
    markers.features.push(transformToMarker(activities[count]));
  }

  return markers;
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
#map {
  width: 100%;
  height: 100%;
}
.marker {
  background-image: url("./../assets/marker-editor.svg");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
}

.mapboxgl-popup-content {
  text-align: center;
  font-family: "Open Sans", sans-serif;
}
</style>
