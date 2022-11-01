<template>
  <div class="c-l-about">
    <div class="container-xxl">
      <div class="row about-company" id="about-data"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },

  watch: {
    aboutData() {
      this.putData();
    },
  },

  computed: {
    aboutData() {
      let aboutData = [];
      let result = [];
      if (this.data) {
        aboutData = [...this.data];
        aboutData.forEach((elem) => {
          let newElem = { ...elem };
          newElem.file = process.env.baseUrl + elem.file;
          result.push(newElem);
        });
      }
      return result;
    },
  },

  methods: {
    putData() {
      this.aboutData.forEach((elem) => {
        document.getElementById("about-data").innerHTML += `
        <div class="col-md-4 col-sm-12 col-12 about-company__image">
          <img class="w-100" src="${elem.file}" alt="" />
        </div>
        <div class="col-md-8 col-sm-12 col-12 about-company__text">
          <h1>О КОМПАНИИ</h1>
          <h2>
            ${elem.title}
          </h2>
          <p>
            Логистическая компания Dalilogistic была создана в Китае и сейчас
            оказывает свои услуги на территории стран СНГ. Среди множества
            конкурентов нас отличает искренняя любовь к своему делу,
            индивидуальный подход к каждому клиенту с соблюдением высокого
            качества и скорости доставки. Именно транспортно-логистические
            услуги гарантируют быструю и безопасную доставку даже самого ценного
            и хрупкого груза, будь то хрусталь, перевозка животных или же
            тяжёлых строительных материалов. Компания ставит перед собой задачу
            не просто выполнить заказ, а обеспечить каждого клиента качественной
            услугой доставки так, чтобы каждый клиент обращался к нам вновь и
            вновь.
          </p>
        </div>
        `;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./AboutCompanyView.style.scss";
</style>
