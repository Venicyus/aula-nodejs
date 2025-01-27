# Casting

Em JavaScript, **casting** refere-se à conversão de um tipo de dado para outro. Não existe um sistema de tipos estrito como em linguagens fortemente tipadas, mas você pode converter valores manualmente ou implicitamente. Aqui estão algumas formas comuns de casting:

### 1. **Conversão para Número**

- `Number(valor)`: Converte explicitamente para número.
- `parseInt(valor, base)`: Converte para um número inteiro (base pode ser especificada, como `10` para decimal).
- `parseFloat(valor)`: Converte para número de ponto flutuante.
- Operador unário `+`: Converte para número rapidamente.

```javascript
Number('42') // 42
parseInt('42px') // 42
parseFloat('3.14') // 3.14
;+'42' // 42
```

### 2. **Conversão para String**

- `String(valor)`: Converte explicitamente para string.
- `.toString()`: Método para converter um objeto para string.
- Concatenação com string (`+ ""`).

```javascript
String(42) // "42"
;(42).toString() // "42"
42 + '' // "42"
```

### 3. **Conversão para Boolean**

- `Boolean(valor)`: Converte explicitamente para booleano.
- Usando coerção em contextos como `if`, `!!` pode forçar a conversão.

```javascript
Boolean(0) // false
Boolean('Hello') // true
!!'' // false
!!1 // true
```

### 4. **Conversão para Objeto**

- `Object(valor)`: Cria um wrapper objeto para valores primitivos.

```javascript
Object(42) // [Number: 42]
```

### Coerção implícita

Ocorre automaticamente em certas operações:

- Concatenação de string: `42 + " é um número"` → `"42 é um número"`.
- Comparação: `5 == "5"` → `true` (evite, prefira `===`).

### Nota

Evite depender de coerções implícitas, pois podem causar bugs. Use conversões explícitas quando possível!
