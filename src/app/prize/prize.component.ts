import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrizeService } from './prize.service';
import { PrizeModel } from './prize.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CreatePrizeComponent } from './create-prize/create-prize.component';

@Component({
  selector: 'app-prize',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, CreatePrizeComponent],
  providers:[PrizeService],
  templateUrl: './prize.component.html',
  styleUrl: './prize.component.css'
})
export class PrizeComponent implements OnInit, OnDestroy {
  public prizeData: PrizeModel[] = [];
  public isVisible: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 5;
  private subscription: Subscription | undefined;
  constructor(private prizeService:PrizeService) {

  }

  ngOnInit(): void {
    this.getPrizeData();
  }

  nextPage() {
    this.pageNumber++;
    this.getPrizeData();
  }
  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getPrizeData();
    }
  }

  getPrizeData() {
    this.subscription = this.prizeService.getPrizes(this.pageNumber, this.pageSize).subscribe((data:PrizeModel[]) => {
      if (data) {
        this.prizeData = data;
      }

    })
  }
  openModal() {
    this.isVisible = true;
  }

  closePopUp() {
    this.isVisible = false;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      console.log("Destroyed");
      this.subscription.unsubscribe();
    }
  }
}
