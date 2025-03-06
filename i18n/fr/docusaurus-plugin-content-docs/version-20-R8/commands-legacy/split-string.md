---
id: split-string
title: Split string
slug: /commands/split-string
displayed_sidebar: docs
---

<!--REF #_command_.Split string.Syntax-->**Split string** ( *chaîneASéparer* ; *séparateur* {; *options*} ) : Collection<!-- END REF-->
<!--REF #_command_.Split string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chaîneASéparer | Text | &#8594;  | Chaîne d'origine à découper |
| séparateur | Text | &#8594;  | Chaîne à laquelle chaîneASéparer doit être découpée. Si chaîne vide (""), chaque caractère de chaîneASéparer sera un élément de la collection |
| options | Integer | &#8594;  | Option(s) relative(s) aux chaînes vides et espaces |
| Résultat | Collection | &#8592; | Collection de sous-chaînes |

<!-- END REF-->

#### Description 

<!--REF #_command_.Split string.Summary-->La commande **Split string** retourne une collection de chaînes, créée à partir du découpage de *chaîneASéparer* en sous-chaînes aux limites définies par le paramètre *séparateur*.<!-- END REF--> Les sous-chaînes dans la collection retournée n'incluent pas le *séparateur* lui-même.

Si aucun *séparateur* n'est trouvé dans *chaîneASéparer*, **Split string** retourne une collection contenant un seul élément, *chaîneASéparer*. Si vous passez une chaîne vide dans *séparateur*, **Split string** retourne une collection de chaque caractère de *chaîneASéparer*.

Dans le paramètre *options*, vous pouvez passer une ou une combinaison des constantes suivantes du thème *Chaînes* :

| Constante               | Type        | Valeur | Comment                                                                       |
| ----------------------- | ----------- | ------ | ----------------------------------------------------------------------------- |
| sk ignore empty strings | Entier long | 1      | Supprimer les chaînes vides de la collection résultante (elles sont ignorées) |
| sk trim spaces          | Entier long | 2      | Retirer les espaces au début et à la fin des sous-chaînes                     |

#### Exemple 1 

```4d
 var $vt : Text
 var $col : Collection
 $col:=New collection
 
 $vt:="John;Doe;120 jefferson st.;Riverside;; NJ; 08075"
 $col:=Split string($vt;";") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
```

#### Exemple 2 

Le paramètre *séparateur* peut être une chaîne de plusieurs caractères : 

```4d
 var $vt : Text
 var $col : Collection
 $vt:="NameSmithage40"
 $col:=Split string($vt;"")
  //$col=["Name","Smith","age","40"]
```

#### Voir aussi 

[TEXT TO ARRAY](text-to-array.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1554 |
| Thread safe | &check; |


