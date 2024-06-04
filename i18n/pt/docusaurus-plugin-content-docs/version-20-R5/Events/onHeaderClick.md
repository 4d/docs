---
id: onHeaderClick
title: On Header Click
---

| Code | Pode ser chamado por                                                                                                                                                             | Definição                                   |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 42   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) | Ocorre um clique no cabeçalho de uma coluna |

## Descrição

### List Box

This event is generated when a click occurs on the header of a column in the list box. En este caso, el comando `Self` permite identificar el encabezado de la columna sobre la que se ha hecho clic.

Si se seleccionó la propiedad [Sortable](FormObjects/properties_Action.md#sortable) para el list box, se puede decidir si se autoriza o no una ordenación estándar de la columna pasando el valor 0 o -1 en la variable `$0`:

- Si `$0` es igual a 0, se realiza una ordenación estándar.
- Si `$0` es igual a -1, no se realiza una ordenación estándar y el encabezado no muestra la flecha de ordenación. The developer can still generate a column sort based on customized sort criteria using the 4D language.

Si la propiedad [Sortable](FormObjects/properties_Action.md#sortable) no está seleccionada para el list box, la variable `$0` no se utiliza.

### 4D View Pro

This event is generated when the user clicks on a column or row header in a 4D View Pro document. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

| Propriedade | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | 42                                                                                                                                                                                                                                                                                                                                                                                                             |
| description | text          | "On Header Click"                                                                                                                                                                                                                                                                                                                                                                                              |
| objectName  | text          | Nome da área 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                       |
| sheetName   | text          | Nome da folha do evento                                                                                                                                                                                                                                                                                                                                                                                        |
| range       | object        | Intervalo de células                                                                                                                                                                                                                                                                                                                                                                                           |
| sheetArea   | inteiro longo | The sheet location where the event took place:<br/><li>0: The crossing area between column number/letter headers (top left of the sheet)</li><li>1: The column headers (area indicating the column numbers/letters)</li><li>2: The row headers (area indicating the row numbers)</li> |

#### Exemplo

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
