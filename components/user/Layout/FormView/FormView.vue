<template>
  <div class="c-l-form">
    <div class="container-xxl">
      <h1 class="custom-headline">Заполните заявка</h1>

      <div class="c-cu-sender">
        <div class="form-sender__header">
          <div>
            <input
              type="radio"
              v-model="owner"
              checked
              name="personal"
              value="sender"
              id="sender"
            />
            <label for="sender">Отправитель</label>
          </div>
          <div>
            <input
              type="radio"
              v-model="owner"
              value="receiver"
              name="personal"
              id="receiver"
            />
            <label for="receiver">Грузополучатель</label>
          </div>
        </div>
        <div class="form d-flex">
          <div class="form-sender">
            <h3 class="form-headline">Отправитель</h3>
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
                @update="senderResults = $event"
                v-bind="props"
                color="#FFA300"
              ></vue-phone-number-input>
              <div class="form-sender__body-phone-index">
                <input
                  v-model="sender.index"
                  type="text"
                  placeholder="Почтовый индекс * "
                />
              </div>
            </div>
            <div class="form-sender__body-country">
              <select
                class="form-select"
                v-model="sender.country"
                @change="getSenderCitiesList"
              >
                <option disabled value="Выберите страну">
                  Выберите страну *
                </option>
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
                <option disabled value="Выберите город">
                  Выберите город *
                </option>
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
                <option disabled value="Выберите регион">
                  Выберите регион *
                </option>
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
          <div class="form-receiver">
            <h3 class="form-headline">Грузополучатель</h3>
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
                  @update="receiverResults = $event"
                  v-bind="props"
                ></vue-phone-number-input>
                <div class="form-sender__body-phone-index">
                  <input
                    v-model="receiver.index"
                    type="text"
                    placeholder="Почтовый индекс * "
                  />
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
                  <option disabled value="Выберите город">
                    Выберите город *
                  </option>
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
                <input
                  v-model="receiver.address"
                  type="text"
                  placeholder="Название улицы, дома и т.д. * "
                />
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

      <!-- <AboutSender :changed="changed" @sender="sender"></AboutSender> -->
      <!-- <AboutShipment @shipment="shipment" :error="error"></AboutShipment> -->

      <div class="c-cu-shipment">
        <div class="shipment">
          <h2 class="shipment-headline">Данные о посылке</h2>
          <div class="shipment-head row">
            <div class="shipment-head__add">
              <input
                type="radio"
                name="shipment"
                id="adding"
                v-model="productType"
                value="adding"
              />
              <label for="adding">Добавить сведения о продукте</label>
            </div>
            <div class="shipment-head__send">
              <input
                type="radio"
                name="shipment"
                id="sending"
                v-model="productType"
                value="sending"
              />
              <label for="sending">Отправить файл</label>
            </div>
          </div>
          <div v-if="productType == 'adding'" class="shipment-body">
            <div class="shipment-body__header">
              <div class="shipment-body__header-item">Наименование *</div>
              <div class="shipment-body__header-item">Tип упаковки</div>
              <div class="shipment-body__header-item">Количество *</div>
              <div class="shipment-body__header-item">Обший обем(м3)</div>
              <div class="shipment-body__header-item">Обший весь</div>
              <div class="shipment-body__header-action"></div>
            </div>
            <div class="shipment-body__body">
              <div
                v-for="(item, index) in accordions"
                :key="index"
                class="shipment-body__body-item"
              >
                <div class="shipment-body__body-item-input">
                  <input type="text" v-model="item.name" />
                </div>
                <div class="shipment-body__body-item-input">
                  <select
                    class="form-select"
                    v-model="item.colli"
                    @change="getColli"
                    :value="colliList?.length ? colliList.data[0].id : ''"
                  >
                    <option
                      :value="colli.id"
                      v-for="colli in colliList.data"
                      :key="colli.id"
                      :selected="colli.id == 1"
                    >
                      {{ colli.name }}
                    </option>
                  </select>
                </div>
                <div class="shipment-body__body-item-input">
                  <input type="number" v-model="item.quantity" />
                </div>
                <div class="shipment-body__body-item-input">
                  <input type="number" v-model="item.full_size" />
                </div>
                <div class="shipment-body__body-item-input">
                  <input type="number" v-model="item.full_weight" />
                </div>
                <div
                  class="shipment-body__body-item-action"
                  :class="accordionsLength > 1 ? '' : 'disabled'"
                >
                  <button @click="removeItem(index)">-</button>
                </div>
              </div>
            </div>
            <div class="shipment-body__footer">
              <div class="shipment-body__footer-item all">Итог</div>
              <div class="shipment-body__footer-item"></div>
              <div class="shipment-body__footer-item">
                <input type="number" v-model="result.quantity" disabled />
              </div>
              <div class="shipment-body__footer-item">
                <input type="number" v-model="result.full_size" disabled />
              </div>
              <div class="shipment-body__footer-item">
                <input type="number" v-model="result.full_weight" disabled />
              </div>
              <div class="shipment-body__footer-action">
                <button @click="addShipment">+</button>
              </div>
            </div>
          </div>
          <div v-else class="sending" :class="isFileUploaded ? 'active' : ''">
            <input type="file" name="" id="input-file" @change="fileUploaded" />
            <button class="w-100" @click="uploadFile">
              <img
                v-if="!isFileUploaded"
                src="../../../../assets/icons/bxs-cloud-upload.svg"
                alt="upload"
              />
              <img
                v-else
                src="../../../../assets/icons/bxs-cloud-uploaded.svg"
                alt="upload"
              />
              <span>{{ file }}</span>
            </button>
          </div>
          <div class="shipment-footer">
            <div class="shipment-footer__comment">
              <textarea
                cols="30"
                rows="4"
                placeholder="Комментарии"
                v-model="comment"
              ></textarea>
            </div>
            <div class="shipment-footer__warning" v-if="warning">
              <p class="shipment-footer__warning-text">
                * - Поле обязательно к заполнению
              </p>
            </div>
            <div class="shipment-footer__submit">
              <div class="shipment-footer__submit-accept">
                <input
                  class="form-check-input border-0"
                  type="checkbox"
                  id="accept"
                  v-model="termsAgreement"
                />
                <label for="accept"
                  >Нажимая кнопку "Отправить", вы принимаете условия обработки
                  персональных данных.
                </label>
              </div>
              <div class="shipment-footer__submit-done">
                <button
                  :class="termsAgreement ? 'done' : 'notDone'"
                  @click="saveData"
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutSender from "@/components/user/Custom/Sender/AboutSender.vue";
import AboutShipment from "@/components/user/Custom/Shipment/AboutShipment.vue";
import Cookie from "js-cookie";
export default {
  components: { AboutSender, AboutShipment },
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
      senderResults: null,
      receiverResults: null,
      owner: "sender",
      sender: {
        name: "",
        email: "",
        index: "",
        address: "",
        country: "Выберите страну",
        countries: [],
        city: "Выберите город",
        cities: [],
        region: "Выберите регион",
        regions: [],
        condition: "Условия поставки",
      },
      receiver: {
        name: "",
        email: "",
        index: "",
        address: "",
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
      product: {},
      comment: undefined,
      changed: true,
      applicationSenderForm: {},
      applicationShipmentForm: {},
      error: false,
      warning: false,
      productType: "adding",
      file: "Файл не выбран",
      isFileUploaded: false,
      accordions: [
        {
          name: "",
          colli: 1,
          quantity: 0,
          full_size: 0,
          full_weight: 0,
        },
      ],
      comment: "",
      termsAgreement: false,
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

    accordionsLength() {
      return this.accordions.length;
    },

    colliList() {
      return this.$store.getters["application/getColliList"];
    },

    result() {
      let a = {};
      a.quantity = 0;
      a.full_size = 0;
      a.full_weight = 0;

      this.accordions.forEach((elem) => {
        a.quantity += Number(elem.quantity);
        a.full_size += Number(elem.full_size);
        a.full_weight += Number(elem.full_weight);
      });

      return a;
    },
  },

  methods: {
    saveData() {
      if (
        this.sender.name == "" ||
        this.sender.address == "" ||
        this.sender.email == "" ||
        this.senderResults.formattedNumber.length < 4 ||
        this.sender.index.length < 6 ||
        typeof this.sender.condition == "string" ||
        typeof this.sender.region == "string" ||
        typeof this.sender.city == "string" ||
        typeof this.sender.country == "string" ||
        this.receiver.name == "" ||
        this.receiver.address == "" ||
        this.receiver.email == "" ||
        this.receiverResults.formattedNumber.length < 4 ||
        this.receiver.index.length < 6 ||
        typeof this.receiver.method == "string" ||
        typeof this.receiver.region == "string" ||
        typeof this.receiver.city == "string" ||
        typeof this.receiver.country == "string" ||
        this.comment == ""
      ) {
        this.warning = true;
      } else {
        let allBooleans = [];
        this.accordions.forEach((elem) => {
          if (elem.name !== "" && elem.quantity !== 0) {
            allBooleans.push(true);
          } else {
            allBooleans.push(false);
          }
        });

        let isBoolean = allBooleans.every((element) => element === true);

        if (isBoolean) {
          let a = {};
          if (this.owner == "sender") {
            a.who_is = 1;
          } else if (this.owner == "receiver") {
            a.whoe_is = 2;
          }
          a.full_name = sender.name;
          a.full_name_from = receiver.name;
          a.email = sender.email;
          a.email_from = receiver.email;
          a.phone = sender.phone;
          a.phone_from = receiver.phone_from;
          a.region_id = sender.region;
          a.region_from_id = receiver.region;
          a.address = sender.address;
          a.address_from = receiver.address;
          a.mail_index = sender.index;
          a.mail_from_index = receiver.index;
          a.condition_id = sender.condition;
          a.delivery_id = receiver.method;
          a.comment = this.comment;
          a.product = this.accordions;
          console.log(a);
          this.$store.dispatch("application/sendApplication", a);
        } else {
          this.warning = true;
        }

        this.warning = false;
      }
    },
    uploadFile() {
      document.getElementById("input-file").click();
    },
    fileUploaded() {
      this.file = document.getElementById("input-file").value;
      this.isFileUploaded = true;
    },
    addShipment() {
      this.accordions.push({
        name: "",
        colli: 1,
        quantity: 0,
        full_size: 0,
        full_weight: 0,
      });
    },
    removeItem(ind) {
      this.accordions.splice(ind, 1);
    },
    getColli(id) {
      this.colliId = id;
    },
    // shipment(product, comment) {},
    // sender(sender, receiver, owner, senderPhone, receiverPhone) {
    //   if (
    //     sender.name == "" ||
    //     sender.address == "" ||
    //     sender.email == "" ||
    //     senderPhone.length < 4 ||
    //     sender.index.length < 6 ||
    //     typeof sender.condition == "number" ||
    //     typeof sender.region == "number" ||
    //     typeof sender.city == "number" ||
    //     typeof sender.country == "number" ||
    //     receiver.name == "" ||
    //     receiver.address == "" ||
    //     receiver.email == "" ||
    //     receiverPhone.length < 4 ||
    //     receiver.index.length < 6 ||
    //     typeof receiver.method == "number" ||
    //     typeof receiver.region == "number" ||
    //     typeof receiver.city == "number" ||
    //     typeof receiver.country == "number"
    //   ) {
    //     let a = {};
    //     if (owner == "sender") {
    //       a.who_is = 1;
    //     } else if (owner == "receiver") {
    //       a.whoe_is = 2;
    //     }
    //     a.full_name = sender.name;
    //     a.full_name_from = receiver.name;
    //     a.email = sender.email;
    //     a.email_from = receiver.email;
    //     a.phone = sender.phone;
    //     a.phone_from = receiver.phone_from;
    //     a.region_id = sender.region;
    //     a.region_from_id = receiver.region;
    //     a.address = sender.address;
    //     a.address_from = receiver.address;
    //     a.mail_index = sender.index;
    //     a.mail_from_index = receiver.index;
    //     a.condition_id = sender.condition;
    //     a.delivery_id = receiver.method;
    //     a.comment = this.comment;
    //     a.product = this.product;
    //   } else {
    //     this.error = true;
    //   }
    // },

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
      this.sender(
        this.sender,
        this.receiver,
        this.owner,
        this.senderResults.formattedNumber,
        this.receiverResults.formattedNumber
      );
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
@import "./FormView.style.scss";
</style>
