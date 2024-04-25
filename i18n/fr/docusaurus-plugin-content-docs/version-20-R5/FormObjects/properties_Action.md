---
id: propertiesAction
title: Action
---

---

## Glissable

Contrôlez si l'utilisateur peut faire glisser l'objet et comment il peut le faire. Par défaut, aucune opération de glisser n'est autorisée.

Deux modes de glisser-déposer sont proposés dans 4D :

- **Custom**: In this mode, any drag operation performed on the object triggers the `On Begin Drag` form event in the context of the object. <strong x-id="1">Custom</strong>: In this mode, any drag operation performed on the object triggers the <code>On Begin Drag</code> form event in the context of the object.\
  You then manage the drag action using a method. Ce mode vous permet de mettre en place des interfaces basées sur le glisser-déposer, y compris des interfaces qui ne déplacent pas nécessairement des données mais qui peuvent effectuer tout type d'action, telle que l'ouverture de fichiers ou le lancement d'un calcul. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D **copies** text or pictures directly from the form object. Il peut alors être utilisé dans la même zone 4D, entre deux zones 4D, ou entre 4D et une autre application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:\
  ![](../assets/en/FormObjects/property_automaticDragDrop.png)\
  ![](../assets/en/FormObjects/property_automaticDragDrop2.png)
  In this mode, the `On Begin Drag` form event is NOT generated. If you want to "force" the use of the custom drag while automatic drag is enabled, hold down the **Alt** (Windows) or **Option** (macOS) key during the action. Cette option n'est pas disponible pour les images.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                                                                |
| -------- | --------------- | ------------------------------------------------------------------------------------------------ |
| dragging | text            | "none" (par défaut), "custom", "automatic" (hors list box) |

#### Objets pris en charge

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### Voir également

[Droppable](#droppable)

---

## Déposable

Contrôlez si et comment l'objet peut être la destination d'une opération de glisser-déposer.

Deux modes de glisser-déposer sont proposés dans 4D :

- **Custom**: In this mode, any drop operation performed on the object triggers the `On Drag Over` and `On Drop` form events in the context of the object. Un mode <strong x-id="1">personnalisé</strong>, dans lequel le déposer déclenche les événements formulaire <code>Sur glisser</code> et <code>Sur déposer</code> dans le contexte de l'objet.\
  You then manage the drag action using a method. Ce mode vous permet de mettre en place des interfaces basées sur le glisser-déposer, y compris des interfaces qui ne déplacent pas nécessairement des données mais qui peuvent effectuer tout type d'action, telle que l'ouverture de fichiers ou le lancement d'un calcul. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The `On Drag Over` and `On Drop` form events are NOT generated. On the other hand, the `On After Edit` (during the drop) and `On Data Change` (when the object loses the focus) events are generated.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                                                                |
| -------- | --------------- | ------------------------------------------------------------------------------------------------ |
| dropping | text            | "none" (par défaut), "custom", "automatic" (hors list box) |

#### Objets pris en charge

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### Voir également

[Draggable](#draggable)

---

## Exécuter méthode objet

When this option is enabled, the object method is executed with the `On Data Change` event _at the same moment_ the user changes the value of the indicator. When the option is disabled, the method is executed _after_ the modification.

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles |
| ------------------- | --------------- | ----------------- |
| continuousExecution | boolean         | true, false       |

#### Objets pris en charge

[Progress bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Méthode

Référence d'une méthode attachée à l'objet. Les méthodes d'objet "gèrent" généralement l'objet pendant que le formulaire est affiché ou imprimé. Vous n'appelez pas de méthode objet - 4D l'appelle automatiquement lorsqu'un événement implique l'objet auquel la méthode objet est rattachée.

Plusieurs types de références de méthode sont pris en charge :

- a standard object method file path, i.e. that uses the following pattern:\
  `ObjectMethods/objectName.4dm`\
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/_formName_/ObjectMethods/"). Dans ce cas, 4D gère automatiquement la méthode objet lorsque des opérations sont exécutées sur l'objet formulaire (renommage, duplication, copier/coller, etc.)

- a project method name: name of an existing project method without file extension, i.e.:
  `myMethod`
  In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:\
  `../../CustomMethods/myMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Buttons/bOK.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                                                                          |
| ------ | --------------- | ------------------------------------------------------------------------------------------ |
| method | text            | Chemin de fichier standard ou personnalisé de la méthode objet ou nom de la méthode projet |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](FormEditor/forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## Lignes déplaçables

`Array type list boxes`

Autorise le déplacement des lignes pendant l'exécution. Cette option est sélectionnée par défaut. It is not available for [selection type list boxes](listbox_overview.md#selection-list-boxes) nor for [list boxes in hierarchical mode](properties_Hierarchy.md#hierarchical-list-box).

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
| selectionMode | text            | "multiple", "single", "none" |

#### Objets pris en charge

[Hierarchical List](list_overview.md)

---

## Triable

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. Cette option est sélectionnée par défaut. Les tableaux de types d'image (colonnes) ne peuvent pas être triés à l'aide de cette fonction.

Dans les list box basées sur une sélection d'enregistrements, la fonction de tri standard est disponible uniquement :

- When the data source is _Current Selection_,
- Avec des colonnes associées à des champs (de type Alpha, Numérique, Date, Heure ou Booléen).

Dans d'autres cas (list box basées sur des sélections nommées, colonnes associées à des expressions), la fonction de tri standard n'est pas disponible. Un tri de list box standard modifie l'ordre de la sélection courante dans la base de données. Cependant, les enregistrements en surbrillance et l'enregistrement courant ne sont pas modifiés. Un tri standard synchronise toutes les colonnes de la list box, y compris les colonnes calculées.

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles |
| -------- | --------------- | ----------------- |
| sortable | boolean         | true, false       |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Action standard

Typical activities to be performed by active objects (_e.g._, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the _Design Reference_.

Vous pouvez associer à la fois une action standard et la méthode projet d'un objet. Dans ce cas, l'action standard est généralement exécutée après la méthode et 4D utilise cette action pour activer/désactiver l'objet en fonction du contexte courant. Lorsqu’un objet est désactivé, la méthode projet associée ne peut être exécutée.

You can also set this property using the `OBJECT SET ACTION` command.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                                                                                                                |
| ------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| action | string          | The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |

#### Objets pris en charge

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
