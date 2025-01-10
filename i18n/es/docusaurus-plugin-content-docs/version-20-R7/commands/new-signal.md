---
id: new-signal
title: New signal
displayed_sidebar: docs
---

<!-- REF #_command_.New signal.Syntax -->**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!--REF #_command_.New signal.Params-->

| Parámetros  | Tipo                      |   | Descripción                          |
| ----------- | ------------------------- | - | ------------------------------------ |
| description | Text                      | → | Descripción para la señal            |
| Resultado   | 4D.Signal | ← | Objeto nativo que encapsula la señal |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

#### Descripción

El comando `New signal` <!-- REF #_command_.New signal.Summary -->crea un objeto `4D.Signal`<!-- END REF -->.

Una señal es un objeto compartido que puede ser pasado como parámetro de un worker o proceso a otro worker o proceso, de manera que:

- el worker/proceso llamado puede actualizar el objeto de la señal después de que se haya completado el procesamiento específico
- el worker/proceso que llama puede detener su ejecución y esperar hasta que se actualice la señal, sin consumir recursos de la CPU.

Opcionalmente, en el parámetro *description* puede pasar un texto personalizado que describa la señal. Este texto también puede definirse después de la creación de la señal.

Dado que el objeto signal es un objeto compartido, también puede utilizarse para mantener propiedades de usuario, incluida la propiedad [`.description`](#description), llamando a la estructura `Use...End use`.

**Valor devuelto**

Un nuevo objeto [`4D.Signal`](#signal-object).

#### Ejemplo

Este es un ejemplo típico de un worker que fija una señal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("Esta es mi primer signal")

 CALL WORKER("myworker"; "doSomething";$signal)
 $signaled:=$signal.wait(1) //espera 1 segundo máximo

 If($signaled)
    ALERT("myworker ha terminado el trabajo. Resultado: "+$signal.myresult)
 Else
    ALERT("myworker no ha terminado en menos de 1s")
 End if
```

El método ***doSomething*** puede ser como:

```4d
 #DECLARE ($signal : 4D.Signal)
  //cualquier procesamiento
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //devuelve el resultado
 End use
 $signal.trigger() // El trabajo ha terminado
```

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1641                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
