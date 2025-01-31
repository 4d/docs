---
id: process-state
title: Process state
slug: /commands/process-state
displayed_sidebar: docs
---

<!--REF #_command_.Process state.Syntax-->**Process state** ( *process* ) : Integer<!-- END REF-->
<!--REF #_command_.Process state.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro du process |
| Résultat | Integer | &#8592; | Statut du process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Process state.Summary-->La commande **Process state** retourne le statut du process dont le numéro est passé dans *process*.<!-- END REF--> 

Le résultat de la fonction peut être l'une des valeurs des constantes prédéfinies suivantes (thème *Statut du process*) : 

| Constante                 | Type        | Valeur | Comment                                                                                                                                                                                                                                                 |
| ------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_o\_Hidden modal dialog  | Entier long | 6      | **Compatibilité:** Ce statut du process n'existe plus à partir de 4D v16\. Un statut équivalent est retourné par la commande [Process info](../commands/process-info.md) lorsque *procStatut*\=Waiting for user event et *procMode*\=Faux.<br/> |
| Aborted                   | Entier long | \-1    |                                                                                                                                                                                                                                                         |
| Delayed                   | Entier long | 1      |                                                                                                                                                                                                                                                         |
| Does not exist            | Entier long | \-100  |                                                                                                                                                                                                                                                         |
| Executing                 | Entier long | 0      |                                                                                                                                                                                                                                                         |
| Paused                    | Entier long | 5      |                                                                                                                                                                                                                                                         |
| Waiting for input output  | Entier long | 3      |                                                                                                                                                                                                                                                         |
| Waiting for internal flag | Entier long | 4      |                                                                                                                                                                                                                                                         |
| Waiting for user event    | Entier long | 2      |                                                                                                                                                                                                                                                         |

Si le process n'existe pas (ce qui signifie le numéro que vous avez passé est hors de l'intervalle de 1 à [Count tasks](count-tasks.md)), **Process state** retourne Does not exist (-100).

#### Exemple 

L'exemple suivant retourne le nom et le numéro de référence de chaque process dans les tableaux *asProcName* et *aiProcNum*. La méthode teste si le process a été détruit. Dans ce cas, le nom et le numéro du process ne sont pas ajoutés dans le tableau :

```4d
 $vlNbTasks:=Count tasks
 ARRAY TEXT(asProcName;$vlNbTasks)
 ARRAY INTEGER(aiProcNum;$vlNbTasks)
 $vlActualCount:=0
 For($vlProcess;1;$vlNbTasks)
    If(Process state($vlProcess)>=Executing)
       $vlActualCount:=$vlActualCount+1
       PROCESS PROPERTIES($vlProcess;asProcName{$vlActualCount};$vlState;$vlTime)
       aiProcNum{$vlActualCount}:=$vlProcess
    End if
 End for
  // Eliminer les éléments superflus
 ARRAY TEXT(asProcName;$vlActualCount)
 ARRAY INTEGER(aiProcNum;$vlActualCount)
```

#### Voir aussi 

[Count tasks](count-tasks.md)  
[Process info](../commands/process-info.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 330 |
| Thread safe | &cross; |


