<template lang="pug">
.flex.flex-col.h-screen.max-h-screen
  .flex.justify-center.relative.bg-home-pattern.bg-cover.px-4.pt-8.pb-32
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
</template>

<script>
export default {
  name: 'Home',
  component: {}
}
</script>

<style lang="scss">
  
</style>
