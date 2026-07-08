---
id: methods
title: Méthodes
---

Une méthode est essentiellement un morceau de code qui exécute une ou plusieurs action(s). Une méthode est composée d'instructions.

Une instruction exécute une action, et peut être simple ou complexe. Chaque instruction tient généralement sur une ligne dans la méthode (si nécessaire, elle peut toutefois être [scindée à l'aide du caractère `\`](quick-tour.md#code-sur-plusieurs-lignes)).

La taille maximale d'une méthode est limitée à 2 Go de texte ou à 32 000 lignes de code.

## Types de méthodes

Dans le langage 4D, il existe plusieurs catégories de méthodes. La catégorie dépend de la façon dont on peut les appeler :

| Type                                                | Contexte d'appel                                                                                                                                                                                                                                                      | Accepte des paramètres                       | Description                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Méthode projet**                                  | À la demande, lorsque le nom de la méthode du projet [est appelé](../Project/project-method-properties.md)                                                                                                                                                            | Oui                                          | Peut contenir du code pour exécuter des actions personnalisées. Une fois que votre méthode projet est créée, elle devient partie intégrante du langage du projet.                                                                                                                        |
| **Méthode objet (widget)**       | Automatique, lorsqu'un événement implique l'objet auquel la méthode est associée                                                                                                                                                                                      | Non                                          | Propriété d'un objet formulaire (également appelé widget)                                                                                                                                                                                                                                             |
| **Méthode formulaire**                              | Automatique, lorsqu'un événement implique le formulaire auquel la méthode est associée                                                                                                                                                                                | Non                                          | Propriété d'un formulaire. Vous pouvez utiliser une méthode formulaire pour gérer les données et les objets, mais il est généralement plus simple et plus efficace d'utiliser une méthode objet dans ces cas de figure.                                                                  |
| **Trigger** (ou *méthode table*) | Automatique, chaque fois que vous manipulez les enregistrements d'une table (Ajouter, Supprimer, Modifier)                                                                                                                                         | Non                                          | Propriété d'une table. Les triggers sont des méthodes qui permettent d'éviter les opérations "illégales" sur les enregistrements de votre base de données.                                                                                                                               |
| **Méthode base**                                    | Automatique, lorsqu'un événement se produit sur la session de travail                                                                                                                                                                                                 | Oui (prédéfini)           | Il existe 16 méthodes base dans 4D.                                                                                                                                                                                                                                                                      |
| **Classe**                                          | Appelée automatiquement lorsqu'un objet de la classe est instancié ou lorsqu'une fonction de la classe est exécutée sur une instance d'objet dans toute autre méthode ou dans un [champ de la base de données](../Develop/field-properties.md#class). | oui (fonctions de classe) | Une **Classe** est utilisée pour déclarer et configurer un [constructeur](./classes.md#class-constructor), des [propriétés](./classes.md#property) et des [fonctions](./classes.md#function) d'objets. Voir [**Classes**](classes.md) et [classe **Function**](../API/FunctionClass.md). |

## Language tokens

4D's language includes a unique tokenization system for constants, commands, tables, fields and keywords names that are used in the code. Tokenizing these names means that as you type in the code editor they are stored internally as absolute references (numbers) and then restored as text during execution or display depending on the context. This allows you to guarantee that the code will always be interpreted correctly, even if you rename your tables or fields, or when 4D language commands are renamed over the course of different application versions.

**Note:** This also ensures automatic translation of the code when you have enabled the ["Use regional system settings" preference](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) and open your databases with 4D versions in different languages.

Tokenisation is completely transparent for 4D developers when working in the [4D code editor](../code-editor/write-class-method.md), and you generally won't need to worry about it. However, there are two cases where you might need to take action regarding tokenization: if you want to disable it, and if you want to use tokenization in your formulas.

### Disabling tokenization

When your project is stored on a version control system (VCS) such as GitHub or GitLab, you may want to disable tokenization to make the code more readable on the external platform. To do this, you can deselect the [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) preference to prevent tokens from being stored in your **new projects**.

You can configure your **existing projects** to save code without tokens by inserting the following key in the `<applicationName>.4DProject` file using a text editor:

```json
"tokenizedText" : false
```

Ce paramètre n'est pris en compte que lors de l'enregistrement des méthodes. Les méthodes existantes dans vos projets ne sont pas modifiées, sauf si vous les enregistrez à nouveau.

### Using tokens in formulas

A text-based 4D [formula](../commands/theme/Formulas.md) is a text that is interpreted at runtime, and not as it is typed. In fact, this is the case as soon as 4D code is expressed as raw text, more specifically when code is exported and then imported using the [`METHOD GET CODE`](../commands/method-get-code) and [`METHOD SET CODE`](../commands/method-set-code) commands, copied/pasted or [interpreted from 4D HTML tags](../Tags/transformation-tags.md).
To benefit from tokenization mechanisms in these contexts, you just need to use an explicit syntax which consists in preceding object names in the language by their token.

### Token syntax

For tokenizable named elements contained in expressions, 4D offers a special syntax you can use to reference the tokens directly: you just need to add a specific suffix after the element name to indicate its type (command, field, etc.), followed by its reference. The token syntax is detailed in this table:

| Élément     | Example (standard syntax)                        | Suffix                                  | Example (token syntax)                                                               | Commentaires                                                                                           |
| ----------- | ------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 4D Command  | String(a)                                        | :Cxx                    | String:C10(a)                                                        | xx is the command number                                                                               |
| 4D Constant | Pi                                                                  | :Kxx:yy | Pi:K30:1                                                                | xx is the ID of the constant group and yy is its index (position) within this group |
| Table       | [Employees]     | :xx                     | [Employees:1]                       | xx is the table number                                                                                 |
| Champ       | [Employees]Name | :xx                     | [Employees:1]Name:2 | xx is the field number                                                                                 |
| 4D Plugin   | PV PRINT(area)                                   | :Pxx:yy | PV PRINT:P13000:229(area)                            | xx is the plug-in ID and yy is the index of the command                                                |

**Note:** Uppercase letters (C, P) must be used in the suffixes; otherwise, they will not be interpreted correctly.

When you use this syntax, you guarantee that your formulas will be interpreted correctly even in the case of renaming or when the database is executed in a different language.

This syntax is accepted in all 4D formulas (or 4D expressions) regardless of the calling context:

- 4D formulas executed using the Formula editor or using commands such as [`EXECUTE FORMULA`](../commands/execute-formula), [`APPLY TO SELECTION`](../commands/apply-to-selection), [`QUERY BY FORMULA`](../commands/query-by-formula), [`LISTBOX INSERT COLUMN FORMULA`](../commands/listbox-insert-column-formula), etc.
- expressions inserted in [multi-style text areas](../FormObjects/properties_Text.md#supported-tags) (see ST INSERT EXPRESSION),
- expressions calculated in [transformation tags](../Tags/transformation-tags.md),
- expressions inserted in external areas such as [4D Write Pro areas](../WritePro/managing-formulas.md).

#### Where to find the element numbers?

The token syntax requires the addition of the reference numbers of various elements. The location of these references depends on the type of element.

- **4D commands:** Command numbers can be found in the documentation ("Properties" area) as well as on the Commands page of the Explorer.
- **Tables and fields**: Table and field numbers can be obtained using the [`Table`](../commands/table) and [`Field`](../commands/field) commands. They are also displayed in the Inspector palette of the Structure editor.