---
id: set-process-variable
title: SET PROCESS VARIABLE
slug: /commands/set-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET PROCESS VARIABLE.Syntax-->**SET PROCESS VARIABLE** ( *process* ; *varDestination* ; *exprSource* {; *varDestination2* ; *exprSource2* ; ... ; *varDestinationN* ; *exprSourceN*} )<!-- END REF-->
<!--REF #_command_.SET PROCESS VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de process de destination |
| varDestination | Variable | &#8594;  | Variable de destination |
| exprSource | Variable | &#8594;  | Expression source (ou variable source) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET PROCESS VARIABLE.Summary-->La commande **SET PROCESS VARIABLE** écrit la ou les valeur(s) de *exprSource* (*exprSource2*, etc.) dans la ou les variable(s) process *varDestination* (*varDestination2*, etc.) du process de destination dont le numéro est passé dans *process*.<!-- END REF-->

Chaque variable de destination peut être une variable ou un élément de tableau. Tenez cependant compte des restrictions évoquées ci-dessous.

Pour chaque association *varDestination;exprSource*, le type de l'expression doit être compatible avec la variable de destination, sinon vous pourrez obtenir des variables avec des valeurs incorrectes. En mode interprété, si la variable de destination n'existe pas, elle est créée et reçoit l'expression. En mode compilé, si aucune variable n'est associée au process de destination, une erreur est retournée. Vous pouvez intercepter cette erreur à l'aide d'une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

Lorsque le process courant écrit les variables du process de destination, ce dernier n'est averti en aucune manière de l'écriture de l'instance de ses variables par un autre process. 

**4D Server :** A partir d'un 4D Client, vous pouvez écrire des variables dans un process de destination exécuté sur le poste serveur (procédure stockée). Pour cela, passez dans process le numéro du process serveur en négatif, c'est-à-dire précédé du signe - (moins).   
Attention, la communication process “intermachine” permise par les commandes **SET PROCESS VARIABLE**, [GET PROCESS VARIABLE](get-process-variable.md) et [VARIABLE TO VARIABLE](variable-to-variable.md) n’est possible que du client vers le serveur. C’est toujours un process client qui lit ou écrit les variables d’une procédure stockée.

**Astuce :** Si vous ne connaissez pas le numéro du process serveur de destination, vous pouvez tout de même écrire dans les variables interprocess du serveur. Pour cela, il vous suffit de passer toute valeur négative dans *process*. En d'autres termes, il n'est pas nécessaire de connaître précisément le numéro d'un process exécuté sur le serveur pour utiliser **SET PROCESS VARIABLE** avec des variables interprocess du serveur.   
Cette possibilité s'avère particulièrement utile dans le cas d'une procédure stockée lancée sur le serveur par l'intermédiaire de la [On Server Startup database method](on-server-startup-database-method.md). Comme les postes clients ne connaissent pas automatiquement le numéro de ce process serveur, il vous suffit de passer une valeur négative (n'importe laquelle) dans le paramètre *process*.

##### Restrictions 

**SET PROCESS VARIABLE** n'accepte pas de variables locales comme variables de destination. 

**SET PROCESS VARIABLE** accepte tout type de variable process ou interprocess de destination, à l'exception :

* des variables de type Pointeur.
* des tableaux de tous types. Pour écrire un tableau entier d'un process vers un autre, utilisez la commande [VARIABLE TO VARIABLE](variable-to-variable.md). Notez cependant que **SET PROCESS VARIABLE** vous permet d'écrire des éléments de tableaux.
* des éléments de tableaux de pointeurs et des éléments de tableaux à deux dimensions.

Le process de destination doit être un process utilisateur, ce ne peut être un des process du moteur de 4D. Si le process de destination n'existe pas, la commande ne fait rien.

#### Exemple 1 

La ligne de code suivante affecte une chaîne vide à la variable Texte *vtCurStatus* du process dont le numéro est *$vlProcess* :

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;"")
```

#### Exemple 2 

La ligne de code suivante affecte la variable Texte *vtCurStatus* du process dont le numéro est *$vlProcess* à la valeur de la variable *$vtInfo* depuis la méthode en cours d'exécution du process courant : 

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)
```

#### Exemple 3 

La ligne de code suivante affecte la variable Texte *vtCurStatus* du process dont le numéro est *$vlProcess* à la valeur de la même variable dans le process courant : 

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)
```

**Note :** La première *vtCurStatus* désigne l'instance de la variable dans le process de destination, la seconde *vtCurStatus* désigne l'instance de la variable dans le process courant.

#### Exemple 4 

L'exemple suivant place séquentiellement en majuscules les éléments d'un tableau process depuis le process désigné par *$vlProcess*:

```4d
 GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)
 For($vlElem;1;$vlSize)
    GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)
    SET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};Uppercase($vtElem))
 End for
```

**Note :** Dans cet exemple, la variable process *vl\_IPCom\_Array* doit être gérée par les process source/destination et contient la taille du tableau *at\_IPCom\_Array*.

#### Exemple 5 

L'exemple suivant écrit l'instance des variables *v1*, *v2*, *v3* dans le process de destination à partir de l'instance de ces mêmes variables dans le process courant :

```4d
 SET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)
```

#### Voir aussi 

[GET PROCESS VARIABLE](get-process-variable.md)  
*Introduction aux process*  
[POST OUTSIDE CALL](post-outside-call.md)  
[VARIABLE TO VARIABLE](variable-to-variable.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 370 |
| Thread safe | &check; |


