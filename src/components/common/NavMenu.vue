<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="min-width: 1300px"
  >
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;color: #fff">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
    <span
      style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold;color: #fff"
    >ButterflyStars——Blog</span>
  </el-menu>
</template>

<script>
export default {
  name: "NavMent",
  data() {
    return {
      navList: [
        { name: "/index", navItem: "首页" },
        { name: "/jotter", navItem: "笔记本" },
        { name: "/library", navItem: "图书馆" },
        { name: "/admin", navItem: "个人中心" }
      ]
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

span {
  pointer-events: none;
}
</style>