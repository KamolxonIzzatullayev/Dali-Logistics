<template>
  <div class="v-home">
    <HeaderView></HeaderView>
    
  </div>
</template>

<script>
import HeaderView from "@/components/Layout/HeaderView/HeaderView.vue";
export default {
  name: "HomeView",
  components: { HeaderView },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
@import "./HomeView.style.scss";
</style>
