---
id: wp-insert-picture
title: WP Insert picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert picture.Syntax-->**WP Insert picture** ( *targetObj* ; *picture* ; *mode* {; *rangeUpdate*} ): Object<br/>**WP Insert picture** ( *targetObj* ; *pictureFileObj*; *mode* {; *rangeUpdate*}): Object<!-- END REF-->

<!--REF #_command_.WP Insert picture.Params-->

| Paramètres     | Type                    |                             | Description                                                            |
| -------------- | ----------------------- | --------------------------- | ---------------------------------------------------------------------- |
| targetObj      | Object                  | &#8594; | Plage ou élément ou document 4D Write Pro                              |
| picture        | Picture                 | &#8594; | Champ image ou variable, ou chemin vers le fichier image sur le disque |
| pictureFileObj | 4D.File | &#8594; | Un objet Fichier représentant un fichier image.        |
| mode           | Integer                 | &#8594; | Mode d'insertion                                                       |
| rangeUpdate    | Integer                 | &#8594; | Mode de mise à jour de la plage                                        |
| Résultat       | Object                  | &#8592; | Objet référençant l'image                                              |

<!-- END REF-->

## Description

La commande **WP Insert picture**<!--REF #_command_.WP Insert picture.Summary--> insère *picture* ou *pictureFileObj* dans le *targetObj* spécifié en fonction des paramètres *mode* d'insertion et *rangeUpdate*, et renvoie une référence à l'élément image.<!-- END REF--> L'image sera insérée en tant que caractère dans *targetObj*.

In *targetObj*, you can pass:

- Une plage
- Un élément (tableau / ligne / paragraphe / corps / en-tête / pied de page / image en ligne / section / sous-section)
- Un document 4D Write Pro

Pour le deuxième paramètre, vous pouvez passer soit :

- Dans *picture*:
 - Champ ou variable d'image
 - Chaîne contenant le chemin d'accès à un fichier d'image stocké sur le disque, dans la syntaxe du système.
  Si vous utilisez une chaîne, vous pouvez fournir soit un chemin d'accès complet, soit un chemin d'accès relatif au fichier de structure de la base de données. Vous pouvez également transmettre un nom de fichier, auquel cas le fichier doit être situé à côté du fichier de structure de la base de données. You can also pass a file name, in which case the file must be located next to the database structure file.
- Dans *pictureFileObj* : un objet `File` représentant un fichier image.

N'importe quel format d'image [supporté par 4D](../../FormEditor/pictures.md#native-formats-supported) peut être utilisé. Vous pouvez obtenir la liste des formats d'image disponibles en utilisant la commande [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Si l'image encapsule plusieurs formats (codecs), 4D Write Pro ne conserve qu'un format pour l'affichage et un format pour l'impression (si différent) dans le document ; les "meilleurs" formats sont automatiquement sélectionnés.

Dans le paramètre *mode*, passez l'une des constantes suivantes pour indiquer le mode d'insertion à utiliser pour l'image dans le document :

| Constante  | Type    | Valeur | Commentaire                             |
| ---------- | ------- | ------ | --------------------------------------- |
| wk append  | Integer | 2      | Insérer le contenu à la fin de la cible |
| wk prepend | Integer | 1      | Insérer le contenu au début de la cible |
| wk replace | Integer | 0      | Remplacer le contenu de la cible        |

Si *targetObj* est une plage, vous pouvez éventuellement utiliser le paramètre *rangeUpdate* pour transmettre l'une des constantes suivantes afin de spécifier si l'image insérée est incluse ou non dans la plage résultante :

| Constante             | Type    | Valeur | Commentaire                                                             |
| --------------------- | ------- | ------ | ----------------------------------------------------------------------- |
| wk exclude from range | Integer | 1      | Image non incluse dans la plage mise à jour                             |
| wk include in range   | Integer | 0      | Image incluse dans la plage mise à jour (par défaut) |

Si vous ne passez pas de paramètre *rangeUpdate*, l'image insérée est incluse par défaut dans la plage résultante.

- Si *targetObj* n'est pas une plage, *rangeUpdate* est ignoré.

## Exemple 1

Dans l'exemple suivant, un utilisateur sélectionne l'image qu'il souhaite insérer dans l'objet plage et sera averti si cette image n'a pas pu être insérée :

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //on demande à l'utilisateur de choisir, sur le disque,l'image qu'il souhaite insérer
 $imgRef:=Open document("")
  //si l'utilisateur n'annule pas
 If(OK=1)
  //si le format du fichier image est pris en charge
    If(Is picture file(document))
  //on insère l'image
       WP Insert picture($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //si l'insertion a échoué, on informe l'utilisateur
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## Exemple 2

Vous souhaitez insérer une image dans le corps du document :

```4d
var $file : 4D.File
var $pictRef : Object

$file:=File("/RESOURCES/NovelCover1.jpg")

WParea:=WP New
$pictRef:=WP Insert picture(WParea; $file; wk replace)

```

## Voir également

[WP Insert document body](wp-insert-document-body.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)