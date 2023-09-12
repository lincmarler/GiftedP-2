import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { api, giftApi } from "./AxiosService"



class GiftService {
    async getGifts() {
        const res = await api.get('api/gifts')
        logger.log('got gifts', res.data)
        AppState.gifts = res.data.map(gift => new Gift(gift))
    }

    async openGift(giftId) {
        let foundGift = AppState.gifts.find(gift => gift.id == giftId)
        foundGift.opened = true
        let res = await api.put(`/api/gifts/${giftId}`, foundGift)
        logger.log(res.data)
    }
}

export const giftService = new GiftService()