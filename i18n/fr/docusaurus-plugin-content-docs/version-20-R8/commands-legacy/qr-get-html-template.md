---
id: qr-get-html-template
title: QR Get HTML template
slug: /commands/qr-get-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR Get HTML template.Syntax-->**QR Get HTML template** ( *zone* ) : Text<!-- END REF-->
<!--REF #_command_.QR Get HTML template.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| Résultat | Text | &#8592; | Code HTML utilisé comme modèle |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get HTML template.Summary-->La commande **QR Get HTML template** retourne le modèle HTML utilisé pour la zone d'état rapide référencée par *zone*.<!-- END REF--> La valeur retournée, de type texte, contient la totalité du code HTML utilisé comme modèle. 

Si aucun modèle spécifique n'a été défini, le code du modèle par défaut est retourné.   
A noter que si le format de destination HTML n'a pas été défini pour l'état (manuellement ou par programmation), aucune valeur n'est retournée. 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR SET HTML TEMPLATE](qr-set-html-template.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 751 |
| Thread safe | &cross; |
| Modifie les variables | error |


