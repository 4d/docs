---
id: execute-method
title: EXECUTE METHOD
slug: /commands/execute-method
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD.Syntax-->**EXECUTE METHOD** ( *nomMéthode* {; *résultat* {; *param*}}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomMéthode | Text | &#8594;  | Nom de méthode projet à exécuter |
| résultat | Variable, * | &#8592; | Variable recevant le résultat de la méthode ou * pour une méthode ne retournant pas de résultat |
| param | Expression | &#8594;  | Paramètre(s) de la méthode |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXECUTE METHOD.Summary-->La commande **EXECUTE METHOD** provoque l’exécution de la méthode projet *nomMéthode* en lui passant éventuellement les paramètres *param1.<!-- END REF-->..paramN*. Vous pouvez passer tout nom de méthode appelable depuis la base ou le composant exécutant la commande.

Passez dans *résultat* une variable devant recevoir le résultat de l’exécution de *nomMéthode* (valeur placée dans $0 à l’intérieur de *nomMéthode*). Si la méthode ne retourne pas de résultat, passez *\** comme deuxième paramètre. Si la méthode ne retourne pas de résultat et ne nécessite pas non plus le passage de paramètre(s), passez uniquement le paramètre *nomMéthode*.

Le contexte d’exécution est préservé dans la méthode appelée, ce qui signifie que le formulaire courant et l’éventuel événement formulaire courant restent définis.

Si vous appelez cette commande depuis un composant et passez dans *nomMéthode* un nom de méthode appartenant à la base hôte (ou inversement), la méthode doit avoir été partagée (option “Partager entre composants et base hôte” dans les propriétés de la méthode).

#### Variables et ensembles système 

Si cette commande est exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0.

#### Voir aussi 

[EXECUTE FORMULA](execute-formula.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1007 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


