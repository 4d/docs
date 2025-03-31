---
id: vp-run-offscreen-area
title: VP Run offscreen area
---

<!-- REF #_method_.VP Run offscreen area.Syntax -->

**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

| Paramètres | Type   |                             | Description                                                                     |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------- | ---------------- |
| parameters | Object | ->                          | Objet contenant les attributs de la zone hors écran                             |                  |
| Résultat   | Mixed  | <- | `.result` property of the `.onEvent` object, or Null if does not return a value | <!-- END REF --> |

#### Description

The `VP Run offscreen area` command <!-- REF #_method_.VP Run offscreen area.Summary -->creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions<!-- END REF -->.

In *parameters* object, pass any of the following optional properties. These properties will be available through the `This` command within the `onEvent` method and reference the instance:

| Propriété          | Type                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | text                               | Le nom de la zone hors écran. S'il est omis ou null, un nom générique est assigné (ex : OffscreenArea1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| onEvent            | objet (formula) | Une méthode callback qui sera lancée lorsque la zone hors écran sera prête. It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../../Events/onVpReady.md), [`On Load`](../../Events/onLoad.md), [`On Unload`](../../Events/onUnload.md), [`On End URL Loading`](../../Events/onEndUrlLoading.md), [`On URL Loading Error`](../../Events/onUrlLoadingError.md), [`On VP Range Changed`](../../Events/onVpRangeChanged.md), or [`On Timer`](../../Events/onTimer.md) events. The callback method can be used to access the [4D View Pro form object variable](../configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean                            | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../../Events/onUrlLoadingError.md) events occur. If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| timeout            | number                             | Durée maximale (exprimée en secondes) avant la fermeture de la zone si aucun événement n'est généré. Si elle est fixée à 0, aucune limitation n'est appliquée. Valeur par défaut : 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Résultat           | mixte                              | Résultat du traitement (le cas échéant)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `<customProperty>` | mixte                              | Any custom attribute to be available in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

La propriété suivante est automatiquement ajoutée par la commande, si nécessaire :

| Propriété      | Type    | Description                                            |
| -------------- | ------- | ------------------------------------------------------ |
| timeoutReached | boolean | Ajouté avec la valeur vrai si le timeout a été dépassé |

> The offscreen area is only available during the execution of the `VP Run offscreen area` command. Elle sera automatiquement détruite à la fin de l'exécution.

Les commandes suivantes peuvent être utilisées dans la méthode callback (de rétro-appel) :

- `ACCEPT`
- `CANCEL`
- `SET TIMER`
- `WA Evaluate JavaScript`
- `WA EXECUTE JAVASCRIPT FUNCTION`

#### Exemple 1

Vous souhaitez créer une zone 4D View Pro hors écran et lire la valeur d'une cellule :

```4d
// cs.OffscreenArea class declaration 
Class constructor ($path : Text)
 This.filePath:=$path
 
// This function will be called on each event of the offscreen area 
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))
 
       ALERT("The G23 cell contains the value: "+String(This.result))
 End case
```

The *OffscreenArea* callback method:

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### Exemple 2

Vous souhaitez charger un grand document hors écran, attendre que tous les calculs soient terminés et l'exporter au format PDF :

```4d
//cs.OffscreenArea class declaration
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Document import
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // Start a timer to verify if all calculations are finished.
 // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
 // The time must be defined according to the computer configuration.
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // End of calculation detected. Restarts the timer
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // To be sure to not restart the timer if you call others 4D View command after this point
         This.isWaiting:=False
 


 // Stop the timer
   SET TIMER(0)
 
 // Start the PDF export
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
     :(FORM Event.code=On URL Loading Error)

         CANCEL 
 End case
```

The *OffscreenArea* callback method:

```4d
$o:=cs.OffscreenArea.new()
 
$result:=VP Run offscreen area($o)
```

#### Voir également

[Blog post: End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)
