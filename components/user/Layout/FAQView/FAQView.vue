<template>
  <div class="c-l-faq">
    <div class="container-xxl">
      <h1 class="custom-headline">Часто задаваемые вопросы</h1>

      <div class="faq row">
        <div class="col-md-7 col-sm-12 col-12 faq-questions">
          <div class="accordion" id="accordionExampleTwo">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Как зарегистрироваться на сайте Dalilogistic?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExampleTwo"
              >
                <div class="accordion-body">
                  Отметим, для того чтобы начать пользоваться услугами DLC,
                  нужно зарегистрироваться на нашем сайте.
                  <br />
                  В правом верхнем углу есть кнопка ЗАРЕГИСТРИРОВАТЬСЯ, при
                  нажатии на которую открывается окно регистрации. <br />
                  Если у вас нет учетной записи, нажмите на кнопку У МЕНЯ НЕТ
                  УЧЕТНОЙ ЗАПИСИ, дальше вам нужно ввести ваши данные и нажать
                  на кнопку ОТПРАВИТЬ. <br />
                  Поздравляем, теперь у вас есть ваш личный кабинет!
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Как узнать, где товар?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExampleTwo"
              >
                <div class="accordion-body">
                  Вы можете узнать, где находится ваш товар, через
                  онлайн-отслеживание. В онлайн-отслеживании всегда самая свежая
                  информация.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Как рассчитать стоимость?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExampleTwo"
              >
                <div class="accordion-body">
                  Рассчитать стоимость отправления можно воспользовавшись нашим
                  калькулятором.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Можно забрать груз, а заплатить позже?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExampleTwo"
              >
                <div class="accordion-body">
                  Нет. Выдача груза производится только после полной оплаты
                  услуг экспедитора.
                  <br />
                  Для крупных компаний, работающих с нами длительное время,
                  возможно рассмотрение отсрочки платежа на определённых
                  условиях.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-sm-12 col-12 faq-answer">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./FAQView.style.scss";
</style>
