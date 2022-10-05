<template>
  <div class="v-home">
    <div class="home-header">
      <div class="bg"></div>
      <HeaderView></HeaderView>
    </div>

    <ExperienceView></ExperienceView>

    <OffersView></OffersView>

  </div>
</template>

<script>
import HeaderView from "@/components/Layout/HeaderView/HeaderView.vue";
import ExperienceView from "@/components/Layout/ExperienceView/ExperienceView.vue";
import OffersView from "@/components/Layout/OffersView/OffersView.vue";
export default {
  name: "IndexPage",
  components: { HeaderView, ExperienceView, OffersView },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
</style>
