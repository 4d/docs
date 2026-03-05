---
id: get-menu-bar-reference
title: Get menu bar reference
slug: /commands/get-menu-bar-reference
displayed_sidebar: docs
---

<!--REF #_command_.Get menu bar reference.Syntax-->**Get menu bar reference** {( *process* )} : Text<!-- END REF-->
<!--REF #_command_.Get menu bar reference.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de référence du process |
| Résultat | Text | &#8592; | Identifiant de la barre de menus |
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

<!--REF #_command_.Get menu bar reference.Summary-->La commande **Get menu bar reference** renvoie l’identifiant unique de la barre de menus courante ou de la barre de menus d’un process spécifique.<!-- END REF-->

Si la barre de menus a été créée par la commande [Create menu](../commands/create-menu), cet identifiant correspond à la référence unique du menu créé. Sinon, la commande retourne un identifiant interne spécifique(\*). Dans tous les cas, cet identifiant [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") pourra être utilisé pour référencer la barre de menus par toutes les autres commandes du thème.

(\*) Cet identifiant spécifique est temporaire et devient invalide dès qu'une autre barre de menus est appelée avec [SET MENU BAR](../commands/set-menu-bar). Si vous voulez conserver la référence d'un menu créé dans l'éditeur de menus, vous devez la copier en mémoire à l'aide de [Create menu](../commands/create-menu). Par exemple :  

```4d
 $vEditorRef:=Get menu bar reference(Frontmost process) //menu créé dans l'éditeur de menus
 $vMenuRef:=Create menu($vEditorRef) //copier le menu en mémoire
 SET MENU BAR(2) //installer une autre barre de menus
 ... // exécuter code
 SET MENU BAR($vMenuRef) //retour à la barre de menus d'origine
```

Le paramètre *process* permet de désigner le process duquel vous souhaitez obtenir l’identifiant de la barre de menus courante. Si vous omettez ce paramètre, la commande retourne l’identifiant de la barre de menus du process courant.

## Exemple 

Reportez-vous à l'exemple de la commande [GET MENU ITEMS](../commands/get-menu-items).

## Voir aussi 

[SET MENU BAR](../commands/set-menu-bar)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 979 |
| Thread safe | no |


