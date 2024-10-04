---
id: c-variant
title: C_VARIANT
slug: /commands/c-variant
displayed_sidebar: docs
---

<!--REF #_command_.C_VARIANT.Syntax-->**C_VARIANT** ( {*méthode* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_VARIANT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthode | Méthode | &#x1F852; | Nom de méthode |
| variable | Variable | &#x1F852; | Nom(s) de(s) variable(s) à déclarer |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_VARIANT.Summary-->**C\_VARIANT** attribue le type Variant à chaque *variable* spécifiée.<!-- END REF--> Une variable de type Variant peut contenir une valeur de n'importe quel type de données 4D suivant : BLOB, Booléen, Collection, Date, Entier long, Objet, Image, Pointeur, Réel, Texte, Heure, Null, Indéfini.

La première syntaxe de la commande, dans laquelle le paramètre optionnel *méthode* n'est pas passé, est utilisée pour déclarer et typer tout type de variable process, interprocess ou locale.

**Note :** Cette syntaxe peut être utilisée dans les bases interprétées et compilées.

La seconde syntaxe de la commande, dans laquelle le paramètre optionnel *méthode* est passé, est utilisée pour prédéclarer au compilateur le résultat et/ou les paramètres ($0, $1, $2, etc.) d'une méthode. Utilisez cette syntaxe pour éviter la phase de typage des variables durant la compilation d'une base et réduire le temps de compilation.

**ATTENTION :** L'utilisation d'un variant plutôt que celle d'un type fixe peut réduire les performances.

##### Utilisation avancée 

La syntaxe **C\_VARIANT**(${...}) vous permet de déclarer un nombre variable de paramètres du même type à la condition que ce soient les derniers paramètres de la méthode. Par exemple, la déclaration C\_VARIANT(${5}) indique à 4D et au compilateur qu'à partir du cinquième paramètre, la méthode peut recevoir un nombre variable de paramètres de ce type. Pour plus d'informations, référez-vous à la section *Indirections sur les paramètres*.

#### Exemple 

Pour vérifier le type et la valeur d'une variable variant :

```4d
 C_VARIANT($var)
 C_LONGINT($vt)
 $var:="test"
 $vt:=Type($var) //$vt="Est un variant"
 $vt:=Value type($var) //$vt="Est un texte"
```
