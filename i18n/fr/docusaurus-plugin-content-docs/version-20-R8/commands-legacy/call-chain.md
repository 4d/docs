---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->
<!--REF #_command_.Call chain.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Collection | &#8592; | Collection d'objets décrivant la chaîne d'appel d'une méthode dans un process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Call chain.Summary-->La commande **Call chain** retourne une collection d'objets décrivant chaque étape de la chaîne d'appel d'une méthode, dans le process courant.<!-- END REF--> Elle fournit les mêmes informations que celles qui sont affichées dans le débogeur. Elle a l'avantage de pouvoir être exécutée à partir de n'importe quel environnement 4D, y compris en mode compilé.

La commande facilite le débogage en permettant l'identification de la méthode qui est appelée, du composant qui l'a appelée et du numéro de ligne où l'appel a été effectué. Chaque objet de la collection retournée contient les propriétés suivantes :

| **Propriété** | **Type**    | **Description**                                                                                                                                                                                                                                                                                                                                                                                           | **Exemple**              |
| ------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| database      | texte       | Nom de la base de données appelant la méthode (pour distinguer les méthodes hôtes des méthodes composant)                                                                                                                                                                                                                                                                                                 | "database":"contactInfo" |
| line          | entier long | Numéro de ligne de l'appel à la méthode                                                                                                                                                                                                                                                                                                                                                                   | "line":6                 |
| name          | texte       | Nom de la méthode appelée                                                                                                                                                                                                                                                                                                                                                                                 | "name":"On Load"         |
| type          | texte       | Type de méthode : <br/>"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (si vous appelez une méthode projet à l'aide de *Attribut Exécuter sur serveur*.), "executeFormula" (si vous exécutez une formule via [PROCESS 4D TAGS](process-4d-tags.md) ou évaluez une formule dans un document 4D Write Pro.)</li<"formmethod",<> | "type":"formMethod"      |

**Note :** Afin que cette commande soit opérationnelle en mode compilé, le contrôle d'exécution ne doit pas être désactivé. Veuillez vous reporter au paragraphe *Contrôle d’exécution*.

#### Exemple 

Le code suivant retourne une collection d'objets contenant des informations sur la chaîne d'appel d'une méthode :

```4d
 var $currentCallChain : Collection
 $currentCallChain:=Call chain
```

Si une méthode projet est exécutée, la chaîne d'appel peut contenir (par exemple) :

```json
[   {    "type":"projectMethod",    "name":"detailForm",    "line":1,    "database":"myDatabase"   }]
```

Si une méthode formulaire est exécutée, la chaîne d'appel peut contenir (par exemple) :

```json
[   {    "type":"formObjectMethod",    "name":"detailForm.Button",    "line":1,    "database":"myDatabase"   },   {    "type":"formMethod",    "name”:"detailForm",    "line":2,    "database":"myDatabase"   },   {    "type":"projectMethod",    "name”:"showDetailForm",    "line":2,    "database":"myDatabase”   }]
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1662 |
| Thread safe | &check; |


