<script>
// importiamo lo store per l utilizzo v model
import {store} from '../store';
export default{
    name:'AppSearch',
    data(){
        return{
            store,
           
        }
    }
}
</script>

<template>
 <div class="col-2 ms-5 ps-3 ">
    <select v-model="store.selectArchetype" class="form-select" @change="$emit('handleSelectArchetype')">
        <option value="" disabled selected hidden>Select type</option>
        <option value="Alien">Alien</option>
    </select>
</div>
</template>

<style></style>