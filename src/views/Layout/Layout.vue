<template>
  <!-- <div class="layout clearfix">
      <sidebar/>
      <div class="win" :class="{little: sidebar.opened}">
        <navbar/>
        <app-main/>
      </div>
  </div>-->
  <el-container>
    <el-aside width="200px">
      <sidebar/>
    </el-aside>
    <el-container>
      <el-header>
        <navbar/>
      </el-header>
      <el-main>
        <app-main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { navbar, sidebar, AppMain } from "./components"
import { mapState } from "vuex"

export default {
  name: 'Layout',
  components: {
    navbar,
    sidebar,
    AppMain
  },
  computed: {
    ...mapState({
      sidebar: 'sidebar'
    })
  },

}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>



