# Date

Em JavaScript, a classe **`Date`** é usada para trabalhar com datas e horas. Ela permite criar, manipular e formatar informações temporais.

### Criando um objeto `Date`

1. **Data e hora atuais**:
   ```javascript
   const agora = new Date()
   ```
2. **Data específica (ano, mês, dia, hora, minuto, segundo, milissegundo)**:
   ```javascript
   const dataEspecifica = new Date(2025, 0, 21, 10, 30, 0, 0) // 21 de janeiro de 2025, 10:30:00
   ```
3. **Com string**:
   ```javascript
   const dataString = new Date('2025-01-21T10:30:00')
   ```
4. **Com timestamp (milissegundos desde 1º de janeiro de 1970 UTC)**:
   ```javascript
   const dataTimestamp = new Date(1674294000000)
   ```

---

### Principais Métodos do `Date`

#### Obter informações

- **`getFullYear()`**: Retorna o ano (ex: 2025).
- **`getMonth()`**: Retorna o mês (0-11). Janeiro é 0.
- **`getDate()`**: Retorna o dia do mês (1-31).
- **`getDay()`**: Retorna o dia da semana (0-6). Domingo é 0.
- **`getHours()`**: Retorna a hora (0-23).
- **`getMinutes()`**: Retorna os minutos (0-59).
- **`getSeconds()`**: Retorna os segundos (0-59).
- **`getMilliseconds()`**: Retorna os milissegundos (0-999).
- **`getTime()`**: Retorna o timestamp (milissegundos desde 1970).
- **`getTimezoneOffset()`**: Retorna a diferença do fuso horário em minutos.

#### Definir informações

- **`setFullYear(ano)`**: Define o ano.
- **`setMonth(mes)`**: Define o mês.
- **`setDate(dia)`**: Define o dia do mês.
- **`setHours(horas)`**: Define as horas.
- **`setMinutes(minutos)`**: Define os minutos.
- **`setSeconds(segundos)`**: Define os segundos.
- **`setMilliseconds(ms)`**: Define os milissegundos.
- **`setTime(timestamp)`**: Define a data/hora a partir de um timestamp.

#### Métodos úteis

- **`toISOString()`**: Retorna a data no formato ISO 8601 (UTC).
- **`toDateString()`**: Retorna apenas a data como string (ex: `Tue Jan 21 2025`).
- **`toTimeString()`**: Retorna apenas o horário como string (ex: `10:30:00 GMT+0000`).
- **`toLocaleDateString()`**: Retorna a data formatada de acordo com a localização.
- **`toLocaleTimeString()`**: Retorna o horário formatado de acordo com a localização.

---

### Exemplo

```javascript
const dataAtual = new Date()

console.log(dataAtual.getFullYear()) // Ano atual
console.log(dataAtual.getMonth() + 1) // Mês atual (corrigido para 1-12)
console.log(dataAtual.toISOString()) // Formato ISO 8601
```

A classe `Date` é muito poderosa para lidar com operações temporais
