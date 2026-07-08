---
id: wp-insert-document-body
title: WP Insert document body
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert document body.Syntax-->**WP Insert document body** ( *targetObj* : Object ; *wpDoc* : Object ; *mode* : Integer {; *rangeUpdate* : Integer} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert document body.Params-->

<div class="no-index">

| Paramètres  | Type    |                             | Description                                                     |
| ----------- | ------- | --------------------------- | --------------------------------------------------------------- |
| targetObj   | Object  | &#8594; | Plage ou élément ou document 4D Write Pro                       |
| wpDoc       | Object  | &#8594; | Document 4D Write Pro                                           |
| mode        | Integer | &#8594; | Mode d'insertion                                                |
| rangeUpdate | Integer | &#8594; | Mode de mise à jour de la plage                                 |
| Résultat    | Object  | &#8592; | Objet de plage de texte référençant le corps du document inséré |

</div>
<!-- END REF-->

## Description

La commande **WP Insert document body** <!--REF #_command_.WP Insert document body.Summary--> insère le corps du document *wpDoc* dans l'objet *targetObj* spécifié, conformément aux paramètres *mode* et *rangeUpdate* transmis, et retourne la plage du corps du document inséré.<!-- END REF-->

Dans *targetObj*, passez :

- Une plage, ou
- Un élément (tableau / ligne / paragraphe / corps / en-tête / pied de page / image en ligne / section / sous-section / zone de texte), ou
- un document 4D Write Pro.

Le document *wpDoc* inséré peut être n'importe quel document 4D Write Pro créé à l'aide de la commande [WP New](../commands/wp-new) ou [WP Import document](wp-import-document.md). Seuls les éléments enfants du corps sont insérés (c'est-à-dire que les en-têtes, les pieds de page, les zones de texte et les images ancrées ne sont pas insérés). Les sections et les signets de la plage de destination sont préservés. De plus, les éléments sont copiés, donc *wpDoc* peut être réutilisé plusieurs fois.

Dans le paramètre *mode*, passer une ou une combinaison des constantes suivantes du thème *4D Write Pro Constants* pour indiquer le mode d'insertion à utiliser pour le document dans la destination *targetObj* :

| Constante  | Type    | Valeur | Commentaire                             |
| ---------- | ------- | ------ | --------------------------------------- |
| wk append  | Integer | 2      | Insérer le contenu à la fin de la cible |
| wk prepend | Integer | 1      | Insérer le contenu au début de la cible |
| wk replace | Integer | 0      | Remplacer le contenu de la cible        |

Vous pouvez combiner une des constantes précédentes avec les options d'insertion suivantes :

| Constante                | Type    | Valeur | Commentaire                                                                                                                                                                          |
| ------------------------ | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wk freeze expressions    | Integer | 64     | Figer les expressions au moment de l'insertion                                                                                                                                       |
| wk keep paragraph styles | Integer | 128    | Appliquer les styles de paragraphe de destination. Dans le cas d'une opération d'ajout de wk, le contenu est inséré sans saut de paragraphe initial. |

Dans le paramètre *rangeUpdate* (Optionnel); si *targetObj* est une plage, vous pouvez passer une des constantes suivantes pour spécifier si le contenu inséré est inclus dans la plage résultante :

| Constante             | Type    | Valeur | Commentaire                                                                     |
| --------------------- | ------- | ------ | ------------------------------------------------------------------------------- |
| wk exclude from range | Integer | 1      | Les contenus insérés ne sont pas inclus dans la plage mise à jour               |
| wk include in range   | Integer | 0      | Contenu inséré inclus dans la plage mise à jour (par défaut) |

Si vous ne passez pas un paramètre *rangeUpdate*, par défaut, le contenu inséré est inclus dans la plage résultante.

- Si *targetObj* n'est pas une plage, *rangeUpdate* est ignoré.

## Exemple 1

Vous souhaitez remplacer le contenu d'un document par le texte sélectionné d'un autre documentt :

```4d
 $tempRange:=WP Get selection(WPTemplate) //on lit la sélection utilisateur dans le document WPTemplate
 $doctoCopy:=WP New($tempRange) //on crée un nouveau document à partir de WPTemplate
 WP Insert document body(WPDoc;$doctoCopy;wk replace) //on remplace le contenu de WPDoc par le contenu du nouveau document
```

## Exemple 2

Vous avez défini un document modèle (template) avec différentes parties préformatées, chacune d'entre elles étant stockée en tant que signet. Lorsque vous produisez un document final à partir du modèle, vous pouvez extraire n'importe quel signet en tant que nouveau document et l'insérer dans le document final.

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //lire les signets du modèle (template)
 $targetRange:=WP New //créer un nouveau document vide (sera le document final)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //traiter l'entête principal nommé "Main_Header"
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //sélectionner la plage
    $RangeDoc:=WP New($Range) //créer un nouveau document depuis la plage
    WP Insert document body($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=après remplacement, $targetRange est égal à la fin du texte remplacé
 End if
```

## Exemple 3

Vous voulez définir le style et la taille de la police pour le corps du document inséré :

```4d
WPdoc:=WP Import document("myFile.4wp")
$range1:=WP Insert document body(WParea; WPdoc; wk append)

WP SET ATTRIBUTES($range1; wk font size; "12pt")
WP SET ATTRIBUTES($range1; wk font family; "Times New Roman")
WP SET ATTRIBUTES($range1; wk font italic; wk true)
```

## Voir également

[WP INSERT BREAK](wp-insert-break.md)\
[WP INSERT PICTURE](wp-insert-picture.md)\
[WP New](../commands/wp-new)
