import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-addincomeandexpense',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    
    
  ],
  providers : [
    DatePipe
  ],
  templateUrl: './addincomeandexpense.component.html',
  styleUrl: './addincomeandexpense.component.scss'
})
export class AddincomeandexpenseComponent implements OnInit {
  currentDate: string = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getCurrentDate();
  }

  getCurrentDate(): void {
    const today = new Date();
    this.currentDate = this.datePipe.transform(today, 'EEEE, d MMMM, h:mm a')!;
  }


  transactionType: string = 'income';
  paymentMethod: string = 'cash';
  amount: number = 0;
  selectedCategory: string = '';
  notes: string = '';



  saveTransaction() {

    if(this.amount <= 0) {
      //Todo : make a alert component and show in that
      alert('Please enter an amount greater than 0');
      return;
    }

    if(this.selectedCategory === '') {
      //Todo : make a alert component and show in that
      alert('Please select a category');
      return;
    }

    if(this.notes.length < 1  || this.notes.length > 250) {
      //Todo : make a alert component and show in that
      alert('Please enter a valid note');
      return;
    }

    //Todo : make a alert component and show in that
    alert('Transaction Saved');
    
    
    this.transactionType = 'income';
    this.paymentMethod = 'cash';
    this.amount = 0;
    this.selectedCategory = '';
    this.notes = '';
  }
}
