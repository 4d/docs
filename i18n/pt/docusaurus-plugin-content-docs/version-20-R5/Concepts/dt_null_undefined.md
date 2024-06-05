---
id: null-undefined
title: Null e indefinido
---

Nulo e Indefinido são tipos de dados que tratam de casos em que o valor de uma expressão não é conhecido.

## Null

Null is a special data type with only one possible value: **null**. Este valor é devolvido por uma expressão que não contém nenhum valor. Trying to read a property of a **null** value returns an error.

In the 4D language and for object field attributes, null values are managed through the `Null` function. Esta função pode ser usada com as expressões abaixo para definir ou comparar o valor nulo:

- atributos de objetos
- elementos da coleção
- variables of the object, collection, pointer, picture, or variant type (see also [Null as default value](data-types.md#null-as-default-value).

## Indefinido

Indefinido não é realmente um tipo de dados. Denota uma variável que ainda não foi definida. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns **undefined**.

A variant variable has **undefined** as [default value](data-types.md#default-values).

A field cannot be undefined (the `Undefined` command always returns False for a field).

Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:

- Atribuindo um valor indefinido para variáveis (exceto arrays) tem o mesmo efeito que chamar [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) com eles:

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
     var $o : Object
     mymethod($o.a) //pass an undefined parameter
     
      //In mymethod method
     #Declare ($myText : Text) //parameter type is text
      // $myText contains ""
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

When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: `String`, `Num`, `Date`, `Time`, `Bool`. Estes comandos devolvem um valor vazio de tipo especificado quando a expressão é avaliada como indefinida. Por exemplo:

```4d
 $myString:=Caixa minúscula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que não esteja definido
  // para evitar erros no código
```

:::

## Operadores Null

| Operação     | Sintaxe                 | Retorna    | Expression                                                     | Valor |
| ------------ | ----------------------- | ---------- | -------------------------------------------------------------- | ----- |
| Igual        | Null `=` Null           | Parâmetros | a.nullProp `=` b.nullProp      | True  |
|              | Null `=` Undefined      | Parâmetros | a.nullProp `=` b.undefinedProp | True  |
|              | Null `=` _scalar value_ | Parâmetros | a.nullProp `=` 42                              | False |
| Desigualdade | Null `#` Null           | Parâmetros | a.nullProp `#` b.nullProp      | False |
|              | Null `#` Undefined      | Parâmetros | a.nullProp `#` b.undefinedProp | False |
|              | Null `#` _scalar value_ | Parâmetros | a.nullProp `#` 42                              | True  |

_scalar values_ are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. Outros tipos (Ponteiro, Imagem, Objecto, Colecção) têm valor por defeito indefinido ou nulo. Ex:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with Null values and return an error.

:::

## Operadores indefinidos

| Operação             | Sintaxe                                            | Retorna    | Expression                                                          | Valor |
| -------------------- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------- | ----- |
| Igual                | Undefined `=` Undefined                            | Parâmetros | a.undefinedProp `=` b.undefinedProp | True  |
|                      | Undefined `=` Null                                 | Parâmetros | a.undefinedProp `=` c.nullProp      | True  |
|                      | Undefined `=` _outros valores_                     | Parâmetros | a.undefinedProp `=` 42                              | False |
| Desigualdade         | Undefined `#` Undefined                            | Parâmetros | a.undefinedProp `#` b.undefinedProp | False |
|                      | Undefined `#` Null                                 | Parâmetros | a.undefinedProp `#` b.nullProp      | False |
|                      | Undefined `#` _outros valores_                     | Parâmetros | a.undefinedProp `#` 42                              | True  |
| Maior que            | Undefined `>` string, Date, Time, Boolean, number  | Parâmetros | a.undefinedProp `>` "abc"                           | False |
| Menor que            | Undefined `<` string, Date, Time, Boolean, number  | Parâmetros | a.undefinedProp `<` "abc"                           | False |
| Maior ou igual a     | Undefined `>=` string, Date, Time, Boolean, number | Parâmetros | a.undefinedProp `>=` "abc"                          | False |
| Menor que ou igual a | Undefined `<=` string, Date, Time, Boolean, number | Parâmetros | a.undefinedProp `<=` "abc"                          | False |

_other values_ are expressions of any type with a value neither Undefined nor Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Exemplos

Here are the different results of the `Undefined` command as well as the `Null` command with object properties, depending on the context:

```4d
var $vEmp : Object
var $result : Boolean
$vEmp:=New object
$vEmp.name:="Smith"

$vEmp.children:=Null
 
$result:=Undefined($vEmp.name) //False
$result:=($vEmp.name=Null) //False
 
$result:=Undefined($vEmp.children) //False
$result:=($vEmp.children=Null) //True
 
$result:=Undefined($vEmp.parent) //True
$result:=($vEmp.parent=Null) //True
```

Exemplos de resultados de comparação com valores indefinidos e nulos:

```4d
var $result : Boolean
var $vObj : Object
var $vVar : Variant

$vObj:=New object
$vObj.null:=Null
//note that $vVar is not assigned 

$result:=($vObj.undefined=42) //False
$result:=($vObj.undefined=$vObj.null) //True
$result:=($vObj.undefined=$vVar)  //True

$result:=($vObj.undefined#$vObj.null) //False
$result:=($vObj.undefined#42) //True
$result:=($vObj.undefined#$vVar) //False

$result:=($vObj.undefined>"hello") //False
$result:=($vObj.undefined>$vVar)  //Error
$result:=($vObj.undefined>$vObj.null)  //Error
$result:=($vVar < 42) //False

```
