---
id: onAfterEdit
title: On After Edit
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                   | Definição                                                               |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 45   | [Área 4D View Pro](../FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](../FormObjects/writeProArea_overview.md) - [Caixa de Combinação](FormObjects/comboBox_overview.md) - Formulário - [Entrada](FormObjects/input_overview.md) - [Lista Hierárquica](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | O conteúdo do objecto inserível que tem o foco acabou de ser modificado |

## Descrição

### Caso geral

Este evento pode ser usado para filtrar a entrada de dados nos objetos digitáveis do teclado no nível mais baixo.

Quando é usado, este evento é gerado após cada alteração feita no conteúdo de um objeto inserível, independentemente da ação que causou a alteração, _ou seja_:

- Ações de edição padrão que modificam conteúdo como colar, cortar, excluir ou cancelar;
- Eliminar um valor (ação semelhante a colar);
- Qualquer entrada de teclado feita pelo usuário; neste caso, o evento `On After Edit` é gerado após os eventos [`On Before Keystroke`](onBeforeKeystroke.md) e [`On After Keystroke`](onAfterKeystroke.md), se eles forem utilizados.
- Qualquer modificação feita usando um comando de linguagem que simula uma ação do usuário (ou seja, `POST KEY`).

No evento `No After Edit`, os dados de texto sendo inseridos são retornados pelo comando [`Obter texto editado`](https://doc.4d.com/4dv19/help/command/en/page655.html).

### 4D View Pro

O objeto devolvido pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                           |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | On After Edit                                                                                       |
| description | text          | "On After Edit"                                                                                     |
| objectName  | text          | Nome da área 4D View Pro                                                                            |
| sheetName   | text          | Nome da folha do evento                                                                             |
| action      | text          | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

Dependendo do valor da propriedade `action`, o [objeto do evento](overview.md#event-object) irá conter propriedades adicionais.

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

| Propriedade | Tipo    | Descrição                                                             |
| ----------- | ------- | --------------------------------------------------------------------- |
| fromRange   | object  | Intervalo do células de origem (a ser arrastado)   |
| toRange     | object  | Intervalo de células de destino (local de largada) |
| copy        | boolean | Especifica se o intervalo fonte é copiado ou não                      |
| insert      | boolean | Especifica se o intervalo fonte é inserido ou não                     |

#### action = DragFillBlock

| Propriedade   | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fillRange     | object        | Intervalo utilizado para o preenchimento                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| autoFillType  | inteiro longo | Valor usado para o preenchimento.<li>0: As células são preenchidas com todos os dados (valores, formatação e fórmulas)</li><li>1: As células são preenchidas com dados sequenciais automáticos</li><li>2: As células são preenchidas apenas com formatação</li><li>3: As células são preenchidas com valores, mas sem formatação</li><li>4: Os valores são removidos das células</li><li>5: As células são preenchidas automaticamente</li> |
| fillDirection | inteiro longo | Direção do preenchimento.<li>0: As células à esquerda são preenchidas</li><li>1: As células à direita são preenchidas</li><li>2: as células acima são preenchidas</li><li>3: As células abaixo são preenchidas</li>                                                                                                                                                                                                                                                                            |

#### action = formulaChanged

| Propriedade | Tipo   | Descrição             |
| ----------- | ------ | --------------------- |
| range       | object | Intervalo de células  |
| formula     | text   | A fórmula introduzida |

#### action = clipboardPasted

| Propriedade | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| range       | object        | Intervalo de células                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| pasteOption | inteiro longo | Especifica o que foi colado na área de transferência:<li>0: Tudo é colado (valores, formatação, e fórmulas<li>1: Apenas os valores são colados</li><li>2: Apenas a formatação é colada</li><li>3: Somente as fórmulas são coladas</li><li>4: Os valores e a formatação são colados (não as fórmulas)</li><li>5: Fórmulas e formatação são coladas (não os valores)</li> |
| pasteData   | object        | Os dados da área de transferência para serem colados<li>"text" (texto): O texto da área de transferência</li><li>"html" (texto): O HTML da área de transferência</li>                                                                                                                                                                                                                                                                                                      |

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
