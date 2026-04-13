---
id: form-theme
title: FORM theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme** : Text<!-- END REF-->

<!--REF #_command_.FORM theme.Params-->

<div class="no-index">

| Paramètres | Type |                             | Description                                                                                                    |
| ---------- | ---- | --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Résultat   | Text | &#8592; | Thème utilisé par le formulaire courant : "Classic" ou "FluentUI" (Windows) |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21 R2   | Ajout         |

</details>
</div>

## Description

<!--REF #_command_.FORM theme.Summary-->La commande **FORM theme** renvoie le thème Windows réellement rendu pour le formulaire courant : "Classic" ou "FluentUI".<!-- END REF-->

Le thème de rendu des formulaires Windows peut être défini au [niveau de l'application](../settings/interface.md#use-fluent-ui-on-windows) et/ou au [niveau du formulaire](../FormEditor/properties_FormProperties.md#form-theme-on-windows) (où il peut être hérité ou défini explicitement), et dépend également de la [disponibilité de bibliothèques Microsoft spécifiques](../FormEditor/forms.md#requirements) sur la machine courante au moment de l'exécution. Cette commande vous permet de savoir quel thème de formulaire est en cours d'utilisation.

S'il n'y a pas de formulaire courant ou si la commande est exécutée sous macOS, **FORM theme** renvoie une chaîne vide.

## Voir également

[Rendu Fluent UI](../FormEditor/forms.md#fluent-ui-rendering)

## Propriétés

|                    |      |
| ------------------ | ---- |
| Numéro de commande | 1832 |
| Thread safe        | non  |


