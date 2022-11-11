<template>
  <div class="p-online-chat">
    <div class="chat-box d-flex">
      <div class="chat-box-menu">
        <div class="search-bar">
          <input type="text" placeholder="Searching..." />
        </div>
        <ul class="chat-box-list list-unstyled">
          <li
            v-for="userData in usersData"
            :key="userData.id"
            class="chat-box-item"
          >
            <a href="#" class="d-flex justify-content-between">
              <div class="circle" v-if="userData.count > 0">
                {{ userData.count }}
              </div>
              <div v-if="userData.status" class="online"></div>
              <div class="wrapper d-flex align-items-center">
                <img
                  src="../../../assets/images/m-alex.svg"
                  width="45"
                  height="45"
                  alt=""
                />
                <div class="wrapper-info">
                  <h3>{{ userData.full_name }}</h3>
                  <p>{{ userData.messageText }}</p>
                </div>
              </div>
              <p class="date">
                <span>{{ userData.day }}</span> <span>{{ userData.time }}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div class="chat-box__window d-flex flex-column justify-content-between">
        <div class="chat-header d-flex align-items-center">
          <img
            src="../../../assets/images/m-hawk.svg"
            width="45"
            height="45"
            alt=""
          />
          <div class="online-user">
            <h3 class="m-0">UserName</h3>
            <p class="m-0">Online</p>
          </div>
        </div>
        <div class="chat-window"></div>
        <div class="chat-text">
          <input
            class="w-100"
            type="text"
            placeholder="Enter your message..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersData: [
        {
          id: 0,
          full_name: "Darlene Robertson",
          messageText: "Lorefid iff perh hpwuie ",
          img: "m-dovud.svg",
          count: 2,
          status: true,
          day: "Sn",
          time: "12:20",
        },
        {
          id: 1,
          full_name: "Jenny Wilson",
          messageText: "Lorefid iff perh hpwuie ",
          img: "",
          count: 4,
          status: false,
          day: "Sn",
          time: "12:20",
        },
        {
          id: 2,
          full_name: "Wade Warren",
          messageText: "Lorefid iff perh hpwuie ",
          img: "",
          count: 0,
          status: true,
          day: "Sn",
          time: "12:20",
        },
        {
          id: 0,
          full_name: "Darlene Robertson",
          messageText: "Lorefid iff perh hpwuie ",
          img: "m-dovud.svg",
          count: 2,
          status: true,
          day: "Sn",
          time: "12:20",
        },
        {
          id: 1,
          full_name: "Jenny Wilson",
          messageText: "Lorefid iff perh hpwuie ",
          img: "",
          count: 4,
          status: false,
          day: "Sn",
          time: "12:20",
        },
        {
          id: 2,
          full_name: "Wade Warren",
          messageText: "Lorefid iff perh hpwuie ",
          img: "",
          count: 0,
          status: true,
          day: "Sn",
          time: "12:20",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./online-chat.style.scss";
</style>
