---
id: control-flow
title: Conditions et boucles
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Les structures de programmation déterminent si et dans quel ordre les lignes d’instructions sont exécutées à l’intérieur d’une méthode. Il existe trois types de structures :

- **Séquentielle** : une structure séquentielle est une structure simple, linéaire. Une séquence est une série d’instructions que 4D exécute les unes après les autres, de la première à la dernière. Une instruction d'une ligne, fréquemment utilisée pour les méthodes objet, est le cas le plus simple de structure séquentielle. Par exemple : `[Personnes]Nom:=Uppercase([Personnes]Nom)`
- **[Conditionnelle](Concepts/cf_branching.md)** : une structure conditionnelle permet aux méthodes de tester une condition et d’exécuter des séquences d’instructions différentes en fonction du résultat. La condition est une expression booléenne, c’est-à-dire pouvant retourner VRAI ou FAUX. L’une des structures conditionnelles est la structure `If...Else...End if`, qui aiguille le déroulement du programme vers une séquence ou une autre. L’autre structure conditionnelle est la structure `Case of...Else...End case`, qui aiguille le programme vers une séquence parmi une ou plusieurs alternatives.
- **[Répétitive](Concepts/cf_looping.md)** : il est très courant, lorsque vous écrivez des méthodes, de rencontrer des cas où vous devez répéter une séquence d’instructions un certain nombre de fois. Pour traiter ces besoins, le langage 4D vous propose plusieurs structures répétitives :
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`<br> Les boucles sont contrôlées de deux manières : soit elles se répètent jusqu’à ce qu’une condition soit remplie, soit elles se répètent un nombre fixé de fois. Chaque structure répétitive peut être utilisée de l’une ou l’autre manière, mais les boucles `While` et `Repeat` sont mieux adaptées à la répétition jusqu’à ce qu’une condition soit remplie, alors que les boucles `For` sont mieux adaptées à la répétition un certain nombre de fois. `For each...End for each`, destinée à effectuer des boucles dans les objets et les collections, permet de combiner les deux manières.

**Note :** 4D vous permet d’imbriquer des structures de programmation jusqu’à une “profondeur” de 512 niveaux.


## return {expression}

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajout         |
</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

### Exemple

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
    $i:=$i+1
    $message+=String($i)+"A\r"  // until 5
    logConsole($message)
    If ($i=5)
        return //stops the loop
    End if 
    $message+=String($i)+"B\r"  // until 4
    logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```

