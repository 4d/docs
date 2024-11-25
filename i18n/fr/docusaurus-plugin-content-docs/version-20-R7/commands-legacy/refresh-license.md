---
id: refresh-license
title: Refresh license
slug: /commands/refresh-license
displayed_sidebar: docs
---

<!--REF #_command_.Refresh license.Syntax-->**Refresh license** : Object<!-- END REF-->
<!--REF #_command_.Refresh license.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Object | &#8592; | Objet statut |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Refresh license.Summary-->La commande **Refresh license** met à jour la licence 4D Server courante.<!-- END REF--> Elle vous connecte à la base cliente de 4D et active automatiquement les nouvelles licences ou les mises à jour (*ex:* suite à l'achat de nouveaux clients).

**Objet retourné**

L'objet retourné par **Refresh license** contient les propriétés suivantes :  
  
| **Propriété** | **Type**  | **Description**                                  |
| ------------- | --------- | ------------------------------------------------ |
| success       | booléen   | Vrai si l'actualisation est réussie, sinon Faux. |
| status        | numérique | Code du statut                                   |
| statusText    | texte     | Description du statut                            |
| tips          | texte     | Suggestions pour résoudre l'erreur.              |

**Note** : Cette commande ne peut être exécutée que sur 4D Server. Si la méthode appelant la commande est exécutée localement sur un 4D distant ou monoposte, **Refresh license** ne fait rien.

#### Exemple 

Vous souhaitez mettre à jour votre licence et recevoir un message à la fin de l'opération :

```4d
  // Méthode à exécuter sur le serveur
 var $res : Object
 $res:=Refresh license
 If($res.success)
    ALERT("Mise à jour réussie")
 Else
    ALERT($res.statusText)
 End if
```
