---
id: num
title: Num
slug: /commands/num
displayed_sidebar: docs
---

<!--REF #_command_.Num.Syntax-->**Num** ( *expression* {; *separator*} ) : Real<br/>**Num** ( *expression* ; *base* ) : Real<!-- END REF-->

<!--REF #_command_.Num.Params-->

| Paramètres | Type                   |                             | Description                                                                              |
| ---------- | ---------------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| expression | Text, Boolean, Integer | &#8594; | Chaîne à convertir en numérique ou Booléen à convertir en 0 ou 1 ou Expression numérique |
| separator  | Text                   | &#8594; | Séparateur décimal                                                                       |
| base       | Integer                | &#8594; | Valeur comprise entre 2 et 36 qui représente le radix                                    |
| Résultat   | Real                   | &#8592; | Forme numérique du paramètre expression                                                  |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                       |
| ------- | ----------------------------------- |
| 21      | Prise en charge du paramètre *base* |

</details>

## Description

<!--REF #_command_.Num.Summary-->La commande **Num** renvoie la forme numérique de la chaîne, de l'expression booléenne ou de l'expression numérique que vous avez passée dans le paramètre *expression*.<!-- END REF-->

Lorsque *expression* est de type chaîne de caractères, vous pouvez utiliser un paramètre *separator* ou un paramètre *base* (voir ci-dessous).

### Expressions de type Chaîne

Lorsque vous utilisez la commande **Num** avec une *expression* chaîne, deux syntaxes sont disponibles :

- **Num(string{;separator})**
- **Num(string;base)**

#### Num(string{;separator})

Si *expression* ne contient que des caractères alphabétiques, **Num** retourne zéro. Si *expression* contient des caractères alphabétiques et des caractères numériques, la commande ignore les caractères alphabétiques. Ainsi, **Num** transformera la chaîne "a1b2c3" en nombre 123.

Il existe trois caractères réservés que **Num** traite de manière particulière : le séparateur décimal tel que défini dans le système (si le paramètre *separator* n'est pas passé), le tiret *\-*", et le "*e*" *ou* "E". Ces caractères seront interprétés en tant que caractères de formatage des nombres.

- Le séparateur décimal est interprété en tant que tel et doit être inclus dans la chaîne de caractères numériques. Par défaut, la commande utilise le séparateur décimal défini dans le système d’exploitation. Vous pouvez modifier ce caractère à l'aide du paramètre *separator* (voir ci-dessous).
- Le tiret définit un nombre ou un exposant négatif (signe moins). Le tiret doit être placé devant tout caractère numérique négatif ou derrière le "e" pour un exposant. Hormis le cas du caractère "e", si le tiret est inclus dans une chaîne numérique, la partie de la chaîne se trouvant après le tiret est ignorée. Par exemple, `Num("123-456")` renvoie 123, mais `Num("-9")` renvoie -9.
- Le e ou E désigne tout caractère numérique se trouvant à sa droite comme étant la puissance d'un exposant. Le "e" doit être inclus dans une chaîne numérique. Ainsi, `Num("123e-2")` renvoie 1.23.  
  A noter que dans le cas où la chaîne comporte plus d'un caractère "e", la conversion pourra donner des résultats différents sous macOS et sous Windows.

#### Paramètre *séparator*

Le paramètre *separator* désigne un séparateur décimal personnalisé pour l'évaluation de l'*expression*. Lorsque la chaîne à évaluer est exprimée avec un séparateur décimal différent du séparateur système, la commande retourne un résultat incorrect. Le paramètre *séparator* permet dans ce cas d’obtenir une évaluation correcte. Lorsque ce paramètre est passé, la commande ne tient pas compte du séparateur décimal système. Vous pouvez passer un ou plusieurs caractères.

:::note

La commande [`GET SYSTEM FORMAT`](../commands-legacy/get-system-format.md) peut être utilisée pour connaître le séparateur décimal courant ainsi que plusieurs autres paramètres du système régional.

:::

#### Num(string;base)

L'utilisation d'un paramètre *base* (integer) active un mode spécifique dans lequel vous spécifiez le radix (base) du nombre exprimé sous forme de chaîne dans *expression*. Cette syntaxe permet notamment de convertir des chaînes hexadécimales en nombres.

Dans le paramètre *base*, passez la base dans laquelle est exprimée le nombre dans *expression*. Vous pouvez passer n'importe quelle valeur entière comprise entre 2 et 36.

Si vous passez 0 dans *base*, la commande détermine la base en fonction de la valeur de *expression*. Si *expression* commence par "0x", la base 16 est utilisée. Sinon, la base 10 est utilisée.

Si l'évaluation de *expression* donne un nombre décimal, seule la partie entière est convertie.

:::info

- Cette syntaxe suit strictement la [spécification EcmaScript de `parseInt`](https://tc39.es/ecma262/multipage/global-object.html#sec-parseint-string-radix).
- L'utilisation de cette syntaxe avec *base*=10 ne donnera pas exactement les mêmes résultats que l'utilisation de la syntaxe sans le paramètre *base*. Par exemple, conformément à la spécification EcmaScript, tout caractère n'appartenant pas à la base est considéré comme un séparateur (voir exemples).

:::

### Expressions de type Booléen

Si vous passez une expression booléenne, **Num** renvoie 1 si l'expression est vraie ; sinon, la commande renvoie *0* (zéro).

### Expressions numériques

Si vous passez une expression numérique dans le paramètre *expression*, **Num** renvoie telle quelle la valeur passée dans le paramètre *expression*. Ce fonctionnement est utile notamment dans le cadre d’une programmation générique utilisant des pointeurs.

### Expressions indéfinies

Si l'évaluation de *expression* donne une valeur indéfinie, la commande retourne 0. Ce fonctionnement est utile lorsque le résultat d'une expression (par exemple, un attribut d'objet) doit être un nombre alors qu'il peut être nul.

## Exemple 1

L'exemple suivant illustre le fonctionnement de **Num** lorsqu'une seule chaîne de caractères lui est passée en argument :

```4d
$result:=Num("ABCD") // 0
$result:=Num("A1B2C3") // 123
$result:=Num("123") // 123
$result:=Num("123.4") // 123.4
$result:=Num("–123") // –123
$result:=Num("–123e2") // –12300
```

## Exemple 2

Ici, *\[Client\]Debt* est comparé à *1000$*. La commande Num appliquée à ces comparaisons renvoie 1 ou 0. La multiplication d'une chaîne par 0 ou 1 retourne soit la chaîne, soit une chaîne vide.  En définitive, le champ *\[Client\]Risk* reçoit la valeur “Good” ou “Bad” :

```4d
  // Si le client a des dettes inférieures à 1000, le risque est acceptable.
  // Si le client a des dettes supérieures à 1000, le risque est inacceptable.
 [Client]Risk:=("Good"*Num([Client]Debt<1000))+("Bad"*Num([Client]Debt>=1000))
```

## Exemple 3

Cet exemple compare les résultats obtenus en fonction du séparateur “courant” :

```4d
 $thestring:="33,333.33"
 $thenum:=Num($thestring)
  // par défaut, $thestring vaut 33,33333 sur un système français
 $thenum:=Num($thestring;".")
  // $thenum sera correctement évalué quel que soit le système
  // par exemple, 33 333,33 sur un système français
```

## Exemple 4

Cet exemple illustre l'utilisation de la syntaxe *base* :

```4d
$result:=Num("ff";16) // 255 (hexadecimal minuscule)
$result:=Num("0xFF") // 0
$result:=Num("0xFF";16) // 255
$result:=Num("2";2) // 0
$result:=Num("10.3";16) // 16
$result:=Num("123.20") // 12320 (syntaxe standard base 10)
$result:=Num("123.20"; 10) // 123 (spécifier base 10 explicitement)

```

## Voir également

[Bool](../commands-legacy/bool.md)  
[GET SYSTEM FORMAT](../commands-legacy/get-system-format.md)  
[String](./string.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 11                          |
| Thread safe        | &check; |


