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
            <input
              type="text"
              v-model="sender.name"
              placeholder="Имя и фамилия * "
            />
          </div>
          <div class="form-sender__body-email">
            <input
              v-model="sender.email"
              type="text"
              placeholder="Электронная почта * "
            />
          </div>
        </div>
        <div class="form-sender__body-phone">
          <vue-phone-number-input
            v-model="senderPhoneNumber"
            @input="results = $event"
            v-bind="props"
            color="#FFA300"
          ></vue-phone-number-input>
          <div class="form-sender__body-phone-index">
            <input type="text" placeholder="Почтовый индекс * " />
          </div>
        </div>
        <div class="form-sender__body-country">
          <select
            class="form-select"
            v-model="sender.country"
            @change="getSenderCitiesList"
          >
            <option disabled value="Выберите страну">Выберите страну *</option>
            <option
              :value="country.id"
              v-for="country in sender.countries"
              :key="country.id"
            >
              {{ country.name }}
            </option>
          </select>
        </div>
        <div class="form-sender__body-country">
          <select
            class="form-select"
            v-model="sender.city"
            @change="getSenderRegionsList"
            :disabled="!sender.cities.length"
          >
            <option disabled value="Выберите город">Выберите город *</option>
            <option
              :value="city.id"
              v-for="city in sender.cities"
              :key="city.id"
            >
              {{ city.name }}
            </option>
          </select>
          <select
            class="form-select"
            v-model="sender.region"
            :disabled="!sender.regions.length"
          >
            <option disabled value="Выберите регион">Выберите регион *</option>
            <option
              :value="region.id"
              v-for="region in sender.regions"
              :key="region.id"
            >
              {{ region.name }}
            </option>
          </select>
        </div>
        <div class="form-sender__body-country">
          <input
            v-model="sender.address"
            type="text"
            placeholder="Название улицы, дома и т.д. * "
          />
        </div>
        <div class="form-receiver__body-settings">
          <select class="form-select" v-model="sender.condition">
            <option disabled value="Условия поставки">
              Условия поставки *
            </option>
            <option
              :value="condition.id"
              v-for="condition in conditions"
              :key="condition.id"
            >
              {{ condition.name }}
            </option>
          </select>
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
            <input
              v-model="receiver.name"
              type="text"
              placeholder="Имя и фамилия * "
            />
          </div>
          <div class="form-receiver__body-country">
            <input
              v-model="receiver.email"
              type="text"
              placeholder="Электронная почта * "
            />
          </div>
          <div class="form-receiver__body-phone">
            <vue-phone-number-input
              color="#FFA300"
              v-model="receiverPhoneNumber"
              @update="results = $event"
              v-bind="props"
            ></vue-phone-number-input>
            <div class="form-sender__body-phone-index">
              <input type="text" placeholder="Почтовый индекс * " />
            </div>
          </div>
          <div class="form-sender__body-country">
            <select
              class="form-select"
              v-model="receiver.country"
              @change="getReceiverCitiesList"
            >
              <option disabled value="Выберите страну">
                Выберите страну *
              </option>
              <option
                :value="country.id"
                v-for="country in receiver.countries"
                :key="country.id"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
          <div class="form-sender__body-country">
            <select
              class="form-select"
              v-model="receiver.city"
              @change="getReceiverRegionsList"
              :disabled="!receiver.cities.length"
            >
              <option disabled value="Выберите город">Выберите город *</option>
              <option
                :value="city.id"
                v-for="city in receiver.cities"
                :key="city.id"
              >
                {{ city.name }}
              </option>
            </select>
            <select
              class="form-select"
              v-model="receiver.region"
              :disabled="!receiver.regions.length"
            >
              <option disabled value="Выберите регион">
                Выберите регион *
              </option>
              <option
                :value="region.id"
                v-for="region in receiver.regions"
                :key="region.id"
              >
                {{ region.name }}
              </option>
            </select>
          </div>
          <div class="form-sender__body-country">
            <input  type="text" placeholder="Название улицы, дома и т.д. * " />
          </div>
          <div class="form-receiver__body-methods">
            <select class="form-select" v-model="receiver.method">
              <option disabled value="Способ доставки">
                Способ доставки *
              </option>
              <option
                :value="method.id"
                v-for="method in methods"
                :key="method.id"
              >
                {{ method.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    changed: {
      type: Boolean,
    },
  },
  data() {
    return {
      props: {
        fetchCountry: true,
        translations: {
          phoneNumberLabel: "93 595 25 25",
        },
      },
      receiverPhoneNumber: null,
      senderPhoneNumber: null,
      results: null,
      owner: "sender",
      sender: {
        country: "Выберите страну",
        countries: [],
        city: "Выберите город",
        cities: [],
        region: "Выберите регион",
        regions: [],
        condition: "Условия поставки",
      },
      receiver: {
        country: "Выберите страну",
        countries: [],
        city: "Выберите город",
        cities: [],
        settings: "Условия поставки",
        region: "Выберите регион",
        regions: [],
        method: "Способ доставки",
      },
      conditions: [],
      methods: [],
    };
  },
  watch: {
    countryList() {
      this.setCountryList();
    },
    senderCitiesList() {
      this.setSenderCitiesList();
    },
    senderRegionsList() {
      this.setSenderRegionsList();
    },
    conditionList() {
      this.setConditionList();
    },
    receiverCitiesList() {
      this.setReceiverCitiesList();
    },
    receiverRegionsList() {
      this.setReceiverRegionsList();
    },
    methodList() {
      this.setMethodList();
    },
    isChanged() {
      this.sendData();
    },
  },
  computed: {
    countryList() {
      return this.$store.getters["application/getCountryList"];
    },
    senderCitiesList() {
      return this.$store.getters["application/getSenderCitiesList"];
    },
    senderRegionsList() {
      return this.$store.getters["application/getSenderRegionsList"];
    },
    conditionList() {
      return this.$store.getters["application/getConditionList"];
    },
    receiverCitiesList() {
      return this.$store.getters["application/getReceiverCitiesList"];
    },
    receiverRegionsList() {
      return this.$store.getters["application/getReceiverRegionsList"];
    },
    methodList() {
      return this.$store.getters["application/getMethodList"];
    },
    isChanged() {
      return this.changed;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("application/getCountryList");
      this.$store.dispatch("application/getConditionList");
      this.$store.dispatch("application/getMethodList");
    },
    setCountryList() {
      this.sender.countries = this.countryList.data;
      this.receiver.countries = this.countryList.data;
    },
    getSenderCitiesList(e) {
      this.$store.dispatch("application/getSenderCitiesList", e.target.value);
    },
    setSenderCitiesList() {
      this.sender.cities = this.senderCitiesList.data;
    },
    getSenderRegionsList(e) {
      this.$store.dispatch("application/getSenderRegionsList", e.target.value);
    },
    setSenderRegionsList() {
      this.sender.regions = this.senderRegionsList.data;
    },
    setConditionList() {
      this.conditions = this.conditionList.data;
    },
    getReceiverCitiesList(e) {
      this.$store.dispatch("application/getReceiverCitiesList", e.target.value);
    },
    setReceiverCitiesList() {
      this.receiver.cities = this.receiverCitiesList.data;
    },
    getReceiverRegionsList(e) {
      this.$store.dispatch(
        "application/getReceiverRegionsList",
        e.target.value
      );
    },
    setReceiverRegionsList() {
      this.receiver.regions = this.receiverRegionsList.data;
    },
    setMethodList() {
      this.methods = this.methodList.data;
    },
    sendData() {
      this.$emit("sender", this.sender, this.receiver);
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import "./AboutSender.style.scss";
</style>
