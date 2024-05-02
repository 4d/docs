---
id: tabControl
title: Onglets
---

Un onglet crée un objet qui permet à l’utilisateur de choisir entre plusieurs écrans virtuels affichés dans les limites de l’onglet. L’utilisateur accède à chaque écran en cliquant sur l’onglet correspondant.

Le formulaire multi-pages suivant utilise un onglet :

![](../assets/en/FormObjects/tabControl1.png)

Pour passer d’un écran à l’autre, l’utilisateur clique simplement sur l’onglet correspondant.

Un onglet peut être utilisé, entre autres, pour gérer la navigation entre les pages d’un formulaire multi-pages. If the tab control is used as a page navigation tool, then the [`FORM GOTO` PAGE](https://doc.4d.com/4dv19/help/command/en/page247.html) command or the `gotoPage` standard action would be used when a user clicks a tab.

Un onglet peut aussi être utilisé pour contrôler les données qui sont affichées dans un sous-formulaire. On peut, par exemple, implémenter un rolodex à l’aide d’un onglet. Chaque onglet afficherait alors une des lettres de l’alphabet et l’action de l’onglet serait de charger les informations correspondantes à la lettre sur lequel l’utilisateur a cliqué.

Chaque onglet peut afficher des intitulés ou des intitulés et des petites icônes. Si vous placez des icônes, elles apparaissent à gauche de chaque intitulé. Voici un exemple d’onglet qui utilise des icônes :

![](../assets/en/FormObjects/tabControl2.png)

Lorsque vous créez un onglet, 4D gère l’espacement et le placement des onglets. Vous n’avez à fournir à 4D que les intitulés sous la forme d’un tableau ou les icônes et intitulés sous la forme d’une énumération hiérarchique.

Si l’onglet est assez large, il affiche les intitulés et les icônes. S’il ne peut pas afficher toutes les icônes à la fois, il place des flèches de défilement à droite du dernier onglet visible. S’il ne peut pas afficher toutes les icônes à la fois, il place des flèches de défilement à droite du dernier onglet visible. Les flèches de défilement permettent à l’utilisateur de faire défiler des onglets vers la droite ou vers la gauche.

Sous macOS, les onglets peuvent être orientés, en plus de la position standard (en haut), à droite, à gauche ou en bas.

### Exemple JSON :

```4d
	"myTab": {
		"type": "tab",
 		"left": 60,	
		"top": 160,	 
		"width": 100,	
		"height": 20,	
		"labelsPlacement": "bottom"	//define the direction
	}
```

## Ajouter les intitulés dans un onglet

Pour fournir les étiquettes d'un onglet, vous pouvez utiliser :

- un objet
- une liste déroulante
- un tableau

### Utilisation d'un objet

You can assign an [object](Concepts/dt_object.md) encapsulating a [collection](../Concepts/dt_collection.md) as the [data source](properties_Object.md#variable-or-expression) of the tab control. Cet objet doit avoir les propriétés suivantes :

| Propriété      | Type       | Description                                                                                                                                                                                          |
| -------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `valeurs`      | Collection | Obligatoire - Collection de valeurs scalaires. Seules les valeurs de type chaîne sont prises en charge. Si elle est invalide, vide ou non définie, l'onglet est vide |
| `index`        | number     | Index of the currently tab control page (value between 0 and `collection.length-1`)                                                                                               |
| `currentValue` | Text       | Valeur courante sélectionnée                                                                                                                                                                         |

Le code d'initialisation doit être exécuté avant que le formulaire ne soit présenté à l'utilisateur.

In the following example, `Form.tabControl` has been defined as tab control [expression](properties_Object.md#variable-or-expression). You can associate the [`gotoPage` standard action](#goto-page-action) to the form object:

```4d
Form.tabControl:=New object
Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 //démarrage à la page 3
```

### Utiliser une énumération

You can assign a [choice list](properties_DataSource.md#choice-list-static-list) to the tab control, either through a collection (static list) or a JSON pointer to a json list ("$ref"). Les icônes associées à des éléments de liste dans l'éditeur de listes seront affichées dans l'onglet.

### Utiliser un tableau texte

Vous pouvez créer un tableau Texte qui contient les noms de chaque page du formulaire. Le code doit être exécuté avant que le formulaire soit présenté à l’utilisateur. For example, you could place the code in the object method of the tab control and execute it when the `On Load` event occurs.

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```

> You can also store the names of the pages in a hierarchical list and use the [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) command to load the values into the array.

## Fonctionnalités de Goto page

### Commande FORM GOTO PAGE

You can use the [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) command in the tab control’s method:

```4d
FORM GOTO PAGE(arrPages)
```

The command is executed when the [`On Clicked`](Events/onClicked.md) event occurs. You should then clear the array when the [`On Unload`](Events/onUnload.md) event occurs.

Vous pouvez, par exemple, écrire le code suivant :

```4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

### Action Goto Page

When you assign the `gotoPage` [standard action](properties_Action.md#standard-action) to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected.

Par exemple, si l’utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe).

## Propriétés prises en charge

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list-static-list) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Standard action](properties_Action.md#standard-action) - [Tab Control Direction](properties_Appearance.md#tab-control-direction) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
