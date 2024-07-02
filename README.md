### Desafio técnico frontend
Este é um projeto frontend desenvolvido com React e Vite. Para simular um banco de dados, utilizei o JSON Server.
## Requisitos
- Node.js (versão 14 ou superior)
- Yarn (versão 1.22 ou superior)
## Instalação

1. Clone o repositório para sua máquina local:

    ```sh
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd nome-do-repositorio
    ```

3. Instale as dependências do projeto:

    ```sh
    yarn install
    ```
    ## Simulando o Banco de Dados

Antes de iniciar o servidor de desenvolvimento, você precisa rodar o JSON Server para simular o banco de dados.

1. Navegue até o diretório `src/data`:

    ```sh
    cd src/data
    ```

2. Inicie o JSON Server apontando para o arquivo `db.json`:

    ```sh
    npx json-server db.json
    ```

Isso iniciará o JSON Server.

## Rodando o Projeto

Com o JSON Server em execução, você pode iniciar o servidor de desenvolvimento do Vite:

1. Volte ao diretório raiz do projeto (se não estiver já lá):

    ```sh
    cd ../../
    ```

2. Inicie o servidor de desenvolvimento:

    ```sh
    yarn dev
    ```

O projeto será iniciado e você poderá acessá-lo em `http://localhost:5173`.


