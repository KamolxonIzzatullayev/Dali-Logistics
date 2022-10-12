<template>
  <div class="p-about" style="background-color: #f5f5f5">
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
import HeaderView from "@/components/Layout/HeaderView/HeaderView.vue";
import FooterView from "@/components/Common/FooterView/FooterView.vue";
import OffersCards from "../../components/Layout/OffersCards/OffersCards.vue";
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
      link: "/offers"
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
