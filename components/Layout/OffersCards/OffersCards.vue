<template>
  <div class="c-l-cards">
    <div class="container-xxl">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6 col-12"
          v-for="card in offersData"
          :key="card.id"
        >
          <div class="card my-3">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Подробнее</a>
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
  computed: {
    ...mapGetters({
      offersData: "getTabHeaders",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "./OffersCard.style.scss";
</style>
