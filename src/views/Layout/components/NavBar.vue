<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div class="menu-switch" @click="menuSwitch">菜单</div>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import store from '@/store';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    menuSwitch() {
      store.commit('TOGGLE_SIDEBAR');
    }
  },
  computed: {
    ...mapState({
      sidebar:'sidebar'
    })
  },
}
</script>

<style lang="scss">
.navbar {
  .el-menu--horizontal > .el-menu-item,
  .el-menu--horizontal > .el-submenu {
    float: right;
  }
}
</style>

<style lang="scss" scoped>
.menu-switch {
  float: left;
  color: #fff;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  outline: none;
}
.menu-switch:hover {
  background-color: rgb(64, 74, 80);
  cursor: pointer;
}
</style>



