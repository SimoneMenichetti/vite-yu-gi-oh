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



export default {
  name: "App",
  components: {
    AppHeader,
    FoundCounter,
    CardCharactersList,
    AppSearch,
  },
  data() {
    return {
      store,
      archetypes: [], 
    };
  },
  methods: {
    // Aggiunge il parametro archetype se è stato selezionato nella select un archetipo.
     
    getCharacters(archetype = '') {
    
      let apiUrl = store.apiURL;
      if (archetype) {
        apiUrl += `&archetype=${archetype}`;
      }
      axios
      // fa una richiesta all'API per ottenere i personaggi e aggiorna
        .get(apiUrl)
        .then(result => {
          console.log(result.data.data);
          store.CardCharactersList = result.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // getArchetypes:uso del  metodo per ottenere la lista degli archetipi dall'API e aggiorna lo store.
    getArchetypes() {
      const archetypeApiUrl = "https://db.ygoprodeck.com/api/v7/archetypes.php"; 
      axios
      //  fa una richiesta all'API per ottenere gli archetipi e aggiorna
        .get(archetypeApiUrl)
        .then(result => {
          store.archetypes = result.data.map(item => item.archetype_name); 
        })
        .catch(err => {
          console.log(err);
        });
    },
    // handleSelectArchetype: uso del metodo chiamato quando viene emesso l'evento 
    handleSelectArchetype(archetype) {
      // chiama getcharacters "le card" con l elemento selezionato
      this.getCharacters(archetype);
    },
  },

  // ciclo per richiamare le card e l archetipo quando gli object vengono creati 
  created() {
    this.getCharacters();
 
    this.getArchetypes(); 
  },
};
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api"/>
  <main>
     <AppSearch @handleSelectArchetype="handleSelectArchetype"/>
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
