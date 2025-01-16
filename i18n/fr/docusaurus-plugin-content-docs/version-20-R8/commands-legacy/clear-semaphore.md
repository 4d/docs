---
id: clear-semaphore
title: CLEAR SEMAPHORE
slug: /commands/clear-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SEMAPHORE.Syntax-->**CLEAR SEMAPHORE** ( *sémaphore* )<!-- END REF-->
<!--REF #_command_.CLEAR SEMAPHORE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sémaphore | Text | &#8594;  | Sémaphore à effacer |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR SEMAPHORE.Summary-->**CLEAR SEMAPHORE** permet d'effacer le *sémaphore* précédemment créé par la fonction [Semaphore](semaphore.md).<!-- END REF-->

La règle d'utilisation est que tous les sémaphores doivent être effacés lorsqu'ils ne sont plus nécessaires. Si les sémaphores ne sont pas effacés, ils restent en mémoire jusqu'à la fermeture du process dans lequel ils ont été créés.  
Un process ne peut effacer que les sémaphores qu'il a créés. Si vous tentez d'effacer un sémaphore depuis un autre process que celui qui l'a créé, **CLEAR SEMAPHORE** ne fait rien.

**Note :** Attention, 4D tient compte de la casse des caractères en ce qui concerne les noms de sémaphores (le programme considère par exemple que "MonSémaphore" est différent de "monsémaphore"). 

#### Exemple 

Reportez-vous à l'exemple de la fonction [Semaphore](semaphore.md "Semaphore").

#### Voir aussi 

[Semaphore](semaphore.md)  
*Sémaphores et signaux*  
[Test semaphore](test-semaphore.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 144 |
| Thread safe | &check; |


