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
| Résultat       | Object                  | &#8592; | Object referencing the picture                                         |

<!-- END REF-->

## Description

La commande **WP Insert picture**<!--REF #_command_.WP Insert picture.Summary--> insère *picture* ou *pictureFileObj* dans le *targetObj* spécifié en fonction des paramètres *mode* d'insertion et *rangeUpdate*, et renvoie une référence à l'élément image.<!-- END REF--> L'image sera insérée en tant que caractère dans *targetObj*.

In *targetObj*, you can pass:

- A range
- An element (table / row / paragraph / body / header / footer / inline picture / section / subsection)
- A 4D Write Pro document

For the second parameter, you can pass either:

- In *picture*:
 - A picture field or variable
 - A string containing a path to a picture file stored on disk, in the system syntax.
  If you use a string, you can pass either a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file.
- In *pictureFileObj* : a `File` object representing a picture file.

Any picture format [supported by 4D](../../FormEditor/pictures.md#native-formats-supported) can be used. You can get the list of available picture formats using the [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) command. If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.

In the *mode* parameter, pass one of the following constants to indicate the insertion mode to be used on the picture in the document:

| Constante  | Type    | Valeur | Commentaire                             |
| ---------- | ------- | ------ | --------------------------------------- |
| wk append  | Integer | 2      | Insérer le contenu à la fin de la cible |
| wk prepend | Integer | 1      | Insérer le contenu au début de la cible |
| wk replace | Integer | 0      | Remplacer le contenu de la cible        |

If *targetObj* is a range, you can optionally use the *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted picture is included in the resulting range:

| Constante             | Type    | Valeur | Commentaire                                                        |
| --------------------- | ------- | ------ | ------------------------------------------------------------------ |
| wk exclude from range | Integer | 1      | Picture not included in the updated range                          |
| wk include in range   | Integer | 0      | Picture included in the updated range (default) |

If you do not pass a *rangeUpdate* parameter, by default the inserted picture is included in the resulting range.

- Si *targetObj* n'est pas une plage, *rangeUpdate* est ignoré.

## Exemple 1

In the following example, a user selects the picture they want to insert into the range object and will be warned if this picture could not be inserted:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //ask user to choose a picture on the disk that they want to insert
 $imgRef:=Open document("")
  //if user does not cancel
 If(OK=1)
  //if the file is a supported picture file
    If(Is picture file(document))
  // insert picture selected by user
       WP Insert picture($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //if the insertion failed, alert the user
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## Exemple 2

You want to insert a picture in the body of the documment:

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