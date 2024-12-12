---
id: test-semaphore
title: Test semaphore
slug: /commands/test-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Test semaphore.Syntax-->**Test semaphore** ( *semaforo* ) : Boolean<!-- END REF-->
<!--REF #_command_.Test semaphore.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| semaforo | Text | &#8594;  | Nombre del semáforo a probar |
| Resultado | Boolean | &#8592; | True = el semáforo existe, False = el semáforo no existe |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Test semaphore.Summary-->El comando Test semaphore le permite probar la existencia de un semáforo.<!-- END REF-->

La diferencia entre la función [Semaphore](semaphore.md "Semaphore") y Test semaphore es que Test semaphore no crea el *semaphore* si éste no existe. Si el *semaforo* existe, la función devuelve [True](true.md "True"). De lo contrario, devuelve [False](false.md "False"). 

#### Ejemplo 

El siguiente ejemplo le permite conocer el estado de un proceso (en nuestro caso, la modificación de un código) sin modificar *semaforo*:

```4d
 $Win:=Open window(x1;x2;y1;y2;-Palette window)
 Repeat
    If(Test semaphore("Código de encriptación"))
       POSICION MENSAJE($x3;$y3)
       MESSAGE("El código de encriptación está siendo modificado.")
    Else
       POSICION MENSAJE($x3;$y3)
       MESSAGE("La modificación del código de encriptación ha sido autorizada.")
    End if
 Until(StopInfo)
 CLOSE WINDOW
```

#### Ver también 

[CLEAR SEMAPHORE](clear-semaphore.md)  
[Semaphore](semaphore.md)  