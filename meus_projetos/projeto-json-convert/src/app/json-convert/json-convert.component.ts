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

  convertData() {
    if (!this.selectedOption) {
      return alert("Você precisa selecionar uma opção de conversão!");
    } else {
      if (this.selectedOption === this.options[0]) {
        try {
          let result = JSON.stringify(this.userInput);
          return this.inputConverted = result;
        } catch (error) {
          console.error(error);
          return alert("Não foi possível fazer a conversão do dado!");
        }
      } else {
        try {
          let result = JSON.parse(this.userInput);
          return this.inputConverted = result;
        } catch (error) {
          console.error(error);
          return alert("Não foi possível fazer a conversão do dado!");
        }
      }
    }
  }

  cleanAll() {
    this.selectedOption = ''
    this.userInput = ''
    this.inputConverted = ''
  }

  copyToClipBoard() {
  
    navigator.clipboard
      .writeText(this.inputConverted)
      .then(() => {
        alert("Valor copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
        alert("Erro ao copiar texto!");
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

  // myAlert(type, alertMessage) {
  //   const alertElement = document.getElementById("alert");
  //   const alertElementMessage = document.getElementById("alert-message");
  
  //   if (type === "error") {
  //     alertElement.style.backgroundColor = "red";
  //   } else {
  //     if (type === "warning") {
  //       alertElement.style.backgroundColor = "orange";
  //     } else {
  //       alertElement.style.backgroundColor = "green";
  //     }
  //   }
  
  //   alertElementMessage.innerText = alertMessage;
  //   alertElement.style.visibility = "visible";
  
  //   setTimeout(function () {
  //     alertElementMessage.innerText = "";
  //     alertElement.style.visibility = "hidden";
  //   }, 3000);
  // }
  
}
