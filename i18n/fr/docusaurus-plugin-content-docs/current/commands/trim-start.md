---
id: trim-start
title: Trim start
displayed_sidebar: docs
---

<!--REF #_command_.Trim start.Syntax-->**Trim start** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim start.Params-->

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

La commande **Trim start** <!--REF #_command_.Trim start.Summary--> supprime les **whitespace** au début du paramètre *aString* et renvoie une nouvelle chaîne, sans modifier la chaîne d'origine.<!-- END REF--> Les **whitespace** incluent les espaces, tabulations, LF, CR, etc.

Pour retourner une nouvelle chaîne avec les whitespace supprimés aux deux extrémités, utilisez [`Trim`](./trim.md). Pour retourner une nouvelle chaîne avec les whitespace supprimés à la fin de *aString*, utilisez [`Trim end`](./trim-end.md).

Dans le paramètre *aString*, vous pouvez passer n'importe quelle expression de type texte. Elle ne sera pas touchée par la commande.

La commande renvoie la version tronquée de la chaîne *aString*. S'il n'y a pas de whitespace au début de *aString*, la chaîne retournée est identique à celle passée en paramètre.

:::note

Cette commande est basée sur la [spécification Ecmascript `trimStart`](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimstart).

:::

## Exemple

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim start($input) //"Hello World!    "
```

## Voir également

[Trim](./trim.md)  
[Trim end](./trim-end.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1854                        |
| Thread safe        | yes |


