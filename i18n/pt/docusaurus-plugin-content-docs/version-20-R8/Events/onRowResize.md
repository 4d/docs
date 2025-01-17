---
id: onRowResize
title: On Row Resize
---

| Code | Pode ser chamado por                                    | Definição                                                    |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------ |
| 60   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | A altura de uma linha é modificada por um usuário com o rato |

## Descrição

Esse evento é gerado quando a altura de uma linha é modificada por um usuário em um documento 4D View Pro. Nesse contexto, o [objeto evento] (overview.md#event-object) retornado pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                                  |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | 60                                                                                                         |
| description | text          | "On Row Resize"                                                                                            |
| objectName  | text          | Nome da área 4D View Pro                                                                                   |
| sheetName   | text          | Nome da folha do evento                                                                                    |
| range       | object        | Intervalo de células das linhas cujas alturas foram alteradas                                              |
| header      | boolean       | True se a linha da coluna de cabeçalho (primeira linha) for redimensionada, senão false |

#### Exemplo

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```
