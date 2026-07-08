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

## Tokens du langage

Le langage de 4D comporte un système unique en son genre de tokenisation de tous les noms d'objets du langage utilisés dans le code (commandes, tables, champs, constantes, mots-clés). *Tokeniser* ces noms signifie les stocker en interne sous forme de références absolues (des numéros) au moment de leur saisie dans l'éditeur de code et les restituer à l'exécution ou à l'affichage en tenant compte du contexte. Ce principe permet de garantir que le code sera toujours correctement interprété, même si vous renommez vos tables ou vos champs, ou si des commandes du langage 4D sont renommées au fil des versions de l'application.

**Note :** Ce principe permet également d'assurer la traduction automatique du code lorsque vous avez activé l'option ["Utiliser langage français et paramètres régionaux système"](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) et ouvrez vos bases avec des versions de 4D de langues différentes.

La *tokenisation* est entièrement transparente pour les développeurs 4D lorsqu'ils travaillent dans l'[éditeur de code](../code-editor/write-class-method.md), et vous n'aurez généralement pas à vous en soucier. Il existe toutefois deux cas dans lesquels vous pourriez avoir besoin d'intervenir concernant la *tokenisation* : si vous souhaitez la désactiver, et si vous souhaitez l'utiliser dans vos formules.

### Désactivation de la tokenisation

Lorsque votre projet est hébergé sur un système de contrôle de version (VCS) tel que GitHub ou GitLab, vous pouvez choisir de désactiver la *tokenisation* afin de rendre le code plus lisible sur la plateforme externe. Pour ce faire, vous pouvez désélectionner l'option [**Inclure les tokens dans les fichiers source du projet**](../Preferences/general.md#include-tokens-in-project-source-files) afin d'empêcher que les tokens ne soient enregistrés dans vos **nouveaux projets**.

Vous pouvez configurer vos **projets existants** pour qu'ils enregistrent le code sans tokens en insérant la clé suivante dans le fichier `<applicationName>.4DProject` à l'aide d'un éditeur de texte :

```json
"tokenizedText" : false
```

Ce paramètre n'est pris en compte que lors de l'enregistrement des méthodes. Les méthodes existantes dans vos projets ne sont pas modifiées, sauf si vous les enregistrez à nouveau.

### Utilisation des tokens dans les formules

Une [formule 4D](../commands/theme/Formulas.md) de type texte est un texte qui est interprété au moment de l'exécution, et non au fur et à mesure de sa saisie. En fait, c'est le cas dès que le code 4D est exprimé sous forme de texte brut, notamment lorsque le code est exporté puis importé à l'aide des commandes [`METHOD GET CODE`](../commands/method-get-code) et [`METHOD SET CODE`](../commands/method-set-code), copié/collé ou [interprété à partir de balises 4D HTML](../Tags/transformation-tags.md).
Pour tirer parti des mécanismes de *tokenisation* dans ces contextes, il suffit d'utiliser une syntaxe explicite consistant à faire précéder les noms d'objets du langage par leur *token*.

### Syntaxe tokenisée

Pour les éléments *tokenisables* ayant un nom contenus dans des expressions, 4D propose une syntaxe spéciale qui vous permet de faire directement référence aux *tokens* : il suffit d’ajouter un suffixe spécifique après le nom de l’élément pour indiquer son type (commande, champ, etc.), suivi de sa référence. La syntaxe tokenisée est décrite dans ce tableau :

| Élément      | Exemple (syntaxe standard)                       | Suffixe                                 | Exemple (syntaxe tokenisée)                                                          | Commentaires                                                                                                               |
| ------------ | ------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Commande 4D  | String(a)                                        | :Cxx                    | String:C10(a)                                                        | xx correspond au numéro de la commande                                                                                     |
| Constante 4D | Pi                                                                  | :Kxx:yy | Pi:K30:1                                                                | xx correspond à l'identifiant du groupe de constantes et yy à son index (position) au sein de ce groupe |
| Table        | [Employees]     | :xx                     | [Employees:1]                       | xx correspond au numéro de la table                                                                                        |
| Champ        | [Employees]Name | :xx                     | [Employees:1]Name:2 | xx correspond au numéro du champ                                                                                           |
| 4D Plugin    | PV PRINT(area)                                   | :Pxx:yy | PV PRINT:P13000:229(area)                            | xx correspond à l'identifiant du plug-in et yy à l'index de la commande                                                    |

**Note :** Les lettres utilisées dans les suffixes (C, P) doivent impérativement être en majuscules, sinon elles ne seront pas correctement interprétées.

Lorsque vous utilisez cette syntaxe, vous avez la garantie que vos formules seront correctement interprétées même en cas de renommage ou d'exécution de la base dans une langue différente.

Cette syntaxe est acceptée dans toutes les formules 4D (ou expressions 4D), quel que soit leur contexte d'appel :

- Formules 4D exécutées à l'aide de l'éditeur de formules ou à l'aide de commandes telles que [`EXECUTE FORMULA`](../commands/execute-formula), [`APPLY TO SELECTION`](../commands/apply-to-selection), [`QUERY BY FORMULA`](../commands/query-by-formula), [`LISTBOX INSERT COLUMN FORMULA`](../commands/listbox-insert-column-formula), etc.
- expressions insérées dans des [zones de texte multi-styles](../FormObjects/properties_Text.md#supported-tags) (voir ST INSERT EXPRESSION),
- expressions calculated in [transformation tags](../Tags/transformation-tags.md),
- expressions inserted in external areas such as [4D Write Pro areas](../WritePro/managing-formulas.md).

#### Where to find the element numbers?

The token syntax requires the addition of the reference numbers of various elements. The location of these references depends on the type of element.

- **4D commands:** Command numbers can be found in the documentation ("Properties" area) as well as on the Commands page of the Explorer.
- **Tables and fields**: Table and field numbers can be obtained using the [`Table`](../commands/table) and [`Field`](../commands/field) commands. They are also displayed in the Inspector palette of the Structure editor.