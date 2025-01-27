# Sintaxe do JavaScript

A sintaxe do JavaScript é simples e intuitiva. Aqui estão os fundamentos:

---

### 1. **Variáveis**

```javascript
// Variáveis com `let` (escopo de bloco) ou `const` (imutável)
let nome = 'João'
const idade = 30
```

---

### 2. **Funções**

```javascript
// Declaração de função
function cumprimentar(nome) {
  return `Olá, ${nome}!`
}

// Arrow function
const cumprimentar = nome => {
  return `Olá, ${nome}!`
}

const cumprimentar = nome => `Olá, ${nome}!`

console.log(cumprimentar('Maria')) // "Olá, Maria!"
```

---

### 3. **Estruturas de controle**

```javascript
// Condicional
if (idade > 18) {
  console.log('Maior de idade')
} else {
  console.log('Menor de idade')
}

// Laço
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

---

### **4. String**

Representa sequências de caracteres, delimitadas por aspas simples (`'`), aspas duplas (`"`) ou template literals (crase `` ` ``).

```javascript
const texto = 'Olá, mundo!'
const mensagem = 'JavaScript é incrível!'
const interpolacao = `Hoje é ${new Date().toLocaleDateString()}`
```

---

### **5. Number**

Representa números inteiros ou decimais. JavaScript não diferencia números inteiros e de ponto flutuante; ambos são tratados como `Number`.

```javascript
const inteiro = 42
const decimal = 3.14
const negativo = -10

// Valores especiais de `Number`
const infinito = Infinity // Resultado de divisões por 0
const naoNumero = NaN // Not-a-Number (resultado de operações inválidas)
```

---

### **6. BigInt**

Representa números inteiros muito grandes que não cabem no tipo `Number`. É usado para cálculos precisos com inteiros além de `2^53 - 1`.

```javascript
const grande = 1234567890123456789012345678901234567890n
const soma = grande + 10n
```

---

### **7. Boolean**

Representa valores lógicos: `true` ou `false`. Usado em condições e tomadas de decisão.

```javascript
const ativo = true
const inativo = false

if (ativo) {
  console.log('O sistema está ativo.')
}
```

---

### 4. **Objetos e Arrays**

```javascript
// Objeto
const pessoa = { nome: 'Ana', idade: 25 }
console.log(pessoa.nome) // "Ana"

// Array
const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas[1]) // "Banana"
```

---

### **8. Undefined**

Indica que uma variável foi declarada, mas ainda não recebeu um valor.

```javascript
let naoDefinido
console.log(naoDefinido) // undefined
```

---

### **9. Null**

Representa a ausência intencional de qualquer valor ou objeto. É um valor definido manualmente.

```javascript
const vazio = null
console.log(vazio) // null
```

---

### **10. Symbol**

Introduzido no ECMAScript 2015 (ES6), é um tipo primitivo usado para criar identificadores únicos. Geralmente é usado para criar propriedades únicas em objetos.

```javascript
const simbolo = Symbol('id')
const outroSimbolo = Symbol('id')

console.log(simbolo === outroSimbolo) // false
```

---

### **11. Tipo especial: `typeof`**

Você pode verificar o tipo de um valor usando o operador `typeof`:

```javascript
console.log(typeof 'Texto') // "string"
console.log(typeof 42) // "number"
console.log(typeof true) // "boolean"
console.log(typeof undefined) // "undefined"
console.log(typeof null) // "object" (um comportamento histórico)
console.log(typeof Symbol('id')) // "symbol"
console.log(typeof 123n) // "bigint"
```

---

### **Resumo**

| Tipo          | Exemplo                | Descrição                             |
| ------------- | ---------------------- | ------------------------------------- |
| **String**    | `"Texto"` ou `'Texto'` | Sequência de caracteres               |
| **Number**    | `42`, `3.14`, `NaN`    | Números inteiros e de ponto flutuante |
| **BigInt**    | `123n`                 | Inteiros muito grandes                |
| **Boolean**   | `true`, `false`        | Valores lógicos                       |
| **Undefined** | `undefined`            | Variável sem valor atribuído          |
| **Null**      | `null`                 | Ausência de valor                     |
| **Symbol**    | `Symbol("id")`         | Identificador único                   |

Estes tipos primitivos formam a base do JavaScript e são amplamente usados em todos os tipos de aplicações.
