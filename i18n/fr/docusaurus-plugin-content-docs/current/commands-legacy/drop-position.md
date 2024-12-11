---
id: drop-position
title: Drop position
slug: /commands/drop-position
displayed_sidebar: docs
---

<!--REF #_command_.Drop position.Syntax-->**Drop position** {( numColonne | posYImage )} : Integer<!-- END REF-->
<!--REF #_command_.Drop position.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numColonne &#124; posYImage | Integer | &#8592; | Numéro de colonne de list box (-1 si le déposer a lieu après la dernière colonne) ouPosition coordonnée Y dans l'image |
| Résultat | Integer | &#8592; | • Numéro (tableau/list box) ou• Position (liste hiérarchique) ou• Position dans la chaîne (texte/combo box) de l'élément de destination ou• -1 si le déposer a lieu après le dernier élément de tableau ou de liste ou• Position coordonnée X dans l’image |

<!-- END REF-->

#### Description 

<!--REF #_command_.Drop position.Summary-->**Drop position** permet de connaître l'emplacement, dans un objet de destination “complexe”, auquel un objet a été (glissé et) déposé.<!-- END REF--> Généralement, vous utiliserez **Drop position** pendant le traitement d'un événement glisser-déposer qui s'est produit dans un tableau, une list box, une liste hiérarchique, un champ texte ou une image.

* Si l'objet de destination est un tableau, la fonction retourne un numéro d'élément.
* Si l'objet de destination est une list box, la fonction retourne un numéro de ligne. Dans ce cas, la fonction retourne également dans le paramètre facultatif *numColonne* le numéro de la colonne sur laquelle le déposer a eu lieu.
* Si l'objet de destination est une liste hiérarchique, la fonction retourne une position d'élément.
* Si l'objet de destination est une variable ou un champ de type texte ou encore une combo box, la fonction retourne une position de caractère à l'intérieur de la chaîne.  
Dans tous les cas ci-dessus, la fonction retourne -1 si l'objet source a été déposé après le dernier élément de l'objet de destination.
* Si l'objet de destination est une variable ou un champ de type image, la fonction retourne l’emplacement horizontal du clic et, dans le paramètre facultatif *posYImage*, l’emplacement vertical du clic. Les valeurs retournées sont exprimées en pixels et relativement au système de coordonnées locales.

Si vous appelez **Drop position** pendant le traitement d'un événement qui n'est pas de type glisser-déposer dans un tableau, une list box, une combo box, une liste hiérarchique, un texte ou une image, la fonction retourne également -1.

**Rappel :** Pour qu'un objet de formulaire accepte des données déposées, la propriété **Déposable** doit lui avoir été assignée. De plus, sa méthode objet doit être appelée par l'événement On Drag Over et/ou On Drop si vous voulez pouvoir gérer ce type d'événement. 

#### Exemple 

Dans l’exemple suivant, une liste de sommes doit être ventilée par mois et par personne. L’opération s’effectue par glisser-déposer entre deux list box :

![](../assets/en/commands/pict4091260.en.png)

La méthode objet de la list box de droite (source) contient le code suivant :

```4d
 If(Form event code=Sur début glisser) // l'événement doit être coché pour la list box
    var $tomove : Blob
    var $val : Text
    LISTBOX GET CELL POSITION(*;"LBPaid";$col;$row)
    $val:=PaidCol{$row}
    VARIABLE TO BLOB($val;$tomove)
    APPEND DATA TO PASTEBOARD("mydrag";$tomove) //utilise une clé personnalisée
 End if
```

La méthode objet de la list box de gauche (destination) contient le code suivant :

```4d
 Case of
 
    :(Form event code=On Drag Over) //l'événement doit être coché pour la list box
       var $toGet : Blob
       var $rownum : Integer
       $rownum:=Drop position($colnum)
       GET PASTEBOARD DATA("mydrag";$toGet) //lire les données
       If(Pasteboard data size("mydrag")>0)&($colnum#1)) //Si les données se trouvent dans le conteneur
          $0:=0 //Le "déposer" est accepté
       Else
          $0:=-1 //Le "déposer" est refusé
       End if
 
    :(Form event code=Sur déposer) //l'événement doit être coché pour la list box
       var $toGet : Blob
       var $rownum;$val : Integer
       $rownum:=Drop position($colnum)
       GET PASTEBOARD DATA("mydrag";$toGet)
       BLOB TO VARIABLE($toGet;$val) //lire la valeur
       If(Pasteboard data size("mydrag")>0))
          If($colnum=1)
             BEEP
          Else
             Case of //Ajouter des valeurs déposées
                :($colnum=2)
                   John{$rownum}:=John{$rownum}+$val
                :($colnum=3)
                   Mark{$rownum}:=Mark{$rownum}+$val
                :($colnum=4)
                   Peter{$rownum}:=Peter{$rownum}+$val
             End case
             DELETE FROM ARRAY(PaidCol;Find in array(PaidCol;$val)) //Mettre à jour la list box source
          End if
       End if
 End case
```

#### Voir aussi 

*Présentation du Glisser-Déposer*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 608 |
| Thread safe | &check; |
| Interdite sur le serveur ||


