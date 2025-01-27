# NPM

O **NPM (Node Package Manager)** é o gerenciador de pacotes padrão para o Node.js. Ele é usado para instalar, compartilhar e gerenciar dependências de projetos JavaScript. A estrutura do NPM e seu funcionamento são organizados em torno de alguns conceitos principais:

---

### **1. Funcionamento Geral**

- **Repositório Online**: O NPM possui um repositório online onde estão armazenados os pacotes (bibliotecas e módulos). O endereço oficial é [https://www.npmjs.com](https://www.npmjs.com).
- **CLI (Interface de Linha de Comando)**: O NPM é acessado principalmente por meio de comandos no terminal, permitindo gerenciar pacotes de forma local ou global.

---

### **2. Estrutura de um Projeto com NPM**

Ao iniciar um projeto que usa o NPM, um arquivo chamado `package.json` é criado. Este arquivo é essencial e contém informações sobre o projeto e suas dependências.

#### **Principais Componentes do `package.json`**

- **name**: Nome do projeto ou pacote.
- **version**: Versão atual do projeto (usando o formato [SemVer](https://semver.org/)).
- **description**: Uma breve descrição do projeto.
- **scripts**: Comandos personalizáveis que podem ser executados com `npm run`.
- **dependencies**: Lista de pacotes necessários para o funcionamento do projeto.
- **devDependencies**: Lista de pacotes usados apenas durante o desenvolvimento.
- **main**: O ponto de entrada principal do projeto (normalmente `index.js`).
- **author e license**: Informações do autor e licença do projeto.

---

### **3. Estrutura de Diretórios e Arquivos**

Quando você instala pacotes, a estrutura básica se organiza assim:

- **`node_modules/`**: Diretório onde ficam os pacotes instalados.
- **`package.json`**: Descreve as dependências e configurações do projeto.
- **`package-lock.json`**: Arquivo que fixa as versões exatas das dependências instaladas, garantindo consistência ao instalar pacotes em diferentes máquinas.

---

### **4. Comandos Comuns**

#### **Inicialização do Projeto**

```bash
npm init
```

Ou para pular as perguntas:

```bash
npm init -y
```

#### **Instalação de Pacotes**

- Instalar um pacote localmente:
  ```bash
  npm install <nome-do-pacote>
  ```
- Instalar um pacote globalmente:
  ```bash
  npm install -g <nome-do-pacote>
  ```
- Instalar uma dependência de desenvolvimento:
  ```bash
  npm install <nome-do-pacote> --save-dev
  ```

#### **Gerenciamento de Dependências**

- Atualizar pacotes:
  ```bash
  npm update
  ```
- Remover pacotes:
  ```bash
  npm uninstall <nome-do-pacote>
  ```

#### **Execução de Scripts**

Definidos em `scripts` no `package.json`, por exemplo:

```json
"scripts": {
  "start": "node index.js",
  "test": "mocha"
}
```

Executar o script:

```bash
npm run start
```

---

### **5. Como o NPM Lida com Dependências**

- **Hierarquia Local**: As dependências são instaladas no diretório `node_modules` dentro do projeto.
- **Hierarquia Global**: Pacotes instalados globalmente ficam disponíveis em qualquer projeto e são armazenados em um diretório do sistema.

---

### **6. Alternativas e Complementos ao NPM**

Embora o NPM seja o padrão, outras ferramentas, como o Yarn e o PNPM, oferecem funcionalidades similares, com foco em otimização de performance e gerenciamento de pacotes.

---

## Gerenciador de Pacotes alternativos

O **Yarn** e o **pnpm** são gerenciadores de pacotes para JavaScript, semelhantes ao **npm** (Node Package Manager). Eles foram desenvolvidos como alternativas ao npm e possuem suas próprias características e vantagens. Ambos funcionam "em cima" do npm porque utilizam o mesmo repositório público de pacotes, o **npm registry**, para buscar, instalar e gerenciar dependências. Vamos explorar cada um:

---

### **Yarn**

O Yarn foi criado pelo time do Facebook em 2016, como uma solução para alguns problemas que o npm enfrentava na época, como:

- **Velocidade:** O Yarn introduziu um sistema de cache local que permitia reutilizar pacotes já baixados, acelerando o processo de instalação.
- **Determinismo:** Com o arquivo `yarn.lock`, ele garantiu que todas as instalações gerassem exatamente as mesmas versões de dependências, reduzindo inconsistências.
- **Paralelismo:** O Yarn executa várias tarefas simultaneamente, tornando a instalação de pacotes mais rápida.

#### Como o Yarn funciona em cima do npm:

- Ele usa o mesmo repositório de pacotes que o npm.
- Pode funcionar em projetos que utilizam o `package.json`.
- Cria e utiliza o arquivo `yarn.lock` para gerenciar as dependências com mais controle.

Com o tempo, o npm implementou várias melhorias (como o `package-lock.json` e o caching aprimorado), reduzindo algumas vantagens originais do Yarn.

---

### **pnpm**

O pnpm é outro gerenciador de pacotes que foca em ser eficiente em termos de armazenamento e desempenho. Ele introduziu um conceito inovador no gerenciamento de pacotes:

- **Link simbólico:** Em vez de duplicar os arquivos das dependências em cada projeto, o pnpm armazena as dependências em um único local global (um "store") e cria links simbólicos para os projetos. Isso economiza espaço em disco.
- **Instalação rápida:** Assim como o Yarn, o pnpm é muito rápido devido à reutilização de pacotes já baixados.
- **Isolamento de dependências:** O pnpm utiliza uma estrutura que previne o problema de "dependências fantasmas", garantindo que cada pacote só consiga acessar as dependências declaradas explicitamente.

#### Como o pnpm funciona em cima do npm:

- Também utiliza o registro público do npm para buscar pacotes.
- Gera um arquivo chamado `pnpm-lock.yaml` para controle das versões instaladas.
- É totalmente compatível com o `package.json`.

---

### **Diferenças principais entre npm, Yarn e pnpm**

| Característica   | npm                 | Yarn        | pnpm                   |
| ---------------- | ------------------- | ----------- | ---------------------- |
| Sistema de cache | Sim                 | Sim         | Sim (mais otimizado)   |
| Lockfile         | `package-lock.json` | `yarn.lock` | `pnpm-lock.yaml`       |
| Armazenamento    | Por projeto         | Por projeto | Centralizado com links |
| Velocidade       | Boa                 | Rápida      | Muito rápida           |
| Uso de espaço    | Mais alto           | Médio       | Menor (por links)      |

---

### Quando usar cada um?

- **npm:** Ideal para quem quer simplicidade e algo que funcione "out of the box", sem necessidade de aprender uma nova ferramenta.
- **Yarn:** Excelente se você já trabalha em projetos antigos que utilizam Yarn ou prefere sua interface de comandos.
- **pnpm:** Ideal para quem busca alta performance e eficiência no uso de espaço em disco, especialmente em projetos grandes ou monorepos.
