# Event Loop

O **Event Loop** é um dos conceitos fundamentais do Node.js e desempenha um papel crucial em sua arquitetura assíncrona e baseada em eventos. Ele é responsável por gerenciar a execução de operações não bloqueantes, delegando tarefas e garantindo que callbacks sejam processados corretamente.

### Como funciona o Event Loop:

1. **Single-threaded**: O Node.js utiliza uma única thread para executar o código JavaScript, mas delega tarefas pesadas, como operações de E/S (entrada/saída) e cálculos intensivos, para outras threads no sistema (através da libuv).

2. **Fases do Event Loop**:
   O Event Loop é dividido em várias fases, que são processadas de forma sequencial:

   - **Timers**: Processa callbacks de funções como `setTimeout` e `setInterval` cujo tempo já expirou.
   - **Pending Callbacks**: Executa callbacks atrasados, como erros de operações de E/S.
   - **I/O Polling**: Aguarda novas conexões e verifica a conclusão de operações de I/O.
   - **Check**: Executa callbacks agendados pelo `setImmediate`.
   - **Close Callbacks**: Lida com eventos de fechamento, como `socket.on('close', ...)`.

3. **Fila de Callbacks**: Enquanto o Event Loop avança pelas fases, ele verifica as filas de callbacks para decidir qual função deve ser executada.

4. **Assíncrono e Não Bloqueante**: Graças ao Event Loop, o Node.js consegue realizar múltiplas operações de forma eficiente sem bloquear a execução, mesmo usando uma única thread para o JavaScript.

Vou criar uma imagem para ilustrar o funcionamento. Um momento!

Aqui está uma ilustração sobre o funcionamento do **Event Loop** no Node.js. A imagem apresenta as diferentes fases, como **Timers**, **Pending Callbacks**, **Poll**, **Check** e **Close Callbacks**, além da interação com a **Callback Queue** e o **Thread Pool**. Espero que ajude a visualizar o conceito de forma clara! Se precisar de mais detalhes, é só pedir.

Aqui está um exemplo prático utilizando uma **Promise** e como ela é processada pelo Event Loop:

### Código de exemplo:

```javascript
console.log('1. Início do programa')

setTimeout(() => {
  console.log('2. Timeout executado')
}, 0)

Promise.resolve().then(() => {
  console.log('3. Promise resolvida')
})

console.log('4. Fim do programa')
```

### Explicação passo a passo:

1. **`console.log('1. Início do programa')`**: Executado imediatamente, pois está na pilha principal de execução.
2. **`setTimeout`**: O callback é registrado, mas será processado na fase de **Timers** do Event Loop após a execução dos blocos principais.
3. **`Promise.resolve().then(...)`**: A callback associada à Promise é enviada para a **microtask queue**, que tem prioridade sobre a **callback queue** do `setTimeout`.
4. **`console.log('4. Fim do programa')`**: Executado imediatamente após a configuração da Promise e do Timeout.
5. O **Event Loop** agora processa as **microtasks**:
   - A callback da **Promise** é executada, imprimindo `3. Promise resolvida`.
6. Depois que as microtasks terminam, o Event Loop processa a **callback queue**:
   - O callback do `setTimeout` é executado, imprimindo `2. Timeout executado`.

### Resultado esperado no console:

```
1. Início do programa
4. Fim do programa
3. Promise resolvida
2. Timeout executado
```

### Por que isso acontece?

- **Promises** utilizam a **microtask queue**, que é processada antes da **callback queue**. Portanto, mesmo que o `setTimeout` tenha um tempo de 0ms, ele será executado depois das microtasks.
