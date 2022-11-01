<template>
  <div class="c-l-form">
    <div class="container-xxl">
      <h1 class="custom-headline">Заполните заявка</h1>
      <AboutSender></AboutSender>
      <AboutShipment></AboutShipment>
    </div>
  </div>
</template>

<script>
import AboutSender from "@/components/user/Custom/Sender/AboutSender.vue";
import AboutShipment from "@/components/user/Custom/Shipment/AboutShipment.vue";
export default {
  components: { AboutSender, AboutShipment },
};
</script>

<style lang="scss" scoped>
@import "./FormView.style.scss";
</style>
