# Function

Uma **function** é um bloco de código reutilizável que executa uma tarefa específica ou calcula um valor. As funções podem ter escopo próprio, receber parâmetros, retornar valores e acessar variáveis externas (graças ao **closure**).

#### **Formas de Definir Funções**

1. **Declaração de Função**  
    Pode ser chamada antes de ser definida, devido ao **hoisting**.

   ```javascript
   function somar(a, b) {
     return a + b
   }
   console.log(somar(2, 3)) // 5
   ```

2. **Expressão de Função**  
   A função é atribuída a uma variável. Não ocorre hoisting.

   ```javascript
   const subtrair = function (a, b) {
     return a - b
   }
   console.log(subtrair(5, 2)) // 3
   ```

3. **Arrow Function**  
   Sintaxe mais curta, introduzida no ES6. Não possui seu próprio `this`.
   ```javascript
   const multiplicar = (a, b) => a * b
   console.log(multiplicar(4, 3)) // 12
   ```

---

### **O que são Callbacks?**

Uma **callback** é uma função passada como argumento para outra função, que a executa posteriormente. É comum em programação assíncrona, como ao trabalhar com requisições ou temporizadores.

#### Exemplo de Callback Simples

```javascript
function processarUsuario(nome, callback) {
  console.log(`Processando o usuário: ${nome}`)
  callback(nome)
}

function exibirUsuario(nome) {
  console.log(`Usuário processado: ${nome}`)
}

// Uso
processarUsuario('Maria', exibirUsuario)

// Saída:
// Processando o usuário: Maria
// Usuário processado: Maria
```

#### Exemplo de Callback Assíncrona

```javascript
function executarComAtraso(mensagem, callback) {
  setTimeout(() => {
    console.log(mensagem)
    callback()
  }, 2000)
}

executarComAtraso('Mensagem exibida após 2 segundos', () => {
  console.log('Callback executado!')
})

// Saída:
// Mensagem exibida após 2 segundos
// Callback executado!
```

---

### **Escopo e Contexto**

1. **Escopo**: Define onde as variáveis podem ser acessadas.

- **Global**: Variáveis definidas fora de funções.

  ```javascript
  let x = 10
  function mostrarX() {
    console.log(x) // 10
  }
  mostrarX()
  ```

- **De Função**: Variáveis só existem dentro da função.

  ```javascript
  function exemplo() {
    let y = 20
    console.log(y) // 20
  }
  console.log(y) // Erro: y is not defined
  exemplo()
  ```

- **De Bloco**: Com `let` e `const`, as variáveis são limitadas ao bloco `{}`.
  ```javascript
  if (true) {
    let z = 30
    console.log(z) // 30
  }
  // console.log(z); // Erro: z is not defined
  ```

2. **Contexto (`this`)**

- **Em Funções Normais**: `this` refere-se ao objeto que chamou a função.

  ```javascript
  const objeto = {
    nome: 'João',
    saudacao: function () {
      console.log(`Olá, ${this.nome}`)
    }
  }
  objeto.saudacao() // Olá, João
  ```

- **Em Arrow Functions**: `this` mantém o contexto onde foi definida.
  ```javascript
  const objeto2 = {
    nome: 'Maria',
    saudacao: () => {
      console.log(`Olá, ${this.nome}`)
    }
  }
  objeto2.saudacao() // Olá, undefined
  ```

---

### **Closures**

Um **closure** é quando uma função "lembra" o escopo onde foi criada, mesmo após o escopo original ter sido finalizado.

```javascript
function criarContador() {
  let contador = 0
  return function () {
    contador++
    return contador
  }
}

const incrementar = criarContador()
console.log(incrementar()) // 1
console.log(incrementar()) // 2
```

---

### **Funções como Primeira Classe**

Em JavaScript, funções são "cidadãs de primeira classe". Isso significa que podem ser:

- Atribuídas a variáveis.
- Passadas como argumentos.
- Retornadas por outras funções.

```javascript
function executar(funcao) {
  funcao()
}

executar(() => console.log('Função passada como argumento'))
```

---

### **Funções Recursivas**

Funções podem chamar a si mesmas para resolver problemas iterativos.

```javascript
function fatorial(n) {
  if (n === 0) return 1
  return n * fatorial(n - 1)
}

console.log(fatorial(5)) // 120
```

---

### **Resumo**

- **Funções**: Blocos reutilizáveis de código que recebem parâmetros e retornam valores.
- **Escopo**: Determina onde variáveis podem ser acessadas (global, função ou bloco).
- **Contexto (`this`)**: Depende de como a função é chamada.
- **Callbacks**: Funções passadas como argumentos e executadas posteriormente.
- **Closures**: Permitem funções "lembrarem" variáveis de seu escopo de criação.
