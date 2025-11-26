import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = {};

  updateStepData(stepName: string, data: any): void {
    this.formData[stepName] = data;
  }

  getStepData(stepName: string): any {
    return this.formData[stepName] || {};
  }

  getAllData(): any {
    return this.formData;
  }

  clearData(): void {
    this.formData = {};
  }
}