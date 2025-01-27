# Tipagem do Typescript

### 1. **Tipagem Básica**

```typescript
let nome: string = 'João'
let idade: number = 30
let ativo: boolean = true
```

### 2. **Arrays**

```typescript
let numeros: number[] = [1, 2, 3, 4, 5]
let nomes: string[] = ['Ana', 'Carlos', 'Maria']
```

### 3. **Tuplas**

```typescript
let pessoa: [string, number] = ['João', 30]
```

### 4. **Enums**

```typescript
enum ColorType {
  Vermelho,
  Azul,
  Verde
}

const cor: ColorType = ColorType.Vermelho

switch (cor) {
  case ColorType.Vermelho:
    console.log('Cor vermelha')
    break
}
```

### 5. **Funções**

#### Com Tipos de Parâmetros e Retorno

```typescript
function somar(a: number, b: number): number {
  return a + b
}
```

#### Funções que Não Retornam Valor (`void`)

```typescript
function logarMensagem(mensagem: string): void {
  console.log(mensagem)
}
```

### 6. **Objetos**

```typescript
let usuario: { nome: string; idade: number; ativo: boolean } = {
  nome: 'Maria',
  idade: 25,
  ativo: true
}
```

### 7. **Interfaces**

Interfaces permitem descrever a estrutura de objetos.

```typescript
interface Usuario {
  nome: string
  idade: number
  ativo: boolean
}

let usuario: Usuario = {
  nome: 'Carlos',
  idade: 40,
  ativo: false
}
```

### 8. **Tipos Opcionais**

Use `?` para indicar propriedades ou parâmetros opcionais.

```typescript
interface Produto {
  nome: string
  preco: number
  descricao?: string // Opcional
}

let produto: Produto = {
  nome: 'Teclado',
  preco: 200
}
```

### 9. **Union Types**

Permite múltiplos tipos para uma variável.

```typescript
let id: string | number
id = 123
id = 'abc'
```

### 10. **Type Aliases**

Cria um nome para tipos complexos.

```typescript
type Id = string | number

let meuId: Id = 123
meuId = 'abc'
```

### 10. **Literal Types**

São úteis para criar tipos mais restritos e seguros, especialmente em combinação com outros recursos, como union types e type aliases. Literal types podem ser usados com valores primitivos como string, number e boolean.

```typescript
type Acao = 'iniciar' | 'pausar' | 'parar'
type Usuario = { nome: string; permissao: Acao }

const admin: Usuario = {
  nome: 'João',
  permissao: 'iniciar' // Válido
}

// admin.permissao = "deletar"; // Erro: "deletar" não faz parte de "Acao"
```
