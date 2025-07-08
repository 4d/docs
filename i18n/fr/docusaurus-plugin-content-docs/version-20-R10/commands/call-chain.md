---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->

<!--REF #_command_.Call chain.Params-->

| Paramètres | Type       |                             | Description                                                           |
| ---------- | ---------- | --------------------------- | --------------------------------------------------------------------- |
| Résultat   | Collection | &#8592; | Collection d'objets décrivant la chaîne d'appels au sein d'un process |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                             |
| ------- | ----------------------------------------- |
| 20 R9   | Prise en charge de la propriété `formula` |

</details>

## Description

<!--REF #_command_.Call chain.Summary-->La commande **Call chain** renvoie une collection d'objets décrivant chaque maillon de la chaîne d'appels des méthodes dans le process courant.<!-- END REF--> Elle fournit les mêmes informations que la fenêtre du débogueur. Elle présente l'avantage supplémentaire de pouvoir être exécutée à partir de n'importe quel environnement 4D, y compris en mode compilé.

Cette commande facilite le débogage en permettant d'identifier la méthode ou la formule appelée, le composant qui l'a appelée et le numéro de ligne d'où l'appel a été effectué. Chaque objet de la collection retournée contient les propriétés suivantes :

| **Propriété** | **Type**                                  | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Example**                              |
| ------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| database      | Text                                      | Nom de la base de données appelant la méthode (pour distinguer les méthodes de l'hôte et les méthodes des composants)                                                                                                                                                                                                                                                                                                                                                                                                           | "database":"contactInfo" |
| formula       | Texte (le cas échéant) | Contenu de la ligne de code courante au niveau courant de la chaîne d'appel (texte brut). Correspond au contenu de la ligne référencée par la propriété `line` dans le fichier source indiqué par la méthode. Si le code source n'est pas disponible, la propriété `formula` est omise (Undefined).                                                                                                                                                          | "var $stack:=Call chain" |
| line          | Integer                                   | Numéro de ligne de l'appel à la méthode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | "line":6                 |
| name          | Text                                      | Nom de la méthode appelée                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | "name":"On Load"         |
| type          | Text                                      | Type de la méthode : <li>"projectMethod"</li><li>"formObjectMethod"</li><li>"formmethod"</li><li>"databaseMethod"</li><li>"triggerMethod"</li><li>"executeOnServer" (lors de l'appel d'une méthode projet avec l'attribut *Exécuter sur serveur*)</li><li>"executeFormula" (lors de l'exécution d'une formule via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) ou de l'évaluation d'une formule dans un document 4D Write Pro)</li><li>"classFunction"</li><li>"formMethod"</li> | "type":"formMethod"      |

:::note

Pour que cette commande puisse fonctionner en mode compilé, le [Range checking] (../Project/compiler.md#range-checking) ne doit pas être désactivé.

:::

## Exemple

Le code suivant renvoie une collection d'objets contenant des informations sur la chaîne d'appels de méthodes :

```4d
var $currentCallChain : Collection
$currentCallChain:=Call chain
```

Si une méthode projet est exécutée, la chaîne d'appels peut contenir (par exemple) :

```json
[
    {
        "type":"projectMethod",
        "name":"detailForm",
        "line":1,
        "database":"myDatabase"
    }
]
```

Si une méthode objet de formulaire est exécutée, la chaîne d'appels peut contenir (par exemple) :

```json
[
    {
        "type":"formObjectMethod",
        "name":"detailForm.Button",
        "line":1,
        "database":"myDatabase"
    },
    {
        "type":"formMethod",
        "name":"detailForm",
        "line":2,
        "database":"myDatabase"
    },
    {
        "type":"projectMethod",
        "name":"showDetailForm",
        "line":2,
        "database":"myDatabase"
    }
]
```

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1662                        |
| Thread safe        | &check; |


