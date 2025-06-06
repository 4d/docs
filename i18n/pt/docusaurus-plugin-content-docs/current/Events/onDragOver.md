---
id: onDragOver
title: On Drag Over
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definição                                   |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 21   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Os dados podem ser largados sobre um objeto |

## Descrição

O evento `Ao Arrastar Para` é repetidamente enviado para o objeto de destino quando o ponteiro do mouse é movido sobre o objeto. Em resposta a este evento, normalmente:

- Obtenha os dados e assinaturas encontrados no pasteboard (via o comando `GET PASTEBOARD DATA`).
- Dependendo da natureza e do tipo de dados na área de transferência, você **aceita** ou **rejeita** o arrastar e soltar.

Para **aceitar** a arraste, o método objeto de destino deve retornar 0 (zero).
Para **rejeitar** o arraste, o método objeto deve retornar -1 (menos um).
Durante um evento `Ao Arrastar Exterior`, o 4D trata o método do objeto como uma função. Se nenhum resultado for devolvido, 4D assume que o arrasto é aceite.

Se aceitar o arrastamento, o objeto de destino é realçado. Se rejeitar o arrastamento, o destino não é realçado. Aceitar a ação de arrastar não significa que os dados arrastados serão inseridos no objeto de destino. Isso significa apenas que se o botão do mouse for solto neste ponto, o objeto de destino aceitaria os dados arrastados e o evento [`On Drop`](onDrop.md) seria disparado.

Se você não processar o evento `On Drag Over` para um objeto soltável, esse objeto será destacado para todas as operações de arrastar, não importa qual seja a natureza e o tipo dos dados arrastados.

O evento `On Drag Over` é a maneira pela qual você controla a primeira fase de uma operação de arrastar e soltar. Você não apenas pode testar se os dados arrastados são de um tipo compatível com o objeto de destino e então aceitar ou rejeitar o arrasto; mas também pode notificar simultaneamente o usuário deste fato, pois o 4D ressalta (ou não) o objeto de destino com base na sua decisão.

O código que manipula um evento 'On Drag Over' deve ser curto e executar rapidamente, porque esse evento é enviado repetidamente para o objeto de destino atual, devido aos movimentos do mouse.

### Exemplo

```4d
//Destination object method
 #DECLARE : Integer
 If(Form event code=On Drag Over)
    //returns 0 by default
    ...
    If($DataType=Is picture)
       return -1
    End if
    ...
 End if
```

#### Veja também

[`On Begin Drag Over`](onBeginDragOver.md)
