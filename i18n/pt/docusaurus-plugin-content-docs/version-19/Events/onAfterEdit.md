---
id: onAfterEdit
title: On After Edit
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                  | Definição                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 45   | [4D View Pro area](FormObjects/viewProArea_overview) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | O conteúdo do objecto inserível que tem o foco acabou de ser modificado |

## Descrição

### Caso geral

This event can be used filter the data entry in keyboard enterable objects at the lowest level.

When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, *i.e.*:

- Standard editing actions which modify content like paste, cut, delete or cancel;
- Eliminar um valor (ação semelhante a colar);
- Any keyboard entry made by the user; in this case, the `On After Edit` event is generated after the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke`](onAfterKeystroke.md) events, if they are used.
- Any modification made using a language command that simulates a user action (i.e., `POST KEY`).

No evento `On After Edit`, os dados texto introduzidos são devolvidos pelo comando [`Get edited text`](https://doc.4d.com/4dv19/help/command/en/page655.html).

### 4D View Pro

O objecto devolvido pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                           |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | On After Edit                                                                                       |
| description | text          | "On After Edit"                                                                                     |
| objectName  | text          | Nome da área 4D View Pro                                                                            |
| sheetName   | text          | Nome da folha do evento                                                                             |
| action      | text          | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

Dependendo do valor da propriedade `action`, o [objeto de evento](overview.md#event-object) conterá propriedades adicionais.

#### action = editChange

| Propriedade | Tipo    | Descrição                |
| ----------- | ------- | ------------------------ |
| range       | object  | Intervalo de células     |
| editingText | variant | O valor do editor actual |

#### action = valueChanged

| Propriedade | Tipo    | Descrição                          |
| ----------- | ------- | ---------------------------------- |
| range       | object  | Intervalo de células               |
| oldValue    | variant | Valor da célula antes da alteração |
| newValue    | variant | Valor da célula após a alteração   |

#### action = DragDropBlock

| Propriedade | Tipo    | Descrição                                          |
| ----------- | ------- | -------------------------------------------------- |
| fromRange   | object  | Intervalo do células de origem (a ser arrastado)   |
| toRange     | object  | Intervalo de células de destino (local de largada) |
| copy        | boolean | Especifica se o intervalo fonte é copiado ou não   |
| insert      | boolean | Especifica se o intervalo fonte é inserido ou não  |

#### action = DragFillBlock

| Propriedade | Tipo   | Descrição                                |
| ----------- | ------ | ---------------------------------------- |
| fillRange   | object | Intervalo utilizado para o preenchimento |
 autoFillType|longint|Valor utilizado para o enchimento.<li>0: as células são preenchidas com todos os dados (valores, formatação e fórmulas)</li><li>1: as células são preenchidas com dados automáticos sequenciais</li><li>2: As células são preenchidas apenas com formatação</li><li>3: as células são preenchidas com valores, mas não com formatação</li><li>4: Os valores são removidos das células</li><li>5: As células são preenchidas automaticamente</li>| |fillDirection|longint|Direction of the fill.<li>0: As células à esquerda são preenchidas</li><li>1: As células à direita estão preenchidas</li><li>2: As células acima estão preenchidas</li><li>3: As células abaixo estão preenchidas</li>|

#### action = formulaChanged

| Propriedade | Tipo   | Descrição             |
| ----------- | ------ | --------------------- |
| range       | object | Intervalo de células  |
| formula     | text   | A fórmula introduzida |

#### action = clipboardPasted

| Propriedade | Tipo          | Descrição                                                                                                                                                                                                       |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | object        | Intervalo de células                                                                                                                                                                                            |
| pasteOption | inteiro longo | Especifica o que é colado da área de transferência:<li>0: tudo é colado (valores, formatação e fórmulas)</li><li>1: apenas os valores são colados</li><li>2: Apenas a formatação é colada</li><li>3: somente as fórmulas são coladas</li><li>4: os valores e a formatação são colados (não as fórmulas)</li><li>5: as fórmulas e a formatação são coladas (não os valores)</li> |
| pasteData   | object        | Os dados da área de transferência a serem colados<li>"text" (texto): O texto da área de transferência</li><li>"html" (texto): O HTML da área de transferência</li>                                                                                                           |

#### Exemplo

Eis um exemplo de tratamento de um evento `On After Edit`:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
    End if
 End if
    End if
 End if
    End if
 End if
```

O exemplo acima poderia gerar um objeto evento como este:

```
{

"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
```
