---
id: structure
title: Page Structure
---

## Clé primaire

These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the [Primary key manager](https://doc.4d.com/4Dv20/4D/20.2/Primary-key-manager.300-6750292.en.html)).

Les options suivantes sont disponibles :

- **Nom** ("ID" par défaut) : Définit le nom par défaut des champs clés primaires. Vous pouvez utiliser le nom que vous souhaitez, dans le respect des [règles de nommage des tables standard de 4D](Concepts/identifiers.md#tables-and-fields).
- **Type** ([Entier long](Concepts/dt_number.md) par défaut) : Définit le type des champs clés primaires par défaut. Vous pouvez choisir le type UUID. Dans ce cas, les champs clés primaires créés par défaut seront de [type Alpha](Concepts/dt_string.md) et auront les propriétés **UUID Format** et **Auto UUID** cochées.

## Éditeur de structure

Ce groupe d'options permet de configurer l'affichage de l'éditeur de structure de 4D.

### Qualité graphique de la structure

Cette option permet de faire varier le niveau de détail graphique de l’éditeur de structure. Par défaut, la qualité est définie sur **Haute**. Vous pouvez sélectionner la qualité Standard afin de privilégier la rapidité d’affichage. L’effet de ce paramétrage est principalement perceptible lors de l’utilisation de la fonction de zoom (cf. paragraphe “Zoom” dans la section [Editeur de structure](https://doc.4d.com/4Dv20/4D/20.2/Structure-editor.300-6750284.en.html#105667)).

### Quand un dossier est masqué, son contenu est :

This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see [Highlight/dim tables by folder](https://doc.4d.com/4Dv20/4D/20.2/Structure-editor.300-6750284.en.html#4592928)). Les options possibles sont Atténué (une ombre subsiste à l’emplacement de la table) et Invisible (la table disparaît entièrement).

