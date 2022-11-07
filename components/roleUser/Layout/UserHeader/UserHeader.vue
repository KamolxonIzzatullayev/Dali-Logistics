<template>
  <div class="dashboard-header d-flex">
    <div class="dashboard-header__search input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Universal Search"
        aria-label="Universal Search"
        aria-describedby="basic-addon2"
      />
      <span class="input-group-text" id="basic-addon2">
        <img src="@/assets/icons/admin/admin-search-icon.png" alt="" />
      </span>
    </div>
    <div class="dropdown dashboard-header__notification">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="@/assets/icons/admin/admin-notification.png" alt="" />
        <span></span>
      </button>
      <ul class="dropdown-menu p-0">
        <li
          class="show-all d-flex justify-content-between align-items-center px-3 pt-3"
        >
          <h3>Notifications</h3>
          <a class="" href="#"> Mark as all read </a>
        </li>
        <li>
          <div
            v-for="notification in notifications"
            :key="notification.id"
          >
            <a
              class="dropdown-item px-3 pt-3 justify-content-between d-flex"
              href="#"
            >
              <div class="dropdown-item__info">
                <h3>{{ notification.sender }}</h3>
                <p>{{ notification.notification_text }}</p>
              </div>
              <div
                class="dropdown-item__date flex-column d-flex justify-content-between align-items-end"
              >
                <div class="circle"></div>
                <p>{{ notification.notification_time }}</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn-group dashboard-header__chat">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="@/assets/icons/admin/admin-chat.png" alt="" />
      </button>
      <ul class="dropdown-menu p-0">
        <li
          class="show-all d-flex justify-content-between align-items-center px-3 pt-3"
        >
          <h3>Messages</h3>
        </li>
        <li>
          <div
            v-for="message in messages"
            :key="message.id"
          >
            <a
              class="dropdown-item px-3 py-3 justify-content-between d-flex"
              href="#"
            >
              <div
                class="dropdown-item__message justify-content-between d-flex align-items-center"
              >
                <img :src="require(`@/assets/images/${message.img}`)" alt="" />
                <div class="dropdown-item__info ml-2">
                  <h3 class="">{{ message.sender }}</h3>
                  <p class="m-0 p-0">{{ message.message_text }}</p>
                </div>
              </div>
              <div
                class="dropdown-item__date flex-column d-flex justify-content-between align-items-end"
              >
                <div class="circle"></div>
                <p class="m-0">{{ message.time }}</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn-group dashboard-header__chat">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="@/assets/images/usa-flag.svg" alt="" />
      </button>
    </div>
    <div class="dropdown dashboard-header__profile">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="@/assets/images/admin/admin-profile.png" alt="" />
        <div class="profile">
          <p class="profile-name">{{ userInfo.full_name }}</p>
          <p class="profile-role">Admistrator</p>
        </div>
      </button>
      <ul class="dropdown-menu w-100 p-0 dropdown-menu-end">
        <li>
          <div
            v-for="adminstrator in adminstrations"
            :key="adminstrator.id"
          >
            <a
              class="dropdown-item px-3 py-3 justify-content-between d-flex"
              href="#"
            >
              <div
                class="dropdown-item__message justify-content-between d-flex align-items-center"
              >
                <img
                  :src="require(`@/assets/images/${adminstrator.img}`)"
                  alt=""
                />
                <div class="dropdown-item__info ml-2">
                  <h3 class="">{{ adminstrator.full_name }}</h3>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      adminstrations: [
        {
          id: 0,
          img: "m-dovud.svg",
          full_name: "Behzod",
        },
        {
          id: 1,
          img: "m-dovud.svg",
          full_name: "Akbar",
        },
        {
          id: 2,
          img: "m-dovud.svg",
          full_name: "Axror",
        },
      ],
      notifications: [
        {
          id: 0,
          status: "unread",
          notification_time: "05.11.2022",
          notification_text: "Hello everybody",
          sender: "Robert",
        },
        {
          id: 1,
          status: "unread",
          notification_time: "05.11.2022",
          notification_text: "Hello everybody",
          sender: "Alex",
        },
        {
          id: 2,
          status: "unread",
          notification_time: "05.11.2022",
          notification_text: "Hello everybody",
          sender: "Dovud",
        },
        {
          id: 3,
          status: "unread",
          notification_time: "05.11.2022",
          notification_text: "Hello everybody",
          sender: "Hawk",
        },
      ],
      messages: [
        {
          id: 0,
          time: "10:00 am",
          sender: "Nodirkhon",
          message_text: "Hello everyone!",
          img: "m-hawk.svg",
        },
        {
          id: 1,
          time: "10:00 am",
          sender: "Abdulakhad",
          message_text: "Hello buddy!",
          img: "m-robert.svg",
        },
        {
          id: 2,
          time: "10:00 am",
          sender: "Kamolkhon",
          message_text: "Hello my friend!",
          img: "m-alex.svg",
        },
        {
          id: 3,
          time: "10:00 am",
          sender: "Nodirkhon",
          message_text: "Hello everyone!",
          img: "m-dovud.svg",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ userInfo: "auth/getUser" }),
  },
};
</script>

<style lang="scss" scoped>
@import "./UserHeader.style.scss";
</style>
