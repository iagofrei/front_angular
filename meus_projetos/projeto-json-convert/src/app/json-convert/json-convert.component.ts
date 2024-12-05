import { Component } from '@angular/core';

@Component({
  selector: 'app-json-convert',
  templateUrl: './json-convert.component.html',
  styleUrl: './json-convert.component.scss',
})
export class JsonConvertComponent {
  options: string[] = ['Json para String', 'String para Json'];
  selectedOption: string = '';

  userInput: any = '';
  inputConverted: any = '';

  isHidden: boolean = true;

  alertBackgroundColor: string = 'green';
  isAlertHidden: string = 'hidden';
  alertMessage: string = '';

  ngOnInit(): void {
    this.selectedOption = this.options[0];
  }

  convertData() {
    if (!this.selectedOption) {
      this.myAlert(
        'warning',
        'Você precisa selecionar uma opção de conversão!'
      );
    } else {
      if (this.selectedOption === this.options[0]) {
        try {
          this.inputConverted = this.jsonToString(this.userInput);
          this.isHidden = false;
        } catch (error) {
          console.error(error);
          this.isHidden = true;
          this.myAlert('error', 'Não foi possível fazer a conversão do dado!');
        }
      } else {
        try {
          this.inputConverted = this.stringToJson(this.userInput);
          this.isHidden = false;
        } catch (error) {
          console.error(error);
          this.isHidden = true;
          this.myAlert('error', 'Não foi possível fazer a conversão do dado!');
        }
      }
    }
  }

  jsonToString(data: any): string {
    return JSON.stringify(data);
  }

  stringToJson(data: any): object {
    return JSON.parse(data);
  }

  cleanAll() {
    // this.selectedOption = '';
    this.userInput = '';
    this.inputConverted = '';
    this.isHidden = true;
  }

  copyToClipBoard() {
    navigator.clipboard
      .writeText(this.inputConverted)
      .then(() => {
        this.myAlert('success', 'Valor copiado para a área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar texto: ', err);
        this.myAlert('error', 'Erro ao copiar texto!');
      });

    //   if (!resultExist) {
    //     return myAlert("warning", "Você precisa converter algo antes para copiar");
    //   } else {
    //     navigator.clipboard
    //       .writeText(resultExist)
    //       .then(() => {
    //         myAlert("succsess", "Valor copiado para a área de transferencia!");
    //       })
    //       .catch((err) => {
    //         console.error("Erro ao copiar texto: ", err);
    //         myAlert("error", "Erro ao copiar texto!");
    //       });
    //   }
  }

  myAlert(type: 'success' | 'error' | 'warning', alertMessage: string) {
    if (type === 'error') {
      this.alertBackgroundColor = 'red';
    } else {
      if (type === 'warning') {
        this.alertBackgroundColor = 'orange';
      } else {
        this.alertBackgroundColor = 'green';
      }
    }

    this.alertMessage = alertMessage;
    this.isAlertHidden = 'visible';

    setTimeout(() => {
      this.alertMessage = '';
      this.isAlertHidden = 'hidden';
    }, 3000);
  }
}
