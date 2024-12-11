---
id: position
title: Position
slug: /commands/position
displayed_sidebar: docs
---

<!--REF #_command_.Position.Syntax-->**Position** ( àChercher ; *laChaîne* {; *début* {; *longTrouvée*}}{; *} ) -> Résultat <br/>
**Position** ( àChercher ; *laChaîne* ; *début* ; *longTrouvée* ; *options* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Position.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| àChercher | Text | &#8594;  | Chaîne à rechercher |
| laText | Text | &#8594;  | Chaîne dans laquelle effectuer la recherche |
| début | Integer | &#8594;  | Position dans laChaîne où débuter la recherche |
| longTrouvée | Integer | &#8592; | Longueur de la chaîne trouvée |
| * | Opérateur | &#8594;  | Si passé : évaluation basée sur les codes de caractères |
| Résultat | Integer | &#8592; | Position de la première occurrence de àChercher |
| Position ( àChercher ; laChaîne ; début ; longTrouvée ; options ) -> Résultat |
| Paramètre | Type | Description |
| àChercher | Text | &#8594;  | Chaîne à rechercher |
| laText | Text | &#8594;  | Chaîne dans laquelle effectuer la recherche |
| début | Integer | &#8594;  | Position dans laChaîne où débuter la recherche |
| longTrouvée | Integer | &#8594;  | Longueur de la chaîne trouvée |
| options | Integer | &#8594;  | Critère(s) de recherche |
| Résultat | Integer | &#8592; | Position de la première occurrence de àChercher |

<!-- END REF-->

#### Description 

<!--REF #_command_.Position.Summary-->**Position** retourne la position de la première occurrence de *àChercher* dans *laChaîne*.<!-- END REF--> 

Si *laChaîne* ne contient pas *àChercher*, la fonction retourne zéro (0).

Si **Position** trouve une occurrence de *àChercher*, la fonction retourne la position du premier caractère de cette occurrence dans *laChaîne*.  
Si vous demandez la position d'une chaîne vide à l'intérieur d'une chaîne vide, **Position** retourne zéro (0).

Par défaut, la recherche débute au premier caractère de *laChaîne*. Le paramètre *début* vous permet de préciser le caractère auquel doit démarrer la recherche dans *laChaîne*.

Le paramètre *longTrouvée* retourne la longueur de la chaîne effectivement trouvée par la recherche. Ce paramètre est nécessaire pour pouvoir gérer correctement les lettres pouvant s'écrire à l'aide d'un ou plusieurs caractères (ex : æ et ae, ß et ss...).   
Si le paramètre \* est passé (cf. ci-dessous), ces lettres ne sont pas considérées comme équivalentes (æ # ae) ; dans ce mode, *longTrouvée* est toujours égal à la longueur de *àChercher* (si une occurrence est trouvée).

Par défaut, la commande effectue des comparaisons globales, tenant compte des particularités linguistiques et des lettres pouvant s'écrire avec un ou plusieurs caractères (par exemple æ = ae). En revanche, elle n'est pas diacritique (a=A, a=à...) et ne tient pas compte des caractères "ignorables". Les caractères ignorables comprennent tous les caractères du subset unicode *C0 Control* (U+0000 à U+001F, ascii character control set) à l'exception des caractères imprimables (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF and U+0013 CR).   
  
Pour modifier ce fonctionnement, vous pouvez passer :

* (***première syntaxe - \* paramètre***) l'astérisque \* en dernier paramètre. Dans ce cas, les comparaisons seront effectuées sur la base des codes de caractères. Vous devez donc passer le paramètre \*:  
   * Si vous souhaitez tenir compte des caractères spéciaux, utilisés par exemple comme délimiteurs (**Caractere**(1), etc.),  
   * Si l'évaluation des caractères doit tenir compte de la casse et des accents (a#A, a#à...).  
   A noter que dans ce mode, l'évaluation ne gère pas les variations d'écriture des mots.

**Note :** Dans certains cas, l'utilisation du paramètre *\** peut accélérer sensiblement l'exécution de la commande. 

* (***deuxième syntaxe - paramètre* *options***) une des constantes ou une combinaison des constantes suivantes du thème *Chaînes* :  
    
| Constante                | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| sk case insensitive      | 2      | Les chaînes sont comparées en fonction de la langue des données, indépendamment des différences de capitalisation. A noter que les signes diacritiques sont pris en compte. Par exemple, "A" est considéré comme identique à "a", mais "a" n'est pas considéré comme identique à "à". Par défaut, la comparaison de chaînes 4D n'est pas sensible à la casse. Peut être combinée avec : sk char codes OU sk diacritic insensitive sk whole word (commande [Position](position.md) uniquement) Cette constante implique l'utilisation des constantes suivantes (qui peuvent également être combinées pour une meilleure lisibilité) : sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| sk char codes            | 1      | Les chaînes sont comparées en fonction des codes de caractères. Les paramètres de langue des données ne sont pas pris en compte lors de la comparaison. Peut être combinée avec : sk case insensitive Uniquement pour les plages "a-z" ou "A-Z". (ex : Alpha = alpha, mais Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| sk diacritic insensitive | 4      | Les chaînes sont comparées en fonction de la langue des données, mais le signe diacritique (par exemple, un accent ou un symbole) des lettres est ignoré. Par exemple, "a" est considéré comme identique à "à". Peut être combinée avec : sk case insensitive sk whole word (commande [Position](position.md) uniquement) Cette constante implique l'utilisation des constantes suivantes (qui peuvent également être combinées pour une meilleure lisibilité) : sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| sk kana insensitive      | 8      | S'applique à la langue japonaise. Contrôle la distinction entre les syllabes Hiragana et Katakana. D'un point de vue sémantique, la différence entre Hiragana et Katakana est généralement significative, mais pour obtenir un maximum de résultats, le mode par défaut dans 4D est d'ignorer la différence (insensible au kana). Par exemple, "あ" est considéré comme étant identique à "ア". L'option sk strict effectue une comparaison sensible au kana. sk kana insensible peut être utilisé pour assouplir partiellement la règle et la rendre insensible au kana. **Notes :** La langue des données doit être définie sur le japonais pour utiliser cette option. Pour toutes les autres langues, l'option est ignorée et [Compare strings](compare-strings.md) fonctionnera comme si sk strict était spécifié. En d'autres termes, définir cette option dans un contexte non japonais rendrait la comparaison sensible au kana (l'effet inverse). Peut être combinée avec : sk case insensitive sk diacritic insensitive Cette constante implique l'utilisation des constantes suivantes (qui peuvent également être combinées pour une meilleure lisibilité) : sk width insensitive sk strict                                                                                                                                                                                                                                                                                         |  
| sk strict                | 0      | Les chaînes sont comparées pour les correspondances exactes en fonction de la langue actuelle des données. Dans la plupart des cas, les majuscules et les signes diacritiques des lettres sont pris en compte lors de la comparaison. Peut être combinée avec : sk case insensitive sk diacritic insensitive sk kana insensitive Cette constante implique l'utilisation de la constante suivante (qui peut également être combinée, pour une meilleure lisibilité) :*<br/>* sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| sk whole word            | 32     | Les chaînes sont comparées en fonction de la langue des données. Seules les chaînes qui sont des mots complets sont prises en compte. Les chaînes correspondantes dans d'autres chaînes ne sont pas prises en compte. Par exemple, "where" n'est pas pris en compte lorsqu'il se trouve dans "somewhere". Peut être combinée avec : sk case insensitive (commande [Position](position.md) uniquement) sk diacritic insensitive (commande [Position](position.md) uniquement)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| sk width insensitive     | 16     | S'applique à la langue japonaise. Correspond à la norme Unicode « largeur est-asiatique », telle que définie dans[ l'Annexe 11 de la norme Unicode](http://www.unicode.org/reports/tr11/). D'un point de vue sémantique, la différence entre un caractère « étroit » et « large » ou un caractère « pleine largeur » et « demi-largeur » est généralement insignifiante, ce qui est le mode par défaut dans 4D. Par exemple, "ｱ" est considéré comme "ア". L'option sk strict effectue une comparaison sensible à la largeur. L'option sk largeur insensible peut être utilisée afin d'assouplir partiellement la règle et d'être insensible à la largeur (voir exemple 2). **Notes** : La langue des données doit être définie sur le japonais pour utiliser cette option. Pour toutes les autres langues, l'option est ignorée et [Compare strings](compare-strings.md) fonctionnera comme si sk strict était spécifié. En d'autres termes, définir cette option dans un contexte non japonais rendrait la comparaison sensible à la largeur (l'effet inverse). Cette option est ignorée par la fonction [Position](position.md). Le classement Unicode insensible à la largeur est asymétrique et impossible à localiser par position ou longueur. Peut être combinée avec : sk case insensitive sk diacritic insensitive sk kana insensitive Cette constante implique l'utilisation de la constante suivante (qui peut également être combinée, pour une meilleure lisibilité) : sk strict |

Pour plus d'informations sur la définition de la langue des données, consultez la section dans le *manuel de Développement*.

**Attention :** Vous ne pouvez pas utiliser le caractère joker (@) avec **Position**. Si, par exemple, vous passez *"abc@"* dans *àChercher*, la fonction recherchera effectivement la chaîne *"abc@"* et non pas "abc suivi de toute valeur".

#### Exemple 1 

Les exemples suivants illustrent l'utilisation de **Position**. Les résultats sont assignés à la variable *vRésultat*. Les commentaires fournissent la valeur de *vRésultat* :

```4d
 vRésultat:=Position("ll";"Billard") // vRésultat prend la valeur 3
 vRésultat:=Position(vText1;vText2) // Position de la première occurrence de vText1 dans vText2
 vRésultat:=Position("day";"Today is the first day";1) // vRésultat prend la valeur 3
 vRésultat:=Position("day";"Today is the first day";4) // vRésultat prend la valeur 20
 vRésultat:=Position("DAY";"Today is the first day";1;*) // vRésultat prend la valeur 0
 vRésultat:=Position("oe";"Nœud";1;$long) // vRésultat =2, $long = 1
```

#### Exemple 2 

Dans l'exemple suivant, le paramètre *longTrouvée* permet de rechercher toutes les occurrences de "fluss" dans un texte, quelle que soit l'orthographe du mot :

```4d
 $départ:=1
 Repeat
    vRésultat:=Position("fluss";$letexte;$départ;$longtrouvée)
    $départ:=$départ+$longtrouvée
 Until(vRésultat=0)
```

#### Exemple 3 

Dans l'exemple suivant, vous souhaitez recherchez toutes les instances d'une chaîne et la remplacer :

```4d
 var $lengthFound : Integer
 
 $string:="Bonjour Joelle et joel!"
 $find:="joel"
 $replace:="Joël"
 $option:=sk case insensitive+sk diacritic insensitive
 
 $p:=0
 Repeat
    $p:=Position($find;$string;$p+1;$lengthFound;$option)
    If($p>0)
       $string:=Substring($string;1;$p-1)+$replace+Substring($string;$p+$lengthFound)
    End if 
 Until($p<=0) //résultat : $string -> Bonjour Joëlle et Joël!
```

#### Voir aussi 

[Compare strings](compare-strings.md)  
[Substring](substring.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 15 |
| Thread safe | &check; |
| Interdite sur le serveur ||


