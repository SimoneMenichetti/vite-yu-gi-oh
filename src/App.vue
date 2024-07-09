<script >
// importiamo il componente AppHeader
import AppHeader from './components/AppHeader.vue'

export default{
  name:"App",
  components:{
    AppHeader,
  }
}
</script>

<template>
  <!-- identifichiamo con message il testo del titolo -->
  <AppHeader message="Yu-Gi-Oh Api"/>
</template>

<style lang="scss">
@use './assets/style/partials/general.scss' ;

main{
  padding-top:20px
}

</style>
