---
id: version-18.0-control-flow
title: Conditions et boucles
original_id: control-flow
---

Quelle que soit la simplicité ou la complexité d’une méthode, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation déterminent si et dans quel ordre les lignes d’instructions sont exécutées à l’intérieur d’une méthode. Il existe trois types de structures :

- **Séquentielle** : une structure séquentielle est une structure simple, linéaire. Une séquence est une série d’instructions que 4D exécute les unes après les autres, de la première à la dernière. Une instruction d'une ligne, fréquemment utilisée pour les méthodes objet, est le cas le plus simple de structure séquentielle. Par exemple : `[Personnes]Nom:=Uppercase([Personnes]Nom)`
- **[Conditionnelle](Concepts/cf_branching.md)** : une structure conditionnelle permet aux méthodes de tester une condition et d’exécuter des séquences d’instructions différentes en fonction du résultat. La condition est une expression booléenne, c’est-à-dire pouvant retourner VRAI ou FAUX. L’une des structures conditionnelles est la structure `If...Else...End if`, qui aiguille le déroulement du programme vers une séquence ou une autre. L’autre structure conditionnelle est la structure `Case of...Else...End case`, qui aiguille le programme vers une séquence parmi une ou plusieurs alternatives.
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. Pour traiter ces besoins, le langage 4D vous propose plusieurs structures répétitives : 
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`  
        Les boucles sont contrôlées de deux manières : soit elles se répètent jusqu’à ce qu’une condition soit remplie, soit elles se répètent un nombre fixé de fois. Chaque structure répétitive peut être utilisée de l’une ou l’autre manière, mais les boucles `While` et `Repeat` sont mieux adaptées à la répétition jusqu’à ce qu’une condition soit remplie, alors que les boucles `For` sont mieux adaptées à la répétition un certain nombre de fois. `For each...End for each`, destinée à effectuer des boucles dans les objets et les collections, permet de combiner les deux manières. 

**Note :** 4D vous permet d’imbriquer des structures de programmation jusqu’à une “profondeur” de 512 niveaux.