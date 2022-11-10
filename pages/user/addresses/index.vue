<template>
  <div class="p-u-adresses">
    <div class="header">
      <div class="header-title">Delivery addresses</div>
      <div class="header-action">
        <button type="button">Add new address</button>
      </div>
    </div>
    <div class="body">
      <div class="cards row">
        <div
          class="card-item col-4"
          v-for="address in userAddresses"
          :key="address.id"
        >
          <div class="main">
            <div class="card-item__header">
              {{ address.country }} , {{ address.region }}
            </div>
            <div class="card-item__body">
              {{ address.street }}
            </div>
            <div class="card-item__footer">
              {{ address.postcode }}
            </div>
            <div class="card-item__action">
              <button>
                <img src="@/assets/icons/user/user-edit.svg" alt="" />
              </button>
              <button>
                <img src="@/assets/icons/user/user-trash.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userAddresses: [],
    };
  },
  computed: {
    ...mapGetters({
      addresses: "user/getProfile",
    }),
  },
  mounted() {
    this.addresses.forEach((element) => {
      if (element.name == "user") {
        this.userAddresses = element.addresses;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./adresses.style.scss";
</style>
