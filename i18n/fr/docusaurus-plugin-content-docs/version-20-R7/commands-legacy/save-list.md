---
id: save-list
title: SAVE LIST
slug: /commands/save-list
displayed_sidebar: docs
---

<!--REF #_command_.SAVE LIST.Syntax-->**SAVE LIST** ( *liste* ; *nomListe* )<!-- END REF-->
<!--REF #_command_.SAVE LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Numéro de référence de liste |
| nomListe | Text | &#8594;  | Nom de la liste tel qu'il doit apparaître dans l'éditeur d'énumérations en mode Développement |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SAVE LIST.Summary-->La commande **SAVE LIST** sauvegarde la liste dont vous avez passé le numéro de référence dans *liste*, sous le nom que vous avez passé dans *nomListe*.<!-- END REF--> La liste est stockée en tant qu'énumération dans l'éditeur d'énumérations du mode Développement.

Si une énumération de même nom existe déjà, son contenu est remplacé.

**Note** : Cette commande ne peut pas être utilisée dans une structure chargée en **lecture seule**, telle qu'un projet .4dz ou un composant.

#### Voir aussi 

[Load list](load-list.md)  