# Promise

Uma **Promise** é um objeto usado para lidar com operações assíncronas, como requisições de APIs ou leitura de arquivos. Ela representa um valor que pode estar disponível agora, no futuro, ou nunca. As Promises ajudam a evitar o **callback hell** e tornam o código assíncrono mais organizado.

#### Estados de uma Promise:

1. **Pending (pendente):** A operação está em andamento.
2. **Fulfilled (resolvida):** A operação foi concluída com sucesso.
3. **Rejected (rejeitada):** A operação falhou.

#### Exemplo básico:

```javascript
const promessa = new Promise((resolve, reject) => {
  const sucesso = true
  if (sucesso) {
    resolve('Operação bem-sucedida!')
  } else {
    reject('Houve um erro.')
  }
})

promessa
  .then(resultado => console.log(resultado)) // "Operação bem-sucedida!"
  .catch(erro => console.error(erro)) // "Houve um erro."
```

---

### Principais métodos de Promise

#### 1. **`then()`**

Executa uma função quando a Promise é resolvida (**fulfilled**).

```javascript
promise.then(resultado => {
  console.log(resultado)
})
```

#### 2. **`catch()`**

Captura erros ou rejeições (**rejected**) da Promise.

```javascript
promise.catch(erro => {
  console.error(erro)
})
```

#### 3. **`finally()`**

Executa uma função após a Promise ser concluída (resolvida ou rejeitada).

```javascript
promise.finally(() => {
  console.log('Operação concluída.')
})
```

#### 4. **`Promise.all()`**

Executa várias Promises em paralelo e resolve quando **todas** são concluídas. Se uma falhar, a Promise Pai será rejeitada.

```javascript
const requestCardOne = new Promise()
const requestCardTwo = new Promise()
const requestCardTree = new Promise()

// Exemplo aguardando
const resultados = await Promise.all([
  requestCardOne,
  requestCardTwo,
  requestCardTree
])

const resultados = await Promise.all([
  requestCardOne,
  requestCardTwo,
  requestCardTree
])

// Com then e catch
await Promise.all([requestCardOne, requestCardTwo, requestCardTree])
  .then(resultados => console.log(resultados))
  .catch(erro => console.error(erro))
  .finally(() => console.log('Finalizado'))
```

#### 5. **`Promise.allSettled()`**

Resolve quando **todas as Promises** terminam (resolvidas ou rejeitadas).

```javascript
const requestCardOne = new Promise()
const requestCardTwo = new Promise()
const requestCardTree = new Promise()

// Exemplo aguardando
const resultados = await Promise.allSettled([
  requestCardOne, // 3s Sucesso
  requestCardTwo, // 4s Sucesso
  requestCardTree //3s Falha
])

// Result: [
//  { status: 'fulfilled', value: { id: 1, status: 'Pago com Sucesso' } },
//  { status: 'fulfilled', value: { id: 2, status: 'Pago com Sucesso' } },
//  { status: 'rejected', reason: Error.message }
// ]
```

#### 6. **`Promise.race()`**

Resolve ou rejeita com o **primeiro resultado** (seja sucesso ou erro).

```javascript
Promise.race([promise1, promise2])
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro))
```

#### 7. **`Promise.any()`**

Resolve com a **primeira Promise bem-sucedida**. Se todas falharem, retorna um erro.

```javascript
Promise.any([promise1, promise2])
  .then(resultado => console.log(resultado))
  .catch(erro => console.error('Todas falharam.', erro))
```

#### 8. **`Promise.resolve()`**

Cria uma Promise já resolvida.

```javascript
const promise = Promise.resolve('Já resolvida!')
promise.then(resultado => console.log(resultado))
```

#### 9. **`Promise.reject()`**

Cria uma Promise já rejeitada.

```javascript
const promise = Promise.reject('Erro imediato!')
promise.catch(erro => console.error(erro))
```

Esses métodos tornam as Promises uma ferramenta poderosa para trabalhar com operações assíncronas em JavaScript.
