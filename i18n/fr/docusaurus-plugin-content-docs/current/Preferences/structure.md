---
id: structure
title: Page Structure
---

## Clé primaire

These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the [Primary key manager](https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html)).

Les options suivantes sont disponibles :

- **Nom** ("ID" par défaut) : Définit le nom par défaut des champs clés primaires. Vous pouvez utiliser le nom que vous souhaitez, dans le respect des [règles de nommage des tables standard de 4D](Concepts/identifiers.md#tables-and-fields).
- **Type** ([Entier long](Concepts/dt_number.md) par défaut) : Définit le type des champs clés primaires par défaut. Vous pouvez choisir le type UUID. Dans ce cas, les champs clés primaires créés par défaut seront de [type Alpha](Concepts/dt_string.md) et auront les propriétés **UUID Format** et **Auto UUID** cochées.

## Éditeur de structure

Ce groupe d'options permet de configurer l'affichage de l'éditeur de structure de 4D.

### Qualité graphique de la structure

Cette option permet de faire varier le niveau de détail graphique de l’éditeur de structure. Par défaut, la qualité est définie sur **Haute**. Vous pouvez sélectionner la qualité Standard afin de privilégier la rapidité d’affichage. L’effet de ce paramétrage est principalement perceptible lors de l’utilisation de la fonction de zoom (cf. paragraphe “Zoom” dans la section [Editeur de structure](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html)).

### Quand un dossier est masqué, son contenu est :

Cette option permet de configurer l’apparence graphique des tables masquées dans l’éditeur de structure, lorsque vous effectuez des sélections par dossier (cf. paragraphe [Filtrage des tables par dossier](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-edit Les options possibles sont Atténué (une ombre subsiste à l’emplacement de la table) et Invisible (la table disparaît entièrement).
