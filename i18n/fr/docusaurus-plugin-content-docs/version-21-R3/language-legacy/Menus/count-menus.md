---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** {( *process* )} : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Integer | &#8592; | Nombre de menus de la barre de menus courante |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Count menus.Summary-->La commande **Count menus** retourne le nombre de menus présents dans la barre de menus.<!-- END REF-->

Si vous omettez le paramètre *process*, **Count menus** s'applique à la barre de menus du process courant. Sinon, **Count menus** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

## Voir aussi 

[Count menu items](../commands/count-menu-items)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 404 |
| Thread safe | no |
| Interdite sur le serveur ||


