---
id: process-properties
title: PROCESS PROPERTIES
slug: /commands/process-properties
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS PROPERTIES.Syntax-->**PROCESS PROPERTIES** ( *proceso* ; *procNom* ; *procEstado* ; *procTiempo* {; *procVisible* {; *unicoID* {; *origen*}}} )<!-- END REF-->
<!--REF #_command_.PROCESS PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &srarr; | Número del proceso |
| procNom | Text | &harr; | Nombre del proceso |
| procEstado | Integer | &harr; | Estado del proceso |
| procTiempo | Integer | &harr; | Tiempo acumulado de ejecución del proceso en tics |
| procVisible | Boolean, Integer | &harr; | Visible (TRUE) u Oculto (FALSE) |
| unicoID | Integer | &harr; | Número único del proceso |
| origen | Integer | &harr; | Origen del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PROCESS PROPERTIES.Summary-->El comando PROCESS PROPERTIES devuelve diferente información sobre el proceso cuyo número de proceso se pasa en *proceso*.<!-- END REF-->

**Nota**: si el proceso no existe, lo que significa que no pasó en el proceso un número en el rango de 1 a [Count tasks](count-tasks.md), **PROCESS PROPERTIES** deja los parámetros variables sin cambios.

Después de la llamada:

* *procNom* devuelve el nombre del proceso. Algunos puntos a tener en cuenta acerca del nombre del proceso:
   * Si el proceso fue iniciado desde la caja de diálogo **Ejecutar un método** (con la opción **Nuevo proceso** seleccionada), su nombre es “P\_” seguido por un número.
   * Si el proceso fue iniciado a partir de un comando de menú personalizado cuya propiedad **Iniciar un nuevo proceso** es seleccionada, el nombre del proceso es “M\_” o “ML\_” seguido por un número.
   * Si el proceso fue iniciado por el servidor web, su nombres es "Web Process#" seguido por un UUID.
   * Si el proceso ha sido suspendido (y su “espacio” no ha sido reutilizado), aún se devuelve el nombre del proceso. Para detectar si un proceso esta suspendido, pruebe *procEstado=-1* (ver a continuación).
* *procEstado* devuelve el estado del proceso en el momento de la llamada. Este parámetro puede devolver uno de los valores ofrecidos por las siguientes constantes predefinidas:  
| Constante                 | Tipo         | Valor |  
| ------------------------- | ------------ | ----- |  
| Does not exist            | Entero largo | \-100 |  
| Aborted                   | Entero largo | \-1   |  
| Executing                 | Entero largo | 0     |  
| Delayed                   | Entero largo | 1     |  
| Waiting for user event    | Entero largo | 2     |  
| Waiting for input output  | Entero largo | 3     |  
| Waiting for internal flag | Entero largo | 4     |  
| Paused                    | Entero largo | 5     |
* *procTiempo* devuelve el tiempo acumulado que el proceso ha utilizado desde que comenzó, en tics (1/60 de segundo).
* El parámetro opcional *procModo* puede ser una variable de tipo booleano o entero largo:  
   * Si es de tipo Booleano, devuelve True si el proceso es visible y False si está oculto.  
   * Si es de tipo entero largo, después de la ejecución del método, contiene un campo de bits donde los dos primeros bits son definidos:  
   * * bit 0 devuelve la propiedad de visibilidad: 1 si el proceso es visible y 0 si está oculto  
         * bit 1 devuelve la propiedad de modo apropiativo: 1 si el proceso se ejecuta en modo apropiativo y 0 si se ejecuta en modo cooperativo. Para mayor información, consulte la sección *Procesos 4D apropiativos*.
* *unicoID*, si se especifica, devuelve el número único del proceso. De hecho, cada proceso tiene un número de proceso así como un número único de proceso por sesión. Éste último permite diferenciar entre dos procesos o sesiones de proceso. Corresponde al número de procesos que han sido iniciados durante la sesión de la aplicación 4D.

##### 

* *origen*, si se especifica, devuelve un valor que describe el origen del proceso. 4D ofrece las siguientes constantes predefinidas (en el tema "*Tipo de proceso*"):  
    
| Constante                     | Tipo         | Valor | Comentario                             |  
| ----------------------------- | ------------ | ----- | -------------------------------------- |  
| Apple event manager           | Entero largo | \-7   |                                        |  
| Backup process                | Entero largo | \-19  |                                        |  
| Cache manager                 | Entero largo | \-4   |                                        |  
| Client manager process        | Entero largo | \-31  |                                        |  
| Compiler process              | Entero largo | \-29  |                                        |  
| Created from execution dialog | Entero largo | 3     |                                        |  
| Created from menu command     | Entero largo | 2     |                                        |  
| Design process                | Entero largo | \-2   |                                        |  
| Event manager                 | Entero largo | \-8   |                                        |  
| Execute on client process     | Entero largo | \-14  |                                        |  
| Execute on server process     | Entero largo | 1     |                                        |  
| External task                 | Entero largo | \-9   |                                        |  
| HTTP Log flusher              | Entero largo | \-58  |                                        |  
| Indexing process              | Entero largo | \-5   |                                        |  
| Internal 4D server process    | Entero largo | \-18  |                                        |  
| Internal timer process        | Entero largo | \-25  |                                        |  
| Log file process              | Entero largo | \-20  |                                        |  
| Main 4D process               | Entero largo | \-39  |                                        |  
| Main process                  | Entero largo | \-1   |                                        |  
| Method editor macro process   | Entero largo | \-17  |                                        |  
| Monitor process               | Entero largo | \-26  |                                        |  
| MSC process                   | Entero largo | \-22  |                                        |  
| None                          | Entero largo | 0     |                                        |  
| On exit process               | Entero largo | \-16  |                                        |  
| Other 4D process              | Entero largo | \-10  |                                        |  
| Other user process            | Entero largo | 4     |                                        |  
| Restore Process               | Entero largo | \-21  |                                        |  
| Serial Port Manager           | Entero largo | \-6   |                                        |  
| Server interface process      | Entero largo | \-15  |                                        |  
| SOAP process                  | Entero largo | \-33  |                                        |  
| SQL Method execution process  | Entero largo | \-24  |                                        |  
| Web process on 4D remote      | Entero largo | \-12  |                                        |  
| Web process with no context   | Entero largo | \-3   |                                        |  
| Web server process            | Entero largo | \-13  |                                        |  
| Web server spare process      | Entero largo | \-32  |                                        |  
| Worker process                | Entero largo | 5     | Procesos Worker lanzado por el usuario |  
    
    
**Nota:** los procesos internos de 4D devuelven un valor negativo y los procesos generados por el usuario devuelven un valor positivo.
  
  
#### Ejemplo 1 

El siguiente ejemplo devuelve el nombre, el estado, el tiempo tomado en las variables *vNom*, *vEstado,* y *vTiempoTransc* para el proceso actual:

```4d
 var vNom : Text // Inicializar las variables
 var vEstado : Integer
 var vTiempoTransc : Integer
 PROCESS PROPERTIES(Current process;vNom;vEstado;vTiempoTransc)
```

#### Ejemplo 2 

Ver el ejemplo de la sección Método de base On Exit Database.

#### Ejemplo 3 

Usted quiere conocer la visibilidad y el modo de ejecución del proceso actual. Puede escribir:

```4d
 var vName : Text
 var vState : Integer
 var vTime : Integer
 var vFlags : Integer
 var isVisible : Boolean
 var isPreemptive : Boolean
 PROCESS PROPERTIES(Current process;vName;vState;vTime;vFlags)
 isVisible:=vFlags?? 0 //true si visible
 isPreemptive:=vFlags?? 1 //true si apropiativo
```

#### Ver también 

[Count tasks](count-tasks.md)  
[Get process activity](get-process-activity.md)  
*Procesos 4D apropiativos*  
[Process state](process-state.md)  