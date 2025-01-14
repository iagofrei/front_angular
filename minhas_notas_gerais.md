
# Sessão 2 - Instalações necessárias

[Pasta da sessão](./sessao_02_instalacoes_necessarias/)

## Aula 8

### Site do node: 

[Node](https://nodejs.org/pt)

Instalar baixar a versão e instalar a mais recente

- Verificar a versão do node instalada

    ```
    node --version
    ```

- Verificar a versão do npm instalada

    ```
    npm --version
    ```


### Site do npm

[npm angular cli](https://www.npmjs.com/package/@angular/cli)

- Verificar a versão do angular cli instalada:

    ```
    ng version
    ```

- Instalar o angular/cli na ultima versão

    ```
    npm install @angular/cli@latest -g
    ```

- Instalar o angular/cli em uma versão especifica

    ```
    npm install @angular/cli@17.0.10 -g
    ```

- Desinstalar o angular/cli

    ```
    npm uninstall @angular/cli -g
    ```

### Angular

- Site para verificar a compatibilidades de versões

[Angular guide versions](https://v17.angular.io/guide/versions)

---------------------------------------------------------------------------


## Aula 9

### Importante como criar projetos nas versões do angular

- Criar os projetos na versão 17

    ```
    ng new NOME_DO_PROJETO
    ```

    Ele vai criar o projeto com a versão standalone (sem o app.module.ts)

- Criar os projetos na versão 16 ou inferior (tendo a versão 17 instalada)

    ```
    ng new NOME_DO_PROJETO --no-standalone
    ```

    Ele vai criar o projeto com a versão standalone (com o app.module.ts)

    <font color="red">**Usar no padrão do angular 16 até a sessão 14 Reactive Forms**</font>

---------------------------------------------------------------------------


## Aula 12

- Shortcuts
    - "Ctrl + c" (copiar um texto)
    - "Ctrl + v" (colar o texto copiado)
    - "Ctrl + s" (salvar um arquivo)
    - "Ctrl + z" (voltar a alteração)
    - "Ctrl + ;" (comentar uma linha)

    - "Ctrl + '" (abrir o terminal)
    - "Ctrl + b" (abrir e fechar o explorer)

    - "Ctrl + f" (pesquisar um texto no arquivo)
    - "Ctrl + p" (pesquisar um arquivo pelo nome)

    - "Alt + Shift + Seta-Baixo" (duplicar linha)
    - "Alt + Seta" (mover linha para cima ou para baixo)
    - "Ctrl + d" (selecionar textos iguais)

    - "Ctrl + ." (mostrar sugestões de quick fix)
    - "Ctrl + Espaço" (mostrar propriedades de um objeto)
    - "Ctrl + Shift + Espaço" (mostrar os parâmetros de uma função)

- Extensões
    - Angular Language Service
    - Angular 17 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
    - Color Highlight
    - Material Icon Theme
    - Shades of Purple
    - Ayu


---------------------------------------------------------------------------


# Sessão 3 - Fundamentos do Angulas: Componentes e Estilizações

[Pasta da sessão](./sessao_03_fda_componentes_estilizacoes/)

## Aula 22 - Conceito de Componentes e Módulos

### Criando o projeto

- Criei o projeto usando esse comando:
    ```
    ng new projeto-components --no-standalone
    ```

- Apaguei o conteúdo do app.component.html

### Executar o projeto

- Para executar o projeto abra um terminal na pasta raiz e execute um desses comandos:

    ```
    ng serve
    ```

    ou

    ```
    npm run start
    ```

### Criar um componente

- Criei um componente de card através deste comando: 
    ```
    ng g c card
    ```
    - g: generate
    - c: component
    - card: nome do componente

    Rodei esse comando na pasta raiz do projeto pasta: "projeto-components"


## Aula 25 - Componente Declarado em mais de um Módulo

#### Criar um módulo

- Criar um novo módulo:

    ```
    ng g m cards
    ```
    - g: generate
    - m: module
    - cards: nome do módulo

## Aula 34 - Utilização do Seletor "::ng-deep"

## Aula 35 - Utilização do Seletor ":host"

## Aula 36 - Primeiro Caso de Uso com "::ng-deep" (Atualizações Globais)

## Aula 37 - Segundo Caso de Uso com "::ng-deep" e ":host" (Atualizações Locais)

## Aula 39 - Terceiro Caso de Uso com "::ng-deep" e ":host" (Componentes Externos)

## Aula 40 - View Encapsulation None

## Aula 41 - View Encapsulation Emulated

## Aula 42 - View Encapsulation ShadowDom

## Aula 43 - Emulação do Shadow Dom do Angular

---------------------------------------------------------------------------

# Sessão 4 - Fundamentos do Angular: Binding, Diretivas, Templates e Decorators

[Pasta da sessão](./sessao_04_fda_binding_diretivas_temp_decorators/)

## Aula 48 - Atributos vs Propriedades de um Elemento HTML

## Aula 49 - O que é "Property Binding”

## Aula 50 - O que é "Event Binding”

- Quando eu uso ( ) eu estou recebendo um valor ou evento, ex: (click)="sendAlgo" logo estou recebendo um evento de click

- Quando eu uso [ ] eu estou enviando um valor ou evento, ex: [disabled]="isDisabled" eu estou enviando um parâmetro ou função de desabilitar

- [Event binding docs](https://v17.angular.io/guide/event-binding-concepts)

## Aula 51 - O que é "Attribute Binding”

- [Attribute binding docs](https://v17.angular.io/guide/attribute-binding)

## Aula 52 - CSS Style Binding

- [Style Binding docs](https://v17.angular.io/guide/class-binding#binding-to-a-single-style)

- [HTML da aula](./sessao_04_fda_binding_diretivas_temp_decorators/05_CSS_Style_Binding/src/app/app.component.html)

- [Typescript da aula](./sessao_04_fda_binding_diretivas_temp_decorators/05_CSS_Style_Binding/src/app/app.component.ts)

## Aula 53 - CSS Class Binding

- [Class Binding docs](https://v17.angular.io/guide/class-binding#binding-to-a-single-css-class)

- [HTML da aula](./sessao_04_fda_binding_diretivas_temp_decorators/06_CSS_Class_Binding/src/app/app.component.html)

- [SCSS da aula](./sessao_04_fda_binding_diretivas_temp_decorators/06_CSS_Class_Binding/src/app/app.component.scss)

- [Typescript da aula](./sessao_04_fda_binding_diretivas_temp_decorators/06_CSS_Class_Binding/src/app/app.component.ts)

## Aula 55 - Como funciona o decorator "@Input"

- [Pasta app da aula](./sessao_04_fda_binding_diretivas_temp_decorators/07_Como_Funciona_o_Decorator_Input/src/app/)

## Aula 55 - Como funciona o decorator "@Output"

- [Pasta app da aula](./sessao_04_fda_binding_diretivas_temp_decorators/08_Como_Funciona_o_Decorator_Output/src/app/)

## Aula 66 - Diretiva Estrutural "NgIf"

- Como usar

    ```html
    <div style="background-color: green" *ngIf="true/false">Sou uma div!</div>
    ```

- Quando o ngIf retorna um valor "false" o angular remove completamente o elemento, diferente das propriedades do css "display: none" ou "visibility: hidden"

## Aula 67 - Diretiva Estrutural "NgFor"

- Como usar:

    ```html
    <mat-form-field>
    <mat-label>Status</mat-label>
    <mat-select [(ngModel)]="filterOptions.status">
        <mat-option *ngFor="let status of statusList" [value]="status.value">{{status.description}}</mat-option>
    </mat-select>
    </mat-form-field>
    ```

    - Valo do statusList no typescript:

        ```ts
        statusList = [
            {
            description: 'Ativo',
            value: true,
            },
            {
            description: 'Inativo',
            value: false,
            },
        ];
        ```