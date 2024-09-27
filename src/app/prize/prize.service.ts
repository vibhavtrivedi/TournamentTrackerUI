import { Injectable } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { PrizeModel } from './prize.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  constructor(private apiService: ApiService) { }

  createPrize(prizeData: PrizeModel): any {
    console.log('s', prizeData);
    const data = {
      placeNumber: prizeData.placeNumber,
      placeName: prizeData.placeName,
      prizeAmount: prizeData.prizeAmount,
      placePercentage:prizeData.prizePercentage
    }
    const requestUrl = environment.API_URL + 'Prize';
    this.apiService.post(requestUrl, data)
  }
}
