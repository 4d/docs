---
id: defer
title: defer
slug: /commands/defer
displayed_sidebar: docs
---

<!--REF #_command_.defer.Syntax-->**defer** ( *exitFormula* : Expression )<!-- END REF-->
<!--REF #_command_.defer.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| exitFormula | Expression | &#8594;  | Expression à exécuter à la sortie |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|21 R4|Créé|

</details>
</div>

## Description 

<!--REF #_command_.defer.Summary-->La commande `defer` déclare une expression *exitFormula* qui sera toujours exécutée à la sortie de la méthode ou de la fonction, même si une erreur a été levée ou si un `return` a été exécuté<!-- END REF-->. L'utilisation de `defer` vous permet de garantir qu'une méthode ou une fonction se termine correctement en exécutant du code de finalisation à la sortie. De plus, cette commande évite de dupliquer le même code de sortie dans chaque bloc de retour ou de capture d'erreur.

:::tip Article de blog associé

[Streamline Your Clean-Up Code with the “defer” Command](https://blog.4d.com/streamline-your-clean-up-code-with-the-defer-command)

:::

La commande `defer` peut être appelée n'importe où dans le code d'une méthode ou d'une fonction, et vous pouvez insérer autant d'expressions `defer` que nécessaire. Pendant l'exécution, toutes les expressions *exitFormula* rencontrées sont empilées. Quand l'exécution s'arrête, quelle qu'en soit la raison (flux normal, break, erreur, interruption utilisateur, return...), toutes les expressions de la pile différée sont dépilées et exécutées dans l'ordre LIFO (*Last In First Out*).

Par exemple:

```4d
defer(ALERT("1"))
defer(ALERT("2"))
// A la sortie, les alertes afficheront "2" puis "1"
```

Dans *exitFormula*, vous passez l'expression à évaluer à la sortie de la méthode ou de la fonction, quelle que soit la manière dont elle se termine. En interne, à chaque appel de `defer`, 4D convertit *exitFormula* en [formula](../../commands/formula) et l'ajoute à une pile associée à la méthode ou à la fonction. Quand la méthode ou la fonction se termine, toutes les formules stockées dans la pile sont évaluées dans l'ordre où elles apparaissent dans la collection.

À des fins de débogage, vous pouvez obtenir la pile actuelle de formules à tout moment à l'aide de la commande [`Deferred formulas`](../../commands/deferred-formulas).

Comme pour toutes les [formulas](../../commands/formula), si l'expression *exitFormula* utilise des variables locales, leurs valeurs courantes sont copiées et stockées dans l'objet formule retourné **au moment où il est placé dans la pile différée**. Lors de l'exécution, la formule utilise ces valeurs copiées et non les valeurs courantes des variables locales.

:::note Notes

- Gardez à l'esprit que les variables locales stockent des **références** pour les valeurs de type [object](../../Concepts/dt_object.md#assignment) et [collection](../../Concepts/dt_collection.md#assignment).
- Si *exitFormula* contient une autre instruction `defer`, une erreur est générée.

:::

Si l'expression *exitFormula* génère une erreur, celle-ci est automatiquement interceptée et ignorée, et l'exécution continue sans interruption.

## Exemple 1

Ces exemples illustrent les différentes expressions *exitFormula* prises en charge:

```4d
// Appel de méthode
defer(aMethod)

// Appel d'une fonction d'objet
defer(myObject.aFunction(something))

// Appel d'une fonction singleton
defer(cs.aClass.me.aFunction(something))
```

## Exemple 2

Vous voulez vous assurer qu'une référence XML est toujours correctement libérée, afin d'éviter des fuites mémoire potentielles:

```4d
var $xmlRef:=DOM Create XML ref("theRoot")
defer(DOM CLOSE XML($xmlRef))
...
```

## Exemple 3 

Vous voulez vous assurer que la surveillance d'activité s'arrête à la fin de la méthode:

```4d
START MONITORING ACTIVITY(0.001;Activity all)
defer(STOP MONITORING ACTIVITY())
...
```

## Exemple 4 

Vous voulez contrôler la génération de logs:

```4d
$logRecording:=Get database parameter(Diagnostic log recording)
SET DATABASE PARAMETER(Diagnostic log recording; 1)
defer(SET DATABASE PARAMETER(Diagnostic log recording; $logRecording))

$logLevel:=Get database parameter(Diagnostic log level)
SET DATABASE PARAMETER(Diagnostic log level; Log trace)
defer(SET DATABASE PARAMETER(Diagnostic log level; $logLevel))
```

## Voir aussi 

[Deferred formulas](../commands/deferred-formulas)
[Last errors](../commands/last-errors)  
[ON ERR CALL](../commands/on-err-call)  

## Propriétés
[throw](../commands/throw)

|  |  |
| --- | --- |
| Numéro de commande | 1805 |
| Thread safe | no |
