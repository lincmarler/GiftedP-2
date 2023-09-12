import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { giftApi } from "./AxiosService"



class GiftService {
    async getGifts() {
        const res = await giftApi.get('api/gifts')
        logger.log('got gifts', res.data)
        AppState.gifts = res.data.map(gift => new Gift(gift))
    }

    async openGift(giftId) {
        let foundGift = AppState.gifts.find(gift => gift.id == giftId)
        foundGift.opened = true
        let res = await giftApi.put(`/api/gifts/${giftId}`, foundGift)
        logger.log(res.data)
    }
}

export const giftService = new GiftService()