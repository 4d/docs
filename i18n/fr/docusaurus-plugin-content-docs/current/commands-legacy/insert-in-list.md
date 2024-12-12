---
id: insert-in-list
title: INSERT IN LIST
slug: /commands/insert-in-list
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN LIST.Syntax-->**INSERT IN LIST** ( {* ;} *liste* ; avantElément | * ; *libelléElément* ; *réfElément* {; sous_Liste ; *déployée*} )<!-- END REF-->
<!--REF #_command_.INSERT IN LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d'objet (chaîne) Si omis, liste est une référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ou Nom d'objet de type liste (si * passé) |
| avantElément &#124; * | Entier long, Opérateur | &#8594;  | Numéro de référence d'élément ou 0 pour le dernier élément ajouté à la liste ou * pour l'élément de la liste actuellement sélectionné |
| libelléElément | Text | &#8594;  | Libellé du nouvel élément |
| réfElément | Integer | &#8594;  | Numéro de référence unique du nouvel élément |
| sous_Liste | Integer | &#8594;  | Sous-liste optionnelle rattachée au nouvel élément |
| déployée | Boolean | &#8594;  | Indique si la sous-liste doit être déployée ou non |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.INSERT IN LIST.Summary-->La commande **INSERT IN LIST** insère l'élément désigné par le paramètre *réfElément* dans la liste dont le numéro de référence ou le nom d'objet est passé dans *liste*.<!-- END REF--> 

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RéfListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

Le paramètre *avantElément* permet de désigner l'élément avant lequel vous souhaitez insérer le nouvel élément :

* Vous pouvez passer la valeur 0 afin de désigner le dernier élément ajouté à la liste. Le nouvel élément devient l'élément sélectionné.
* Vous pouvez passer *\** afin que le nouvel élément soit inséré avant l'élément actuellement sélectionné dans la liste. Le nouvel élément devient l'élément sélectionné.
* Si vous souhaitez insérer le nouvel élément avant un élément spécifique, passez le numéro de référence de cet élément comme deuxième paramètre. Dans ce cas, le nouvel élément inséré n'est pas automatiquement sélectionné. Si le numéro que vous passez ne correspond à aucun élément de la *liste*, la commande ne fait rien.

Vous passez le texte du nouvel élément dans le paramètre *libelléElément*. A compter de 4D v16 R4, si l'élément est associé à une action standard, vous pouvez passer la constante ak standard action title dans *libelléElément* pour utiliser automatiquement le nom de l'action traduit. Pour plus d'informations, veuillez vous reporter à la section *Actions standard*.

Vous passez le numéro de référence du nouvel élément dans le paramètre *réfElément*. Bien que ce numéro de référence soit qualifié d'unique, vous pouvez passer en réalité la valeur que vous voulez. Reportez-vous au paragraphe *Exploiter les numéros de référence des éléments (réfElément)* pour plus d'informations sur le paramètre *réfElément*. 

Si vous souhaitez que l'élément comporte des sous-éléments, passez un numéro de référence de liste valide dans le paramètre *sous\_Liste*. Dans ce cas, vous devez également passer le paramètre *déployée*. Passez Vrai ou Faux dans ce paramètre pour que cette sous-liste s'affiche respectivement déployée ou contractée. 

#### Exemple 

L'exemple suivant insère un élément (associé à aucune sous-liste) juste devant l'élément actuellement sélectionné dans la liste *hList*:

```4d
 vlUniqueRef:=vlUniqueRef+1
 INSERT IN LIST(hList;*;"Nouvel élément";vlUniqueRef)
```

#### Voir aussi 

[APPEND TO LIST](append-to-list.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  