<template>
  <div id="app">
    <Mapbox :access-token="mb.accessToken" :map-options="mb.mapOptions" :geolocate-control="mb.geolocateControl" :scale-control="mb.scaleControl" :fullscreen-control="mb.fullscreenControl" @map-load="mapLoad">
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
    mapLoad(map) {
      console.log("MAP LOADED");
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

      const markers = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [7.262179, 51.443018]
            },
            properties: {
              title: "Mapbox",
              description: "Ruhr Universität Mensa"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [7.270899, 51.447625]
            },
            properties: {
              title: "Mapbox",
              description: "Hochschule Bochum"
            }
          }
        ]
      };

      markers.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement("div");
        el.className = "marker";

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `<h3>
                ${marker.properties.title}
                </h3>
                <p>
                ${marker.properties.description}
                <p>`
              )
          )
          .addTo(map);
      });
    }
  },
  data: () => {
    return {
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
