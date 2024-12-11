---
id: qr-get-header-and-footer
title: QR GET HEADER AND FOOTER
slug: /commands/qr-get-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR GET HEADER AND FOOTER.Syntax-->**QR GET HEADER AND FOOTER** ( *zone* ; *sélecteur* ; *titreGauche* ; *titreCentre* ; *titreDroit* ; *hauteur* {; *image* {; *alignementImage*}} )<!-- END REF-->
<!--REF #_command_.QR GET HEADER AND FOOTER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| sélecteur | Integer | &#8594;  | 1 = En-tête, 2 = Pied de page |
| titreGauche | Text | &#8592; | Texte affiché sur le côté gauche |
| titreCentre | Text | &#8592; | Texte affiché au centre |
| titreDroit | Text | &#8592; | Texte affiché sur le côté droit |
| hauteur | Integer | &#8592; | Hauteur de l'en-tête ou du pied de page |
| image | Picture | &#8592; | Image à afficher |
| alignementImage | Integer | &#8592; | Alignement de l'image |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET HEADER AND FOOTER.Summary-->La commande **QR GET HEADER AND FOOTER** vous permet de récupérer le contenu et la taille de l'en-tête et du pied de page de la *zone*.<!-- END REF--> 

Le paramètre *sélecteur* vous permet de définir la zone à lire : 

* si *sélecteur* vaut 1, les informations de l''en-tête seront récupérées ;
* si *sélecteur* vaut 2, les informations du pied de page seront récupérées.

Les paramètres *titreGauche*, *titreCentre* et *titreDroite* retournent le contenu des en-têtes ou pieds de page situés respectivement à gauche, au centre et à droite. 

Le paramètre *hauteur* retourne la hauteur de l'en-tête ou du pied de page, exprimée dans l'unité courante de l'état rapide. 

Le paramètre *image* retourne le cas échéant l'image affichée dans l'en-tête ou le pied de page.   
Le paramètre *alignementImage* retourne la propriété d'alignement de l'image :

* si *alignementImage* vaut 1, l'image est alignée sur la gauche.
* si *alignementImage* vaut 2, l'image est centrée.
* si *alignementImage* vaut 3, l'image est alignée sur la droite.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *sélecteur* est incorrect, l’erreur -9852 est générée.

#### Exemple 

La méthode suivante affiche le contenu et la hauteur des libellés des en-têtes :

```4d
 QR GET HEADER AND FOOTER(MaZone;1;$TexteGauche;$TexteCentre;$TexteDroite;$Hauteur)
 Case of
    :($TexteGauche #"")
       ALERT("Libellé de l'en-tête de gauche : "+Char(34)+$TexteGauche+Char(34))
    :($TexteCentre #"")
       ALERT("Libellé de l'en-tête du centre : "+Char(34)+$TexteCentre+Char(34))
    :($TexteDroite #"")
       ALERT("Libellé de l'en-tête de droite : "+Char(34)+$TexteDroite+Char(34))
    Else
       ALERT("Aucun libellé d'en-tête dans cet Etat.")
 End case
 ALERT("Hauteur des en-têtes : "+String($Hauteur))
```

#### Voir aussi 

[QR SET HEADER AND FOOTER](qr-set-header-and-footer.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 775 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


