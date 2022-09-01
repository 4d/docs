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

![](../assets/en/API/signal.png)

Une fois qu'un signal a été libéré par un appel à `signal.trigger()`, il ne peut plus être réutilisé. Si vous souhaitez définir un autre signal, vous devez à nouveau appeler la commande `New signal`.

Etant donné qu'un objet signal est un [objet partagé](Concepts/shared.md), vous pouvez l'utiliser pour retourner les résultats des workers/process appelés, à condition de ne pas oublier d'écrire les valeurs dans une structure `Use...End use` (voir exemple).

### Exemple

```4d
 var $signal : 4D.Signal

  // Création d'un signal
 $signal:=New signal

  // appel du process principal et exécution de la méthode OpenForm
 CALL WORKER(1;"OpenForm";$signal)
  // autre calcul
 ...
  // Attente de la fin du process
 $signaled:=$signal.wait()

  // Traitement des résultats
 $calc:=$signal.result+...
```

Méthode ***OpenForm*** :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Ouvrir le form
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Ajout d'un nouvel attribut à votre objet partagé $signal pour passer votre résultat à l'autre process :
 Use($signal)
    $signal.result:=$form.value
 End use

  // Envoyer le signal au process en attente
 $signal.trigger()
```

### Sommaire

|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |

<!-- REF SignalClass.New signal.Desc -->
## New signal

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

<!-- REF #_command_.New signal.Syntax -->

**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| Paramètres  | Type      |    | Description                                             |
| ----------- | --------- |:--:| ------------------------------------------------------- |
| Description | Text      | -> | Description du signal                                   |
| Result      | 4D.Signal | <- | Object encapsulant le signal|<!-- END REF -->

|

#### Description

The `New signal` command <!-- REF #_command_.New signal.Summary -->creates a `4D.Signal` object<!-- END REF -->.

Un signal est un objet partagé qui peut être passé en paramètre depuis un worker ou un process à un autre worker ou process, de manière à ce que :

- le worker/process appelé puisse mettre à jour l'objet signal après qu'un traitement spécifique soit terminé
- le worker/process appelant puisse stopper son exécution et attende jusqu'à ce que le signal soit mis à jour, sans consommer aucune ressource CPU.

Optionnellement, dans le paramètre *description*, vous pouvez passer un texte personnalisé décrivant le signal. Ce texte peut également être défini après la création du signal.

Comme l'objet signal est un objet partagé, il peut aussi être utilisé pour maintenir des propriétés utilisateur, y compris la propriété [`.description`](#description), via l'appel de la structure `Use...End use`.

**Valeur retournée**

Un nouvel objet [`4D.Signal`](#signal-object).

#### Exemple

Voici un exemple type de worker qui définit un signal :

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

La méthode ***doSomething*** est par exemple :

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
| v17 R4  | Ajoutées      |

</details>

<!-- REF #SignalClass.description.Syntax -->

**.description** : Text<!-- END REF -->

#### Description

The `.description` property <!-- REF #SignalClass.description.Summary -->contains a custom description for the `Signal` object.<!-- END REF -->.

`.description` peut être définie à la création de l'objet signal ou à tout moment. Notez que comme l'objet `Signal` est un objet partagé, tout accès en mode écriture à la propriété `.description` doit être encadré par les mots-clés `Use...End use`.

Cette propriété est en **lecture-écriture**.

<!-- END REF -->

<!-- REF SignalClass.signaled.Desc -->
## .signaled

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

<!-- REF #SignalClass.signaled.Syntax -->

**.signaled** : Boolean<!-- END REF -->

#### Description

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. . When the signal is created, `.signaled` is **False**.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

<!-- REF #SignalClass.trigger().Syntax -->

**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |::| ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

Si le signal est déjà dans l'état signaled (i.e., la propriété `signaled` est déjà **true**), la fonction ne fait rien.

<!-- END REF -->

<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

<!-- REF #SignalClass.wait().Syntax -->

**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
| Paramètres | Type    |    | Description                                                 |
| ---------- | ------- | -- | ----------------------------------------------------------- |
| timeout    | Real    | -> | Délai d'attente maximum du signal en secondes               |
| Result     | Boolean | <- | Etat de la propriété `.signaled`|<!-- END REF -->

|

#### Description

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

Pour prévenir tout code bloquant, vous pouvez passez un temps d'attente maximum en secondes dans le paramètre *timeout* (les décimales sont acceptées).
> **Attention** : L'appel de `.wait( )` sans *timeout* dans le process principal de 4D n'est pas recommandé car il pourrait geler l'ensemble de l'application 4D.

|

La fonction retourne la valeur de la propriété `.signaled`. Evaluer cette valeur permet de savoir si la fonction a retourné à cause de l'appel de `.trigger( )` (`.signaled` est **true**) ou si le *timeout* a expiré (`.signaled` est **false**).
> L'état d'un process qui attend un signal est `En attente d'un marqueur interne`.

<!-- END REF -->
