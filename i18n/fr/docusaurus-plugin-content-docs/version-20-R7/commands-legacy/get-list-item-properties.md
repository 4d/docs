---
id: get-list-item-properties
title: GET LIST ITEM PROPERTIES
slug: /commands/get-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PROPERTIES.Syntax-->**GET LIST ITEM PROPERTIES** ( {* ;} *liste* ; refElément | * ; *saisissable* {; *style* {; *icône* {; *couleur*}}} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d'objet (chaîne) Si omis, liste est une référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| refElément &#124; * | Opérateur, Entier long | &#8594;  | Numéro de référence d'élément ou 0 pour le dernier élément ajouté à la liste ou * pour l’élément courant de la liste |
| saisissable | Boolean | &#8592; | Vrai = Saisissable, Faux = Non-saisissable |
| style | Integer | &#8592; | Style de police de l'élément |
| icône | Text, Integer | &#8592; | 131072 + numéro de référence d'image |
| couleur | Integer | &#8592; | Valeur de couleur RVB |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET LIST ITEM PROPERTIES.Summary-->La commande **GET LIST ITEM PROPERTIES** retourne les propriétés de l'élément désigné par le paramètre *réfElément* de la liste dont vous avez passé le numéro de référence ou le nom d'objet dans *liste*.<!-- END REF-->

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique (RéfListe). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

**Note :** Si vous utilisez le caractère @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes répondant à ce nom, la commande **GET LIST ITEM PROPERTIES** s'appliquera au premier objet dont le nom correspond.

Vous pouvez passer dans *réfElément* un numéro de référence, la valeur 0 afin de désigner le dernier élément ajouté à la liste ou encore \* afin de désigner l’élément courant de la liste. Si plusieurs éléments sont sélectionnés, l’élément courant est celui qui a été sélectionné en dernier.  
Si vous passez \* et qu'aucun élément n’est sélectionné ou si le numéro de référence d'élément ne correspond à aucun élément de la liste, la commande laisse les paramètres inchangés.

Si vous travaillez avec les numéros de référence des éléments, assurez-vous d'utiliser des numéros uniques, sinon vous ne pourrez pas différencier les éléments. Pour plus d'informations sur ce point, reportez-vous à la description de la commande [APPEND TO LIST](append-to-list.md).

Après l'appel :

* *saisissable* retourne Vrai si l'élément est saisissable.
* *style* retourne le style de caractères de l'élément.
* *icône* retourne l'image associée à l'élément, le cas échéant.  
   * Si l'icône a été renseignée à l'aide d'un fichier image, la commande retourne dans icône le chemin d'accès à l'aide du modèle **path:<filesystem** **path>**  
   * Si l'icône a été renseignée à l'aide d'une image issue de la bibliothèque (bases de données binaires uniquement), la commande retourne soit le nom soit le numéro de l'image, en fonction de du type de variable passé dans le paramètre. Le modèle suivant est utilisé pour un nom : **pictlib:<name>**. Si vous n'attribuez pas à la valeur icône un type spécifique, par défaut le nom de l'image est retourné (texte). Si aucune icône n'est associée à l'élément, la commande retourne une valeur vide.  
         
   **Note :** Vous pouvez récupérer dans une variable image l'icône associée à un élément à l’aide de la commande [GET LIST ITEM ICON](get-list-item-icon.md).
* *couleur* retourne la couleur du texte de l’élément désigné.

Pour plus d'informations sur ces propriétés, reportez-vous à la description de la commande [SET LIST ITEM PROPERTIES](set-list-item-properties.md).

#### Voir aussi 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM ICON](get-list-item-icon.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  