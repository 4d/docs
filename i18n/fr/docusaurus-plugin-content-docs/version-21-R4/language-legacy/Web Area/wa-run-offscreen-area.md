---
id: wa-run-offscreen-area
title: WA Run offscreen area
slug: /commands/wa-run-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.WA Run offscreen area.Syntax-->**WA Run offscreen area** ( *paramètres* : Object ) : any<!-- END REF-->
<!--REF #_command_.WA Run offscreen area.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| paramètres | Object | &#8594;  | Objet contenant les attributs de la zone web |
| Résultat | any | &#8592; | Valeur retournée par la méthode callback (ou méthode de rétro-appel) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|18 R6|Modifié|
|18 R3|Créé|

</details>
</div>

## Description 

<!--REF #_command_.WA Run offscreen area.Summary-->La commande **WA Run offscreen area** crée une zone web dans la mémoire qui peut être utilisée pour charger et parser automatiquement des pages web.<!-- END REF-->

**Note** : Cette commande utilise le moteur de rendu web intégré.

Dans l'objet *paramètres*, passez l'un des propriétés optionnelles suivantes pour la zone web. Ces propriétés seront disponibles via la commande [This](../commands/this) dans la méthode onEvent et référencent cette instance :

| **Propriété**    | **Type**               | **Description**                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url              | objet texte \| fichier | L'URL ou le fichier à charger dans la zone web. S'il est omis, une page blanche est chargée.                                                                                                                                                                                                                                                                                                  |
| area             | texte                  | Le nom de la zone web. S'il est omis ou null, un nom générique est attribué (ex : OffscreenArea1).                                                                                                                                                                                                                                                                                            |
| onEvent          | objet (formule)        | Une méthode callback qui est lancée lorsque la zone web est prête. Elle peut être soit :<br/> une fonction *onEvent* d'une classe, ou un objet [Formula](../commands/formula)  <br/>Par défaut, la méthode callback est appelée sur les événements On Load, On Unload, On End URL Loading, On URL Loading Error, ou On Timer.                                                          |
| autoQuit         | booléen                | Vrai (valeur par défaut) si la commande doit stopper l'exécution de la formule lorsque les événement On End URL Loading ou On URL Loading Error se produisent.<br/><br/><br/>Si faux, vous devez utiliser les commandes [CANCEL](../commands/cancel) ou [ACCEPT](../commands/accept) dans la méthode callback ou les méthodes projet appelées avec l'objet $4d pour fermer la zone web. |
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

* [ACCEPT](../commands/accept)
* [CANCEL](../commands/cancel)
* [SET TIMER](../commands/set-timer)
* [WA Evaluate JavaScript](../commands/wa-evaluate-javascript)
* [WA EXECUTE JAVASCRIPT FUNCTION](../commands/wa-execute-javascript-function)
* [WA Get current URL](../commands/wa-get-current-url)
* [WA GET LAST URL ERROR](../commands/wa-get-last-url-error)
* [WA Get page content](../commands/wa-get-page-content)
* [WA Get page title](../commands/wa-get-page-title)
* [WA OPEN URL](../commands/wa-open-url)
* [WA REFRESH CURRENT URL](../commands/wa-refresh-current-url)
* [WA STOP LOADING URL](../commands/wa-stop-loading-url)

## Exemple 

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

## Variables et ensembles système 

La variable système OK est définie sur 0 si le timeout a été atteint ou si la commande [CANCEL](../commands/cancel) a été appelée dans onEvent, sinon elle est définie sur 1.

## Voir aussi 

[FORM Event](../commands/form-event)  
*Gestion programmée des zones Web*  
[WA OPEN WEB INSPECTOR](../commands/wa-open-web-inspector)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1727 |
| Thread safe | no |
| Modifie les variables | OK |


