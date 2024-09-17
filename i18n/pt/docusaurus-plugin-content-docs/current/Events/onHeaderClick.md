---
id: onHeaderClick
title: On Header Click
---

| Code | Pode ser chamado por                                                                                                                                                             | Definição                                   |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 42   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) | Ocorre um clique no cabeçalho de uma coluna |

## Descrição

### List Box

This event is generated when a click occurs on the header of a column in the list box. Nesse caso, o comando `Self` permite que você descubra o cabeçalho da coluna clicada.

Se a propriedade [Sortable](FormObjects/properties_Action.md#sortable) tiver sido selecionada para o list box, você poderá decidir se autoriza ou não uma classificação padrão da coluna passando o valor 0, ou -1 na variável `$0`:

- Se `$0` for igual a 0, é efetuada uma ordenação padrão.
- Se `$0` for igual a -1, uma classificação padrão não será executada e o cabeçalho não exibirá a seta de classificação. The developer can still generate a column sort based on customized sort criteria using the 4D language.

Se a propriedade [Sortable](FormObjects/properties_Action.md#sortable) não estiver selecionada para o list box, a variável `$0` não será usada.

### 4D View Pro

This event is generated when the user clicks on a column or row header in a 4D View Pro document. Nesse contexto, o [objeto evento] (overview.md#event-object) retornado pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | 42                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| description | text          | "On Header Click"                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| objectName  | text          | Nome da área 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| sheetName   | text          | Nome da folha do evento                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| range       | object        | Intervalo de células                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| sheetArea   | inteiro longo | A localização da planilha onde o evento ocorreu:<br/><li>0: A área de cruzamento entre os cabeçalhos de números/letras das colunas (canto superior esquerdo da planilha)</li><li>1: os cabeçalhos de coluna (área que indica os números/letras das colunas)</li><li>2: Os cabeçalhos de linha (área que indica os números da linha)</li> |

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
