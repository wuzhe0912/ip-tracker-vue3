<template lang="pug">
.absolute.-bottom-64.flex.flex-col.bg-white.gap-y-4.gap-x-12.px-8.pt-8.pb-12.rounded-md(
  class="lg:-bottom-20 lg:flex-row"
)
  .flex.flex-col(v-for="(item, index) in list")
    h3.text-xs.mb-2.uppercase {{ item.name }}
    span.text-2xl 8.8.8.8
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'IPinfo',

  setup() {
    const state = reactive({
      list: [
        { name: 'IP Address' },
        { name: 'Location' },
        { name: 'Timezone' },
        { name: 'ISP' }
      ]
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
