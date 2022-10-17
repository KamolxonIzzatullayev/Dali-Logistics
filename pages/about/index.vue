<template>
  <div class="p-about">
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

    <AboutCompanyView> </AboutCompanyView>

    <OurTarget></OurTarget>

    <OurTeam></OurTeam>

    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "@/components/user/Layout/HeaderView/HeaderView.vue";
import FooterView from "@/components/user/Common/FooterView/FooterView.vue";
import AboutCompanyView from "../../components/user/Layout/AboutCompanyView/AboutCompanyView.vue";
import OurTarget from "../../components/user/Layout/OurTarget/OurTarget.vue";
import OurTeam from "@/components/user/Layout/OurTeam/OurTeam.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    AboutCompanyView,
    OurTarget,
    OurTeam,
  },
  data() {
    return {
      title: "О компании",
      path: "О КОМПАНИИ",
      background: "about-bg",
      link: "/about",
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
