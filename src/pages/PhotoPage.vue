<template>
   <v-container>
      <v-card
         outlined
         class="d-flex flex-column align-center"
      >
         <v-card-title>Title: {{photo.title}}</v-card-title>
         <v-img
            :src="photo.url"
            width="300"
         ></v-img>
         <v-card-text class="text-center">
            ID: {{photo.id}}
         </v-card-text>
         <v-card-text class="text-center">
            URL: {{photo.url}}
         </v-card-text>
      </v-card>
   </v-container>
</template>

<script>
export default {
   data: () => ({
      photo: null,
   }),
   created() {
      this.photo = this.$route.params;
   },
}
</script>

<style scoped>
   .text-center {
      text-align: center;
   }
</style>
