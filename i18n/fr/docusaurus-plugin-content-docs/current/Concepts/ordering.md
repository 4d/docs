---
id: ordering
title: Tri des collections et des objets
---

Pour trier une série de données, 4D compare chaque valeur les unes aux autres en appliquant des critères de comparaison en fonction du type de données (voir [règles de tri](#sorting-rules)). Ce processus repose sur un algorithme de tri qui établit un ordre total entre tous les éléments. Lorsque toutes les données sont du même [type](./data-types.md), les règles de comparaison sont simples et bien définies.

Cependant, les [collections](./dt_collection.md) et les [objets](./dt_object.md), y compris les [entity selections](../ORDA/dsMapping.md#entity-selection), peuvent contenir des éléments et des attributs de types hétérogènes : types scalaires (texte, nombres, booléens, dates) ou types complexes (objets, blobs, collections). Pour ordonner une collection ou un objet contenant des valeurs hétérogènes, 4D applique un schéma de tri stratifié qui partitionne d'abord les éléments par type, puis applique des règles de comparaison à l'intérieur de chaque partition de type.

## Fonctions de tri

Le langage 4D propose plusieurs mécanismes qui s'appuient sur le tri d'éléments de collection, d'attributs d'objets ou sur le tri orchestré pour produire un résultat ordonné :

- **Fonctions de tri des collections** : [`collection.multiSort()`](../API/CollectionClass.md#multisort) (tri multicritères avec spécification explicite de la clé et de l'ordre), [`collection.orderBy()`](../API/CollectionClass.md#orderby) (tri par évaluation d'une expression sur chaque élément), [`collection.sort()`](../API/CollectionClass.md#sort) (tri direct en fonction de la relation d'ordre naturelle),
- **Fonctions de tri d'entity selections** : [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby), qui applique les mêmes règles de tri que les collections,
- **Fonctions de recherche avec tri** : [`entitySelection.query()`](../API/EntitySelectionClass.md#query), [`dataClass.query()`](../API/DataClassClass.md#query) avec le mot-clé `order by attributePath`, qui renvoient les résultats dans un ordre déterministe,
- **Fonctions statistiques dépendantes du tri** : [`collection.max()`](../API/CollectionClass.md#max), [`collection.min()`](../API/CollectionClass.md#min), [`entitySelection.max()`](../API/EntitySelectionClass.md#max), [`entitySelection.min()`](../API/EntitySelectionClass.md#min), qui s'appuient sur la relation d'ordre pour identifier les extrêmes,
- Commande [**`ORDER BY ATTRIBUTE`**](../commands/order-by-attribute) pour trier une table de base de données en fonction d'un champ objet.

## Règles de tri

Lorsqu'une collection ou une sélection d'entités contenant des éléments de différents types est triée, une **stratification par type** est appliquée selon l'algorithme suivant :

1. **Phase de partitionnement** : Les éléments sont regroupés en classes d'équivalence en fonction de leur type de base. Cette phase établit une partition de l'ensemble des éléments.
2. **Phase de classement intra-classe** : Au sein de chaque classe, les éléments sont triés selon des règles de comparaison spécifiques au type. L'ordre par défaut est **croissant**.

Les types sont classés selon la séquence suivante, avec leurs relations de comparaison respectives dans l'ordre croissant :

| Rang | Type           | Inclut également                                                                                                      | Règle de comparaison                                                                                                                                       |
| ---- | -------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **null**       | pointeurs (pointeurs nuls uniquement pour les collections)                                         | aucun critère de comparaison applicable                                                                                                                    |
| 2    | **boolean**    |                                                                                                                       | ordre logique : faux *avant* vrai                                                                                                          |
| 3    | **string**     |                                                                                                                       | ordre lexicographique (par exemple, "a" *avant* "ab" *avant* "b")                                                                       |
| 4    | **number**     | heure (convertie en millisecondes ou en secondes selon le paramètre de base `Time inside objects`) | ordre algébrique standard (comparaison numérique)                                                                                       |
| 5    | **object**     | blobs, images, pointeurs non nuls (collections)                                                    | ordre interne (cohérent pour les fonctions de collection, voir ci-dessous)                                                              |
| 6    | **collection** |                                                                                                                       | ordre interne (cohérent pour les fonctions de collection, voir ci-dessous)                                                              |
| 7    | **date**       |                                                                                                                       | ordre chronologique (les dates les plus anciennes *avant* les dates les plus récentes, par exemple, !1990-01-01 ! *avant* !2000-01-01!) |

### Valeurs numériques spéciales

Les valeurs spéciales en virgule flottante `+INF` (infini positif), `-INF` (infini négatif) et `NaN` (Not-a-Number) présentes dans les collections et les objets sont triées selon la séquence naturelle suivante : **NaN < -INF < valeurs finies < +INF**.

### Ordre cohérent dans les collections

Les fonctions de tri des collections (voir la section [Fonctions de tri](#ordering-functions) ci-dessus) mettent en œuvre un **tri cohérent** pour les types complexes tels que les objets et les collections. Par "cohérent", nous entendons que des appels successifs à la même fonction de tri (par exemple, `collection.orderBy()`) sur la même collection produisent un ordre identique pour les valeurs de type complexe. Formellement, si une expression de tri donne le même résultat comparatif pour deux éléments, l'ordre relatif de ces éléments est préservé.

Les autres opérations de tri 4D n'offrent pas cette garantie de stabilité lors de la comparaison de types complexes.
