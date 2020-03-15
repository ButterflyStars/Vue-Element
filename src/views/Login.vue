<template>
  <div class id>
    用户名:
    <input type="text" v-model="loginForm.username" placeholder="请输入用户名" />
    <br />
    <br />密码：
    <input type="password" v-model="loginForm.password" placeholder="请输入密码" />
    <br />
    <br />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      this.$axios
        .post("/login", {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(response => {
          if (response.data.code === 200) {
            this.$router.replace({ path: "/index" });
          }
        })
        .catch(fail => {});
    }
  }
};
</script>

<style scoped>
</style>