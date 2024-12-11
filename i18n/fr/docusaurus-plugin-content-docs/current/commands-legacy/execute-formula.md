---
id: execute-formula
title: EXECUTE FORMULA
slug: /commands/execute-formula
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE FORMULA.Syntax-->**EXECUTE FORMULA** ( *instruction* )<!-- END REF-->
<!--REF #_command_.EXECUTE FORMULA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| instruction | Text | &#8594;  | Code à exécuter |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXECUTE FORMULA.Summary-->**EXECUTE FORMULA** exécute *instruction* comme une ligne de code.<!-- END REF--> Cette commande est destinée à être utilisée lorsque vous devez évaluer des expressions qui peuvent être construites ou modifiées par l'utilisateur. 

 La chaîne d'instructions doit comporter une seule ligne. Si *instruction* est une chaîne vide, **EXECUTE FORMULA** ne fait rien. Le principe est que si *instruction* peut être exécutée comme une méthode d'une seule ligne, alors elle s'exécutera correctement. La commande **EXECUTE FORMULA** doit être utilisée avec précautions, car elle ralentit la vitesse d'exécution. Dans une base compilée, le code d'*instruction* n'est pas compilé. Cela signifie que l'*instruction* sera bien exécutée, mais ne sera pas vérifiée par le compilateur au moment de la compilation. 

**Note :** L'exécution de formules en mode compilé peut être optimisée à l'aide d'un cache (cf. paragraphe "Cache de formules en mode compilé" ci-dessous).

L'*instruction* peut notamment contenir les éléments suivants :

* un appel à une fonction (méthode projet qui retourne une valeur),
* un appel à une commande 4D,
* une assignation.

**Notes :** 

* Si *instruction* est une méthode projet, il est recommandé d'utiliser [EXECUTE METHOD](execute-method.md) qui permet de passer des paramètres.
* Il est déconseillé d'appeler des commandes de déclaration de variables telles que [C\_DATE](c-date.md) dans *instruction* afin d'éviter tout risque de conflit de type.

La formule peut utiliser des variables process et interprocess. En revanche, *instruction* ne doit pas contenir d'instructions de contrôle de flux (Si, Tant que...) car le code doit "tenir" sur une seule ligne.

Pour assurer une évaluation correcte de l'*instruction* quelle que soit la langue ou la version de 4D, il est recommandé d'utiliser la syntaxe *tokenisée* pour les éléments dont le nom peut varier au fil des versions (commandes, tables, champs, constantes). Par exemple, pour insérer la commande [Current time](current-time.md), saisissez '**Current time:C178**'. Pour plus d'informations sur ce point, reportez-vous à la section *Utiliser des tokens dans les formules*.

##### Cache de formules en mode compilé 

A des fins d'optimisation, chaque formule exécutée via **EXECUTE FORMULA** en mode compilé peut être conservée en mémoire dans un cache dédié. La formule est stockée sous forme de références (*tokens*). Une fois placée dans le cache, une formule s'exécutera de manière beaucoup plus rapide par la suite car la phase de *tokenisation* sera évitée. 

La taille du cache est de zéro par défaut (pas de cache) ; vous devez le créer et l'ajuster à l'aide de la commande [SET DATABASE PARAMETER](set-database-parameter.md). Par exemple :

```4d
 SET DATABASE PARAMETER(Number of formulas in cache;0) //pas de cache de formules
 SET DATABASE PARAMETER(Number of formulas in cache;3) //jusqu'à trois formules peuvent être en cache pour chaque process
```

La commande **EXECUTE FORMULA** utilise le cache uniquement lorsqu'elle est appelée depuis une base ou un composant exécuté(e) en mode compilé. 

#### Exemple 

Vous voulez exécuter une formule incluant des appels à des commandes et des tables 4D. Comme ces éléments peuvent potentiellement être renommés, vous voulez vous assurer de l'exécution correcte de l'instruction dans les versions futures de votre application en utilisant la syntaxe avec *tokens* :

```4d
 EXECUTE FORMULA("Annee de:C25 ([Products:5]Creation_Date:2])+$add")
```

#### Voir aussi 

[Command name](command-name.md)  
[EDIT FORMULA](edit-formula.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 63 |
| Thread safe | &check; |
| Interdite sur le serveur ||


