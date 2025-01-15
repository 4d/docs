---
id: idle
title: IDLE
slug: /commands/idle
displayed_sidebar: docs
---

<!--REF #_command_.IDLE.Syntax-->**IDLE**<!-- END REF-->
<!--REF #_command_.IDLE.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.IDLE.Summary-->**IDLE** est destinée uniquement à une utilisation avec le compilateur.<!-- END REF--> En effet, seul le moteur de 4D peut détecter un événement. Il était donc nécessaire, dans le cadre d'une base compilée, qu'une routine puisse interroger le moteur de 4D afin de savoir si un événement s'est produit. Cette commande doit donc être utilisée lorsque vous employez la commande [ON EVENT CALL](on-event-call.md).   
Par exemple, si une méthode exécute une boucle dans laquelle aucune commande 4D n'est appelée, la boucle ne pourra pas être interrompue par un process installé à l'aide d' [ON EVENT CALL](on-event-call.md), et l'utilisateur ne pourra pas ouvrir une autre application. Dans ce cas, **IDLE** doit être insérée pour que 4D puisse intercepter les événements. Bien entendu, n'utilisez pas **IDLE** si vous ne voulez aucune interruption.

#### Exemple 

Dans l'exemple suivant, la boucle ne se terminerait jamais dans une base compilée sans l'aide de **IDLE** :

```4d
  // Méthode Traitement quelconque
 ON EVENT CALL("METHODE EVENEMENT")
 ◊vbArrêt:=False
 MESSAGE("Traitement..."+Char(13)+"Tapez une touche pour interrompre l'exécution...")
 Repeat
  // Effectuer un traitement sans appel à une commande 4D
    IDLE
 Until(◊vbArrêt)
 ON EVENT CALL("")
```

La méthode METHODE EVENEMENT :

```4d
  // Méthode METHODE EVENEMENT
 If(Undefined(Keycode))
    Keycode:=0
 End if
 If(Keycode#0)
    CONFIRM("Voulez-vous vraiment interrompre cette opération ?")
    If(OK=1)
       ◊vbArrêt:=True
    End if
 End if
```

#### Voir aussi 

*Commandes du thème Compilateur*  
[ON EVENT CALL](on-event-call.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 311 |
| Thread safe | &check; |


