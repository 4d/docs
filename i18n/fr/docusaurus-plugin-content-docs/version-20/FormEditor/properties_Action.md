---
id: action
title: Action
---


## Méthode

Référence d'une méthode associée au formulaire. Vous pouvez utiliser une méthode formulaire pour gérer les données et les objets, mais il est généralement plus simple et plus efficace d'utiliser une méthode objet dans ces cas de figure. Voir [méthodes](../Concepts/methods.md).

Vous n'appelez pas de méthode formulaire - 4D l'appelle automatiquement lorsqu'un événement implique le formulaire auquel la méthode est associée.

Plusieurs types de références de méthode sont pris en charge :

- un chemin de fichier de méthode projet standard, c'est-à-dire qui utilise le modèle suivant :  
  `method.4dm`  
  Ce type de référence indique que le fichier de méthode se trouve à l'emplacement par défaut ("sources/{TableForms/*numTable*} | {Forms}/*formName*/"). Dans ce cas, 4D gère automatiquement la méthode formulaire lorsque des opérations sont exécutées sur le formulaire (renommage, duplication, copier/coller, etc.)

- un nom de méthode projet : nom d'une méthode projet existante sans extension de fichier, c'est-à-dire : `myMethod` Dans ce cas, 4D ne propose pas de prise en charge automatique des opérations de formulaire.

- un chemin de fichier de méthode personnalisé incluant l'extension .4dm, par exemple:  
  `MyMethods/myFormMethod.4dm` Vous pouvez également utiliser un filesystem :  
  `/RESOURCES/Forms/FormMethod.4dm` Dans ce cas, 4D ne fournit pas de support automatique pour les opérations d'objet.


#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                                                                    |
| ------ | --------------- | ------------------------------------------------------------------------------------ |
| method | text            | Chemin standard ou personnalisé de la méthode formulaire ou nom de la méthode projet |

