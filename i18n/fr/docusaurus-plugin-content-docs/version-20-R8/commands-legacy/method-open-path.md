---
id: method-open-path
title: METHOD OPEN PATH
slug: /commands/method-open-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD OPEN PATH.Syntax-->**METHOD OPEN PATH** ( *chemin* {; *line*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD OPEN PATH.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text | &#8594;  | Chemin de la méthode à ouvrir |
| line | Number | &#8594;  | Line number |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD OPEN PATH.Summary-->La commande **METHOD OPEN PATH** ouvre, dans l’éditeur de méthodes de 4D, la méthode dont vous avez passé le chemin d’accès interne dans le paramètre *chemin*.<!-- END REF-->

Cette commande est asynchrone : elle retourne immédiatement à la méthode d'appel et n'attend pas l'ouverture de l'éditeur de méthode.

Cette commande peut ouvrir tous les types de méthodes (objet, formulaire, trigger, projet ou base). La méthode doit déjà exister. Si le paramètre *chemin* ne correspond pas à une méthode existante, l’erreur -9801 "Impossible d’ouvrir la méthode" est retournée. 

Vous pouvez exécuter cette commande depuis un composant, mais dans ce cas vous devez passer le paramètre *\** car l’accès en écriture au code du composant n’est pas possible. Si vous omettez le paramètre *\** dans ce contexte, l’erreur -9763 est générée.

#### Voir aussi 

*Commandes du thème Accès objets développement*  
[METHOD Get path](method-get-path.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1213 |
| Thread safe | &cross; |


