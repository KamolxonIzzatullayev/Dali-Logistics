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
      product: {},
      comment: undefined,
      changed: true,
      applicationSenderForm: {},
      applicationShipmentForm: {},
    };
  },

  methods: {
    shipment(product, comment) {
      this.changed = !this.changed;
      this.product = product;
      this.comment = comment;
      console.log(product);
      console.log(comment);
    },
    sender(sender, receiver, owner, senderPhone, receiverPhone) {

      if (
        sender.name == "" ||
        sender.address == "" ||
        sender.email == "" ||
        senderPhone.length < 4 ||
        sender.index.length < 6 ||
        typeof sender.condition == "number" ||
        typeof sender.region == "number" ||
        typeof sender.city == "number" ||
        typeof sender.country == "number" ||
        receiver.name == "" ||
        receiver.address == "" ||
        receiver.email == "" ||
        receiverPhone.length < 4 ||
        receiver.index.length < 6 ||
        typeof receiver.method == "number" ||
        typeof receiver.region == "number" ||
        typeof receiver.city == "number" ||
        typeof receiver.country == "number"
      ) {
        let a = {};
        if (owner == "sender") {
          a.who_is = 1;
        } else if (owner == "receiver") {
          a.whoe_is = 2;
        }
        a.full_name = sender.name;
        a.full_name_from = receiver.name;
        a.email = sender.email;
        a.email_from = receiver.email;
        a.phone = sender.phone;
        a.phone_from = receiver.phone_from;
        a.region_id = sender.region;
        a.region_from_id = receiver.region;
        a.address = sender.address;
        a.address_from = receiver.address;
        a.mail_index = sender.index;
        a.mail_from_index = receiver.index;
        a.condition_id = sender.condition;
        a.delivery_id = receiver.method;
        a.comment = this.comment;
        a.product = this.product;

        console.log(a);
      } else {
        
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./FormView.style.scss";
</style>
