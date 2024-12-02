---
id: wp-get-formulas
title: WP Get formulas
slug: /WritePro/commands/wp-get-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP Get formulas.Syntax-->**WP Get formulas** ( *objCible* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get formulas.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| Résultat | Collection | &#8592; | Collection de formules |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get formulas.Summary-->La commande **WP Get formulas** retoune une collection de toutes les formulas définies dans *objCible*.<!-- END REF-->

Dans le paramètre *objCible*, vous pouvez passer :

* une plage, ou
* un élément (table / ligne / cellule(s) / paragraphe / corps / en-tête / pied / section / sous-section / image en ligne ou ancrée / zone de texte), ou
* un document 4D Write Pro.

**Note :** Quand vous passez une section dans objCible, seules les formules d'image ou les formules des zones de texte ancrées à cette section (ou à toutes les sections) sont retournées. En revanche, si elles sont ancrées à une page ou à la vue intégrée, leurs formules ne seront pas retournées. Passez le document dans objCible pour obtenir toutes les formules d'éléments ancrés.

**Valeur retournée**

**WP Get formulas** retourne une collection d'objets formule, chacune d'elles contenant une ou plusieurs des propriétés suivantes :

| **Propriété**    | **Type** | **Description**                                                                                                                                                                                                                                   |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[ \].formula    | Objet    | Le texte de la formule est disponible via **\[ \].formula.source**. La formule est une **copie** de la formule trouvée dans la cible. Si vous souhaitez modifier la formule, elle doit être ré-insérée dans le document pour être prise en charge |
| \[ \].range      | Objet    | Plage de la formule (non retournée pour les formules d'images ancrées)                                                                                                                                                                            |
| \[ \].anchoredID | Texte    | ID de l'image ancrée (retournée uniquement pour les formules d'images ancrées)                                                                                                                                                                    |
| \[ \].name       | Texte    | Nom de la formule, si un nom a été défini ( non retourné dans le cas contraire). Les noms peuvent être définis à l'aide de [WP INSERT FORMULA](../commands/wp-insert-formula.md).                                                                             |
| \[ \].owner      | Objet    | Document 4D Write Pro                                                                                                                                                                                                                             |

**Notes :**

* Si vous avez passé une sous-section comme cible, les formules de la section parente sont retournées.
* Si plusieurs formules sont retournées, la collection est ordonnée suivant l'ordre des formules de la cible, à l'exception des cibles de type de document ou de section (n'importe quel ordre dans ce cas).

#### Exemple 

Pour obtenir toutes les formules d'un document :

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea)
```

Pour obtenir toutes les formules de la première section d'un document :

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WP Get section(WriteProArea;1))
```

Pour obtenir les formules de toutes les images ancrées d'un document :

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea).query("anchoredID # null")
```

#### Voir aussi 

*Gérer des formules*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get links](wp-get-links.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  