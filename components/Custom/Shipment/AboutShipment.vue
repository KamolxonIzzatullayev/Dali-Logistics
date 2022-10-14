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
          <div class="shipment-body__header-item">Наименование</div>
          <div class="shipment-body__header-item">Tип упаковки</div>
          <div class="shipment-body__header-item">Количество</div>
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
              <input type="text" />
            </div>
            <div class="shipment-body__body-item-input">
              <input type="text" />
            </div>
            <div class="shipment-body__body-item-input">
              <input type="text" />
            </div>
            <div class="shipment-body__body-item-input">
              <input type="text" />
            </div>
            <div class="shipment-body__body-item-input">
              <input type="text" />
            </div>
            <div class="shipment-body__body-item-action">
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="sending" :class="isFileUploaded ? 'active' : ''">
        <input type="file" name="" id="input-file" @change="fileUploaded" />
        <button class="w-100" @click="uploadFile">
          <img
            v-if="!isFileUploaded"
            src="../../../assets/icons/bxs-cloud-upload.svg"
            alt="upload"
          />
          <img
            v-else
            src="../../../assets/icons/bxs-cloud-uploaded.svg"
            alt="upload"
          />
          <span>{{ file }}</span>
        </button>
      </div>
      <div class="shipment-footer">
        <div class="shipment-footer__comment">
          <textarea cols="30" rows="4" placeholder="Комментарии"></textarea>
        </div>
        <div class="shipment-footer__submit">
          <div class="shipment-footer__submit-accept">
            <input
              class="form-check-input"
              type="checkbox"
              name=""
              id="accept"
            />
            <label for="accept"
              >Нажимая кнопку "Отправить", вы принимаете условия обработки
              персональных данных.
            </label>
          </div>
          <div class="shipment-footer__submit-done">
            <button>Отправить</button>
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
      product: "adding",
      file: "Файл не выбран",
      isFileUploaded: false,
      accordions: [
        {
          name: "",
        },
      ],
    };
  },
  methods: {
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
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./AboutShipment.style.scss";
</style>
