---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors**  : Collection<!-- END REF-->
<!--REF #_command_.Last errors.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Collection | &#8592; | Collection d'objets erreur |

<!-- END REF-->

#### Description 

<!--REF #_command_.Last errors.Summary-->La commande **Last errors** retourne la pile d'erreurs courante de l'application 4D sous forme de collection d'objets erreur, ou **null** si aucune erreur ne s'est produite.<!-- END REF--> La pile d'erreurs inclut les objets envoyés par la commande [throw](throw.md), le cas échéant.

Chaque objet erreur contient les attributs suivants :

| **Propriété**      | **Type** | **Description**                                        |
| ------------------ | -------- | ------------------------------------------------------ |
| errCode            | nombre   | Code d'erreur                                          |
| message            | texte    | Description de l'erreur                                |
| componentSignature | texte    | Signature du composant interne qui a retourné l'erreur |

Cette commande doit être appelée depuis une méthode d'appel sur erreur installée par la commande [ON ERR CALL](on-err-call.md).


#### Voir aussi 

[ON ERR CALL](on-err-call.md)  
[throw](throw.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1799 |
| Thread safe | &check; |


