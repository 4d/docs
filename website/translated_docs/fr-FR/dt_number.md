---
id: number
title: Numérique (Réel, Entier, Entier long)
---

Numérique est un terme générique utilisé pour :

- Les champs, variables ou expression de type Réel. Les nombres de type Réel sont compris dans l'intervalle ±1.7e±308 (13 chiffres significatifs). 
- Les champs, variables ou expression de type Entier long. Les nombres de type Entier long (4 octets) sont compris dans l'intervalle -2^31..(2^31)-1. 
- Les champs, variables ou expression de type Entier. Les nombres de type Entier (2 octets) sont compris dans l'intervalle -32 768..32 767.

**Note:** Integer field values are automatically converted in Long integers when used in the 4D Language.

Vous pouvez assigner tout nombre d'un type numérique à un nombre d'un autre type numérique, 4D effectue automatiquement la conversion, en tronquant ou en arrondissant les valeurs si nécessaire. Notez cependant que lorsqu'une valeur est située en-dehors de l'intervalle du type de destination, 4D ne pourra la convertir. Vous pouvez mélanger tous les types de numériques au sein d'une même expression.

**Note :** Dans ce manuel de référence du langage 4D, quel que soit le type précis des données, les paramètres de type Réel, Entier et Entier long dans les descriptions des commandes sont appelés numériques, sauf spécification explicite.

## Constantes littérales numériques

Une constante littérale numérique s’écrit comme un nombre réel. Voici quelques exemples de constantes numériques :

```code4d
27
123.76
0.0076
```

**Note :** Depuis 4D v15, le séparateur décimal est par défaut le point (.), quelle que soit la langue du système. Si vous avez coché l'option "Utiliser langage français et paramètres régionaux système" (cf. Page Méthodes), vous devez utiliser le séparateur défini dans votre système.

Les nombres négatifs s’écrivent précédés du signe moins (-). Par exemple:

```code4d
-27
-123.76
-0.0076
```

## Opérateurs sur les nombres

| Opération | Syntaxe         | Retourne | Expression | Valeur |
| --------- | --------------- | -------- | ---------- | ------ |
| Addition  | Nombre + Nombre | Nombre   | 2 + 3      | 5      | Soustraction |Nombre – Nombre |Nombre |3 – 2 |1| Multiplication |Nombre * Nombre |Nombre |5 * 2 |10| Division |Nombre /Nombre |Nombre |5 / 2 |2.5| Division entière |Nombre \ Nombre |Nombre |5 \ 2 |2| Modulo |Nombre /Nombre |Nombre |5 % 2 |1| Exponentiation |Nombre ^ Nombre |Nombre |2 ^ 3| 8| Egalité |Nombre = Nombre|Booléen |10 = 10 |Vrai| ||||10 = 11| Faux| Inégalité |Nombre # Nombre |Booléen |10 #11 |Vrai| ||||10 # 10 |Faux| Supérieur à |Nombre > Nombre |Booléen |11 > 10 |Vrai| ||||10 > 11 |Faux| Inférieur à |Nombre < Nombre |Booléen |10 < 11 |Vrai| |||| 11 < 10 |Faux| Supérieur ou égal à |Nombre >= Nombre |Booléen |11 >= 10 |Vrai| ||||10 >= 11 |Faux| Inférieur ou égal à |Nombre <= Number |Boolean |10 <= 11 |True| |||| 11 <= 10 |False| 

L'opérateur modulo % divise le premier nombre par le second et retourne le reste de la division entière. Voici quelques exemples :

- 10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste.
- 10 % 3 retourne 1 car le reste est 1.
- 10,5 % 2 retourne 0 car le reste n'est pas un nombre entier.

**ATTENTION :**

- L'opérateur modulo % retourne des valeurs significatives avec des nombres appartenant à la catégorie des entiers longs (de –2^31 à +2^31 moins 1). Pour calculer le modulo de nombres qui ne sont pas dans cet intervalle, utilisez la fonction `Modulo`.
- L'opérateur division entière \ retourne des valeurs significatives avec des nombres entiers uniquement. 

### Precedence

The order in which an expression is evaluated is called precedence. 4D has a strict left-to-right precedence, in which algebraic order is not observed. Par exemple:

```code4d
 3+4*5
```

returns 35, because the expression is evaluated as 3 + 4, yielding 7, which is then multiplied by 5, with the final result of 35.

To override the left-to-right precedence, you MUST use parentheses. Par exemple:

```code4d
 3+(4*5)
```

returns 23 because the expression (4 * 5) is evaluated first, because of the parentheses. The result is 20, which is then added to 3 for the final result of 23.

Parentheses can be nested inside other sets of parentheses. Be sure that each left parenthesis has a matching right parenthesis to ensure proper evaluation of expressions. Lack of, or incorrect use of parentheses can cause unexpected results or invalid expressions. Furthermore, if you intend to compile your applications, you must have matching parentheses—the compiler detects a missing parenthesis as a syntax error.