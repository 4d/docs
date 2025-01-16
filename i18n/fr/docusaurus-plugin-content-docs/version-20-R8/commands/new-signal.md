---
id: new-signal
title: New signal
displayed_sidebar: docs
---

<!-- REF #_command_.New signal.Syntax -->**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!--REF #_command_.New signal.Params-->

| Paramètres  | Type                      |   | Description                  |
| ----------- | ------------------------- | - | ---------------------------- |
| Description | Text                      | → | Description du signal        |
| Résultat    | 4D.Signal | ← | Object encapsulant le signal |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R4   | Ajout         |

</details>

#### Description

La commande `New signal` <!-- REF #_command_.New signal.Summary -->crée un objet `4D.Signal`<!-- END REF -->.

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
 $signal:=New signal("Ceci est mon premier signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //patienter 1 seconde au maximum

 If($signaled)
    ALERT("myworker a terminé le travail. Résultat : "+$signal.myresult)
 Else
    ALERT("myworker n'a pas terminé en moins d'1 seconde")
 End if
```

La méthode ***doSomething*** est par exemple :

```4d
 #DECLARE ($signal : 4D.Signal)
  //tout traitement
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //renvoi du résultat
 End use
 $signal.trigger() // Le travail est terminé
```

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1641                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
