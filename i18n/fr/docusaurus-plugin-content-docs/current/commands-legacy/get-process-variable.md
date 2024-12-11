---
id: get-process-variable
title: GET PROCESS VARIABLE
slug: /commands/get-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.GET PROCESS VARIABLE.Syntax-->**GET PROCESS VARIABLE** ( *process* ; *varSource* ; *varDestination* {; *varSource2* ; *varDestination2* ; ... ; *varSourceN* ; *varDestinationN*} )<!-- END REF-->
<!--REF #_command_.GET PROCESS VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de process source |
| varSource | Variable | &#8594;  | Variable source |
| varDestination | Variable | &#8592; | Variable de destination |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PROCESS VARIABLE.Summary-->La commande **GET PROCESS VARIABLE** lit la valeur de la ou des variable(s) process *varSource* (*varSource2*, etc.) depuis le process source dont le numéro est passé dans *process* et la retourne dans la ou les variables(s) *varDestination* ( *varDestination2*, etc.) du process courant.<!-- END REF-->

Chaque variable source peut être une variable, un tableau ou un élément de tableau. Tenez cependant compte des restrictions évoquées plus bas.

Pour chaque association *varSource;varDestination* les types des deux variables doivent être compatibles, sinon vous pourrez obtenir des valeurs non significatives. 

Le process courant "pille" les variables du process de destination : ce dernier n'est averti en aucune manière de la lecture de l'instance de ses variables par un autre process.

**4D Server :** A partir d'un 4D Client, vous pouvez lire des variables dans un process de destination exécuté sur le poste serveur (procédure stockée). Pour cela, passez dans *process* le numéro du process serveur en négatif, c'est-à-dire précédé du signe - (moins).   
Attention, la communication process “intermachine” permise par les commandes **GET PROCESS VARIABLE**, [SET PROCESS VARIABLE](set-process-variable.md) et [VARIABLE TO VARIABLE](variable-to-variable.md) n’est possible que du client vers le serveur. C’est toujours un process client qui lit ou écrit les variables d’une procédure stockée.

**Astuce :** Si vous ne connaissez pas le numéro du process serveur source, vous pouvez tout de même lire les variables interprocess du serveur. Pour cela, il vous suffit de passer toute valeur négative dans *process*. En d'autres termes, il n'est pas nécessaire de connaître précisément le numéro d'un process exécuté sur le serveur pour utiliser **GET PROCESS VARIABLE** avec les variables interprocess du serveur.   
Cette possibilité s'avère particulièrement utile dans le cas d'une procédure stockée lancée sur le serveur par l'intermédiaire de la [On Server Startup database method](on-server-startup-database-method.md). Comme, par défaut, les postes clients ne connaissent pas le numéro de ce process serveur, il vous suffit de passer une valeur négative (n'importe laquelle) dans le paramètre *process*.

##### Restrictions 

**GET PROCESS VARIABLE** n'accepte pas de variables locales comme variables sources.   
En revanche, les variables de destination peuvent être interprocess, process ou locales. Vous pouvez "recevoir" les valeurs uniquement dans des variables, pas dans des champs.

**GET PROCESS VARIABLE** accepte tout type de variable source, process ou interprocess, à l'exception des variables de type :

* Pointeur
* Tableau de pointeurs
* Tableau à deux dimensions

Le process source doit être un process utilisateur, ce ne peut être un des process du moteur de 4D. Si le process source n'existe pas, la commande ne fait rien.

**Note :** En mode interprété, si une variable source n'existe pas, la valeur indéfinie est retournée. Vous pouvez le détecter en testant la variable de destination correspondante à l'aide de la fonction [Type](type.md). 

#### Exemple 1 

La ligne de code suivante lit la valeur de la variable Texte *vtCurStatus* dans le process dont le numéro est *$vlProcess* et retourne le résultat dans la variable process *vtInfo* du process courant :

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtInfo)
```

#### Exemple 2 

La ligne de code suivante fait la même chose mais retourne la valeur dans la variable locale *$vtInfo* de la méthode s'exécutant dans le process courant :

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)
```

#### Exemple 3 

La ligne de code suivante fait la même chose mais retourne la valeur dans la même variable *vtCurStatus* du process courant :

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)
```

**Note :** La première *vtCurStatus* désigne l'instance de la variable dans le process source, la seconde *vtCurStatus* désigne l'instance de la variable dans le process courant.

#### Exemple 4 

L'exemple suivant lit séquentiellement les éléments d'un tableau process depuis le process indiqué par *$vlProcess* :

```4d
 GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)
 For($vlElem;1;$vlSize)
    GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)
  // Faire quelque chose avec $vtElem
 End for
```

**Note :** Dans cet exemple, la variable process *vl\_IPCom\_Array* doit être gérée par le process source et contient la taille du tableau *at\_IPCom\_Array*.

#### Exemple 5 

L'exemple suivant fait la même chose que le précédent mais lit le tableau dans son intégralité au lieu de le faire élément par élément :

```4d
 GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
  // Faire quelque chose avec $anArray{$vlElem}
 End for
```

#### Exemple 6 

L'exemple suivant lit l'instance des variables *v1*,*v2*,*v3* dans le process source et retourne leurs valeurs dans l'instance des mêmes variables du process courant :

```4d
 GET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)
```

#### Exemple 7 

Reportez-vous à l'exemple de la commande *\_o\_DRAG AND DROP PROPERTIES*.

#### Voir aussi 

*Introduction aux process*  
[POST OUTSIDE CALL](post-outside-call.md)  
*Présentation du Glisser-Déposer*  
[SET PROCESS VARIABLE](set-process-variable.md)  
[VARIABLE TO VARIABLE](variable-to-variable.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 371 |
| Thread safe | &check; |


