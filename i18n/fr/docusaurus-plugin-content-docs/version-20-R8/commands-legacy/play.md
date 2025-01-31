---
id: play
title: PLAY
slug: /commands/play
displayed_sidebar: docs
---

<!--REF #_command_.PLAY.Syntax-->**PLAY** ( *nomObjet* {; *asynchrone*} )<!-- END REF-->
<!--REF #_command_.PLAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomObjet | Text | &#8594;  | Nom ou chemin de fichier son ou son systèmeChaîne vide pour stopper un son asynchrone |
| asynchrone | Integer | &#8594;  | (Windows) Si passé : exécution asynchrone, si omis : exécution synchrone |

<!-- END REF-->

#### Description 

<!--REF #_command_.PLAY.Summary-->La commande **PLAY** vous permet de jouer des fichiers de son ou multimedia.<!-- END REF--> Sous OS X, la commande permet également de jouer un son système. 

* Pour jouer un fichier, passez son nom et son chemin d'accès dans *nomObjet*. Vous pouvez passer un chemin d'accès complet ou relatif au fichier de structure de la base.  
 Les principaux formats de fichiers son et multimedia sont pris en charge : .WAV, .MP3, .AIFF (OS X)... Sous OS X, la commande prend notamment en charge les formats Core Audio.
* (OS X uniquement) Pour jouer un son système, passez directement son nom dans le paramètre *nomObjet*.

**Note :** Les ressources ‘snd’, utilisées dans Mac OS 9 et les systèmes plus anciens, ne sont plus prises en charge.

Le paramètre *asynchrone* permet de jouer le son en synchrone ou en asynchrone sous Windows. Synchrone signifie que tous les traitements s'arrêtent jusqu'à ce que le son soit entièrement joué, asynchrone signifie que le traitement ne s'arrête pas et que le son est joué en tâche de fond. Si *asynchrone* est passé et vaut 0 (ou toute valeur numérique), le son est joué en asynchrone. S'il est omis, le son est joué en synchrone.  
**Note :** Sous OS X, le son est toujours asynchrone, que *asynchrone* soit passé ou non.

Pour stopper un son asynchrone, il faut exécuter l'instruction suivante :

```4d
 PLAY("";0)
```

#### Exemple 1 

L'exemple suivant montre comment jouer un fichier WAV de votre choix sous Windows :

```4d
 $DocRéf :=Open document("";"WAV";Read Mode) //ou MP3...
 If(OK=1)
    CLOSE DOCUMENT($DocRéf)
    PLAY(Document;0) //exécution asynchrone
 End if
```

#### Exemple 2 

Exemple de son système sous OS X :

```4d
 PLAY("Submarine.aiff") //Jouer le son système
```

#### Voir aussi 

[BEEP](beep.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 290 |
| Thread safe | &cross; |


