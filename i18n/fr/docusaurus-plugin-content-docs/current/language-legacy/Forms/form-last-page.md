---
id: form-last-page
title: FORM LAST PAGE
slug: /commands/form-last-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM LAST PAGE.Syntax-->**FORM LAST PAGE**<!-- END REF-->
<!--REF #_command_.FORM LAST PAGE.Params-->
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

<!--REF #_command_.FORM LAST PAGE.Summary-->La commande **FORM LAST PAGE** change la page courante d'un formulaire pour afficher la dernière page du formulaire.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](../commands/form-load), ou si la dernière page du formulaire est déjà affichée, **FORM LAST PAGE** ne fait rien.

## Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle affiche la dernière page du formulaire courant :

```4d
 FORM LAST PAGE
```

## Voir aussi 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 251 |
| Thread safe | no |


