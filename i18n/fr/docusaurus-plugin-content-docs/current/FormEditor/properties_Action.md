---
id: action
title: Action
---

## Méthode

Référence d'une méthode associée au formulaire. Vous pouvez utiliser une méthode formulaire pour gérer les données et les objets, mais il est généralement plus simple et plus efficace d'utiliser une méthode objet dans ces cas de figure. Voir [Méthodes spécialisées](Concepts/methods.md#specialized-methods).

Vous n'appelez pas de méthode formulaire - 4D l'appelle automatiquement lorsqu'un événement implique le formulaire auquel la méthode est associée.

Plusieurs types de références de méthode sont pris en charge :

- a standard project method file path, i.e. that uses the following pattern:\
  `method.4dm`\
  This type of reference indicates that the method file is located at the default location ("sources/{TableForms/_numTable_} | {Forms}/_formName_/"). Dans ce cas, 4D gère automatiquement la méthode formulaire lorsque des opérations sont exécutées sur le formulaire (renommage, duplication, copier/coller, etc.)

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for form operations.

- a custom method file path including the .4dm extension, e.g.:\
  `MyMethods/myFormMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Forms/FormMethod.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                                                                    |
| ------ | --------------- | ------------------------------------------------------------------------------------ |
| method | text            | Chemin standard ou personnalisé de la méthode formulaire ou nom de la méthode projet |
