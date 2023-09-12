<template>
  <div class="container fluid">
    <div class="row">
      <div class="col-4">
        <form @submit.prevent="createGift" class="row">
          <input class="col-6" type="text" name="tag" placeholder="Tag">
          <input class="col-6" type="text" name="url" placeholder="Image URL">
          <button><i class="mdi mdi-plus"></i></button>
        </form>

        <form @submit.prevent="searchGifs"></form>
      </div>


      <div class="col-8">
        <div class="row">


          <div v-for="gift in gifts" :key="gift" class="col-md-4">
            <div class="card elevation-1">
              <img class="img-fluid" :src="gift.url" alt="">
              <p class="text-center">{{ gift.tag }}</p>
              <button v-if="gift.opened = false" @click="openGift(giftId)" class="btn btn-success">Open</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { giftService } from '../services/GiftService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'

// import { Gift } from '../models/Gift'

export default {
  setup() {
    onMounted(getGifts)


    async function getGifts() {
      try {
        logger.log('gettin gifts')
        await giftService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }



    return {
      async openGift(giftId) {
        try {
          await giftService.openGift(giftId)
          getGifts()
        } catch (error) {
          Pop.error(error)
        }
      },

      // async createGift(){
      //   try {
      //     let form = window.event.target
      //     let formData = getFormData(form)
      //     await giftService.createGift(formData)
      //   } catch (error) {
      //     Pop.error(error)
      //   }
      // },


      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
