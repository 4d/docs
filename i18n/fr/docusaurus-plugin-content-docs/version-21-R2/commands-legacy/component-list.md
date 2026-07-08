---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *tabComposants* : Text array )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabComposants | Text array | &#8592; | Noms des composants |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.COMPONENT LIST.Summary-->La commande `COMPONENT LIST` dimensionne et remplit le tableau *tabComposants* avec les noms des composants chargés par l’application 4D pour le projet hôte courant.<!-- END REF-->

À l’ouverture d’un projet, 4D charge les composants valides :

* trouvés dans le [dossier Components de votre projet](../../Project/architecture.md#components).
* déclarés dans le [fichier **dependencies.json** de votre projet](../../Project/components.md#dependenciesjson-and-environment4djson).

**Rappel :** Si le même composant est installé à différents emplacements, un [ordre de priorité](../../Project/components.md#priority) est appliqué. 

Cette commande peut être appelée depuis le projet hôte ou depuis un composant. Si le projet n’utilise pas de composant, le tableau *tabComposants* est retourné vide. 

Les noms des composants sont les noms des fichiers de structure des bases matrices (.4db, .4dc ou .4dbase). Cette commande permet de mettre en place des architectures et des interfaces modulaires proposant des fonctionnalités supplémentaires en fonction de la présence des composants.

Pour plus d'informations sur les composants 4D, reportez-vous à [cette page](../../Concepts/components.md).

## Voir aussi 

[PLUGIN LIST](plugin-list.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1001 |
| Thread safe | yes |


