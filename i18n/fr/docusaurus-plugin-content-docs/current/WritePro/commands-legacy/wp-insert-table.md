---
id: wp-insert-table
title: WP Insert table
slug: /WritePro/commands/wp-insert-table
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert table.Syntax-->**WP Insert table** ( *objCible* ; *mode* {; *miseAJourPlage* {; *nbCols* {; *nbLignes*}}} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Insert table.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| mode | Integer | &#8594;  | Mode d'insertion |
| miseAJourPlage | Integer | &#8594;  | Mode de mise à jour de la plage de sélection |
| nbCols | Integer | &#8594;  | Nombre de colonnes à créer dans le tableau |
| nbLignes | Integer | &#8594;  | Nombre de lignes à créer dans le tableau |
| Résultat | Object | &#8592; | Objet listant les propriétés du tableau |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Insert table.Summary-->La commande **WP Insert table** insère un nouveau tableau dans la plage *objCible* en fonction du *mode* d'insertion spécifié et retourne le nouvel objet correspondant.<!-- END REF--> Optionnellement, vous pouvez passer le paramètre *miseAJourPlage* ainsi qu'un nombre prédéfini de colonnes et de lignes dans *nbCols* et *nbLignes*.

Dans *objCible*, passez :

* une plage, ou
* un élément (tableau / paragraphe / corps / en-tête / pied / image en ligne / section / sous-section), ou
* un document 4D Write Pro.

**Note :** Si *objCible* est un tableau, le tableau nouvellement inséré remplacera l'ancien tableau ou bien sera inséré avant ou après l'ancien tableau, en fonction du *mode* utilisé. L'insertion d'un tableau dans un autre tableau n'est pas possible (une erreur est retournée).

Dans le paramètre *mode*, passez l'une des constantes suivantes pour indiquer le mode d'insertion à utiliser pour insérer le tableau dans le document :

| Constante  | Type        | Valeur | Comment                                    |
| ---------- | ----------- | ------ | ------------------------------------------ |
| wk append  | Entier long | 2      | Insère le contenu à la fin de la cible     |
| wk prepend | Entier long | 1      | Le contenu est inséré au début de la cible |
| wk replace | Entier long | 0      | Remplace le contenu de la cible            |

* Si objCible est une plage, vous pouvez utiliser le paramètre optionnel miseAJourPlage pour passer l'une des constantes suivantes et indiquer si le tableau inséré fait partie ou non de la plage résultante :  
    
| Constante             | Type        | Valeur | Comment                                                         |  
| --------------------- | ----------- | ------ | --------------------------------------------------------------- |  
| wk exclude from range | Entier long | 1      | Le contenu inséré n'est pas inclus dans la plage mise à jour    |  
| wk include in range   | Entier long | 0      | Le contenu inséré est inclus dans la plage mise à jour (défaut) |  
    
Si vous ne passez pas le paramètre *miseAJourPlage*, par défaut, le tableau inséré est inclus dans la plage résultante.
* Si *objCible* n'est pas une plage, miseAJourPlage est ignoré.

Vous pouvez passer dans *nbCols* et *nbLignes* le nombre de colonnes et de lignes du tableau inséré. Par défaut, si *nbCols* et *nbLignes* sont omis, un nouveau tableau avec 0 colonne et 0 ligne est créé. Vous pouvez alors ajouter ces éléments en utilisant la commande [WP Table append row](../commands/wp-table-append-row.md).

La commande retourne le nouveau tableau en tant qu'objet, que vous pouvez passer ensuite à une autre commande tableau 4D Write Pro. Le tableau est créé avec police, bordure, et attributs couleur par défaut, que vous pouvez personnaliser en utilisant la commande [WP SET ATTRIBUTES](../commands/wp-set-attributes.md).

#### Exemple 

Dans un document vide, vous souhaitez ajouter un nouveau tableau avec 3 colonnes et 2 lignes :

```4d
 var $WPRange;$WPTable : Object
 $WPRange:=WP Text range(WParea;wk start text;wk end text)
 $WPTable:=WP Insert table($WPRange;wk append;wk exclude from range;3;2)
```

Résultat :

![](../../assets/en/WritePro/commands/pict3306926.en.png)

#### Voir aussi 

[WP Table append row](../commands/wp-table-append-row.md)  
[WP Table get rows](wp-table-get-rows.md)  