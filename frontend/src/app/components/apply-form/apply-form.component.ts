import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent {
  showPersonalDataForm: boolean = true;
  showExperienceForm: boolean = false;
  showQualificationForm: boolean = false;
  showSendedForm: boolean = false;
  progressWidth: number = 0;

  togglePersonalDataForm() {
    this.showPersonalDataForm = !this.showPersonalDataForm;
    this.showExperienceForm = !this.showExperienceForm;
    this.updateProgress();
  }

  toggleExperienceForm() {
    this.showExperienceForm = !this.showExperienceForm;
    this.showQualificationForm = !this.showQualificationForm;
    this.updateProgress();
  }

  toggleQualificationForm() {
    this.showQualificationForm = !this.showQualificationForm;
    this.showSendedForm = !this.showSendedForm;
    this.updateProgress();
  }

  updateProgress() {
    if (this.showExperienceForm) {
      this.progressWidth = 50; // Aumenta a largura da barra de progresso para 50%
    } else if (this.showQualificationForm) {
      this.progressWidth = 75; // Aumenta a largura da barra de progresso para 75%
    } else if (this.showSendedForm) {
      this.progressWidth = 100; // Aumenta a largura da barra de progresso para 100%
    } else {
      this.progressWidth = 0; // Redefine a largura da barra de progresso para 0%
    }
  }
}