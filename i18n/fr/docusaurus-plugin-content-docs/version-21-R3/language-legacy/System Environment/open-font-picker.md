---
id: open-font-picker
title: OPEN FONT PICKER
slug: /commands/open-font-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN FONT PICKER.Syntax-->**OPEN FONT PICKER**<!-- END REF-->
<!--REF #_command_.OPEN FONT PICKER.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|14|Créé|

</details>
</div>

## Description 

<!--REF #_command_.OPEN FONT PICKER.Summary-->La commande **OPEN FONT PICKER** affiche la boîte de dialogue de sélection de police du système.<!-- END REF-->

**Note :** Cette boîte de dialogue est modale sous Windows mais pas sous macOS.

Si l’utilisateur sélectionne une police et/ou un style et valide la boîte de dialogue, les modifications sont appliquées à la sélection courante de texte dans l’objet ayant le focus, si la propriété "Autoriser sélecteur couleur/police" est cochée pour cet objet (cf. manuel *Mode Développement*). Dans le cas contraire, la commande ne fait rien.

Si la police a été modifiée, l’événement formulaire On After Edit est généré pour l’objet. 

## Exemple 

Dans un formulaire, vous souhaitez ajouter un bouton affichant le sélecteur de police afin de permettre à l'utilisateur de modifier la police ou le style d'une zone de variable texte. Assurez-vous que :

* la variable texte dispose de la propriété "Autoriser sélecteur couleur/police".
* la propriété "Focusable" est désélectionnée pour le bouton.

Le code du bouton est le suivant :

```4d
 Case of
    :(FORM Event.code=On Clicked)
       GOTO OBJECT(textVar) //donner le focus à la variable
       OPEN FONT PICKER
 End case
```

## Voir aussi 

[OPEN COLOR PICKER](../commands/open-color-picker)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1303 |
| Thread safe | no |


