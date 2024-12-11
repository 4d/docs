---
id: save-record
title: SAVE RECORD
slug: /commands/save-record
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RECORD.Syntax-->**SAVE RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.SAVE RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l'enregistrement à stocker ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE RECORD.Summary-->**SAVE RECORD** sauvegarde l'enregistrement courant de *laTable* pour le process courant.<!-- END REF--> S'il n'y a pas d'enregistrement courant, la commande est ignorée. 

Vous pouvez utiliser **SAVE RECORD** pour sauvegarder un enregistrement créé ou modifié par programmation. Lorsqu'un enregistrement a été modifié puis validé par un utilisateur dans un formulaire, il n'est pas nécessaire de le sauvegarder à l'aide de **SAVE RECORD**. En revanche, un enregistrement modifié puis annulé par l'utilisateur peut malgré tout être sauvegardé avec **SAVE RECORD**.

Si vous appelez la commande **SAVE RECORD** alors qu'aucun champ n'a été modifié dans l'enregistrement, la commande ne fait rien (le trigger n'est pas appelé). 

L'utilisation de **SAVE RECORD** est nécessaire dans les cas suivants :

* Pour sauvegarder un enregistrement créé par les commandes [CREATE RECORD](create-record.md) ou [DUPLICATE RECORD](duplicate-record.md),
* Pour sauvegarder des données issues de la commande [RECEIVE RECORD](receive-record.md),
* Pour sauvegarder un enregistrement modifié par une méthode,
* Pour sauvegarder un enregistrement contenant un sous-enregistrement ayant été créé ou modifié par la commande *\_o\_ADD SUBRECORD*, *\_o\_CREATE SUBRECORD*, ou *\_o\_MODIFY SUBRECORD*,
* Pendant la saisie de données, pour sauvegarder l'enregistrement affiché avant d'appeler une commande qui change l'enregistrement courant,
* Pendant la saisie de données, pour sauvegarder l'enregistrement courant.

Vous ne devez pas appeler **SAVE RECORD** dans l'événement formulaire On Validate d'un enregistrement qui a été validé, sinon l'enregistrement est sauvegardé deux fois. 

#### Exemple 

L'exemple suivant est une partie d'une méthode récupérant des enregistrements d'un fichier. Dans cette partie, les enregistrements sont reçus puis, si l'opération s'est correctement déroulée, sauvegardés :

```4d
 RECEIVE RECORD([Clients]) // Réception de l'enregistrement à partir du disque
 If(OK=1) // Si l'enregistrement a été correctement reçu…
    SAVE RECORD([Clients]) // Le sauvegarder
 End if
```

#### Voir aussi 

[CREATE RECORD](create-record.md)  
[Locked](locked.md)  
*Présentation des triggers*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 53 |
| Thread safe | &check; |
| Interdite sur le serveur ||


