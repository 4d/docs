---
id: base64-encode
title: BASE64 ENCODE
slug: /commands/base64-encode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 ENCODE.Syntax-->**BASE64 ENCODE** ( àEncoder {; *encodé*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 ENCODE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| àEncoder | Blob, Text | &#8594;  | Valeur à encoder |
| &#8592; | Valeur encodée (si le paramètre encodé est omis) |
| encodé | Blob, Text | &#8592; | Valeur encodée |
| * | Opérateur | &#8594;  | Encoder au format Base64URL |

<!-- END REF-->

#### Description 

<!--REF #_command_.BASE64 ENCODE.Summary-->La commande **BASE64 ENCODE** encode la valeur texte ou BLOB passée dans le paramètre *àEncoder* en Base64 ou Base64URL.<!-- END REF--> 

L'encodage Base64 modifie les données codées de 8 octets pour ne garder que 7 octets utiles au maximum.  
Cet encodage est requis, par exemple, pour gérer des blobs à l'aide de xml. Bas64URL est une alternative qui encode avec un traitement spécifique pour les URL et les noms de fichiers (voir [rfc4648](https://tools.ietf.org/html/rfc4648#section-5)).

Dans àEncoder, passez une valeur texte ou blob à encoder.

**Note :** Lorsque vous passez une valeur texte, la commande encode la représentation utf-8 du texte.

Si vous passez le paramètre *encodé*, il reçoit sous forme de texte ou de blob le contenu encodé de àEncoder à l’issue de l’exécution de la commande. Dans ce cas, le paramètre àEncoder lui-même n’est pas modifié par la commande. 

Si vous omettez le paramètreencodé, la commande modifie directement le paramètre àEncoder.

Par défaut, si le paramètre *\** est omis, la commande utilise un encodage Base64\. Si vous passez le paramètre *\**, la commande utilise un encodage Base64URL.

#### Voir aussi 

[BASE64 DECODE](base64-decode.md)  
[Generate digest](generate-digest.md)  
*Présentation des commandes XML DOM*  
[XML DECODE](xml-decode.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 895 |
| Thread safe | &check; |


