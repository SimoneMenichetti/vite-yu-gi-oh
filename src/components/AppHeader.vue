<script>
export default{
    name:'AppHeader',
    props:["message"],
}
</script>

<template>
    <!-- inserimento logo e titolo header -->
<header class="header bg-light py-2 px-3">
  <img src="/public/img/logo.jpg" alt="Logo">
  <h1 class="mb-0">{{message}}</h1>
</header>
</template>

<style scoped lang="scss">
@use'../assets/style/partials/general.scss';

// regole header
.header {
      display: flex;
      align-items: center;
   
  img {
      max-height: 20px;
      margin-right: 20px;
    }
    .header h1 {
      margin-bottom: 0;
      font-size: 26px; 
    }
}
</style>