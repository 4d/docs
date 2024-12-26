---
id: before-selection
title: Before selection
slug: /commands/before-selection
displayed_sidebar: docs
---

<!--REF #_command_.Before selection.Syntax-->**Before selection** {( *tabla* )} : Boolean<!-- END REF-->
<!--REF #_command_.Before selection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual probar si el puntero se encuentra antes del primer registro seleccionado o Tabla por defecto, si se omite |
| Resultado | Boolean | &#8592; | Sí (TRUE) o No (FALSE) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Before selection.Summary-->**Before selection** devuelve TRUE cuando el puntero del registro actual se encuentra antes del primer registro de la selección actual de *tabla*.<!-- END REF-->generalmente es utilizado para verificar si el comando [PREVIOUS RECORD](previous-record.md) ha movido el puntero del registro actual antes del primer registro. Si la selección actual está vacía, **Before selection** devuelve TRUE.

Para mover el puntero del registro actual a la selección, utilice los comandos [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) o [GOTO SELECTED RECORD](goto-selected-record.md). [NEXT RECORD](next-record.md) no mueve el puntero a la selección.

**Before selection** devuelve TRUE en el encabezado cuando un informe está imprimiéndose con [PRINT SELECTION](print-selection.md) o a partir del comando de menú Imprimir. Puede utilizar el siguiente código para probar el primer encabezado e imprimir un encabezado especial para la primera página:

```4d
  // Método de un formulario de salida utilizado para un informe
 $vpFormTable:=Current form table
 Case of
  // ...
    :(Form event code=On Header)
  // El área encabezado va a imprimirse
       Case of
          :(Before selection($vpFormTable->))
  // El código para la primera ruptura del encabezado va acá
  // ...
       End case
 End case
```

#### Ejemplo 

Este método de formulario se utiliza durante la impresión de un informe. Define una variable, *vTitle*, para imprimir en el área del encabezado en la primera página:

```4d
  // Método de formulario [Finances];"Summary"
 Case of
  // ...
    :(Form event code=On Header)
       Case of
          :(Before selection([Finances))
             vTitle:="Informe de finanzas de 1997" // Definir el título para la primera página
          Else
             vTitle:="" // Borrar el título para todas las otras páginas
       End case
 End case
```

#### Ver también 

[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[Form event code](form-event-code.md)  
[PREVIOUS RECORD](previous-record.md)  
[PRINT SELECTION](print-selection.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 198 |
| Hilo seguro | &check; |


