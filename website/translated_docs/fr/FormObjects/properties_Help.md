---
id: propertiesHelp
title: Aide
---

---
## Message d'aide

This property allows associating help messages with active objects in your forms. They can be displayed at runtime:

![](assets/en/FormObjects/property_helpTip.png)

> - The display delay and maximum duration of help tips can be controlled using the `Tips delay` and `Tips duration` selectors of the **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)** command.
> - Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the [**SET DATABASE PARAMETER**](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html) command.

You can either:

- designate an existing help tip, previously specified in the [Help tips](https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html) editor of 4D.
- or enter the help message directly as a string. This allows you to take advantage of XLIFF architecture. You can enter an XLIFF reference here in order to display a message in the application language (for more information about XLIFF, refer to [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html). You can also use 4D references ([see Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).
> In macOS, displaying help tips is not supported in pop-up type windows.


#### Grammaire JSON

|   Nom   | Type de données | Valeurs possibles                                            |
|:-------:|:---------------:| ------------------------------------------------------------ |
| tooltip |      Texte      | informations supplémentaires destinées à aider l'utilisateur |

#### Objets pris en charge

[Bouton](button_overview.md) - [Grille de boutons](buttonGrid_overview.md) - [Check Box](checkbox_overview.md)  - [Liste déroulante](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md#overview) - [Liste hiérarchique ](list_overview.md#overview) - [En-tête List Box](listbox_overview.md#list-box-headers) - [Pied List Box](listbox_overview.md#list-box-footers) - [Bouton image](pictureButton_overview.md) - [Pop-up menu image](picturePopupMenu_overview.md) - [Bouton Radio](radio_overview.md)


#### Other help features

You can also associate help messages with form objects in two other ways:

- at the level of the database structure (fields only). In this case, the help tip of the field is displayed in every form where it appears. For more information, refer to “Help Tips” in [Field properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- using the **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command, for the current process.

When different tips are associated with the same object in several locations, the following priority order is applied:

1. structure level (lowest priority)
2. form editor level
3. **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command (highest priority)


#### Voir également

[Placeholder](properties_Entry.md#placeholder)



