---
id: set-picture-to-library
title: SET PICTURE TO LIBRARY
slug: /commands/set-picture-to-library
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO LIBRARY.Syntax-->**SET PICTURE TO LIBRARY** ( *image* ; *refImage* ; *nomImage* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO LIBRARY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Nouvelle image |
| refImage | Integer | &#8594;  | Numéro de référence de l'image dans la bibliothèque d'images |
| nomImage | Text | &#8594;  | Nouveau nom de l’image |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET PICTURE TO LIBRARY.Summary-->La commande **SET PICTURE TO LIBRARY** crée une nouvelle image ou remplace une image existante dans la bibliothèque d’images.<!-- END REF-->

Avant l’appel, vous passez :

* le numéro de référence de l’image dans *refImage* (compris entre 1 et 32767)
* l’image elle-même dans *image*.
* Le nom de l’image dans *nomImage* (longueur maximale : 255 caractères).

S’il existe déjà dans la bibliothèque une image possédant le même numéro de référence, son contenu est remplacé et elle est renommée avec les valeurs que vous avez passées dans *image* et *nomImage*.

Si aucune image ne possède le numéro de référence que vous avez passé dans *refImage*, une nouvelle image est créée dans la bibliothèque d’images.

**4D Server :** **SET PICTURE TO LIBRARY** ne peut pas être utilisée dans une méthode exécutée sur le poste serveur (procédure stockée ou trigger). Si vous appelez **SET PICTURE TO LIBRARY** sur le serveur, la commande ne fait rien, l’appel est ignoré.

**Attention :** Les objets de structure (éléments de listes hiérarchiques, lignes de menu, etc.) peuvent se référer à une image de la bibliothèque. Soyez prudent lorsque vous modifiez par programmation une image de la bibliothèque d’images.

**Note :** Si vous passez une image vide dans *image*, ou une valeur négative ou nulle dans *refImage*, la commande ne fait rien. 

#### Exemple 1 

Quel que soit le contenu courant de la bibliothèque d’images, l’exemple suivant ajoute une nouvelle image dans la bibliothèque en cherchant d’abord un numéro de référence d’image unique :

```4d
 PICTURE LIBRARY LIST($alRefImage;$asNomImage)
 Repeat
    $vlRefImage:=1+Abs(Random)
 Until(Find in array($alRefImage;$vlRefImage)<0)
 SET PICTURE TO LIBRARY(vgImage;$vlRefImage;"Nouvelle Image")
```

#### Exemple 2 

L’exemple suivant importe dans la bibliothèque des images stockées dans un document sur disque, créé par le troisième exemple de la commande [PICTURE LIBRARY LIST](picture-library-list.md) :

```4d
 SET CHANNEL(10;"")
 If(OK=1)
    RECEIVE VARIABLE($vsTag)
    If($vsTag="4DV6BIBLIOTHEQUEIMAGEEXPORT")
       RECEIVE VARIABLE($vlNbImages)
       If($vlNbImages>0)
          For($vlImage;1;$vlNbImages)
             RECEIVE VARIABLE($vlRefImage)
             If(OK=1)
                RECEIVE VARIABLE($vsNomImage)
             End if
             If(OK=1)
                RECEIVE VARIABLE($vgImage)
             End if
             If(OK=1)
                SET PICTURE TO LIBRARY($vgImage;$vlRefImage;$vsNomImage)
             Else
                $vlImage:=$vlNbImages+1
                ALERT("Ce fichier semble endommagé.")
             End if
          End for
       Else
          ALERT("Ce fichier semble endommagé.")
       End if
    Else
       ALERT("Le fichier “"+Document+"” n’est pas un export de la bibliothèque d’images.")
    End if
    SET CHANNEL(11)
 End if
```

#### Gestion des erreurs 

S'il n'y a pas assez de mémoire pour retourner l’image, l'erreur –108 est générée. Notez que des erreurs d’E/S peuvent également être générées (si par exemple le fichier de structure est verrouillé). Vous pouvez intercepter ces erreurs avec une méthode de gestion d'erreurs.

#### Voir aussi 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  