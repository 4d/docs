---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* {; *} ) : Real<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Text, Time | &#8594;  | Numéro de référence de document ou Nom de document |
| * | Opérateur | &#8594;  | (Mac OS uniquement) Si omis : taille de la data fork, si passé : taille de la resource fork |
| Résultat | Real | &#8592; | Taille (en octets) de document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get document size.Summary-->La commande **Get document size** retourne la taille, exprimée en octets, d'un document.<!-- END REF-->

Si le document est ouvert, passez son numéro de référence dans *document*.  
Si le document n'est pas ouvert, passez son nom ou son chemin d'accès dans *document*.

Sous Mac OS, si vous ne passez pas le paramètre optionnel *\**, la taille de la data fork est retournée. Si vous passez le paramètre optionnel *\**, la taille de la resource fork est retournée.

#### Voir aussi 

[Get document position](get-document-position.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET DOCUMENT SIZE](set-document-size.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 479 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


