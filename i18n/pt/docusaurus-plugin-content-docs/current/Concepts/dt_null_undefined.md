---
id: null-undefined
title: Null e indefinido
---

Nulo e Indefinido são tipos de dados que tratam de casos em que o valor de uma expressão não é conhecido.

## Null

Null é um tipo de dados especial com um único valor possível: **null**. Este valor é devolvido por uma expressão que não contém nenhum valor.

Na linguagem 4D e para os atributos dos campos dos objetos, os valores nulos são gerenciados através da função `Null`. Esta função pode ser usada com as expressões abaixo para definir ou comparar o valor nulo:

- atributos de objetos
- elementos da coleção
- variáveis do objecto, colecção, ponteiro, imagem, ou tipo de variante.

## Indefinido

Indefinido não é realmente um tipo de dados. Denota uma variável que ainda não foi definida. Uma função (um método projeto que devolve um resultado) pode devolver um valor indefinido se, dentro do método, se atribuir ao resultado da função ($0) uma expressão indefinida (uma expressão calculada com ao menos uma variável indefinida). Um campo não pode ser indefinido (o comando `Undefined` sempre devolve False para um campo). Uma variável variant tem **indefinido** como valor por definição.


## Operadores Null


| Operação     | Sintaxe                  | Retorna  | Expression                     | Value |
| ------------ | ------------------------ | -------- | ------------------------------ | ----- |
| Igual        | Null `=` Null            | Booleano | a.nullProp `=` b.nullProp      | True  |
|              | Null `=` Undefined       | Booleano | a.nullProp `=` b.undefinedProp | True  |
|              | Null `=` *valor escalar* | Booleano | a.nullProp `=` 42              | False |
| Desigualdade | Null `#` Null            | Booleano | a.nullProp `#` b.nullProp      | False |
|              | Null `#` Undefined       | Booleano | a.nullProp `#` b.undefinedProp | False |
|              | Null `#` *valor escalar* | Booleano | a.nullProp `#` 42              | True  |

*scalar values* are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. Other types (Pointer, Picture, Object, Collection) have undefined or null default value. Ex:

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


| Operação             | Sintaxe                                               | Retorna  | Expression                          | Value |
| -------------------- | ----------------------------------------------------- | -------- | ----------------------------------- | ----- |
| Igual                | Undefined `=` Undefined                               | Booleano | a.undefinedProp `=` b.undefinedProp | True  |
|                      | Undefined `=` Null                                    | Booleano | a.undefinedProp `=` c.nullProp      | True  |
|                      | Undefined `=` *outros valores*                        | Booleano | a.undefinedProp `=` 42              | False |
| Desigualdade         | Undefined `#` Undefined                               | Booleano | a.undefinedProp `#` b.undefinedProp | False |
|                      | Undefined `#` Null                                    | Booleano | a.undefinedProp `#` b.nullProp      | False |
|                      | Undefined `#` *outros valores*                        | Booleano | a.undefinedProp `#` 42              | True  |
| Maior que            | Undefined `>` string, Date, Time, Boolean, number  | Booleano | a.undefinedProp `>` "abc"        | False |
| Menor que            | Undefined `<` string, Date, Time, Boolean, number  | Booleano | a.undefinedProp `<` "abc"        | False |
| Maior ou igual a     | Undefined `>=` string, Date, Time, Boolean, number | Booleano | a.undefinedProp `>=` "abc"       | False |
| Menor que ou igual a | Undefined `<=` string, Date, Time, Boolean, number | Booleano | a.undefinedProp `<=` "abc"       | False |

*outros valores* são expressões de qualquer tipo com um valor nem Indefinido nem Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Exemplos

Aquí estão os diferentes resultados do comando `Undefined` assim como do comando `Null` com as propriedades dos objetos, dependendo do contexto:

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

Examples of comparison results with undefined and null values:

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

