---
id: get-document-icon
title: GET DOCUMENT ICON
slug: /commands/get-document-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET DOCUMENT ICON.Syntax-->**GET DOCUMENT ICON** ( *cheminDoc* ; *icône* {; *taille*} )<!-- END REF-->
<!--REF #_command_.GET DOCUMENT ICON.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminDoc | Text | &#8594;  | Nom ou chemin d’accès du fichier duquel obtenir l’icône ou chaîne vide pour afficher la boîte de dialogue d’ouverture de fichiers |
| icône | Picture, Picture | &#8592; | Icône du document |
| taille | Integer | &#8594;  | Taille de l’icône (en pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET DOCUMENT ICON.Summary-->La commande **GET DOCUMENT ICON** retourne dans le champ ou la variable image 4D *icône*, l’icône du document dont vous avez passé le nom ou le chemin d’accès complet dans *cheminDoc*.<!-- END REF--> *cheminDoc* peut désigner un fichier de tout type (document, exécutable, raccourci ou alias...) ou un dossier.

Passez dans *cheminDoc* le chemin d’accès absolu du document dont vous souhaitez récupérer l’icône. Vous pouvez passer uniquement le nom du document ou un chemin d’accès relatif, dans ce cas il doit se trouver dans le dossier courant de la base (généralement, le dossier contenant le fichier de structure de la base).   
Si vous passez une chaîne vide dans *cheminDoc*, la boîte de dialogue standard d’ouverture de fichiers apparaît, permettant à l’utilisateur de désigner un fichier. Une fois la boîte de dialogue validée, la variable système Document contient le chemin d’accès complet du fichier sélectionné. 

Passez dans le paramètre *icône* un champ ou une variable image 4D. Après l’exécution de la commande, ce paramètre contient l’icône du fichier (au format PICT).  
  
Le paramètre optionnel *taille* vous permet d’indiquer les dimensions de l’image que vous souhaitez obtenir. La valeur du paramètre correspond à la longueur d’un côté du carré dans lequel l’image sera incluse. Généralement, les icônes sont définies en 32x32 pixels (“grande icône”) ou 16x16 pixels (“petite icône”). Si vous passez 0 ou omettez le paramètre, la commande retourne l’icône dans sa plus grande taille disponible.
