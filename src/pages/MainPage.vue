<template>
<div>
   <v-container v-if="!getLoading()">
         <section class="category">
            <h2 class="category__title">first category</h2>
            <v-row d-flex class="justify-center">
               <Photo 
                  v-for="photo in filtredPhotos(0,6)"
                  :photo="photo"
                  :key="photo.id"
               />
            </v-row>
         </section>
         <section class="category">
            <h2 class="category__title">second category</h2>
            <v-row d-flex class="justify-center">
               <Photo  
                  v-for="photo in filtredPhotos(6,12)"
                  :photo="photo"
                  :key="photo.id"
               />
            </v-row>
         </section>
         <section class="category">
            <h2 class="category__title">third category</h2>
            <v-row d-flex class="justify-center">
               <Photo  
                  v-for="photo in filtredPhotos(12,18)"
                  :photo="photo"
                  :key="photo.id"
               />
            </v-row> 
         </section>
         <section class="category">
            <h2 class="category__title">forth category</h2>
            <v-row d-flex class="justify-center">
               <Photo 
                  v-for="photo in filtredPhotos(18)"
                  :photo="photo"
                  :key="photo.id"
               />
            </v-row>
         </section>
   </v-container>
   <v-container v-else>
      <Loader/>
   </v-container>
</div>
</template>

<script>
import Photo from '@/components/photo/Photo';
import Loader from '@/components/Loader';
import {mapActions, mapGetters} from 'vuex';
export default {
   components: {
      Photo, Loader
   },
   methods: {
      ...mapActions(['fetchPhotos']),
      ...mapGetters(['getLoading', 'getAllPhotos']),
      filtredPhotos: function(start, end) {
         return this.getAllPhotos().slice(start, end);
      }
   },
   mounted() {
      this.fetchPhotos();
   } 
}
</script>

<style scoped>
   .category {
      border: 1px solid black;
      margin-bottom: 20px;
      padding: 10px;
   }

   .category__title {
      text-align: center;
      margin-bottom: 10px;
   }
</style>
