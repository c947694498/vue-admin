<template>
  <div class="layout clearfix">
    <navbar/>
    <sidebar/>
    <app-main/>
  </div>
</template>

<script>
import { navbar, sidebar, AppMain } from "./components"


export default {
  name: 'Layout',
  components: {
    navbar,
    sidebar,
    AppMain
  },
  crearted: ()=>{
    console.log(1);
  }
}
</script>

