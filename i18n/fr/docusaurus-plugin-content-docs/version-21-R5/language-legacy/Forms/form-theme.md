---
id: form-theme
title: FORM theme
slug: /commands/form-theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme** : Text<!-- END REF-->
<!--REF #_command_.FORM theme.Params-->
<div class="no-index">

| Paramètres | Type |    | Description  |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Thème utilisé par le formulaire courant : <ul><li>Windows: "Classic" ou "FluentUI"</li><li>macOS: "Classic" ou "LiquidGlass"</li></ul>|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Prise en charge de LiquidGlass sous macOS|
|21 R2|Ajout|

</details>
</div>


## Description 

<!--REF #_command_.FORM theme.Summary-->La commande **FORM theme** renvoie le thème d'interface de l'OS rendu pour le formulaire courant : "FluentUI" (Windows), "LiquidGlass" (macOS) ou "Classic" (toutes plates-formes).<!-- END REF-->

S'il n'y a pas de formulaire courant, **FORM theme** renvoie une chaîne vide.

### Windows

Le thème de rendu des formulaires Windows peut être défini au [niveau de l'application](../settings/interface.md#use-fluent-ui-on-windows) et/ou au [niveau du formulaire](../FormEditor/properties_FormProperties.md#form-theme-on-windows) (où il peut être hérité ou défini explicitement), et dépend également de la [disponibilité de bibliothèques Microsoft spécifiques](../FormEditor/forms.md#requirements) sur la machine courante au moment de l'exécution. Cette commande vous permet de savoir quel thème de formulaire est en cours d'utilisation.

### macOS

À partir de la version 21 R3, 4D et 4D Server s'exécutent en mode natif sous l'interface Liquid Glass sur macOS 26 Tahoe. Ce rendu est utilisé automatiquement et ne peut pas être désactivé, sauf dans les applications fusionnées, à titre de mesure transitoire visant à donner aux développeurs plus de temps pour adapter leurs formulaires (voir [la documentation d'Apple](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility) concernant la clé "UIDesignRequiresCompatibility" pour l'*Info.plist*).


## Voir également

[Rendu Fluent UI](../FormEditor/forms.md#fluent-ui-rendering)

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1832 |
| Thread safe | no |


