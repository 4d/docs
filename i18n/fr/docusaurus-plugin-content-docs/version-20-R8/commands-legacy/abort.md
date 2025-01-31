---
id: abort
title: ABORT
slug: /commands/abort
displayed_sidebar: docs
---

<!--REF #_command_.ABORT.Syntax-->**ABORT**<!-- END REF-->
<!--REF #_command_.ABORT.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.ABORT.Summary-->La commande **ABORT** est destinée à être utilisée dans une méthode projet de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).<!-- END REF--> 

Si vous n'avez pas installé de méthode projet de gestion d'erreurs, lorsqu'une erreur se produit (par exemple une erreur de la base de données), 4D affiche sa boîte de dialogue d'erreur standard et interrompt l'exécution de votre code :

* Si le code en cours d'exécution est une méthode objet ou formulaire (ou une méthode projet appelée depuis une méthode formulaire ou objet), 4D "rend la main" au formulaire actuellement affiché.
* Si le code en cours d'exécution est une méthode appelée depuis un menu, 4D "rend la main" à la barre de menus ou au formulaire actuellement affiché.
* Si le code en cours d'exécution est la méthode de gestion d'un process, le process est tué.
* Si le code en cours d'exécution est une méthode appelée directement ou indirectement par une opération d'import ou d'export, cette dernière est stoppée. Il en va de même pour les recherches séquentielles et les tris.
* Etc...

Si vous décidez de traiter les erreurs à l'aide d'une méthode projet d'interception d'erreurs, 4D n'affiche plus sa boîte de dialogue d'erreur standard et n'interrompt plus l'exécution de votre code. Au lieu de cela, 4D appelle votre méthode projet d'interception d'erreurs puis poursuit l'exécution de la ligne de code suivant celle ayant provoqué l'erreur. Vous pouvez traiter certaines erreurs par programmation (par exemple pendant un import, si vous interceptez une erreur de la base de donnée signalant une valeur dupliquée, vous pouvez ignorer l'erreur et poursuivre l'opération). Il existe également des erreurs que vous ne pouvez pas traiter ou des erreurs que vous ne devez pas "ignorer". Dans ces cas, vous devez stopper l'exécution de la méthode comme le fait 4D ; pour cela, appelez la commande **ABORT** depuis la méthode projet d'interception d'erreurs.

#### Note historique 

Bien que la commande **ABORT** soit destinée à une utilisation au sein d'une méthode projet d'interception d'erreurs, des membres de la communauté 4D ont commencé à l'utiliser dans d'autres méthodes projet pour interrompre leur exécution. Le fait que cela fonctionne n'est qu'un "effet secondaire". Nous vous recommandons de n'utiliser cette commande que dans des méthodes projet d'interception d'erreurs.

#### Voir aussi 

[ON ERR CALL](on-err-call.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 156 |
| Thread safe | &check; |


