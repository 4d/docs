---
id: get-user-list
title: GET USER LIST
slug: /commands/get-user-list
displayed_sidebar: docs
---

<!--REF #_command_.GET USER LIST.Syntax-->**GET USER LIST** ( *nomsUtil* ; *réfUtil* )<!-- END REF-->
<!--REF #_command_.GET USER LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomsUtil | Text array | &#8592; | Noms des utilisateurs tels qu'ils apparaissent dans l'éditeur de Mots de passe |
| réfUtil | Integer array | &#8592; | Numéros de référence uniques pour chaque utilisateur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET USER LIST.Summary-->La commande **GET USER LIST** remplit les tableaux *nomsUtil* et *réfsUtil* avec les noms et les numéros de référence uniques des utilisateurs tels qu'ils apparaissent dans la fenêtre des Mots de passe de 4D.<!-- END REF-->

Le tableau *nomsUtil* est rempli avec les noms des utilisateurs, y compris ceux dont le compte est supprimé (les utilisateurs dont le nom apparaît en vert dans la fenêtre des mots de passe).

**Note :** Utilisez la commande [Is user deleted](is-user-deleted.md) pour savoir si un compte utilisateur est supprimé.

Le tableau *réfsUtil*, synchronisé avec *nomsUtil*, est rempli avec les numéros de référence uniques des utilisateurs. 

**Note concernant les bases binaires :** Les valeurs des références des groupes et utilisateurs dépendent de la personne qui les crée (Super utilisateur, Administrateur ou propriétaire du goupe affilié). Pour plus d'informations, veuillez consulter le paragraphe *Plages de références des groupes et des utilisateurs*.

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler la commande **GET USER LIST** ou si le système des Mots de passe est déjà ouvert par un autre process, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[GET GROUP LIST](get-group-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  