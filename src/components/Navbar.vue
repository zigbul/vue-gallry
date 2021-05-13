<template>
   <v-container fluid class="container">
     <div :class="[getIsActive() ? 'menu-active' : '', 'menu']">
          <Menu/>
      </div>
      <v-app-bar
        color="deep-purple accent-4"
        dark
      >
       <button :class="[getIsActive() ? 'button-active' : '', 'button']" @click="onToggleMenu">
         <div :class="getIsActive() ? 'active' : ''"></div>
         <div :class="getIsActive() ? 'active' : ''"></div>
         <div :class="getIsActive() ? 'active' : ''"></div>
       </button>
      </v-app-bar>
   </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import {mapMutations, mapGetters} from 'vuex';
export default {
  data: () => ({
    isActive: false
  }),
  components: {
    Menu
  },
  methods: {
    ...mapMutations(['setActive']),
    ...mapGetters(['getIsActive']),
    onToggleMenu() {
      this.setActive();
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 0;
  }

  .link-style {
    color: white;
    text-decoration: none;
  }

  .menu {
    transform: translate(-100%);
    transition: 0.5s transform linear;
    height: calc(100vh - 64px);
    position: absolute;
    background: purple;
    left: 0;
    top: 64px;
    z-index: 9999;
    padding: 15px;   
  }

  .menu-active {
    transform: translate(0);
  }

  .button {
    margin-left: 20px;
    outline: none;
    /* border: 3px solid black; */
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.5s all linear;
  }

  .button-active {
    border: 5px solid blanchedalmond;
    border-radius: 50%;
  }

  .button div {
    height: 5px;
    width: 100%;
    background: blanchedalmond;
    transition: 0.5s all linear;
  }

  .button div:nth-child(1).active {
    transform: rotateZ(45deg) translate(5px, 5px);
  }

  .button div:nth-child(2).active {
    display: none;
  }

  .button div:nth-child(3).active {
    transform: rotateZ(-45deg) translate(5px, -5px);
  }
</style>
