---
id: propertiesPrint
title: Imprimer
---

## Impression cadre

Cette propriété permet de gérer le mode d'impression des objets dont la taille peut varier d'un enregistrement à l'autre en fonction de leur contenu. Ces objets peuvent être imprimés sur une hauteur de taille fixe ou variable. Un cadre de taille fixe provoque l’impression de l’objet dans les limites définies lors de la création de l’objet dans le formulaire. Un cadre de taille variable s’étend si nécessaire lors de l’impression afin d’imprimer l’intégralité de l’objet. A noter que la largeur des objets imprimés en taille variable n'est pas affectée par cette option; seule la hauteur varie automatiquement en fonction du contenu de l'objet.

Vous ne pouvez pas placer deux objets (ou plus) avec une taille variable côte à côte dans un formulaire. Vous pouvez placer des objets de taille fixe à côté d’un objet qui sera imprimé avec une taille variable si l’objet de taille variable est plus long d’au moins une ligne que l’objet placé à son côté et que leurs limites supérieures sont alignées. Si cette condition n’est pas respectée, le contenu des autres champs sera répété pour toute tranche horizontale de l’objet de taille variable.

> The `Print object` and `Print form` commands do not support this property.

Les options d'impression sont les suivantes :

- **Variable** option / **Print Variable Frame** checked: 4D enlarges or reduces the form object area in order to print all the subrecords.

- **Fixed (Truncation)** option / **Print Variable Frame** unchecked: 4D only prints the contents that appear in the object area. Le formulaire n'est imprimé qu'une seule fois et le contenu non imprimé est ignoré.

- **Fixed (Multiple Records)** (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records.

> This property can be set by programming using the `OBJECT SET PRINT VARIABLE FRAME` command.

#### Grammaire JSON

|     Nom    | Type de données | Valeurs possibles                                                                    |
| :--------: | :-------------: | ------------------------------------------------------------------------------------ |
| printFrame |      string     | "fixed", "variable", (sous-formulaire uniquement) "fixedMultiple" |

#### Objets pris en charge

[Input](input_overview.md) - [Subforms](subform_overview.md) (list subforms only) - [4D Write Pro areas](writeProArea_overview.md)
