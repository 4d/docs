---
id: c-object
title: C_OBJECT
slug: /commands/c-object
displayed_sidebar: docs
---

<!--REF #_command_.C_OBJECT.Syntax-->**C_OBJECT** ( {*méthode* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_OBJECT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthode | Méthode | &#x1F852; | Nom de méthode |
| variable | Variable | &#x1F852; | Nom(s) de variable(s) ou paramètre(s) ${...} à déclarer |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_OBJECT.Summary-->La commande **C\_OBJECT** assigne le type [Objet](# "Données structurées sous forme d'objet natif 4D") à toutes les variables spécifiées.<!-- END REF--> 

Le type [Objet](# "Données structurées sous forme d'objet natif 4D") est pris en charge par le langage de 4D depuis 4D v14\. Les objets de ce type sont gérés par les commandes du thème *Objets (Langage)* ou via la notation objet (cf. *Utiliser la notation objet*). 

La première syntaxe de la commande (si le paramètre *méthode* n’est pas passé) est utilisée pour déclarer et typer une variable process, interprocess ou locale. Cette syntaxe peut être utilisée dans les bases interprétées.

La seconde syntaxe de la commande (si le paramètre *méthode* est passé) est utilisée pour déclarer d’avance au compilateur le résultat et/ou les paramètres ($0, $1, $2, etc.) d’une méthode. Vous devez utiliser cette syntaxe si vous voulez éviter la phase de typage de variables lors de la compilation d'une base, afin de réduire le temps de compilation

**ATTENTION :** Cette deuxième syntaxe ne peut pas être exécutée en mode interprété. Pour cette raison, si vous utilisez cette syntaxe, stockez-la dans une méthode (dont le nom doit débuter par "COMPILER") qui n’est pas exécutée en mode interprété.

**Important :** La commande **C\_OBJECT** ne crée pas d'objet nommé *variable*. Si vous souhaitez accéder aux propriétés de l'objet lui-même en utilisant la notation objet, vous devez au préalable l'initialiser à l'aide de la commande [New object](new-object.md), sinon une erreur de syntaxe est retournée (cf. exemple).

##### Utilisation avancée 

La syntaxe **C\_OBJECT**(${...}) vous permet de déclarer pour une méthode un nombre variable de paramètres du même type à la condition que ce soient les derniers paramètres de la méthode. Par exemple, la déclaration **C\_OBJECT**(${5}) indique à 4D et au compilateur qu'à partir du cinquième paramètre la méthode peut recevoir un nombre variable de paramètres de ce type. Pour plus d'informations, référez-vous à la section *Indirections sur les paramètres*.

#### Exemple 

```4d
 C_OBJECT($obj) //la variable $obj est déclarée mais l'objet $obj n'existe pas
  //Erreur de syntaxe si on tente d'écrire ou de lire une propriété
 $obj:=New object //L'objet $obj est initialisé
 $obj.prop:=42 //...et on peut accéder à ses propriétés
```

#### Voir aussi 

[ARRAY OBJECT](array-object.md)  
*Objets (Langage)*  