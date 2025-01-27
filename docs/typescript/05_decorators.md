# Decorators

Decorators em TypeScript são uma funcionalidade avançada que permite adicionar comportamentos ou metadados a classes, métodos, propriedades ou parâmetros. Eles são amplamente usados em frameworks como Angular e podem ser uma ferramenta poderosa para estruturar e modularizar código.

Para usar decoradores, você precisa ativá-los no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Aqui estão os tipos de decoradores disponíveis no TypeScript:

### 1. **Class Decorator**

É aplicado a uma classe e pode modificar seu comportamento ou registrar informações.

```typescript
function LogClass(constructor: Function) {
  console.log(`Classe criada: ${constructor.name}`)
}

@LogClass
class Pessoa {
  constructor(public nome: string) {}
}
```

---

### 2. **Property Decorator**

É usado para adicionar metadados ou modificar propriedades de uma classe.

```typescript
function LogProperty(target: any, propertyKey: string) {
  console.log(`Propriedade: ${propertyKey}`)
}

class Produto {
  @LogProperty
  preco: number

  constructor(preco: number) {
    this.preco = preco
  }
}
```

---

### 3. **Method Decorator**

É usado para modificar ou interceptar o comportamento de um método.

```typescript
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`Chamando método: ${propertyKey} com argumentos: ${args}`)
    return originalMethod.apply(this, args)
  }

  return descriptor
}

class Calculadora {
  @LogMethod
  somar(a: number, b: number): number {
    return a + b
  }
}

const calc = new Calculadora()
calc.somar(2, 3) // Log do método
```

---

### 4. **Accessor Decorator**

É usado em getters e setters.

```typescript
function LogAccessor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Acessor: ${propertyKey}`)
}

class Conta {
  private _saldo: number = 0

  @LogAccessor
  get saldo() {
    return this._saldo
  }

  set saldo(valor: number) {
    this._saldo = valor
  }
}
```

---

### 5. **Parameter Decorator**

Aplica-se a parâmetros de métodos.

```typescript
function LogParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`Parâmetro no método ${propertyKey}, índice: ${parameterIndex}`)
}

class Servico {
  executar(@LogParameter mensagem: string) {
    console.log(mensagem)
  }
}

const servico = new Servico()
servico.executar('Olá!')
```

---

### Quando usar?

Decorators são úteis para:

- Adicionar metadados (e.g., validações).
- Interceptar comportamentos (e.g., logs, autenticação).
- Automatizar padrões repetitivos.

### Observação

Decorators são uma funcionalidade experimental no TypeScript e dependem de suporte em JavaScript, portanto, fique atento às futuras mudanças na especificação.
