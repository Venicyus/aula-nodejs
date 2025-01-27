# Orientação a Objeto com Typescript

Abaixo está uma explicação básica da sintaxe do TypeScript com um exemplo de **programação orientada a objetos (POO)**:

---

### **Definindo Classes e Tipos no TypeScript**

No TypeScript, você pode usar classes para implementar os conceitos de POO, como **encapsulamento**, **herança** e **polimorfismo**. Além disso, pode tipar os atributos e métodos para maior segurança no código.

---

### **Exemplos:**

```typescript
// Definindo uma classe base
class Pessoa {
  // Atributos com tipos
  nome: string
  idade: number

  // Construtor para inicializar os atributos
  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }

  // Método público
  dizerOla(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
  }
}

// Classe que herda de Pessoa
class Funcionario extends Pessoa {
  cargo: string
  salario: number

  constructor(nome: string, idade: number, cargo: string, salario: number) {
    // Chama o construtor da classe base
    super(nome, idade)
    this.cargo = cargo
    this.salario = salario
  }

  // Método que sobrescreve o método da classe base
  dizerOla(): string {
    return `Olá, meu nome é ${this.nome}, trabalho como ${
      this.cargo
    } e ganho R$${this.salario.toFixed(2)}.`
  }
}

// Classe com interface
interface ClienteProps {
  nome: string
  idade: number
  valorCompras: number
}

class Cliente implements ClienteProps {
  nome: string
  idade: number
  valorCompras: number

  constructor(nome: string, idade: number, valorCompras: number) {
    this.nome = nome
    this.idade = idade
    this.valorCompras = valorCompras
  }

  // Método específico da classe Cliente
  mostrarResumo(): string {
    return `${this.nome}, idade ${
      this.idade
    }, já gastou R$${this.valorCompras.toFixed(2)} conosco.`
  }
}

// Uso das classes
const pessoa1 = new Pessoa('João', 30)
console.log(pessoa1.dizerOla())

const funcionario1 = new Funcionario('Maria', 25, 'Desenvolvedora', 5000)
console.log(funcionario1.dizerOla())

const cliente1 = new Cliente('Carlos', 40, 1500)
console.log(cliente1.mostrarResumo())
```

---

### **Generic Types**

Os **generic types** permitem que classes, interfaces e métodos sejam definidos de forma genérica, permitindo o uso de tipos como parâmetros. Isso melhora a **reutilização de código** e a **segurança de tipos**, ao mesmo tempo que reduz a necessidade de realizar casts explícitos.

### Relação com a POO:

1. **Reutilização de Código**:

   - Assim como a herança e a composição na POO, os tipos genéricos ajudam a criar componentes reutilizáveis. Eles permitem que o mesmo código funcione com diferentes tipos, mantendo a estrutura e os conceitos de orientação a objetos.

2. **Polimorfismo**:

   - Embora o polimorfismo tradicional na POO seja baseado em herança ou interfaces, os genéricos podem ser vistos como uma forma de **polimorfismo paramétrico**, onde o tipo exato é determinado no momento da utilização.

3. **Encapsulamento**:
   - Classes genéricas encapsulam a lógica sem depender de um tipo específico, respeitando o princípio de encapsulamento da POO.

---

### Exemplo em TypeScript (POO com Genéricos):

```typescript
class Caixa<T> {
  private conteudo: T

  constructor(conteudo: T) {
    this.conteudo = conteudo
  }

  getConteudo(): T {
    return this.conteudo
  }

  setConteudo(conteudo: T): void {
    this.conteudo = conteudo
  }
}

// Utilizando a classe genérica:
const caixaDeNumeros = new Caixa<number>(10)
console.log(caixaDeNumeros.getConteudo()) // Saída: 10

const caixaDeTexto = new Caixa<string>('Olá, mundo!')
console.log(caixaDeTexto.getConteudo()) // Saída: Olá, mundo!
```

Neste exemplo, o uso de **genéricos** permite que a classe `Caixa` funcione com diferentes tipos, mas ainda respeitando os pilares da POO como encapsulamento e reutilização de código.

---
