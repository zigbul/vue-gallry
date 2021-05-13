<template>
   <div class="container">
      <router-link to="/" class="link">Галерея</router-link>
      <router-link to="/about-me" class="link">Обо мне</router-link>
        <v-avatar class="avatar">
          <img
            src="@/assets/homer.jpg"
            alt="Homer Simpson"
          >
        </v-avatar>
        <p class="name">Георгий</p>
        <a href="mailto:parfenov.georgiy@bk.ru" class="white--text">Parfenov.georgiy@bk.ru</a>
   </div>
</template>

<script>
export default {

}
</script>


<style scoped>
   .container {
      display: flex;
      flex-direction: column;
   }

   .link {
      color: white;
      text-decoration: none;
      font-size: 24px;
   }

   .link:hover {
      color: black;
   }

   .avatar {
      margin-top: 20px;
   }

   .name {
      font-size: 30px;
      margin: 0;
   }
</style>