<template>
    <div>
        <nav-bar class="nav-bar"> 
            <div slot="center">购物街</div>
            <div slot="right">消息</div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

export default {
  components: { NavBar },
      data() {
        return {
            activeId: 1
        }
    }
}
</script>

<style lang="less" scoped>
    .nav-bar {
        background-color: #FF5777;
        color: #fff;
    }
</style>