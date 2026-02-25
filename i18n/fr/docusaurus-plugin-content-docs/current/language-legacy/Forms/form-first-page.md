---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
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

<!--REF #_command_.FORM FIRST PAGE.Summary-->La commande **FORM FIRST PAGE** change la page courante d'un formulaire pour afficher la première page du formulaire.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](../commands/form-load), ou si la première page du formulaire est déjà affichée, **FORM FIRST PAGE** ne fait rien.

## Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle affiche la première page du formulaire :

```4d
 FORM FIRST PAGE
```

## Voir aussi 

[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 250 |
| Thread safe | no |


