<template lang="pug">
.flex.flex-col.h-screen.max-h-screen
  header.z-2.flex.justify-center.relative.bg-home-pattern.bg-cover.px-4.pt-8.pb-32
    .w-full.max-w-screen-sm
      h1.text-white.text-center.text-3xl.pb-4 IP Address Tracker
      .flex
        input.flex-1.py-3.px-2.rounded-tl-md.rounded-bl-md(
          class="focus:outline-none"
          type="text"
          placeholder="Search for any IP address or leave empty to get your ip info"
        )
        .flex.items-center.px-4.cursor-pointer.bg-black.rounded-tr-md.rounded-br-md
          i.w-4.h-4.bg-icon-arrow.bg-center.bg-contain.bg-no-repeat
    IPInfo
  main#mapid.h-full.z-3
</template>

<script>
import IPInfo from '@/components/IPInfo.vue'
import leaflet from 'leaflet'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    IPInfo
  },

  setup() {
    onMounted(() => {
      const myMap = leaflet.map("mapid").setView([51.505, -0.09], 13);
      const accessToken = process.env.VUE_APP_MAPBOX_TOKEN

      leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: `${accessToken}`
      }).addTo(myMap);
    })
  }
}
</script>

<style lang="scss"></style>
