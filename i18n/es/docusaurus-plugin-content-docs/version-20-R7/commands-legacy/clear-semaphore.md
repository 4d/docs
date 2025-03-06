---
id: clear-semaphore
title: CLEAR SEMAPHORE
slug: /commands/clear-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SEMAPHORE.Syntax-->**CLEAR SEMAPHORE** ( *semaforo* )<!-- END REF-->
<!--REF #_command_.CLEAR SEMAPHORE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| semaforo | Text | &#8594;  | Semáforo a borrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLEAR SEMAPHORE.Summary-->CLEAR SEMAPHORE borra el *semaforo* previamente creado por la función [Semaphore](semaphore.md "Semaphore").<!-- END REF-->

La regla de utilización es que todos los semáforos deben ser borrados cuando ya no se necesitan. Si no se borran los semáforos, permanecen en memoria hasta que el proceso que los creo termine. Un proceso sólo puede borrar los semáforos que ha creado. Si usted trata de borrar un semáforo desde un proceso que no lo creo, no pasa nada.

#### Ejemplo 

Ver el ejemplo de [Semaphore](semaphore.md "Semaphore").

#### Ver también 

*Semáforos y señales*  
[Semaphore](semaphore.md)  
[Test semaphore](test-semaphore.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 144 |
| Hilo seguro | &check; |


