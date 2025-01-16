---
id: wp-compute-formulas
title: WP COMPUTE FORMULAS
slug: /WritePro/commands/wp-compute-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP COMPUTE FORMULAS.Syntax-->**WP COMPUTE FORMULAS** ( *objCible* )<!-- END REF-->
<!--REF #_command_.WP COMPUTE FORMULAS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP COMPUTE FORMULAS.Summary-->La commande **WP COMPUTE FORMULAS** évalue les formules dans *objCible*.<!-- END REF-->

La commande calcule ou met à jour le résultat des formules trouvées dans objCible basées sur le contexte courant et affiche le résultat obtenu. Par exemple, si la formule insérée correspond à l'heure, la valeur sera modifiée chaque fois que la commande **WP COMPUTE FORMULAS** sera appelée. Pour plus d'informations sur l'évaluation des formules, veuillez vous reporter à la section *Gérer des formules*.

Dans le paramètre objCible, vous pouvez passer :

   * une plage, ou
   * un élément (table / ligne / cellule(s) / paragraphe / corps / en-tête / pied / section / sous-section / image en ligne ou ancrée / zone de texte), ou
   * un document 4D Write Pro.

**Note :** Quand vous passez une section dans objCible, seules les formules d'image ou les formules des zones de texte ancrées à cette section (ou à toutes les sections) sont calculées. Si elles sont ancrées à une page ou à la vue intégrée, leurs formules ne sont pas calculées. Passez le document dans objCible pour calculer toutes les formules d'éléments ancrés.

#### Exemple 

Pour mettre à jour les formules d'un document :

```4d
 WP COMPUTE FORMULAS(WriteProArea)
```

Pour mettre à jour toutes les formules de la première section d'un document :

```4d
 WP COMPUTE FORMULAS(WP Get section(WriteProArea;1))
```

#### Voir aussi 

*Gérer des formules*  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  
[WP SET DATA CONTEXT](wp-set-data-context.md)  