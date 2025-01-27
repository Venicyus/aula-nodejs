# inferência Typescript

A inferência de tipagem no TypeScript é um recurso poderoso que permite ao compilador deduzir automaticamente o tipo de uma variável, função ou expressão, sem a necessidade de especificar o tipo explicitamente. Isso ocorre com base nos valores atribuídos ou no contexto onde a variável ou função é utilizada.

### Exemplos de Inferência de Tipagem

1. **Variáveis:**
   O TypeScript deduz o tipo com base no valor inicial.

   ```typescript
   let nome = 'João' // Tipo inferido como string
   let idade = 25 // Tipo inferido como number
   ```

2. **Funções:**
   O TypeScript pode inferir os tipos de retorno das funções.

   ```typescript
   function somar(a: number, b: number) {
     return a + b // Tipo de retorno inferido como number
   }
   ```

3. **Parâmetros de callback:**
   O TypeScript pode inferir o tipo dos parâmetros com base no contexto.

   ```typescript
   const numeros = [1, 2, 3]
   const dobrados = numeros.map(num => num * 2) // num é inferido como number
   ```

4. **Objetos:**
   Inferência de tipos para propriedades de objetos.

   ```typescript
   const pessoa = {
     nome: 'Maria',
     idade: 30
   } // Tipo inferido: { nome: string; idade: number; }
   ```

5. **Desestruturação:**
   O TypeScript infere os tipos ao desestruturar objetos ou arrays.
   ```typescript
   const { nome, idade } = pessoa // nome: string, idade: number
   const [primeiro, segundo] = numeros // primeiro: number, segundo: number
   ```

### Boas Práticas

- Confie na inferência quando possível, pois isso torna o código mais limpo e legível.
- Use anotações explícitas quando a inferência não for clara ou para evitar ambiguidades.
- Combine a inferência com tipos explícitos em funções públicas ou APIs para garantir maior clareza.

### Quando evitar a inferência?

Quando o tipo não é evidente ou quando você precisa de mais especificidade. Exemplo:

```typescript
let valor: number | string // Sem inferência, especificando o tipo explicitamente
valor = 42
valor = 'Olá'
```

Inferência de tipagem ajuda a evitar redundância, mas a clareza é sempre prioridade em projetos maiores.
