---
id: qr-set-html-template
title: QR SET HTML TEMPLATE
slug: /commands/qr-set-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HTML TEMPLATE.Syntax-->**QR SET HTML TEMPLATE** ( *zone* ; *modèle* )<!-- END REF-->
<!--REF #_command_.QR SET HTML TEMPLATE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| modèle | Text | &#8594;  | Code du modèle HTML |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QR SET HTML TEMPLATE.Summary-->La commande **QR SET HTML TEMPLATE** permet de définir le *modèle* HTML à utiliser pour la zone d'état rapide référencée par *zone*.<!-- END REF--> Ce modèle sera utilisé lors de l'exécution des états au format HTML. 

Le modèle est construit à l'aide d'un ensemble de balises de traitement des données. Ce fonctionnement vous permet de générer des documents HTML proches des états originaux ou des documents à l'apparence entièrement personnalisée.

**Note :** Vous devez appeler au préalable [QR SET DESTINATION](qr-set-destination.md) pour définir le format HTML comme destination de sortie.

#### Balises HTML 

*<!--#4DQRheader--> ... <!--/#4DQRheader-->*  
Les intitulés des colonnes seront insérés entre ces balises. Ces balises sont généralement utilisées pour définir la ligne de titre de l'état.

*<!--#4DQRrow--> ... <!--/#4DQRrow-->*  
Les informations insérées entre ces balises seront répétées pour chaque ligne de données (détail et sous-total compris). 

*<!--#4DQRcol--> ... <!--/#4DQRcol-->*  
Les informations insérées entre ces balises seront répétées pour chaque colonne de données à l'intérieur des lignes. Le tri de la colonne est identique à celui de l'état. Lorsqu'elles sont utilisées conjointement à *<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*, les balises *<!--#4DQRcol--> ... <!--/#4DQRcol-->* ne seront effectives qu'avec les colonnes dont le contenu n'est pas inséré à l'aide de *<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*.  
Par exemple, dans un état comportant cinq colonnes, vous utilisez les balises *<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->* afin d'insérer les données de la deuxième colonne. *<!--#4DQRcol--> ... <!--/#4DQRcol-->* traiteront, pour chaque ligne, les colonnes 1, 3, 4 et 5\. Ces balises ignoreront la colonne dont le contenu est publié à l'aide de *<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->*. 

*<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*  
Les informations insérées entre ces balises seront extraites de la colonne de l'état dont le numéro est “n”. Si, par exemple, dans un état HTML à trois colonnes, vous souhaitez afficher les colonnes dans un ordre différent de celui de l'état initial, vous pouvez écrire :  
*<!--#4DQRrow--> <!--#4DQRcol;3--> ... <!--/#4DQRcol;3--><!--#4DQRcol;2--> ... <!--/#4DQRcol;2--><!--#4DQRcol;1--> ... <!--/#4DQRcol;1--> <!--/#4DQRrow-->*  
Dans cet exemple, les colonnes sont générées dans l'ordre inverse de l'état.

*<!--#4DQRfont--> ... <!--/#4DQRfont-->*  
Les informations insérées entre ces balises seront utilisées pour la définition de la police de la colonne ou cellule courante.   
*<!--#4DQRfont-->* sera remplacé par une définition de police HTML et *<!--/#4DQRfont-->* sera remplacé par la balise de fermeture standard (*</font>*).

*<!--#4DQRface--> ... <!--/#4DQRface-->*  
Les informations insérées entre ces balises seront utilisées pour la définition du style de la colonne ou cellule courante.  
*<!--#4DQRface-->* sera remplacé par une définition de style HTML *<!--#4DQRface-->* sera remplacé par la balise de fermeture standard (*</face>*).

*<!--#4DQRbgcolor-->*  
Cette balise de couleur sera remplacée par la définition de couleur de la cellule courante.

*<!--#4DQRdata-->*  
Cette balise sera remplacée par les données de la cellule courante.

*<!--#4DQRlHeader--><!--#4DQRdata--><!--/#4DQRlHeader-->*  
*<!--#4DQRcHeader--><!--#4DQRdata--><!--/#4DQRcHeader-->*  
*<!--#4DQRrHeader--><!--#4DQRdata--><!--/#4DQRrHeader-->*  
Ces balises seront remplacées respectivement par les données de l'en-tête gauche, central et droit.

*<!--#4DQRlFooter--><!--#4DQRdata--><!--/#4DQRlFooter-->*  
*<!--#4DQRcFooter--><!--#4DQRdata--><!--/#4DQRcFooter-->*  
*<!--#4DQRrFooter--><!--#4DQRdata--><!--/#4DQRrFooter-->*  
Ces balises seront remplacées respectivement par les données du pied de page gauche, central et droit.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR Get HTML template](qr-get-html-template.md)  