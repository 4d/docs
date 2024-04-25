---
id: listOverview
title: Liste hiérarchique
---

Les listes hiérarchiques sont des objets de formulaire permettant d'afficher des données sous forme de listes comportant un ou plusieurs niveaux qu'il est possible de déployer ou de contracter.

![](../assets/en/FormObjects/Hlist1.png)

Le cas échéant, l'icône déployer/contractée est automatiquement affichée à gauche de l'élément. Les listes hiérarchiques prennent en charge un nombre illimité de sous-niveaux.

## Sources de données de liste hiérarchique

Le contenu d'un objet formulaire liste hiérarchique peut être initialisé de l'une des manières suivantes :

- Associate an existing [choice list](properties_DataSource.md#choice-list) to the object. L'énumération doit avoir été définie dans l'éditeur de listes en mode Développement.
- Directly assign a hierarchical list  reference to the [variable or expression](properties_Object.md#variable-or-expression) associated with the form object.

In both cases, you manage a hierarchical list at runtime through its _ListRef_ reference, using the [Hierarchical list](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) commands in the 4D language.

## RefListe et nom d'objet

A hierarchical list is both a **language object** existing in memory and a **form object**.

The **language object** is referenced by an unique internal ID of the Longint type, designated by _ListRef_ in the 4D Language Reference. This ID is returned by the commands that can be used to create lists: `New list`, `Copy list`, `Load list`, `BLOB to list`. Il n’existe qu’une seule instance en mémoire de l’objet de langage et toute modification effectuée sur cet objet est immédiatement répercutée dans tous les endroits où il est utilisé.

The **form object** is not necessarily unique: there may be several representations of the same hierarchical list in the same form or in different ones. Comme pour les autres objets de formulaire, vous désignez l'objet dans le langage via la syntaxe (\*;"NomListe", etc.).

Vous connectez l'"objet de langage" liste hiérarchique avec l'"objet de formulaire" liste hiérarchique par l'intermédiaire de la variable contenant la valeur de l'identifiant unique RefListe. For example, if you have associated the mylist [variable](properties_Object.md#variable-or-expression) to the form object, you can write:

```4d
mylist:=New list
```

Chaque représentation de liste dispose de caractéristiques propres et partage des caractéristiques communes avec l’ensemble des représentations. Les caractéristiques propres à chaque représentation de liste sont les suivantes :

- La sélection,
- L’état déployé/contracté des éléments,
- La position du curseur de défilement.

The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.
Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example `Count list items` (when the final `*` parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity.

You must use the `ListRef` ID with language commands when you want to specify the hierarchical list found in memory. Par ailleurs, si vous souhaitez désigner la représentation au niveau du formulaire d'un objet Liste hiérarchique, vous devez utiliser le nom de l'objet (type chaîne) dans la commande, via la syntaxe (\*;"NomListe"...).

> Dans le cas des commandes définissant des propriétés, la syntaxe basée sur le nom d’objet ne signifie pas que seul l’objet de formulaire désigné sera modifié par la commande, mais que l’action de la commande sera basée sur l’état de cet objet. Les caractérisques communes des listes hiérarchiques sont toujours modifiées dans toutes les représentations.
> Par exemple, si vous passez l’instruction :

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

> ... you are indicating that you want to modify the font of the hierarchical list item associated with the _mylist1_ form object. The command will take the current item of the _mylist1_ object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.

### Prise en compte du @

As with other object property management commands, it is possible to use the “@” character in the `ListName` parameter. En principe, cette syntaxe permet de désigner un ensemble d’objets dans le formulaire. Toutefois, dans le contexte des commandes de liste hiérarchique, ce principe n’est pas applicable dans tous les cas. Cette syntaxe aura deux effets différents en fonction du type de commande :

- Pour les commandes fixant des propriétés, cette syntaxe désigne tous les objets dont le nom correspond (fonctionnement standard). Par exemple, le paramètre "LH@" désigne tous les objets de type liste hiérarchique dont le nom débute par “LH”
  - `DELETE FROM LIST`
  - `INSERT IN LIST`
  - `SELECT LIST ITEMS BY POSITION`
  - `SET LIST ITEM`
  - `SET LIST ITEM FONT`
  - `SET LIST ITEM ICON`
  - `SET LIST ITEM PARAMETER`
  - `SET LIST ITEM PROPERTIES`

- Pour les commandes récupérant des propriétés, cette syntaxe désigne le premier objet dont le nom correspond. Ces commandes sont :
  - `Count list items`
  - `Find in list`
  - `GET LIST ITEM`
  - `Get list item font`
  - `GET LIST ITEM ICON`
  - `GET LIST ITEM PARAMETER`
  - `GET LIST ITEM PROPERTIES`
  - `List item parent`
  - `List item position`
  - `Selected list items`

## Commandes génériques utilisables avec les listes hiérarchiques

Il est possible de modifier l’apparence d’une liste hiérarchique dans un formulaire à l’aide de plusieurs commandes 4D génériques. Vous devez passer à ces commandes soit le nom d’objet de la liste hiérarchique (en utilisant le paramètre \*), soit son nom de variable (contenant la valeur RefListe) :

- `OBJECT SET FONT`
- `OBJECT SET FONT STYLE`
- `OBJECT SET FONT SIZE`
- `OBJECT SET COLOR`
- `OBJECT SET FILTER`
- `OBJECT SET ENTERABLE`
- `OBJECT SET SCROLLBAR`
- `OBJECT SET SCROLL POSITION`
- `OBJECT SET RGB COLORS`

> Reminder: Except `OBJECT SET SCROLL POSITION`, these commands modify all the representations of the same list, even if you only specify a list via its object name.

## Priorité des commandes de propriété

Certain properties of hierarchical lists (for example, the **Enterable** attribute or the color) can be set in different ways: in the form properties, via a command of the “Object Properties” theme or via a command of the “Hierarchical Lists” theme. Lorsque ces trois moyens sont utilisés pour définir les propriétés d’une liste, l’ordre de priorité suivant est appliqué :

1. Commandes du thème “Liste hiérarchique”
2. Commandes générique de propriété d'objet
3. Propriété formulaire

Ce principe est appliqué quel que soit l’ordre d’appel des commandes. Si une propriété d’élément est modifiée individuellement via une commande de liste hiérarchique, la commande de propriété d’objet équivalente sera sans effet sur cet élément même si elle est appelée ultérieurement. For example, if the color of an item is modified via the `SET LIST ITEM PROPERTIES` command, the `OBJECT SET COLOR` command will have no effect on this item.

## Gestion des éléments par position ou par référence

Vous pouvez généralement travailler de deux manières avec le contenu des listes hiérarchiques : par position ou par référence.

- Lorsque vous travaillez par position, 4D se base sur la position relative des éléments dans la liste affichée à l'écran pour les identifier. Le résultat sera différent selon que certains éléments hiérarchiques sont déployés ou non. A noter qu'en cas de multi-représentation, chaque objet de formulaire comporte sa propre configuration d'éléments contractés/déployés.
- When you work by reference, 4D bases itself on the _itemRef_ ID number of the list items. Chaque élément peut être ainsi désigné, quelle que soit sa position ou son affichage dans la liste hiérarchique.

### Exploiter les numéros de référence des éléments (réfElément)

Each item of a hierarchical list has a reference number (_itemRef_) of the Longint type. Cette valeur est destinée uniquement à votre propre usage : 4D ne fait que la maintenir.

> Attention : Vous pouvez utiliser comme numéro de référence toute valeur de type entier long, sauf la valeur 0. En effet, pour la plupart des commandes de ce thème, la valeur 0 permet de désigner le dernier élément ajouté à la liste.

Voici quelques astuces quant à l'utilisation du numéro de référence unique :

1. Vous n'avez pas besoin d'identifier chaque élément de façon unique (niveau débutant).

   - Premier exemple : vous construisez par programmation un système d'onglets, par exemple, un carnet d'adresses. Comme le système vous retournera le numéro de l'onglet sélectionné, vous n'aurez probablement pas besoin de davantage d'informations. In this case, do not worry about item reference numbers: pass any value (except 0) in the _itemRef_ parameter. Notez que pour un système de carnet d'adresses, vous pouvez prédéfinir une liste A, B,..., Z en mode Développement. Vous pouvez également la créer par programmation afin d'éliminer les lettres pour lesquelles il n'y a pas d'enregistrement.
   - Deuxième exemple : en travaillant avec une base, vous construisez progressivement une liste de mots-clés. You can save this list at the end of each session by using the `SAVE LIST` or `LIST TO BLOB` commands and reload it at the beginning of each new session using the `Load list` or `BLOB to list` commands. Vous pouvez afficher cette liste dans une palette flottante ; lorsque l'utilisateur clique sur un mot-clé de la liste, l'élément choisi est inséré dans la zone saisissable sélectionnée du process de premier plan. The important thing is that you only process the item selected, because the `Selected list items` command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the `GET LIST ITEM` command. Here again, you do not need to identify each item individually; you can pass any value (except 0) in the _itemRef_ parameter.

2. Vous avez besoin d'identifier partiellement les éléments de la liste (niveau intermédiaire).\
   You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the `APPEND TO LIST` command. Dans cet exemple, nous utilisons les numéros de référence des éléments pour stocker des numéros d'enregistrements. Cependant, nous devons pouvoir établir une distinction entre les éléments qui correspondent aux enregistrements [Départements] et ceux qui correspondent aux enregistrements [Employés].

3. Vous avez besoin d'identifier les éléments de la liste de façon unique (niveau avancé).\
   Vous programmez une gestion élaborée de listes hiérarchiques, dans laquelle vous devez absolument pouvoir identifier chaque élément de manière unique à tous les niveaux de la liste. Un moyen simple d'implémenter ce fonctionnement est de maintenir un compteur personnel. Suppose that you create a _hlList_ list using the `APPEND TO LIST` command. At this stage, you initialize a counter _vhlCounter_ to 1. Each time you call `APPEND TO LIST` or `INSERT IN LIST`, you increment this counter `(vhlCounter:=vhlCounter+1)`, and you pass the counter number as the item reference number. L'astuce consiste à ne pas décrémenter le compteur lorsque vous détruisez des éléments — le compteur ne peut qu'augmenter. En procédant ainsi, vous garantissez l'unicité des numéros de référence des éléments. Puisque ces numéros sont des valeurs de type Entier long, vous pouvez ajouter ou insérer plus de deux milliards d'éléments dans une liste qui a été réinitialisée... (si vous manipulez d'aussi grandes quantités d'éléments, cela signifie généralement que vous devriez utiliser une table plutôt qu'une liste.)

> Si vous exploitez les Opérateurs sur les bits, vous pouvez également utiliser les numéros de référence des éléments pour stocker des informations qui peuvent être logées dans un Entier long, c'est-à-dire 2 Entiers, des valeurs de 4 octets ou encore 32 Booléens.

### Quand avez-vous besoin de numéros de référence uniques ?

Dans la plupart des cas, lorsque vous utilisez des listes hiérarchiques pour des besoins d'interface utilisateur, pour lesquels seul l'élément sélectionné (par un clic ou par glisser-déposer) est important, vous n'avez pas besoin d'utiliser les numéros de référence des éléments. Using `Selected list items` and `GET LIST ITEM` you have all you need to deal with the currently selected item. In addition, commands such as `INSERT IN LIST` and `DELETE FROM LIST` allow you to manipulate the list “relatively” with respect to the selected item.

En pratique, vous devez vous préoccuper des numéros de référence d'éléments lorsque vous voulez accéder directement par programmation à n'importe quel élément de la liste, et pas nécessairement à l'élément couramment sélectionné.

## Élément modifiable

You can control whether hierarchical list items can be modified by the user by using the **Alt+click**(Windows) / **Option+click** (macOS) shortcut, or by carrying out a long click on the text of the item.

- Whatever the hierarchical list data source, you can control the whole object with the [Enterable](properties_Entry.md#enterable) property.

- In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the **Modifiable Element** option in the Lists editor. For more information, see [Setting list properties](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).

## Propriétés prises en charge

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable-and-droppable) - [Droppable](properties_Action.md#draggable-and-droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
