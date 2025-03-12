---
id: wp-insert-picture
title: WP INSERT PICTURE
slug: /WritePro/commands/wp-insert-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT PICTURE.Syntax-->**WP INSERT PICTURE** ( *objCible* ; *image* ; *mode* {; *miseAJourPlage*} )<!-- END REF-->
<!--REF #_command_.WP INSERT PICTURE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| image | Picture | &#8594;  | Champ ou variable Image, ou chemin d'accès à une image sur le disque |
| mode | Integer | &#8594;  | Mode d'insertion |
| miseAJourPlage | Integer | &#8594;  | Mode de mise à jour de la plage de sélection |

<!-- END REF-->

## Description 

<!--REF #_command_.WP INSERT PICTURE.Summary-->La commande **WP INSERT PICTURE** insère *image* dans la plage de sélection *objCible* selon le *mode* d'insertion spécifié.<!-- END REF--> L'image sera insérée en tant que caractère dans la plage de sélection *objCible*.

Dans *objCible*, passez :

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied / image en ligne / section / sous-section), ou
* un document 4D Write Pro.

Dans *image*, vous pouvez passer :

* soit un champ image ou une variable image 4D,
* soit une chaîne contenant un chemin d'accès à un fichier image stocké sur disque, en utilisant la syntaxe système.  
Si vous utilisez une chaîne, vous pouvez passer soit un chemin d'accès complet, soit un chemin d'accès en relatif par rapport au fichier de structure de la base. Vous pouvez aussi passer un nom de fichier, dans ce cas le fichier doit être situé à côté du fichier de structure de la base. Si vous passez un nom de fichier, vous devez indiquer son extension.

Tous les formats d'image pris en charge par 4D peuvent être utilisés (voir la section *Introduction aux images*). Vous pouvez obtenir la liste des formats d'image disponibles en utilisant la commande [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Si l'*image* encapsule plusieurs formats (codecs), 4D Write Pro utilise un seul format pour l'affichage et un autre pour l'impression (s'il est différent) ; les formats les mieux adaptés sont automatiquement sélectionnés.

Dans le paramètre *mode*, passez une des constantes suivantes pour indiquer le mode d'insertion à utiliser pour insérer l'image dans le document :

| Constante  | Type        | Valeur | Comment                                    |
| ---------- | ----------- | ------ | ------------------------------------------ |
| wk append  | Entier long | 2      | Insère le contenu à la fin de la cible     |
| wk prepend | Entier long | 1      | Le contenu est inséré au début de la cible |
| wk replace | Entier long | 0      | Remplace le contenu de la cible            |

* Si *objCible* est une plage, vous pouvez utiliser le paramètre optionnel *miseAJourPlage* pour passer une des constantes suivantes et préciser si l'image est incluse ou non dans la plage de sélection résultante :  
    
| Constante             | Type        | Valeur | Comment                                                         |  
| --------------------- | ----------- | ------ | --------------------------------------------------------------- |  
| wk exclude from range | Entier long | 1      | Le contenu inséré n'est pas inclus dans la plage mise à jour    |  
| wk include in range   | Entier long | 0      | Le contenu inséré est inclus dans la plage mise à jour (défaut) |  
    
Si vous ne passez pas le paramètre *miseAJourPlage*, par défaut l'image insérée est incluse dans la plage mise à jour.
* Si *objCible* n'est pas une plage, *miseAJourPlage* est ignoré.

## Exemple 

Dans l'exemple suivant, un utilisateur choisit une image qu'il souhaite insérer dans une plage de sélection de l'objet 4D Write Pro, et obtiendra une alerte si l'image ne peut pas être insérée :

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([Courrier]ZoneWP)
 
 var $fail : Boolean
 $fail:=False
 
   //on demande à l'utilisateur de choisir, sur le disque,l'image qu'il souhaite insérer
 $imgRef:=Open document("")
   //si l'utilisateur n'annule pas
 If(OK=1)
         //si le format du fichier image est pris en charge
       If(Is picture file(document))
            // on insère l'image
          WP INSERT PICTURE($wpRange;document;wk replace)
       Else
          $fail:=True
       End if
 Else
       $fail:=True
 End if
   //si l'insertion a échoué, on informe l'utilisateur
 If($fail)
       ALERT("l'insertion de l'image a échoué")
 End if
```

## Voir aussi 

  
[WP INSERT DOCUMENT](wp-insert-document.md)  
[WP Picture range](wp-picture-range.md)  