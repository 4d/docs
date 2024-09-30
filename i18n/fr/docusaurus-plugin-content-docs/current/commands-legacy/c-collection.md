---
id: c-collection
title: C_COLLECTION
slug: /commands/c-collection
displayed_sidebar: docs
---

<!--REF #_command_.C_COLLECTION.Syntax-->**C_COLLECTION** ( {*méthode* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_COLLECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthode | Méthode | &#x1F852; | Nom de méthode |
| variable | Variable | &#x1F852; | Nom(s) de(s) variable(s) ou paramètre(s) ${...} à déclarer |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_COLLECTION.Summary-->La commande **C\_COLLECTION** affecte le type [Collection](# "Tableau de valeurs de propriétés d'objets") à chaque variable spécifiée.<!-- END REF-->

Le type [Collection](# "Tableau de valeurs de propriétés d'objets") est pris en charge par le langage 4D à partir de la version v16 R4\. Les variables [Collection](# "Tableau de valeurs de propriétés d'objets") contiennent des valeurs de tout type, stockées sous forme de tableau JSON. 

La première syntaxe de la commande (si le paramètre *méthode* n'est pas passé) est utilisée pour déclarer et typer une variable process, interprocess ou locale. Cette syntaxe peut être utilisée dans les bases interprétées.

La seconde syntaxe de la commande (si le paramètre *méthode* est passé) est utilisée pour déclarer d'avance au compilateur le résultat et/ou les paramètres ($0, $1, $2, etc.) d'une méthode. Vous devez utiliser cette syntaxe si vous voulez éviter la phase de typage des variables lors de la compilation d'une base, afin de réduire le temps de compilation.

**ATTENTION :** La deuxième syntaxe ne peut pas être exécutée en mode interprété. Pour cette raison, si vous utilisez cette syntaxe, stockez-la dans une méthode (dont le nom doit commencer par "COMPILER") qui n'est pas exécutée en mode interprété.

##### Utilisation avancée 

La syntaxe **C\_COLLECTION**(${...}) vous permet de déclarer pour une méthode un nombre variable de paramètres du même type à la condition que ce soient les derniers paramètres de la méthode. Par exemple, la déclaration **C\_COLLECTION**(${5}) indique à 4D et au compilateur qu'à partir du cinquième paramètre la méthode peut recevoir un nombre variable de paramètres de ce type. Pour plus d'informations, référez-vous à la section *Indirections sur les paramètres*.

#### Exemple 

Pour déclarer une variable process de type Collection et la remplir avec une nouvelle collection :

```4d
 C_COLLECTION(myCol)
  //ici la valeur de myCol est null
 myCol:=New collection("Green";100;"Orange";200;"Red";300)
  //myCol= ["Green",100,"Orange",200,"Red",300]
```

#### Voir aussi 

*Collections*  
[New collection](new-collection.md)  