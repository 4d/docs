---
id: macros
title: Macros de l'éditeur de formulaires
---

L'éditeur de formulaires 4D prend en charge les macros. Une macro est un ensemble d'instructions permettant de réaliser une action ou une séquence d'actions. Lorsqu'elle est appelée, la macro exécutera ses instructions et, automatiquement, les actions.

Par exemple, si vous avez un rapport récurrent avec une mise en forme spécifique (par exemple, certains textes doivent apparaître en rouge et certains textes en vert), vous pouvez créer une macro pour définir automatiquement la couleur. Vous pouvez créer des macros pour l'éditeur de 4D Form qui peuvent :

- Créer et exécuter du code 4D
- Afficher les boîtes de dialogue
- Sélectionnez des objets de formulaire
- Ajouter / supprimer / modifier des formulaires, des objets de formulaire ainsi que leurs propriétés
- Modifier les fichiers de projet (mettre à jour, supprimer)

Macros code supports [class functions](Concepts/classes.md) and [form object properties in JSON](FormObjects/properties_Reference.md) to let you define any custom feature in the Form editor.

Des macros peuvent être définies pour le projet hôte ou pour les composants du projet. Habituellement, vous créez une macro et l'installez dans les composants que vous utilisez pour le développement.

Lorsqu'elle est appelée, une macro remplace tous les comportements précédemment spécifiés.

## Exemple pratique

Dans ce court exemple, vous verrez comment créer et appeler une macro qui ajoute un bouton d'alerte "Hello World!" dans le coin supérieur gauche de votre formulaire.

1. In a `formMacros.json` file within the `Sources` folder of your project, you write:

```js
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Create a 4D class named `AddButton`.

3. Within the `AddButton` class, write the following function:

```4d
Function onInvoke($editor : Object)->$result : Object
	
	var $btnHello : Object
	
	// Create a "Hello" button
	$btnHello:=New object("type"; "button"; \
	"text"; "Hello World!"; \
	"method"; New object("source"; "ALERT(\"Hello World!\")"); \
	"events"; New collection("onClick"); \
	"width"; 120; \
	"height"; 20; \
	"top"; 0; \
	"left"; 0)	
	
	// Add button in the current page
	$editor.editor.currentPage.objects.btnHello:=$btnHello	
	
	// Select the new button in the form editor
	$editor.editor.currentSelection.clear() //unselect elements
	$editor.editor.currentSelection.push("btnHello")	
	
	// Notify the modification to the 4D Form editor
	$result:=New object("currentSelection"; $editor.editor.currentSelection;\  
		"currentPage"; $editor.editor.currentPage)
```

You can then call the macro:
![](../assets/en/FormEditor/macroex1.png)
![](../assets/en/FormEditor/macroex2.png)

## Appeler des macros dans l'éditeur de formulaires

Lorsque des macros sont définies dans votre projet 4D, vous pouvez appeler une macro à l'aide du menu contextuel de l'éditeur de formulaires :

![](../assets/en/FormEditor/macroSelect.png)

This menu is built upon the `formMacros.json` [macro definition file(s)](#location-of-macros). Les macros sont classées par ordre alphabétique.

Ce menu peut être appelé dans une zone vide ou une sélection dans le formulaire. Selected object are passed to `$editor.currentSelection` or `$editor.target` in the [`onInvoke`](#oninvoke) function of the macro.

Une seule macro peut exécuter plusieurs opérations. If selected, the **Undo** feature of the Form editor can be used to reverse macro operations globally.

## Emplacement du fichier de macro

All 4D Form Editor macros are defined within a single JSON file per project or component: `FormMacros.json`.

This file must be located in the host or component's **Project** > **Sources** folder:

![](../assets/en/FormEditor/macroStructure.png)

## Déclaration de macros

The structure of the `formMacros.json` file is the following:

```js
{
    "macros": {
            <macroName>: {
                "class": <className>,
                <customProperty> : <value>
        }
    }
}
```

Voici la description du contenu du fichier JSON :

| Attribut |               |                    | Type   | Description                                                                          |
| -------- | ------------- | ------------------ | ------ | ------------------------------------------------------------------------------------ |
| macros   |               |                    | object | liste des macros définis                                                             |
|          | `<macroName>` |                    | object | définition de la macro                                                               |
|          |               | class              | string | nom de classe de la macro                                                            |
|          |               | `<customProperty>` | any    | (optionnel) valeur personnalisée à récupérer dans le constructeur |

Custom properties, when used, are passed to the [constructor](#class-constructor) function of the macro.

### Exemple

```js
{
   "macros": {
     "Open Macros file": {
       "class": "OpenMacro"
     },
     "Align to Right on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "right"
     },
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

## Instancier des macros dans 4D

Each macro you want to instantiate in your project or component must be declared as a [4D class](Concepts/classes.md).

The class name must match the name defined using the [class](#creating-macros) attribute of the `formMacros.json` file.

Les macros sont instanciées au lancement de l'application. Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the [constructor](#class-constructor), you will have to restart the application to apply the changes.

## Fonctions macro

Every macro class can contain a `Class constructor` and two functions: `onInvoke()` and `onError()`.

### Class constructor

#### Class constructor($macro : Object)

| Paramètres | Type   | Description                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------- |
| $macro     | Object | Macro declaration object (in the `formMacros.json` file) |

Macros are instantiated using a [class constructor](Concepts/classes.md#class-constructor) function, if it exists.

Le class constructor est appelé une fois lors de l'instanciation de classe, qui se produit au démarrage de l'application.

Custom properties added to the [macro declaration](#declaring-macros) are returned in the parameter of the class contructor function.

#### Exemple

In the `formMacros.json` file:

```js
{
   "macros": {
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

Vous pouvez écrire :

```4d
// Class "AlignOnTarget"
Class constructor($macro : Object)
    This.myParameter:=$macro.myParam //gauche
    ...
```

### onInvoke()

#### onInvoke($editor : Object) -> $result : Object

| Paramètres | Type   | Description                                                                                                    |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| $editor    | Object | Objet Form Editor Macro Proxy contenant les propriétés du formulaire                                           |
| $result    | Object | Objet Form Editor Macro Proxy retournant des propriétés modifiées par la macro (facultatif) |

The `onInvoke` function is automatically executed each time the macro is called.

When the function is called, it receives in the `$editor.editor` property a copy of all the elements of the form with their current values. Vous pouvez ensuite exécuter n'importe quelle opération sur ces propriétés.

Once operations are completed, if the macro results in modifying, adding, or removing objects, you can pass the resulting edited properties in `$result`. Le processeur de macros analysera les propriétés retournées et appliquera les opérations nécessaires dans le formulaire. Évidemment, moins vous retournez de propriétés, moins le traitement prendra du temps.

Here are the properties returned in the _$editor_ parameter:

| Propriété                                                        | Type       | Description                                                                       |
| ---------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------- |
| $editor.editor.form              | Object     | The entire form                                                                   |
| $editor.editor.file              | File       | File object of the form file                                                      |
| $editor.editor.name              | String     | Name of the form                                                                  |
| $editor.editor.table             | number     | Table number of the form, 0 for project form                                      |
| $editor.editor.currentPageNumber | number     | The number of the current page                                                    |
| $editor.editor.currentPage       | Object     | The current page, containing all the form objects and the entry order of the page |
| $editor.editor.currentSelection  | Collection | Collection of names of selected objects                                           |
| $editor.editor.formProperties    | Object     | Properties of the current form                                                    |
| $editor.editor.target            | string     | Name of the object under the mouse when clicked on a macro                        |

Here are the properties that you can pass in the `$result` object if you want the macro processor to execute a modification. Toutes les propriétés sont optionnelles:

| Propriété                         | Type       | Description                                                 |
| --------------------------------- | ---------- | ----------------------------------------------------------- |
| currentPage                       | Object     | currentPage including objects modified by the macro, if any |
| currentSelection                  | Collection | currentSelection if modified by the macro                   |
| formProperties                    | Object     | formProperties if modified by the macro                     |
| editor.groups     | Object     | group info, if groups are modified by the macro             |
| editor.views      | Object     | view info, if views are modified by the macro               |
| editor.activeView | String     | Active view name                                            |

Par exemple, si des objets de la page courante et des groupes ont été modifiés, vous pouvez écrire ce qui suit :

```4d
	$result:=New object("currentPage"; $editor.editor.currentPage ; \ 
			"editor"; New object("groups"; $editor.editor.form.editor.groups))

```

#### `method` attribute

When handling the `method` attribute of form objects, you can define the attribute value in two ways in macros:

- Using a [string containing the method file name/path](FormObjects/properties_Action.md#method).

- Using an object with the following structure:

| Propriété | Type   | Description |
| --------- | ------ | ----------- |
| source    | String | method code |

4D will create a file using the object name in the "objectMethods" folder with the content of `source` attribute. Cette fonctionnalité n'est disponible que pour le code macro.

#### `$4dId` property in `currentPage.objects`

The `$4dId` property defines a unique ID for each object in the current page. This key is used by the macro processor to control changes in `$result.currentPage`:

- if the `$4dId` key is missing in both the form and an object in `$result`, the object is created.
- if the `$4dId` key exists in the form but is missing in `$result`, the object is deleted.
- if the `$4dId` key exists in both the form and an object in `$result`, the object is modified.

#### Exemple

Vous souhaitez définir une fonction macro qui appliquera la couleur rouge et le style de police italique à tous les objets sélectionnés.

```4d
Function onInvoke($editor : Object)->$result : Object
	var $name : Text
	
	If ($editor.editor.currentSelection.length>0)		
		// Set stroke to red and style to italic for each selected object
		For each ($name; $editor.editor.currentSelection)
			$editor.editor.currentPage.objects[$name].stroke:="red"
			$editor.editor.currentPage.objects[$name].fontStyle:="italic"

		End for each 
		
	Else 
		ALERT("Please select a form object.")
	End if 
	
	// Notify to 4D the modification
	$result:=New object("currentPage"; $editor.editor.currentPage)
```

### onError()

#### onError($editor : Object; $resultMacro : Object ; $error : Collection)

| Paramètres   |                                                                                           | Type       | Description                              |
| ------------ | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- |
| $editor      |                                                                                           | Object     | Object send to [onInvoke](#oninvoke)     |
| $resultMacro |                                                                                           | Object     | Object returned by [onInvoke](#oninvoke) |
| $error       |                                                                                           | Collection | Error stack                              |
|              | [].errCode            | Number     | Code d'erreur                            |
|              | [].message            | Text       | Description of the error                 |
|              | [].componentSignature | Text       | Internal component signature             |

The `onError` function is executed when the macros processor encounters an error.

Lors de l'exécution d'une macro, si 4D rencontre une erreur qui empêche l'annulation de la macro, il n'exécute pas la macro. C'est le cas par exemple si l'exécution d'une macro se traduirait par :

- supprimer ou modifier un script dont le fichier est en lecture seule.
- créer deux objets avec le même ID interne.

#### Exemple

In a macro class definition, you can write the following generic error code:

```4d
Function onError($editor : Object; $resultMacro : Object; $error : Collection)
	var $obj : Object
	var $txt : Text
	$txt:=""
	
	For each ($obj; $error)
		$txt:=$txt+$obj.message+" \n"
	End for each 
	
	ALERT($txt)
```
