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

    <ContactQuestion></ContactQuestion>

    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "@/components/user/Layout/HeaderView/HeaderView.vue";
import FooterView from "@/components/user/Common/FooterView/FooterView.vue";
import ContactQuestion from "@/components/user/Layout/ContactQuestionView/ContactQuestion.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    ContactQuestion,
  },
  data() {
    return {
      title: "Контакты",
      path: "КОНТАКТЫ",
      background: "about-bg",
      link: "/contacts",
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
