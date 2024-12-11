---
id: qr-get-document-property
title: QR Get document property
slug: /commands/qr-get-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get document property.Syntax-->**QR Get document property** ( *zone* ; *propriété* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get document property.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| propriété | Integer | &#8594;  | 1=Dialogue d'impression, 2=Unité du document |
| Résultat | Integer | &#8592; | Valeur de la propriété |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get document property.Summary-->La commande **QR Get document property** vous permet de connaître la valeur courante de la *propriété* d'affichage de la boîte de dialogue d'impression ou de l'unité du document présent dans la *zone*.<!-- END REF--> 

Vous pouvez passer dans le paramètre *propriété* une des constantes du thème *QR Propriétés de document* : 

| Constante           | Type        | Valeur | Comment                                                                                                                                                                                                                                                     |
| ------------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qr field separator  | Entier long | 3      | Code de caractère du délimiteur de champ. La valeur par défaut est la variable système FldDelimit (Tab par défaut).                                                                                                                                         |
| qr printing dialog  | Entier long | 1      | Affichage de la boîte de dialogue d'impression :<br/>Si valeur \= 0, la boîte de dialogue d'impression n'est pas affichée avant l'impression.Si valeur \= 1, la boîte de dialogue d'impression est affichée avant l'impression (valeur par défaut). |
| qr record separator | Entier long | 4      | Code de caractère du délimiteur d'enregistrement. La valeur par défaut est la variable système RecDelimit (Retour chariot par défaut).                                                                                                                      |
| qr unit             | Entier long | 2      | Unité du document : <br/>Si valeur \= 0, l'unité du document est le point.Si valeur \= 1, l'unité du document est le centimètre.Si valeur \= 2, l'unité du document est le pouce.                                                                   |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si la valeur du paramètre *propriété* est incorrecte, l’erreur -9852 est générée.

#### Voir aussi 

[QR SET DOCUMENT PROPERTY](qr-set-document-property.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 773 |
| Thread safe | &check; |
| Interdite sur le serveur ||


