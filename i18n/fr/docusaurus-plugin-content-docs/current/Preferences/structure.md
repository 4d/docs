---
id: structure
title: Page Structure
---

## Clé primaire

These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the [Primary key manager](https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html)).

Les options suivantes sont disponibles :

- **Name** ("ID" by default): Sets the default name of primary key fields. You can use any name you want, as long as it respects the [4D naming rules](Concepts/identifiers.md#tables-and-fields).
- **Type** ([Longint](Concepts/dt_number.md) by default): Sets the default type of primary key fields. Vous pouvez choisir le type UUID. In this case, the primary key fields created by default are of the [Alpha type](Concepts/dt_string.md) and have the **UUID Format** and **Auto UUID** field properties checked.

## Éditeur de structure

Ce groupe d'options permet de configurer l'affichage de l'éditeur de structure de 4D.

### Qualité graphique de la structure

Cette option permet de faire varier le niveau de détail graphique de l’éditeur de structure. By default, the quality is set to **High**. Vous pouvez sélectionner la qualité Standard afin de privilégier la rapidité d’affichage. The effect of this setting is mainly perceptible when using the zoom function (see the "Zoom" paragraph in [Structure editor](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html)).

### Quand un dossier est masqué, son contenu est :

This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see [Highlight/dim tables by folder](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928)). Les options possibles sont Atténué (une ombre subsiste à l’emplacement de la table) et Invisible (la table disparaît entièrement).
