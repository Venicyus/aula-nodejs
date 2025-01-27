# Number

Em JavaScript, o tipo `Number` representa valores numéricos, sejam inteiros ou de ponto flutuante. Ele é usado para manipular números em cálculos e possui propriedades e métodos úteis para operações.

### **Principais métodos de `Number`**:

1. **`toFixed(digits)`**  
   Retorna o número como uma string com o número de casas decimais especificado.

   ```javascript
   let num = 123.456
   console.log(num.toFixed(2)) // "123.46"
   ```

2. **`toExponential(fractionDigits)`**  
   Retorna o número em notação exponencial, com o número de casas decimais especificado.

   ```javascript
   let num = 12345
   console.log(num.toExponential(2)) // "1.23e+4"
   ```

3. **`toPrecision(precision)`**  
   Retorna o número como uma string com a precisão especificada (número total de dígitos).

   ```javascript
   let num = 123.456
   console.log(num.toPrecision(4)) // "123.5"
   ```

4. **`toString([radix])`**  
   Converte o número para uma string, podendo especificar a base (radix) entre 2 e 36.

   ```javascript
   let num = 255
   console.log(num.toString(16)) // "ff" (hexadecimal)
   ```

5. **`isNaN(value)`** _(método estático)_  
   Verifica se o valor não é um número (Not-a-Number).

   ```javascript
   console.log(Number.isNaN(NaN)) // true
   ```

6. **`isInteger(value)`** _(método estático)_  
   Verifica se o valor é um número inteiro.

   ```javascript
   console.log(Number.isInteger(10)) // true
   console.log(Number.isInteger(10.5)) // false
   ```

7. **`isFinite(value)`** _(método estático)_  
   Verifica se o valor é um número finito.

   ```javascript
   console.log(Number.isFinite(100)) // true
   console.log(Number.isFinite(Infinity)) // false
   ```

8. **`parseFloat(string)`** _(método global, mas associado a números)_  
   Converte uma string em um número de ponto flutuante.

   ```javascript
   console.log(Number.parseFloat('3.14')) // 3.14
   ```

9. **`parseInt(string, radix)`** _(método global, mas associado a números)_  
   Converte uma string em um inteiro com base especificada.
   ```javascript
   console.log(Number.parseInt('10', 2)) // 2 (binário para decimal)
   ```

### **Propriedades úteis de `Number`:**

- `Number.MAX_VALUE`: Maior valor numérico representável.
- `Number.MIN_VALUE`: Menor valor positivo representável.
- `Number.POSITIVE_INFINITY`: Representa o infinito positivo.
- `Number.NEGATIVE_INFINITY`: Representa o infinito negativo.
- `Number.NaN`: Representa "Not-a-Number".

Esses métodos e propriedades tornam o `Number` uma ferramenta poderosa para manipulação de números em JavaScript.
