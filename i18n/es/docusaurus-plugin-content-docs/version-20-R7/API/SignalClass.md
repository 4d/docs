---
id: SignalClass
title: Signal
---

Las señales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicación multiproceso. Las señales le permiten asegurarse de que uno o más procesos esperarán a que se complete una tarea específica antes de continuar la ejecución. Todo proceso puede esperar y/o liberar una señal.

> Los semáforos también pueden utilizarse para gestionar las interacciones. Los semáforos permiten asegurarse de que dos o más procesos no modifican el mismo recurso (archivo, registro...) al mismo tiempo. Sólo el proceso que define el semáforo puede eliminarlo.

### Objeto signal

Una señal es un objeto compartido que debe ser pasado como parámetro a los comandos que llaman o crean trabajadores o procesos.

Un objeto `4D.Signal` contiene los siguientes métodos y propiedades integrados:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Lanzamiento Mientras espera una señal, el proceso que llama no utiliza ninguna CPU. Esto puede ser muy interesante para el rendimiento en aplicaciones multiproceso. Lanzamiento

Tenga en cuenta que para evitar situaciones de bloqueo, el método `.wait()` también puede regresar después de que se haya alcanzado un tiempo de espera definido.

Los objetos Signal se crean con el comando [`New signal`](../commands/new-signal.md).

### Trabajar con señales

En 4D, se crea un nuevo objeto señal llamando al comando [`New signal`](../commands/new-signal.md). Una vez creada, esta señal debe pasarse como parámetro a los comandos `New process` o `CALL WORKER` para que puedan modificarla cuando hayan terminado la tarea que se quiere esperar.

- `signal.wait()` debe ser llamado desde el worker/proceso que necesita que otro worker/proceso termine una tarea para poder continuar.
- `signal.trigger()` debe llamarse desde el worker/proceso que terminó su ejecución para liberar a todos los demás.

![](../assets/en/API/signal.png)

Una vez que una señal ha sido liberada utilizando una llamada `signal.trigger()`, no puede ser reutilizada de nuevo. Si desea definir otra señal, debe llamar de nuevo al comando `New signal`.

Dado que un objeto signal es un [objeto compartido](Concepts/shared.md), puede utilizarlo para devolver resultados de los workers/procesos llamados, siempre que no olvide escribir los valores dentro de una estructura `Use...End use` (ver ejemplo).

### Ejemplo

```4d
 var $signal : 4D.Signal

  // Creación de una signal
 $signal:=New signal

  // llamar al proceso principal y ejecutar el método OpenForm
 CALL WORKER(1; "OpenForm";$signal)
  // hacer otro cálculo
 ...
  // Esperar el final del proceso
 $signaled:=$signal.wait()

  // Procesar los resultados
 $calc:=$signal.result+...
```

Método ***OpenForm*** :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Abrir el formulario
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Añade un nuevo atributo a su objeto compartido $signal para pasar su resultado al otro proceso:
 Use($signal)
    $signal.result:=$form.value
 End use

  //  Activar la señal al proceso de espera
 $signal.trigger()
```

### Resumen

|                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<br/><!-- INCLUDE #SignalClass.description.Summary --> |
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<br/><!-- INCLUDE #SignalClass.signaled.Summary -->          |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<br/><!-- INCLUDE #SignalClass.trigger().Summary -->         |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #SignalClass.wait().Summary -->                  |

<!-- REF SignalClass.description.Desc -->

## .description

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #SignalClass.description.Syntax -->**.description** : Text<!-- END REF -->

#### Descripción

La propiedad `.description` <!-- REF #SignalClass.description.Summary -->contiene una descripción personalizada para el objeto `Signal`.<!-- END REF -->.

`.description` puede definirse al crear el objeto signal o en cualquier momento. Tenga en cuenta que, dado que el objeto `Signal` es un objeto compartido, cualquier acceso en modo escritura a la propiedad `.description` debe ir rodeado de una estructura `Use...End use`.

Esta propiedad está en **lectura-escritura**.

<!-- END REF -->

<!-- REF SignalClass.signaled.Desc -->

## .signaled

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #SignalClass.signaled.Syntax -->**.signaled** : Boolean<!-- END REF -->

#### Descripción

Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Lanzamiento Cuando se crea la señal, `.signaled` es **False**. La propiedad `.signaled` se convierte en true cuando cualquier worker/proceso llama al método `.trigger()`.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SignalClass.trigger().Desc -->

## .trigger()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #SignalClass.trigger().Syntax -->**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.trigger( )` <!-- REF #SignalClass.trigger().Summary -->define la propiedad `signaled` del objeto signal como **true**<!-- END REF --> y despierta a todos los workers o procesos que esperan esta signal.

Si la señal ya está en el estado de señalización (es decir, la propiedad signaled\\\\\\\\\\\\\\\` ya es **true**), la función no hace nada.

<!-- END REF -->

<!-- REF SignalClass.wait().Desc -->

## .wait()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #SignalClass.wait().Syntax -->**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->

| Parámetros | Tipo    |                             | Descripción                                     |
| ---------- | ------- | --------------------------- | ----------------------------------------------- |
| timeout    | Real    | ->                          | Tiempo máximo de espera de la señal en segundos |
| Result     | Boolean | <- | Estado de la propiedad `.signaled`              |

<!-- END REF -->

#### Descripción

La función `.wait( )` <!-- REF #SignalClass.wait().Summary -->hace que el proceso actual espere hasta que la propiedad `.signaled` del objeto signal se convierta en **true** o que el *timeout* opcional expire<!-- END REF -->.

Para evitar que el código se bloquee, puede pasar un tiempo máximo de espera en segundos en el parámetro *timeout* (se aceptan decimales).

> **Atención**: la llamada a `.wait( )` sin un *timeout* en el proceso principal de 4D no es recomendable porque podría congelar toda la aplicación 4D.

Si la señal ya está en estado de señalización (es decir, la propiedad `.signaled` ya es **true**), la función vuelve inmediatamente, sin esperar.

La función devuelve el valor de la propiedad `.signaled`. Evaluar este valor permite saber si la función retornó porque el `.trigger( )` ha sido llamado (`.signaled` es **true**) o si el *timeout* expiró (`.signaled` es **false**).

> El estado de un proceso que espera un signal es `Waiting for internal flag`.

<!-- END REF -->
