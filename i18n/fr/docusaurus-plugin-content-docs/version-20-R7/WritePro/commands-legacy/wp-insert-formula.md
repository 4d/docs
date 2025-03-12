---
id: wp-insert-formula
title: WP INSERT FORMULA
slug: /WritePro/commands/wp-insert-formula
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT FORMULA.Syntax-->**WP INSERT FORMULA** ( *objCible* ; *formule* ; *mode* {; *miseAjourPlage*} )<!-- END REF-->
<!--REF #_command_.WP INSERT FORMULA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| formule | Object | &#8594;  | Objet formule |
| mode | Number | &#8594;  | Mode d'insertion |
| miseAjourPlage | Number | &#8594;  | Inclut ou exclut le contenu inséré dans la plage |

<!-- END REF-->

## Description 

<!--REF #_command_.WP INSERT FORMULA.Summary-->La commande **WP INSERT FORMULA** insère une *formule* dans *objCible* en fonction du *mode* d'insertion spécifié.<!-- END REF-->

Dans le paramètre *objCible*, vous pouvez passer :

* une plage, ou
* un élément (table / ligne / cellule(s) / paragraphe / corps / en-tête / pied / section / sous-section / image en ligne), ou
* un document 4D Write Pro.

Dans le paramètre *formule*, passez la formule 4D à évaluer. Vous pouvez passer :

* soit un [objet formula](https://developer.4d.com/docs/fr/API/FunctionClass/#objets-formula) créé par la commande **[Formula](https://developer.4d.com/docs/fr/API/FunctionClass/#formula)** ou **[Formula from string](https://developer.4d.com/docs/fr/API/FunctionClass/#formula-from-string)**,
* soit un objet contenant deux propriétés :  

| **Propriété** | **Type** | **Description**                                                                                                                                                                                                                                                                             |  
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| name          | Chaîne   | Nom à afficher pour la formule dans le document                                                                                                                                                                                                                                             |  
| formula       | Objet    | L'[objet formula](https://developer.4d.com/docs/fr/API/FunctionClass/#objets-formula) créé par la commande **[Formula](https://developer.4d.com/docs/fr/API/FunctionClass/#formula)** ou **[Formula from string](https://developer.4d.com/docs/fr/API/FunctionClass/#formula-from-string)** |  
    
Lorsque vous utilisez un objet avec un nom de formule (*name)*, ce nom est affiché dans le document à la place de la référence de la formule lorsque les formules sont affichées en tant que référence, et dans la bulle d'aide de la formule lorsqu'elles sont affichées en tant que valeur ou symboles. Si la propriété *name* contient une chaîne vide ou est omise, elle est supprimée de l'objet et la formule est affichée par défaut. Pour plus d'informations, voir la page *Gérer des formules*.

Dans le paramètre *mode*, passez l'une des constantes suivantes pour indiquer le mode d'insertion à utiliser :

| Constante  | Type        | Valeur | Comment                                    |
| ---------- | ----------- | ------ | ------------------------------------------ |
| wk append  | Entier long | 2      | Insère le contenu à la fin de la cible     |
| wk prepend | Entier long | 1      | Le contenu est inséré au début de la cible |
| wk replace | Entier long | 0      | Remplace le contenu de la cible            |

* Si objCible est une plage, vous pouvez utiliser le paramètre optionnel *miseAjourPlage* pour passer l'une des constantes suivantes pour spécifier si la *formule* insérée est inclue ou non dans la plage résultante :  
    
| Constante             | Type        | Valeur | Comment                                                         |  
| --------------------- | ----------- | ------ | --------------------------------------------------------------- |  
| wk exclude from range | Entier long | 1      | Le contenu inséré n'est pas inclus dans la plage mise à jour    |  
| wk include in range   | Entier long | 0      | Le contenu inséré est inclus dans la plage mise à jour (défaut) |  
    
Si vous ne passez pas un paramètre *rangeUpdate*, la *formule* insérée est inclue par défaut dans la plage résultante.
* Si objCible n'est pas une plage, *rangeUpdate* est ignoré.

**Note:** N'oubliez pas que, lorsqu'il est appelé, l'objet *formule* est évalué dans le contexte de la base de données ou du composant qui l'a créé.

## Exemple 1 

Pour remplacer les formules Date courante avec les chaines formatées :

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object

 // définir la formule à rechercher
 $find:=Formula(Current date)
 
  // définir la formule de remplacement
 $newFormula:=Formula(String(Current date;System date long))
 
  // trouver les formules contenues dans le document
 $_formulas:=WP Get formulas(WriteProArea)
 
  // rechercher la collection à partir de WP Get formulas
 $_formulas:=$_formulas.query("formula.source :=1";$find.source)
 
  // puis remplacer chaque formule
 For each($formula;$_formulas)
    WP INSERT FORMULA($formula.range;$newFormula;wk replace)
 End for each


```

## Exemple 2 

Vous souhaitez utiliser un nom de formule pour le nom du client :  
  
```4d
  //ajouter des données
 $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  //créer un objet formule avec un nom
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Customer name"
 
  //insérer comme texte
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range;"Dear ";wk append)
 WP INSERT FORMULA($range;$o;wk append)
```

Résultat :

![](../../assets/en/WritePro/commands/pict6433508.en.png)

## Voir aussi 

*Gérer des formules*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  