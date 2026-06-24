---
id: vp-run-offscreen-area
title: VP Run offscreen area
---

<!-- REF #_method_.VP Run offscreen area.Syntax -->

**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                                                                                                                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parameters | Object | ->                          | Assurez-vous que la commande n'a pas été exécutée auparavant à l'aide de <code>VP RECOMPUTE FORMULAS</code>, sinon la commande ne fait rien. |
| Résultat   | Mixed  | <- | La propriété `.result` de l'objet `.onEvent`, ou Null si aucune valeur n'est retournée                                                                       |

</div>
<!-- END REF -->

## Description

La commande `VP Run offscreen area` <!-- REF #_method_.VP Run offscreen area. ummary -->crée une zone hors écran en mémoire qui peut être utilisée pour traiter les commandes et les fonctions de la zone 4D View Pro<!-- END REF -->.

In *parameters* object, pass any of the following optional properties. These properties will be available through the `This` command within the `onEvent` method and reference the instance:

| Propriété          | Type                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | text                               | Le nom de la zone hors écran. S'il est omis ou null, un nom générique est assigné (ex : OffscreenArea1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| onEvent            | objet (formula) | Une méthode callback qui sera lancée lorsque la zone hors écran sera prête. It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../../Events/onVpReady.md), [`On Load`](../../Events/onLoad.md), [`On Unload`](../../Events/onUnload.md), [`On End URL Loading`](../../Events/onEndUrlLoading.md), [`On URL Loading Error`](../../Events/onUrlLoadingError.md), [`On VP Range Changed`](../../Events/onVpRangeChanged.md), or [`On Timer`](../../Events/onTimer.md) events. The callback method can be used to access the [4D View Pro form object variable](../configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean                            | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../../Events/onUrlLoadingError.md) events occur. If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| timeout            | number                             | Durée maximale (exprimée en secondes) avant la fermeture de la zone si aucun événement n'est généré. Si elle est fixée à 0, aucune limitation n'est appliquée. Valeur par défaut : 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Résultat           | mixte                              | Résultat du traitement (le cas échéant)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `<customProperty>` | mixte                              | Tout attribut personnalisé qui sera disponible dans la méthode callback *onEvent*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

La propriété suivante est automatiquement ajoutée par la commande, si nécessaire :

| Propriété      | Type    | Description                                            |
| -------------- | ------- | ------------------------------------------------------ |
| timeoutReached | boolean | Ajouté avec la valeur vrai si le timeout a été dépassé |

> La zone hors écran n'est disponible que lors de l'exécution de la commande `VP Run offscreen area`. Elle sera automatiquement détruite à la fin de l'exécution.

Les commandes suivantes peuvent être utilisées dans la méthode callback (de rétro-appel) :

- `ACCEPT`
- `CANCEL`
- `SET TIMER`
- `WA Evaluate JavaScript`
- `WA EXECUTE JAVASCRIPT FUNCTION`

## Exemple 1

Vous souhaitez créer une zone 4D View Pro hors écran et lire la valeur d'une cellule :

```4d
// Déclaration de la classe cs.OffscreenArea
Class constructor ($path : Text)
 This.filePath:=$path
 
// Cette fonction sera appelée à chaque événement de la zone hors écran 
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))
 
       ALERT("The G23 cell contains the value: "+String(This.result))
 End case
```

La méthode callback *OffscreenArea* :

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

## Exemple 2

Vous souhaitez charger un grand document hors écran, attendre que tous les calculs soient terminés et l'exporter au format PDF :

```4d
// Déclaration de la classe cs.OffscreenArea
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Import du document 
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // Démarrer un minuteur pour vérifier si tous les calculs sont terminés.
 // Si au cours de cette période, "On VP Range Changed" est exécuté, le minuteur sera redémarré
 // L'heure doit être définie en fonction de la configuration de l'ordinateur.
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // Fin du calcul détectée. Redémarrer le minuteur
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // Pour être sûr de ne pas redémarrer le minuteur si vous appelez d'autres commandes 4D View après ce point
         This.isWaiting:=False
 


 // Stopper le minuteur
   SET TIMER(0)
 
 // Démarrer l'export PDF
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
     :(FORM Event.code=On URL Loading Error)

         CANCEL 
 End case
```

La méthode callback *OffscreenArea* :

```4d
$o:=cs.OffscreenArea.new()
 
$result:=VP Run offscreen area($o)
```

## Voir également

[Article de blog : Fin du chargement du document](https://blog.4d.com/4d-view-pro-end-of-document-loading/)
