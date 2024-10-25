---
id: set-timer
title: SET TIMER
slug: /commands/set-timer
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMER.Syntax-->**SET TIMER** ( *tickCount* )<!-- END REF-->
<!--REF #_command_.SET TIMER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tickCount | Integer | &#8594;  | Nombre de ticks ou -1 = Déclenchement dès que possible |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET TIMER.Summary-->La commande **SET TIMER** permet d’activer l’événement formulaire On Timer et de fixer, pour le process et le formulaire courants, le nombre de ticks (1 tick = 1/60ème de seconde) entre chaque événement formulaire On Timer.<!-- END REF--> 

**Note :** Pour plus d’informations sur cet événement formulaire, reportez-vous à la description de la commande [Form event code](form-event-code.md).

Si elle est appelée dans un contexte autre que l’affichage d’un formulaire, cette commande ne fait rien.

**Note :** Lorsque la commande **SET TIMER** est exécutée dans le contexte d’un sous-formulaire (méthode formulaire du sous-formulaire), l’événement On Timer est généré dans le sous-formulaire et non au niveau du formulaire parent. 

Si vous passez -1 dans le paramètre *tickCount*, la commande activera l'événement formulaire On Timer "dès que possible", autrement dit dès que l'application 4D rendra la main au gestionnaire d'événements. Ce principe permet notamment de s'assurer qu'un formulaire soit entièrement affiché avant de démarrer un traitement (fluidité de l'application). 

Pour inactiver par programmation le déclenchement de l’événement formulaire On Timer, appelez de nouveau la commande **SET TIMER** en passant 0 dans le paramètre *nbTicks*.

#### Exemple 

Vous souhaitez que, lorsqu’un formulaire est affiché à l’écran, un bip soit émis toutes les trois secondes. Pour cela, écrivez dans la méthode du formulaire : 

```4d
 If(Form event code=On Load)
    SET TIMER(60*3)
 End if
 ...
 If(Form event code=On Timer)
    BEEP
 End if
```

#### Voir aussi 

[Form event code](form-event-code.md)  
[REDRAW](redraw.md)  