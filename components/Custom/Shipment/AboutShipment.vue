<template>
  <div class="c-cu-shipment">
    <div class="shipment">
      <h2 class="shipment-headline">Данные о посылке</h2>
      <div class="shipment-head">
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
        <div class="accordion" id="accordionExample">
          <div
            class="accordion-item"
            v-for="(accordion, index) in accordions"
            :key="index"
          >
            <h2 class="accordion-header" :id="`heading${index}`">
              <button
                class="accordion-button"
                :class="index == 0 ? '' : 'collapsed'"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse${index}`"
                :aria-expanded="index == 0 ? true : false"
                :aria-controls="`collapse${index}`"
              >
                {{ accordion.name ? accordion.name : "Одежды" }}
              </button>
            </h2>
            <div
              :id="`collapse${index}`"
              class="accordion-collapse collapse"
              :class="index == 0 ? 'show' : ''"
              :aria-labelledby="`heading${index}`"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="accordion-body__header d-flex flex-wrap">
                  <input
                    type="text"
                    placeholder="Наименование * "
                    v-model="accordion.name"
                  />
                  <input
                    type="text"
                    placeholder="Tип упаковки * "
                    v-model="accordion.type"
                  />
                </div>
                <div class="accordion-body__body d-flex flex-wrap">
                  <div class="accordion-body__body-sizes d-flex flex-wrap">
                    <input type="text" placeholder="Длина(cм) * " />
                    <input type="text" placeholder="Ширина(cм) * " />
                    <input type="text" placeholder="Высота(cм) * " />
                  </div>
                  <div class="accordion-body__body-weights d-flex flex-wrap">
                    <input type="text" placeholder="Обем еденицы(м3) * " />
                    <input type="text" placeholder="Вес еденицы(кг) * " />
                  </div>
                </div>
                <div class="accordion-body__footer d-flex flex-wrap">
                  <input type="text" placeholder="Количество * " />
                  <input type="text" placeholder="Обший обем(м3) * " />
                  <input type="text" placeholder="Обший весь * " />
                </div>
              </div>
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
        <div v-if="product == 'adding'" class="shipment-footer__all">
          <div class="shipment-footer__all-sum">
            <h4>Итог</h4>
            <div class="inputs">
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <div class="shipment-footer__all-add">
            <button @click="addShipment">
              <img src="../../../assets/icons/bx-plus.svg" alt="plus icon" />
            </button>
          </div>
        </div>
        <div class="shipment-footer__comment">
          <h4>Комментарии к продукту</h4>
          <input type="text" />
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
