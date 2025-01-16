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

### Modulo

L'opérateur modulo % divise le premier nombre par le second et retourne le reste de la division entière. Voici quelques exemples :

- 10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste.
- 10 % 3 retourne 1 car le reste est 1.
- 10,5 % 2 retourne 0 car le reste n'est pas un nombre entier.

:::warning

L'opérateur modulo % retourne des valeurs significatives avec des nombres appartenant à la catégorie des entiers longs (de –2^31 à +2^31 moins 1). Pour calculer le module avec des nombres en dehors de cet intervalle, utilisez la commande [`Mod`(https://doc.4d.com/4dv20/help/command/en/page98.html)].

:::

### Division entière

L'opérateur division entière \ retourne des valeurs significatives avec des nombres entiers uniquement.

### Comparaison des réels

Pour comparer l'égalité de deux réels, le langage 4D compare en fait la valeur absolue de la différence avec *epsilon*. Voir la commande [`SET REAL COMPARISON NIVEAU`](https://doc.4d.com/4dv20/help/command/en/page623.html).

:::note

Pour la cohérence, le moteur de base de données 4D compare toujours les champs de la base de données de type réel en utilisant une valeur de 10^-6 pour *epsilon* et ne prend pas en compte le paramètrage `SET REAL COMPARISON`.

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

retourne 23 car l'expression (4 * 5) est évaluée en premier lieu. Le résultat (20) est alors ajouté à 3, ce qui donne le résultat final 23.

Des parenthèses peuvent être incluses dans d'autres parenthèses. Assurez-vous qu'il y ait une parenthèse fermante pour chaque parenthèse ouverte. Une parenthèse manquante ou placée à un mauvais endroit peut soit donner un résultat erroné, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenthèses. Le compilateur interprètera toute parenthèse manquante ou superflue comme une erreur de syntaxe.

## Opérateurs sur les bits

Les opérateurs sur les bits s'appliquent à des expressions ou valeurs de type **Entier long**.

> Si vous passez une valeur de type Entier ou Réel à un opérateur sur les bits, 4D la convertit en Entier long avant de calculer le résultat de l'expression.

Lorsque vous employez des opérateurs sur les bits, vous devez considérer une valeur de type Entier long comme un tableau de 32 bits. Les bits sont numérotés de 0 à 31, de droite à gauche.

Comme un bit peut valoir 0 (zéro) ou 1, vous pouvez également considérer une valeur de type Entier long comme une expression dans laquelle vous pouvez stocker 32 valeurs de type Booléen. Lorsque le bit vaut 1, la valeur est **Vrai** et lorsque le bit vaut 0, la valeur est **Faux**.

Une expression utilisant un opérateur sur les bits retourne une valeur de type Entier long, à l'exception de l'opérateur Tester bit avec lequel l'expression retournée est du type Booléen. Le tableau suivant fournit la liste des opérateurs sur les bits et leur syntaxe :

| Opération             | Opérateur     | Syntaxe                   | Retourne                |
| --------------------- | ------------- | ------------------------- | ----------------------- |
| ET                    | &             | long & E. E. long         | E. long                 |
| OU (inclusif)         | &#124;        | long &#124; E. long       | E. long                 |
| OU (exclusif)         | &#094; &#124; | Long &#094; &#124; Long   | E. long                 |
| Décaler bits à gauche | <<            | E. Long << E. Long        | long (voir note n°1)    |
| Décaler bits à droite | >>            | E. Long >> E. Long        | long (voir note n°1)    |
| Mettre bit à 1        | ?+            | long ?+ E. E. long        | long (voir note n°2)    |
| Mettre bit à 0        | ?-            | long ??                   | long (voir note n°2)    |
| Tester bit            | ??            | long \^&#124; E. E. long | Booléen (voir note n°2) |

#### Notes

1. Dans les opérations utilisant `Décaler bits à gauche` et `Décaler bits à droite`, le second opérande indique le nombre de décalages de bits du premier opérande à effectuer dans la valeur retournée. Par conséquent, ce second opérande doit être compris entre 0 et 31. Notez qu'un décalage de 0 retourne une valeur inchangée et qu'un décalage de plus de 31 bits retourne 0x00000000 car tous les bits sont perdus. Si vous passez une autre valeur en tant que second opérande, le résultat sera non significatif.
2. Dans les opérations utilisant `Mettre bit à 1`, `Mettre bit à 0` et `Tester bit`, le second opérande indique le numéro du bit sur lequel agir. Par conséquent, ce second opérande doit être compris entre 0 et 31, sinon le résultat de l'expression sera non significatif.

Le tableau suivant dresse la liste des opérateurs sur les bits et de leurs effets :

| Opération             | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ET                    | Chaque bit résultant est le ET logique des bits dans les deux opérandes. Voici la table du ET logique :<li>1 & 1 --> 1</li><li>0 & 1 --> 0</li><li>1 & 0 --> 0</li><li>0 & 0 --> 0</li>En d'autres termes, le bit résultant est 1 si les deux bits d'opérande sont 1; sinon, le bit résultant est 0.                                                                      |
| OU (inclusif)         | Chaque bit résultant est le OU logique des bits dans les deux opérandes. Voici la table logique OU :<li>1 &#124; 1 --> 1</li><li>0 &#124; 1 --> 1</li><li>1 &#124; 0 --> 1</li><li>0 &#124; 0 --> 0</li>En d'autres termes, le bit résultant est 1 si au moins l'un des deux bits d'opérande est 1; sinon, le bit résultant est 0.                                                            |
| OU (exclusif)         | Chaque bit résultant est le XOR logique des bits dans les deux opérandes. Voici la table logique XOR :<li>1 &#094; &#124; 1 --> 0</li><li>0 &#094; &#124; 1 --> 1</li><li>1 &#094; &#124; 0 --> 1</li><li>0 &#094; &#124; 0 --> 0</li>En d'autres termes, le bit résultant est 1 si seul l'un des deux bits d'opérande est 1; sinon, le bit résultant est 0.                                                            |
| Décaler bits à gauche | La valeur résultante est définie sur la première valeur d'opérande, puis les bits résultants sont décalés vers la gauche du nombre de positions indiqué par le deuxième opérande. Les bits auparavant situés à gauche sont perdus et les nouveaux bits situés à droite ont la valeur 0. Les bits auparavant situés à gauche sont perdus et les nouveaux bits situés à droite ont la valeur 0. |
| Décaler bits à droite | La valeur résultante est définie sur la première valeur d'opérande, puis les bits résultants sont décalés vers la droite du nombre de positions indiqué par le deuxième opérande. Les bits à droite sont perdus et les nouveaux bits à gauche sont à 0.**Note :** Prendre en compte uniquement des valeurs positives, déplacer à droite de N bits est la même chose que diviser par 2^N.      |
| Mettre bit à 1        | La valeur retournée est la valeur du premier opérande dans lequel le bit dont le numéro est spécifié par le second opérande est positionné à 0. Les autres bits demeurent inchangés.                                                                                                                                                                                                          |
| Mettre bit à 0        | La valeur retournée est la valeur du premier opérande dans lequel le bit dont le numéro est spécifié par le second opérande est positionné à 0. Les autres bits demeurent inchangés.                                                                                                                                                                                                          |
| Tester bit            | Retourne Vrai si, dans le premier opérande, le bit dont le numéro est indiqué par le second opérande vaut 1. Retourne Faux si, dans le premier opérande, le bit dont le numéro est indiqué par le second opérande vaut 0.                                                                                                                                                                     |

### Exemples

| Opération             | Exemple                             | Résultat   |
| --------------------- | ----------------------------------- | ---------- |
| ET                    | 0x0000FFFF & 0xFF00FF00             | 0x0000FF00 |
| OU (inclusif)         | 0x0000FFFF &#124; 0xFF00FF00        | 0xFF00FFFF |
| OU (exclusif)         | 0x0000FFFF &#094; &#124; 0xFF00FF00 | 0xFF0000FF |
| Décaler bits à gauche | 0x0000FFFF << 8                     | 0x00FFFF00 |
| Décaler bits à droite | 0x0000FFFF >> 8                     | 0x000000FF |
| Mettre bit à 1        | 0x00000000 ?+ 16                    | 0x00010000 |
| Mettre bit à 0        | 0x00010000 ?- 16                    | 0x00000000 |
| Tester bit            | 0x00010000 ?? 16                    | True       |
