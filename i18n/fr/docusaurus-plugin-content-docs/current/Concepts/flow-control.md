---
id: control-flow
title: Conditions et boucles
---

Quelle que soit la simplicité ou la complexité d’une méthode ou d'une fonction, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation déterminent si et dans quel ordre les lignes d’instructions sont exécutées à l’intérieur d’une méthode. Il existe trois types de structures :

- **Séquentielle** : une structure séquentielle est une structure simple, linéaire. Une séquence est une série d’instructions que 4D exécute les unes après les autres, de la première à la dernière. Une instruction d'une ligne, fréquemment utilisée pour les méthodes objet, est le cas le plus simple de structure séquentielle. Par exemple : `[Personnes]Nom:=Uppercase([Personnes]Nom)`
- **[Conditionnelle](Concepts/cf_branching.md)** : une structure conditionnelle permet aux méthodes de tester une condition et d’exécuter des séquences d’instructions différentes en fonction du résultat. La condition est une expression booléenne, c’est-à-dire pouvant retourner VRAI ou FAUX. L’une des structures conditionnelles est la structure `If...Else...End if`, qui aiguille le déroulement du programme vers une séquence ou une autre. L’autre structure conditionnelle est la structure `Case of...Else...End case`, qui aiguille le programme vers une séquence parmi une ou plusieurs alternatives.
- **[Répétitive](Concepts/cf_looping.md)** : il est très courant, lorsque vous écrivez des méthodes, de rencontrer des cas où vous devez répéter une séquence d’instructions un certain nombre de fois. Pour traiter ces besoins, le langage 4D vous propose plusieurs structures répétitives :
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`<br/> The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Chaque structure répétitive peut être utilisée de l’une ou l’autre manière, mais les boucles `While` et `Repeat` sont mieux adaptées à la répétition jusqu’à ce qu’une condition soit remplie, alors que les boucles `For` sont mieux adaptées à la répétition un certain nombre de fois. `For each...End for each`, destinée à effectuer des boucles dans les objets et les collections, permet de combiner les deux manières.

**Note :** 4D vous permet d’imbriquer des structures de programmation jusqu’à une “profondeur” de 512 niveaux.


## return {expression}

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajoutées      |
</details>

L'instruction `return` peut être appelée de n'importe où. Lorsqu'une instruction `return` est utilisée dans une fonction ou une méthode, l'exécution de la fonction ou de la méthode est arrêtée. Le code restant n'est pas exécuté et le contrôle est renvoyé à l'appelant.

L'instruction `return` peut être utilisée pour [retourner une valeur](parameters.md#return-expression) à l'appelant.

### Exemple

```4d
var $message : Text
var $i : Integer

While (True) //boucle infinie
    $i:=$i+1
    $message+=String($i)+"A\r"  // jusqu'à 5
    logConsole($message)
    If ($i=5)
        return //stops the loop
    End if 
    $message+=String($i)+"B\r"  // jusqu'à 4
    logConsole($message)
End while 
$message+=String($i)+"C\r"  //jamais exécutée 
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

