---
id: open-color-picker
title: OPEN COLOR PICKER
slug: /commands/open-color-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN COLOR PICKER.Syntax-->**OPEN COLOR PICKER** {( *texteOuFond* )}<!-- END REF-->
<!--REF #_command_.OPEN COLOR PICKER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| texteOuFond | Integer | &#8594;  | 0 ou omis = couleur du texte, 1 = couleur du fond du texte |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN COLOR PICKER.Summary-->La commande **OPEN COLOR PICKER** affiche la boîte de dialogue de sélection de couleur du système.<!-- END REF--> 

**Note :** Cette boîte de dialogue est modale sous Windows mais pas sous OS X.

Si l’utilisateur sélectionne une couleur et valide la boîte de dialogue, la couleur choisie est appliquée à la sélection courante de texte dans l’objet ayant le focus, si la propriété "Autoriser sélecteur couleur/police" est cochée pour cet objet (cf. manuel *Mode Développement*).

Si vous passez 0 dans le paramètre *texteOuFond* ou omettez ce paramètre, la couleur sélectionnée sera appliquée au texte. Si vous passez 1 dans *texteOuFond*, la couleur sélectionnée sera appliquée au fond du texte. 

Si la couleur a été modifiée, l’événement formulaire On After Edit est généré pour l’objet. 

#### Voir aussi 

[OPEN FONT PICKER](open-font-picker.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1304 |
| Thread safe | &check; |
| Interdite sur le serveur ||


