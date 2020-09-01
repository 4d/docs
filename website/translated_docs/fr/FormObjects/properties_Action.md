---
id: propertiesAction
title: Action
---


---
## Glissable

Contrôlez si l'utilisateur peut faire glisser l'objet et comment il peut le faire. Par défaut, aucune opération de glisser n'est autorisée.

Deux modes de glisser-déposer sont proposés dans 4D :

- Un mode **personnalisé**, dans lequel le glisser déclenche l'événement formulaire `Sur début glisser` dans le contexte de l'objet. Vous gérez ensuite le glisser-déposer à l'aide d'une méthode.   
  En mode personnalisé, le glisser-déposer est géré par le programmeur. Ce mode vous permet de mettre en place des interfaces basées sur le glisser-déposer, y compris des interfaces qui ne déplacent pas nécessairement des données mais qui peuvent effectuer tout type d'action, telle que l'ouverture de fichiers ou le lancement d'un calcul. Ce mode est basé sur un ensemble de propriétés, d'événements et de commandes spécifiques à partir du thème `Conteneur de données`.
- Un mode **automatique**, dans lequel 4D **copie** du texte ou des images directement à partir de l'objet formulaire. Il peut alors être utilisé dans la même zone 4D, entre deux zones 4D, ou entre 4D et une autre application. Par exemple, le glisser-déposer automatique vous permet de copier une valeur entre deux champs, sans programmation :  
  ![](assets/en/FormObjects/property_automaticDragDrop.png)  
  ![](assets/en/FormObjects/property_automaticDragDrop2.png) Dans ce mode, l'événement de formulaire `Sur début glisser` n'est PAS généré. Si vous souhaitez "forcer" l'utilisation du glissement personnalisé alors que le glissement automatique est activé, maintenez la touche **Alt** (Windows) ou **Option** (macOS) enfoncée pendant l'action. Cette option n'est pas disponible pour les images.

Pour plus d'informations, reportez-vous à [Glisser-déposer](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) dans le manuel *Langage 4D*.

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                          |
| -------- | --------------- | ---------------------------------------------------------- |
| dragging | Texte           | "none" (par défaut), "custom", "automatic" (hors list box) |


#### Objets pris en charge

[Zones 4D Write Pro](writeProArea_overview.md) - [Zone de saisie](input_overview.md) - [Liste hiérarchique](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Zone de plug-in](pluginArea_overview.md#overview)




#### Voir également
[Déposable](#droppable)


---
## Déposable

Control whether and how the object can be the destination of a drag and drop operation.

Deux modes de glisser-déposer sont proposés dans 4D :

- **Custom**: In this mode, any drop operation performed on the object triggers the `On Drag Over` and `On Drop` form events in the context of the object. You then manage the drop action using a method.    
  In custom mode, basically the whole drag-and-drop operation is handled by the programmer. Ce mode vous permet de mettre en place des interfaces basées sur le glisser-déposer, y compris des interfaces qui ne déplacent pas nécessairement des données mais qui peuvent effectuer tout type d'action, telle que l'ouverture de fichiers ou le lancement d'un calcul. Ce mode est basé sur un ensemble de propriétés, d'événements et de commandes spécifiques à partir du thème `Conteneur de données`.
- **Automatic**: In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The `On Drag Over` and `On Drop` form events are NOT generated. On the other hand, the `On After Edit` (during the drop) and `On Data Change` (when the object loses the focus) events are generated.

Pour plus d'informations, reportez-vous à [Glisser-déposer](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) dans le manuel *Langage 4D*.


#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                          |
| -------- | --------------- | ---------------------------------------------------------- |
| dropping | Texte           | "none" (par défaut), "custom", "automatic" (hors list box) |

#### Objets pris en charge

[Zones 4D Write Pro](writeProArea_overview.md) - [Bouton](button_overview.md) - [Zone de saisie](input_overview.md) - [Liste hiérarchique](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Zone de plug-in](pluginArea_overview.md#overview)

 </p> 




#### Voir également

[Glissable](#draggable)




---


## Execute object method

When this option is enabled, the object method is executed with the `On Data Change` event *at the same moment* the user changes the value of the indicator. When the option is disabled, the method is executed *after* the modification.



#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles |
| ------------------- | --------------- | ----------------- |
| continuousExecution | boolean         | true, false       |




#### Objets pris en charge

[Progress bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)








---


## Méthode

Reference of a method attached to the object. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

Several types of method references are supported:

- a standard object method file path, i.e. that uses the following pattern:  
  `ObjectMethods/objectName.4dm`  
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/*formName*/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:  
  `ObjectMethods/objectName.4dm` You can also use a filesystem:  
  `/RESOURCES/Buttons/bOK.4dm` In this case, 4D does not provide automatic support for object operations.




#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                                                  |
| ------ | --------------- | ------------------------------------------------------------------ |
| method | Texte           | Object method standard or custom file path, or project method name |





#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)






---


## Lignes déplaçables

`Array type list boxes`

Authorizes the movement of rows during execution. This option is selected by default. It is not available for [selection type list boxes](listbox_overview.md#selection-list-boxes) nor for [list boxes in hierarchical mode](properties_Hierarchy.md#hierarchical-list-box). 



#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles |
| ----------- | --------------- | ----------------- |
| movableRows | boolean         | true, false       |




#### Objets pris en charge

[List Box](listbox_overview.md#overview)







---


## Multi-sélectionnable

Allows the selection of multiple records/options in a [hierarchical list](list_overview.md).



#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles            |
| ------------- | --------------- | ---------------------------- |
| selectionMode | Texte           | "multiple", "single", "none" |




#### Objets pris en charge

[Liste hiérarchique](list_overview.md)






---


## Triable

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. This option is selected by default. Picture type arrays (columns) cannot be sorted using this feature.

In list boxes based on a selection of records, the standard sort function is available only:

*   When the data source is *Current Selection*,
*   With columns associated with fields (of the Alpha, Number, Date, Time or Boolean type).

In other cases (list boxes based on named selections, columns associated with expressions), the standard sort function is not available. A standard list box sort changes the order of the current selection in the database. However, the highlighted records and the current record are not changed. A standard sort synchronizes all the columns of the list box, including calculated columns.



#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles |
| -------- | --------------- | ----------------- |
| sortable | boolean         | true, false       |




#### Objets pris en charge

[List Box](listbox_overview.md)








---


## Action standard

Typical activities to be performed by active objects (*e.g.*, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the *Design Reference*.

You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed. 

You can also set this property using the `OBJECT SET ACTION` command.



#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                                                                                                |
| ------ | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| action | string          | The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |




#### Objets pris en charge

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
