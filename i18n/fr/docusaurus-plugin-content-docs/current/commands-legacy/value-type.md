---
id: value-type
title: Value type
slug: /commands/value-type
displayed_sidebar: docs
---

<!--REF #_command_.Value type.Syntax-->**Value type** ( *expression* ) : Integer<!-- END REF-->
<!--REF #_command_.Value type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | Expression dont la valeur résultante doit être testée |
| Résultat | Integer | &#8592; | Numéro du type de données |

<!-- END REF-->

#### Description 

<!--REF #_command_.Value type.Summary-->La commande **Value type** retourne le type de la valeur résultant de l'évaluation de l'*expression* passée en paramètre.<!-- END REF--> 

La commande retourne une valeur numérique qui peut être comparée aux constantes suivantes du thème *Types champs et variables* : 

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| \_o\_Is float | Entier long | 35     |
| Is BLOB       | Entier long | 30     |
| Is Boolean    | Entier long | 6      |
| Is collection | Entier long | 42     |
| Is date       | Entier long | 4      |
| Is longint    | Entier long | 9      |
| Is null       | Entier long | 255    |
| Is object     | Entier long | 38     |
| Is picture    | Entier long | 3      |
| Is pointer    | Entier long | 23     |
| Is real       | Entier long | 1      |
| Is text       | Entier long | 2      |
| Is time       | Entier long | 11     |
| Is undefined  | Entier long | 5      |
| Is variant    | Entier long | 12     |
| Object array  | Entier long | 39     |

Cette commande est destinée à retourner le type des expressions *scalaires*, c'est-à-dire des valeurs stockées dans ou retournées par le paramètre *expression*. En particulier, elle peut être appliquée aux expressions 4D suivantes :

* propriétés d'objets (*emp.name*),
* éléments de collections (*myCol\[5\]*).

**Note :** Les propriétés d'objets numériques ont toujours le type réel :

```4d
 var $o : Object
 $o:=New object("value";42)
 $vType:=Value type($o.value) //$vType=Est un réel
```

**Value type** peut être appliquée à toute expression 4D valide, y compris les champs, les variables ou les paramètres. Dans ce cas, à la différence de la commande [Type](type.md), **Value type** retourne le type *interne* de la valeur résultant de l'évaluation de l'*expression*, et non son type *declaré*. Comme le langage de 4D convertit certains types de valeurs en interne, le résultat de **Value type** peut différer du type déclaré. Par exemple, 4D convertit en interne les valeurs des champs de type "*Entier 64 bits*". Vous pouvez obtenir les résultats suivants :

```4d
 $vType1:=Type([myTable]Long64field) //$vType=Est un entier 64 bits
 $vType2:=Value type([myTable]Long64field) //$vType=Est un numérique (en mode interprété)
```

D'autres différences relatives aux tableaux (l'évaluation d'un tableau retourne l'indice de l'élément courant) et au mode compilé sont à noter. Le tableau suivant liste ces différences :

| **Type déclaré**       | **Résultat de** [Type](type.md) | **Résultat de Value type (interprété)** | **Résultat de Value type (compilé)** | **Commentaire**                                                                                                          |
| ---------------------- | ------------------------------- | --------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| TABLEAU TEXTE($t;1)    | Text array                      | Is real                                 | Is longint                           | $t contient l'indice de l'élément courant, qui est un numérique                                                          |
| Champ *Alpha*          | Is alpha field                  | Is text                                 | Is text                              | 4D manipule en interne toutes les chaînes en texte                                                                       |
| Champ *Entier*         | Is integer                      | Is real                                 | Is longint                           | Pour des raisons d'optimisation, en mode interprété toutes les valeurs numériques sont considérées comme des réels et... |
| Champ *Entier long*    | Is longint                      | Is real                                 | Is longint                           | ... en mode compilé, toutes les valeurs entières sont considérées comme des entiers longs(\*)                            |
| Champ *Entier 64 bits* | Is integer 64 bits              | Is real                                 | Is longint                           |                                                                                                                          |

(\*)Si vous voulez effectuer un test de valeur numérique qui soit valide pour les modes interprété et compilé, vous devez écrire un code du type :

```4d
 If(Value type($myValue)=Is longint)|(Value type($myValue)=Est un réel)
```

**Note de compatibilité :** A compter de 4D v16 R6, les dates sont stockées dans les propriétés d'objets soit avec le type date, soit en texte au format date ISO. Pour plus d'informations, reportez-vous à la description du sélecteur Dates inside objects de la commande [SET DATABASE PARAMETER](set-database-parameter.md).

#### Exemple 1 

Vous souhaitez gérer les divers types possibles de valeurs d'une propriété d'objet :

```4d
 Case of
    :(Value type($o.value)=Is real)
  //valeur de type numérique
    :(Value type($o.value)=Is text)
  //valeur de type texte
    :(Value type($o.value)=Is object)
  //valeur de type sous-objet
       ...
 End case
```

#### Exemple 2 

Vous souhaitez obtenir la somme de toutes les valeurs numériques dans une collection :

```4d
 var $col : Collection
 var $sum : Real
 $col:=New collection("Hello";20;"World2";15;50;Current date;True;10)
 For($i;0;$col.length-1) //-1 car les collections débutent à 0
    If(Value type($col[$i])=Is real)
       $sum:=$sum+$col[$i]
    End if
 End for
 ALERT(String($sum)) //95
```

#### Voir aussi 

[OB Get type](ob-get-type.md)  
[Type](type.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1509 |
| Thread safe | &check; |


