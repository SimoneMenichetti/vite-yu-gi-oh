<script >
// importiamo il componente AppHeader
import AppHeader from './components/AppHeader.vue';
// importiamo il componente CardCharactersList
import CardCharactersList from './components/CardCharactersList.vue';
// import comp searc
import AppSearch from './components/AppSearch.vue'
// import foundcounter
import FoundCounter from './components/FoundCounter.vue';
// importiamo axios 
import axios from 'axios';

// import dello store
import { store } from './store';



export default{
  name:"App",
  components:{
    AppHeader,
    FoundCounter,
    CardCharactersList,
    AppSearch,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getCharacters(){
      axios.
      get(store.apiURL)
        .then( result =>{
          console.log(result.data.data);
          store.CardCharactersList= result.data.data;
          
        }
      )
      .catch(err=>{
        console.log(err);
      })
    }
  },
    created(){
      this.getCharacters();
    },
}
</script>

<template>
  <!-- identifichiamo con message il testo del titolo -->
  <AppHeader message="Yu-Gi-Oh Api"/>
  <main>
    <!-- richiamiamo il search @search getcharacter -->
    <AppSearch/>
    <FoundCounter/>
    <CardCharactersList/>
  </main>
  
</template>

<style lang="scss">
@use './assets/style/partials/general.scss' as*;

main{
  padding-top:20px;
  
}

</style>
