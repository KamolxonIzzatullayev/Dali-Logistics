<template>
  <div class="c-l-form">
    <div class="container">
      <h1 class="text-center">Заполните заявка</h1>
      <div class="form d-flex">
        <div class="form-sender">
          <div class="form-sender__header">
            <input
              type="radio"
              v-model="hi"
              checked
              name="personal"
              value="sender"
              id="sender"
            />
            <label for="sender">Отправитель</label>
          </div>
          <div class="form-sender__body">
            <div class="form-sender__body-email">
              <input type="text" placeholder="Электронная почта" />
            </div>
          </div>
          <div class="form-sender__body-country">
            <select v-model="sender.country">
              <option disabled value="Выберите страну">Выберите страну</option>
              <option
                :value="country"
                v-for="(country, index) in sender.countries"
                :key="index"
              >{{ country }}</option>
            </select>
            <select v-model="sender.city">
              <option disabled value="Выберите город">Выберите город</option>
              <option
                value=""
                v-for="(city, index) in sender.cities[sender.country]"
                :key="index"
              >{{ city }}</option>
            </select>
          </div>
          <div class="form-sender__body-country">
            <select v-model="sender.region">
              <option disabled value="Выберите регион">Выберите регион</option>
              <option>Узбекистан</option>
              <option>Китай</option>
              <option>Таджикистан</option>
            </select>

            <input type="text" placeholder="Название улицы, дома и т.д. " />
          </div>
        </div>
        <div class="form-receiver">
          <div class="form-receiver__header">
            <input
              type="radio"
              v-model="hi"
              value="receiver"
              name="personal"
              id="receiver"
            />
            <label for="receiver">Грузополучатель</label>
          </div>
          <div class="form-receiver__body">
            <div class="form-receiver__body-country">
              <input type="text" placeholder="Выберите страну" />
            </div>
            <div class="form-receiver__body-settings">
              <select>
                <option disabled value="Выберите страну">
                  Выберите страну
                </option>
                <option>Узбекистан</option>
                <option>Китай</option>
                <option>Таджикистан</option>
              </select>
            </div>
            <div class="form-receiver__body-methods">
              <select>
                <option disabled value="Выберите страну">
                  Способ доставки
                </option>
                <option>Узбекистан</option>
                <option>Китай</option>
                <option>Таджикистан</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hi: "sender",
      sender: {
        country: "Выберите страну",
        countries: ["Узбекистан", "Китай", "Таджикистан"],
        city: "Выберите город",
        cities: {
          Узбекистан: ["Ташкентская область", "Наманган", "Самарканд"],
          Китай: ["Пекин", "Чунцин", "Шанхай"],
          Таджикистан: ["Согд", "РПР", "Хатлон"],
        },
        region: "Выберите регион",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./FormView.style.scss";
</style>
