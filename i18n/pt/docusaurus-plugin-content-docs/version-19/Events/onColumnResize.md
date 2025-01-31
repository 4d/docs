---
id: onColumnResize
title: On Column Resize
---

| Code | Pode ser chamado por                                                                                                                                                           | Definição                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 33   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | A largura de uma coluna é modificada directamente pelo utilizador ou, consequentemente, por um redimensionamento da janela do formulário |


## Descrição

### List Box

Este evento é gerado quando a largura de uma coluna na caixa de listagem é modificada por um utilizador. O evento é acionado “ao vivo”, *ou seja, *, ele é enviado continuamente durante o evento, enquanto o list box ou a coluna em questão está sendo redimensionado. Este redimensionamiento es realizado manualmente por un usuario, o puede ocurrir como resultado de que el list box y su(s) columna(s) sean redimensionados junto con la propia ventana del formulario (ya sea que el formulario sea redimensionado manualmente ou usando o comando `RESIZE FORMATO WINDOW`).

> O evento `On Column Resize` não é acionado quando um evento [falso coluna](FormObjects/propertiesResizingOptions.html#about-the-fake-blank-column) é redimensionado.

### 4D View Pro

Este evento é gerado quando a largura de uma coluna é modificada por um usuário. Neste contexto, o  [objeto de evento](overview.md#event-object) retornado pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                |
| ----------- | ------------- | ---------------------------------------------------------------------------------------- |
| code        | inteiro longo | On Column Resize                                                                         |
| description | text          | "On Column Resize"                                                                       |
| objectName  | text          | Nome da área 4D View Pro                                                                 |
| sheetName   | text          | Nome da folha do evento                                                                  |
| range       | object        | Intervalo de células das colunas cujas larguras foram alteradas                          |
| header      | boolean       | True se a coluna de cabeçalho da linha (primeira coluna) for redimensionada, senão false |

#### Exemplo

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```