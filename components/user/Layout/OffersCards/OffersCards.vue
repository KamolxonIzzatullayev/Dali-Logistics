<template>
  <div class="c-l-cards">
    <div class="container-xxl">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6 col-12 card-wrapper"
          v-for="card in offersData"
          :key="card.id"
        >
          <div class="card my-3 card-wrapper__item">
            <img
              :src="require(`assets/images/${card.bgImage}.png`)"
              class="card-img-top"
              alt=""
            />
            <div class="card-body card-wrapper__item-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                class="btn btn-primary"
                @click="
                  $router.push({
                    path: `/offers/${card.id}`,
                    params: { id: card.id },
                  })
                "
                >Подробнее</a
              >
            </div>
          </div>
        </div>

        <!-- <div
          class="col-lg-4 col-md-6 col-sm-6 col-12 card-wrapper"
          v-for="card in cards"
          :key="card.id"
        >
          <div
            v-if="typeof card.image_icon == 'object' && card.image_icon"
            class="card my-3 card-wrapper__item"
          >
            <img
              :src="require(`assets/images/${card.bgImage}.png`)"
              class="card-img-top"
              alt=""
            />
            <div class="card-body card-wrapper__item-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                class="btn btn-primary"
                @click="
                  $router.push({
                    path: `/offers/${card.id}`,
                    params: { id: card.id },
                  })
                "
                >Подробнее</a
              >
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cards: [],
    };
  },
  watch: {
    offersCard() {
      this.changeOffersCard();
    },
  },
  computed: {
    ...mapGetters({
      offersCard: "getOffersCard",
      offersData: "getTabHeaders",
    }),
  },
  methods: {
    changeOffersCard() {
      let a = [];
      a = this.offersCard.data.services;
      if (a.length) {
        a.forEach((elem) => {
          elem.image_icon = JSON.parse(elem.image_icon);
        });
        console.log(a);
      }
    },
  },
  mounted() {
    this.$store.dispatch("getIndexPageData", 1);
  },
};
</script>

<style lang="scss" scoped>
@import "./OffersCard.style.scss";
</style>
