<script>
export default{
    name:'AppHeader',
    props:["message"]
}
</script>

<template>
    <!-- inserimento logo e titolo header -->
<header class="header">
  <img src="" alt="Logo">
  <h1 class="mb-0">{{message}}</h1>
</header>

</template>

<style scoped lang="scss">
@use'../assets/style/partials/general.scss';

// regole header
.header {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #f8f9fa; 
    }
    .header img {
      max-height: 50px;
      margin-right: 20px;
    }
    .header h1 {
      margin-bottom: 0;
      font-size: 30px; 
    }
</style>