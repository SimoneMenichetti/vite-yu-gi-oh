<script>
// importiamo lo store per l utilizzo v model
import {store} from '../store';
export default{
    name:'AppSearch',
    data(){
        return{
            store,
            // creata variab per la select di default
             selectedCategory: '',
        }
    }
}
</script>

<template>
 <div class="col-2 ms-5 ps-3 ">
    <select v-model="selectedCategory" class="form-select">
        <option value="" disabled selected hidden>Select type</option>
        <option value="">Alien</option>
        <option value="">Infernoble Arms</option>
        <option value="">Noble Knight</option>
        <option value="">Melodious</option>
        <option value="">Archfiend</option>
        <option value="">A.I.</option>
        <option value="">ABC</option>
        <option value="">Abyss Actor</option>
        <option value="">Abyss Script</option>
        <option value="">Abyss-</option>
        <option value="">Adamancipator</option>
        <option value="">Advanced Crystal Beast</option>
        <option value="">Adventurer Token</option>
        <option value="">Aesir</option>
        
      </select>
</div>
</template>

<style></style>