# Async Await

### **O que são `async` e `await` em JavaScript?**

- **`async`**: Marca uma função como assíncrona, que sempre retorna uma `Promise`.
- **`await`**: Pausa a execução da função assíncrona até que a `Promise` seja resolvida ou rejeitada. Só pode ser usado dentro de funções `async`.

---

### **Exemplo 1: Função `async` com retorno de Promise**

```javascript
async function exemploAsync() {
  return 'Resultado' // Retorno é automaticamente encapsulado em uma Promise
}

exemploAsync()
  .then(resultado => console.log(resultado)) // Resultado: "Resultado"
  .catch(erro => console.error(erro))
```

---

### **Exemplo 2: Usando `await` para esperar uma Promise**

```javascript
async function exemploAwait() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolvido com sucesso!'), 1000)
  })

  try {
    const resultado = await promise // Aguarda a Promise ser resolvida
    console.log(resultado) // Resolvido com sucesso!
  } catch (erro) {
    console.error(erro) // Trata erros, se houver
  }
}

exemploAwait()
```

---

### **Exemplo 3: Comparação entre `async/await` e `.then()/.catch()`**

#### Usando `.then()` e `.catch()`:

```javascript
function exemploThenCatch() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolvido com then!'), 1000)
  })

  promise
    .then(resultado => console.log(resultado)) // Resolvido com then!
    .catch(erro => console.error(erro)) // Trata erros, se houver
}

exemploThenCatch()
```

#### Usando `async/await`:

```javascript
async function exemploAsyncAwait() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolvido com async/await!'), 1000)
  })

  try {
    const resultado = await promise
    console.log(resultado) // Resolvido com async/await!
  } catch (erro) {
    console.error(erro)
  }
}

exemploAsyncAwait()
```

---

### **Resumo**

1. **`async`** torna funções assíncronas e faz com que elas retornem uma `Promise`.
2. **`await`** permite que você escreva código assíncrono de maneira mais síncrona, tornando-o mais fácil de ler e manter.
3. Comparado com `.then()` e `.catch()`, `async/await` é mais limpo e legível em fluxos de controle mais complexos.
