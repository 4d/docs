---
id: get-user-properties
title: GET USER PROPERTIES
slug: /commands/get-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET USER PROPERTIES.Syntax-->**GET USER PROPERTIES** ( *réfUtilisateur* ; *nom* ; *démarrage* ; *motDePasse* ; *nbUtilisations* ; *dernièreUtilisation* {; *adhésions* {; *groupePropriétaire*}} )<!-- END REF-->
<!--REF #_command_.GET USER PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| réfUtilisateur | Integer | &#8594;  | Numéro de référence unique de l'utilisateur |
| nom | Text | &#8592; | Nom de l'utilisateur |
| démarrage | Text | &#8592; | Nom de la méthode de démarrage |
| motDePasse | Text | &#8592; | *** obsolète (chaîne vide)  *** |
| nbUtilisations | Integer | &#8592; | Nombre d'utilisations de la base |
| dernièreUtilisation | Date | &#8592; | Date de la dernière utilisation de la base |
| adhésions | Integer array | &#8592; | Numéros de référence des groupes auxquels l'utilisateur appartient |
| groupePropriétaire | Integer | &#8592; | Numéro de référence du groupe propriétaire de l’utilisateur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET USER PROPERTIES.Summary-->**GET USER PROPERTIES** retourne les informations concernant l'utilisateur dont le numéro de référence est passé dans le paramètre *réfUtilisateur*.<!-- END REF--> Vous devez passer le numéro de référence retourné par la commande [GET USER LIST](get-user-list.md).

Si le compte d'utilisateur n'existe pas ou a été supprimé, l'erreur -9979 est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md). Sinon, vous pouvez appeler la fonction [Is user deleted](is-user-deleted.md) pour tester le compte de l'utilisateur avant d'appeler **GET USER PROPERTIES**.

Après l'appel, vous récupérez le nom, la méthode de démarrage, le nombre d'utilisations et la date de la dernière utilisation de la base dans les paramètres *nom*, *démarrage*, *nbUtilisation* et *dernièreUtilisation*.

**Notes :** 

* Les paramètres *nbUtilisation* et dernièreUtilisation sont utilisés uniquement dans les bases binaires. Ils retournent toujours, respectivement, 0 et 00/00/00 dans les bases projets.
* Le paramètre *motDePasse* est obsolète (il retourne toujours une chaîne vide). Si vous souhaitez contrôler le mot de passe d'un utilisateur, utilisez la fonction [Validate password](validate-password.md)

Si vous passez le paramètre optionnel *adhésion*, vous récupérez le numéro de référence unique du groupe auquel l'utilisateur appartient.

*(Bases binaires uniquement)* Vous pouvez passer le paramètre optionnel groupePropriétaire pour lire le numéro de référence du groupe "propriétaire" de l'utilisateur, c'est-à-dire le groupe propriétaire par défaut des objets créés par cet utilisateur.

**Note :** Le tableau groupePropriétaire retourne toujours la valeur 0 dans les bases projets.

**Note pour les bases binaires :** Les valeurs des références des groupes et des utilisateurs sont fonction de la personne qui les crée (Super Utilisateur, Administrateur, ou propriétaire du groupe affilié). Pour plus d'informations, veuillez consulter le paragraphe *Plages de références des groupes et des utilisateurs*.

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler la commande **GET USER PROPERTIES** ou si le système de Mots de passe est déjà ouvert par un autre process, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  
[Validate password](validate-password.md)  