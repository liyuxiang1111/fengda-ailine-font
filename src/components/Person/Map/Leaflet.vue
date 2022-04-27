<template>
  <div class="Leaflet-container">
    <l-map ref="myMap"> </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
}
</script>

<style></style>
