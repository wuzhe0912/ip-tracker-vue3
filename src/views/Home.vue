<template lang="pug">
.flex.flex-col.h-screen.max-h-screen
  header.z-30.flex.justify-center.relative.bg-home-pattern.bg-cover.px-4.pt-8.pb-32
    .w-full.max-w-screen-sm
      h1.text-white.text-center.text-3xl.pb-4 IP Address Tracker
      .flex
        input.flex-1.py-3.px-2.rounded-tl-md.rounded-bl-md(
          v-model="queryIP"
          class="focus:outline-none"
          type="text"
          placeholder="Search for any IP address or leave empty to get your ip info"
        )
        .flex.items-center.px-4.cursor-pointer.bg-black.rounded-tr-md.rounded-br-md(@click="getIpInfo")
          i.w-4.h-4.bg-icon-arrow.bg-center.bg-contain.bg-no-repeat
    IPInfo(v-if="ipInfo")
  main#mapid.h-full.z-20
</template>

<script>
import IPInfo from '@/components/IPInfo.vue';
import leaflet from 'leaflet';
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    IPInfo,
  },

  setup() {
    let myMap;
    const queryIP = ref('');
    const ipInfo = ref(null);
    const accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
    const GeolocationKey = process.env.VUE_APP_IP_GEOLOCATION_API_KEY;

    onMounted(() => {
      myMap = leaflet.map('mapid').setView([51.505, -0.09], 13);

      leaflet
        .tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: `${accessToken}`,
          }
        )
        .addTo(myMap);
    });

    const getIpInfo = async () => {
      try {
        const res = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=${GeolocationKey}&ipAddress=${queryIP.value}`
        );
        const result = res.data;
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    return {
      queryIP,
      ipInfo,
      getIpInfo,
    };
  },
};
</script>

<style lang="scss"></style>
