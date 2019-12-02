<template>
  <div id="app">
    <hs-header></hs-header>
    <router-view></router-view>
    <hs-footer></hs-footer>
  </div>
</template>

<script>
import HsHeader from './components/header/HsHeader'
import HsFooter from './components/footer/HsFooter'
export default {
  name: 'app',
  components: {
    HsHeader,
    HsFooter
  }
}
</script>

<style>
  * {
    margin: 0;
    border: 0;
    padding: 0;
  }
  #app {
    background-color: #f3f3f3;
  }
</style>
