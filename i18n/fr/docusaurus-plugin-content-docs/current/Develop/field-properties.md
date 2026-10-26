---
id: structure-fields
title: Fields
---

<!-- INCLUDE my.section.id.Desc -->

### Class

![](../assets/en/Develop/inspector-class.png)

Cette propriété est disponible pour les champs de type **Objet** (dans les projets 4D uniquement). Elle vous permet de définir un **champ de type classe d'objet**, ce qui améliore la complétion de code, la vérification syntaxique et la validation d'exécution lors de la saisie de code impliquant des champs objet.

Vous pouvez saisir n'importe quel nom de classe valide dans cette propriété, y compris :

- des classes utilisateurs (par exemple `cs.MyClass`)
- des classes 4D intégrées (par exemple `4D.File`, `4D.Folder`)
- des classes [exposées](../Extensions/develop-components.md#sharing-of-classes) définies par les composants (par exemple `cs.MyComponent.MyClass`)

Si vous saisissez un nom de classe non valide, la saisie est rejetée.

:::note

Les [**classes non sérialisables**](../Concepts/dt_object.md#streaming-support) telles que les [classes du modèle de données ORDA](../ORDA/ordaClasses.md), la classe [FileHandle](../API/FileHandleClass.md), [WebServer](../API/WebServerClass.md)... ne peuvent pas être associées à des champs objets.

:::

Dans votre code, lors de l'affectation d'une valeur à un champ de type classe d'objet, 4D vérifie qu'elle appartient à la classe déclarée. Si ce n'est pas le cas ou si l'objet n'a pas de classe, une erreur est déclenchée. L'accès à des attributs inconnus entraîne également des erreurs de syntaxe.

Pour récupérer le nom de la classe associée lors de l'exécution, utilisez la propriété [`classID`](../API/DataClassClass.md#attributename), par exemple `ds.MyTable.MyField.classID`.

:::tip Article(s) de blog sur le sujet

[Stricter class-based typing for objects](https://blog.4d.com/stricter-class-based-typing-for-objects/)

:::

### `4D.Vector` class

If you assign `4D.Vector` as the class of an Object type field, you define a **vector field**. Such fields store embessings and can be used to query data using AI features. See the [`4D.Vector` class](../API/VectorClass.md) documentation to see how to query with vectors.

Note that the [**4D Embedding Studio** component](corner.4d.com/component/4d-embedding-studio) can help you configuring and updating your 4D.Vector fields.

When you assign `4D.Vector` as the class of an Object type field, a specific icon is displayed as field type in the Structure editor: ![](../assets/en/Develop/ai-icon.png)

:::tip Article(s) de blog sur le sujet

[Vector Indexing in 4D: Faster Similarity Search for 4D.Vector Fields](https://blog.4d.com/vector-indexing-in-4d-faster-similarity-search-for-4d-vector-fields)

:::

