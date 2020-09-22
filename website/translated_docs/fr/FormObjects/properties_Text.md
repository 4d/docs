---
id: propertiesText
title: Texte
---

---
## Autoriser sélecteur police/couleur

Lorsque cette propriété est activée, les commandes [OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html) et [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html) peuvent être appelées pour afficher les fenêtres de sélecteur de la police système et de couleurs. A l'aide de ces fenêtres, les utilisateurs peuvent modifier la police ou la couleur d'un objet formulaire dont le focus est accessible directement au clic. Lorsque cette propriété est désactivée (par défaut), les commandes d'ouverture du sélecteur ne produisent aucun effet.


#### Grammaire JSON

| Propriété            | Type de données | Valeurs possibles        |
| -------------------- | --------------- | ------------------------ |
| allowFontColorPicker | boolean         | false (par défaut), true |

#### Objets pris en charge

[Input](input_overview.md)

---
## Gras

Le texte sélectionné est plus foncé et plus épais.

Vous pouvez également définir cette propriété à l'aide de la commande [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html).
> Ceci est un texte normal.<br> **Ceci est un texte en gras.**

#### Grammaire JSON

| Propriété  | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| fontWeight | Texte           | "normal", "bold"  |

#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Bouton Radio](radio_overview.md) - [Zone de texte](text.md)


---
## Italique

Le texte sélectionné est légèrement penché vers la droite.

Vous pouvez également définir cette propriété à l'aide de la commande [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html).
> Ceci est un texte normal.<br> *Ceci est un texte en italique.*

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles  |
| --------- | --------------- | ------------------ |
| fontStyle | string          | "normal", "italic" |

#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Bouton Radio](radio_overview.md) - [Zone de texte](text.md)




---
## Souligné
Une ligne est placée sous le texte.
> Ceci est un texte normal.<br> <span style="text-decoration:underline">Ceci est un texte souligné.</span>.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles     |
| -------------- | --------------- | --------------------- |
| textDecoration | string          | "normal", "underline" |

#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Bouton Radio](radio_overview.md) - [Zone de texte](text.md)






---
## Police

Cette propriété vous permet d'indiquer le **thème de la police** ou la **famille de police** utilisé(e) dans l'objet.
> Les propriétés du **thème** et de la **famille** de police sont mutuellement exclusives. Un thème de police prend en charge les attributs de police, y compris la taille. Une famille de polices vous permet de définir le nom de la police, sa taille et sa couleur.


### Thème de police

La propriété de thème de police désigne un nom de style automatique. Les styles automatiques déterminent de manière dynamique la famille de police, la taille et la couleur de police à utiliser pour l'objet, en fonction des paramètres système. Ces paramètres dépendent de :

- la plateforme,
- la langue du système,
- et le type d'objet de formulaire.

Avec le thème de police, vous avez la garantie que les titres s'affichent toujours conformément aux normes de l'interface du système. Cependant, leur taille peut varier d'une machine à l'autre.

Trois thèmes de polices sont disponibles :
- **normal** : style automatique, appliqué par défaut à tout nouvel objet créé dans l'éditeur de formulaires.
- Les thèmes de polices **principaux** et **supplémentaires** ne sont pris en charge uniquement par les [zones de texte](text.md) et les [zones de saisie](input_overview.md). Ces thèmes sont principalement destinés à la conception de boîtes de dialogue. Ils font référence aux styles de police utilisés respectivement pour le texte principal et les informations supplémentaires dans vos fenêtres d'interface. Voici les boîtes de dialogue typiques (macOS et Windows) utilisant ces thèmes de polices :

![](assets/en/FormObjects/FontThemes.png)

> Les thèmes de polices gèrent la police ainsi que sa taille et sa couleur. You can apply custom style properties (Bold, Italic or Underline) without altering its functioning.



#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles              |
| --------- | --------------- | ------------------------------ |
| fontTheme | string          | "normal", "main", "additional" |


#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Bouton Radio](radio_overview.md) - [Zone de texte](text.md)




### Famille de police

Il existe deux types de noms de familles de polices :

* *family-name :* Le nom d'une famille de polices, comme "times", "courier", "arial", etc.
* *generic-family *: Le nom d'une famille générique, comme "serif", "sans-serif", "cursive", "fantasy", "monospace".

Vous pouvez la définir à l'aide de la commande [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) .
> <span style="font-family:Times New Roman; font-size:20pt"> Ceci est une police Times New Roman.</span><br> <span style="font-family:Calibri; font-size:20pt"> Ceci est une police Calibri.</span><br> <span style="font-family:Papyrus; font-size:20pt"> Ceci est une police Papyrus.</span>

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles               |
| ---------- | --------------- | ------------------------------- |
| fontFamily | string          | Nom d'une famille de police CSS |
> 4D recommande d'utiliser uniquement les polices de [sécurité Web](https://www.w3schools.com/cssref/css_websafe_fonts.asp).

#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Bouton Radio](radio_overview.md) - [Zone de texte](text.md)



---
## Taille

Permet de définir en points la taille de police de l'objet.

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                  |
| -------- | --------------- | -------------------------------------------------- |
| fontSize | integer         | Taille de la police en points. Valeur minimale : 0 |

#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Bouton Radio](radio_overview.md) - [Zone de texte](text.md)


---
## Couleur de la police

Désigne la couleur de la police.

> Cette propriété définit également la couleur de [bordure](#border-line-style-dotted-line-type) (le cas échéant) de l'objet lorsque le style "plein" ou "pointillé" est utilisé.

The color can be specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.


#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                         |
| ------ | --------------- | ----------------------------------------- |
| stroke | string          | any css value, "transparent", "automatic" |

#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Pied List Box](listbox_overview.md#list-box-footers) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Indicateurs de progression](progressIndicator.md) - [Règle](ruler.md) - [Bouton Radio](radio_overview.md) - [Zone de texte](text.md)



---

## Expression couleur police

`List box de type collection/sélection d'entité`

Utilisée pour appliquer une couleur de police personnalisée à chaque ligne de la list box. Vous devez utiliser des valeurs de couleur RVB. Pour plus d'informations à ce sujet, reportez-vous à la description de la commande [OBJECT SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-RGB-COLORS.301-4311385.en.html) dans le manuel Langage 4D.

Vous devez saisir une expression ou une variable (les variables de type tableau ne peuvent pas être utilisées). L'expression ou la variable sera évaluée pour chaque ligne affichée. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme.

Vous pouvez également définir cette propriété à l'aide de la commande `LISTBOX SET PROPERTY` avec la constante `lk font color expression`.
> Cette propriété peut également être définie à l'aide d'une [expression Meta Info](properties_Text.md#meta-info-expression).

L'exemple suivant utilise un nom de variable : entrez *CompanyColor* pour l'**expression couleur police** et, dans la méthode formulaire, entrez le code suivant :

```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
```

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles         |
| --------------- | --------------- | ------------------------- |
| rowStrokeSource | string          | Expression couleur police |

#### Objets pris en charge

[List Box](listbox_overview.md#overview)

---
## Expression style

`List box de type collection/sélection d'entité`

Utilisé pour appliquer un style de police personnalisé à chaque ligne de list box ou de chaque cellule de la colonne.

Vous devez saisir une expression ou une variable (les variables de type tableau ne peuvent pas être utilisées). L'expression ou variable sera évaluée pour chaque ligne affichée (si elle s'applique à la list box) ou chaque cellule affichée (si elle s'applique à la list box). Vous pouvez utiliser les constantes du thème [Styles de caractères](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html).

Exemple :

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

Vous pouvez également définir cette propriété à l'aide de la commande `LISTBOX SET PROPERTY` avec la constante `lk font style expression`.
> Cette propriété peut également être définie à l'aide d'une [expression Meta Info](properties_Text.md#meta-info-expression).


#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                               |
| -------------- | --------------- | ----------------------------------------------- |
| rowStyleSource | string          | Style expression to evaluate for each row/cell. |

#### Objets pris en charge

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)






---
## Alignement horizontal

Horizontal location of text within the area that contains it.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles                                 |
| --------- | --------------- | ------------------------------------------------- |
| textAlign | string          | "automatic", "right", "center", "justify", "left" |

#### Objets pris en charge

[Group Box](groupBox.md) - [List Box](listbox_overview.md#overview) - [Colonne List Box](listbox_overview.md#list-box-columns) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Pied List Box](listbox_overview.md#list-box-footers) - [Zone de texte](text.md)


---
## Alignement vertical

Vertical location of text within the area that contains it.

The **Default** option (`automatic` JSON value) sets the alignment according to the type of data found in each column:
- `bottom` for all data (except pictures) and
- `top` for picture type data.

This property can also be handled by the [OBJECT Get vertical alignment](https://doc.4d.com/4Dv18/4D/18/OBJECT-Get-vertical-alignment.301-4505442.en.html) and [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-VERTICAL-ALIGNMENT.301-4505430.en.html) commands.


#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                      |
| ------------- | --------------- | -------------------------------------- |
| verticalAlign | string          | "automatic", "top", "middle", "bottom" |

#### Objets pris en charge

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers)









---
## Meta Info expression
`Collection or entity selection type list boxes`

Specifies an expression or a variable which will be evaluated for each row displayed. It allows defining a whole set of row text attributes. You must pass an **object variable** or an **expression that returns an object**. The following properties are supported:

| Nom de propriété    | Type    | Description                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke              | string  | Font color. Any CSS color (ex: "#FF00FF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                      |
| border-style        | string  | Background color. Any CSS color (ex: "#F00FFF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                |
| fontStyle           | string  | "normal","italic"                                                                                                                                                                                                                                                                                                                                                          |
| fontWeight          | string  | "normal","bold"                                                                                                                                                                                                                                                                                                                                                            |
| textDecoration      | string  | "normal","underline"                                                                                                                                                                                                                                                                                                                                                       |
| unselectable        | boolean | Designates the corresponding row as not being selectable (*i.e.*, highlighting is not possible). Enterable areas are no longer enterable if this option is enabled unless the "Single-Click Edit" option is also enabled. Controls such as checkboxes and lists remain functional. This setting is ignored if the list box selection mode is "None". Default value: False. |
| disabled            | boolean | Disables the corresponding row. Enterable areas are no longer enterable if this option is enabled. Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. Default value: False.                                                                                                                                                                          |
| cell.\<columnName> | object  | Allows applying the property to a single column. Pass in \<columnName> the object name of the list box column. **Note**: "unselectable" and "disabled" properties can only be defined at row level. They are ignored if passed in the "cell" object                                                                                                                       |

> Style settings made with this property are ignored if other style settings are already defined through expressions (*i.e.*, [Style Expression](#style-expression), [Font Color Expression](#font-color-expression), [Background Color Expression](#background-color-expression)).

The following example uses the *Color* project method.

In the form method, write the following code:

```4d
//méthode formulaire
Case of
  :(Form event=On Load)
   Form.meta:=New object
End case
```


In the *Color* method, write the following code:

```4d
//Color method
//Sets font color for certain rows and the background color for a specific column:
C_OBJECT($0)
If(This.ID>5) //ID is an attribute of collection objects/entities
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Column2";New object("fill";"black"))
Else
  Form.meta.stroke:="orange"
End if
$0:=Form.meta
```
> See also the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command.



#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                |
| ---------- | --------------- | ------------------------------------------------ |
| metaSource | string          | Object expression to evaluate for each row/cell. |

#### Objets pris en charge

[List Box](listbox_overview.md)








---
## Multistyle

This property enables the possibility of using specific styles in the selected area. When this option is checked, 4D interprets any \<SPAN> HTML tags found in the area. </p> 

<p spaces-before="0">
  By default, this option is not enabled.
</p>



<h4 spaces-before="0">
  Grammaire JSON
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Nom
    </th>
    
    <th>
      Type de données
    </th>
    
    <th>
      Valeurs possibles
    </th>
  </tr>
  
  <tr>
    <td>
      styledText
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      true, false
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objets pris en charge
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md#list-box-columns">List Box Column</a> - <a href="input_overview.md">Input</a>
</p>








<hr />
<h2 spaces-before="0">
  Orientation
</h2>

<p spaces-before="0">
  Modifies the orientation (rotation) of a text area. Text areas can be rotated by increments of 90°. Each orientation value is applied while keeping the same lower left starting point for the object:
</p>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Orientation value
    </th>
    
    <th>
      Résultat
    </th>
  </tr>
  
  <tr>
    <td>
      0 (default)
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation1.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      90
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation2.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      180
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation3.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      270
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation4.png" alt="" />
    </td>
  </tr>
</table>

<p spaces-before="0">
  In addition to <a href="text.md">static text areas</a>, <a href="input_overview.md">input</a> text objects can be rotated when they are non-<a href="properties_Entry.md#enterable">enterable</a>. When a rotation property is applied to an input object, the enterable property is removed (if any). This object is then excluded from the entry order.
</p>




<h4 spaces-before="0">
  Grammaire JSON
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Nom
    </th>
    
    <th>
      Type de données
    </th>
    
    <th>
      Valeurs possibles
    </th>
  </tr>
  
  <tr>
    <td>
      textAngle
    </td>
    
    <td>
      number
    </td>
    
    <td>
      0, 90, 180, 270
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objets pris en charge
</h4>

<p spaces-before="0">
  <a href="input_overview.md">Zone de saisie</a> (non saisissable) - <a href="text.md">Zone de texte</a>
</p>





<hr />
<h2 spaces-before="0">
  Tableau couleurs de police
</h2>

<p spaces-before="0">
  <code>List box de type tableau</code>
</p>

<p spaces-before="0">
  Allows setting a custom font color to each row of the list box or cell of the column.
</p>

<p spaces-before="0">
  The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the <a href="https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html">SET RGB COLORS</a> theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.
</p>

<h4 spaces-before="0">
  Grammaire JSON
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Nom
    </th>
    
    <th>
      Type de données
    </th>
    
    <th>
      Valeurs possibles
    </th>
  </tr>
  
  <tr>
    <td>
      rowStrokeSource
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Nom d'un tableau entier long
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objets pris en charge
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md">List Box</a> - <a href="listbox_overview.md#list-box-columns">List Box Column</a>
</p>





<hr />
<h2 spaces-before="0">
  Tableau de styles
</h2>

<p spaces-before="0">
  <code>List box de type tableau</code>
</p>

<p spaces-before="0">
  Allows setting a custom font style to each row of the list box or each cell of the column.
</p>

<p spaces-before="0">
  The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. To fill the array (using a method), use the constants of the <a href="https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html">Font Styles</a> theme. You can add constants together to combine styles. If you want the cell to inherit the style defined at the higher level, pass the value -255 to the corresponding array element.
</p>


<h4 spaces-before="0">
  Grammaire JSON
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Nom
    </th>
    
    <th>
      Type de données
    </th>
    
    <th>
      Valeurs possibles
    </th>
  </tr>
  
  <tr>
    <td>
      rowStyleSource
    </td>
    
    <td>
      string
    </td>
    
    <td>
      The name of a longint array.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objets pris en charge
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md#overview">List Box</a> - <a href="listbox_overview.md#list-box-columns">Colonne List Box</a>
</p>



<hr />
<h2 spaces-before="0">
  Stocker les balises par défaut
</h2>

<p spaces-before="0">
  This property is only available for a <a href="#multi-style">Multi-style</a> input area. When this property is enabled, the area will store the style tags with the text, even if no modification has been made. In this case, the tags correspond to the default style. When this property is disabled, only modified style tags are stored.
</p>

<p spaces-before="0">
  For example, here is a text that includes a style modification:
</p>

<p spaces-before="0">
  <img src="assets/en/FormObjects/tagStyle1.png" alt="" />
</p>

<p spaces-before="0">
  When the property is disabled, the area only stores the modification. The stored contents are therefore:
</p>

<pre><code>What a &lt;SPAN STYLE="font-size:13.5pt"&gt;beautiful&lt;/SPAN&gt; day!
</code></pre>

<p spaces-before="0">
  When the property is enabled, the area stores all the formatting information. The first generic tag describes the default style then each variation is the subject of a pair of nested tags. The contents stored in the area are therefore:
</p>

<pre><code>&lt;SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF"&gt;What a &lt;SPAN STYLE="font-size:13.5pt"&gt;beautiful&lt;/SPAN&gt; day!&lt;/SPAN&gt;
</code></pre>

<h4 spaces-before="0">
  Grammaire JSON
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Nom
    </th>
    
    <th>
      Type de données
    </th>
    
    <th>
      Valeurs possibles
    </th>
  </tr>
  
  <tr>
    <td>
      storeDefaultStyle
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      true, false (par défaut).
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objets pris en charge
</h4>

<p spaces-before="0">
  <a href="input_overview.md">Input</a>
</p>





















