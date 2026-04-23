---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**FORM NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
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

<!--REF #_command_.FORM NEXT PAGE.Summary-->**FORM NEXT PAGE** change la page courante d'un formulaire pour afficher la page suivante.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](../commands/form-load), ou si la page affichée est la dernière page du formulaire, **FORM NEXT PAGE** ne fait rien.

## Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle provoque l'affichage la page qui suit celle qui est actuellement affichée :

```4d
 FORM NEXT PAGE
```

## Voir aussi 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 248 |
| Thread safe | no |


