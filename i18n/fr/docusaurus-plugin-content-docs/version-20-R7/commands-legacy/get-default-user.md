---
id: get-default-user
title: Get default user
slug: /commands/get-default-user
displayed_sidebar: docs
---

<!--REF #_command_.Get default user.Syntax-->**Get default user**  : Integer<!-- END REF-->
<!--REF #_command_.Get default user.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Numéro de référence unique de l’utilisateur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get default user.Summary-->La commande **Get default user** retourne le numéro de référence unique de l’utilisateur désigné comme “Utilisateur par défaut” dans la boîte de dialogue des Propriétés de la base :

![](../assets/en/commands/pict36789.fr.png)

Si aucun utilisateur par défaut n’est défini, la commande retourne 0.<!-- END REF-->
