---
id: wp-insert-document
title: WP INSERT DOCUMENT
slug: /WritePro/commands/wp-insert-document
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT DOCUMENT.Syntax-->**WP INSERT DOCUMENT** ( *objCible* ; *docWP* ; *mode* {; *miseAJourPlage*} )<!-- END REF-->
<!--REF #_command_.WP INSERT DOCUMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| docWP | Object | &#8594;  | Document 4D Write Pro à insérer |
| mode | Integer | &#8594;  | Mode d'insertion |
| miseAJourPlage | Integer | &#8594;  | Mode de mise à jour de la plage de sélection |

<!-- END REF-->

## Description 

<!--REF #_command_.WP INSERT DOCUMENT.Summary-->La commande **WP INSERT DOCUMENT** insère le document *docWP* dans la plage *objCible* selon le *mode* d'insertion spécifié et le paramètre *miseAJourPlage*.<!-- END REF-->

Dans *objCible*, passez :

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied / image en ligne / section / sous-section / zone de texte), ou
* un document 4D Write Pro.

Le document inséré *docWP* peut être n'importe quel document 4D Write Pro, créé avec la commande [WP New](wp-new.md) ou [WP Import document](wp-import-document.md). Seuls les éléments du corps du texte sont insérés (*i.e.* les en-têtes, pieds, zones de texte et images ancrées ne sont pas insérés). Les sections et signets de la plage de destination sont préservés. De plus, les éléments sont copiés, ainsi *docWP* peut être ré-utilisé plusieurs fois.

Dans le paramètre *mode*, passez une ou plusieurs constantes suivantes du thème *Constantes 4D Write Pro*, pour indiquer le mode d'insertion à utiliser pour le document dans la plage de sélection objCible du document de destination :

| Constante  | Type        | Valeur | Comment                                    |
| ---------- | ----------- | ------ | ------------------------------------------ |
| wk append  | Entier long | 2      | Insère le contenu à la fin de la cible     |
| wk prepend | Entier long | 1      | Le contenu est inséré au début de la cible |
| wk replace | Entier long | 0      | Remplace le contenu de la cible            |

Vous pouvez combiner une des constantes ci-dessus avec les options d'insertion suivantes :

| Constante                | Type        | Valeur | Comment                                           |
| ------------------------ | ----------- | ------ | ------------------------------------------------- |
| wk freeze expressions    | Entier long | 64     | Fige les expressions lors de l'insertion          |
| wk keep paragraph styles | Entier long | 128    | Conserver les styles du paragraphe de destination |

* Si objCible est une plage, vous pouvez utiliser le paramètre optionnel *miseAJourPlage* pour passer une des constantes suivantes et indiquer si le contenu inséré est inclus ou pas dans la plage résultante :  
    
| Constante             | Type        | Valeur | Comment                                                         |  
| --------------------- | ----------- | ------ | --------------------------------------------------------------- |  
| wk exclude from range | Entier long | 1      | Le contenu inséré n'est pas inclus dans la plage mise à jour    |  
| wk include in range   | Entier long | 0      | Le contenu inséré est inclus dans la plage mise à jour (défaut) |  
    
Si vous ne passez pas le paramètre *miseAJourPlage*, par défaut, le contenu inséré sera inclus dans la plage de sélection résultante.
* Si objCible n'est pas une plage, miseAJourPlage est ignoré.

## Exemple 1 

Vous souhaitez remplacer le contenu d'un document par le texte sélectionné d'un autre document :

```4d
 $tempRange:=WP Get selection(WPTemplate) //on lit la sélection utilisateur dans le document WPTemplate
 $doctoCopy:=WP New($tempRange) //on crée un nouveau document à partir de WPTemplate
 WP INSERT DOCUMENT(WPDoc;$doctoCopy;wk replace) //on remplace le contenu de WPDoc par le contenu du nouveau document
```

## Exemple 2 

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

## Voir aussi 

  
[WP INSERT BREAK](wp-insert-break.md)  
[WP INSERT PICTURE](wp-insert-picture.md)  
[WP New](wp-new.md)  