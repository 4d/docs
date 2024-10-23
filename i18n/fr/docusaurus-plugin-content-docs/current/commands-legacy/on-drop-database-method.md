---
id: on-drop-database-method
title: On Drop database method
slug: /commands/on-drop-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Drop database method.Syntax-->**On Drop database method**<!-- END REF-->
<!--REF #_command_.On Drop database method.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### 

<!--REF #_command_.On Drop database method.Summary-->La **On Drop database method** est disponible dans les applications 4D en mode local ou distant.<!-- END REF-->

Cette méthode base est exécutée automatiquement en cas de déposer d’objets dans l’application 4D en-dehors de tout contexte de formulaire ou dialogue. Différents types de déposer sont pris en charge en fonction de la plate-forme et de l'application :

| **Action**                                       | **Plate-forme**     | **Commentaire**                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Déposer dans une zone vide de la fenêtre MDI     | Windows             | Non pris en charge lorsque la base est exécutée en mode SDI car il n'y a pas de fenêtre MDI dans ce contexte (cf. section *Mode SDI sous Windows*)                                                                                                                                                          |
| Déposer dans l'icône 4D dans le Dock             | macOS               |                                                                                                                                                                                                                                                                                                             |
| Déposer dans l'icône 4D sur le Bureau du système | Windows(\*) & macOS | La **On Drop database method** est appelée uniquement si l’application est déjà lancée, sauf dans le cas des applications fusionnées avec 4D Desktop. Dans ce cas, la méthode base est appelée même lorsqu’elle n’est pas lancée. Ce principe permet de définir des signatures de documents personnalisées. |

(\*) Non pris en charge avec 4D Developer version 64 bits sous Windows car provoque l'ouverture d'une nouvelle instance de l'application (comportement système). 

Sur Mac, il est nécessaire de maintenir les touches **Option**+**Commande** enfoncées pendant le déposer afin que la méthode base soit appelée. 

#### Exemple 

Cet exemple permet d’ouvrir un document 4D Write déposé en-dehors de tout formulaire :

```4d
  //Méthode base Sur Déposer
 fichierDéposé:=Get file from pasteboard(1)
 If(Position(".4W7";fichierDéposé)=Length(fichierDéposé)-3)
    zexterne:=Open external window(100;100;500;500;0;fichierDéposé;"_4D Write")
    WR OPEN DOCUMENT(zexterne;fichierDéposé)
 End if
```

#### Voir aussi 

*Glisser-Déposer*  