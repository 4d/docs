---
id: blob-to-list
title: BLOB to list
slug: /commands/blob-to-list
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to list.Syntax-->**BLOB to list** ( *blob* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to list.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB contenant la liste hiérarchique |
| offset | Integer | &#8596;  | Offset (en octets) dans le BLOB |
| ||| Nouvel offset après la lecture |
| Résultat | Integer | &#8592; | Référence de la liste nouvellement créée |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to list.Summary-->**BLOB to list** crée une nouvelle liste hiérarchique avec les données stockées dans le BLOB *blob* à l'offset d'octet (à partir de zéro) spécifié par *offset* et retourne un numéro de référence de liste hiérarchique pour cette nouvelle liste.<!-- END REF-->

Les données présentes dans le BLOB doivent être compatibles avec la commande : généralement, vous utilisez des BLOBs préalablement remplis avec la commande [LIST TO BLOB](list-to-blob.md).

Si vous ne passez pas le paramètre optionnel *offset*, les valeurs de la liste sont lues à partir du début du BLOB. Si vous gérez un BLOB dans lequel plusieurs variables ou listes ont été stockées, vous devez passer le paramètre *offset* ainsi qu'une variable numérique. Avant l'appel, fixez cette variable numérique à l'offset désiré. Après l'appel, cette même variable numérique retourne l'offset de la variable suivante stockée dans le BLOB.

Après l'appel, la variable OK prend la valeur 1 si la liste hiérarchique a été correctement créée. Si l'opération ne peut pas être effectuée à cause, par exemple, d'un manque de mémoire, la variable OK prend la valeur 0.

**Note pour l'indépendance de plate-forme :** **BLOB to list** et [LIST TO BLOB](list-to-blob.md) utilisent un format interne 4D pour gérer les listes stockées dans des BLOBs. L'avantage est que vous n'avez pas besoin de vous soucier de la conversion des octets ("byte swapping") entre les plates-formes lorsque vous utilisez ces deux commandes. Autrement dit, avec ces commandes, un BLOB créé sous Windows peut être réutilisé sous Mac OS et vice-versa.

#### Exemple 

Dans l'exemple suivant, la méthode d'un formulaire entrée extrait une liste d'un champ BLOB avant que le formulaire ne s'affiche puis le stocke dans le champ BLOB lorsque la saisie est validée :

```4d
  // Méthode du formulaire [Choses à Faire];"Entrée"
 
 Case of
 
    :(FORM Event=On Load)
       hListe:=BLOB to list([Choses à Faire]Idées)
       If(OK=0)
          hListe:=New list
       End if
 
    :(FORM Event=On Unload)
       CLEAR LIST(hListe;*)
 
    :(bValider=1)
       LIST TO BLOB(hListe;[Choses à Faire]Idées)
 
 End case
```

#### Variables et ensembles système 

La variable OK prend la valeur 1 si la liste a été correctement créée, sinon elle prend la valeur 0\. 

#### Voir aussi 

[LIST TO BLOB](list-to-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 557 |
| Thread safe | &cross; |
| Modifie les variables | OK |


