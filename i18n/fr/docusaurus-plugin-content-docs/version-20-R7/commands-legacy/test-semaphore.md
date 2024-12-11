---
id: test-semaphore
title: Test semaphore
slug: /commands/test-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Test semaphore.Syntax-->**Test semaphore** ( *sémaphore* ) : Boolean<!-- END REF-->
<!--REF #_command_.Test semaphore.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sémaphore | Text | &#8594;  | Nom du sémaphore à tester |
| Résultat | Boolean | &#8592; | Vrai = le sémaphore existe, Faux = le sémaphore n’existe pas |

<!-- END REF-->

#### Description 

<!--REF #_command_.Test semaphore.Summary-->La commande **Test semaphore** permet de tester l’existence d’un sémaphore.<!-- END REF--> 

A la différence de la fonction [Semaphore](semaphore.md), **Test semaphore** ne crée pas le sémaphore s’il n’existe pas.   
Si le sémaphore existe, la fonction retourne **Vrai**, s’il n’existe pas elle retourne **Faux**.

**Note :** Attention, 4D tient compte de la casse des caractères en ce qui concerne les noms de sémaphores (le programme considère par exemple que "MonSémaphore" est différent de "monsémaphore"). 

#### Exemple 

Cet exemple permet de connaître l’état d’un traitement (en l’occurrence, la modification d’un code) sans modifier le sémaphore :

```4d
 Open window(x1;x2;y1;y2;-Palette window)
 Repeat
    If(Test semaphore("Code d’encryptage"))
       GOTO XY($x3;$y3)
       MESSAGE("Code d'encryptage en cours de modification.")
    Else
       GOTO XY($x3;$y3)
       MESSAGE("Modification du code d'encryptage autorisée.")
    End if
 Until(StopInfo)
 CLOSE WINDOW
```

#### Voir aussi 

[CLEAR SEMAPHORE](clear-semaphore.md)  
[Semaphore](semaphore.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 652 |
| Thread safe | &check; |
| Interdite sur le serveur ||


