---
id: null-undefined
title: Null e indefinido
---

## Null

Null é um tipo de dados especial com um único valor possível: **null**. Este valor é devolvido por uma expressão que não contém nenhum valor.

Na linguagem 4D e para os atributos dos campos dos objetos, os valores nulos são gerenciados através da função `Null`. Esta função pode ser usada com as expressões abaixo para definir ou comparar o valor nulo:

- atributos de objetos
- elementos da coleção
- variáveis do objecto, colecção, ponteiro, imagem, ou tipo de variante.

## Indefinido

Indefinido não é realmente um tipo de dados. Denota uma variável que ainda não foi definida. Uma função (um método projeto que devolve um resultado) pode devolver um valor indefinido se, dentro do método, se atribuir ao resultado da função ($0) uma expressão indefinida (uma expressão calculada com ao menos uma variável indefinida). Um campo não pode ser indefinido (o comando `Undefined` sempre devolve False para um campo). Uma variável variant tem **indefinido** como valor por definição.

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
