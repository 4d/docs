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

Les nombres négatifs s’écrivent précédés du signe moins (-). Par exemple :

```4d
-27
-123.76
-0.0076
```

## Opérateurs sur les nombres

| Opération           | Syntaxe          | Retourne | Expression | Valeur |
| ------------------- | ---------------- | -------- | ---------- | ------ |
| Addition            | Nombre + Nombre  | Number   | 2 + 3      | 5      |
| Soustraction        | Nombre - Nombre  | Number   | 3 – 2      | 1      |
| Multiplication      | Number * Number  | Number   | 5 * 2      | 10     |
| Division            | Number / Number  | Number   | 5 / 2      | 2.5    |
| Division entière    | Nombre \ Nombre | Number   | 5 \ 2     | 2      |
| Modulo              | Nombre % Nombre  | Number   | 5 % 2      | 1      |
| Exponentiation      | Nombre ^ Nombre  | Number   | 2 ^ 3      | 8      |
| Egalité             | Nombre = Nombre  | Boolean  | 10 = 10    | True   |
|                     |                  |          | 10 = 11    | False  |
| Inégalité           | Nombre # Nombre  | Boolean  | 10 #11     | True   |
|                     |                  |          | 10 # 10    | False  |
| Supérieur à         | Nombre > Nombre  | Boolean  | 11 > 10    | True   |
|                     |                  |          | 10 > 11    | False  |
| Inférieur à         | Nombre < Nombre  | Boolean  | 10 < 11    | True   |
|                     |                  |          | 11 < 10    | False  |
| Supérieur ou égal à | Nombre >= Nombre | Boolean  | 11 >= 10   | True   |
|                     |                  |          | 10 >= 11   | False  |
| Inférieur ou égal à | Nombre <= Nombre | Boolean  | 10 <= 11   | True   |
|                     |                  |          | 11 <= 10   | False  |

L'opérateur modulo % divise le premier nombre par le second et retourne le reste de la division entière. Voici quelques exemples :

- 10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste.
- 10 % 3 retourne 1 car le reste est 1.
- 10,5 % 2 retourne 0 car le reste n'est pas un nombre entier.

**ATTENTION :**

- L'opérateur modulo % retourne des valeurs significatives avec des nombres appartenant à la catégorie des entiers longs (de –2^31 à +2^31 moins 1). Pour calculer le modulo de nombres qui ne sont pas dans cet intervalle, utilisez la fonction `Modulo`.
- L'opérateur division entière \ retourne des valeurs significatives avec des nombres entiers uniquement.

### Priorité

L'ordre dans lequel une expression est évaluée s'appelle la priorité. 4D applique strictement une règle de priorité de gauche à droite. L'ordre algébrique n'est pas appliqué. Par exemple :

```4d
 3+4*5
```

retourne 35 car l'expression est évaluée comme 3 + 4, qui donne 7, multiplié par 5, ce qui donne 35.

Les parenthèses doivent être utilisées pour forcer l'ordre de calcul en fonction de vos besoins. Par exemple :

```4d
 3+(4*5)
```

retourne 23 car l'expression (4 * 5) est évaluée en premier lieu. Le résultat (20) est alors ajouté à 3, ce qui donne le résultat final 23.

Des parenthèses peuvent être incluses dans d'autres parenthèses. Assurez-vous qu'il y ait une parenthèse fermante pour chaque parenthèse ouverte. Une parenthèse manquante ou placée à un mauvais endroit peut soit donner un résultat erroné, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenthèses. Le compilateur interprètera toute parenthèse manquante ou superflue comme une erreur de syntaxe.

## Opérateurs sur les bits

Les opérateurs sur les bits s'appliquent à des expressions ou valeurs de type **Entier long**.

> Si vous passez une valeur de type Entier ou Réel à un opérateur sur les bits, 4D la convertit en Entier long avant de calculer le résultat de l'expression.

Lorsque vous employez des opérateurs sur les bits, vous devez considérer une valeur de type Entier long comme un tableau de 32 bits. Les bits sont numérotés de 0 à 31, de droite à gauche.

Comme un bit peut valoir 0 (zéro) ou 1, vous pouvez également considérer une valeur de type Entier long comme une expression dans laquelle vous pouvez stocker 32 valeurs de type Booléen. Lorsque le bit vaut 1, la valeur est **Vrai** et lorsque le bit vaut 0, la valeur est **Faux**.

Une expression utilisant un opérateur sur les bits retourne une valeur de type Entier long, à l'exception de l'opérateur Tester bit avec lequel l'expression retournée est du type Booléen. Le tableau suivant fournit la liste des opérateurs sur les bits et leur syntaxe :

| Opération             | Opérateur | Syntaxe                | Retourne                |
| --------------------- | --------- | ---------------------- | ----------------------- |
| ET                    | &         | long & E. E. long      | E. long                 |
| OU (inclusif)         | &#124;    | long &#124; E. long    | E. long                 |
| OU (exclusif)         | \^&#124; | long \^&#124; E. long | E. long                 |
| Décaler bits à gauche | <<        | E. Long << E. Long     | long (voir note n°1)    |
| Décaler bits à droite | >>        | E. Long >> E. Long     | long (voir note n°1)    |
| Mettre bit à 1        | ?+        | long ?+ E. E. long     | long (voir note n°2)    |
| Mettre bit à 0        | ?-        | long ??                | long (voir note n°2)    |
| Tester bit            | ??        | long & E. E. long      | Booléen (voir note n°2) |

#### Notes

1. Dans les opérations utilisant `Décaler bits à gauche` et `Décaler bits à droite`, le second opérande indique le nombre de décalages de bits du premier opérande à effectuer dans la valeur retournée. Par conséquent, ce second opérande doit être compris entre 0 et 31. Notez qu'un décalage de 0 retourne une valeur inchangée et qu'un décalage de plus de 31 bits retourne 0x00000000 car tous les bits sont perdus. Si vous passez une autre valeur en tant que second opérande, le résultat sera non significatif.
2. Dans les opérations utilisant `Mettre bit à 1`, `Mettre bit à 0` et `Tester bit`, le second opérande indique le numéro du bit sur lequel agir. Par conséquent, ce second opérande doit être compris entre 0 et 31, sinon le résultat de l'expression sera non significatif.

Le tableau suivant dresse la liste des opérateurs sur les bits et de leurs effets :

| Opération | Description                                                                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ET        | Chaque bit retourné est le résultat de l'opération ET logique appliquée aux deux bits opérandes. Voici la table du ET logique :<li>1 & 1 --> 1</li> |
<li>0 & 1 --> 0</li><li>1 & 0 --> 0</li><li>0 & 0 --> 0</li>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.| |Bitwise OR (inclusive)|Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:<li>1 &#124; 1 --> 1</li><li>0 &#124; 1 --> 1</li><li>1 &#124; 0 --> 1</li><li>0 &#124; 0 --> 0</li>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.| |Bitwise OR (exclusive)|Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:<li>1 \^&#124; 1 --> 0</li><li>0 \^&#124; 1 --> 1</li><li>1 \^&#124; 0 --> 1</li><li>0 \^&#124; 0 --> 0</li>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.| |Left Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. Les bits auparavant situés à gauche sont perdus et les nouveaux bits situés à droite ont la valeur 0. 

**Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.| |Right Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.| |Bit Set|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. |Bit Clear|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. |Bit Test|Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Retourne Faux si, dans le premier opérande, le bit dont le numéro est indiqué par le second opérande vaut 0.|

### Exemples

| Opération             | Exemple                         | Résultat   |
| --------------------- | ------------------------------- | ---------- |
| ET                    | 0x0000FFFF & 0xFF00FF00         | 0x0000FF00 |
| OU (inclusif)         | 0x0000FFFF &#124; 0xFF00FF00    | 0xFF00FFFF |
| OU (exclusif)         | 0x0000FFFF \^&#124; 0xFF00FF00 | 0xFF0000FF |
| Décaler bits à gauche | 0x0000FFFF << 8                 | 0x00FFFF00 |
| Décaler bits à droite | 0x0000FFFF >> 8                 | 0x000000FF |
| Mettre bit à 1        | 0x00000000 ?+ 16                | 0x00010000 |
| Mettre bit à 0        | 0x00010000 ?- 16                | 0x00000000 |
| Tester bit            | 0x00010000 ?? 16                | True       |
