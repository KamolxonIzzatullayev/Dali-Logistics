<template>
  <div class="p-about" style="background-color: #f5f5f5">
    <div class="rain">
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
    </div>
    <div class="about-header">
      <div class="bg"></div>
      <HeaderView
        :title="title"
        :path="path"
        :bg-href="background"
        :link="link"
      ></HeaderView>
    </div>

    <OffersCards></OffersCards>

    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "@/components/user/Layout/HeaderView/HeaderView.vue";
import FooterView from "@/components/user/Common/FooterView/FooterView.vue";
import OffersCards from "../../components/user/Layout/OffersCards/OffersCards.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    OffersCards,
  },
  data() {
    return {
      title: "Наши услуги",
      path: "УСЛУГИ",
      background: "offer-bg",
      link: "/offers",
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
