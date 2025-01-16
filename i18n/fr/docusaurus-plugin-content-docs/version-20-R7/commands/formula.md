---
id: formula
title: Formula
slug: /commands/formula
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 17 R6   | Renommée (New formula -> Formula) |
| 17 R3   | Ajout                                                |

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->

| Paramètres | Type                        |     | Description                            |
| ---------- | --------------------------- | :-: | -------------------------------------- |
| formulaExp | Expression                  |  →  | Formule à retourner comme objet        |
| Résultat   | 4D.Function |  ←  | Fonction native encapsulant la formule |

<!-- END REF -->

#### Description

La commande `Formula` <!-- REF #_command_.Formula.Summary -->crée un objet `4D Function` basé sur l'expression *formulaExp*<!-- END REF -->. .

Le fait d'avoir une formule en tant qu'objet permet de la passer en tant que paramètre (champ calculé) à des commandes ou à des méthodes ou de l'exécuter à partir de divers composants sans avoir à les déclarer comme "partagés par les composants et la base de données hôte". Lorsqu'il est appelé, l'objet formula est évalué dans le contexte de la base de données ou du composant qui l'a créé.

La formule retournée peut être appelée avec :

- les méthodes [`call()`](#call) ou [`apply()`](#apply), ou
- la syntaxe de la notation objet (voir [objet formula](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //three different ways to call the formula
 $f.call($o) //retourne 3
 $f.apply($o) //retourne 3
 $o.myFormula() //retourne 3
```

Vous pouvez passer des [paramètres](#passing-parameters) à `Formula`, comme le montre l'[exemple 4](#example-4) ci-dessous.

Vous pouvez indiquer l'objet sur lequel la formule est exécutée, comme le montre l'[exemple 5](#example-5). Les propriétés de l'objet sont alors accessibles via la commande `This`.

Si *formuleExp* utilise des variables locales, leurs valeurs sont copiées et stockées dans l'objet formule retourné lors de sa création. Lors de son exécution, la formule utilise ces valeurs copiées plutôt que la valeur courante des variables locales. A noter que l'utilisation de tableaux comme variables locales n'est pas prise en charge.

L'objet créé par `Formula` peut être enregistré, par exemple, dans un champ de base de données ou dans un document blob.

#### Exemple 1

Une formule simple :

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // retourne 3
```

#### Exemple 2

Une formule utilisant des variables locales :

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // returns 10
```

#### Exemple 3

Une formule simple utilisant des paramètres :

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //retourne 30
```

#### Exemple 4

Une formule simple utilisant des paramètres :

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // équivalent à $result:=myMethod("param1";"param2")
```

#### Exemple 5

Avec l'utilisation de `This` :

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //retourne "John Smith"
```

#### Exemple 6

Appeler une formule à l'aide de la notation objet :

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //affecte la formule aux propriétés d'objet
 $feta.calc:=$calc
 $robot.calc:=$calc

  //appel de la formule
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

#### Voir également

[4D Blog - Formula: More power behind simplicity](https://blog.4d.com/new-formula-more-power-behind-simplicity/)\
[4D Blog - Formula: Think outside the box](https://blog.4d.com/new-formula-think-outside-the-box/)\
[4D Blog - Write your own methods for objects](https://blog.4d.com/write-your-own-methods-for-objects/)\
[Formula from string](formula-from-string.md)

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1597                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
