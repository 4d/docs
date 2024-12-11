---
id: object-get-coordinates
title: OBJECT GET COORDINATES
slug: /commands/object-get-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET COORDINATES.Syntax-->**OBJECT GET COORDINATES** ( {* ;} *objet* ; *gauche* ; *haut* ; *droite* ; *bas* )<!-- END REF-->
<!--REF #_command_.OBJECT GET COORDINATES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d’objet (chaîne) Si omis = objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Champ ou variable (si * est omis) |
| gauche | Integer | &#8592; | Coordonnée gauche de l’objet |
| haut | Integer | &#8592; | Coordonnée supérieure de l’objet |
| droite | Integer | &#8592; | Coordonnée droite de l’objet |
| bas | Integer | &#8592; | Coordonnée inférieure de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET COORDINATES.Summary-->La commande **OBJECT GET COORDINATES** retourne dans les variables ou champs *gauche*, *haut*, *droite* et *bas* les coordonnées (en points) du ou des objet(s) du formulaire courant défini(s) par les paramètres *\** et *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne de caractères). Si vous ne passez pas le paramètre *\**, vous indiquez que *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable de type objet uniquement).

Si vous passez un nom d’objet dans le paramètre *objet* et utilisez le caractère joker @ afin de sélectionner plusieurs objets, les coordonnées retournées seront celles du rectangle formé par l’ensemble des objets concernés.

**Note :** Il est possible de paramétrer le mode d’interprétation du caractère @, lorsque celui-ci est inclus dans une chaîne de caractères. Cette option influe sur le fonctionnement des commandes du thème “Propriétés des objets”. Pour plus d'informations, reportez-vous au manuel Mode Développement.

Si l’objet n’existe pas ou si la commande est appelée ailleurs que dans le contexte d’un formulaire, les coordonnées retournées sont (0;0;0;0).

Dans le contexte des list box, la commande **OBJECT GET COORDINATES** peut retourner les coordonnées de parties spécifiques des list box, c.-à-d. des colonnes, en-têtes ou pieds, ou celles de l'objet list box parent. Dans les versions de 4D antérieures à la v14 R5, cette commande retournait toujours les coordonnées de la list box parente, quelle que soit la zone passée en paramètre. Désormais, lorsque le paramètre *objet* référence un en-tête, une colonne ou un pied de list box, ce sont les coordonnées de ce sous-objet qui sont retournées. Vous pouvez utiliser ce fonctionnement, par exemple, pour afficher une petite icône dans la cellule d'en-tête d'une list box lorsqu'elle est survolée par le curseur, indiquant à l'utilisateur qu'il peut cliquer pour afficher un menu contextuel.   
Pour des raisons de cohérence, le cadre de référence utilisé par la commande est le même, qu'elle travaille avec un objet list box ou un sous-objet de la list box : le point d'origine est le coin supérieur gauche du formulaire contenant l'objet. Pour les sous-objets de list box, les coordonnées retournées sont théoriques ; elles prennent en compte le défilement appliqué à la list box avant tout éventuel *clipping* (c.-à-d. le découpage effectué en fonction des coordonnées de la list box parente). Par conséquent, le sous-objet peut ne pas être visible, ou être partiellement visible, et ses coordonnées peuvent se trouver en-dehors des limites du formulaire (voire être négatives). Pour déterminer si le sous-objet est visible (et quelle partie est visible), vous devez comparer les coordonnées retournées avec celles de la list box elle-même, en tenant compte des règles suivantes : 

* Les limites des sous-objets dépendent des coordonnées de leur list box parente (telles que retournées par la commande **OBJECT GET COORDINATES** pour la list box).
* Les sous-objets en-tête et pied sont affichés au-dessus du contenu de la colonne : lorsque les coordonnées d'une colonne coupent celles d'une ligne d'en-tête ou de pied, la colonne n'est pas affichée à l'emplacement de l'intersection.
* Les éléments des colonnes verrouillées sont affichés au-dessus des éléments des colonnes défilables : lorsque les coordonnées d'un élément d'une colonne défilable croisent celles d'un élement d'une colonne verrouillée, il n'est pas affiché à l'emplacement de l'intersection.

Par exemple, examinez le schéma suivant, dans lequel les coordonnées de la colonne *Capital* sont symbolisées par un rectangle rouge :

![](../assets/en/commands/pict1752174.en.png)

Comme vous pouvez le voir dans la première image, la colonne est plus grande que la list box, donc ses coordonnées dépassent la limite basse de la list box, pied inclus. Dans la seconde image, la list box a défilé, et donc la colonne a également été déplacée "sous" les zones de la colonne *Language* et d'en-tête. Dans tous les cas, pour calculer la partie réellement visible de la colonne (représentée par la zone verte), vous devez soustraire les zones rouges. 

#### Exemple 1 

Vous souhaitez obtenir les coordonnées du rectangle formé par tous les objets dont le nom commence par “bouton” : 

```4d
 OBJECT GET COORDINATES(*;"bouton@";gauche;haut;droite;bas)
```

#### Exemple 2 

Pour les besoins de votre interface, vous souhaitez entourer d'un rectangle rouge la zone sur laquelle l'utilisateur a cliqué :

![](../assets/en/commands/pict1740373.en.png)

Dans la méthode objet de la list box, vous écrivez :

```4d
 OBJECT SET VISIBLE(*;"rectangleInfo";False) //initialiser un rectangle rouge
 $ptr:=OBJECT Get pointer(Object current)
 OBJECT GET COORDINATES($ptr->;$x1;$y1;$x2;$y2)
 OBJECT SET VISIBLE(*;"RedRect";True)
 OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
 
 OBJECT GET COORDINATES(*;"LB1";$lbx1;$lby1;$lbx2;$lby2)
 If($lby1>$y1)|($lby2<$y2) // si la zone cliquée est en-dehors de la list box
    OBJECT SET VISIBLE(*;"Alerte";True) //afficher une alerte
 Else
    OBJECT SET VISIBLE(*;"Alerte";False)
 End if
```

La méthode retourne les coordonnées théoriques. Si la list box est redimensionnée, vous pourrez avoir besoin de calculer le détourage afin de savoir quelle partie est visible :

![](../assets/en/commands/pict1740929.en.png)

#### Voir aussi 

[CONVERT COORDINATES](convert-coordinates.md)  
[LISTBOX GET CELL COORDINATES](listbox-get-cell-coordinates.md)  
[OBJECT MOVE](object-move.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 663 |
| Thread safe | &check; |
| Interdite sur le serveur ||


