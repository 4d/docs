---
id: SignalClass
title: Signal
---

Les signaux sont des outils fournis par le langage 4D pour gérer les interactions et éviter les conflits entre les process dans une application multiprocessus. Les signaux vous permettent de vous assurer qu'un ou plusieurs process attendront la fin d'une tâche spécifique avant de poursuivre leur exécution. Tout process peut attendre et/ou libérer un signal.

> Les sémaphores peuvent également être utilisés pour gérer les interactions. Les sémaphores permettent de s'assurer que deux ou plusieurs process ne modifient pas la même ressource (fichier, enregistrement...) au même moment. Seul le process qui a posé le sémaphore peut le retirer.


### Objet signal

Un signal est un objet partagé qui doit être passé comme paramètre aux commandes qui appellent ou créent des workers ou des process.

Un objet `4D.Signal` contient les méthodes et propriétés intégrées suivantes :

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Tout worker/process appelant la méthode `.wait()` suspend son exécution jusqu'à ce que la propriété `.signaled` soit mise à true. Lorsque vous êtes en attente d'un signal, le process appelant n'utilise pas de CPU. Cela peut être très intéressant pour les performances des applications multiprocess. La propriété `.signaled` devient est mise à True lorsqu'un worker/processus appelle la méthode `.trigger()`.

A noter que pour éviter les situations de blocage, la méthode `.wait()` peut également revenir après qu'un délai d'attente défini ait été atteint.

Les objets signal sont créés à l'aide de la commande [New signal](#new-signal).


### Travailler avec des signaux

Dans 4D, vous créez un nouvel objet signal en appelant la commande [`New signal`](#new-signal). Une fois créé, ce signal doit être passé en paramètre aux commandes `New process` ou `CALL WORKER` afin qu'elles puissent le modifier lorsqu'elles ont terminé la tâche que vous souhaitez attendre.

- `signal.wait()` doit être appelé par le worker/process qui a besoin qu'un autre worker/process termine une tâche pour pouvoir continuer.
- `signal.trigger()` doit être appelé par le worker/process qui a terminé son exécution afin de libérer tous les autres.


![](assets/en/API/signal.png)

Une fois qu'un signal a été libéré par un appel à `signal.trigger()`, il ne peut plus être réutilisé. Si vous souhaitez définir un autre signal, vous devez à nouveau appeler la commande `New signal`.

Etant donné qu'un objet signal est un [objet partagé](Concepts/shared.md), vous pouvez l'utiliser pour retourner les résultats des workers/process appelés, à condition de ne pas oublier d'écrire les valeurs dans une structure `Use...End use` (voir exemple).

### Exemple

```4d
 var $signal : 4D.Signal

  // Creation of a signal
 $signal:=New signal

  // call main process and execute OpenForm method
 CALL WORKER(1;"OpenForm";$signal)
  // do another calculation
 ...
  // Waiting for the end of the process
 $signaled:=$signal.wait()

  // Processing of the results
 $calc:=$signal.result+...
```

Méthode ***OpenForm*** :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Open the form
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Add a new attribute to your $signal shared object to pass your result to the other process:
 Use($signal)
    $signal.result:=$form.value
 End use

  // Trigger the signal to the waiting process
 $signal.trigger()
```

### Sommaire


|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




<!-- REF SignalClass.New signal.Desc -->
## New signal


<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |
</details>

<!-- REF #_command_.New signal.Syntax -->
**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| Paramètres  | Type      |    | Description                            |
| ----------- | --------- |:--:| -------------------------------------- |
| description | Texte     | -> | Description for the signal             |
| Résultat    | 4D.Signal | <- | Native object encapsulating the signal |
<!-- END REF -->


#### Description

The `New signal` command <!-- REF #_command_.New signal.Summary -->creates a `4D.Signal` object<!-- END REF -->.

A signal is a shared object which can be passed as parameter from a worker or process to another worker or process, so that:

*   the called worker/process can update the signal object after specific processing has completed
*   the calling worker/process can stop its execution and wait until the signal is updated, without consuming any CPU resources.

Optionally, in the *description* parameter you can pass a custom text describing the signal. This text can also be defined after signal creation.

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](#description) property, by calling the `Use...End use` structure.


**Valeur retournée**

A new [`4D.Signal` object](#signal-object).

#### Exemple

Here is a typical example of a worker that sets a signal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //patienter 1 seconde au maximum

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker has not finished in less than 1s")
 End if
```


The ***doSomething*** method could be like:

```4d
 #DECLARE ($signal : 4D.Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //retourner le résulat
 $signal.trigger() // L'opération est terminée
```

<!-- END REF -->


<!-- REF SignalClass.description.Desc -->
## .description

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |
</details>

<!-- REF #SignalClass.description.Syntax -->
**.description** : Text<!-- END REF -->

#### Description

The `.description` property <!-- REF #SignalClass.description.Summary -->contains a custom description for the `Signal` object.<!-- END REF -->.

`.description` can be set at the creation of the signal object or at any moment. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use...End use` structure.

This property is **read-write**. 

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |

</details>

<!-- REF #SignalClass.signaled.Syntax -->
**.signaled** : Boolean<!-- END REF -->

#### Description

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. When the signal is created, `.signaled` is **False**. It becomes **True** when the `.trigger( )` is called on the object.

Cette propriété est en **lecture seule**. 

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |
</details>

<!-- REF #SignalClass.trigger().Syntax -->
**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |::| --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


#### Description

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

If the signal is already in the signaled state (i.e., the `signaled` property is already **true**), the function does nothing.

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |
</details>

<!-- REF #SignalClass.wait().Syntax -->
**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
| Paramètres | Type    |    | Description                                    |
| ---------- | ------- | -- | ---------------------------------------------- |
| timeout    | Réel    | -> | Maximum waiting time for the signal in seconds |
| Résultat   | Booléen | <- | State of the `.signaled` property              |
<!-- END REF -->


#### Description

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

To prevent blocking code, you can pass a maximum waiting time in seconds in the *timeout* parameter (decimals are accepted).
> **Attention** : L'appel de `.wait( )` sans *timeout* dans le process principal de 4D n'est pas recommandé car il pourrait geler l'ensemble de l'application 4D.

If the signal is already in the signaled state (i.e. the `.signaled` property is already **true**), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the *timeout* expired (`.signaled` is **false**).
> L'état d'un process qui attend un signal est `En attente d'un marqueur interne`.


<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
