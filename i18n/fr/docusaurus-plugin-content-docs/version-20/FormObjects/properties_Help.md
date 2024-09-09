---
id: propertiesHelp
title: Aide
---

## Infobulle

Cette propriété permet d'associer les messages d'aide aux objets actifs de vos formulaires. Ils peuvent être affichés au moment de l'exécution :

![](../assets/en/FormObjects/property_helpTip.png)

> - Le délai d'affichage et la durée maximale des messages d'aide peuvent être définis à l'aide des sélecteurs de délai et de durée des conseils de la commande **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)**.
> - Ces infobulles peuvent être désactivées ou activées pour l'application à l'aide du sélecteur de la commande [**SET DATABASE PARAMETER**](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html).

Vous pouvez soit :

- désigner une info-bulle existante, préalablement spécifiée dans l'éditeur de [messages d'aide](https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html) de 4D.
- ou saisir directement le message d'aide sous forme de chaîne. Cela vous permet de profiter de l'architecture XLIFF. Vous pouvez saisir ici une référence XLIFF afin d'afficher un message dans le langage de l'application (pour plus d'informations sur XLIFF, reportez-vous à [l'Annexe B: Architecture XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html). Vous pouvez également utiliser des références 4D ([voir Utilisation de références en texte statique](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).
> Sous macOS, l'affichage des messages d'aide n'est pas pris en charge dans les fenêtres de type pop-up.

#### Grammaire JSON

|   Nom   | Type de données | Valeurs possibles                                            |
|:-------:|:---------------:| ------------------------------------------------------------ |
| tooltip |      text       | informations supplémentaires destinées à aider l'utilisateur |

#### Objets pris en charge

[Bouton](button_overview.md) - [Grille de boutons](buttonGrid_overview.md) - [Check Box](checkbox_overview.md)  - [Liste déroulante](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md#overview) - [Liste hiérarchique ](list_overview.md#overview) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Pied List Box](listbox_overview.md#list-box-footers) - [Bouton image](pictureButton_overview.md) - [Pop-up menu image](picturePopupMenu_overview.md) - [Bouton Radio](radio_overview.md)

#### Autres fonctionnalités d'aide

Vous pouvez aussi associer des messages d'aides aux objets formulaire de deux autres façons :

- au niveau de la structure de la base (champs uniquement). Dans ce cas, le message d'aide du champ apparaîtra sur les autres formulaires. Pour plus d'informations, référez-vous à la section [Propriétés des champs](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- en utilisant la commande **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)**, pour le process courant.

Lorsque différentes astuces sont associées au même objet à plusieurs emplacements, l'ordre de priorité suivant est appliqué :

1. structure (priorité la plus faible)
2. éditeur de formulaire
3. Commande **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** (haute priorité)

#### Voir également

[Placeholder](properties_Entry.md#placeholder)
