---
id: in-transaction
title: In transaction
slug: /commands/in-transaction
displayed_sidebar: docs
---

<!--REF #_command_.In transaction.Syntax-->**In transaction**  : Boolean<!-- END REF-->
<!--REF #_command_.In transaction.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | VRAI si le process courant est en transaction, FAUX sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.In transaction.Summary-->La commande **In transaction** retourne Vrai si le process courant est en transaction, sinon elle retourne Faux.<!-- END REF-->

#### Exemple 

Si vous effectuez des opérations (ajout, modification ou suppression) sur de multiples enregistrements, vous pouvez rencontrer des enregistrements verrouillés. Dans ce cas, pour préserver l'intégrité des données, vous devez avoir ouvert une transaction, de manière à ce que vous puissiez faire “marche arrière” et annuler l'ensemble de l'opération depuis le début, sans que les données de la base soient modifiées.

Si vous effectuez l'opération depuis un trigger ou une sous-routine pouvant être appelé(e) dans une transaction ou hors transaction, l'utilisation de la commande **In transaction** vous permet de vérifier que la méthode du process courant ou la méthode appelante a bien ouvert une transaction. Si ce n'est pas le cas, vous ne commencez même pas l'opération, car, en cas d'échec au cours du processus, vous ne pourriez pas revenir sur les opérations déjà effectuées.

#### Voir aussi 

[Active transaction](active-transaction.md)  
[CANCEL TRANSACTION](cancel-transaction.md)  
*Présentation des triggers*  
[START TRANSACTION](start-transaction.md)  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 397 |
| Thread safe | &check; |


