<template>
  <div class="c-cu-shipment">
    <div class="shipment">
      <h2 class="shipment-headline">Данные о посылке</h2>
      <div class="shipment-head row">
        <div class="shipment-head__add">
          <input
            type="radio"
            name="shipment"
            id="adding"
            v-model="product"
            value="adding"
          />
          <label for="adding">Добавить сведения о продукте</label>
        </div>
        <div class="shipment-head__send">
          <input
            type="radio"
            name="shipment"
            id="sending"
            v-model="product"
            value="sending"
          />
          <label for="sending">Отправить файл</label>
        </div>
      </div>
      <div v-if="product == 'adding'" class="shipment-body">
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
</template>

<script>
export default {
  data() {
    return {
      warning: false,
      product: "adding",
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
  computed: {
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
      if (this.comment == "") {
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
          this.$emit("shipment", this.accordions, this.comment);
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
  },
};
</script>

<style lang="scss" scoped>
@import "./AboutShipment.style.scss";
</style>
