---
id: entityset
title: $entityset
---

After [creating an entity set]($method.md#methodentityset) by using `$method=entityset`, you can then use it subsequently.

## Syntaxe

| Syntaxe                                                                                                                                                                        | Exemple                                                                        | Description                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| [**$entityset/{entitySetID}**](#entitysetentitySetID)                                                                                                                          | `/People/$entityset/0ANUMBER`                                                  | Récupère un ensemble d'entités existant                                                      |
| [**$entityset/{entitySetID}?$operator...&$otherCollection**](#entitysetentitysetidoperatorothercollection) | `/Employee/$entityset/0ANUMBER?$logicOperator=AND &$otherCollection=C0ANUMBER` | Crée un nouvel ensemble d'entités à partir de la comparaison d'ensembles d'entités existants |

## $entityset/{entitySetID}

Retrieves an existing entity set (_e.g._, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)

### Description

Cette syntaxe vos permet d'exécuter toute opération sur un ensemble d'entités défini.

Because entity sets have a time limit on them (either by default or after calling `$timeout` with your own limit), you can call `$savedfilter` and `$savedorderby` to save the filter and order by statements when you create an entity set.

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: [`$expand`]($expand.md), [`$filter`]($filter.md), [`$orderby`]($orderby.md), [`$skip`]($skip.md), and [`$top/$limit`]($top_$limit.md).

### Exemple

Après avoir créé un ensemble d'entités, l'ID de l'ensemble d'entités est retourné avec les données. Vous appelez cet ID de la manière suivante :

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`

## $entityset/{entitySetID}?$operator...&$otherCollection

Créez un autre ensemble d'entités basé sur des ensembles d'entités préalablement créés

| Paramètres       | Type   | Description                                                           |
| ---------------- | ------ | --------------------------------------------------------------------- |
| $operator        | String | L'un des opérateurs logiques à tester avec l'autre ensemble d'entités |
| $otherCollection | String | ID de l'ensemble d'entités                                            |

### Description

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/{entitySetID}?$operator... &$otherCollection` syntax, the `$operator` property (whose values are shown below), and another entity set (entity set #2) defined by the `$otherCollection` property. Les deux ensembles d'entités doivent être dans la même dataclass.

You can then create another entity set containing the results from this call by using the `$method=entityset` at the end of the REST request.

Voici les opérateurs logiques :

| Opérateur | Description                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AND       | Retourne les entités communes aux deux ensembles d'entités                                                                                                                                             |
| OU        | Retourne les entités contenues dans les deux ensembles d'entités                                                                                                                                       |
| EXCEPT    | Retourne les entités de l'ensemble d'entités #1 moins celles de l'ensemble d'entités #2                                                                                                                |
| INTERSECT | Retourne true ou false s'il existe une intersection des entités dans les deux ensembles d'entités (ce qui signifie qu'au moins une entité est commune aux deux ensembles d'entités) |

> Les opérateurs logiques ne sont pas sensibles à la casse, vous pouvez donc écrire "AND" ou "and".

Vous trouverez ci-dessous une représentation des opérateurs logiques basés sur deux ensembles d'entités. La section rouge correspond à ce qui est retourné.

**AND**

![](../assets/en/REST/and.png)

**OR**

![](../assets/en/REST/or.png)

**EXCEPT**

![](../assets/en/REST/except.png)

La syntaxe est la suivante :

`GET  /rest/dataClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

### Exemple

Dans l'exemple ci-dessous, nous retournons les entités qui se trouvent dans les deux ensembles d'entités puisque nous utilisons l'opérateur logique AND :

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

Si nous souhaitons savoir si les deux ensembles d'entités se croisent, nous pouvons écrire ce qui suit :

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

S'il existe une intersection, cette requête retourne true. Sinon, elle retourne false.

Dans l'exemple suivant, nous créons un nouvel ensemble d'entités qui combine toutes les entités des deux ensembles d'entités :

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
