---
id: get-group-properties
title: GET GROUP PROPERTIES
slug: /commands/get-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP PROPERTIES.Syntax-->**GET GROUP PROPERTIES** ( *réfGroupe* ; *nom* ; *propriétaire* {; *membres*} )<!-- END REF-->
<!--REF #_command_.GET GROUP PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| réfGroupe | Integer | &#8594;  | Numéro de référence du groupe |
| nom | Text | &#8592; | Nom du groupe |
| propriétaire | Integer | &#8592; | Numéro de référence du propriétaire du groupe |
| membres | Integer array | &#8592; | Membres du groupe |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET GROUP PROPERTIES.Summary-->**GET GROUP PROPERTIES** retourne les propriétés du groupe dont le numéro de référence est passé dans *réfGroupe*.<!-- END REF--> Vous passez le numéro de référence du groupe retourné par la commande [GET GROUP LIST](get-group-list.md). 

Si vous ne passez pas un numéro de référence valide, **GET GROUP PROPERTIES** renvoie des paramètres vides.

Après l'appel de la commande, vous récupérez le nom du groupe dans le paramètre *nom*.

*(Bases binaires uniquement)* Le propriétaire du groupe est retourné dans le paramètre propriétaire. Ce paramètre retourne toujours 0 dans les bases projets.

Si vous passez le paramètre optionnel *membres*, ce tableau contiendra les numéros de référence uniques des utilisateurs qui appartiennent au groupe. 

**Note pour les bases binaires :** Les valeurs des références des groupes et des utilisateurs sont fonction de la personne qui les crée (Super Utilisateur, Administrateur, ou propriétaire du groupe affilié). Pour plus d'informations, veuillez consulter le paragraphe *Plages de références des groupes et des utilisateurs*.

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler la commande **GET GROUP PROPERTIES** ou si le système de Mots de passe est déjà ouvert par un autre process, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 613 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


