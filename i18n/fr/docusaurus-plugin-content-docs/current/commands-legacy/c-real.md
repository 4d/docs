---
id: c-real
title: C_REAL
slug: /commands/c-real
displayed_sidebar: docs
---

<!--REF #_command_.C_REAL.Syntax-->**C_REAL** ( {*méthode* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_REAL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthode | Méthode | &#x1F852; | Nom de méthode |
| variable | Variable | &#x1F852; | Nom(s) de(s) variable(s) à déclarer |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_REAL.Summary-->**C\_REAL** affecte le type Réel (numérique) à chaque variable spécifiée.<!-- END REF-->

La première syntaxe de la commande (si le paramètre *méthode* n'est pas passé) est utilisée pour déclarer et typer une variable process, interprocess ou locale. 

**Note :** Cette syntaxe peut être utilisée dans les bases interprétées.

La seconde syntaxe de la commande (si le paramètre *méthode* est passé) est utilisée pour déclarer d'avance au compilateur le résultat et/ou les paramètres ($0, $1, $2, etc.) d'une méthode. Vous devez utiliser cette syntaxe si vous voulez éviter la phase de typage de variables lors de la compilation d'une base, afin de réduire le temps de compilation.

**ATTENTION :** La deuxième syntaxe ne peut pas être exécutée en mode interprété. Pour cette raison, si vous utilisez cette syntaxe, stockez-la dans une méthode (dont le nom doit débuter par "COMPILER") qui n'est pas exécutée en mode interprété.

##### Utilisation avancée 

La syntaxe **C\_REAL**(${...}) vous permet de déclarer pour une méthode un nombre variable de paramètres du même type à la condition que ce soient les derniers paramètres de la méthode. Par exemple, la déclaration **C\_REAL**(${5}) indique à 4D et au compilateur qu'à partir du cinquième paramètre la méthode peut recevoir un nombre variable de paramètres de ce type. Pour plus d'informations, référez-vous à la section *Indirections sur les paramètres*.

#### Exemples 

Reportez-vous à la section *Commandes du thème Compilateur*.

#### Voir aussi 

*\_o\_C\_INTEGER*  
[C\_LONGINT](c-longint.md)  
*Commandes du thème Compilateur*  
[Count parameters](count-parameters.md)  