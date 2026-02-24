---
id: after
title: After
slug: /commands/after
displayed_sidebar: docs
---

<!--REF #_command_.After.Syntax-->**After**  : Boolean<!-- END REF-->
<!--REF #_command_.After.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Retourne Vrai si le cycle d'exécution est après |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.After.Summary-->**After** retourne Vrai pour le cycle d'exécution Après.<!-- END REF-->

Si vous souhaitez que la phase **After** du cycle d'exécution soit générée, assurez-vous que l'événement On Validate a bien été sélectionné, en mode Développement, dans les propriétés du formulaire et/ou des objets concernés.

**Note :** Cette commande équivaut à utiliser la fonction [Form event code](../commands/form-event-code) et tester si elle retourne l'événement On Validate.

## Voir aussi 

[Form event code](../commands/form-event-code)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 31 |
| Thread safe | no |


