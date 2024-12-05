---
id: entityset
title: $entityset
---

Después de [crear un conjunto de entidades]($method.md#methodentityset) mediante el uso de `$method=entityset`, puede utilizarlo posteriormente.

## Sintaxe disponível

| Sintaxe                                                                                                                                                                                      | Exemplo                                                                      | Descrição                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [**$entityset/\{entitySetID\}**](#entitysetentitySetID)                                                                                                                                    | `/People/$entityset/0ANUMBER`                                                | Recupera um conjunto de entidades existente                                                    |
| [**$entityset/\{entitySetID\}?$logicOperator...&$otherCollection**](#entitysetentitysetidlogicoperatorothercollection) | `/Employee/$entityset/0ANUMBER?$logicOperator=AND&$otherCollection=0ANUMBER` | Cria um novo conjunto de entidades a partir da comparação de conjuntos de entidades existentes |

## $entityset/\{entitySetID\}

Recupera un conjunto de entidades existente (*p. ej.*, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)

### Descrição

Esta sintaxe permite-lhe executar qualquer operação num conjunto de entidades definido.

Como los conjuntos de entidades tienen un límite de tiempo (ya sea por defecto o después de llamar a `$timeout` con su propio límite), puede llamar a `$savedfilter` y a `$savedorderby` para guardar el filtro y ordenar por instrucciones cuando cree un conj

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: [`$clean`]($clean.md), [`$expand`]($expand.md), [`$filter`]($filter.md), [`$orderby`]($orderby.md), [`$skip`]($skip.md), or [`$top/$limit`]($top_$limit.md).

### Exemplo

Após criar um conjunto de entidades, o ID do conjunto de entidades é devolvido com os dados. Este ID é chamado da seguinte forma:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`

## $entityset/\{entitySetID\}?$logicOperator...&$otherCollection

Criar outro conjunto de entidades com base em conjuntos de entidades criados anteriormente

| Parâmetro        | Tipo | Descrição                                                            |
| ---------------- | ---- | -------------------------------------------------------------------- |
| $logicOperator   | Text | Um dos operadores lógicos a testar com o outro conjunto de entidades |
| $otherCollection | Text | ID do conjunto de entidades                                          |

### Descrição

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/\{entitySetID\}?$logicOperator... &$otherCollection` syntax, the `$logicOperator` property (whose values are shown below), and another entity set (entity set #2) defined by the `$otherCollection` property. Os dois conjuntos de entidades devem estar na mesma classe de dados.

A continuación, puede crear otro conjunto de entidades que contenga los resultados de esta llamada utilizando el `$method=entityset` al final de la petición REST.

Eis os operadores lógicos:

| Operador  | Descrição                                                                                                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AND       | Devolve as entidades em comum a ambos os conjuntos de entidades                                                                                                                                               |
| OU        | Devolve as entidades em ambos os conjuntos de entidades                                                                                                                                                       |
| EXCEPT    | Devolve as entidades do conjunto de entidades #1 menos as do conjunto de entidades #2                                                                                                                         |
| INTERSECT | Devolve true ou false se existir uma intersecção das entidades em ambos os conjuntos de entidades (o que significa que pelo menos uma entidade é comum em ambos os conjuntos de entidades) |

> Os operadores lógicos não fazem distinção entre maiúsculas e minúsculas, pelo que pode escrever "AND" ou "and".

Segue-se uma representação dos operadores lógicos com base em dois conjuntos de entidades. A secção vermelha é o que é devolvido.

**AND**

![](../assets/en/REST/and.png)

**OR**

![](../assets/en/REST/or.png)

**EXCEPT**

![](../assets/en/REST/except.png)

A sintaxe é a seguinte:

`GET  /rest/dataClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

### Exemplo

No exemplo abaixo, devolvemos as entidades que estão em ambos os conjuntos de entidades, dado que utilizamos o operador lógico AND:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

Se quisermos saber se os dois conjuntos de entidades se intersectam, podemos escrever o seguinte:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

Se houver uma intersecção, esta consulta devolve true. .

No exemplo seguinte, criamos um conjunto de entidades que combina todas as entidades de ambos os conjuntos de entidades:

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
