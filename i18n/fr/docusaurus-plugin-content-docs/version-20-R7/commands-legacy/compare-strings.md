---
id: compare-strings
title: Compare strings
slug: /commands/compare-strings
displayed_sidebar: docs
---

<!--REF #_command_.Compare strings.Syntax-->**Compare strings** ( *aString* ; *bString* {; *options*} ) : Integer<!-- END REF-->
<!--REF #_command_.Compare strings.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| aString | Text | &#8594;  | Chaîne à comparer |
| bString | Text | &#8594;  | Chaîne à comparer |
| options | Integer | &#8594;  | Règle(s) de comparaison |
| Résultat | Integer | &#8592; | Résultat de la comparaison de chaînes |

<!-- END REF-->

#### Description 

<!--REF #_command_.Compare strings.Summary-->La commande **Compare strings** retourne une valeur négative, zéro, ou une valeur positive, en fonction du paramètre *aString* selon qu'il soit évalué comme étant inférieur, égal ou supérieur au paramètre *bString*.<!-- END REF--> 

Dans le paramètre *aString*, passez une valeur texte.

Dans le paramètre *aString*, passez une valeur texte à comparer avec *aString*.

Par défaut, **Compare strings** fonctionne comme si l'opérateur "<" (inférieur à) était utilisé. (Voir *Opérateurs de chaînes*). Cela peut être modifié à l'aide du paramètre *options*. Vous pouvez passer une ou plusieurs des constantes du thème *Chaînes* : 

| Constante                | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sk case insensitive      | 2      | Les chaînes sont comparées en fonction de la langue des données, indépendamment des différences de capitalisation. A noter que les signes diacritiques sont pris en compte. Par exemple, "A" est considéré comme identique à "a", mais "a" n'est pas considéré comme identique à "à". Par défaut, la comparaison de chaînes 4D n'est pas sensible à la casse. Peut être combinée avec : sk char codes OU sk diacritic insensitive sk whole word (commande [Position](position.md) uniquement) Cette constante implique l'utilisation des constantes suivantes (qui peuvent également être combinées pour une meilleure lisibilité) : sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| sk char codes            | 1      | Les chaînes sont comparées en fonction des codes de caractères. Les paramètres de langue des données ne sont pas pris en compte lors de la comparaison. Peut être combinée avec : sk case insensitive Uniquement pour les plages "a-z" ou "A-Z". (ex : Alpha = alpha, mais Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| sk diacritic insensitive | 4      | Les chaînes sont comparées en fonction de la langue des données, mais le signe diacritique (par exemple, un accent ou un symbole) des lettres est ignoré. Par exemple, "a" est considéré comme identique à "à". Peut être combinée avec : sk case insensitive sk whole word (commande [Position](position.md) uniquement) Cette constante implique l'utilisation des constantes suivantes (qui peuvent également être combinées pour une meilleure lisibilité) : sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| sk kana insensitive      | 8      | S'applique à la langue japonaise. Contrôle la distinction entre les syllabes Hiragana et Katakana. D'un point de vue sémantique, la différence entre Hiragana et Katakana est généralement significative, mais pour obtenir un maximum de résultats, le mode par défaut dans 4D est d'ignorer la différence (insensible au kana). Par exemple, "あ" est considéré comme étant identique à "ア". L'option sk strict effectue une comparaison sensible au kana. sk kana insensible peut être utilisé pour assouplir partiellement la règle et la rendre insensible au kana. **Notes :** La langue des données doit être définie sur le japonais pour utiliser cette option. Pour toutes les autres langues, l'option est ignorée et [Compare strings](compare-strings.md) fonctionnera comme si sk strict était spécifié. En d'autres termes, définir cette option dans un contexte non japonais rendrait la comparaison sensible au kana (l'effet inverse). Peut être combinée avec : sk case insensitive sk diacritic insensitive Cette constante implique l'utilisation des constantes suivantes (qui peuvent également être combinées pour une meilleure lisibilité) : sk width insensitive sk strict                                                                                                                                                                                                                                                                                         |
| sk strict                | 0      | Les chaînes sont comparées pour les correspondances exactes en fonction de la langue actuelle des données. Dans la plupart des cas, les majuscules et les signes diacritiques des lettres sont pris en compte lors de la comparaison. Peut être combinée avec : sk case insensitive sk diacritic insensitive sk kana insensitive Cette constante implique l'utilisation de la constante suivante (qui peut également être combinée, pour une meilleure lisibilité) :*<br/>* sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sk width insensitive     | 16     | S'applique à la langue japonaise. Correspond à la norme Unicode « largeur est-asiatique », telle que définie dans[ l'Annexe 11 de la norme Unicode](http://www.unicode.org/reports/tr11/). D'un point de vue sémantique, la différence entre un caractère « étroit » et « large » ou un caractère « pleine largeur » et « demi-largeur » est généralement insignifiante, ce qui est le mode par défaut dans 4D. Par exemple, "ｱ" est considéré comme "ア". L'option sk strict effectue une comparaison sensible à la largeur. L'option sk largeur insensible peut être utilisée afin d'assouplir partiellement la règle et d'être insensible à la largeur (voir exemple 2). **Notes** : La langue des données doit être définie sur le japonais pour utiliser cette option. Pour toutes les autres langues, l'option est ignorée et [Compare strings](compare-strings.md) fonctionnera comme si sk strict était spécifié. En d'autres termes, définir cette option dans un contexte non japonais rendrait la comparaison sensible à la largeur (l'effet inverse). Cette option est ignorée par la fonction [Position](position.md). Le classement Unicode insensible à la largeur est asymétrique et impossible à localiser par position ou longueur. Peut être combinée avec : sk case insensitive sk diacritic insensitive sk kana insensitive Cette constante implique l'utilisation de la constante suivante (qui peut également être combinée, pour une meilleure lisibilité) : sk strict |

Pour plus d'informations sur la définition du langage de données, veuillez consulter la section dans le *Manuel de Développement.*

**Attention :** Vous ne pouvez pas utiliser le caractère @ avec **Compare strings.** Par exemple, si vous passez *abc@"* dans *aString* ou *bString*, la commande évaluera la chaîne "abc@" et non une chaîne "abc" accompagnée de tout autre caractère.

**Valeur retournée**

La commande retourne les valeurs *entier long* suivantes :

| **Valeur** | **Description**                     |
| ---------- | ----------------------------------- |
| \-1        | *aString* est inférieur à *bString* |
| 0          | *aString* est égal à *bString*      |
| 1          | *aString* est supérieur à *bString* |

#### Exemple 1 

Vous souhaitez comparer les chaînes suivantes :

```4d
 $string1:="alpha Bravo charlie Delta Echo Fox-Trot"
 $string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"
 
  //comparer les chaînes à l'aide du code caractère
 $result:=Compare strings($string1;$string2;sk char codes)
  // $result = 1
 
  //comparer les chaînes à l'aide du code caractère mais en ignorant les majuscules
 $result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)
  // $result = 0
```

#### Exemple 2 

Les exemples suivants illustrent l'incidence des options dans le **contexte de la langue de données japonaise** :

```4d
  //par défaut, kana insensible à la casse
 $result:=Compare strings("イロハ";"いろは") // identique
 $result:=Compare strings("イロハ";"いろは";sk strict) // non identique
 $result:=Compare strings("イロハ";"いろは";sk kana insensitive) // identique
```

```4d
  //par défaut, insensible à la casse
 $result:=Compare strings("さつき";"さっき") // identique
 $result:=Compare strings("さつき";"さっき";sk strict) // non identique
 $result:=Compare strings("さつき";"さっき";sk case insensitive) // identique
```

```4d
  //par défaut, sensible aux signes diacritiques lorsque la langue des données est définie sur le japonais (différente de toutes les autres langues)
 $result:=Compare strings("ete";"été") // identique dans une langue de données autre que le japonais
 $result:=Compare strings("ete";"été") // non identique en langue de données japonaise
 $result:=Compare strings("うがい";"うかい") // non identique
 $result:=Compare strings("うがい";"うかい";sk strict) // non identique
 $result:=Compare strings("うがい";"うかい";sk diacritic insensitive) // identique
```

**Note :** Le paramètre "**Ordre de tri approprié pour la recherche"** (voir ) a une incidence sur la commande **Compare strings**. En particulier, la "Marque sonore prolongée Katakana-Hiragana" ou "長音記号" sera interprétée différemment. Le paramètre a également une incidence sur les « marques d'itération japonaises » telles que « ゝ » ou « ゞ ». Par exemple :

```4d
 $result:=Compare strings("いすず";"いすゞ") // identique si le paramètre est désactivé
 $result:=Compare strings("いすず";"いすゞ") // non identique si le paramètre est activé
 $result:=Compare strings("ラーメン";"ﾗｰﾒﾝ") //  identique si le paramètre est activé
 $result:=Compare strings("ラーメン"; "ﾗｰﾒﾝ") // non identique si le paramètre est désactivé
```

#### Voir aussi 

[Position](position.md)  