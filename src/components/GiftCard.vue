<!-- <template>
  <div class="col-md-4">
    <div class="card elevation-1">
      <img class="img-fluid" :src="gift.url" alt="">
      <p>{{ gift.tag }}</p>
    </div>
  </div>
</template> -->

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';

// import { AppState } from '../AppState';
// import { logger } from '../utils/Logger';
// import Pop from '../utils/Pop';
// import { giftService } from '../services/GiftService.js'
// import { Gift } from '../models/Gift';

export default {
  // props: {gift: {type: Gift, required: true}},
  setup() {
    return {

      gifts: computed(() => AppState.gifts)
    };
  },
};
</script>


<style></style>