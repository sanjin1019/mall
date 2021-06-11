<template>
  <div>
    <nav-bar>
      <div slot="left" class="spe-style"><van-icon name="arrow-left" /></div>
      <div slot="center">
        <van-search class="search" v-model="searchValue" placeholder="请输入搜索关键词" />
      </div>
      <div slot="right" class="spe-style"><van-icon name="chat-o" /></div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";

export default {
  components: { NavBar },
  data() {
      return {
          searchValue: ''
      }
  }
};
</script>

<style lang="less" scoped>
.spe-style {
    margin-top: 5px;
    font-size: 20px;
}
</style>