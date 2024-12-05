---
id: on-event-call
title: ON EVENT CALL
slug: /commands/on-event-call
displayed_sidebar: docs
---

<!--REF #_command_.ON EVENT CALL.Syntax-->**ON EVENT CALL** ( *metodoEvento* {; *nombreProceso*} )<!-- END REF-->
<!--REF #_command_.ON EVENT CALL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodoEvento | Text | &#8594;  | Método de evento a llamar, o Cadena vacía para detener la interceptación de eventos |
| nombreProceso | Text | &#8594;  | Nombre del proceso |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ON EVENT CALL.Summary-->El comando **ON EVENT CALL** instala el método, cuyo nombre se pasa en *metodoEvento*, como método de gestión de eventos.<!-- END REF--> 

**Consejo:** este comando necesita un nivel de conocimiento avanzado en programación. Generalmente, no necesita utilizar **ON EVENT CALL** para trabajar con eventos. Cuando utiliza formularios, 4D administra los eventos y los envía a los objetos y formularios apropiados. 

**Consejo:** comandos tales como [MOUSE POSITION](mouse-position.md), [Shift down](shift-down.md), etc., para obtener información sobre eventos. Estos comandos pueden llamarse desde los métodos de objeto para obtener la información que necesita sobre un evento involucrado con un objeto. Utilizarlos le ahorra la escritura de un algoritmo basado en una estructura de tipo **ON EVENT CALL**.

El alcance de este comando es la sesión de trabajo actual. Por defecto, el método se ejecuta en un proceso local separado. Sólo puede tener un método de gestión de eventos a la vez. Para detener un método de gestión de eventos, llame nuevamente **ON EVENT CALL** y pase una cadena vacía en *metodoEvento*.

Como el método de gestión de eventos se ejecuta en un proceso separado, está activo constantemente, incluso si ningún método de 4D se está ejecutando. Después de la instalación, 4D llama al método de gestión de eventos cada vez que ocurre un evento. Un evento puede ser un clic con el ratón o presionar una tecla. 

El parámetro opcional *nomProces* da nombre al proceso creado por el comando ON EVENT CALL. Si *nomProces* comienza por el símbolo pesos (*$*), comienza un proceso local, lo cual generalmente es lo que usted quiere. Si omite el parámetro *nomProces*, 4D crea por defecto un proceso local llamado *$Event Manager*.

**Advertencia:** sea muy cuidadoso con lo que escribe en un método de gestión de eventos. NO llame comandos que generen eventos, de lo contrario será extremadamente difícil salir de la ejecución del método de gestión de eventos. La combinación de teclas **Ctrl+Mayús+Retroceso** (en Windows) o **Comando-Mayús-Control-Retroceso** (en Mac) le permite matar el proceso en el Gestor de eventos. Podría utilizar esta técnica para recuperar un método de gestión de eventos incontrolable (por ejemplo, uno que tenga eventos que disparen bugs).

En el método de gestión de eventos, puede leer las siguientes variables sistema MouseDown, KeyCode, Modifiers, MouseX, MouseY y MouseProc. Note que estas variables son variables proceso. Su alcance es por lo tanto el proceso de gestión de eventos. Cópielas en las variables interproceso si quiere que sus valores estén disponibles en otro proceso.

* La variable sistema MouseDown toma el valor 1 si el evento es un clic del ratón y 0 si no.
* La variable sistema KeyCode contiene el código del carácter digitado en el teclado o el código de una tecla de función. Consulte las secciones *Códigos Unicode* y [EXPORT TEXT](export-text.md) que listan los códigos de caracteres utilizados por 4D, así como también la sección *Códigos de teclas de función*.4D ofrece constantes predefinidas para los principales y teclas de funciones. En la ventana del explorador, busque los temas de estas constantes.
* La variable sistema Modifiers contiene el valor modificador. Indica si una tecla de modificación ha sido presionada cuando el evento ocurrió. Las siguientes teclas pueden ser detectadas:  

| **Plataforma** | **Modificadores**                                            |  
| -------------- | ------------------------------------------------------------ |  
| Windows        | Mayús, Bloqueo de mayúsculas, Alt, Ctrl,                     |  
| Macintosh      | Mayús, Bloqueo de mayúsculas, Alt u Opción, Comando, Control |  
    
Las teclas modificadoras no generan un evento por su cuenta; otra tecla o el botón del ratón también deben ser presionadas. La variable Modifiers es una variable Entero largo que contiene un campo de bits. 4D ofrece constantes predefinidas que especifican la posición del bit o la máscara de bits para cada tecla de modificación. Por ejemplo, para detectar si la tecla Mayús fue presionada para el evento, puede escribir:  
```4d  
 If(Modifiers?? Shift key bit) //Si la tecla Mayús fue presionada  
```  
    
o:  
```4d  
 If((Modifiers&Shift key mask)#0) //Si la tecla Mayús fue presionada  
```  
    
Puede utilizar una de las siguientes constantes, dependiendo de la tecla del modificador a probar en la plataforma, que se encuentra en el tema *Eventos (Modificadores)*:  

| **Modificador**                      | **Constante**                          |  
| ------------------------------------ | -------------------------------------- |  
| Mayúscula                            | Shift key bit / Shift key mask         |  
| Bloqueo de mayúsculas                | Caps lock key bit / Caps lock key mask |  
| Alt (también llamado Opción en OS X) | Option key bit / Option key mask       |  
| Ctrl en Windows                      | Command key bit / Command key mask     |  
| Ctrl en OS X                         | Control key bit / Control key mask     |  
| Comando en OS X                      | Command key bit / Command key mask     |  
| Clic derecho                         | Control key bit / Control key mask     |
* Las variables sistema MouseX y MouseY contienen las posiciones horizontal y vertical del clic del ratón, expresadas en el sistema de coordenadas locales de la ventana donde el clic se produjo. La esquina superior izquierda de la ventana es la posición 0,0\. Estas variables son significativas sólo cuando hay un clic del ratón.
* La variable sistema MouseProc contiene el número de referencia del proceso en el cual ocurrió el evento (clic del ratón).

**Importante:** las variables sistema MouseDown, KeyCode, Modifiers, MouseX, MouseY y MouseProc sólo contienen valores significativos en un método de gestión de eventos instalado con **ON EVENT CALL**.

#### Ejemplo 

Este ejemplo cancela la impresión si el usuario presiona las teclas Ctrl+punto. Primero, el método de gestión de eventos se instala. Luego aparece un mensaje, anunciando que el usuario puede cancelar la impresión. Si la variable interproceso *vbWeStop* es igual a True en el método de gestión de eventos, una caja de diálogo de alerta aparece para mostrar al usuario el número de registros que han sido impresos. Luego el método de gestión de eventos se desinstala:

```4d
 PAGE SETUP
 If(OK=1)
    ◊vbWeStop:=False
    ON EVENT CALL("GESTIÓN DE EVENTOS") // Instala el método de gestión de eventos
    ALL RECORDS([Personas])
    MESSAGE("Para interrumpir la impresión presione Ctrl+Punto.")
    $vlNbRegistros:=Records in selection([People])
    For($vlRegistro;1;$vlNbRegistros)
       If(◊vbWeStop)
          ALERT("Printing cancelled at record "+String($vlRegistro)+" of "+String($vlNbRegistros))
          $vlRegistro:=$vlNbRegistros+1
       Else
          Print form([Personas];"Informe especial")
       End if
    End for
    PAGE BREAK
    ON EVENT CALL("") // Desinstala el método de gestión de eventos
 End if
```

Si se ha presionado la combinación Ctrl+punto, el método de gestión de eventos da a *vbWeStop* el valor True:

```4d
  // Método de proyecto GESTIÓN DE EVENTOS
 If((Modifiers?? Command key bit)&(KeyCode=Period))
    CONFIRM("¿Está seguro?")
    If(OK=1)
       ◊vbWeStop:=True
       FILTER EVENT // NO olvide este llamado; de lo contrario 4D también obtendrá este evento
    End if
 End if
```

Note que este ejemplo utiliza ON EVENT CALL porque realiza un informe especial de impresión utilizando los comandos *PAGE SETUP*, [Print form](../commands/print-form.md "Print form") y [PAGE BREAK](page-break.md "PAGE BREAK") en una estructura de tipo bucle *For...End for*.   
Si imprime un informe utilizando [PRINT SELECTION](print-selection.md "PRINT SELECTION"), NO necesita administrar los eventos que permiten al usuario interrumpir la impresión; [PRINT SELECTION](print-selection.md "PRINT SELECTION") hace esto por usted.

#### Ver también 

[FILTER EVENT](filter-event.md)  
[MOUSE POSITION](mouse-position.md)  
[Method called on event](method-called-on-event.md)  
[Shift down](shift-down.md)  