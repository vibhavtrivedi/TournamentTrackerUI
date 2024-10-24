import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PrizeModel } from '../prize.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrizeService } from '../prize.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-prize',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-prize.component.html',
  styleUrl: './create-prize.component.css'
})
export class CreatePrizeComponent implements OnInit, OnChanges {
  public prizeData: PrizeModel | undefined;
  prizesForm: FormGroup;

  @Input() modalOpen: boolean;
  @Output() close = new EventEmitter<void>();

  constructor(private fb:FormBuilder, private prizeService:PrizeService) {
    this.prizesForm = this.fb.group({
      placeNumber: ['', Validators.required],
      placeName: ['', Validators.required],
      prizeAmount: ['', Validators.required],
      prizePercentage: ['', Validators.required]
    })
    this.modalOpen = false;
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges");
  }

  ngOnInit(): void {
    console.log("ng");
  }

  onSubmit() {
    if (this.prizesForm.valid) {
      this.createPrize(this.prizesForm.value);
      this.prizesForm.reset();
    }
  }

  createPrize(data: PrizeModel): any {
    this.prizeService.createPrize(data).subscribe((prize:PrizeModel) => {
      this.prizeData = prize;
      if (this.prizeData) {
        this.close.emit();
      }
    },
      (error:any) => {
        console.error(error);
    }
    )
  }

  closeModal() {
    this.close.emit();
  }
}
