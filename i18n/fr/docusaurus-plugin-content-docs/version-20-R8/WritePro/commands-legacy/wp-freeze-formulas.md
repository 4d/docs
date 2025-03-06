---
id: wp-freeze-formulas
title: WP FREEZE FORMULAS
slug: /WritePro/commands/wp-freeze-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP FREEZE FORMULAS.Syntax-->**WP FREEZE FORMULAS** ( *objCible* {; *recompute*} )<!-- END REF-->
<!--REF #_command_.WP FREEZE FORMULAS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| recompute | Integer | &#8594;  | Option to control recomputing |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP FREEZE FORMULAS.Summary-->La commande **WP FREEZE FORMULAS** "fige" le contenu des formules dans objCible.<!-- END REF--> 

La commande remplace chaque formule dans objCible avec sa valeur calculée (texte ou image statique). Cela crée un document portable, étant donné que seules les références aux formules sont conservées dans le paramètre objCible.

Dans le paramètre objCible, vous pouvez passer :

* une plage, ou
* un élément (table / ligne / cellule(s) / paragraphe / corps / en-tête / pied / section / sous-section / image en ligne ou ancrée / zone de texte), ou
* un document 4D Write Pro.

**Note :** 

* Si objCible désigne une zone hors écran où les formules n'ont pas été préalablement calculés, elles seront évaluées avant d'être figées. En particulier, les formules ne sont pas calculées lorsqu'un document hors écran est chargé.
* Quand vous passez une section dans objCible, seules les formules d'image ou les formules des zones de texte ancrées à cette section (ou à toutes les sections) sont figées. Si elles sont ancrées à une page ou à la vue intégrée, leurs formules ne sont pas figées. Passez le document dans objCible pour figer toutes les formules des éléments ancrés.

Le paramètre optionnel *recompute* vous permet de définir si les formules de *objCible* doivent être recalculées avant d'être figées. Vous pouvez passer une constante du thème "4D Write Pro" :

| Constante                       | Type        | Valeur | Comment                                                                                                                         |
| ------------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| wk do not recompute expressions | Entier long | 2      | Indique que toutes les expressions contenues dans le document ne sont pas recalculées pour l'impression ou le gel.              |
| wk recompute expressions        | Entier long | 0      | Indique que toutes les expressions contenues dans le document sont recalculées pour l'impression ou le gel (valeur par défaut). |

Par défaut, si *recompute* est omis, les expressions sont recalculées.

**Attention** : Les *carry-over rows* (lignes à reporter en bas), s'il y en a, sont transformées en lignes normales lorsque vous figez targetObj. Par conséquent, si la taille ou l'orientation de la page est modifiée, ou si le document est exporté, elles peuvent être décalées dans la mise en page résultante. 

#### Exemple 

Pour figer des formules dans un document :

```4d
 WP FREEZE FORMULAS(WriteProArea)
```

Pour figer toutes les formules de la première section d'un document sans recalculer :

```4d
 WP FREEZE FORMULAS(WP Get section(WriteProArea;1);wk do not recompute expressions)
```

#### Voir aussi 

[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  