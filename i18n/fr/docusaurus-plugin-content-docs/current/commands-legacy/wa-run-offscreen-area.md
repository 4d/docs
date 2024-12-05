---
id: wa-run-offscreen-area
title: WA Run offscreen area
slug: /commands/wa-run-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.WA Run offscreen area.Syntax-->**WA Run offscreen area** ( *paramètres* ) : any<!-- END REF-->
<!--REF #_command_.WA Run offscreen area.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| paramètres | Object | &#8594;  | Objet contenant les attributs de la zone web |
| Résultat | any | &#8592; | Valeur retournée par la méthode callback (ou méthode de rétro-appel) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA Run offscreen area.Summary-->La commande **WA Run offscreen area** crée une zone web dans la mémoire qui peut être utilisée pour charger et parser automatiquement des pages web.<!-- END REF-->

**Note** : Cette commande utilise le moteur de rendu web intégré.

Dans l'objet *paramètres*, passez l'un des propriétés optionnelles suivantes pour la zone web. Ces propriétés seront disponibles via la commande [This](this.md) dans la méthode onEvent et référencent cette instance :

| **Propriété**    | **Type**               | **Description**                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url              | objet texte \| fichier | L'URL ou le fichier à charger dans la zone web. S'il est omis, une page blanche est chargée.                                                                                                                                                                                                                                                                                                  |
| area             | texte                  | Le nom de la zone web. S'il est omis ou null, un nom générique est attribué (ex : OffscreenArea1).                                                                                                                                                                                                                                                                                            |
| onEvent          | objet (formule)        | Une méthode callback qui est lancée lorsque la zone web est prête. Elle peut être soit :<br/> une fonction *onEvent* d'une classe, ou un objet [Formula](formula.md)  <br/>Par défaut, la méthode callback est appelée sur les événements On Load, On Unload, On End URL Loading, On URL Loading Error, ou On Timer.                                                          |
| autoQuit         | booléen                | Vrai (valeur par défaut) si la commande doit stopper l'exécution de la formule lorsque les événement On End URL Loading ou On URL Loading Error se produisent.<br/><br/><br/>Si faux, vous devez utiliser les commandes [CANCEL](cancel.md) ou [ACCEPT](accept.md) dans la méthode callback ou les méthodes projet appelées avec l'objet $4d pour fermer la zone web. |
| timeout          | réel                   | Durée maximale (en secondes) avant la fermeture automatique de la zone, si aucun événément n'est généré. Si elle est définie sur 0, aucune limitation n'est appliquée. Valeur par défaut : 60                                                                                                                                                                                                 |
| result           | mixte                  | Résultat du traitement à retourner (le cas échéant)                                                                                                                                                                                                                                                                                                                                           |
| <customProperty> | mixte                  | Un attribut personnalisé disponible dans la méthode callback ou $4d.                                                                                                                                                                                                                                                                                                                          |

La propriété suivante est automaiquement ajoutée par la commande, si nécessaire : 

| **Propriété**  | **Type** | **Description**                                            |
| -------------- | -------- | ---------------------------------------------------------- |
| timeoutReached | booléen  | Ajoutée avec la valeur **true** si le timeout s'est écoulé |

Si une valeur null est passée dans *paramètres*, une zone web vide sera créée puis automatiquement fermée. 

**Notes** : 

* La zone web hors écran est disponible uniquement durant l'exécution de la commande **WA Run offscreen area.** Elle sera automatiquement détruite une fois que l'exécution est terminée.
* Les méthodes 4D peuvent être appelées avec le code JavaScript qui est exécuté dans une zone web. Voir *Accéder aux méthodes 4D*.

Les commandes suivantes peuvent être utilisées dans la méthode callback :

* [ACCEPT](accept.md)
* [CANCEL](cancel.md)
* [SET TIMER](set-timer.md)
* [WA Evaluate JavaScript](wa-evaluate-javascript.md)
* [WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)
* [WA Get current URL](wa-get-current-url.md)
* [WA GET LAST URL ERROR](wa-get-last-url-error.md)
* [WA Get page content](wa-get-page-content.md)
* [WA Get page title](wa-get-page-title.md)
* [WA OPEN URL](wa-open-url.md)
* [WA REFRESH CURRENT URL](wa-refresh-current-url.md)
* [WA STOP LOADING URL](wa-stop-loading-url.md)

#### Exemple 

Vous souhaitez créer et gérer une zone web hors écran à l'aide d'une fonction de votre classe OffscreenArea :

```4d
 $config:=cs.OffscreenArea.new()
 $result:=WA Run offscreen area($config)
 If($config.timeoutReached) //retourné automatiquement en cas de timeout
    ALERT("Timeout écoulé")
 End if
```

dans la **classe OffscreenArea** :

```4d
 Class constructor
 This.url:=File("/RESOURCES/compute.html")
 This.area:="myWAOffscreen"
 
 Function onEvent
 Case of
    :(FORM Event.code=On End URL Loading)
       This.result:=WA Evaluate JavaScript(*;This.area;"myJSMethod();")
 End case
```

#### Variables et ensembles système 

La variable système OK est définie sur 0 si le timeout a été atteint ou si la commande [CANCEL](cancel.md) a été appelée dans onEvent, sinon elle est définie sur 1.

#### Voir aussi 

[FORM Event](../commands/form-event.md)  
*Gestion programmée des zones Web*  
[WA OPEN WEB INSPECTOR](wa-open-web-inspector.md)  