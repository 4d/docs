---
id: propertiesHelp
title: Ajuda
---

## Dica de Ajuda

This property allows associating help messages with active objects in your forms. Podem ser apresentados em tempo de execução:

![](../assets/en/FormObjects/property_helpTip.png)

> - O atraso de exibição e a duração máxima das dicas de ajuda podem ser controlados usando os seletores `Tips delay` e `Tips duration` do comando **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)**.
> - As dicas de ajuda podem ser globalmente desativadas ou ativadas para a aplicação usando o seletor do comando [**SET DATABASE PARAMETER**](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html).

Você também pode:

- designe uma dica de ajuda existente, previamente especificada no editor de [dicas de ajuda](https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html) de 4D.
- ou introduzir a mensagem de ajuda diretamente como uma cadeia de caracteres. Isto permite-lhe tirar partido da arquitetura XLIFF. Você pode inserir uma referência XLIFF aqui para exibir uma mensagem no idioma da aplicação (para obter mais informações sobre XLIFF, consulte [Apêndice B: Arquitetura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html). También puede utilizar referencias 4D ([ver Uso de referencias en texto estático](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).

> \> > In macOS, displaying help tips is not supported in pop-up type windows.

#### Gramática JSON

|   Nome  | Tipo de dados | Valores possíveis                             |
| :-----: | :-----------: | --------------------------------------------- |
| tooltip |      text     | informações adicionais para ajudar um usuário |

#### Objectos suportados

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md)  - [Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up menu](picturePopupMenu_overview.md) - [Radio Button](radio_overview.md)

#### Outras funcionalidades de ajuda

Você também pode associar mensagens de ajuda a objetos de formulário de duas outras maneiras:

- ao nível da estrutura da base de dados (apenas campos). Neste caso, a dica de ajuda do campo é apresentada em todos os formulários em que aparece. Para obter mais informações, consulte "Dicas de ajuda" em [Propriedades dos campos](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- usando o comando **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)**, para o processo atual.

When different tips are associated with the same object in several locations, the following priority order is applied:

1. nível de estrutura (prioridade mais baixa)
2. nível do editor de formulários
3. Comando **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** (prioridade mais alta)

#### Veja também

[Marcador de posição](properties_Entry.md#placeholder)
