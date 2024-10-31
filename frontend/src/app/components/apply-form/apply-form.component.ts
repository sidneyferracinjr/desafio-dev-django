import { Component } from '@angular/core';
import { Candidate } from '../../_models/candidate';
import { CandidateService } from '../../_services/candidate.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent {
  candidate: Candidate = {
    nome: '',
    cpf: '',
    dataNascimento: new Date(),
    email: '',
    telefone: '',
    endereco: '',
    empresa: '',
    cargo: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    descricao: '',
    instituicao: '',
    curso: '',
    dataConclusao: new Date()
  };

  constructor(private candidateService: CandidateService) {}

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
      this.progressWidth = 50;
    } else if (this.showQualificationForm) {
      this.progressWidth = 75;
    } else if (this.showSendedForm) {
      this.progressWidth = 100;
    } else {
      this.progressWidth = 0;
    }
  }

  onSubmit() {
    this.candidateService.saveCandidate(this.candidate).subscribe(response => {
      console.log('Dados salvos com sucesso', response);
      this.showPersonalDataForm = false;
      this.showQualificationForm = false;
      this.showSendedForm = true;
    }, error => {
      console.error('Erro ao salvar dados', error);
    });
  }
}