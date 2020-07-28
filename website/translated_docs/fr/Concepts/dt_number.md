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

```4d
27
123.76
0.0076
```

> Le séparateur décimal est par défaut le point (.), quelle que soit la langue du système. Si vous avez coché l'option "Utiliser langage français et paramètres régionaux système" dans la Page Méthodes des Préférences, vous devez utiliser le séparateur défini dans votre système.

Les nombres négatifs s’écrivent précédés du signe moins (-). Par exemple:

```4d
-27
-123.76
-0.0076
```

## Opérateurs sur les nombres

| Opération           | Syntaxe          | Retourne | Expression | Valeur |
| ------------------- | ---------------- | -------- | ---------- | ------ |
| Addition            | Nombre + Nombre  | Nombre   | 2 + 3      | 5      |
| Soustraction        | Nombre - Nombre  | Nombre   | 3 – 2      | 1      |
| Multiplication      | Number * Number  | Nombre   | 5 * 2      | 10     |
| Division            | Number / Number  | Nombre   | 5 / 2      | 2.5    |
| Division entière    | Nombre \ Nombre | Nombre   | 5 \ 2     | 2      |
| Modulo              | Nombre % Nombre  | Nombre   | 5 % 2      | 1      |
| Exponentiation      | Nombre ^ Nombre  | Nombre   | 2 ^ 3      | 8      |
| Egalité             | Nombre = Nombre  | Booléen  | 10 = 10    | Vrai   |
|                     |                  |          | 10 = 11    | Faux   |
| Inégalité           | Nombre # Nombre  | Booléen  | 10 #11     | Vrai   |
|                     |                  |          | 10 # 10    | Faux   |
| Supérieur à         | Nombre > Nombre  | Booléen  | 11 > 10    | Vrai   |
|                     |                  |          | 10 > 11    | Faux   |
| Inférieur à         | Nombre < Nombre  | Booléen  | 10 < 11    | Vrai   |
|                     |                  |          | 11 < 10    | Faux   |
| Supérieur ou égal à | Nombre >= Nombre | Booléen  | 11 >= 10   | Vrai   |
|                     |                  |          | 10 >= 11   | Faux   |
| Inférieur ou égal à | Nombre <= Number | Booléen  | 10 <= 11   | Vrai   |
|                     |                  |          | 11 <= 10   | Faux   |


L'opérateur modulo % divise le premier nombre par le second et retourne le reste de la division entière. Voici quelques exemples :

- 10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste.
- 10 % 3 retourne 1 car le reste est 1.
- 10,5 % 2 retourne 0 car le reste n'est pas un nombre entier.

**ATTENTION :**

- L'opérateur modulo % retourne des valeurs significatives avec des nombres appartenant à la catégorie des entiers longs (de –2^31 à +2^31 moins 1). Pour calculer le modulo de nombres qui ne sont pas dans cet intervalle, utilisez la fonction `Modulo`.
- L'opérateur division entière \ retourne des valeurs significatives avec des nombres entiers uniquement. 

### Priorité

L'ordre dans lequel une expression est évaluée s'appelle la priorité. 4D applique strictement une règle de priorité de gauche à droite. L'ordre algébrique n'est pas appliqué. Par exemple:

```4d
 3+4*5
```

retourne 35 car l'expression est évaluée comme 3 + 4, qui donne 7, multiplié par 5, ce qui donne 35.

Les parenthèses doivent être utilisées pour forcer l'ordre de calcul en fonction de vos besoins. Par exemple:

```4d
 3+(4*5)
```

retourne 23 car l'expression (4 * 5) est évaluée en premier lieu. Le résultat (20) est alors ajouté à 3, ce qui donne le résultat final 23.

Des parenthèses peuvent être incluses dans d'autres parenthèses. Assurez-vous qu'il y ait une parenthèse fermante pour chaque parenthèse ouverte. Une parenthèse manquante ou placée à un mauvais endroit peut soit donner un résultat erroné, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenthèses. Le compilateur interprètera toute parenthèse manquante ou superflue comme une erreur de syntaxe.

## Opérateurs sur les bits

The bitwise operators operates on **Long Integer** expressions or values.

> If you pass an Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long Integer value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long Integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left.

Because each bit can equal 0 or 1, you can also think about a Long Integer value as a value where you can store 32 Boolean values. A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long Integer value, except for the Bit Test operator, where the expression returns a Boolean value. The following table lists the bitwise operators and their syntax:

| Opération              | Opérateur | Syntaxe             | Retourne             |
| ---------------------- | --------- | ------------------- | -------------------- |
| Bitwise AND            | &         | Long & Long         | Long                 |
| Bitwise OR (inclusive) | &#124;    | Long &#124; Long    | Long                 |
| Bitwise OR (exclusive) | \^&#124; | Long \^&#124; Long | Long                 |
| Left Bit Shift         | <<        | Long << Long        | Long (see note 1)    |
| Right Bit Shift        | >>        | Long >> Long        | Long (see note 1)    |
| Bit Set                | ?+        | Long ?+ Long        | Long (see note 2)    |
| Bit Clear              | ?-        | Long ?- Long        | Long (see note 2)    |
| Bit Test               | ??        | Long ?? Long        | Boolean (see note 2) |


#### Notes

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.

The following table lists the bitwise operators and their effects:

| Opération   | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| Bitwise AND | Each resulting bit is the logical AND of the bits in the two operands. |


<

p>Here is the logical AND table:

- 1 & 1 --> 1
    - 0 & 1 --> 0
        - 1 & 0 --> 0
            - 0 & 0 --> 0</p> 
                <
                
                p>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.| |Bitwise OR (inclusive)|Each resulting bit is the logical OR of the bits in the two operands.
                
                <
                
                p>Here is the logical OR table:
                
                - 1 &#124; 1 --> 1
                    - 0 &#124; 1 --> 1
                        - 1 &#124; 0 --> 1
                            - 0 &#124; 0 --> 0</p> 
                                <
                                
                                p>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.| |Bitwise OR (exclusive)|Each resulting bit is the logical XOR of the bits in the two operands.
                                
                                <
                                
                                p>Here is the logical XOR table:
                                
                                - 1 \^&#124; 1 --> 0
                                    - 0 \^&#124; 1 --> 1
                                        - 1 \^&#124; 0 --> 1
                                            - 0 \^&#124; 0 --> 0</p> 
                                                <
                                                
                                                p>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.| |Left Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0.
                                                
                                                <
                                                
                                                p>**Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.| |Right Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.
                                                
                                                <
                                                
                                                p>**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.| |Bit Set|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged.| |Bit Clear|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged.| |Bit Test|Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns False if, in the first operand, the bit whose number is indicated by the second operand is equal to 0.|
                                                
                                                ### Exemples
                                                
                                                | Opération              | Exemple                                    | Result     |
                                                | ---------------------- | ------------------------------------------ | ---------- |
                                                | Bitwise AND            | 0x0000FFFF & 0xFF00FF00                    | 0x0000FF00 |
                                                | Bitwise OR (inclusive) | 0x0000FFFF &#124; 0xFF00FF00               | 0xFF00FFFF |
                                                | Bitwise OR (exclusive) | 0x0000FFFF \^&#124; 0xFF00FF00 0xFF0000FF |            |
                                                | Left Bit Shift         | 0x0000FFFF << 8                            | 0x00FFFF00 |
                                                | Right Bit Shift        | 0x0000FFFF >> 8                            | 0x000000FF |
                                                | Bit Set                | 0x00000000 ?+ 16                           | 0x00010000 |
                                                | Bit Clear              | 0x00010000 ?- 16                           | 0x00000000 |
                                                | Bit Test               | 0x00010000 ?? 16                           | Vrai       |