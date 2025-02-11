---
id: null-undefined
title: Null e indefinido
---

Nulo e Indefinido são tipos de dados que tratam de casos em que o valor de uma expressão não é conhecido.

## Null

Null é um tipo de dados especial com um único valor possível: **null**. Este valor é devolvido por uma expressão que não contém nenhum valor. Tentar ler uma propriedade de um valor **null** retorna um erro.

Na linguagem 4D e para os atributos dos campos dos objetos, os valores nulos são gerenciados através da função `Null`. Esta função pode ser usada com as expressões abaixo para definir ou comparar o valor nulo:

- atributos de objetos
- elementos da coleção
- variáveis do objeto, coleção, ponteiro, imagem ou tipo variante (ver também [Null como valor padrão](data-types.md#null-as-default-value).

## Indefinido

Indefinido não é realmente um tipo de dados. Denota uma variável que ainda não foi definida. A avaliação de uma propriedade de objeto também pode produzir um valor indefinido. Lendo uma propriedade de um valor indefinido retorna **undefined**.

Uma variável variant tem **undefined** como [valor padrão](data-types.md#default-values).

Um campo não pode ser indefinido (o comando `Undefined` sempre devolve False para um campo).

Normalmente, ao tentar ler ou atribuir expressões indefinidas, 4D gerará erros, exceto nos seguintes casos:

- Atribuir um valor indefinido a variáveis (exceto arrays) tem o mesmo efeito que chamar [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) com elas:

```4d
     C_OBJECT($o)
     C_LONGINT($val)
     $val:=10 //$val=10
     $val:=$o. //$o.a é indefinido (sem erro), e atribuir este valor limpa a variável
      //$val=0
```

- A atribuição de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:
    - Objecto, colecção, ponteiro: Null
    - Imagem: Imagem vazia
    - Booleano: Falso
    - String: ""
    - Número: 0
    - Data: !00-00-00-00! se a configuração "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contrário ""
    - Hora: 0 (número de ms)
    - Indefinido, Null: sem mudança

```4d
     C_OBJECT($o)
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Atribuir um valor indefinido a uma propriedade objecto não existente não faz nada.

- Um valor indefinido passado como parâmetro para um método de projecto é automaticamente convertido em 0 ou "" de acordo com o tipo de parâmetro declarado.

```4d
     C_OBJECT($o)
     meumétodo($o. ) //passa um parâmetro indefinido

      //In mymethod
     C_TEXT($1) //parameter type é texto
      // $1 contém ""
```

- Uma expressão de condição é automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:

```4d
     C_OBJECT($o)
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```


:::tip

Quando expressões de um certo tipo são esperadas em seu código 4D, pode garantir que tenha o tipo correto mesmo quando são avaliadas como indefinidas, cercando-as com o comando de transformação 4D apropriado: `String`, `Num`, `Date`, `Time`, `Bool`. Estes comandos devolvem um valor vazio de tipo especificado quando a expressão é avaliada como indefinida. Por exemplo:

```4d
 $myString:=Caixa minúscula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que não esteja definido
  // para evitar erros no código
```

:::


## Operadores Null


| Operação     | Sintaxe                  | Retorna    | Expression                     | Valor |
| ------------ | ------------------------ | ---------- | ------------------------------ | ----- |
| Igual        | Null `=` Null            | Parâmetros | a.nullProp `=` b.nullProp      | True  |
|              | Null `=` Undefined       | Parâmetros | a.nullProp `=` b.undefinedProp | True  |
|              | Null `=` *valor escalar* | Parâmetros | a.nullProp `=` 42              | False |
| Desigualdade | Null `#` Null            | Parâmetros | a.nullProp `#` b.nullProp      | False |
|              | Null `#` Undefined       | Parâmetros | a.nullProp `#` b.undefinedProp | False |
|              | Null `#` *valor escalar* | Parâmetros | a.nullProp `#` 42              | True  |

Os *valores escalares* são valores do tipo string, Date, Time, Boolean, number, ou Blob. Quando declarado, o seu  [valor por padrão](data-types.md#default-values) não é indefinido nem nulo. Outros tipos (Ponteiro, Imagem, Objecto, Colecção) têm valor por defeito indefinido ou nulo. Ex:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Comparações com os operadores Maior que (`>`), Menor que (`<`), Maior ou igual a (`>=`), e Menor ou igual a (`<=`) não são suportados com valores Nulos e devolvem um erro.

:::

## Operadores indefinidos


| Operação             | Sintaxe                                      | Retorna    | Expression                          | Valor |
| -------------------- | -------------------------------------------- | ---------- | ----------------------------------- | ----- |
| Igual                | Undefined `=` Undefined                      | Parâmetros | a.undefinedProp `=` b.undefinedProp | True  |
|                      | Undefined `=` Null                           | Parâmetros | a.undefinedProp `=` c.nullProp      | True  |
|                      | Undefined `=` *outros valores*               | Parâmetros | a.undefinedProp `=` 42              | False |
| Desigualdade         | Undefined `#` Undefined                      | Parâmetros | a.undefinedProp `#` b.undefinedProp | False |
|                      | Undefined `#` Null                           | Parâmetros | a.undefinedProp `#` b.nullProp      | False |
|                      | Undefined `#` *outros valores*               | Parâmetros | a.undefinedProp `#` 42              | True  |
| Maior que            | Undefined `>` string, Date, Time, number  | Parâmetros | a.undefinedProp `>` "abc"        | False |
| Menor que            | Undefined `<` string, Date, Time, number  | Parâmetros | a.undefinedProp `<` "abc"        | False |
| Maior ou igual a     | Undefined `>=` string, Date, Time, number | Parâmetros | a.undefinedProp `>=` "abc"       | False |
| Menor que ou igual a | Undefined `<=` string, Date, Time, number | Parâmetros | a.undefinedProp `<=` "abc"       | False |

*outros valores* são expressões de qualquer tipo com um valor nem Indefinido nem Null.

:::info

Comparações de valores Indefinidos com Pontos, Imagem, Boolean, Blob, Objecto, Colecção, Valores Indefinidos ou Nulos utilizando valores Maiores que (`>`), Menos que (`<`), Maiores ou iguais a (`>=`), e Menos ou iguais a (`<=`) os operadores não são suportados e devolvem um erro.

:::

## Exemplos

Aquí estão os diferentes resultados do comando `Undefined` assim como do comando `Null` com as propriedades dos objetos, dependendo do contexto:

```4d
C_OBJECT($vEmp)
$vEmp:=New object
$vEmp.name:="Smith"
$vEmp.children:=Null

$undefined:=Undefined($vEmp.name) // False
$null:=($vEmp.name=Null) //False

$undefined:=Undefined($vEmp.children) // False
$null:=($vEmp.children=Null) //True

$undefined:=Undefined($vEmp.parent) // True
$null:=($vEmp.parent=Null) //True
```

Exemplos de resultados de comparação com valores indefinidos e nulos:

```4d
var $result : Booleano
var $vObj : Objecto
var $vVar : Variante

$vObj:=Novo objecto
$vObj.null:=Nulo
// nota que $vVar não está atribuído 

$result:=($vObj.undefined=42) //False
$result:=($vObj.undefined=$vObj.null) //True
$result:=($vObj.undefined=$vVar) //True

$result:=($vObj.indefinido#$vObj.null) //False
$result:=($vObj.undefined#42) //True
$result:=($vObj.undefined#$vVar) //False

$result:=($vObj.indefinido>"olá") //Falso
$result:=($vObj.indefinido>$vVar) //Error
$result:=($vObj.indefinido>$vObj.nulo) //Error
$result:=($vVar < 42) //Falso

```

