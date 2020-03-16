<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu></SideMenu>
    </el-aside>
    <el-main>
      <books class="books-area"></books>
      <h1>图书馆</h1>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from "./SideMenu";
import Books from "./Books";
export default {
  name: "AppLibrary",
  data() {
    return {};
  },
  components: { SideMenu, Books }
};
</script>

<style scoped>
.books-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
</style>