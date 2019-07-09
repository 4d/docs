---
id: number
title: Numérique (Réel, Entier, Entier long)
---

Numérique est un terme générique utilisé pour :

- Les champs, variables ou expression de type Réel. Les nombres de type Réel sont compris dans l'intervalle ±1.7e±308 (13 chiffres significatifs). 
- Les champs, variables ou expression de type Entier long. Les nombres de type Entier long (4 octets) sont compris dans l'intervalle -2^31..(2^31)-1. 
- Les champs, variables ou expression de type Entier. Les nombres de type Entier (2 octets) sont compris dans l'intervalle -32 768..32 767.

**Note :** Lorsqu'elles sont utilisées dans le langage 4D, les valeurs des champs de type Entier sont automatiquement converties en Entier long.

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

### Priorité

L'ordre dans lequel une expression est évaluée s'appelle la priorité. 4D applique strictement une règle de priorité de gauche à droite. L'ordre algébrique n'est pas appliqué. Par exemple :

```code4d
 3+4*5
```

retourne 35 car l'expression est évaluée comme 3 + 4, qui donne 7, multiplié par 5, ce qui donne 35.

Les parenthèses doivent être utilisées pour forcer l'ordre de calcul en fonction de vos besoins. Par exemple :

```code4d
 3+(4*5)
```

retourne 23 car l'expression (4 * 5) est évaluée en premier lieu. Le résultat (20) est alors ajouté à 3, ce qui donne le résultat final 23.

Des parenthèses peuvent être incluses dans d'autres parenthèses. Assurez-vous qu'il y ait une parenthèse fermante pour chaque parenthèse ouverte. Une parenthèse manquante ou placée à un mauvais endroit peut soit donner un résultat erroné, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenthèses. Le compilateur interprètera toute parenthèse manquante ou superflue comme une erreur de syntaxe.