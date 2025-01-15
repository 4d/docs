---
id: locked-by
title: LOCKED BY
slug: /commands/locked-by
displayed_sidebar: docs
---

<!--REF #_command_.LOCKED BY.Syntax-->**LOCKED BY** ( {*laTable* ;} *process* ; *utilisateur4D* ; *utilisateurSession* ; *nomProcess* )<!-- END REF-->
<!--REF #_command_.LOCKED BY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l'enregistrement verrouillé ou Table par défaut si ce paramètre est omis |
| process | Integer | &#8592; | Numéro du process |
| utilisateur4D | Text | &#8592; | Nom de l'utilisateur 4D |
| utilisateurSession | Text | &#8592; | Nom de l'utilisateur ayant ouvert la session de travail |
| nomProcess | Text | &#8592; | Nom du process |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOCKED BY.Summary-->**LOCKED BY** retourne des informations sur l'utilisateur et le process qui ont verrouillé l'enregistrement.<!-- END REF--> Le numéro du process(\*), le nom de l'utilisateur dans l'application 4D et dans le système ainsi que le nom du process sont retournés dans les variables *process*, *utilisateur4D*, *utilisateurSession* et *nomProcess*. Vous pouvez utiliser ces informations dans une boîte de dialogue pour avertir l'utilisateur lorsqu'un enregistrement est verrouillé.

(\*) Il s'agit du numéro du process sur la machine où est exécuté le code à l'origine du verrouillage. Dans le cas d'un trigger ou d'une méthode exécutée sur serveur, c'est le numéro du process "jumeau" sur le serveur qui est retourné. Dans le cas d'un process exécuté sur une machine distante, c'est le numéro du process sur la machine distante qui est retourné.

Si l'enregistrement n'est pas verrouillé, *process* prend la valeur 0 et *utilisateur4D*, *utilisateurSession* et *nomProcess* retournent des chaînes vides. Si vous essayez de charger en lecture/écriture un enregistrement qui a été supprimé, *process* retourne -1 et *utilisateur4D*, *utilisateurSession* et *nomProcess* retournent des chaînes vides.

Le paramètre *utilisateur4D* est le nom de l'utilisateur défini dans l'éditeur de mots de passe de 4D ou bien l'alias de l'utilisateur tel qu'il a été défini avec la commande [SET USER ALIAS](set-user-alias.md) (le cas échéant). Si aucun mot de passe ou alias n'a été défini, "Super\_Utilisateur" est retourné.

Le paramètre *utilisateurSession* retourné correspond au nom de l'utilisateur ayant ouvert la session sur le poste client (ce nom est notamment affiché dans la fenêtre d'administration de 4D Server pour chaque process ouvert).

Si l'enregistrement a été verrouillé par une *requête REST $lock*:

* *process* retourne -2
* *4Duser* retourne ""
* *sessionUser* retourne ""
* *processName* retourne l'adresse IP du cadenas, comme par exemple "127.0.0.1"

#### Voir aussi 

[Locked](locked.md)  
*Verrouillage d'enregistrements*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 353 |
| Thread safe | &check; |


