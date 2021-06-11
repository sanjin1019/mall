<template>
  <nav class="navbar">
    <div class="navbar-item">
      <router-link to="/home" @click="turn(to)" :class="activeId == 1 ? 'active' : 'item-box'">
        <img :src="activeId == 1?require('@/assets/images/tabbar/home_active.svg'):require('@/assets/images/tabbar/home.svg')" alt="首页">
        <p>首页</p>
      </router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/category" :class="activeId == 2 ? 'active' : 'item-box'">
        <img :src="activeId == 2?require('@/assets/images/tabbar/category_active.svg'):require('@/assets/images/tabbar/category.svg')" alt="分类">
        <p>分类</p>
      </router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/cart" :class="activeId == 3 ? 'active' : 'item-box'">
        <img :src="activeId == 3?require('@/assets/images/tabbar/shopcart_active.svg'):require('@/assets/images/tabbar/shopcart.svg')" alt="购物车">
        <p>购物车</p>
      </router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/me" :class="activeId == 4 ? 'active' : 'item-box'">
        <img :src="activeId == 4?require('@/assets/images/tabbar/profile_active.svg'):require('@/assets/images/tabbar/profile.svg')" alt="我的">
        <p>我的</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeId: 1,
      isActive: false
    };
  },
  mounted() {
    let name = this.$router.history.current.name;
    this.changeActiveId(name);
  },
  methods: {
    changeActiveId(name) {
      switch (name) {
        case "home":
          this.activeId = 1;
          break;
        case "category":
          this.activeId = 2;
          break;
        case "cart":
          this.activeId = 3;
          break;
        case "me":
          this.activeId = 4;
          break;
      }
    },
    turn(name) {
      console.log(name)
    }
  },
  watch: {
    $route(to) {
      let name = to.name;
      this.changeActiveId(name);
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  background-color: #e0e0e0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  .navbar-item {
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    .item-box {
      img {
        width: 24px;
      }
    }
    .active {
      color: #FF5777;
      img {
        width: 24px;
      }
    }
  }
}
</style>
