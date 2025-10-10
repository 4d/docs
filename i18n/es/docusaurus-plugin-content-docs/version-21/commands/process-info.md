---
id: process-info
title: Process info
displayed_sidebar: docs
---

<!-- REF #_command_.Process info.Syntax -->**Process info** ( *processNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Process info.Params -->

| Parámetros    | Tipo    |                             | Descripción                  |
| ------------- | ------- | :-------------------------: | ---------------------------- |
| processNumber | Integer | &#8594; | Process number               |
| Resultado     | Object  | &#8592; | Información sobre el proceso |

<!-- END REF -->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R7       | Añadidos       |

</details>

## Descripción

El comando `Process info` <!-- REF #_command_.Process info.Summary -->devuelve un objeto que da información detallada sobre el proceso cuyo número se pasa en *processNumber*<!-- END REF -->. Si pasa un número de proceso incorrecto, el comando devuelve un objeto null.

El objeto devuelto contiene las siguientes propiedades:

| Propiedad        | Tipo                                    | Descripción                                                                               |
| ---------------- | --------------------------------------- | ----------------------------------------------------------------------------------------- |
| cpuTime          | Real                                    | Tiempo en ejecución (segundos)                                         |
| cpuUsage         | Real                                    | Porcentaje de tiempo dedicado a este proceso (entre 0 y 1)             |
| creationDateTime | Text (Date ISO 8601) | Fecha y hora de creación del proceso                                                      |
| ID               | Integer                                 | ID único del proceso                                                                      |
| name             | Text                                    | Nombre del proceso                                                                        |
| number           | Integer                                 | Process number                                                                            |
| apropiativo      | Boolean                                 | True si se ejecuta de forma apropiativa, false en caso contrario                          |
| sessionID        | Text                                    | UUID de la sesión                                                                         |
| state            | Integer                                 | Estado actual. Valores posibles: ver abajo                |
| systemID         | Text                                    | ID del proceso de usuario, proceso 4D o proceso de reserva                                |
| type             | Integer                                 | Tipo de proceso en ejecución. Valores posibles: ver abajo |
| visible          | Boolean                                 | True si es visible, false en caso contrario                                               |

- Valores posibles para "state":

| Constante                 | Valor |
| ------------------------- | ----- |
| Does not exist            | -100  |
| Aborted                   | -1    |
| Executing                 | 0     |
| Delayed                   | 1     |
| Waiting for user event    | 2     |
| Waiting for input output  | 3     |
| Waiting for internal flag | 4     |
| Paused                    | 5     |

- Valores posibles para "type":

| Constante                     | Valor |
| ----------------------------- | ----- |
| Apple event manager           | -7    |
| Backup process                | -19   |
| Cache manager                 | -4    |
| Client manager process        | -31   |
| Compiler process              | -29   |
| Created from execution dialog | 3     |
| Created from menu command     | 2     |
| DB4D Cron                     | -49   |
| DB4D Flush cache              | -46   |
| DB4D Garbage collector        | -47   |
| DB4D Index builder            | -45   |
| DB4D Listener                 | -51   |
| DB4D Mirror                   | -50   |
| DB4D Worker pool user         | -48   |
| Design process                | -2    |
| Event manager                 | -8    |
| Execute on client process     | -14   |
| Execute on server process     | 1     |
| External task                 | -9    |
| HTTP Listener                 | -56   |
| HTTP Log flusher              | -58   |
| HTTP Worker pool server       | -55   |
| Indexing process              | -5    |
| Internal 4D server process    | -18   |
| Internal timer process        | -25   |
| Log file process              | -20   |
| Logger process                | -57   |
| Main 4D process               | -39   |
| Main process                  | -1    |
| Method editor macro process   | -17   |
| Monitor process               | -26   |
| MSC process                   | -22   |
| Ninguno                       | 0     |
| On exit process               | -16   |
| Other 4D process              | -10   |
| Other internal process        | -40   |
| Other user process            | 4     |
| Restore Process               | -21   |
| Serial Port Manager           | -6    |
| Server interface process      | -15   |
| ServerNet Listener            | -43   |
| ServerNet Session manager     | -44   |
| SOAP process                  | -33   |
| SQL Listener                  | -54   |
| SQL Method execution process  | -24   |
| SQL Net Session manager       | -53   |
| SQL Worker pool server        | -52   |
| Web process on 4D remote      | -12   |
| Web process with no context   | -3    |
| Web server process            | -13   |
| Web server spare process      | -32   |
| Worker pool in use            | -41   |
| Worker pool spare             | -42   |
| Worker process                | 5     |

:::note

Los procesos internos de 4D tienen un valor de tipo negativo y los procesos generados por el usuario tienen un valor positivo. Los procesos worker lanzados por el usuario son de tipo 5.

:::

He aquí un ejemplo de objeto de salida:

```json

{
    "number": 4,
    "name": "Application process",
    "sessionID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
    "ID": 4,
    "visible": true,
    "type": -18,
    "state": 0,
    "creationDateTime": "2024-09-22T12:46:39.787Z",
    "preemptive": false,
    "systemID": "123145476132864",
    "cpuUsage": 0,
    "cpuTime": 0.006769
}

```

## Ejemplo

Quiere saber si el proceso es apropiativo:

```4d

var $preemptive : Boolean
$preemptive:=Process info(Current process).preemptive


```

## Ver también

[Count tasks](../commands-legacy/count-tasks.md)\
[Process activity](process-activity.md)\
[Process state](../commands-legacy/process-state.md)\
[Session info](session-info.md)
