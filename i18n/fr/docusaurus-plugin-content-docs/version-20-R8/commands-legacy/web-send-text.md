---
id: web-send-text
title: WEB SEND TEXT
slug: /commands/web-send-text
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND TEXT.Syntax-->**WEB SEND TEXT** ( *texteHTML* {; *type*} )<!-- END REF-->
<!--REF #_command_.WEB SEND TEXT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| texteHTML | Text | &#8594;  | Champ ou variable texte au format HTML à envoyer au navigateur |
| type | Text | &#8594;  | Type MIME |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SEND TEXT.Summary-->La commande **WEB SEND TEXT** permet d’envoyer directement des données texte formatées en HTML.<!-- END REF-->

Le paramètre *texteHTML* contient les données à envoyer. 4D n’effectue aucun contrôle sur le contenu de ce paramètre, vous devez donc veiller à ce que le codage HTML soit correct. 

Les éventuelles références aux variables 4D et balises de type *4DSCRIPT* dans le texte sont toujours analysées.

Par défaut, si vous omettez le paramètre *type*, 4D assume que les données envoyées sont du type "text/html". La commande équivaut alors strictement à l’envoi d’un BLOB ayant le type "text/html" à l’aide de la commande [WEB SEND BLOB](web-send-blob.md).   
Vous pouvez également préciser dans *type* le type MIME du texte à envoyer. Pour plus d’informations sur les types MIME pris en charge, reportez-vous à la description de la commande [WEB SEND BLOB](web-send-blob.md).

#### Exemple 

La méthode suivante :

```4d
 TEXT TO BLOB(""+String(Heure courante)+"";$blob;UTF8 Texte sans longueur)
 WEB SEND BLOB($blob;"text/html")
```

... peut être remplacée par :

```4d
 WEB SEND TEXT(""+String(Heure courante)+"")
```

#### Voir aussi 

[WEB SEND BLOB](web-send-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 677 |
| Thread safe | &check; |


