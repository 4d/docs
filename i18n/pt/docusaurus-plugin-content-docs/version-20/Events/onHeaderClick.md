---
id: onHeaderClick
title: On Header Click
---

| Code | Pode ser chamado por                                                                                                                                                           | Definição                                   |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 42   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Ocorre um clique no cabeçalho de uma coluna |


## Descrição

### List Box

Esse evento é gerado quando ocorre um clique no cabeçalho de uma coluna de list box. Nesse caso, o comando `Self` permite que você descubra o cabeçalho da coluna clicada.

Se a propriedade [Sortable](FormObjects/properties_Action.md#sortable) foi selecionada no list box, você pode decidir se autoriza ou não um tipo padrão de coluna passando o valor 0, ou -1 na variável `$0`:

- Se `$0` é igual a 0, é efetuada uma ordenação padrão.
- Se `$0` for igual a -1, uma classificação padrão não será executada e o cabeçalho não exibirá a seta de classificação. O desenvolvedor ainda pode gerar uma classificação de coluna com base em critérios de classificação personalizados usando a linguagem 4D.

Se a propriedade [Sortable](FormObjects/properties_Action.md#sortable) não está selecionada no list box, a variável `$0` não é usada.

### 4D View Pro

Esse evento é gerado quando o usuário clica em um cabeçalho de coluna ou linha em um documento 4D View Pro. Neste contexto, o [objeto evento](overview.md#event-object) retornado pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                                                        |
| ----------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | 42                                                                                                                               |
| description | text          | "On Header Click"                                                                                                                |
| objectName  | text          | Nome da área 4D View Pro                                                                                                         |
| sheetName   | text          | Nome da folha do evento                                                                                                          |
| range       | object        | Intervalo de células                                                                                                             |
| sheetArea   | inteiro longo | O local da folha onde o evento teve lugar:<br/><li>0: a área de cruzamento entre o número da coluna / cabeçalhos de letras (canto superior esquerdo da folha)</li><li>1: os cabeçalhos das colunas (área que indica os números/letras das colunas)</li><li>2: os cabeçalhos das linhas (área que indica os números das linhas)</li> |

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