---
id: trim
title: Trim
displayed_sidebar: docs
---

<!--REF #_command_.Trim.Syntax-->**Trim** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim.Params-->

| Paramètres | Type |                             | Description      |
| ---------- | ---- | --------------------------- | ---------------- |
| aString    | Text | &#8594; | Texte à tronquer |
| Résultat   | Text | &#8592; | Texte tronqué    |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21      | Ajout         |

</details>

## Description

La commande **Trim** <!--REF #_command_.Trim.Summary--> supprime les **whitespace** aux deux extrémités du paramètre *aString* et renvoie une nouvelle chaîne, sans modifier la chaîne d'origine.<!-- END REF--> Les **whitespace** incluent les espaces, tabulations, LF, CR, etc.

Pour retourner une nouvelle chaîne dont les whitespace ont été supprimés à une seule extrémité, utilisez [`Trim start`](./trim-start.md) ou [`Trim end`](./trim-end.md).

Dans le paramètre *aString*, vous pouvez passer n'importe quelle expression de type texte. Elle ne sera pas touchée par la commande.

La commande renvoie la version tronquée de la chaîne *aString*. S'il n'y a de whitespace à aucune extréminté de *aString*, la chaîne retournée est identique à celle passée en paramètre.

:::note

Cette commande est basée sur la [spécification Ecmascript `TrimString`](https://tc39.es/ecma262/multipage/text-processing.html#sec-trimstring).

:::

## Exemple

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim($input) //"Hello World!"
```

## Voir également

[Trim start](./trim-start.md)\
[Trim end](./trim-end.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1853                        |
| Thread safe        | &check; |


