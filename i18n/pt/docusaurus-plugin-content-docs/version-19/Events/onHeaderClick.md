---
id: onHeaderClick
title: On Header Click
---

| Code | Pode ser chamado por                                                                                                                                                           | Definição                                   |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 42   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Ocorre um clique no cabeçalho de uma coluna |

## Descrição

### List Box

This event is generated when a click occurs on the header of a column in the list box. In this case, the `Self` command lets you find out the header of the column that was clicked.

Se a propriedade [Ordenável](FormObjects/properties_Action.md#sortable) foi selecionada no list box, você pode decidir se autoriza ou não um tipo padrão de coluna passando o valor 0, ou -1 na variável `$0`:

- Se `$0` é igual a 0, é efetuada uma ordenação padrão.
- If `$0` equals -1, a standard sort is not performed and the header does not display the sort arrow. The developer can still generate a column sort based on customized sort criteria using the 4D language.

Se a propriedade [Ordenável](FormObjects/properties_Action.md#sortable) não está selecionada no list box, a variável `$0` não é usada.

### 4D View Pro

This event is generated when the user clicks on a column or row header in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedade | Tipo          | Descrição                                                                                                                        |
| ----------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | 42                                                                                                                               |
| description | text          | "On Header Click"                                                                                                                |
| objectName  | text          | Nome da área 4D View Pro                                                                                                         |
| sheetName   | text          | Nome da folha do evento                                                                                                          |
| range       | object        | Intervalo de células                                                                                                             |
| sheetArea   | inteiro longo | O local da folha onde o evento teve lugar:<br/><li>0: The crossing area between column number/letter headers (top left of the sheet)</li><li>1: os cabeçalhos das colunas (área que indica os números/letras das colunas)</li><li>2: os cabeçalhos das linhas (área que indica os números das linhas)</li> |

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
