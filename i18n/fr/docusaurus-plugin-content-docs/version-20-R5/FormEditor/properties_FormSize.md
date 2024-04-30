---
id: formSize
title: Taille du formulaire
---

4D lets you set the size of both the form and the [window](properties_WindowSize.md). Ces propriétés sont interdépendantes et l'interface de votre application résulte de leur interaction.

Size options depend on the value of the **Size based on** option.

---

## Taille basée sur

- **Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor Margin**](#hor-margin) and [**Vert Margin**](#vert-margin) fields.

  You can choose this option when you want to use active objects placed in an offscreen area (_i.e._, outside the bounding rectangle of the window) with an automatic size window. Grâce à cette option, la présence de ces objets ne modifiera pas la taille de la fenêtre.

- **Set Size**: The size of the form will be based on what you enter (in pixels) in the [**Width**](#width) and [**Height**](#height) fields.

- `<object name>`: The size of the form will be based on the position of the selected form object. Par exemple, si vous choisissez un objet qui est placé dans la partie inférieure droite de la zone à afficher, la taille du formulaire sera constituée d'un rectangle dont le coin supérieur gauche sera l'origine du formulaire et le coin inférieur droit correspondra à celle de l'objet sélectionné, plus les éventuelles valeurs de marge.

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](#width) fields are available.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                                              |
| -------------- | --------------- | -------------------------------------------------------------- |
| formSizeAnchor | string          | Nom de l'objet à utiliser pour définir la taille du formulaire |

---&#x20;

## Hauteur

Height of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles  |
| ------ | --------------- | ------------------ |
| height | number          | valeur entier long |

---&#x20;

## Marge hor.

Value to add (in pixels) to the right margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`

Cette valeur détermine également les marges droites des formulaires utilisés dans l'éditeur d'étiquettes.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles  |
| ----------- | --------------- | ------------------ |
| rightMargin | number          | valeur entier long |

---

## Marge hor.

Value to add (in pixels) to the bottom margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`.

Cette valeur détermine également les marges supérieures des formulaires utilisés dans l'éditeur d'étiquettes.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles  |
| ------------ | --------------- | ------------------ |
| bottomMargin | number          | valeur entier long |

---&#x20;

## Largeur

Width of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles  |
| ----- | --------------- | ------------------ |
| width | number          | valeur entier long |
