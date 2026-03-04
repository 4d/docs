---
id: form-get-current-page
title: FORM Get current page
slug: /commands/form-get-current-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get current page.Syntax-->**FORM Get current page** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.FORM Get current page.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Retourner le numéro de la page du sous-formulaire courant |
| Résultat | Integer | &#8592; | Numéro de la page courante du formulaire courant |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|13|Modifié|
|12|Renommé|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.FORM Get current page.Summary-->**FORM Get current page** retourne le numéro de la page courante du formulaire actuellement affiché ou du formulaire courant chargé via la commande [FORM LOAD](../commands/form-load).<!-- END REF-->

Le paramètre *\** est utile lorsque la commande est appelée dans le contexte d’un sous-formulaire en page contenant plusieurs pages. Dans ce cas, si vous passez ce paramètre, la commande retourne le numéro de la page courante du sous-formulaire courant (celui qui a appelé la commande). Par défaut, si le paramètre *\** est omis, la commande s’applique toujours au formulaire parent. 

## Exemple 

Alors que vous êtes en train d'utiliser un formulaire, si vous choisissez une commande de menu ou si le formulaire reçoit un appel d'un autre process, vous voulez que des actions différentes soient effectuées en fonction de la page du formulaire affichée. Vous pouvez alors écrire :

```4d
  // Méthode formulaire [maTable];"monFormulaire"
 Case of
    :(FORM Event.code=On Load)
  // ...
    :(FORM Event.code=On Unload)
  // ...
    :(FORM Event.code=On Menu Selected)
       $vlNuméroMenu:=Menu selected>>16
       $vlNuméroCmde:=Menu selected & 0xFFFF
       Case of
          :($vlNuméroMenu=...)
             Case of
                :($vlNuméroCmde=...)
                :(FORM Get current page=1)
  // Effectuer une action appropriée pour la page 1
                :(FORM Get current page=2)
  // Effectuer une action appropriée pour la page 2
  // ...
                :($vlNuméroCmde=...)
  // ...
             End case
          :($vlNuméroMenu=...)
  // ...
       End case
    :(FORM Event.code=On Outside Call)
       Case of
          :(FORM Get current page=1)
  // Fournir une réponse appropriée pour la page 1
          :(FORM Get current page=2)
  // Fournir une réponse appropriée pour la page 2
       End case
  // ...
 End case
```

## Voir aussi 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 276 |
| Thread safe | no |


