<template>
  <div class="c-cu-sender">
    <div class="form d-flex">
      <div
        class="form-sender"
        :class="owner == 'sender' ? 'active' : 'not-active'"
      >
        <div class="form-sender__header">
          <input
            type="radio"
            v-model="owner"
            checked
            name="personal"
            value="sender"
            id="sender"
          />
          <label for="sender">Отправитель</label>

          <input
            type="radio"
            v-model="owner"
            value="receiver1"
            name="personal"
            id="receiver1"
          />
          <label for="receiver1">Грузополучатель</label>
        </div>
        <div class="form-sender__body">
          <div class="form-sender__body-email">
            <input type="text" placeholder="Электронная почта * " />
          </div>
        </div>
        <div class="form-sender__body-country">
          <select class="form-select" v-model="sender.country">
            <option disabled value="Выберите страну">Выберите страну *</option>
            <option
              :value="country"
              v-for="(country, index) in sender.countries"
              :key="index"
            >
              {{ country }}
            </option>
          </select>
          <select class="form-select" v-model="sender.city">
            <option disabled value="Выберите город">Выберите город *</option>
            <option
              value=""
              v-for="(city, index) in sender.cities[sender.country]"
              :key="index"
            >
              {{ city }}
            </option>
          </select>
        </div>
        <div class="form-sender__body-country">
          <select class="form-select" v-model="sender.region">
            <option disabled value="Выберите регион">Выберите регион *</option>
            <option>Узбекистан</option>
            <option>Китай</option>
            <option>Таджикистан</option>
          </select>

          <input type="text" placeholder="Название улицы, дома и т.д. * " />
        </div>
      </div>
      <div
        class="form-receiver"
        :class="owner !== 'sender' ? 'active' : 'not-active'"
      >
        <div class="form-receiver__header">
          <div class="mobile-input">
            <input
              type="radio"
              v-model="owner"
              checked
              name="personal"
              value="sender"
              id="sender1"
            />
            <label for="sender1">Отправитель</label>

            <input
              type="radio"
              v-model="owner"
              value="receiver1"
              name="personal"
              id="receiver3"
            />
            <label for="receiver3">Грузополучатель</label>
          </div>
          <div class="desktop-input">
            <input
              type="radio"
              v-model="owner"
              value="receiver"
              name="personal"
              id="receiver2"
            />
            <label for="receiver2">Грузополучатель</label>
          </div>
        </div>
        <div class="form-receiver__body">
          <div class="form-receiver__body-country">
            <input type="text" placeholder="Выберите страну * " />
          </div>
          <div class="form-receiver__body-settings">
            <select class="form-select" v-model="receiver.settings">
              <option disabled value="Условия поставки">
                Условия поставки *
              </option>
              <option>EXW</option>
              <option>FOB</option>
              <option>CIP</option>
            </select>
          </div>
          <div class="form-receiver__body-methods">
            <select class="form-select" v-model="receiver.methods">
              <option disabled value="Способ доставки">
                Способ доставки *
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
</template>

<script>
export default {
  data() {
    return {
      owner: "sender",
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
      receiver: {
        country: "Выберите страну",
        settings: "Условия поставки",
        methods: "Способ доставки",
      },
    };
  },
  methods: {
    loggingInfo() {
      console.log(this.owner);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./AboutSender.style.scss";
</style>
