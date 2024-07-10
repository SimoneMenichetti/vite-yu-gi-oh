<script>
// importiamo lo store per l utilizzo v model
import {store} from '../store';
export default{
    name:'AppSearch',
    props: {
    archetypes: {
      type: Array,
      required: true,
    },
  },
    
    data(){
        return{
            store,
           
        }
    },

// onArchetypeChange emette un evento handleSelectArchetype con il valore dell'archetipo selezionato.
    methods: {
    onArchetypeChange() {
      this.$emit('handleSelectArchetype', this.store.selectArchetype);
    },
  },
}
</script>

<template>
    <div class="col-2 ms-5 ps-3">
        <!-- // @change="onArchetypeChange" chiama onArchetypeChange quando l'utente cambia la selezione. -->
        <select v-model="store.selectArchetype" class="form-select" @change="onArchetypeChange">
      <option value="" disabled selected hidden>Select type</option>
      <!-- v-model="store.selectArchetype" lega la select al valore selectArchetype dello store. -->
      <option v-for="archetype in store.archetypes" :key="archetype" :value="archetype">
            {{ archetype }}
        </option>
        </select>
    </div>
</template>

<style></style>