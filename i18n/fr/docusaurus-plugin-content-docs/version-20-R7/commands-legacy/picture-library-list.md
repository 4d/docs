---
id: picture-library-list
title: PICTURE LIBRARY LIST
slug: /commands/picture-library-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE LIBRARY LIST.Syntax-->**PICTURE LIBRARY LIST** ( *refsImages* ; *nomsImages* )<!-- END REF-->
<!--REF #_command_.PICTURE LIBRARY LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refsImages | Integer array | &#8592; | Numéros de référence des images stockées dans la bibliothèque d'images |
| nomsImages | Text array | &#8592; | Noms des images stockées dans la bibliothèque d'images |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.PICTURE LIBRARY LIST.Summary-->La commande **PICTURE LIBRARY LIST** retourne les numéros de référence et le nom des images stockées dans la bibliothèque d’images de la base de données.<!-- END REF--> 

Après l’appel, vous récupérez les numéros de référence des images dans le tableau *refsImages* et leurs noms dans le tableau *nomsImages*. Les deux tableaux sont synchronisés : le nième élément de *refsImages* est le numéro de référence de l'image de la bibliothèque dont le nom est retourné dans le nième élément de *nomsImages*.

Si nécessaire, la commande crée et dimensionne automatiquement les tableaux *refsImages* et *nomsImages*. 

La longueur maximale du nom d’une image de la bibliothèque est de 255 caractères.

Si la bibliothèque d’images est vide, les deux tableaux retournés seront vides.

Pour obtenir le nombre d’images contenues dans la bibliothèque, il vous suffit de tester la taille d’un des deux tableaux à l'aide de la fonction [Size of array](size-of-array.md).

#### Exemple 1 

Le code suivant retourne le contenu de la bibliothèque d'images dans les tableaux *telRefImage* et *taNomImage* :

```4d
 PICTURE LIBRARY LIST(telRefImage;taNomImage)
```

#### Exemple 2 

L’exemple suivant teste si la bibliothèque d’images est vide ou non :

```4d
 PICTURE LIBRARY LIST(telRefImage;taNomImage)
 If(Size of array(telRefImage)=0)
    ALERT("La bibliothèque d’images est vide.")
 Else
    ALERT("La bibliothèque d’images contient "+String(Taille tableau(tlRefImage))+" images.")
 End if
```

#### Exemple 3 

L'exemple suivant exporte la Bibliothèque d’Images vers un document stocké sur disque :

```4d
 PICTURE LIBRARY LIST($alRefImage;$asNomImage)
 $vlNbImages:=Size of array($alRefImage)
 If($vlNbImages>0)
    SET CHANNEL(12;"")
    If(OK=1)
       $vsTag:="4DV6PICTURELIBRARYEXPORT"
       SEND VARIABLE($vsTag)
       SEND VARIABLE($vlNbImages)
       gError:=0
       For($vlImage;1;$vlNbImages)
          $vlRefImage:=$alRefImage{$vlImage}
          $vsNomImage:=$asNomImage{$vlImage}
          GET PICTURE FROM LIBRARY($alRefImage{$vlImage};$vgImage)
          If(OK=1)
             SEND VARIABLE($vlRefImage)
             SEND VARIABLE($vsNomImage)
             SEND VARIABLE($vgImage)
          Else
             $vlImage:=$vlImage+1
             gError:=-108
          End if
       End for
       SET CHANNEL(11)
       If(gError#0)
          ALERT("La bibliothèque d'images n'a pas pu être exportée, recommencez avec davantage de mémoire.")
          DELETE DOCUMENT(Document)
       End if
    End if
 Else
    ALERT("La bibliothèque d'images est vide.")
 End if
```

#### Voir aussi 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  