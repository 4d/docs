---
id: propertiesHelp
title: Aide
---

## Infobulle

Cette propriété permet d'associer les messages d'aide aux objets actifs de vos formulaires. Ils peuvent être affichés au moment de l'exécution :

![](../assets/en/FormObjects/property_helpTip.png)

> - The display delay and maximum duration of help tips can be controlled using the `Tips delay` and `Tips duration` selectors of the **[SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md)** command.
> - Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the [**SET DATABASE PARAMETER**](../commands-legacy/set-database-parameter.md) command.

Vous pouvez soit :

- désigner une info-bulle existante, préalablement spécifiée dans l'éditeur de [messages d'aide](https://doc.4d.com/4Dv20/4D/20.2/Help-tips.200-6750100.en.html) de 4D.
- ou saisir directement le message d'aide sous forme de chaîne. Cela vous permet de profiter de l'architecture XLIFF. You can enter an XLIFF reference here in order to display a message in the application language (for more information about XLIFF, refer to [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv20/4D/20.2/Appendix-B-XLIFF-architecture.300-6750166.en.html). Vous pouvez également utiliser des références 4D ([voir Utilisation de références en texte statique](https://doc.4d.com/4Dv20/4D/20.2/Using-references-in-static-text.300-6750154.en.html)).

> Sous macOS, l'affichage des messages d'aide n'est pas pris en charge dans les fenêtres de type pop-up.

#### Grammaire JSON

|   Nom   | Type de données | Valeurs possibles                                            |
| :-----: | :-------------: | ------------------------------------------------------------ |
| tooltip |       text      | informations supplémentaires destinées à aider l'utilisateur |

#### Objets pris en charge

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md)  - [Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up menu](picturePopupMenu_overview.md) - [Radio Button](radio_overview.md)

#### Autres fonctionnalités d'aide

Vous pouvez aussi associer des messages d'aides aux objets formulaire de deux autres façons :

- au niveau de la structure de la base (champs uniquement). Dans ce cas, le message d'aide du champ apparaîtra sur les autres formulaires. Pour plus d'informations, référez-vous à la section [Propriétés des champs](https://doc.4d.com/4Dv20/4D/20.2/Field-properties.300-6750280.en.html#3367486).
- en utilisant la commande **[OBJECT SET HELP TIP](../commands-legacy/object-set-help-tip.md)**, pour le process courant.

Lorsque différentes astuces sont associées au même objet à plusieurs emplacements, l'ordre de priorité suivant est appliqué :

1. structure (priorité la plus faible)
2. éditeur de formulaire
3. Commande **[OBJECT SET HELP TIP](../commands-legacy/object-set-help-tip.md)** (haute priorité)

#### Voir également

[Placeholder](properties_Entry.md#placeholder)
