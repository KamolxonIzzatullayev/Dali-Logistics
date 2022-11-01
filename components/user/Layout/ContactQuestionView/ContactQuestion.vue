<template>
  <div class="c-l-contact-question">
    <div class="container-xxl">
      <div class="row contact">
        <div class="col-md-6 col-sm-12 col-12 contact-form">
          <h1>
            Если есть вопросы-
            <br />
            Всегда Рады вам помочь!
          </h1>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <img src="../../../../assets/icons/input-user.svg" alt="" />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your name"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <img src="../../../../assets/icons/input-email.svg" alt="" />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <textarea
              class="form-control"
              aria-label="With textarea"
              placeholder="Ведите собщение"
              rows="5"
            ></textarea>
          </div>

          <button>Отправить</button>
        </div>

        <div class="col-md-6 col-sm-12 col-12 contact-address">
          <div class="contact-address__item">
            <div class="contact-address__item-icon">
              <img src="../../../../assets/icons/contact-address.svg" alt="" />
            </div>
            <div class="contact-address__item-text">
              <h2>Адрес:</h2>
              <p>
                Room 2216, Building E, Wanda Plaza, Guilan North Road, Nanhai
                District, Foshan City, Guangdong Province,China.
              </p>
            </div>
          </div>
          <div class="contact-address__item">
            <div class="contact-address__item-icon">
              <img src="../../../../assets/icons/contact-phone.svg" alt="" />
            </div>
            <div class="contact-address__item-text">
              <h2>Телефон:</h2>
              <p>
                +86 0757 8272 8404, <br />
                +86 1331 8333 430
              </p>
            </div>
          </div>
          <div class="contact-address__item">
            <div class="contact-address__item-icon">
              <img src="../../../../assets/icons/contact-post.svg" alt="" />
            </div>
            <div class="contact-address__item-text">
              <h2>Почтовый индекс:</h2>
              <p>528200</p>
            </div>
          </div>
          <div class="contact-address__item">
            <div class="contact-address__item-icon">
              <img src="../../../../assets/icons/contact-email.svg" alt="" />
            </div>
            <div class="contact-address__item-text">
              <h2>Эл. адрес</h2>
              <p>Info@dalilogistic.com</p>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.401759002307!2d69.26051221572502!3d41.300122809362726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf565209fbd%3A0xbdb52a135a5d6afc!2sDATLAN!5e0!3m2!1sen!2s!4v1665660631449!5m2!1sen!2s"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./ContactQuestion.style.scss";
</style>
