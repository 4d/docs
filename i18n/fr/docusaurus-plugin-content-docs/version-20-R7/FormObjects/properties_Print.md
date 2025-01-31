---
id: propertiesPrint
title: Impression
---

## Impression cadre

Cette propriété permet de gérer le mode d'impression des objets dont la taille peut varier d'un enregistrement à l'autre en fonction de leur contenu. Ces objets peuvent être imprimés sur une hauteur de taille fixe ou variable. Un cadre de taille fixe provoque l’impression de l’objet dans les limites définies lors de la création de l’objet dans le formulaire. Un cadre de taille variable s’étend si nécessaire lors de l’impression afin d’imprimer l’intégralité de l’objet. A noter que la largeur des objets imprimés en taille variable n'est pas affectée par cette option; seule la hauteur varie automatiquement en fonction du contenu de l'objet.

Vous ne pouvez pas placer deux objets (ou plus) avec une taille variable côte à côte dans un formulaire. Vous pouvez placer des objets de taille fixe à côté d’un objet qui sera imprimé avec une taille variable si l’objet de taille variable est plus long d’au moins une ligne que l’objet placé à son côté et que leurs limites supérieures sont alignées. Si cette condition n’est pas respectée, le contenu des autres champs sera répété pour toute tranche horizontale de l’objet de taille variable.

> Les commandes `Print object` et `Print form` ne sont pas compatibles avec cette option.

Les options d'impression sont les suivantes :

- L'option **Variable** / **Impression taille variable** cochée : 4D agrandit ou réduit la zone de l'objet du formulaire afin d'imprimer tous les sous-enregistrements.

- L'option **Fixe (Tronqué)** / **Impression taille variable** non cochée : 4D imprime uniquement le contenu qui apparaît dans la zone de l'objet. Le formulaire n'est imprimé qu'une seule fois et le contenu non imprimé est ignoré.

- **Fixe (Enregistrements multiples)** (sous-formulaires uniquement) : la taille initiale de la zone de sous-formulaire est conservée mais 4D imprime le formulaire plusieurs fois afin d'imprimer tous les enregistrements.

> Cette propriété peut être définie par programmation à l'aide de la commande `OBJECT SET PRINT VARIABLE FRAME`.

#### Grammaire JSON

|     Nom    | Type de données | Valeurs possibles                                                                    |
| :--------: | :-------------: | ------------------------------------------------------------------------------------ |
| printFrame |      string     | "fixed", "variable", (sous-formulaire uniquement) "fixedMultiple" |

#### Objets pris en charge

[Zone de saisie](input_overview.md) - [Sous-formulaires](subform_overview.md) (sous-formulaires liste uniquement) - [Zones 4D Write Pro](writeProArea_overview.md)
