# String

Em JavaScript, uma **string** é uma sequência de caracteres usada para representar texto. Strings são imutáveis, ou seja, uma vez criadas, não podem ser alteradas, mas é possível criar novas strings a partir de manipulações.

### Principais métodos de strings:

1. **Manipulação de conteúdo:**

   - `charAt(index)`: Retorna o caractere no índice especificado.
   - `charCodeAt(index)`: Retorna o código Unicode do caractere no índice especificado.
   - `concat(string2, ...)`: Junta duas ou mais strings.
   - `includes(substring)`: Verifica se a string contém o texto especificado.
   - `endsWith(substring)`: Verifica se a string termina com o texto especificado.
   - `startsWith(substring)`: Verifica se a string começa com o texto especificado.
   - `slice(start, end)`: Extrai parte de uma string.
   - `substring(start, end)`: Extrai parte de uma string entre os índices.
   - `substr(start, length)`: (Depreciado) Extrai parte da string baseado em um início e um comprimento.

2. **Transformações:**

   - `toLowerCase()`: Converte a string para minúsculas.
   - `toUpperCase()`: Converte a string para maiúsculas.
   - `trim()`: Remove espaços em branco das extremidades.
   - `trimStart() / trimEnd()`: Remove espaços no início ou fim.

3. **Busca e substituição:**

   - `indexOf(substring)`: Retorna o índice da primeira ocorrência de uma substring.
   - `lastIndexOf(substring)`: Retorna o índice da última ocorrência de uma substring.
   - `replace(searchValue, newValue)`: Substitui parte do texto por outro.
   - `replaceAll(searchValue, newValue)`: Substitui todas as ocorrências de um texto.

4. **Divisão e iteração:**

   - `split(separator)`: Divide a string em um array baseado no separador.
   - `repeat(n)`: Repete a string `n` vezes.

5. **Expressões regulares:**

   - `match(regex)`: Retorna correspondências com base em uma regex.
   - `matchAll(regex)`: Retorna todas as correspondências com detalhes.
   - `search(regex)`: Retorna o índice da primeira correspondência com base na regex.
   - `replace(regex, newValue)`: Substitui com base na regex.

6. **Outros:**
   - `length`: Propriedade que retorna o tamanho da string.
   - `padStart(targetLength, padString)`: Preenche o início da string para atingir o tamanho desejado.
   - `padEnd(targetLength, padString)`: Preenche o final da string para atingir o tamanho desejado.

### Exemplo:

```javascript
let texto = 'JavaScript é incrível!'

console.log(texto.length) // 21
console.log(texto.toUpperCase()) // "JAVASCRIPT É INCRÍVEL!"
console.log(texto.includes('incrível')) // true
console.log(texto.slice(0, 10)) // "JavaScript"
console.log(texto.replace('incrível', 'poderoso')) // "JavaScript é poderoso!"
```

Esses métodos são muito úteis para manipulação e análise de textos em aplicações.
