import { Component, Input, OnInit,Output ,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color ,ScaleType } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver'
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    NgxChartsModule,
  ],  

  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
 

  @Input() chartData: any

  @Output() dataEvent = new EventEmitter<any>();


   selectedData : any = [];

  ngOnInit(): void {
    this.selectedData= this.chartData;
    this.graphData()
  }

    bySortByDate() {
      const bySelectedDate = "Wednesday, 31 January, 6:19 PM"
      console.log(bySelectedDate);

      this.selectedData = [];

      for ( let item of this.chartData) {
        if (item.Date === bySelectedDate) {
          this.selectedData.push(item);
        }
      }  

      this.dataEvent.emit(this.selectedData)
      this.graphData()
    }
  
    byTransactionType() {
      const bySelectedTransaction = "expense"
      console.log(bySelectedTransaction);

      this.selectedData = [];

      for ( let item of this.chartData) {
        if (item.TransactionType === bySelectedTransaction) {
          this.selectedData.push(item);
        }
      }

      this.dataEvent.emit(this.selectedData)
      this.graphData()
    }
  
    byPaymentMethod() {
      const bySelectedPayment = "creditCard"
      console.log(bySelectedPayment);

      this.selectedData = [];

      for ( let item of this.chartData) {
        if (item.PaymentMethod === bySelectedPayment) {
          this.selectedData.push(item);
        }
      }

      this.dataEvent.emit(this.selectedData)
      this.graphData()
    }
  
    byAmount() {
      const bySelectedAmount = 5000
      console.log(bySelectedAmount);

      this.selectedData = [];

      for(let item of this.chartData) {
        if(item.Amount >= bySelectedAmount) {
          this.selectedData.push(item);
        }
      }

      this.dataEvent.emit(this.selectedData)
      this.graphData()
    }
  
    byCategory() {
      const bySelectedCategory = "salary"
      console.log(bySelectedCategory);

      this.selectedData = [];

      for(let item of this.chartData) {
        if(item.Category === bySelectedCategory) {
          this.selectedData.push(item);
        }
      }

      this.dataEvent.emit(this.selectedData);
      this.graphData()
    }

    public pieChart: any[] = [];

    categoryTags : string[] = ["salary","freelance","business","investments","sideHustle","bonuses","gifts","refunds","rentalIncome","royalties","bills","cars","clothes","communication","eatingout","entertainment","food","gifts","health","house","pets","sports","taxi","toiletry","transport"];
     
    name : string = '';
    value : number = 0;

    graphData() {

      this.pieChart = [];

      for(let i=0;i < this.categoryTags.length ;i++) {
        let x=0;
        for ( let item of this.selectedData) {
          if(this.categoryTags[i] === item.Category) {
            x += item.Amount;
          }
        }

        if(x > 0) {

        const randomColor = this.getRandomColor();

        console.log(randomColor)
        // console.log(this.customColorScheme.domain.);

        let dataPoint = {
          name: this.categoryTags[i],
          value: x,
        }

        this.customColorScheme.domain.push(randomColor)
        this.pieChart.push(dataPoint);

        }
        
      }
    }

    getRandomColor(): string {
      // Generate a random hue value between 0 and 360
      const randomHue = Math.floor(Math.random() * 361);
  
      // Set saturation and lightness to fixed values for vivid and bright colors
      const saturation = 70;
      const lightness = 50;
    
      // Create an HSL color string
      const randomColor = `hsl(${randomHue}, ${saturation}%, ${lightness}%)`;
    
      return randomColor;
    }
    
  customColorScheme: Color = {
    name: 'udayShankarSchema', 
    selectable: true,
    group: ScaleType.Ordinal,
    domain: []
  };
 
  downloadPdf() {

    const formattedHtml = formatDataToHtml(this.selectedData);
    const container = document.createElement('div');
    container.innerHTML = formattedHtml;

    
    html2pdf(container).then((pdf: any) => {
      pdf.output('blob').then((blob: any) => {
        saveAs(blob, 'your-file-name.pdf');
      });
    });

    function formatDataToHtml(data: any): string {
      let htmlString = '<table class="table"><thead class="thead-light"><tr><th>S.No </th><th>Transaction Type</th><th>Date</th><th>Payment Method</th><th>Category</th><th>Amount</th><th>Notes</th></tr></thead><tbody>';
      let sno =0;
      for (let item of data) {
        htmlString += `<tr>
          <td>${sno+=1}</td>
          <td>${item.TransactionType}</td>
          <td>${item.Date}</td>
          <td>${item.PaymentMethod}</td>
          <td>${item.Category}</td>
          <td>${item.Amount}</td>
          <td>${item.Notes}</td>
        </tr>`;
      }
    
      htmlString += '</tbody></table>';
    
      return htmlString;
    }
    

  }


  downloadExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.selectedData);
    console.log(worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'your-file-name.xlsx');
  } 
}
