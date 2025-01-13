---
id: propertiesEntry
title: Saisie
---

## Correction orthographique

4D inclut des fonctionnalités de correction orthographique intégrées et personnalisables. Text type [inputs](input_overview.md) can be checked, as well as [4D Write Pro](writeProArea_overview.md) documents.

La propriété Correction orthographique active la vérification orthographique pour chaque objet. Lorsqu'elle est activée, une vérification orthographique est effectuée automatiquement lors de la saisie des données. You can also execute the `SPELL CHECKING` 4D language command for each object to be checked.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| spellcheck | boolean         | true, false       |

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md) - [Zone de saisie](input_overview.md)

---

## Menu contextuel

Permet à l'utilisateur d'accéder à un menu contextuel standard dans l'objet lorsque le formulaire est exécuté.

For a picture type [input](input_overview.md), in addition to standard editing commands (Cut, Copy, Paste and Clear), the menu contains the **Import...** command, which can be used to import a picture stored in a file, as well as the **Save as...** command, which can be used to save the picture to disk. The menu can also be used to modify the display format of the picture: the **Truncated non-centered**, **Scaled to fit** and **Scaled to fit centered prop.** options are provided. The modification of the [display format](properties_Display.md#picture-format) using this menu is temporary; it is not saved with the record.

For a [multi-style](properties_Text.md#multi-style) text type [input](input_overview.md), in addition to standard editing commands, the context menu provides the following commands:

- **Fonts...**: displays the font system dialog box
- **Recent fonts**: displays the names of recent fonts selected during the session. La liste peut stocker jusqu'à 10 polices (au-delà, la dernière police utilisée remplace la plus ancienne). Par défaut, cette liste est vide et l'option n'est pas affichée. You can manage this list using the `SET RECENT FONTS` and `FONT LIST` commands.
- commandes pour les modifications de style prises en charge : police, taille, style, couleur et couleur d'arrière-plan.
  When the user modifies a style attribute via this pop-up menu, 4D generates the `On After Edit` form event.

For a [Web Area](webArea_overview.md), the contents of the menu depend of the rendering engine of the platform. It is possible to control access to the context menu via the [`WA SET PREFERENCE`](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) command.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                            |
| ----------- | --------------- | ------------------------------------------------------------ |
| contextMenu | string          | "automatic" (utilisé si manquant), "none" |

#### Objets pris en charge

[Input](input_overview.md) - [Web Area](webArea_overview.md) - [4D Write Pro areas](writeProArea_overview.md)

---

## Saisissable

L'attribut Saisissable indique si les utilisateurs peuvent entrer des valeurs dans l'objet.

Les objets sont saisissables par défaut. Si vous voulez rendre un champ ou un objet non-saisissable pour ce formulaire, vous pouvez désactiver la propriété Saisissable pour l'objet. Un objet non-saisissable ne fait qu'afficher des données. Vous contrôlez les données avec des méthodes qui utilisent le nom du champ ou de la variable. You can still use the `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` and `On Losing Focus` form events with non-enterable objects. Cela facilite la gestion des menus contextuels personnalisés et vous permet de concevoir des interfaces où vous pouvez glisser-déposer et sélectionner des variables non-saisissables.

Lorsque cette propriété est désactivée, tous les pop-up menus associés à une colonne de listbox via une liste sont désactivés.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles |
| --------- | --------------- | ----------------- |
| enterable | boolean         | true, false       |

#### Objets pris en charge

[4D Write Pro areas](writeProArea_overview.md) - [Check Box](checkbox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Progress Bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Filtres de saisie

Un filtre de saisie contrôle exactement ce que l’utilisateur peut taper au clavier pendant la saisie. Unlike [required lists](properties_RangeOfValues.md#required-list) for example, entry filters operate on a character-by-character basis. Par exemple, si un numéro de composant est toujours constitué de trois lettres suivies de trois chiffres, vous pouvez contraindre la saisie à respecter cette forme. Vous pouvez même contrôler les lettres et les chiffres particuliers.

Un filtre de saisie n’est effectif que pendant la saisie. Il n’a aucun effet sur l’affichage des données une fois que l'objet est désélectionné. En général, les filtres de saisie sont utilisés conjointement avec les [formats d'affichage](properties_Display.md). Le filtre agit pendant la saisie et le format d’affichage assure un affichage approprié de la valeur après sa saisie.

Pendant la saisie de données, un filtre de saisie évalue chaque caractère au moment où il est saisi. Si l’utilisateur tente de taper un caractère invalide (un chiffre à la place d’une lettre, par exemple), 4D refuse la saisie du caractère. Le caractère invalide reste inchangé jusqu'à ce que l'utilisateur saisisse un caractère valide.

Les filtres de saisie peuvent aussi être utilisés pour afficher des caractères de formatage afin d’éviter à l’utilisateur de les taper. Par exemple, un numéro de téléphone français est constitué d’un chiffre de code opérateur suivi d’un chiffre de zone et d’un nombre à huit chiffres groupés par paires. Un format d’affichage peut être utilisé pour afficher le code opérateur entre parenthèses et pour afficher un tiret entre les paires de chiffres. Lorsqu’un tel format est utilisé, l’utilisateur n’a pas besoin de saisir les parenthèses ou le tiret.

### Définition d'un filtre de saisie

La plupart du temps, les [filtres intégrés](#default-entry-filters) de 4D répondront à vos besoins. Toutefois, vous pouvez créer des filtres personnalisés:

- vous pouvez directement entrer une chaîne de définition de filtre
- ou vous pouvez entrer le nom d'un filtre de saisie créé dans l'éditeur de filtres de la Boîte à outils. Les noms des filtres personnalisés que vous créez commencent par une barre verticale (|).

For information about creating entry filters, see [Filter and format codes](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).

### Filtres par défaut

Ce tableau explique chaque filtre présent dans la liste déroulante Filtre de saisie :

| Filtres de saisie                                                                                   | Description                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~A                                                                                  | Permet la saisie de toute lettre, mais les transforme en caractères majuscules.                                                                                                                                               |
| &9                                                                              | Permet tout chiffre.                                                                                                                                                                                                          |
| &A                                                                              | Ne permet que la saisie de lettres majuscules.                                                                                                                                                                                |
| &A                                                                              | Ne permet que la saisie de lettres (minuscules et majuscules).                                                                                                                                             |
| &3                                                                              | Ne permet que la saisie de caractères alphanumériques. Pas de caractères spéciaux.                                                                                                                            |
| ~a##                                                                                | Abréviation du nom de l'état (par exemple, CA). Permet la saisie de deux lettres, mais les transforme en caractères majuscules.                                                            |
| !0&9##/##/##                                                                    | Filtre standard de saisie des dates. Affiche des zéros aux emplacements de saisie. Permet la saisie de tout chiffre.                                                                          |
| !0&9 Day: ## Month: ## Year: ## | Filtre personnalisé de saisie des dates. Affiche des zéros aux emplacements de saisie. Permet la saisie de tout chiffre. Deux entrées après chaque mot.                       |
| !0&9##:##                                                       | Filtre de saisie d’heure. Limité aux heures et aux minutes. Affiche des zéros aux emplacements de saisie. Autorise quatre chiffres, séparés par un deux-points.               |
| !0&9## Hrs ## Mins ## Secs                                                      | Filtre de saisie d’heure. Affiche des zéros aux emplacements de saisie. Autorise deux chiffres avant chaque mot.                                                                              |
| !0&9Hrs: ## Mins: ## Secs: ##   | Filtre de saisie d’heure. Affiche des zéros aux emplacements de saisie. Autorise deux chiffres après chaque mot.                                                                              |
| !0&9##-##-##-##                                                                 | Format de numéro de téléphone local. Affiche des zéros aux emplacements de saisie. Permet la saisie de tout chiffre. Deux entrées, trait d'union, deux entrées, etc.          |
| !_&9(###)!0###-####                     | Numéro de téléphone interurbain. Affiche des tirets de soulignement dans les trois premiers espaces de saisie, puis des zéros.                                                                                |
| !0&9###-###-###                                                                 | Numéro de téléphone interurbain. Affiche des zéros aux emplacements de saisie. Permet la saisie de tout chiffre. Trois entrées, tirets, trois entrées, tiret, quatre entrées. |
| !0&9###-##-###                                                                  | Numéro de sécurité sociale. Affiche des zéros aux emplacements de saisie. Permet la saisie de tout chiffre.                                                                                   |
| ~"A-Z;0-9; ;,;.;-"                                                  | Lettres majuscules et ponctuation. Autorise uniquement les lettres majuscules, chiffres, espaces, virgules, points et traits d'union.                                                                         |
| &"a-z;0-9; ;,;.;-"                                              | Lettres majuscules et minuscules et ponctuation. Autorise les lettres minuscules, chiffres, espaces, virgules, points et traits d'union.                                                                      |
| &"0-9;.;-"                                                      | Nombres. Autorise uniquement les chiffres, les points décimaux et les traits d'union (signe inférieur).                                                                                    |

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                                                          |
| ----------- | --------------- | ------------------------------------------------------------------------------------------ |
| entryFilter | string          | <li>Entry filter code</li> or <li>Entry filter name (filter names start with &#124; )</li> |

#### Objets pris en charge

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste hiérarchique](list_overview.md) - [Zone de saisie](input_overview.md) - [Colonne List Box](listbox_overview.md#list-box-columns)

---

## Focusable

When the **Focusable** property is enabled for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected — except when the [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) option has also been selected.

> An [input object](input_overview.md) is always focusable if it has the [Enterable](#enterable) property.

- ![](../assets/en/FormObjects/property_focusable1.png)<br/>Check box shows focus when selected

- ![](../assets/en/FormObjects/property_focusable2.png)<br/>Check box is selected but cannot show focus|

When the **Focusable** property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles |
| --------- | --------------- | ----------------- |
| focusable | boolean         | true, false       |

#### Objets pris en charge

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md)

---

## Configuration du clavier

This property associates a specific keyboard layout to an [input object](input_overview.md). Par exemple, dans une application internationale, si un formulaire contient un champ dont le contenu doit être saisi en caractères grecs, vous pouvez associer la configuration de clavier "grec" à ce champ. De cette façon, lors de la saisie des données, la configuration du clavier est automatiquement modifiée lorsque ce champ a le focus.

Par défaut, la saisie utilise la configuration courante du clavier.

> You can also set and get the keyboard dynamically using the `OBJECT SET KEYBOARD LAYOUT` and `OBJECT Get keyboard layout` commands.

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles                                                                            |
| --------------- | --------------- | -------------------------------------------------------------------------------------------- |
| keyboardDialect | text            | Code de langue, par exemple "ar-ma" ou "cs". Voir RFC3066, ISO639 et ISO3166 |

#### Objets pris en charge

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Multilignes

Cette propriété est disponible pour les [objets de zone de saisie](input_overview.md) contenant les expressions de type texte et les champs de type alpha et texte. Elle peut prendre trois valeurs : Oui, Non, Automatique (par défaut).

#### Automatique

- Dans les zones mono-lignes, les mots situés en fin de ligne sont tronqués et il n’y a pas de retours à la ligne.
- In multiline inputs, 4D carries out automatic line returns:\
  ![](../assets/en/FormObjects/multilineAuto.png)

#### Non

- Dans les zones mono-lignes, les mots situés en fin de ligne sont tronqués et il n’y a pas de retours à la ligne.
- Il n’y a aucun retour à la ligne : le texte est toujours affiché sur une seule ligne. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified:\
  ![](../assets/en/FormObjects/multilineNo.png)

#### Oui

Lorsque cette valeur est sélectionnée, la propriété est gérée par l'option [Retour à la ligne](properties_Display.md#wordwrap).

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles                                                      |
| --------- | --------------- | ---------------------------------------------------------------------- |
| multiline | text            | "yes", "no", "automatic" (par défaut si non défini) |

#### Objets pris en charge

[Input](input_overview.md)

---

## Texte exemple

4D peut afficher un texte d'exemple dans les champs de vos formulaires.

Le texte d'exemple apparaît en filigrane dans un champ, fournissant une aide, une indication ou un exemple pour la saisie des données. Ce texte disparaît dès que l'utilisateur entre un caractère dans la zone :

![](../assets/en/FormObjects/property_placeholder.png)

Le texte d'exemple est affiché à nouveau si le contenu du champ est effacé.

Un texte exemple peut être affiché pour les types de données suivants :

- chaîne (texte ou alpha)
- date and time when the **Blank if null** property is enabled.

Vous pouvez utiliser une référence XLIFF sous la forme ":xliff:resname" en tant que texte exemple, par exemple :

:xliff:PH_Lastname

Vous passez seulement la référence dans le champ "Texte exemple" ; il n'est pas possible de combiner une référence avec du texte statique.

> You can also set and get the placeholder text by programming using the [OBJECT SET PLACEHOLDER](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html) and [OBJECT Get placeholder](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html) commands.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                                                     |
| ----------- | --------------- | ------------------------------------------------------------------------------------- |
| placeholder | string          | Texte à afficher (grisé) lorsque l'objet ne contient aucune valeur |

#### Objets pris en charge

[Combo Box](comboBox_overview.md) - [Zone de saisie](input_overview.md)

#### Voir également

[Help tip](properties_Help.md)

---

## Sélection toujours visible

Cette propriété conserve la sélection visible dans l'objet après qu'il ait perdu le focus. This makes it easier to implement interfaces that allow the text style to be modified (see [Multi-style](properties_Text.md#multi-style)).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| showSelection | boolean         | true, false       |

#### Objets pris en charge

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Equivalent clavier

This property allows setting special meaning keys (keyboard shortcuts) for [buttons](button_overview.md), [radio buttons](radio_overview.md), and [checkboxes](checkbox_overview.md). Ils permettent à l'utilisateur d'actionner l'objet à l'aide du clavier au lieu d'avoir à utiliser la souris.

You can configure this option by clicking the [...] button in the Shortcuts property in the Property List.

![](../assets/en/FormObjects/property_shortcut.png)

> Vous pouvez également assigner un raccourci à une commande de menu personnalisée. S'il y a un conflit entre deux raccourcis, l'objet actif a la priorité. For more information about associating shortcuts with menus, refer to [Setting menu properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html).

To view a list of all the shortcuts used in the 4D Design environment, see the [Shortcuts Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html) in the Preferences dialog box.

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles                                                                                                                                                                                                                                         |
| --------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shortcutAccel   | boolean         | true, false (Ctrl Windows/Command macOS)                                                                                                                                                                                               |
| shortcutAlt     | boolean         | true, false                                                                                                                                                                                                                                               |
| shortcutCommand | boolean         | true, false                                                                                                                                                                                                                                               |
| shortcutControl | boolean         | true, false (macOS Control)                                                                                                                                                                                                            |
| shortcutShift   | boolean         | true, false                                                                                                                                                                                                                                               |
|                 |                 |                                                                                                                                                                                                                                                           |
| shortcutKey     | string          | <li>any character key: "a", "b"...</li><li>[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"</li> |

#### Objets pris en charge

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Radio Button](radio_overview.md)

---

## Saisie sur clic unique

Active le passage direct en mode édition dans les list box.

Lorsque cette option est activée, les cellules de list box basculent en mode édition après un simple clic utilisateur, indépendamment du fait que la zone de list box ait été sélectionnée préalablement. Note that this option allows cells to be edited even when the list box [selection mode](properties_ListBox.md#selection-mode) is set to "None".

Lorsque cette option n'est pas activée, les utilisateurs doivent d'abord sélectionner la ligne de la cellule puis cliquer sur la cellule pour modifier son contenu.

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles |
| --------------- | --------------- | ----------------- |
| singleClickEdit | boolean         | true, false       |

#### Objets pris en charge

[List Box](listbox_overview.md)
