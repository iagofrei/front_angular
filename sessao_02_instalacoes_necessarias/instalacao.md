## Site do node: 

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


## Site do npm

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

## Angular

- Site para verificar a compatibilidades de versões

[Angular guide versions](https://v17.angular.io/guide/versions)


# Importante como criar projetos nas versões do angular

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