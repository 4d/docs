---
id: macros
title: Form Editor Macros
---


L'éditeur de formulaires 4D prend en charge les macros. Une macro est un ensemble d'instructions permettant de réaliser une action ou une séquence d'actions. Lorsqu'elle est appelée, la macro exécutera ses instructions et, automatiquement, les actions.

Par exemple, si vous avez un rapport récurrent avec une mise en forme spécifique (par exemple, certains textes doivent apparaître en rouge et certains textes en vert), vous pouvez créer une macro pour définir automatiquement la couleur. Vous pouvez créer des macros pour l'éditeur de 4D Form qui peuvent :

*   Créer et exécuter du code 4D
*   Afficher les boîtes de dialogue
*   Sélectionnez des objets de formulaire
*   Ajouter / supprimer / modifier des formulaires, des objets de formulaire ainsi que leurs propriétés
*   Modifier les fichiers de projet (mettre à jour, supprimer)

Le code des macros prend en charge les [class functions (fonctions de classe)](Concepts/classes.md) et les [propriétés d'objet de formulaire en JSON](FormObjects/properties_Reference.md) pour vous permettre de définir n'importe quelle fonctionnalité personnalisée dans l'éditeur de formulaire.

Des macros peuvent être définies pour le projet hôte ou pour les composants du projet. Habituellement, vous créez une macro et l'installez dans les composants que vous utilisez pour le développement.

Lorsqu'elle est appelée, une macro remplace tous les comportements précédemment spécifiés.

## Exemple pratique

Dans ce court exemple, vous verrez comment créer et appeler une macro qui ajoute un bouton d'alerte "Hello World!" dans le coin supérieur gauche de votre formulaire.

1. Dans un fichier `formMacros.json` dans le dossier `Sources` de votre projet, entrez le code suivant :

```
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Créez une classe 4D nommée `AddButton`.

3. Dans la classe `AddButton`, écrivez la fonction suivante :

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

Vous pouvez alors appeler la macro : ![](assets/en/FormEditor/macroex1.png) ![](assets/en/FormEditor/macroex2.png)


## Appeler des macros dans l'éditeur de formulaires

Lorsque des macros sont définies dans votre projet 4D, vous pouvez appeler une macro à l'aide du menu contextuel de l'éditeur de formulaires :

![](assets/en/FormEditor/macroSelect.png)

Ce menu est crée selon le(s) [fichier(s) de définition de macro](#location-of-macros) `formMacros.json`. Macro items are sorted in alphabetical order.

Lorsque des macros existent au niveau du projet et du composant, l'ordre suivant est appliqué :

1. macros de projet
2. macros de composants

Ce menu peut être appelé dans une zone vide ou une sélection dans le formulaire. Les objets sélectionnés sont passés à `$editor.currentSelection` ou `$editor.target` dans la fonction [`onInvoke`](#oninvoke) de la macro.

Une seule macro peut exécuter plusieurs opérations. Si elle est sélectionnée, la fonction **Annuler** de l'éditeur de formulaires peut être utilisée pour inverser les opérations de macro.

## Emplacement du fichier de macro

Toutes les macros de l'éditeur de formulaire 4D sont définies dans un seul fichier JSON par projet ou composant : `FormMacros.json`.

Ce fichier doit se trouver dans le dossier **Projet** >**Sources** de l'hôte ou du composant :

![](assets/en/FormEditor/macroStructure.png)



## Déclaration de macros

La structure du fichier `formMacros.json` est la suivante :

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
      liste des macros définis
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
      définition de la macro
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
      nom de classe de la macro
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
      (optionnel) valeur personnalisée à récupérer dans le constructeur
    </td>
  </tr>
</table>

Les propriétés personnalisées, lorsqu'elles sont utilisées, sont passées à la fonction [constructeur](#class-constructor) de la macro.

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

> Gardez à l'esprit que l'ordre des objets macros dans le fichier définit l'organisation du menu [**Macros**](#calling-macros-in-the-form-editor) dans l'éditeur de formulaires.


## Instancier des macros dans 4D

Chaque macro que vous souhaitez instancier dans votre projet ou composant doit être déclarée en tant que [classe 4D](Concepts/classes.md).

Le nom de la classe doit correspondre au nom défini à l'aide de l'attribut [class](#creating-macros) du fichier `formMacros.json`.

Les macros sont instanciées au lancement de l'application. Par conséquent, si vous modifiez la structure de la classe de macro (ajouter une fonction, modifier un paramètre, etc.) ou le [constructeur](#class-constructor), vous devrez redémarrer l'application pour appliquer les modifications.




## Fonctions macro

Chaque classe de macro peut contenir un `Class constructor` (constructeur de classe) et deux fonctions : `onInvoke()` et `onError()`.


### Class constructor

#### Class constructor($macro : object)

| Paramètres | Type  | Description                                                       |
| ---------- | ----- | ----------------------------------------------------------------- |
| $macro     | Objet | Objet de déclaration de macro (dans le fichier `formMacros.json`) |

Les macros sont instanciées à l'aide d'une fonction [class constructor](Concepts/classes.md#class-constructor), le cas échéant.

Le class constructor est appelé une fois lors de l'instanciation de classe, qui se produit au démarrage de l'application.

Les propriétés personnalisées ajoutées à la [déclaration macro](#declaring-macros) sont retournées dans le paramètre de la fonction class contructor.



#### Exemple

Dans le fichier `formMacros.json` :

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

| Paramètres | Type  | Description                                                  |
| ---------- | ----- | ------------------------------------------------------------ |
| $editor    | Objet | Propriétés du formulaire                                     |
| $result    | Objet | Propriétés du formulaire modifiées par la macro (facultatif) |

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

4D créera un fichier en utilisant le nom de l'objet dans le dossier "objectMethods" avec le contenu de l'attribut `source`. Cette fonctionnalité n'est disponible que pour le code macro.

#### Propriété `$4dId` dans `currentPage.objects`

La propriété `$4dId` définit un ID unique pour chaque objet de la page courante. Cette clé est utilisée par le processeur de macros pour gérer les modifications dans `$result.currentPage` :

- si la clé `$4dId` est manquante à la fois dans le formulaire et dans un objet dans `$result`, l'objet est créé.
- si la clé `$4dId` existe dans le formulaire mais est manquante dans `$result`, l'objet est supprimé.
- si la clé `$4dId` existe à la fois dans le formulaire et dans un objet dans `$result` l'objet est modifié.


#### Exemple

You want to define a macro function that will apply the red color and italic font style to any selected object(s).

```code4d
Function onInvoke($editor : Object)->$result : Object
    var $name : Text

    If ($editor.editor.currentSelection.length>0)       
        // Définir le contour en rouge et le style en italique pour chaque objet sélectionné
        For each ($name; $editor.editor.currentSelection)
            $editor.editor.currentPage.objects[$name].stroke:="red"
            $editor.editor.currentPage.objects[$name].fontStyle:="italic"

        End for each 

    Else 
        ALERT("Please select a form object.")
    End if 

    // Notifier la modification à 4D
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
