---
id: trace
title: TRACE
slug: /commands/trace
displayed_sidebar: docs
---

<!--REF #_command_.TRACE.Syntax-->**TRACE**<!-- END REF-->
<!--REF #_command_.TRACE.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.TRACE.Summary-->El comando **TRACE** se utiliza para ejecutar paso a paso métodos durante el desarrollo de una base.<!-- END REF-->

El comando **TRACE** muestra el depurador de 4D en el proceso actual. La ventana del *Depurador* aparece antes de la ejecución de la línea de código siguiente, y continúa para cada línea de código que se ejecuta. Igualmente puede llamar manualmente al depurador presionando **Alt+Mayús+clic derecho** (Windows) o **Control+Opción+comando+clic** (Macintosh) durante la ejecución del código.

El comando **TRACE** se ignora en bases compiladas.

**4D Server:** si llama **TRACE** desde un método proyecto ejecutado en el contexto de un Procedimiento almacenado, la ventana del depurador aparece en el equipo servidor.

**Consejo:** no llame **TRACE** cuando utilice un formulario para el cual los eventos On Activate y On Deactivate hayan sido activados. Cada vez que la ventana del depurador aparezca, estos eventos serán invocados; esto creará un bucle infinito entre estos eventos y la ventana del depurador. Si termina en esta situación, utilice la combinación **Mayús+clic** en el botón **Reanudar** del depurador para salir de ahí. Cualquier llamada posterior a **TRACE** dentro del proceso será ignorada.

#### Ejemplo 

El siguiente código espera que la variable proceso CREAR\_LENG sea igual a “US” o “FR”. Si no es el caso, llama al método de proyecto DEBUG:

```4d
  // ...
 Case of
    :(CREAR_LENG="US")
       vsBHCmdNom:=[Comandos]CM US Nom
    :(CREAR_LENG="FR")
       vsBHCmdNom:=[Comandos]CM FR Nom
    Else
       DEBUG("Valor de CREAR_LENG")
 End case
```

El método de proyecto DEBUG se lista aquí:

```4d
  // Método de proyecto DEBUG
  // DEBUG (Texto)
  // DEBUG (Información opcional de depuración)
 
 var $1 : Text
 
 If(◊vbDebugOn) // Variable interproceso definida en el Método On Startup
    If(Compiled application)
       If(Count parameters>=1)
          ALERT($1+Char(13)+"Llamar al diseñador al x911")
       End if
    Else
       TRACE
    End if
 End if
```
