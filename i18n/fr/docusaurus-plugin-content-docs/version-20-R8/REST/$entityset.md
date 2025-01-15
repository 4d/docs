---
id: entityset
title: $entityset
---

Après avoir [créé un entity set]($method.md#methodentityset) à l'aide de `$method=entityset`, vous pouvez le réutiliser ultérieurement.

## Syntaxe

| Syntaxe                                                                                                                                                                                      | Exemple                                                                      | Description                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [**$entityset/\{entitySetID\}**](#entitysetentitySetID)                                                                                                                                    | `/People/$entityset/0ANUMBER`                                                | Récupère un entity set existant                                              |
| [**$entityset/\{entitySetID\}?$logicOperator...&$otherCollection**](#entitysetentitysetidlogicoperatorothercollection) | `/Employee/$entityset/0ANUMBER?$logicOperator=AND&$otherCollection=0ANUMBER` | Crée un nouvel entity set à partir de la comparaison d'entity sets existants |

## $entityset/\{entitySetID\}

Récupère un entity set existant (_e.g._, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)

### Description

Cette syntaxe vos permet d'exécuter toute opération sur un entity set défini.

Étant donné que les entity sets ont une durée de vie limitée (par défaut ou bien après avoir appelé `$timeout` pour définir la limite souhaitée), vous pouvez appeler `$savedfilter` et `$savedorderby` pour sauvegarder la définition du filtre et des instructions order by lorsque vous créez un entity set.

Lorsque vous récupérez un entity set existant stocké dans le cache de 4D Server, vous pouvez également appliquer l'une des commandes suivantes à l'entity set : [`$clean`]($clean.md), [`$expand`]($expand.md), [`$filter`]($filter.md), [`$orderby`]($orderby.md), [`$skip`]($skip.md), ou [`$top/$limit`]($top_$limit.md).

### Exemple

Après que vous ayez créé un entity set, l'ID de l'entity set est retourné avec les données. Vous appelez cet ID de la manière suivante :

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`

## $entityset/\{entitySetID\}?$logicOperator...&$otherCollection

Crée un autre entity set basé sur des entity sets préalablement créés

| Paramètres       | Type | Description                                                   |
| ---------------- | ---- | ------------------------------------------------------------- |
| $logicOperator   | Text | L'un des opérateurs logiques à tester avec l'autre entity set |
| $otherCollection | Text | ID de l'entity set                                            |

### Description

Après avoir créé un entity set (entity set #1) en utilisant `$method=entityset`, vous pouvez ensuite créer un autre entity set en utilisant la syntaxe `$entityset/\{entitySetID\}?$logicOperator... &$otherCollection`, la propriété `$logicOperator` (dont les valeurs sont indiquées ci-dessous), et un autre entity set (entity set #2) défini par la propriété `$otherCollection`. Les deux entity sets doivent être dans la même dataclass.

Vous pouvez ensuite créer un autre entity set contenant les résultats de cet appel en utilisant le `$method=entityset` à la fin de la requête REST.

Voici les opérateurs logiques :

| Opérateur | Description                                                                                                                                                                            |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AND       | Retourne les entités communes aux deux entity sets                                                                                                                                     |
| OU        | Retourne les entités contenues dans les deux entity sets                                                                                                                               |
| EXCEPT    | Retourne les entités de l'entity set #1 moins celles de l'entity set #2                                                                                                                |
| INTERSECT | Retourne true ou false s'il existe une intersection des entités dans les deux entity sets (ce qui signifie qu'au moins une entité est commune aux deux entity sets) |

> Les opérateurs logiques ne sont pas sensibles à la casse, vous pouvez donc écrire "AND" ou "and".

Vous trouverez ci-dessous une représentation des opérateurs logiques basés sur deux entity sets. La section rouge correspond à ce qui est retourné.

**AND**

![](../assets/en/REST/and.png)

**OR**

![](../assets/en/REST/or.png)

**EXCEPT**

![](../assets/en/REST/except.png)

La syntaxe est la suivante :

`GET  /rest/dataClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

### Exemple

Dans l'exemple ci-dessous, nous retournons les entités qui se trouvent dans les deux entity sets puisque nous utilisons l'opérateur logique AND :

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

Si nous souhaitons savoir si les deux entity sets se croisent, nous pouvons écrire ce qui suit :

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

S'il existe une intersection, cette requête retourne true. Sinon, elle retourne false.

Dans l'exemple suivant, nous créons un nouvel entity set qui combine toutes les entités des deux entity sets :

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
