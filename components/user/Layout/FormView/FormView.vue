<template>
  <div class="c-l-form">
    <div class="container-xxl">
      <h1 class="custom-headline">Заполните заявка</h1>
      <AboutSender :changed="changed" @sender="sender"></AboutSender>
      <AboutShipment @shipment="shipment"></AboutShipment>
    </div>
  </div>
</template>

<script>
import AboutSender from "@/components/user/Custom/Sender/AboutSender.vue";
import AboutShipment from "@/components/user/Custom/Shipment/AboutShipment.vue";
export default {
  components: { AboutSender, AboutShipment },
  data() {
    return {
      changed: true,
      applicationSenderForm: {},
      applicationShipmentForm: {},
    };
  },

  methods: {
    shipment(product, comment) {
      this.changed = !this.changed
      console.log(product);
      console.log(comment);
    },
    sender(sender, receiver) {
      if (typeof sender.country == number) {
        
      }
      console.log(sender);
      console.log(receiver);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./FormView.style.scss";
</style>
