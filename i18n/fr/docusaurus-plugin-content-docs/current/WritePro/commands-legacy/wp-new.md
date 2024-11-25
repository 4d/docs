---
id: wp-new
title: WP New
slug: /WritePro/commands/wp-new
displayed_sidebar: docs
---

<!--REF #_command_.WP New.Syntax-->**WP New** {( *source* {; *option*} )} -> Résultat<!-- END REF-->
<!--REF #_command_.WP New.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Text, Blob, Object | &#8594;  | Chaîne : Source HTML,<br/>BLOB : Blob document 4D Write (.4w7/.4wt) ou document 4D Write Pro (.4wp),<br/>Objet : Objet plage ou élément 4D Write Pro |
| option | Integer | &#8594;  | Option d'import des expressions HTML |
| Résultat | Object | &#8592; | Objet 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New.Summary-->La commande **WP New** crée et retourne un nouvel objet 4D Write Pro.<!-- END REF--> L'objet retourné est un document complet pouvant être passé, par exemple, à la commande [WP INSERT DOCUMENT](../commands/wp-insert-document.md).

Par défaut, si vous omettez le paramètre *source*, la commande retourne un objet 4D Write Pro vide.

Vous pouvez également utiliser le paramètre *source*, auquel cas le nouvel objet 4D Write Pro sera prérempli avec le contenu de *source*. Vous pouvez passer :

* un paramètre chaîne : dans ce cas, vous passez une source de type HTML 4D, c'est-à-dire un texte exporté par [WP EXPORT VARIABLE](wp-export-variable.md) avec l'option wk web page html 4D. Ce texte peut contenir des références (balises et expressions 4D) et des images embarquées.
* un paramètre [blob](# "A series of bytes (from 0 to 2 GB in length)") : dans ce cas, vous passez soit :  
   * un document au format 4D Write Pro (.4wp) stocké dans un BLOB. Pour plus d'informations sur le format de document 4D Write Pro, veuillez vous reporter au paragraphe *Format de document .4wp*.  
   * une ancienne zone 4D Write chargée dans un BLOB (les Blobs contenant des documents .4w7 ou .4wt sont acceptés). Dans ce cas, vous pouvez utiliser le paramètre option pour intégrer des expressions HTML en txt dans le document importé (voir ci-dessous).  
   Pour une liste détaillée des fonctions 4D Write qui sont actuellement prises en charge dans les objets 4D Write Pro, veuillez vous référer à la section *Import de documents 4D Write*.  
   Si vous souhaitez importer un document 4D Write (.4w7 ou .4wt) stocké sur disque, utilisez plutôt la commande [WP Import document](../commands/wp-import-document.md).
* un paramètre [objet](# "Données structurées sous forme d'objet natif 4D") qui peut être :
   * une plage.  
   **WP New** retournera un nouveau document créé à partir de cette plage spécifique. À noter que si la plage n'est pas égale à la totalité du document, seule la première section est exportée et les signets, s'il y en a, ne sont pas exportés.
   * un élément (tableau / ligne / paragraphe / image en ligne / en-tête / corps / pied de page / zone de texte / section / sous-section / feuille de style).  
   **WP New** retournera un nouveau document dont le corps (*body*) sera constitué du contenu de l'élément référencé dans le corps (pour une ligne de tableau, le document contiendra un élément tableau constitué de la ligne).
   * un document 4D Write Pro.  
   **WP New** retournera une copie de ce document spécifique.

Par défaut, les expressions HTML insérées dans les anciens documents 4D Write ne sont pas importées (aucune prise en charge de 4D Write Pro). Si vous passez la constante wk import html expressions as text dans le paramètre option, les expressions HTML seront importées en texte brut dans les balises *##htmlBegin##* et *##htmlEnd##* \-- et devront être formatées ultérieurement. Par exemple :

```RAW
##htmlBegin##Titre importébold##htmlEnd##
```

**Note de c* *ompatibilité* : Les feuilles de style de caractères des documents 4D Write hérités utilisent un mécanisme propriétaire, qui n'est pas pris en charge par 4D Write Pro. Afin d'obtenir le meilleur résultat pour les textes importés, les attributs de feuilles de style sont convertis en attributs de style "codés en dur". Les feuilles de style de caractères hérités ne sont pas importants et ne sont plus référencés dans les documents.*

*Character style sheets in legacy 4D Write documents use a proprietary mechanism, which is not supported by 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Legacy character style sheets are not imported and are no longer referenced in the document.*

#### Exemple 1 

Vous voulez créer un objet 4D Write Pro vide :

```4d
 myWPObject:=WP New
```

#### Exemple 2 

Vous voulez créer un nouvel objet 4D Write Pro à l'aide d'un document 4D Write Pro stocké sur disque :

```4d
 var $BlobDoc : Blob
 var myWPArea : Object
 DOCUMENT TO BLOB("myDoc.4wp";$BlobDoc) //charger le document dans un Blob
 myWPArea:=WP New($BlobDoc)
```

#### Exemple 3 

Vous voulez créer un objet 4D Write Pro contenant une simple référence d'expression 4D :

```4d
 var myText : Text
 myText:="Nous sommes le "
 ST INSERT EXPRESSION(myText;"chaine(date du jour;Système date long)";ST End text)
 myWPA:=WP New(myText)
```

#### Exemple 4 

Vous voulez initialiser votre zone 4D Write pro avec un template précédemment créé :

```4d
  //Exporter un template depuis une zone existante
 var wpTemplate : Text
 WP EXPORT VARIABLE(myWPArea;wpTemplate;wk web page html 4D)
 
  // Use le template pour une nouvelle zone
 var myNewWPA : Object
 myNewWPA:=WP New(wpTemplate)
```

#### Exemple 5 

Vous voulez importer dans une nouvelle zone 4D Write Pro un document de l'ancien plug-in 4D Write stocké dans un champ BLOB de l'enregistrement courant, et conserver les expressions HTML :

```4d
 var wpArea : Object
 wpArea:=WP New([Templates]Reference_;wk import html expressions as text)
```

#### Exemple 6 

Vous avez défini un document modèle (*template*) comportant différentes parties préformatées, chacune d'elles étant stockée en tant que signet. Lorsque vous produisez un document final à partir du *template*, vous pouvez traiter chaque signet en tant que nouveau document et l'insérer dans le document final. 

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //lire les signets du template
 $targetRange:=WP New //créer un nouveau document vide (sera le document final)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //traiter l'entête principal nommé "Main_Header"
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //sélectionner la plage
    $RangeDoc:=WP New($Range) //créer un nouveau document depuis la plage
    WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=après remplacement, $buildRange est égal à la fin du texte remplacé
 End if
```

#### Voir aussi 

[WP Import document](../commands/wp-import-document.md)  
[WP INSERT DOCUMENT](../commands/wp-insert-document.md)  