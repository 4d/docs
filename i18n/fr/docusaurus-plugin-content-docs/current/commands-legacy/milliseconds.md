---
id: milliseconds
title: Milliseconds
slug: /commands/milliseconds
displayed_sidebar: docs
---

<!--REF #_command_.Milliseconds.Syntax-->**Milliseconds**  : Integer<!-- END REF-->
<!--REF #_command_.Milliseconds.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Nombre de millisecondes (1000ème de seconde) écoulées depuis le démarrage de la machine |

<!-- END REF-->

#### Description 

<!--REF #_command_.Milliseconds.Summary-->**Milliseconds** retourne le nombre de millisecondes (1 milliseconde = 1/1000ème de seconde) écoulées depuis le démarrage de la machine.<!-- END REF-->

La valeur retournée est un entier long signé allant jusqu'à 2^31 (environ 2 milliards de millisecondes ou 24 jours). Lorsque la machine est lancée depuis plus de 24 jours, la valeur devient négative.

Le but de la commande est de mesurer de courtes périodes de temps avec une très grande précision. Une plage de 24 jours est suffisamment longue pour effectuer des comparaisons, mais il est important de prendre des précautions. Lors de la comparaison de valeurs, travaillez systématiquement avec les différences entre les valeurs. Ne comparez jamais les valeurs directement, l'une d'elles pouvant être négative et l'autre positive.

#### Exemple 

Le code suivant attend jusqu'à 5 secondes qu'un enregistrement soit déverrouillé : 

```4d
 If(Locked([Table_1]))
    $starttime:=Milliseconds
    Repeat
       DELAY PROCESS(Current process;15)
       LOAD RECORD([Table_1])
       $waittime:=Milliseconds-$starttime
    Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000)) //patientez 5 secondes maximum
 End if
```

**Note :** Pensez à toujours comparer la différence entre deux appels de **Milliseconds** tel qu'indiqué ci-dessus, et à ne jamais faire de comparaison directe, comme par exemple :   

```4d
 (Milliseconds>($starttime+5000)) // ne suivez jamais cet exemple, l'une des valeurs pouvant être positive et l'autre négative
```

#### Voir aussi 

[Current time](current-time.md)  
[Tickcount](tickcount.md)  
[Timestamp](timestamp.md)  