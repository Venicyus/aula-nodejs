# Utilitários

O TypeScript oferece uma série de **utility types** (tipos utilitários) que ajudam a manipular, transformar e criar novos tipos de forma eficiente. Esses utilitários são muito úteis para tornar o código mais claro e reaproveitável.

Aqui estão os principais utilitários do TypeScript:

---

## **1. `Partial<Type>`**

Cria um tipo com todas as propriedades de `Type` como opcionais.

```typescript
interface User {
  id: number
  name: string
  email: string
}

const partialUser: Partial<User> = {
  name: 'John Doe'
}
```

---

## **2. `Required<Type>`**

Faz todas as propriedades de `Type` serem obrigatórias.

```typescript
interface User {
  id?: number
  name?: string
}

const requiredUser: Required<User> = {
  id: 1,
  name: 'John Doe'
}
```

---

## **3. `Readonly<Type>`**

Faz todas as propriedades de `Type` serem somente leitura.

```typescript
interface User {
  id: number
  name: string
}

const readonlyUser: Readonly<User> = {
  id: 1,
  name: 'John Doe'
}

// readonlyUser.id = 2; // Erro: não é possível modificar
```

---

## **4. `Pick<Type, Keys>`**

Cria um tipo com um subconjunto de propriedades de `Type`.

```typescript
interface User {
  id: number
  name: string
  email: string
}

const pickedUser: Pick<User, 'id' | 'name'> = {
  id: 1,
  name: 'John Doe'
}
```

---

## **5. `Omit<Type, Keys>`**

Cria um tipo excluindo certas propriedades de `Type`.

```typescript
interface User {
  id: number
  name: string
  email: string
}

const omittedUser: Omit<User, 'email'> = {
  id: 1,
  name: 'John Doe'
}
```

---

## **6. `Record<Keys, Type>`**

Cria um tipo de objeto onde as chaves são de um tipo específico e os valores também.

```typescript
type Roles = 'admin' | 'editor' | 'viewer'

const roles: Record<Roles, string> = {
  admin: 'John',
  editor: 'Jane',
  viewer: 'Smith'
}
```

---

## **7. `Exclude<Type, ExcludedUnion>`**

Exclui tipos de uma união.

```typescript
type T = string | number | boolean

type Result = Exclude<T, boolean> // string | number
```

---

## **8. `Extract<Type, Union>`**

Extrai os tipos de uma união que são atribuíveis ao `Union`.

```typescript
type T = string | number | boolean

type Result = Extract<T, string | number> // string | number
```

---

## **9. `NonNullable<Type>`**

Remove `null` e `undefined` de um tipo.

```typescript
type T = string | null | undefined

type Result = NonNullable<T> // string
```

---

## **10. `ReturnType<Type>`**

Obtém o tipo de retorno de uma função.

```typescript
function getUser() {
  return { id: 1, name: 'John' }
}

type User = ReturnType<typeof getUser> // { id: number; name: string }
```

---

## **11. `Parameters<Type>`**

Obtém uma tupla com os tipos dos parâmetros de uma função.

```typescript
function greet(name: string, age: number) {}

type Params = Parameters<typeof greet> // [string, number]
```

---

## **12. `ConstructorParameters<Type>`**

Obtém uma tupla com os tipos dos parâmetros de um construtor.

```typescript
class User {
  constructor(public name: string, public age: number) {}
}

type ConstructorParams = ConstructorParameters<typeof User> // [string, number]
```

---

Esses utilitários economizam tempo e tornam seu código mais **modular** e **tipado**, especialmente ao trabalhar com estruturas complexas.
