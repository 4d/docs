---
id: modify-record
title: MODIFY RECORD
slug: /commands/modify-record
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY RECORD.Syntax-->**MODIFY RECORD** ( {*tabla*}{;}{*} )<!-- END REF-->
<!--REF #_command_.MODIFY RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a utilizar para entrada de datos o Tabla por defecto, si se omite |
| * | Operator |  &#8594;  | Ocultar barras de desplazamiento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MODIFY RECORD.Summary-->El comando MODIFY RECORD permite al usuario modificar el registro actual de la tabla *tabla* o de la tabla por defecto si se omite el parámetro *tabla*.<!-- END REF--> MODIFY RECORD carga el registro, si no se ha cargado por el proceso actual y muestra el formulario de entrada actual. Si no hay registro actual, entonces MODIFY RECORD no hace nada. MODIFY RECORD no afecta la selección actual. 

El formulario aparece en la ventana del primer plano del proceso. La ventana tiene barras de desplazamiento y una caja de control del tamaño. Si pasa el parámetro opcional *\** la ventana aparece sin las barras de desplazamiento y sin la caja de control de tamaño. 

Para utilizar MODIFY RECORD, el registro actual debe tener acceso de lectura-escritura y no debe estar bloqueado.   
Si el formulario contiene botones de navegación entre los registros de la selección, MODIFY RECORD le permite al usuario hacer clic en los botones para modificar registros y moverse a otros registros.

El registro se guarda (aceptado) si el usuario hace clic en el botón Aceptar o presiona la tecla Intro (teclado numérico) o si se ejecuta el comando [ACCEPT](accept.md "ACCEPT"). 

El registro no se guarda si el usuario hace clic en un botón de tipo CANCELAR o presiona la combinación de teclas (Ctrl-Punto en Windows, Comando-Punto en Macintosh), o si se ejecuta el comando CANCEL.

Después de llamar MODIFY RECORD, la variable sistema OK toma el valor 1 si se acepta el registro y 0 si se cancela. 

**Nota:** el registro permanece en memoria, incluso cuando se cancela, y puede guardarse si se ejecuta [SAVE RECORD](save-record.md "SAVE RECORD") antes de que el puntero del registro actual cambie. 

Si está utilizando MODIFY RECORD y el usuario no realiza ninguna modificación al registro, no se considera que el registro haya sido modificado y aunque acepte el registro no se guardará nuevamente. Las acciones tales como el cambio del valor de variables, la selección de casillas de selección y de botones de radio no clasifican como modificaciones. Únicamente la modificación del valor de un campo, a través de una entrada manual o de un método, hace que el registro se guarde nuevamente.

#### Ejemplo 

Ver el ejemplo del comando [ADD RECORD](add-record.md "ADD RECORD").

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si se acepta el registro y 0 si se cancela. La variable OK no toma ningún valor hasta que el registro haya sido validado o anulado.

#### Ver también 

[ADD RECORD](add-record.md)  
[Locked](locked.md)  
[Modified record](modified-record.md)  
[READ WRITE](read-write.md)  
[UNLOAD RECORD](unload-record.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 57 |
| Hilo seguro | &cross; |
| Modifica variables | OK |
| Prohibido en el servidor ||


