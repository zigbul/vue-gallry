<template>
  <v-col cols="3">
     <v-card 
      class="card-block"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
     >
         <v-img
            :src="photo.url"
         />
         <div :class="hover ? 'hover' : 'not-hover'">
          <router-link 
            :to="{name: 'photoPage', params: {id: photo.id, title: photo.title, url: photo.url}}" 
            class="link-style"
          >
            Подробнее
          </router-link>
        </div>
     </v-card>
  </v-col>
</template>

<script>
export default {
   props: {
      photo: {
         type: Object,
         required: true
      }
   },
   data: () => ({
      hover: false,
   }),
}
</script>

<style scoped>
   .card-block {
      position: relative;
   }

   .hover {
      position: absolute;
      width: 100%;
      bottom: 0;
      background: purple;
      padding: 10px;
   }

   .not-hover {
      display: none;
   }

   .link-style {
      display: flex;
      color: white;
      text-decoration: none;
      justify-content: center;
   }
</style>