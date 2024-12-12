---
id: milliseconds
title: Milliseconds
slug: /commands/milliseconds
displayed_sidebar: docs
---

<!--REF #_command_.Milliseconds.Syntax-->**Milliseconds**  : Integer<!-- END REF-->
<!--REF #_command_.Milliseconds.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de milisegundos transcurridos desde que se inició el equipo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Milliseconds.Summary-->Milliseconds  devuelve el número de milisegundos ( 1milisegundo = 1 milésima de un segundo) pasados desde que se inició el equipo.<!-- END REF-->

El valor devuelto es un entero largo firmado, hasta 2^31 (alrededor de 2 mil millones de milisegundos o 24 días). Cuando la máquina ha estado funcionando durante más de 24 días, el número se vuelve negativo.

El propósito del comando es medir cortos períodos de tiempo con una alta precisión. Un rango de 24 días es más que suficiente para las comparaciones, pero debe tener cuidado. Al comparar valores, siempre trabaje con la diferencia entre dos valores. Nunca compare los valores directamente, ya que uno podría ser negativo y el otro positivo.

#### Ejemplo 

El siguiente código espera hasta 5 segundos para que un registro bloqueado se desbloquee o finalice:

```4d
 If(Locked([Table_1]))
    $starttime:=Milliseconds
    Repeat
       DELAY PROCESS(Current process;15)
       LOAD RECORD([Table_1])
       $waittime:=Milliseconds-$starttime
    Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000)) //espera 5 segundos máximo
 End if
```

**Nota:** siempre compare la diferencia entre dos llamadas de **Milliseconds** como se muestra arriba, nunca compare directamente, por ejemplo:  

```4d
 (Milliseconds>($starttime+5000)) //nunca lo haga así, ya que uno podría ser positivo, uno negativo
```

#### Ver también 

[Current time](current-time.md)  
[Tickcount](tickcount.md)  
[Timestamp](timestamp.md)  