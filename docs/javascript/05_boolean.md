# Boolean

Em TypeScript, **boolean** é um tipo primitivo usado para representar valores lógicos, ou seja, valores que podem ser **verdadeiros** (`true`) ou **falsos** (`false`).

### Declaração de variáveis booleanas:

```typescript
let isActive: boolean = true
let hasAccess: boolean = false
```

### Principais características e funções relacionadas a boolean:

1. **Conversão de valores**:
   Você pode converter outros tipos para boolean usando construtores como `Boolean()`:

   ```typescript
   let value: number = 0
   let isTruthy: boolean = Boolean(value) // false
   ```

2. **Operadores lógicos**:

   - **AND (`&&`)**: Retorna verdadeiro se ambos os valores forem `true`.
   - **OR (`||`)**: Retorna verdadeiro se pelo menos um dos valores for `true`.
   - **NOT (`!`)**: Inverte o valor booleano.

   ```typescript
   let isAdmin: boolean = true
   let isSuperUser: boolean = false

   console.log(isAdmin && isSuperUser) // false
   console.log(isAdmin || isSuperUser) // true
   console.log(!isAdmin) // false
   ```

3. **Controle de fluxo**:
   Valores booleanos são usados frequentemente em declarações condicionais:

   ```typescript
   if (isActive) {
     console.log('Está ativo!')
   } else {
     console.log('Está inativo!')
   }
   ```

4. **Funções que retornam boolean**:
   Funções podem usar o tipo boolean no retorno para representar condições ou estados:

   ```typescript
   function isEven(num: number): boolean {
     return num % 2 === 0
   }

   console.log(isEven(4)) // true
   console.log(isEven(5)) // false
   ```

### Resumo

O tipo **boolean** é fundamental para expressar lógica em TypeScript e é amplamente utilizado em verificações, loops e condições. Suas principais funções são derivadas dos operadores e controle de fluxo.
