---
id: set-list-item-properties
title: SET LIST ITEM PROPERTIES
slug: /commands/set-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM PROPERTIES.Syntax-->**SET LIST ITEM PROPERTIES** ( {* ;} *liste* ; refElément | * ; *saisissable* ; *style* {; *icône* {; *couleur*}} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d'objet (chaîne) Si omis, liste est une référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| refElément &#124; * | Opérateur, Entier long | &#8594;  | Numéro de référence d'élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| saisissable | Boolean | &#8594;  | Vrai = Saisissable, Faux = Non-saisissable |
| style | Integer | &#8594;  | Style de police pour l'élément |
| icône | Text, Integer | &#8594;  | Nom ou numéro d'image ("" ou 0 pour ne pas associer d'icône) |
| couleur | Integer | &#8594;  | Valeur de couleur RVB ou -1 = rétablir couleur originale |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET LIST ITEM PROPERTIES.Summary-->La commande **SET LIST ITEM PROPERTIES** modifie l'élément désigné par le paramètre *réfElément* de la liste dont vous avez passé le numéro de référence ou le nom d'objet dans *liste*.<!-- END REF-->

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique (RéfListe). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

Vous pouvez passer un numéro de référence dans *réfElément*. Si ce numéro ne correspond à aucun élément de la liste, la commande ne fait rien.   
Vous pouvez également passer *0* dans *réfElément* afin de demander la modification du dernier élément ajouté à la liste (à l'aide de [APPEND TO LIST](append-to-list.md)).   
Vous pouvez enfin passer *\** dans *réfElément* : dans ce cas, la commande s’appliquera à l’élément courant de la liste. Si plusieurs éléments sont sélectionnés manuellement, l’élément courant est celui qui a été sélectionné en dernier. Si aucun élément n’est sélectionné, la commande ne fait rien.

Si vous travaillez avec les numéros de référence des éléments, assurez-vous d'utiliser des numéros uniques, sinon vous ne pourrez pas différencier les éléments. Pour plus d'informations sur ce point, reportez-vous à la section *Gestion des listes hiérarchiques*.

**Note :** Pour changer le libellé d'un élément ou de ses sous-listes, utilisez la commande [SET LIST ITEM](set-list-item.md).

Si vous souhaitez que l'élément soit saisissable, passez Vrai dans le paramètre *saisissable*, sinon passez Faux.

**Important :** Pour qu'un élément soit saisissable, il doit appartenir à une liste elle-même saisissable. Pour déclarer une liste saisissable, utilisez la commande [OBJECT SET ENTERABLE](object-set-enterable.md). La commande **SET LIST ITEM PROPERTIES** vous permet de déclarer un élément individuel saisissable ou non. La modification de la propriété saisissable au niveau de la liste ne change pas la propriété saisissable individuelle de chaque élément. Un élément ne peut être saisissable que si la liste **et** l'élément le sont.

Vous pouvez définir le style de l'élément dans le paramètre *styles*. Vous passez une ou une combinaison des constantes prédéfinies suivantes (thème *Styles de caractères*) :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Plain     | Entier long | 0      |
| Underline | Entier long | 4      |

  
Dans le paramètre *icône*, vous pouvez passer une image pour l'utiliser comme icône d'un élément. Vous pouvez utiliser une référence de fichier image ou (bases de données binaires uniquement) une image issue de la bibliothèque. 
* Référence de fichier image (texte) : vous devez utiliser le modèle **path:<filesystem path>.** Pour plus d'informations, reportez-vous au pragraphe *Chemins des filesystem*.
* Image de la bibliothèque (entier long ou texte, bases de données binaires uniquement) : vous pouvez passer soit le nom soit le numéro de l' image. Il est généralement préférable d’utiliser le numéro plutôt que le nom, car les numéros d’images sont des identifiants uniques, ce qui n’est pas le cas des noms. Si vous souhaitez utiliser un numéro, passez Use PicRef+N dans le paramètre, où N est le numéro de référence d'une image stockée dans la bibliothèque d'images de 4D. Use PicRef est ybe constante prédéfinie du thème *Listes hiérarchiques*.
* Si vous ne souhaitez pas associer d'image à l'élément, passez une chaîne vide ("") ou zéro (0) dans *icône*.

**Notes** **:**

* Il est recommandé d'utiliser un chemin de fichier image, étant donné que la bibliothèque d'image est obsolète et n'est pas supportée dans les projets 4D.
* Si vous souhaitez utiliser des expressions image 4D (champs, variables...) pour définir les icônes des éléments, utilisez la commande [SET LIST ITEM ICON](set-list-item-icon.md).

Le paramètre *couleur* (facultatif) permet de modifier la couleur du texte de l’élément. La couleur doit être définie sous forme de couleur RVB, c’est-à-dire un entier long de 4 octets au format 0x00RRVVBB. Pour plus d’informations sur ce format, reportez-vous à la description de la commande [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Passez -1 dans le paramètre *couleur* pour rétablir la couleur d’origine de l’élément.

#### Exemple 1 

Reportez-vous à l'exemple de la commande [APPEND TO LIST](append-to-list.md).

#### Exemple 2 

L’exemple suivant passe le texte de l’élément courant de *liste* en gras et en rouge vif :

```4d
 SET LIST ITEM PROPERTIES(liste;*;True;Bold;0;0x00FF0000)
```

#### Voir aussi 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
*Listes hiérarchiques*  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  