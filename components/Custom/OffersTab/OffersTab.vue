<template>
  <div class="c-cu-offers">
    <div class="tabs">
      <ul class="tabs-header">
        <li
          class="tabs-header__item"
          v-for="(header, index) in tabHeaders"
          :key="index"
          @click="makeTab(header.id)"
        >
          {{ header.title }}
        </li>
      </ul>
    </div>
    <div class="tab-panels">
      {{ activeTabPanel }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      selectedTabId: "getSelectedTabId",
      tabHeaders: "getTabHeaders",
    }),
    activeTabPanel() {
      let result = undefined;
      this.tabHeaders.forEach((element) => {
        if (element.id === this.selectedTabId) {
          result = element;
        }
      });
      return result;
    },
  },
  methods: {
    makeTab(tabId) {
      this.$store.commit("SET_SELECTED_TAB_ID", tabId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./OffersTab.style.scss";
</style>
