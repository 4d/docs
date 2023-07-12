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


| Operação             | Sintaxe                                               | Retorna    | Expression                          | Valor |
| -------------------- | ----------------------------------------------------- | ---------- | ----------------------------------- | ----- |
| Igual                | Undefined `=` Undefined                               | Parâmetros | a.undefinedProp `=` b.undefinedProp | True  |
|                      | Undefined `=` Null                                    | Parâmetros | a.undefinedProp `=` c.nullProp      | True  |
|                      | Undefined `=` *outros valores*                        | Parâmetros | a.undefinedProp `=` 42              | False |
| Desigualdade         | Undefined `#` Undefined                               | Parâmetros | a.undefinedProp `#` b.undefinedProp | False |
|                      | Undefined `#` Null                                    | Parâmetros | a.undefinedProp `#` b.nullProp      | False |
|                      | Undefined `#` *outros valores*                        | Parâmetros | a.undefinedProp `#` 42              | True  |
| Maior que            | Undefined `>` string, Date, Time, Boolean, number  | Parâmetros | a.undefinedProp `>` "abc"        | False |
| Menor que            | Undefined `<` string, Date, Time, Boolean, number  | Parâmetros | a.undefinedProp `<` "abc"        | False |
| Maior ou igual a     | Undefined `>=` string, Date, Time, Boolean, number | Parâmetros | a.undefinedProp `>=` "abc"       | False |
| Menor que ou igual a | Undefined `<=` string, Date, Time, Boolean, number | Parâmetros | a.undefinedProp `<=` "abc"       | False |

*outros valores* são expressões de qualquer tipo com um valor nem Indefinido nem Null.

:::info

Comparações de valores Indefinidos com Pontos, Imagem, Blob, Objecto, Colecção, Valores Indefinidos ou Nulos utilizando valores Maiores que (`>`), Menos que (`<`), Maiores ou iguais a (`>=`), e Menos ou iguais a (`<=`) os operadores não são suportados e devolvem um erro.

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

