---
id: trim-end
title: Trim end
displayed_sidebar: docs
---

<!--REF #_command_.Trim end.Syntax-->**Trim end** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim end.Params-->

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

La commande **Trim end** <!--REF #_command_.Trim end.Summary--> supprime les **whitespace** à la fin du paramètre *aString* et renvoie une nouvelle chaîne, sans modifier la chaîne d'origine.<!-- END REF--> Les **whitespace** incluent les espaces, tabulations, LF, CR, etc.

Pour retourner une nouvelle chaîne avec les whitespace supprimés aux deux extrémités, utilisez [`Trim`](./trim.md). Pour retourner une nouvelle chaîne avec les whitespace supprimés au début de *aString*, utilisez [`Trim start`](./trim-start.md).

Dans le paramètre *aString*, vous pouvez passer n'importe quelle expression de type texte. Elle ne sera pas touchée par la commande.

La commande renvoie la version tronquée de la chaîne *aString*. S'il n'y a pas de whitespace à la fin de *aString*, la chaîne retournée est identique à celle passée en paramètre.

:::note

Cette commande est basée sur la [spécification Ecmascript `trimEnd`](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimend).

:::

## Exemple

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim end($input) //"     Hello World!"
```

## Voir également

[Trim](./trim.md)  
[Trim start](./trim-start.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1855                        |
| Thread safe        | yes |


