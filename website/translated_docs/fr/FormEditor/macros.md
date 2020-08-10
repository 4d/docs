---
id: macros
title: Form Editor Macros
---

## Aperçu

The 4D Form editor supports macros. A macro is a set of instructions to perform an action or a sequence of actions. When called upon, the macro will execute its instructions and automatically perform the action(s).

For example if you have a recurring report with specific formatting (e.g., certain text must appear in red and certain text must appear in green), you can create a macro to automatically set the color. You can create macros for the 4D Form editor that can:

*   Create and execute 4D code
*   Display dialogs
*   Select form objects
*   Add / delete / modify forms, form objects as well as their properties
*   Modify project files (update, delete)

Macros code supports [class functions](Concepts/classes.md) and [form object properties in JSON](FormObjects/properties_Reference.md) to let you define any custom feature in the Form editor.

Macros can been defined for the host project or for components within the project. Usually, you will create a macro and install it within the components you use for development.

When called, a macro overrides any previously specified behaviors.

## Hands-on example

In this short example, you'll see how to create and call a macro that adds a "Hello World!" alert button in the top left corner of your form.

1. In a `formMacros.json` file within the `Sources` folder of your project, you write:

```
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

```code4d
Function onInvoke($editor : Object)->$result : Object

    var $btnHello : Object

    // Créer un bouton "Hello"
    $btnHello:=New object("type"; "button"; \
    "text"; "Hello World!"; \
    "method"; New object("source"; "ALERT(\"Hello World!\")"); \
    "events"; New collection("onClick"); \
    "width"; 120; \
    "height"; 20; \
    "top"; 0; \
    "left"; 0)  

    // Ajouter un bouton dans la page courante
    $editor.editor.currentPage.objects.btnHello:=$btnHello  

    // Sélectionner le nouveau bouton dans l'éditeur de formulaire
    $editor.editor.currentSelection.clear() //unselect elements
    $editor.editor.currentSelection.push("btnHello")    

    // Notifier la modification à l'éditeur de formulaire 4D 
    $result:=New object("currentSelection"; $editor.editor.currentSelection;\  
        "currentPage"; $editor.editor.currentPage)
```

You can then call the macro: ![](assets/en/FormEditor/macroex1.png) ![](assets/en/FormEditor/macroex2.png)


## Calling macros in the Form editor

When macros are defined in your 4D project, you can call a macro using the contextual menu of the Form editor:

![](assets/en/FormEditor/macroSelect.png)

This menu is built upon the `formMacros.json` [macro definition file(s)](#location-of-macros). Macros items are sorted in the order macro objects are defined in the file.

When macros exist at both the project and component levels, the following order is applied:

1. project macros
2. component macros

This menu can be called in an empty area or a selection in the form. Selected object are passed to `$editor.currentSelection` or `$editor.target` in the [`onInvoke`](#oninvoke) function of the macro.

A single macro can execute several operations. If selected, the **Undo** feature of the Form editor can be used to reverse macro operations globally.

## Location of macro file

All 4D Form Editor macros are defined within a single JSON file per project or component: `FormMacros.json`.

This file must be located in the host or component's **Project** > **Sources** folder:

![](assets/en/FormEditor/macroStructure.png)



## Declaring macros

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

Here is the description of the JSON file contents:

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Attribut
    </th>
    
    <th>
    </th>
    
    <th>
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      macros
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      object
    </td>
    
    <td>
      list of defined macros
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
      \<macroName>
    </td>
    
    <td>
    </td>
    
    <td>
      object
    </td>
    
    <td>
      macro definition
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      class
    </td>
    
    <td>
      string
    </td>
    
    <td>
      macro class name
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      \<customProperty>
    </td>
    
    <td>
      any
    </td>
    
    <td>
      (optional) custom value to retrieve in the constructor
    </td>
  </tr>
</table>

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

> Keep in mind that the order of macros objects in the file defines the [**Macros** menu](#calling-macros-in-the-form-editor) organization in the Form editor.


## Instantiating macros in 4D

Each macro you want to instantiate in your project or component must be declared as a [4D class](Concepts/classes.md).

The class name must match the name defined using the [class](#creating-macros) attribute of the `formMacros.json` file.

Macros are instantiated at application startup. Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the [constructor](#class-constructor), you will have to restart the application to apply the changes.




## Macro Functions

Every macro class can contain a `Class constructor` and two functions: `onInvoke()` and `onError()`.


### Class constructor

#### Class constructor($macro : object)

| Paramètres | Type  | Description                                                       |
| ---------- | ----- | ----------------------------------------------------------------- |
| $macro     | Objet | Objet de déclaration de macro (dans le fichier `formMacros.json`) |

Les macros sont instanciées à l'aide d'une fonction [class constructor](Concepts/classes.md#class-constructor), le cas échéant.

Le class constructor est appelé une fois lors de l'instanciation de classe, qui se produit au démarrage de l'application.

Les propriétés personnalisées ajoutées à la [déclaration macro](#declaring-macros) sont retournées dans le paramètre de la fonction class contructor.


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

```code4d  
// Class "AlignOnTarget"
Class constructor($macro : Object)
    This.myParameter:=$macro.myParam //gauche
    ...
```


### onInvoke()

#### onInvoke($editor : object) -> $result : object

| Paramètres | Type  | Description                                      |
| ---------- | ----- | ------------------------------------------------ |
| $editor    | Objet | Form properties                                  |
| $result    | Objet | Form properties modified by the macro (optional) |

La fonction `onInvoke` est automatiquement exécutée à chaque fois que la macro est appelée.

Lorsque la fonction est appelée, elle reçoit dans le paramètre `$editor` une copie de tous les éléments du formulaire avec leurs valeurs courantes. Vous pouvez ensuite exécuter n'importe quelle opération sur ces propriétés.

Une fois les opérations terminées, si la macro entraîne la modification, l'ajout ou la suppression d'objets, vous pouvez transmettre les propriétés modifiées résultantes dans `$result`. Le processeur de macros analysera les propriétés retournées et appliquera les opérations nécessaires dans le formulaire. Évidemment, moins vous retournez de propriétés, moins le traitement prendra du temps.

Voici les propriétés de l'objet `$editor` :

| Propriété                 | Type       | Description                                                                       |
| ------------------------- | ---------- | --------------------------------------------------------------------------------- |
| $editor.form              | Objet      | The entire form                                                                   |
| $editor.file              | File       | File object of the form file                                                      |
| $editor.name              | Chaine     | Name of the form                                                                  |
| $editor.table             | number     | Table number of the form, 0 for project form                                      |
| $editor.currentPageNumber | number     | The number of the current page                                                    |
| $editor.currentPage       | Objet      | The current page, containing all the form objects and the entry order of the page |
| $editor.currentSelection  | Collection | Collection of names of selected objects                                           |
| $editor.formProperties    | Objet      | Properties of the current form                                                    |
| $editor.target            | string     | Name of the object under the mouse when clicked on a macro                        |

Here are the properties that you can pass in the `$result` object if you want the macro processor to execute a modification. All properties are optional:

| Propriété         | Type       | Description                                                 |
| ----------------- | ---------- | ----------------------------------------------------------- |
| currentPage       | Objet      | currentPage including objects modified by the macro, if any |
| currentSelection  | Collection | currentSelection if modified by the macro                   |
| formProperties    | Objet      | formProperties if modified by the macro                     |
| editor.groups     | Objet      | group info, if groups are modified by the macro             |
| editor.views      | Objet      | view info, if views are modified by the macro               |
| editor.activeView | Chaine     | Active view name                                            |




#### attribut `method`

When handling the `method` attribute of form objects, you can define the attribute value in two ways in macros:

- Using a [string containing the method file name/path](FormObjects/properties_Action.md#method).

- Using an object with the following structure:

| Propriété | Type | Description |
| --------- | ---- | ----------- |
|           |      |             |
 source|Chaine|Code de la méthode|

4D will create a file using the object name in the "objectMethods" folder with the content of `source` attribute. This feature is only available for macro code.

#### `$4dId` property in `currentPage.objects`

The `$4dId` property defines a unique ID for each object in the current page. This key is used by the macro processor to control changes in `$result.currentPage`:

- if the `$4dId` key is missing in both the form and an object in `$result`, the object is created.
- if the `$4dId` key exists in the form but is missing in `$result`, the object is deleted.
- if the `$4dId` key exists in both the form and an object in `$result`, the object is modified.


#### Exemple

You want to define a macro function that will apply the red color and italic font style to any selected object(s).

```code4d
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

#### onError($editor : object; $resultMacro : Object ; $error : Collection)

| Paramètres   |                       | Type       | Description                              |
| ------------ | --------------------- | ---------- | ---------------------------------------- |
| $editor      |                       | Objet      | Object send to [onInvoke](#oninvoke)     |
| $resultMacro |                       | Objet      | Object returned by [onInvoke](#oninvoke) |
| $error       |                       | Collection | Error stack                              |
|              | [].errCode            | Nombre     | Error code                               |
|              | [].message            | Texte      | Description of the error                 |
|              | [].componentSignature | Texte      | Internal component signature             |

La fonction `onError` est exécutée lorsque le processeur de macros rencontre une erreur.

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
