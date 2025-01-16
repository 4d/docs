---
id: number
title: Number (Real, Integer)
---

Numérique est un terme générique utilisé pour :

- Les champs, variables ou expression de type Réel. Les nombres de type Réel sont compris dans l'intervalle ±1.7e±308 (13 chiffres significatifs).
- Integer variable or expression. The range for the Integer data type is -2^31..(2^31)-1 (4-byte Integer, aka *Long* or *Longint*).

:::info Compatibilité

Usually when working with Integers, you handle *Long* values (4-byte Integer). However, there are two cases where Integers are stored as *Shorts* values (2-byte Integer), i.e. in the range -32,768..32,767 (2^15..(2^15)-1):

- Database fields with `Integer` type,
- Elements of arrays declared with [`ARRAY INTEGER`](../commands-legacy/array-integer.md).

These legacy data types are automatically converted in *Longs* when used in the 4D Language.

:::

Vous pouvez assigner tout nombre d'un type numérique à un nombre d'un autre type numérique, 4D effectue automatiquement la conversion, en tronquant ou en arrondissant les valeurs si nécessaire. Notez cependant que lorsqu'une valeur est située en-dehors de l'intervalle du type de destination, 4D ne pourra la convertir. You can mix number data types in expressions.

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

| Opération           | Syntaxe                                   | Retourne | Expression                        | Valeur              |
| ------------------- | ----------------------------------------- | -------- | --------------------------------- | ------------------- |
| Addition            | Nombre + Nombre                           | Number   | 2 + 3                             | 5                   |
| Soustraction        | Nombre - Nombre                           | Number   | 3 – 2                             | 1                   |
| Multiplication      | Number \* Number                          | Number   | 5 \* 2                            | 10                  |
| Division            | Number / Number                           | Number   | 5 / 2                             | 2.5 |
| Division entière    | Nombre \ Nombre                           | Number   | 5 \ 2                             | 2                   |
| Modulo              | Nombre % Nombre                           | Number   | 5 % 2                             | 1                   |
| Exponentiation      | Nombre ^ Nombre                           | Number   | 2 ^ 3                             | 8                   |
| Egalité             | Nombre = Nombre                           | Boolean  | 10 = 10                           | True                |
|                     |                                           |          | 10 = 11                           | False               |
| Inégalité           | Nombre # Nombre                           | Boolean  | 10 #11                            | True                |
|                     |                                           |          | 10 # 10                           | False               |
| Supérieur à         | Number > Number                           | Boolean  | 11 > 10                           | True                |
|                     |                                           |          | 10 > 11                           | False               |
| Inférieur à         | Number < Number  | Boolean  | 10 < 11  | True                |
|                     |                                           |          | 11 < 10  | False               |
| Supérieur ou égal à | Number >= Number                          | Boolean  | 11 >= 10                          | True                |
|                     |                                           |          | 10 >= 11                          | False               |
| Inférieur ou égal à | Number <= Number | Boolean  | 10 <= 11 | True                |
|                     |                                           |          | 11 <= 10 | False               |

### Modulo

L'opérateur modulo % divise le premier nombre par le second et retourne le reste de la division entière. Voici quelques exemples :

- 10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste.
- 10 % 3 retourne 1 car le reste est 1.
- 10,5 % 2 retourne 0 car le reste n'est pas un nombre entier.

:::warning

L'opérateur modulo % retourne des valeurs significatives avec des nombres appartenant à la catégorie des entiers longs (de –2^31 à +2^31 moins 1). To calculate the modulo with numbers outside of this range, use the [`Mod`](../commands-legacy/mod.md) command.

:::

### Division entière

L'opérateur division entière \ retourne des valeurs significatives avec des nombres entiers uniquement.

### Comparaison des réels

To compare two reals for equality, the 4D language actually compares the absolute value of the difference with *epsilon*. See the [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md) command.

:::note

For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for *epsilon* and does not take the [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md) setting into account.

:::

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

retourne 23 car l'expression (4 \* 5) est évaluée en premier lieu. Le résultat (20) est alors ajouté à 3, ce qui donne le résultat final 23.

Des parenthèses peuvent être incluses dans d'autres parenthèses. Assurez-vous qu'il y ait une parenthèse fermante pour chaque parenthèse ouverte. Une parenthèse manquante ou placée à un mauvais endroit peut soit donner un résultat erroné, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenthèses. Le compilateur interprètera toute parenthèse manquante ou superflue comme une erreur de syntaxe.

## Opérateurs sur les bits

The bitwise operators operates on (Long) Integers expressions or values.

> If you pass a (Short) Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long value as an array of 32 bits. Les bits sont numérotés de 0 à 31, de droite à gauche.

Comme un bit peut valoir 0 (zéro) ou 1, vous pouvez également considérer une valeur de type Entier long comme une expression dans laquelle vous pouvez stocker 32 valeurs de type Booléen. A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long value, except for the Bit Test operator, where the expression returns a Boolean value. Le tableau suivant fournit la liste des opérateurs sur les bits et leur syntaxe :

| Opération                        | Opérateur                                            | Syntaxe                                                        | Retourne                                   |
| -------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| ET                               | &                                | Long & Long                                | E. long                    |
| OU (inclusif) | &#124                            | long \| E. long                                | E. long                    |
| OU (exclusif) | ^ &#124                          | Long ^ \| Long                                                 | E. long                    |
| Décaler bits à gauche            | << | Long << Long | long (voir note n°1)    |
| Décaler bits à droite            | > >                                                  | Long >> Long                                                   | long (voir note n°1)    |
| Mettre bit à 1                   | ?+                                                   | long ?+ E. E. long             | long (voir note n°2)    |
| Mettre bit à 0                   | ?-                                                   | long ??                                                        | long (voir note n°2)    |
| Tester bit                       | ??                                                   | long \^\| E. E. long          | Booléen (voir note n°2) |

#### Notes

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Par conséquent, ce second opérande doit être compris entre 0 et 31. Notez qu'un décalage de 0 retourne une valeur inchangée et qu'un décalage de plus de 31 bits retourne 0x00000000 car tous les bits sont perdus. Si vous passez une autre valeur en tant que second opérande, le résultat sera non significatif.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Par conséquent, ce second opérande doit être compris entre 0 et 31, sinon le résultat de l'expression sera non significatif.

Le tableau suivant dresse la liste des opérateurs sur les bits et de leurs effets :

| Opération                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ET                               | Chaque bit résultant est le ET logique des bits dans les deux opérandes. Here is the logical AND table:<li>1 & 1 --> 1</li><li>0 & 1 --> 0</li><li>1 & 0 --> 0</li><li>0 & 0 --> 0</li>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.                                                |
| OU (inclusif) | Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:<li>1 \| 1 --> 1</li><li>0 \| 1 --> 1</li><li>1 \| 0 --> 1</li><li>0 \| 0 --> 0</li>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.                                                                                                                  |
| OU (exclusif) | Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:<li>1 ^ \| 1 --> 0</li><li>0 ^ \| 1 --> 1</li><li>1 ^ \| 0 --> 1</li><li>0 ^ \| 0 --> 0</li>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.                                                                                                            |
| Décaler bits à gauche            | La valeur résultante est définie sur la première valeur d'opérande, puis les bits résultants sont décalés vers la gauche du nombre de positions indiqué par le deuxième opérande. Les bits auparavant situés à gauche sont perdus et les nouveaux bits situés à droite ont la valeur 0. **Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N. |
| Décaler bits à droite            | La valeur résultante est définie sur la première valeur d'opérande, puis les bits résultants sont décalés vers la droite du nombre de positions indiqué par le deuxième opérande. The bits on the right are lost and the new bits on the left are set to 0.**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.                                |
| Mettre bit à 1                   | La valeur retournée est la valeur du premier opérande dans lequel le bit dont le numéro est spécifié par le second opérande est positionné à 0. Les autres bits demeurent inchangés.                                                                                                                                                                                                                                                          |
| Mettre bit à 0                   | La valeur retournée est la valeur du premier opérande dans lequel le bit dont le numéro est spécifié par le second opérande est positionné à 0. Les autres bits demeurent inchangés.                                                                                                                                                                                                                                                          |
| Tester bit                       | Retourne Vrai si, dans le premier opérande, le bit dont le numéro est indiqué par le second opérande vaut 1. Retourne Faux si, dans le premier opérande, le bit dont le numéro est indiqué par le second opérande vaut 0.                                                                                                                                                                                                                     |

### Exemples

| Opération                        | Exemple                                                           | Résultat   |
| -------------------------------- | ----------------------------------------------------------------- | ---------- |
| ET                               | 0x0000FFFF & 0xFF00FF00                       | 0x0000FF00 |
| OU (inclusif) | 0x0000FFFF \| 0xFF00FF00                                          | 0xFF00FFFF |
| OU (exclusif) | 0x0000FFFF ^ \| 0xFF00FF00                                        | 0xFF0000FF |
| Décaler bits à gauche            | 0x0000FFFF << 8 | 0x00FFFF00 |
| Décaler bits à droite            | 0x0000FFFF >> 8                                                   | 0x000000FF |
| Mettre bit à 1                   | 0x00000000 ?+ 16                                                  | 0x00010000 |
| Mettre bit à 0                   | 0x00010000 ?- 16                                                  | 0x00000000 |
| Tester bit                       | 0x00010000 ?? 16                                                  | True       |
