---
id: control-flow
title: Conditions et boucles
---

Quelle que soit la simplicité ou la complexité d’une méthode, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation déterminent si et dans quel ordre les lignes d’instructions sont exécutées à l’intérieur d’une méthode. Il existe trois types de structures :

- **Séquentielle** : une structure séquentielle est une structure simple, linéaire. Une séquence est une série d’instructions que 4D exécute les unes après les autres, de la première à la dernière. Une instruction d'une ligne, fréquemment utilisée pour les méthodes objet, est le cas le plus simple de structure séquentielle. Par exemple : `[Personnes]Nom:=Majusc([Personnes]Nom)`
- **[Conditionnelle](Concepts/cf_branching.md)** : Une structure conditionnelle permet aux méthodes de tester une condition et d’exécuter des séquences d’instructions différentes en fonction du résultat. La condition est une expression booléenne, c’est-à-dire pouvant retourner VRAI ou FAUX. L’une des structures conditionnelles est la structure `Si...Sinon...Fin de si`, qui aiguille le déroulement du programme vers une séquence ou une autre. L’autre structure conditionnelle est la structure `Au cas ou...Sinon...Fin de cas`, qui aiguille le programme vers une séquence parmi une ou plusieurs alternatives.
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures: 
    - `Tant que...Fin tant que`
    - `Repeter...Jusque`
    - `Boucle...Fin de boucle`
    - `For each...End for each`  
        The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections. 

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels.