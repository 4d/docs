---
id: string
title: String
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expression* {; *format* {; *addTime*}} ) : Text<br/>**String** ( *expression* ; *base* ) : Text<!-- END REF-->

<!--REF #_command_.String.Params-->

| Paramètres | Type          |                             | Description                                                                                                                                  |
| ---------- | ------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| expression | Expression    | &#8594; | Expression à convertir en chaîne (peut être de type Réel, Integer, Date, Heure, Alpha, Texte, Booléen, Undefined ou Null) |
| format     | Integer, Text | &#8594; | Format d'affichage                                                                                                                           |
| addTime    | Time          | &#8594; | Heure à combiner si *expression* est une date                                                                                                |
| base       | Integer       | &#8594; | Valeur comprise entre 2 et 36 qui représente la base si *expression* est un nombre                                                           |
| Résultat   | Text          | &#8592; | expression convertie en chaîne alphanumérique                                                                                                |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                       |
| ------- | ----------------------------------- |
| 21      | Prise en charge du paramètre *base* |

</details>

## Description

<!--REF #_command_.String.Summary-->La commande **String** renvoie sous forme de chaîne alphanumérique l'expression numérique, date, heure, chaîne ou booléenne que vous avez passée dans le paramètre *expression*.<!-- END REF-->

If you do not pass any other parameter, the string is returned with the appropriate default format. Si vous passez le paramètre *format*, vous pouvez définir suivant vos besoins le formatage de la chaîne retournée.

Le paramètre optionnel *addTime* permet d'ajouter une heure à une date dans un format combiné. Il est utilisable uniquement lorsque le paramètre *expression* est une date (voir ci-dessous).

Le paramètre optionnel *base* ne peut être utilisé qu'avec une *expression* numérique, il renvoie le nombre dans la base spécifiée (voir ci-dessous).

### Expressions numériques

Lorsque vous utilisez la commande **String** avec une *expression* numérique (Real, Integer, Long Integer), deux syntaxes sont disponibles :

- **String(number{;format})**
- **String(number;base)**

:::note

La fonction **String** n'est pas compatible avec les champs de type "Integer 64 bits" en mode compilé.

:::

#### String(number{;format})

Si vous ne passez pas le paramètre optionnel *format*, la chaîne est retournée avec le format numérique par défaut.

Le format est spécifié de la même manière que pour un [nombre saisi dans un formulaire](../FormObjects/properties_Display.md#number-format). Vous pouvez également passer le nom d'un style personnalisé dans *format*. Le nom du style personnalisé doit être précédé du caractère `|`. Voici quelques exemples :

| **Exemple**                                                                         | **Résultat**                      | **Commentaires**                                      |
| ----------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------- |
| String(2^15)                                                     | "32768"                           | Format défaut                                         |
| String(2^15;"###,##0 Inhabitants")                               | "32,768 Inhabitants"              |                                                       |
| String(1/3;"##0.00000")                          | "0.33333"         |                                                       |
| String(1/3)                                                      | "0.3333333333333" | Format défaut(\*)                  |
| String(Arctan(1)\*4)                          | "3.14159265359"   | Format défaut(\*)                  |
| String(Arctan(1)\*4;"##0.00") | "3.14"            |                                                       |
| String(-1;"&x")                              | "0xFFFFFFFF"                      |                                                       |
| String(-1;"&$")                              | "$FFFFFFFF"                       |                                                       |
| String(0 ?+ 7;"&x")                          | "0x0080"                          |                                                       |
| String(0 ?+ 7;"&$")                          | "$80"                             |                                                       |
| String(0 ?+ 14;"&x")                         | "0x4000"                          |                                                       |
| String(0 ?+ 14;"&$")                         | "$4000"                           |                                                       |
| String(50.3;"&xml")          | "50.3"            | Toujours "." comme séparateur décimal |
| String(Num(1=1);"True;;False")                | "True"                            |                                                       |
| String(Num(1=2);"True;;False")                | "False"                           |                                                       |
| String(Log(-1))                               | ""                                | "Not a number"                                        |
| String(1/0)                                                      | "INF"                             | Nombre infini positif                                 |
| String(-1/0)                                                     | "-INF"                            | Nombre infini négatif                                 |

(\*) L'algorithme de conversion des valeurs réelles en texte est basé sur 13 chiffres significatifs, voir [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md).

#### String(number;base)

L'utilisation d'un paramètre *base* (Integer) déclenche un mode spécifique dans lequel vous passez la base (radix) du nombre à retourner. Cette syntaxe permet notamment de convertir des nombres en chaînes hexadécimales.

Dans le paramètre *base*, passez la base dans laquelle est exprimée le nombre dans *expression*. Vous pouvez passer n'importe quelle valeur entière comprise entre 2 et 36.

Si vous passez 0 dans *base*, la commande détermine la base en fonction de la valeur de *expression*. Si *expression* commence par "0x", la base 16 est utilisée. Sinon, la base 10 est utilisée.

:::info

- Cette syntaxe suit strictement la [spécification EcmaScript de `toString` concernant la gestion du radix](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring).
- L'utilisation de cette syntaxe avec *base*=10 ne donnera pas exactement les mêmes résultats que l'utilisation de la syntaxe sans le paramètre *base*. For example, if the specified number value is not a number, the "NaN" string is returned.

:::

| **Exemple**                                               | **Résultat** | **Commentaires**                                  |
| --------------------------------------------------------- | ------------ | ------------------------------------------------- |
| String(10;2)                           | "1010"       | chaîne binaire                                    |
| String(-10;2)                          | "-1010"      | chaîne binaire (négative)      |
| String(254;16)                         | "fe"         | chaîne hexadécimale                               |
| String(-16523461; 16)                  | "-fc20c5"    | chaîne hexadécimale (négative) |
| String(Log(-1); 10) | "NaN"        | "Not a number"                                    |
| String(1/0; 10)                        | "NaN"        | "Not a number"                                    |
| String(-1/0; 10)                       | "NaN"        | "Not a number"                                    |

:::note

Si la valeur du nombre spécifié est négative, le signe est conservé. C'est le cas même si la base est 2 ; la chaîne renvoyée est > N, la représentation binaire positive de la valeur du nombre précédée du signe -.

:::

### Expressions de type Date

Si *expression* est de type Date et si vous omettez le paramètre *format*, la chaîne est renvoyée en utilisant le format par défaut spécifié dans le système.

Sinon, dans le paramètre *format*, vous pouvez passer :

- soit un format prédéfini disponible via les constantes suivantes du thème *Formats d'affichage des dates* (valeur longint) :

| Constante                   | Valeur | Commentaire                                                                                                                                     |
| --------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null date          | 100    | À ajouter à la constante format. Indique que dans le cas d'une valeur nulle, 4D doit retourner une chaîne vide au lieu de zéros |
| Date RFC 1123               | 10     | Fri, 10 Sep 2010 13:07:20 GMT (voir Notes)                                                   |
| Internal date abbreviated   | 6      | 29 déc 2006                                                                                                                                     |
| Internal date long          | 5      | 29 décembre 2006                                                                                                                                |
| Internal date short         | 7      | 29/12/2006                                                                                                                                      |
| Internal date short special | 4      | 06/12/06 (mais 06/12/1896 ou 06/12/2096)                                                                                     |
| ISO Date                    | 8      | 2006-12-29T00:00:00 (voir Notes)                                                             |
| ISO Date GMT                | 9      | 2010-09-13T16:11:53Z (voir Notes)                                                            |
| System date abbreviated     | 2      | mer. 25 déc. 2006                                                                                               |
| System date long            | 3      | mercredi 6 décembre 2006                                                                                                                        |
| System date short           | 1      | 29/12/2006                                                                                                                                      |

Exemples :

```4d
 $vsResult:=String(!2023-11-27!) //"27//11/2023"  
 $vsResult:=String(!2023-11-27!;Internal date long) // "November 27, 2023"  
 $vsResult:=String(!2023-11-27!;ISO Date GMT) // "2023-11-26T23:00:00Z" in French timezone  
```

- soit un [format personnalisé construit à partir d'un modèle](../Project/date-time-formats.md) (valeur chaîne)\
  Exemples :

```4d
 $vsResult:=String(!2023-11-27!;"EEEE d MMMM y GGGG") //"lundi 27 novembre 2023 après Jésus-Christ"  
 $vsResult:=String(!2023-11-27!;"E dd/MM/yyyy zzzz") //"lun. 27/11/2023 heure normale d’Europe centrale" timezone FR  
```

:::note

Les formats peuvent varier en fonction des paramètres du système.

:::

#### Paramètre *addTime*

Lors du traitement des expressions de type Date, vous pouvez également passer une heure dans le paramètre *addTime*. Ce paramètre vous permet de combiner une date et une heure afin de générer des horodatages conformes aux normes en vigueur (constantes ISO Date GMT et Date RFC 1123). Ces formats sont particulièrement utiles dans le contexte des traitements xml et Web. Le paramètre *addTime* ne peut être utilisé que lorsque le paramètre *expression* est une date.

Ce paramètre peut être utilisé avec des formats de date prédéfinis ou basés sur des motifs. Exemples :

```4d
 $dateTime:=String(!2010-09-09!;ISO date GMT;Current time) //"2010-09-09T15:58:44Z"
 $dateTime2:=String(!2023-11-27!;"E dd/MM/yyyy 'at' hh:mm aa O";?11:15:00?) //"lun. 27/11/2023 at 11:15 AM UTC+1"
```

#### Notes sur les formats combinés date/heure

- Le format ISO Date GMT correspond à la norme ISO8601, contenant une date et une heure exprimées par rapport au fuseau horaire (GMT).

```4d
 $mydate:=String(Current date;ISO Date GMT;Current time) // retourne par exemple 2010-09-13T16:11:53Z  
```

A noter le caractère "Z" final qui indique le format GMT.\
Si vous ne passez pas le paramètre *addTime*, la commande renvoie la date à minuit (heure locale) exprimée en heure GMT, ce qui peut entraîner un décalage en fonction du fuseau horaire local :

```4d
 $mydate:=String(!13/09/2010!;ISO Date GMT) // returns 2010-09-12T22:00:00Z en France  
```

- Le format ISO Date est semblable au format ISO Date GMT, à la différence près qu'il exprime la date et l'heure sans tenir compte de la zone de fuseau horaire. A noter que ce format n'étant pas conforme à la norme ISO8601, son utilisation est à réserver à des usages très spécifiques.

```4d
 $mydate:=String(!13/09/2010!;ISO Date) // retourne 2010-09-13T00:00:00 quel que soit le fuseau horaire  
 $mydate:=String(Current date;ISO Date;Current time) // retourne 2010-09-13T18:11:53  
```

- Le format Date RFC 1123 formate une combinaison date/heure selon la norme définie par les RFC 822 et 1123\. Ce format est nécessaire par exemple pour fixer la date d'expiration des cookies dans un en-tête HTTP.

```4d
 $mydate:=String(Current date;Date RFC 1123;Current time) // retourne par exemple Fri, 10 Sep 2010 13:07:20 GMT  
```

L'heure est exprimée en tenant compte de la zone de fuseau horaire (heure GMT). Si vous passez uniquement une date, la commande retourne la date à minuit heure locale exprimée en heure GMT, ce qui peut entraîner un décalage :

```4d
 $mydate:=String(!2010-09-09!;Date RFC 1123) // retourne Wed, 08 Sep 2010 22:00:00 GMT  
```

### Expressions de type Heure

Si *expression* est de type Heure, la chaîne est retournée dans le format par défaut hh:mm:ss.

Sinon, dans le paramètre *format*, vous pouvez passer :

- soit un format prédéfini disponible via les constantes suivantes du thème *Formats d'affichage des heures* (valeur longint) :

| Constante                    | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null time           | 100    | À ajouter à la constante format. Indique que dans le cas d'une valeur nulle, 4D doit retourner une chaîne vide au lieu de zéros                                                                                                                                                                                                 |
| HH MM                        | 2      | 01:02                                                                                                                                                                                                                                                                                                                           |
| HH MM AM PM                  | 5      | 1:02 du matin                                                                                                                                                                                                                                                                                                                   |
| HH MM SS                     | 1      | 01:02:03                                                                                                                                                                                                                                                                                                        |
| Hour min                     | 4      | 1 heure 2 minutes                                                                                                                                                                                                                                                                                                                               |
| Hour min sec                 | 3      | 1 heure 2 minutes 3 secondes                                                                                                                                                                                                                                                                                                                    |
| ISO time                     | 8      | 0000-00-00T01:02:03\. Correspond à la norme ISO8601, contenant en principe une date et une heure.  Comme ce format ne prend pas en charge les dates/heures combinées, la partie date est remplie avec des 0. Ce format exprime l'heure locale. |
| Min sec                      | 7      | 62 minutes 3 secondes                                                                                                                                                                                                                                                                                                                           |
| ms s                         | 6      | 62:03                                                                                                                                                                                                                                                                                                                           |
| System time long             | 11     | 1:02:03 AM HNEC (Mac uniquement)                                                                                                                                                                                                                                                             |
| System time long abbreviated | 10     | 1•02•03 AM (Mac uniquement)                                                                                                                                                                                                                                                                                                  |
| System time short            | 9      | 01:02:03                                                                                                                                                                                                                                                                                                        |

Exemples :

```4d
 $vsResult:=String(?17:30:45?;HH MM AM PM) //"5:30 PM"  
 $vsResult:=String(?17:30:45?;Hour Min Sec) //"17 hours 30 minutes 45 seconds"  
```

- soit un [format personnalisé construit à partir d'un modèle](../Project/date-time-formats.md) (valeur chaîne)\
  Exemples :

```4d
 $vsResult:=String(?17:30:45?;"hh:mm aa O") //"05:30 PM GMT+1"  
 $vsResult:=String(?17:30:45?;"'It is' K a") //"It is 5 PM"  
```

### Expressions de type Chaîne

Si *expression* est de type Alpha ou Texte, la commande renvoie la même valeur que celle passée en paramètre. Ce fonctionnement est utile notamment dans le cadre d’une programmation générique utilisant des pointeurs.\
Dans ce cas, le paramètre *format*, s'il est passé, est ignoré.

### Expressions de type Booléen

Si *expression* est de type Booléen, la commande retourne la chaîne “Vrai” ou “Faux” dans la langue de l’application (“True” ou “False” dans une version anglaise de 4D).\
Dans ce cas, le paramètre *format*, s'il est passé, est ignoré.

### Expressions indéfinies

Si *expression* est évaluée à **Undefined**, la commande renvoie une chaîne vide. Ce fonctionnement est utile lorsque le résultat d'une expression (par exemple, un attribut d'objet) doit être une chaîne de caractères, même si elle peut être indéfinie.

### Expressions nulles

Si *expression* est évaluée à **Null**, la commande renvoie la chaîne "null". Ce fonctionnement est utile lorsque le résultat d'une expression (par exemple, un attribut d'objet) doit être une chaîne de caractères, même si elle peut être nulle.

## Voir également

[Bool](../commands-legacy/bool.md)\
[Date](../commands-legacy/date.md)\
[Num](num.md)\
[Time string](../commands-legacy/time-string.md)\
[Timestamp](../commands-legacy/timestamp.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 10                          |
| Thread safe        | &check; |


