# Object

No JavaScript, um **objeto** é uma coleção de pares chave-valor. Ele pode armazenar propriedades (dados) e métodos (funções associadas ao objeto). Objetos são fundamentais na linguagem e são usados para representar entidades e manipular dados.

### Estrutura de um Objeto:

```javascript
const pessoa = {
  nome: 'João',
  idade: 30,
  cumprimentar: function () {
    console.log(`Olá, meu nome é ${this.nome}`)
  }
}
```

### Propriedades e Métodos Principais:

Aqui estão alguns métodos comuns disponíveis em objetos no JavaScript:

#### 1. **`Object.keys(obj)`**

Retorna um array contendo as chaves (propriedades) do objeto.

```javascript
Object.keys(pessoa) // ["nome", "idade", "cumprimentar"]
```

#### 2. **`Object.values(obj)`**

Retorna um array com os valores das propriedades do objeto.

```javascript
Object.values(pessoa) // ["João", 30, [Function: cumprimentar]]
```

#### 3. **`Object.entries(obj)`**

Retorna um array de pares `[chave, valor]`.

```javascript
Object.entries(pessoa)
// [["nome", "João"], ["idade", 30], ["cumprimentar", [Function: cumprimentar]]]
```

#### 4. **`Object.assign(target, source)`**

Copia as propriedades de um ou mais objetos para outro.

```javascript
const destino = {}
Object.assign(destino, pessoa)
console.log(destino) // { nome: "João", idade: 30, cumprimentar: [Function: cumprimentar] }
```

#### 5. **`Object.freeze(obj)`**

Congela um objeto, impedindo alterações (adicionar, remover ou modificar propriedades).

```javascript
Object.freeze(pessoa)
pessoa.idade = 25 // Não terá efeito
```

#### 6. **`Object.seal(obj)`**

Sela um objeto, permitindo modificar valores das propriedades existentes, mas impedindo adicionar ou remover propriedades.

```javascript
Object.seal(pessoa)
pessoa.altura = 1.8 // Não terá efeito
```

#### 7. **`Object.hasOwnProperty(prop)`**

Verifica se o objeto possui uma propriedade específica.

```javascript
pessoa.hasOwnProperty('nome') // true
```

#### 8. **`Object.is(obj1, obj2)`**

Compara dois valores para verificar se são estritamente iguais.

```javascript
Object.is(10, 10) // true
Object.is({}, {}) // false
```

Esses métodos são úteis para manipulação e inspeção de objetos no JavaScript. Você pode combiná-los para criar lógica mais avançada em seus programas.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
