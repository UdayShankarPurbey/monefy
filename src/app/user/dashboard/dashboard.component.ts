import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ChartComponent,
    MatPseudoCheckboxModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  data  = [
    { 
      Date: "Wednesday, 31 January, 6:09 PM" ,
      TransactionType: "income",
      PaymentMethod: "cash",
      Amount: 30000 ,
      Category: "sideHustle" ,
      Notes: "Stock Market" 
    },
    {
      "Date": "Wednesday, 31 January, 6:19 PM",
      "TransactionType": "income",
      "PaymentMethod": "cash",
      "Amount": 30000,
      "Category": "rentalIncome",
      "Notes": "Stock Market"
    },
    {
      "Date": "Thursday, 1 February, 7:30 AM",
      "TransactionType": "expense",
      "PaymentMethod": "creditCard",
      "Amount": 5000,
      "Category": "groceries",
      "Notes": "Weekly grocery shopping"
    },
    {
      "Date": "Friday, 2 February, 2:45 PM",
      "TransactionType": "income",
      "PaymentMethod": "bankTransfer",
      "Amount": 15000,
      "Category": "freelance",
      "Notes": "Web development project"
    },
    {
      "Date": "Saturday, 3 February, 11:00 AM",
      "TransactionType": "expense",
      "PaymentMethod": "cash",
      "Amount": 1000,
      "Category": "entertainment",
      "Notes": "Movie night"
    },
    {
      "Date": "Sunday, 4 February, 3:15 PM",
      "TransactionType": "income",
      "PaymentMethod": "paypal",
      "Amount": 8000,
      "Category": "consulting",
      "Notes": "Consulting services"
    },
    {
      "Date": "Monday, 5 February, 9:45 AM",
      "TransactionType": "expense",
      "PaymentMethod": "debitCard",
      "Amount": 2000,
      "Category": "utilities",
      "Notes": "Electricity bill"
    },
    {
      "Date": "Tuesday, 6 February, 5:30 PM",
      "TransactionType": "income",
      "PaymentMethod": "cash",
      "Amount": 12000,
      "Category": "sideHustle",
      "Notes": "Freelance writing"
    },
    {
      "Date": "Wednesday, 7 February, 8:00 AM",
      "TransactionType": "expense",
      "PaymentMethod": "creditCard",
      "Amount": 1500,
      "Category": "diningOut",
      "Notes": "Lunch with friends"
    },
    {
      "Date": "Thursday, 8 February, 1:20 PM",
      "TransactionType": "income",
      "PaymentMethod": "bankTransfer",
      "Amount": 18000,
      "Category": "freelance",
      "Notes": "Graphic design project"
    },
    {
      "Date": "Friday, 9 February, 4:45 PM",
      "TransactionType": "expense",
      "PaymentMethod": "cash",
      "Amount": 2500,
      "Category": "shopping",
      "Notes": "Clothing purchase"
    },
    {
      "Date": "Saturday, 10 February, 11:30 AM",
      "TransactionType": "income",
      "PaymentMethod": "paypal",
      "Amount": 10000,
      "Category": "consulting",
      "Notes": "Advisory services"
    },
    {
      "Date": "Sunday, 11 February, 2:15 PM",
      "TransactionType": "expense",
      "PaymentMethod": "debitCard",
      "Amount": 3000,
      "Category": "utilities",
      "Notes": "Internet bill"
    },
    {
      "Date": "Monday, 12 February, 7:00 AM",
      "TransactionType": "income",
      "PaymentMethod": "creditCard",
      "Amount": 15000,
      "Category": "sideHustle",
      "Notes": "Online tutoring"
    },
    {
      "Date": "Tuesday, 13 February, 12:45 PM",
      "TransactionType": "expense",
      "PaymentMethod": "bankTransfer",
      "Amount": 5000,
      "Category": "diningOut",
      "Notes": "Dinner with family"
    },
    {
      "Date": "Wednesday, 14 February, 3:30 PM",
      "TransactionType": "income",
      "PaymentMethod": "cash",
      "Amount": 12000,
      "Category": "freelance",
      "Notes": "Content creation project"
    },
    {
      "Date": "Thursday, 15 February, 9:00 AM",
      "TransactionType": "expense",
      "PaymentMethod": "paypal",
      "Amount": 800,
      "Category": "entertainment",
      "Notes": "Streaming services subscription"
    },
    {
      "Date": "Friday, 16 February, 6:45 PM",
      "TransactionType": "income",
      "PaymentMethod": "debitCard",
      "Amount": 18000,
      "Category": "sideHustle",
      "Notes": "Photography gig"
    },
    {
      "Date": "Saturday, 17 February, 1:15 PM",
      "TransactionType": "expense",
      "PaymentMethod": "creditCard",
      "Amount": 2500,
      "Category": "shopping",
      "Notes": "Electronics purchase"
    },
    {
      "Date": "Sunday, 18 February, 4:30 PM",
      "TransactionType": "income",
      "PaymentMethod": "bankTransfer",
      "Amount": 15000,
      "Category": "freelance",
      "Notes": "Marketing campaign design"
    },
    {
      "Date": "Monday, 19 February, 10:00 AM",
      "TransactionType": "expense",
      "PaymentMethod": "cash",
      "Amount": 1500,
      "Category": "diningOut",
      "Notes": "Coffee with friends"
    },
    {
      "Date": "Tuesday, 20 February, 2:45 PM",
      "TransactionType": "income",
      "PaymentMethod": "paypal",
      "Amount": 9000,
      "Category": "consulting",
      "Notes": "Business strategy consultation"
    },
    {
      "Date": "Wednesday, 21 February, 5:30 PM",
      "TransactionType": "expense",
      "PaymentMethod": "debitCard",
      "Amount": 3000,
      "Category": "utilities",
      "Notes": "Gas bill"
    },
    {
      "Date": "Thursday, 22 February, 8:15 AM",
      "TransactionType": "income",
      "PaymentMethod": "creditCard",
      "Amount": 12000,
      "Category": "sideHustle",
      "Notes": "Online course development"
    },
    {
      "Date": "Friday, 23 February, 3:00 PM",
      "TransactionType": "expense",
      "PaymentMethod": "bankTransfer",
      "Amount": 500,
      "Category": "entertainment",
      "Notes": "Concert tickets"
    },
    {
      "Date": "Saturday, 24 February, 11:45 AM",
      "TransactionType": "income",
      "PaymentMethod": "cash",
      "Amount": 10000,
      "Category": "freelance",
      "Notes": "Social media management"
    },
    {
      "Date": "Sunday, 25 February, 1:30 PM",
      "TransactionType": "expense",
      "PaymentMethod": "paypal",
      "Amount": 2000,
      "Category": "shopping",
      "Notes": "Home decor items"
    },
    {
      "Date": "Monday, 26 February, 7:00 AM",
      "TransactionType": "income",
      "PaymentMethod": "debitCard",
      "Amount": 15000,
      "Category": "sideHustle",
      "Notes": "Mobile app development"
    },
    {
      "Date": "Tuesday, 27 February, 4:15 PM",
      "TransactionType": "expense",
      "PaymentMethod": "creditCard",
      "Amount": 1200,
      "Category": "diningOut",
      "Notes": "Dinner at a new restaurant"
    },
    {
      "Date": "Wednesday, 28 February, 9:30 AM",
      "TransactionType": "income",
      "PaymentMethod": "bankTransfer",
      "Amount": 18000,
      "Category": "freelance",
      "Notes": "Illustration project"
    },
    ]    

  dispData = this.data;

  receiveData($event : any) {
    this.dispData = $event;
    console.log(this.dispData);
  }

  //  isChecked = false; 

  // checkedItem(id : any) {
  //   this.isChecked = !this.isChecked;
  // }

  // toggleCheckbox() {
  //   this.isChecked =!this.isChecked;
  // }

  isEditMarked : boolean = false;
  editItem(id: any) {
    this.isEditMarked = !this.isEditMarked;
    console.log(id);
  }

  isDeletemarked : boolean = false;
  deleteItem(id: any) {
    this.isDeletemarked =!this.isDeletemarked;
    console.log(id);
  }

  isBookmarked: boolean = false;

  bookmarkItem(id : any) {
    this.isBookmarked = !this.isBookmarked;
    console.log(id);
  }


}
