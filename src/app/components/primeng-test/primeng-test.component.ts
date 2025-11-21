import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { TreeModule } from 'primeng/tree';
import { DataViewModule } from 'primeng/dataview';
import { StepperModule } from 'primeng/stepper';
import { MessageService } from 'primeng/api';
// import { CustomStepperComponent } from '../custom-stepper/custom-stepper.component';

@Component({
  selector: 'app-primeng-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    CardModule,
    PanelModule,
    DialogModule,
    ToastModule,
    ProgressBarModule,
    TabViewModule,
    AccordionModule,
    MenubarModule,
    SidebarModule,
    FileUploadModule,
    RatingModule,
    SliderModule,
    ToggleButtonModule,
    MultiSelectModule,
    TreeModule,
    DataViewModule,
    StepperModule,
    // CustomStepperComponent
  ],
  providers: [MessageService],
  templateUrl: './primeng-test.component.html',
  styleUrls: ['./primeng-test.component.scss']
})
export class PrimengTestComponent {
  // Form data
  text = '';
  selectedCity: any;
  date: Date = new Date();
  checked = false;
  selectedOption = '';
  rating = 3;
  sliderValue = 50;
  toggleValue = false;
  selectedItems: any[] = [];

  // Dropdown options
  cities = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' }
  ];

  // Table data
  products = [
    { id: 1, name: 'Product 1', category: 'Electronics', price: 100 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 50 },
    { id: 3, name: 'Product 3', category: 'Books', price: 25 }
  ];

  // Tree data
  treeData = [
    {
      label: 'Root',
      children: [
        { label: 'Child 1' },
        { label: 'Child 2' }
      ]
    }
  ];

  // Chart data
  chartData = {
    labels: ['A', 'B', 'C'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  // Dialog
  displayDialog = false;
  sidebarVisible = false;

  constructor(private messageService: MessageService) { }

  showDialog() {
    this.displayDialog = true;
  }

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message sent successfully!'
    });
  }
}