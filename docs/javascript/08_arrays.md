# Array

Em JavaScript, um **array** é uma estrutura de dados que permite armazenar e manipular uma coleção de elementos. Esses elementos podem ser de qualquer tipo, como números, strings, objetos, funções ou até outros arrays.

Os arrays em JavaScript são **dinâmicos**, o que significa que seu tamanho pode mudar (você pode adicionar ou remover elementos a qualquer momento), e eles permitem armazenar valores heterogêneos (tipos diferentes no mesmo array).

### **Características de Arrays em JavaScript**

1. **Indexados por número**: Os elementos são acessados por índices que começam em `0`.
2. **Dinâmicos**: O tamanho do array pode crescer ou diminuir conforme necessário.
3. **Heterogêneos**: Podem conter diferentes tipos de dados no mesmo array.
4. **Baseados em objetos**: Arrays em JavaScript são essencialmente objetos, mas possuem funcionalidades e métodos especializados.

---

### **Exemplo básico de array**

```javascript
// Criando um array
const frutas = ['Maçã', 'Banana', 'Laranja']

// Acessando elementos
console.log(frutas[0]) // 'Maçã'
console.log(frutas[2]) // 'Laranja'

// Adicionando elementos
frutas.push('Manga')
console.log(frutas) // ['Maçã', 'Banana', 'Laranja', 'Manga']

// Removendo elementos
frutas.pop() // Remove o último elemento
console.log(frutas) // ['Maçã', 'Banana', 'Laranja']
```

---

### **Métodos e propriedades úteis em arrays**

- **`.length`**: Retorna o número de elementos no array.

  ```javascript
  const numeros = [1, 2, 3, 4]
  console.log(numeros.length) // 4
  ```

- **`.push()`**: Adiciona um ou mais elementos no final do array.

  ```javascript
  numeros.push(5)
  console.log(numeros) // [1, 2, 3, 4, 5]
  ```

- **`.pop()`**: Remove o último elemento do array.

  ```javascript
  numeros.pop()
  console.log(numeros) // [1, 2, 3, 4]
  ```

- **`.shift()`**: Remove o primeiro elemento do array.

  ```javascript
  numeros.shift()
  console.log(numeros) // [2, 3, 4]
  ```

- **`.unshift()`**: Adiciona um ou mais elementos no início do array.

  ```javascript
  numeros.unshift(0)
  console.log(numeros) // [0, 2, 3, 4]
  ```

---

### **Exemplo com tipos mistos**

Arrays podem conter diferentes tipos de dados:

```javascript
const misto = [42, 'Texto', true, { chave: 'valor' }, [1, 2, 3]]

console.log(misto)
// [42, 'Texto', true, { chave: 'valor' }, [1, 2, 3]]
```

---

### **Arrays Multidimensionais**

Um array pode conter outros arrays, criando matrizes:

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matriz[1][2]) // 6 (linha 2, coluna 3)
```

---

### **Quando usar arrays**

- Para armazenar listas ordenadas de itens (como nomes, números, objetos, etc.).
- Quando precisa de manipulação eficiente de coleções com métodos prontos (como `.map`, `.filter`, `.reduce`, etc.).

Os arrays são extremamente úteis e amplamente usados em JavaScript devido à sua flexibilidade e funcionalidade integrada! 🚀

---

### **Principais métodos de array**

### 1. **`.map()`**

- **Descrição**: Cria um novo array aplicando uma função a cada elemento do array original.
- **Retorno quando não há correspondência**: Sempre retorna um array com o mesmo número de elementos que o array original (não há "não correspondência").

#### Exemplo:

```javascript
// Ex: 1
const numeros = [1, 2, 3, 4, 5]
const dobrados = numeros.map(num => num * 2)

console.log(dobrados) // [2, 4, 6, 8, 10]

// Ex: 2
const numeros = []
const dobrados = numeros.map(num => num * 2)

console.log(dobrados) // []

// Ex: 3
const pessoas = [
  {
    name: 'joão',
    idade: 30
  },
  {
    name: 'maria',
    idade: 24
  }
]
const dobrados = pessoas.map(pessoa => pessoa.name)

console.log(dobrados) // ['joão', 'maria']
```

---

### 2. **`.filter()`**

- **Descrição**: Cria um novo array com elementos que passam em um teste.
- **Retorno quando não há correspondência**: Retorna um array vazio `[]`.

#### Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5]
const pares = numeros.filter(num => num % 2 === 0)
const maioresQue10 = numeros.filter(num => num > 10)

console.log(pares) // [2, 4]
console.log(maioresQue10) // []
```

---

### 3. **`.find()`**

- **Descrição**: Retorna o primeiro elemento que satisfaz a condição.
- **Retorno quando não há correspondência**: Retorna `undefined`.

#### Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5]
const encontrado = numeros.find(num => num > 3)
const naoEncontrado = numeros.find(num => num > 10)

console.log(encontrado) // 4
console.log(naoEncontrado) // undefined
```

---

### 4. **`.forEach()`**

- **Descrição**: Executa uma função para cada elemento do array.
- **Retorno quando não há correspondência**: Não retorna nada (`undefined`), mas não faz nada se o array estiver vazio.

#### Exemplo:

```javascript
const numeros = [1, 2, 3]
numeros.forEach(num => console.log(num * 2))

// Saída:
// 2
// 4
// 6
```

---

### 5. **`.reduce()`**

- **Descrição**: Reduz o array a um único valor, aplicando uma função acumuladora.
- **Retorno quando não há correspondência**: Não há "não correspondência", mas pode retornar o valor inicial caso o array esteja vazio.

#### Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5]
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)

console.log(soma) // 15
```

---

### 6. **`.findIndex()`**

- **Descrição**: Retorna o índice do primeiro elemento que satisfaz a condição.
- **Retorno quando não há correspondência**: Retorna `-1`.

#### Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5]
const indice = numeros.findIndex(num => num > 3)
const indiceNaoEncontrado = numeros.findIndex(num => num > 10)

console.log(indice) // 3
console.log(indiceNaoEncontrado) // -1
```

---

### 7. **`.some()`**

- **Descrição**: Retorna `true` se pelo menos um elemento passar no teste.
- **Retorno quando não há correspondência**: Retorna `false`.

#### Exemplo:

```javascript
const numeros = [1, 2, 3]
const temPares = numeros.some(num => num % 2 === 0)
const temMaioresQue10 = numeros.some(num => num > 10)

console.log(temPares) // true
console.log(temMaioresQue10) // false
```

---

### 8. **`.every()`**

- **Descrição**: Retorna `true` se **todos** os elementos passarem no teste.
- **Retorno quando não há correspondência**: Retorna `false` se pelo menos um elemento falhar no teste.

#### Exemplo:

```javascript
const numeros = [2, 4, 6]
const todosPares = numeros.every(num => num % 2 === 0)
const todosMaioresQue10 = numeros.every(num => num > 10)

console.log(todosPares) // true
console.log(todosMaioresQue10) // false
```

---

### 9. **`.sort()`**

- **Descrição**: Ordena os elementos do array (modifica o array original).
- **Retorno quando não há correspondência**: Não há "não correspondência", mas o resultado depende da função de comparação.

#### Exemplo:

```javascript
const numeros = [5, 3, 8, 1]
numeros.sort((a, b) => a - b)

console.log(numeros) // [1, 3, 5, 8]

const lista = [
  { id: 3, nome: 'Caderno' },
  { id: 1, nome: 'Caneta' },
  { id: 2, nome: 'Lápis' }
]

// Ordenar pelo id (crescente)
lista.sort((a, b) => a.id - b.id)

console.log(lista)
// Resultado:
// [ { id: 1, nome: 'Caneta' },
//   { id: 2, nome: 'Lápis' },
//   { id: 3, nome: 'Caderno' } ]
```

---

### 10. **`.concat()`**

- **Descrição**: Concatena dois ou mais arrays.
- **Retorno quando não há correspondência**: Sempre retorna um novo array, mesmo que os arrays concatenados sejam vazios.

#### Exemplo:

```javascript
const array1 = [1, 2]
const array2 = [3, 4]
const vazio = []
const concatenado = array1.concat(array2, vazio)

console.log(concatenado) // [1, 2, 3, 4]
```

---

### 11. **`.slice()`**

- **Descrição**: Retorna uma cópia de uma parte do array.
- **Retorno quando não há correspondência**: Retorna um array vazio `[]` se os índices não forem válidos ou o intervalo for vazio.

#### Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5]
const subArray = numeros.slice(1, 4)
const vazio = numeros.slice(10, 12)

console.log(subArray) // [2, 3, 4]
console.log(vazio) // []
```

---

### 12. **`.splice()`**

- **Descrição**: Adiciona, remove ou substitui elementos no array.
- **Retorno quando não há correspondência**: Retorna um array vazio `[]` se não houver elementos removidos.

#### Exemplo:

```javascript
const numeros = [1, 2, 3, 4]
const removidos = numeros.splice(2, 1, 99)
const semRemocao = numeros.splice(10, 1)

console.log(removidos) // [3]
console.log(semRemocao) // []
console.log(numeros) // [1, 2, 99, 4]
```

---

Esses exemplos consolidam os métodos mais usados, seu comportamento em situações de **não correspondência**, e suas características gerais para uso prático no dia a dia de desenvolvimento. 🚀

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
