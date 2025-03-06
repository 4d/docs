---
id: set-group-properties
title: Set group properties
slug: /commands/set-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set group properties.Syntax-->**Set group properties** ( *réfGroupe* ; *nom* ; *propriétaire* {; *membres*} )  : Integer<!-- END REF-->
<!--REF #_command_.Set group properties.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| réfGroupe | Integer | &#8594;  | Numéro de référence unique du groupe activé ou -1 pour ajouter un groupe de Super_Utilisateur -2 pour ajouter un groupe d'Administrateur |
| &#8592; | Unique ID number of added group (if any) |
| nom | Text | &#8594;  | Nouveau nom de groupe |
| propriétaire | Integer | &#8594;  | Numéro de référence unique de l'utilisateur ou le propriétaire du nouveau groupe |
| membres | Integer array | &#8594;  | Nouveaux membres du groupe |
| Résultat | Integer | &#8592; | Numéro de référence unique du nouveau groupe |

<!-- END REF-->

#### Description 

<!--REF #_command_.Set group properties.Summary-->**Set group properties** vous permet de modifier et de mettre à jour les propriétés d'un groupe existant dont vous passez le numéro de référence unique dans *réfGroupe*, ou d'ajouter un nouveau groupe.<!-- END REF-->

Pour modifier les propriétés d'un groupe existant, vous devez passer son numéro de référence tel que retourné dans la commande [GET GROUP LIST](get-group-list.md). 

Si vous voulez ajouter un nouveau groupe, passez -1 dans *réfGroupe* (voir également la note ci-dessous pour les bases binaires). 

Si le groupe a bien été créé, son numéro de référence unique est retourné dans réfGroupe.

Si vous ne passez pas -1, -2 ou un numéro de référence de groupe valide dans réfGroupe, **Set group properties** ne fait rien et retourne 0.

Passez le nouveau nom du groupe dans le paramètre *nom*. 

*(Bases binaires uniquement) :* Passez le numéro de référence du nouveau propriétaire du groupe dans le paramètre propriétaire. Ce paramètre est ignoré dans les bases projets. 

Si vous ne voulez pas modifier toutes les propriétés du groupe (à part ses membres, voir ci-dessous), passez les valeurs retournées par [GET GROUP PROPERTIES](get-group-properties.md) dans les paramètres que vous voulez laisser inchangés.

Si vous ne passez pas le paramètre optionnel *membres*, la liste courante des membres du groupe reste inchangée. Si vous ne le faites pas lors d'une création d'un groupe, le groupe n'aura pas de membres.

Si vous passez le paramètre optionnel *membres*, vous modifiez toute la liste des membres pour ce groupe. Avant d'appeler cette routine, vous devez remplir le tableau *membres* avec les numéros de référence uniques des utilisateurs et des groupes devant appartenir au groupe. 

Si vous voulez enlever tous les membres d'un groupe, passez un tableau vide dans le paramètre *membres*.

**Notes pour les bases binaires :** 

* Les valeurs des références des groupes et des utilisateurs sont fonction de la personne qui les crée (Super Utilisateur, Administrateur, ou propriétaire du groupe affilié). Pour plus d'informations, veuillez consulter le paragraphe *Plages de références des groupes et des utilisateurs*. Si vous voulez ajouter un groupe affilié au Super\_Utilisateur, il faut passer -1 à réfGroupe. Si vous voulez ajouter un groupe affilié à l'Administrateur, il faut passer -2 à réfGroupe.
* Le propriétaire d'un groupe n'est pas automatiquement défini comme membre du groupe qu'il possède. C'est à vous de l'y inclure explicitement, à l'aide du paramètre *membres*.

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler la commande **Set group properties** ou si le système de mots de passe est déjà ouvert par un autre process, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[GET GROUP LIST](get-group-list.md)  
[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 614 |
| Thread safe | &cross; |
| Modifie les variables | error |


