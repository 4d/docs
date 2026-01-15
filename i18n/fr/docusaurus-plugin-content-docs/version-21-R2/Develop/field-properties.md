---
id: field-properties
title: Propriétés des champs
---

Pour les autres propriétés des champs, veuillez vous référer à [doc.4d.com](https://doc.4d.com/4Dv21/4D/21/Field-properties.300-7676763.en.html).

## Class

![](../assets/en/Develop/inspector-class.png)

Cette propriété est disponible pour les champs de type **Objet** (dans les projets 4D uniquement). Elle vous permet de définir un **champ de type classe d'objet**, ce qui améliore la complétion de code, la vérification syntaxique et la validation d'exécution lors de la saisie de code impliquant des champs objet.

Vous pouvez saisir n'importe quel nom de classe valide dans cette propriété, y compris :

- des classes utilisateurs (par exemple `cs.MyClass`)
- des classes 4D intégrées (par exemple `4D.File`, `4D.Folder`)
- des classes [exposées](../Extensions/develop-components.md#sharing-of-classes) définies par les composants (par exemple `cs.MyComponent.MyClass`)

Si vous saisissez un nom de classe non valide, la saisie est rejetée.

:::note

Les **classes non *streamables*** telles que les [classes du modèle de données ORDA](../ORDA/ordaClasses.md), la classe [FileHandle](../API/FileHandleClass.md), [WebServer](../API/WebServerClass.md)... ne peuvent pas être associées à des champs objets.

:::

Dans votre code, lors de l'affectation d'une valeur à un champ de type classe d'objet, 4D vérifie qu'elle appartient à la classe déclarée. Si ce n'est pas le cas ou si l'objet n'a pas de classe, une erreur est déclenchée. L'accès à des attributs inconnus entraîne également des erreurs de syntaxe.

Pour récupérer le nom de la classe associée lors de l'exécution, utilisez la propriété [`classID`](../API/DataClassClass.md#attributename), par exemple `ds.MyTable.MyField.classID`.

### Voir également

- [Article de blog : Un typage plus strict des objets basé sur les classes](https://blog.4d.com/stricter-class-based-typing-for-objects/)


