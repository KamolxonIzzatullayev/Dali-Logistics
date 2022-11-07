<template>
  <div class="l-error" v-if="error.statusCode == '404'">
    <div class="error-page">
      <img
        class="error-page__img"
        src="../assets/images/404-error.svg"
        alt=""
      />
      <h1 class="error-page__heading">Sorry, page not found</h1>
      <p class="error-page__text">
        Sorry, the page you requested was not found. Please return to the main
        page
      </p>
      <button class="btn btn-primary error-page__btn">
        <nuxt-link to="/"> Return to homepage </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "error-layout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.l-error {
  padding: 0 25px;
  background: url(../assets/images/404-bg-img.png);
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error-page {
    max-width: 822px;
    width: 100%;
    text-align: center;

    &__heading {
      margin: 56px 0 25px;
      font-weight: 700;
      font-size: 70px;
      line-height: 110.4%;
      color: #000000;
    }

    &__text {
      margin-bottom: 56px;
      font-weight: 500;
      font-size: 18px;
      line-height: 125.4%;
      color: rgba(0, 0, 0, 0.5);
    }

    &__btn {
      padding: 20px 60px;
      background: #ffc258;
      font-weight: 600;
      font-size: 20px;
      border: 0;

      a {
        color: #000000;
        text-decoration: none;
      }
    }

    &__img {
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  .l-error {
    background: url(../assets/images/404-mobile-bg-img.png);
    max-width: 768px;
    .error-page {
      &__heading {
        font-size: 28px;
      }

      &__text {
        font-size: 12px;
      }

      &__btn {
        font-size: 12px;
      }

      &__img {
        max-width: 320px;
      }
    }
  }
}
</style>
