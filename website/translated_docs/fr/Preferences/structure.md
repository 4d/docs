---
id: structure
title: Page Structure
---

## Clé primaire

Ces options des préférences permettent de modifier le nom et le type par défaut des champs clés primaires ajoutés automatiquement par 4D lors de la création de nouvelles tables ou via le [Gestionnaire de clés primaires](https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html)).

Les options suivantes sont disponibles :

*   **Nom** ("ID" par défaut) : Définit le nom par défaut des champs clés primaires. Vous pouvez utiliser le nom que vous souhaitez, dans le respect des [règles de nommage des tables standard de 4D](Concepts/identifiers.md#tables-and-fields).
*   **Type** ([Entier long](Concepts/number.md) par défaut) : définit le type par défaut des champs de clé primaire. Vous pouvez choisir le type d'UUID. Dans ce cas, les champs de clé primaire créés par défaut sont de [type Alpha](Concepts/string.md) et les propriétés des champs **Format UUID** et **Auto UUID** sont cochées.

## Éditeur de structure

Ce groupe d'options permet de configurer l'affichage de l'éditeur de structure de 4D.

### Qualité graphique de la structure

Cette option permet de faire varier le niveau de détail graphique de l’éditeur de structure. Par défaut, la qualité est définie sur **Haute**. Vous pouvez sélectionner la qualité Standard afin de privilégier la rapidité d’affichage. L’effet de ce paramétrage est principalement perceptible lors de l’utilisation de la fonction de zoom (cf. paragraphe “Zoom” dans la section [Editeur de structure](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html)).

### Quand un dossier est masqué, son contenu est :

Cette option permet de configurer l’apparence graphique des tables masquées dans l’éditeur de structure, lorsque vous effectuez des sélections par dossier (cf. paragraphe [Filtrage des tables par dossier](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928)). Les options possibles sont Atténué (une ombre subsiste à l’emplacement de la table) et Invisible (la table disparaît entièrement).

