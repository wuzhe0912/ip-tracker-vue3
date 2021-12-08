<template lang="pug">
.ip-info-container.absolute.-bottom-64.flex.flex-col.bg-white.gap-y-4.gap-x-12.px-8.pt-8.pb-12.rounded-md(
  class="lg:-bottom-20 lg:flex-row"
)
  .flex.flex-col(v-for="(item, index) in list" :key="item.name")
    h3.text-xs.mb-2.uppercase {{ item.name }}
    span.text-2xl {{ item.value }}
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue';

export default {
  name: 'IPinfo',

  props: {
    ipInfo: Object,
  },

  setup(props) {
    const state = reactive({
      list: [],
    });

    watchEffect(() => {
      state.list = [
        { name: 'IP Address', value: props.ipInfo.address },
        { name: 'Location', value: props.ipInfo.state },
        { name: 'Timezone', value: props.ipInfo.timezone },
        { name: 'ISP', value: props.ipInfo.isp },
      ];
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.ip-info-container {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
