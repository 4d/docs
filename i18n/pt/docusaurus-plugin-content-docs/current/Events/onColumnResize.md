---
id: onColumnResize
title: On Column Resize
---

| Code | Pode ser chamado por                                                                                                                                                                      | Definição                                                                                                                                |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 33   | [Área 4D View Pro](../FormObjects/viewProArea_overview.md) - [List Box](../FormObjects/listbox_overview.md) - [Columna de List Box ](../FormObjects/listbox_overview.md#list-box-columns) | A largura de uma coluna é modificada directamente pelo utilizador ou, consequentemente, por um redimensionamento da janela do formulário |

## Descrição

### List Box

Este evento é gerado quando a largura de uma coluna na caixa de listagem é modificada por um utilizador. El evento se activa "en directo", _es decir_, se envía continuamente durante el evento, mientras se redimensiona el list box o la columna en cuestión. Este redimensionamiento es realizado manualmente por un usuario, o puede ocurrir como resultado de que el list box y su(s) columna(s) sean redimensionados junto con la propia ventana del formulario (ya sea que el formulario sea redimensionado manualmente

> El evento `On Column Resize` no se activa cuando se redimensiona una [falsa columna](../FormObjects/properties_ResizingOptions.md#about-the-fake-blank-column).

### 4D View Pro

Este evento é gerado quando a largura de uma coluna é modificada por um usuário. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

| Propriedade | Tipo          | Descrição                                                                                                   |
| ----------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | On Column Resize                                                                                            |
| description | text          | "On Column Resize"                                                                                          |
| objectName  | text          | Nome da área 4D View Pro                                                                                    |
| sheetName   | text          | Nome da folha do evento                                                                                     |
| range       | object        | Intervalo de células das colunas cujas larguras foram alteradas                                             |
| header      | boolean       | True se a coluna de cabeçalho da linha (primeira coluna) for redimensionada, senão false |

#### Exemplo

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```
