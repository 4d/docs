---
id: release-menu
title: RELEASE MENU
slug: /commands/release-menu
displayed_sidebar: docs
---

<!--REF #_command_.RELEASE MENU.Syntax-->**RELEASE MENU** ( *menu* )<!-- END REF-->
<!--REF #_command_.RELEASE MENU.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Référence de menu |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.RELEASE MENU.Summary-->La commande **RELEASE MENU** efface de la mémoire le menu dont vous avez passé l’identifiant dans *menu*.<!-- END REF--> Ce menu doit avoir été créé par la commande [Create menu](create-menu.md). La règle est la suivante : à chaque [Create menu](create-menu.md) doit correspondre un [RELEASE MENU](release-menu.md). 

La commande efface toutes les instances du *menu* dans toutes les barres de menus et tous les process. Si le menu appartient à une barre de menus en cours d’utilisation, il continuera à fonctionner mais ne pourra plus être modifié. Il ne sera réellement effacé de la mémoire que lorsque la dernière barre de menus dans laquelle il figure ne sera plus utilisée.

Cette commande peut être appliquée aux menus utilisés comme barres de menus.

Les sous-menus éventuellement utilisés par *menu* ne sont pas effacés s'ils ont été créés directement via la commande [Create menu](create-menu.md). Vous devez dans ce cas les effacer individuellement (cf. règle énoncée ci-dessus). En revanche, s'ils sont issus de la duplication d'un menu existant, n'appelez pas [RELEASE MENU](release-menu.md) avec leurs instances car 4D les efface automatiquement.

#### Exemple 

Cet exemple illustre les cas d'utilisation de cette commande :

```4d
 nouvMenu:=Create menu
 APPEND MENU ITEM(nouvMenu;"Test1")
 sousMenu:=Create menu
 APPEND MENU ITEM(sousMenu;"SousTest1")
 APPEND MENU ITEM(sousMenu;"SousTest2")  // Création de lignes dans le sous-menu
 
 APPEND MENU ITEM(nouvMenu;"Test2";sousMenu)  // Attacher le sous-menu au menu
 
  //A ce moment, le sous-menu est attaché au menu et si on n'en a plus besoin par la suite, c'est le bon emplacement pour l'effacer.
  //L'effacement ne supprime pas tout de suite sousMenu car il est encore utilisé par nouvMenu. sousMenu sera supprimé quand nouvMenu le sera.
  //Effacer le sous-menu à cet instant permet d'économiser la mémoire
 RELEASE MENU(sousMenu)
 
 $result1:=Dynamic pop up menu(nouvMenu) //Utilisation du menu
 copieMenu:=Create menu(nouvMenu) // Création d'un menu par copie de nouvMenu (et donc duplication de sousMenu)
 RELEASE MENU(nouvMenu) // On n'a plus besoin de nouvMenu.
 
 $result2:=Dynamic pop up menu(copieMenu)
 RELEASE MENU(copieMenu)
  //Il ne faut pas chercher à effacer le sous-menu de copieMenu puisqu'il n'a pas été créé directement par Creer menu
  //La règle est respectée : à chaque Creer menu correspond un EFFACER MENU
```

#### Voir aussi 

[Create menu](create-menu.md)  