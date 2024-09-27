import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrizeService } from './prize.service';
import { PrizeModel } from './prize.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-prize',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers:[PrizeService],
  templateUrl: './prize.component.html',
  styleUrl: './prize.component.css'
})
export class PrizeComponent {
  public prizeData: PrizeModel | undefined;
  prizesForm: FormGroup;
  constructor(private fb:FormBuilder, private prizeService:PrizeService) {
    this.prizesForm = this.fb.group({
      placeNumber: ['', Validators.required],
      placeName: ['', Validators.required],
      prizeAmount: ['', Validators.required],
      prizePercentage: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.prizesForm.valid) {
      this.createPrize(this.prizesForm.value);
    }
  }
  createPrize(data: PrizeModel): any {
    console.log('da', data);
    this.prizeService.createPrize(data).subscribe((prize:PrizeModel) => {
      this.prizeData = prize;
    })
  }
}
