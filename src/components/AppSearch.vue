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
 <div class="col-1 ms-5 ps-3 ">
      <select v-model="selectedCategory" class="form-select">
        <option value="Alien">Alien</option>
        <!-- Add other categories here -->
      </select>
</div>
</template>

<style></style>