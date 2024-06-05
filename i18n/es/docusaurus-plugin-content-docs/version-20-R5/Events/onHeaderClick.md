---
id: onHeaderClick
title: On Header Click
---

| Code | Puede ser llamado por                                                                                                                                                            | Definición                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 42   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) | Se produce un clic en el encabezado de columna |

## Descripción

### List Box

Este evento se genera cuando se hace clic en el encabezado de una columna de list box. En este caso, el comando `Self` permite identificar el encabezado de la columna sobre la que se ha hecho clic.

Si se seleccionó la propiedad [Sortable](FormObjects/properties_Action.md#sortable) para el list box, se puede decidir si se autoriza o no una ordenación estándar de la columna pasando el valor 0 o -1 en la variable `$0`:

- Si `$0` es igual a 0, se realiza una ordenación estándar.
- Si `$0` es igual a -1, no se realiza una ordenación estándar y el encabezado no muestra la flecha de ordenación. El desarrollador puede seguir generando una ordenación de columnas basada en criterios de ordenación personalizados utilizando el lenguaje 4D.

Si la propiedad [Sortable](FormObjects/properties_Action.md#sortable) no está seleccionada para el list box, la variable `$0` no se utiliza.

### 4D View Pro

Este evento se genera cuando el usuario hace clic en el encabezado de una columna o línea en un documento 4D View Pro. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

| Propiedad   | Tipo         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code        | entero largo | 42                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| description | text         | "On Header Click"                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| objectName  | text         | Nombre del área 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| sheetName   | text         | Nombre de la hoja del evento                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| range       | object       | Rango de celdas                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sheetArea   | entero largo | La ubicación de la hoja donde ocurrió el evento:<br/><li>0: el área de cruce entre los encabezados de números/letras de columna (arriba a la izquierda de la hoja)</li><li>1: Los encabezados de columna (área que indica los números/letras de columna)</li><li>2: Los encabezados de fila (área que indica los números de fila)</li> |

#### Ejemplo

```4d
 If(FORM Event.code=On Header Click)
    Case of
       :(FORM Event.sheetArea=1)
          $values:=VP Get values(FORM Event.range)
       :(FORM Event.sheetArea=2)
          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))
       :(FORM Event.sheetArea=0)
          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\
          New object("color";"#800080";"style";vk line style thick)))
    End case
 End if
```
