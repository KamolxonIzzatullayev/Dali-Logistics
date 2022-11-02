<template>
  <div class="c-l-faq">
    <div class="container-xxl">
      <h1 class="custom-headline">Часто задаваемые вопросы</h1>
      <div class="faq row">
        <div class="col-12 faq-questions">
          <div class="accordion" id="accordionExampleTwo">
            <div
              class="accordion-item"
              v-for="(item, index) in faq"
              :key="index"
            >
              <h2 class="accordion-header" :id="`heading${index}`">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${index}`"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {{ item.question }}
                </button>
              </h2>
              <div
                :id="`collapse${index}`"
                class="accordion-collapse collapse show"
                :aria-labelledby="`heading${index}`"
                data-bs-parent="#accordionExampleTwo"
              >
                <div class="accordion-body">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-5 col-sm-12 col-12 faq-answer">
          <div class="faq-answer__card">
            <div class="faq-answer__card-title">
              <h2 class="text-center">Остались вопросы?</h2>
              <p class="text-center">
                Оставьте свои контактные данные и мы свяжемся с вами
              </p>
            </div>
            <div class="faq-answer__card-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img src="../../../../assets/images/faq-user.png" alt="" />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ведите имя"
                  aria-label="Ведите имя"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <button
                  class="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="../../../../assets/images/faq-flag.png" alt="" />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <img
                      class="dropdown-item"
                      src="../../../../assets/images/faq-flag.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      class="dropdown-item"
                      src="../../../../assets/images/faq-flag.png"
                      alt=""
                    />
                  </li>
                </ul>
                <input
                  type="text"
                  class="form-control"
                  placeholder="+998 (9*)*** ** **"
                  aria-label="+998 (9*)*** ** **"
                />
              </div>
            </div>
            <div class="faq-answer__card-footer">
              <button type="button">
                ПОЖАЛУЙСТА, ЗВОНИТЕ ЕЩЕ РАЗ
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Array,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "./FAQView.style.scss";
</style>
