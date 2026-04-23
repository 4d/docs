---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**FORM PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|12|Renommé|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->**FORM PREVIOUS PAGE** change la page courante d'un formulaire pour afficher la page précédente.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](../commands/form-load), ou si la page affichée est la première page du formulaire, **FORM PREVIOUS PAGE** ne fait rien.

## Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle provoque l'affichage la page qui précède celle qui est actuellement affichée :

```4d
 FORM PREVIOUS PAGE
```

## Voir aussi 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 249 |
| Thread safe | no |


