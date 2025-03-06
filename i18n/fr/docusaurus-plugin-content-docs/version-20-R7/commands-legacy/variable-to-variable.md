---
id: variable-to-variable
title: VARIABLE TO VARIABLE
slug: /commands/variable-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO VARIABLE.Syntax-->**VARIABLE TO VARIABLE** ( *process* ; *varDestination* ; *varSource* {; *varDestination2* ; *varSource2* ; ... ; *varDestinationN* ; *varSourceN*} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro du process de destination |
| varDestination | Variable | &#8594;  | Variable de destination |
| varSource | Variable | &#8594;  | Variable source |

<!-- END REF-->

#### Description 

<!--REF #_command_.VARIABLE TO VARIABLE.Summary-->La commande **VARIABLE TO VARIABLE** écrit la valeur de la ou des variable(s) *varSource1* (*varSource2*, etc.), dans la ou les variable(s) process *varDestination* (*varDestination2*, etc.) du process de destination dont vous avez passé le numéro dans *process*.<!-- END REF-->

**VARIABLE TO VARIABLE** a un fonctionnement semblable à celui de la commande [SET PROCESS VARIABLE](set-process-variable.md), avec cependant les différences suivantes : 

* Alors que vous passez comme source à [SET PROCESS VARIABLE](set-process-variable.md)des expressions (et donc vous ne pouvez pas passer un tableau en totalité), vous devez passer comme source à **VARIABLE TO VARIABLE** uniquement des variables (et donc vous pouvez passer un tableau en totalité).
* Avec [SET PROCESS VARIABLE](set-process-variable.md), chaque variable de destination peut être une variable ou un élément de tableau, mais ne peut pas être un tableau. Avec **VARIABLE TO VARIABLE**, chaque variable de destination peut être une variable, un tableau ou un élément de tableau.

**4D Server :** La communication process “intermachine” permise par les commandes **VARIABLE TO VARIABLE**, [SET PROCESS VARIABLE](set-process-variable.md) et [GET PROCESS VARIABLE](get-process-variable.md) n’est possible que du client vers le serveur. C’est toujours un process client qui lit ou écrit les variables d’une procédure stockée.

Pour chaque association *varDestination;varSource*, le type de la variable source doit être compatible avec la variable de destination, sinon vous pourrez obtenir des variables avec des valeurs non significatives. En mode interprété, si la variable de destination n'existe pas, elle est créée puis le type et la valeur de la variable source lui sont affectés.

Lorsque le process courant écrit les variables du process de destination, ce dernier n'est averti en aucune manière de l'écriture de l'instance de ses variables par un autre process.

##### Restrictions 

**VARIABLE TO VARIABLE** n'accepte pas de variables locales comme variables de destination. 

**VARIABLE TO VARIABLE** accepte tout type de variable process ou interprocess de destination, à l'exception de variables de type :

* Pointeur
* Tableau de pointeurs
* Tableau à deux dimensions

Le process de destination doit être un process utilisateur, ce ne peut être un des process du moteur de 4D. Si le process de destination n'existe pas, une erreur est retournée. Vous pouvez intercepter cette erreur à l'aide d'une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

#### Exemple 

L'exemple suivant récupère un tableau process depuis le process désigné par *$vlProcess*, passe séquentiellement tous ses éléments en caractères majuscules puis réécrit entièrement le tableau :

```4d
 GET PROCESS VARIABLE($vlProcess;at_IPCom_Tab;$anTab)
 For($vlElem;1;Size of array($anTab))
    $anTab{$vlElem}:=Uppercase($anTab{$vlElem})
 End for
 VARIABLE TO VARIABLE($vlProcess;at_IPCom_Tab;$anTab)
```

#### Voir aussi 

[GET PROCESS VARIABLE](get-process-variable.md)  
*Introduction aux process*  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 635 |
| Thread safe | &cross; |


