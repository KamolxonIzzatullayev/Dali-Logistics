<template>
  <div class="c-cu-fillout">
    <div v-for="language in languages" :key="language.id">
      <div v-if="language.eng">
        <div
          class="fillout d-flex justify-content-between align-items-center flex-column"
        >
          <img src="@/assets/icons/ticket.svg" alt="" />
          <h3 class="fillout-heading">Sent</h3>
          <p class="fillout-text">
            Thank you, your application has been successfully sent.For your
            convenience, please register on our website.
          </p>
          <button class="btn btn-warning">Register</button>
        </div>
      </div>
      <div v-if="language.rus">
        <div
          class="fillout d-flex justify-content-between align-items-center flex-column"
        >
          <img src="@/assets/icons/ticket.svg" alt="" />
          <h3 class="fillout-heading">Отправлено</h3>
          <p class="fillout-text">
            Спасибо ваша заявка успешно отправлено. Для удобства работы
            пожалуйста пройдите регистрацию на нашем сайте
          </p>
          <button class="btn btn-warning">ПРойти регистрацию</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { id: 1, eng: "english" },
        { id: 2, rus: "russian" },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.c-cu-fillout {
  margin: 316px auto 0;

  .fillout {
    padding: 90px 120px 40px;
    width: 750px;

    &-heading {
      margin: 16px 0;
      font-weight: 700;
      font-size: 31px;
      line-height: 150%;
      color: #000000;
    }

    &-text {
      width: 500px;
      margin-bottom: 67px;
      font-weight: 400;
      font-size: 21px;
      line-height: 150%;
      text-align: center;
      color: #000000;
    }
  }
}

@media (max-width: 768px) {
  .c-cu-fillout {
    margin: 240px auto 0;

    .fillout {
      width: 320px;
      padding: 20px 0 60px;

      img {
        width: 41px;
        height: 41px;
      }
    }
  }
}
</style>
