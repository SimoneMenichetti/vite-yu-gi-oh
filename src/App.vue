<script >
// importiamo il componente AppHeader
import AppHeader from './components/AppHeader.vue'
// importiamo il componente CardCharactersList
import CardCharactersList from './components/CardCharactersList.vue';

export default{
  name:"App",
  components:{
    AppHeader,
    CardCharactersList,
  }
}
</script>

<template>
  <!-- identifichiamo con message il testo del titolo -->
  <AppHeader message="Yu-Gi-Oh Api"/>
  <main>
    <CardCharactersList/>
  </main>
  
</template>

<style lang="scss">
@use './assets/style/partials/general.scss' as*;

main{
  padding-top:20px;
  
}

</style>
