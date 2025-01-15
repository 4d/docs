---
id: qr-set-header-and-footer
title: QR SET HEADER AND FOOTER
slug: /commands/qr-set-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HEADER AND FOOTER.Syntax-->**QR SET HEADER AND FOOTER** ( *zone* ; *sélecteur* ; *titreGauche* ; *titreCentre* ; *titreDroit* ; *hauteur* {; *image* {; *alignementImage*}} )<!-- END REF-->
<!--REF #_command_.QR SET HEADER AND FOOTER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| sélecteur | Integer | &#8594;  | 1 = En-tête, 2 = Pied de page |
| titreGauche | Text | &#8594;  | Texte affiché sur le côté gauche |
| titreCentre | Text | &#8594;  | Texte affiché au centre |
| titreDroit | Text | &#8594;  | Texte affiché sur le côté droit |
| hauteur | Integer | &#8594;  | Hauteur de l'en-tête ou du pied de page |
| image | Picture | &#8594;  | Image à afficher |
| alignementImage | Integer | &#8594;  | Alignement de l'image |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET HEADER AND FOOTER.Summary-->La commande **QR SET HEADER AND FOOTER** vous permet de définir le contenu et la taille de l'en-tête et du pied de page de la *zone*.<!-- END REF--> 

Le paramètre *sélecteur* vous permet de définir la zone à affecter :   
• si *sélecteur* vaut 1, l'en-tête sera affecté ;   
• si *sélecteur* vaut 2, le pied de page sera affecté.

Les paramètres *titreGauche*, *titreCentre* et *titreDroit* définissent le contenu des en-têtes ou pieds de page situés respectivement à gauche, au centre et à droite. 

Le paramètre *hauteur* indique la hauteur de l'en-tête ou du pied de page, exprimée dans l'unité courante de l'état rapide. 

Le paramètre *image* contient l'image à afficher facultativement dans l'en-tête ou le pied de page. 

Le paramètre *alignementImage* définit la propriété d'alignement de l'image passée dans *image* :

* si *alignementImage* vaut 1, l'image est alignée sur la gauche.
* si *alignementImage* vaut 2, l'image est centrée.
* si *alignementImage* vaut 3, l'image est alignée sur la droite.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *sélecteur* est incorrect, l’erreur -9852 est générée.

#### Exemple 

L'instruction suivante place le libellé “Titre du centre” dans l'en-tête de l'état rapide dans MaZone et définit sa hauteur à 200 points :

```4d
 QR SET HEADER AND FOOTER(MaZone;1;"";"Titre du centre";"";200)
```

#### Voir aussi 

[QR GET HEADER AND FOOTER](qr-get-header-and-footer.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 774 |
| Thread safe | &cross; |
| Modifie les variables | error |


