import axios from 'axios';

export default {
   state: {
      photos: [],
      loading: false,
      isActive: false,
   },
   mutations: {
      setPhotos(state, payload) {
         state.photos = payload;
      },
      setLoading(state, payload) {
         state.loading = payload;
      },
      setActive(state) {
         state.isActive = !state.isActive;
      }
   },
   getters: {
      getAllPhotos(state) {
         return state.photos;
      },
      getLoading(state) {
         return state.loading;
      },
      getIsActive(state) {
         return state.isActive;
      }
   },
   actions: {
      fetchPhotos(context) {
         context.commit('setLoading', true);
         axios.get('http://jsonplaceholder.typicode.com/photos?_limit=24')
         .then(response => {context.commit('setPhotos', response.data);
         })
         .then(setTimeout(() => context.commit('setLoading', false), 1000))
         .catch(e => console.log(e));
      }
   }
}