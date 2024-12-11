---
id: set-user-properties
title: Set user properties
slug: /commands/set-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set user properties.Syntax-->**Set user properties** ( *réfUtilisateur* ; *nom* ; *démarrage* ; *motDePasse* ; *nbUtilisations* ; *dernièreUtilisation* {; *adhésions* {; *groupePropriétaire*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Set user properties.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| réfUtilisateur | Integer | &#8594;  | Numéro de référence unique du compte de l'utilisateur ou -1 pour l'ajout d'un utilisateur affilié au Super_Utilisateur ou -2 pour l'ajout d'un utilisateur affilié à l'Administrateur |
| &#8592; | Unique ID number of added user account (if any) |
| nom | Text | &#8594;  | Nouveau nom de l'utilisateur |
| démarrage | Text | &#8594;  | Nom de la nouvelle méthode de démarrage |
| motDePasse | Text | &#8594;  | Nouveau mot de passe (non crypté) ou * pour ne pas modifier le mot de passe |
| nbUtilisations | Integer | &#8594;  | Nouveau nombre d'utilisations de la base |
| dernièreUtilisation | Date | &#8594;  | Nouvelle date de dernière utilisation de la base |
| adhésions | Integer array | &#8594;  | Numéros de référence des groupes auxquels l'utilisateur appartient |
| groupePropriétaire | Integer | &#8594;  | Numéro de référence du groupe propriétaire de l’utilisateur |
| Résultat | Integer | &#8592; | Numéro de référence unique du nouvel utilisateur |

<!-- END REF-->

#### Description 

<!--REF #_command_.Set user properties.Summary-->**Set user properties** vous permet de modifier et de mettre à jour les propriétés d'un compte actif d'utilisateur existant dont le numéro de référence est passé dans le paramètre *réfUtilisateur*, ou d'ajouter un nouvel utilisateur.<!-- END REF-->

Si vous modifiez les propriétés d'un utilisateur existant, vous devez passer le numéro de référence qui vous est renvoyé par la commande [GET USER LIST](get-user-list.md).

Pour ajouter un nouvel utilisateur, il faut passer -1 à *réfUtilisateur* (voir les notes ci-dessous pour les bases binaires).

Si l'utilisateur a bien été créé ou modifié, **Set user properties** retourne son numéro de référence unique d'utilisateur.  
Si vous ne passez pas un numéro de référence d'utilisateur valide, **Set user properties** ne fait rien et retourne 0.

Lorsque vous appelez cette commande, vous passez le nouveau nom, la nouvelle méthode de démarrage, le nouveau mot de passe, le nouveau nombre d'utilisations et la nouvelle date de dernière utilisation pour l'utilisateur dans les paramètres *nom*, *démarrage*, *motDePasse*, *nbUtilisation* et *dernièreUtilisation*. Vous passez un mot de passe non crypté dans le paramètre *motDePasse*. 4D cryptera ce mot de passe avant de le sauvegarder dans le compte de l'utilisateur.   
Si le nouveau nom d'utilisateur passé dans *nom* n'est pas unique (un utilisateur de même nom existe déjà), la commande ne fait rien et l'erreur -9979 est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md).

**Note :** Les paramètres *nbUtilisation* et *dernièreUtilisation* sont utilisés uniquement dans les bases binaires. lls sont ignorés dans les bases projets.

Si vous ne voulez pas modifier toutes les propriétés de l'utilisateur (à part son groupe, voir ci-dessous), appelez au préalable [GET USER PROPERTIES](get-user-properties.md) et passez les valeurs retournées dans celles que vous ne voulez pas modifier. Si vous ne voulez pas modifier le mot de passe de l'utilisateur, passez \* dans le paramètre *motDePasse*. Cela vous permet de changer les autres propriétés du compte de l’utilisateur, sans changer le mot de passe de ce compte.

Si vous ne passez pas le paramètre optionnel *adhésions*, les adhésions de l'utilisateur restent inchangées. Si vous ne passez pas ce paramètre en cas d'ajout d'un utilisateur, il ne fera partie d'aucun groupe.

Si vous passez le paramètre optionnel *adhésions*, vous modifiez toutes les adhésions pour l'utilisateur. Avant d'appeler cette commande, vous devez remplir le tableau *adhésions* avec les numéros de référence uniques des groupes dont l'utilisateur devra faire partie.

*(Bases binaires uniquement)* Si vous passez le paramètre facultatif *groupePropriétaire*, vous indiquez le numéro de référence du groupe “propriétaire” de l’utilisateur, c’est-à-dire le groupe propriétaire par défaut des objets créés par cet utilisateur. Pour annuler les adhésions d'un utilisateur, passez un tableau vide dans le paramètre *adhésion*.

**Notes pour les bases binaires :** Les valeurs des références des groupes et des utilisateurs sont fonction de la personne qui les crée (Super Utilisateur, Administrateur, ou propriétaire du groupe affilié). Pour plus d'informations, veuillez consulter le paragraphe *Plages de références des groupes et des utilisateurs*. Si vous voulez ajouter un nouvel utilisateur affilié au Super\_Utilisateur, passez -1 dans réfUtilisateur. Si vous voulez ajouter un nouvel utilisateur affilié à l'Administrateur, passez -2 dans réfUtilisateur. 

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler **Set user properties** ou si le système de mots de passe est déjà ouvert par un autre process, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[DELETE USER](delete-user.md)  
[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Validate password](validate-password.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 612 |
| Thread safe | &check; |
| Interdite sur le serveur ||


