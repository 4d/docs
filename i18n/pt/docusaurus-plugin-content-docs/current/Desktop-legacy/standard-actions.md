---
id: standard-actions
title: Ações padrão
slug: /Desktop/standard-actions
displayed_sidebar: docs
---

## Descrição

### Atribuição ou execução de ações padrão

As ações padrão podem ser usadas de diversas formas:

- como ações para [botões](../FormObjects/button_overview.md) e vários objetos de formulário, como [caixas de seleção](../FormObjects/checkbox_overview.md) ou [listas pop-up/drop-down](../FormObjects/dropdownList_Overview.md). As ações podem ser atribuídas a objetos de formulário na lista de Propriedades do editor de formulários ou usando o comando [OBJECT SET ACTION](../commands/object-set-action).
- como ações para comandos de menu. Eles podem ser atribuídos a comandos de menu no Editor de menus (ver [Especificando a ação de um menu](../Menus/properties.md)) ou usando o comando [SET MENU ITEM PROPERTY](../commands/set-menu-item-property).
- como ações para itens de lista (usados quando a lista está associada a uma lista pop-up/drop-down ou um menu pop-up hierárquico). Elas podem ser atribuídas a itens de lista no Editor de listas (ver [Criando e modificando listas](https://doc.4d.com/4Dv21/4D/21/Creating-and-modifying-lists.300-7676826.en.html)) ou usando o comando [SET LIST ITEM PARAMETER](../commands/set-list-item-parameter).
- como parâmetros para os comandos [INVOKE ACTION](../commands/invoke-action) e [Action info](../commands/ction-info).

Para objetos de formulário ou comandos de menu, é possível atribuir tanto uma ação padrão quanto um método. Nesse caso, a ação padrão é sempre executada após o método (exceto para a ação `deleteRecord`, ver abaixo).

### Parâmetros

Algumas ações padrão aceitam um parâmetro que define sua execução. A sintaxe a usar é semelhante à sintaxe de URL:

```4d 
standardActionName{?nameParameter=valueParameter}
```
onde:

- `standardActionName` é o nome da ação padrão (string).
- `nameParameter` (opcional) é o nome do parâmetro a ser passado (string).
- `valueParameter` (opcional) é o valor a ser definido (string, longint...).

Por exemplo, para definir uma ação `gotoPage(5)`, você pode escrever:

```4d 
gotoPage?value=5
```
Essa sintaxe está disponível onde quer que uma ação padrão possa ser definida, ou seja, na lista de Propriedades, no Editor de menus ou nos comandos da linguagem. Por exemplo, na lista de Propriedades:

![](../assets/en/Desktop-legacy/action-menu.png)




## Notas sobre objetos e ações

- Ações de edição como `cut`, `paste`... podem ser usadas com:
    * áreas editáveis padrão,
    * áreas de texto [multistilo](../FormObjects/properties_Text.md#multi-style)
    * [áreas 4D Write Pro](../FormObjects/writeProArea_overview.md).
- Ações de fontes, expressões e verificação ortográfica como `backgroundColor`, `computeExpressions`, `spell/autoCorrectionEnabled`... podem ser usadas com:
    * áreas de texto [multistilo](../FormObjects/properties_Text.md#multi-style)
    * [áreas 4D Write Pro](../FormObjects/writeProArea_overview.md).
- As ações de verificação ortográfica estão disponíveis apenas se a [opção Verificação ortográfica automática](../FormObjects/properties_Entry.md#auto-spellcheck) estiver selecionada para a área.
- Quando um atributo de estilo como `fontSize` ou `color` é modificado por uma ação padrão, o 4D gera o evento de formulário `On After Edit`.
- *Botões* significa todos os botões e também inclui caixas de seleção que podem representar ações com status verdadeiro/falso, por exemplo, `fontBold`.
- Objetos de [listas Pop-Up/Drop-down](../FormObjects/dropdownList_Overview.md) e [lista de opções hierárquica](../FormObjects/dropdownList_Overview.md#using-a-hierarchical-choice-list) só podem ser associados diretamente a ações padrão que geram um submenu (lista), como `backgroundColor` ou `fontSize`. Nesse caso, eles exibem uma lista automática de valores, a menos que ações padrão personalizadas tenham sido definidas para itens de lista (ver abaixo).
- *Itens de lista*: se você não quiser usar valores automáticos, pode associar ações padrão personalizadas a itens de uma lista (usando o Editor de listas ou o comando [SET LIST ITEM PARAMETER](../commands/set-list-item-parameter)) e definir a lista como "Lista de opções" para as listas Pop-Up/Drop-down e menu pop-up hierárquico. Os valores automáticos são substituídos por ações personalizadas em tempo de execução. Nesse contexto, só podem ser usadas ações padrão com parâmetros de valor em relação com a ação principal de um submenu (lista). Por exemplo, você pode definir uma lista de itens associados a valores da ação backgroundColor (`backgroundColor?value="red"`, `backgroundColor?value="blue"`...) e defini-la como Lista de opções para um menu pop-up hierárquico.


## Ações disponíveis

### Ações do 4D Write Pro

Consulte a página [Ações padrão do 4D Write Pro](../WritePro/user-legacy/standard-actions.md) para a descrição de ações dedicadas adicionais, disponíveis **apenas para áreas 4D Write Pro**.


### "" (string vazia)

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak none` | N/A | Botões, Comandos de menu |

Não executa uma ação padrão. Use este valor quando precisar escrever um método para gerenciar o controle. Por exemplo, um botão que exibe uma caixa de diálogo de pesquisa personalizada em um aplicativo personalizado não teria uma ação padrão, pois é necessário escrever um método para abrir a caixa de diálogo personalizada.

### accept

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak accept` | Nenhuma (pode ser tratada pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões, Comandos de menu |

Salva um registro novo ou modificado, disparando o evento `On Saving New Record` ou `On Saving Existing Record`. Também aceita um formulário exibido com o comando [DIALOG](../commands/dialog). Em todos os casos, aciona o evento de formulário `On Validate`.

:::note

Ao usar o comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), um item associado a esta ação não será automaticamente ocultado dependendo do contexto.

:::

### addSubrecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak add subrecord` | • *List box:* há pelo menos um list box do tipo "seleção" no formulário e ele tem o foco<br>• *Subformulário:* tem foco<br>• *Formulário lista:* nenhuma | Botões, Comandos de menu |

• *List box:* um novo registro em branco aparece no formulário de detalhe definido para o list box. O usuário pode inserir valores e, em seguida, validar o registro e um novo registro em branco aparece automaticamente. Isso continua até que o usuário clique em um botão de cancelamento.<br>• *Subformulário:* o 4D cria um novo registro na tabela ou tabela relacionada, diretamente na lista ou no formulário de detalhe associado (dependendo das propriedades do subformulário).<br>• *Formulário lista:* um novo registro em branco é criado. Com listas exibidas usando os comandos [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection), o registro é adicionado na lista ou na página de detalhe dependendo do valor do parâmetro `enterList`. Na janela de exibição de registros, o registro é adicionado à lista.

### automaticSplitter

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak automatic splitter` | Nenhuma (pode ser tratada pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões invisíveis |

Esta ação padrão permite criar divisores personalizados em um formulário. Ela só pode ser atribuída a um botão invisível (ver [Botões](../FormObjects/button_overview.md)). Quando um botão invisível recebe esta ação, ele se comporta da mesma forma que um divisor. Ao colar, por exemplo, uma imagem no botão invisível, você pode criar qualquer tipo de interface personalizada para seus divisores. Para mais informações sobre divisores, consulte [Divisores](../FormObjects/splitters.md).

### backgroundColor

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak background color` | Nenhuma | Comandos de menu, Listas pop-up/drop-down, Menus pop-up hierárquicos |

Exibe o submenu padrão de cor de fundo.

### backgroundColor/showDialog

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak background color dialog` | Nenhuma | Botões, Comandos de menu |

Abre o diálogo de cor de fundo da fonte.

### backgroundColor?value=\<color\>

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak background color` | Nenhuma | Botões, Comandos de menu, Itens de lista |

Define a cor de fundo para `<color>`. Passe um valor ou nome de cor CSS. Ex: `backgroundColor?value=#FF0000`, `backgroundColor?value=red`, `backgroundColor?value=transparent`

### cancel

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak cancel` | Nenhuma (pode ser tratada pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões, Comandos de menu |

Sai do registro atual sem salvar nenhuma alteração. Também pode fechar um formulário exibido com o comando [DIALOG](../commands/dialog) ou sair de um formulário exibindo uma seleção de registros usando [DISPLAY SELECTION](../commands/display-selection) ou [MODIFY SELECTION](../commands/modify-selection).

:::note

Ao usar o comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), um item associado a esta ação não será automaticamente ocultado dependendo do contexto.

:::


### clear

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak clear` | A área editável tem o foco. O objeto com foco tem uma área editável | Botões, Comandos de menu |

Exclui a seleção. Se nada estiver selecionado, apaga toda a área que contém o cursor (apenas áreas inseríveis).

### color

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font color` | Nenhuma | Comandos de menu, Listas pop-up/drop-down, Menus pop-up hierárquicos |

Exibe o submenu padrão de cor de fonte.

### color/showDialog

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font color dialog` | Nenhuma | Botões, Comandos de menu |

Exibe a caixa de diálogo de cor de fonte do sistema.

### color?value=\<color\>

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font color` | Nenhuma | Botões, Comandos de menu, Itens de lista |

Define a cor da fonte para `<color>`. Passe um valor ou nome de cor CSS. Ex: `color?value=#FF0000`, `color?value=red`

### computeExpressions

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak compute expressions` | Nenhuma | Botões, Comandos de menu |

Atualiza todas as expressões dinâmicas na área.

### copy

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak copy` | A área editável tem o foco. Conteúdo selecionado | Botões, Comandos de menu |

Coloca uma cópia da seleção na Área de Transferência.

### cut

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak cut` | A área editável tem o foco. Conteúdo selecionado | Botões, Comandos de menu |

Remove a seleção e a coloca na Área de Transferência.

### databaseSettings

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak database settings` | Nenhuma (pode ser tratada pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões, Comandos de menu |

Exibe a caixa de diálogo padrão de Configurações do banco de dados.

:::note

No macOS, o comando de menu associado à ação `databaseSettings` é colocado automaticamente no menu do sistema do aplicativo quando o banco de dados está sendo executado nesse ambiente.

:::

:::note

Ao usar o comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), um item associado a esta ação não será automaticamente ocultado dependendo do contexto.

:::


### deleteRecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak delete record` | Um registro está selecionado e não é um novo registro sendo adicionado | Botões, Comandos de menu |

Exibe um alerta solicitando ao usuário que confirme a exclusão. Clicar em Sim no alerta exclui o registro atual. Após o usuário clicar em um botão Excluir Registro, o 4D retorna automaticamente à exibição de saída. Caso especial: se um método também estiver atribuído ao botão/menu, a ação padrão é chamada primeiro e o método é executado apenas se o usuário clicar em Sim na caixa de diálogo de alerta.

### deleteSubrecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak delete subrecord` | • *List box:* pelo menos uma linha de um list box do tipo "seleção" está selecionada<br>• *Subformulário:* tem foco e um registro está selecionado.<br>• *Formulário lista:* um registro está selecionado na lista. | Botões, Comandos de menu |

• *List box:* uma caixa de diálogo de confirmação aparece para que o usuário confirme ou cancele a exclusão.<br>• *Subformulário:* uma caixa de diálogo aparece para confirmar ou cancelar a exclusão dos subregistros selecionados.<br>• *Formulário lista:* uma caixa de diálogo aparece para confirmar ou cancelar a exclusão dos registros selecionados.

### designMode

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak return to design mode` | Modo aplicativo (pode ser tratado pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões, Comandos de menu |

Coloca em primeiro plano as janelas e barras de menu do ambiente de Design do 4D. Quando o banco de dados está sendo executado em modo interpretado, exibe a janela atual do ambiente de Design. Quando o banco de dados está sendo executado em modo compilado, exibe a janela de registros da tabela atual (no modo compilado, apenas o acesso a registros é possível).

:::note

Ao usar o comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), um item associado a esta ação não será automaticamente ocultado dependendo do contexto.

:::

### displaySubrecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak display subrecord` | • *List box:* pelo menos uma linha de um list box do tipo "seleção" está selecionada<br>• *Subformulário:* tem foco e um registro está selecionado.<br>• *Formulário lista:* um registro está selecionado na lista. | Botões, Comandos de menu |

• *List box:* o registro correspondente à linha do list box aparece no formulário de detalhe definido para o list box, em modo somente leitura. O usuário só pode cancelar o formulário para retornar ao list box.<br>• *Subformulário:* o subregistro selecionado é exibido no formulário de detalhe associado em modo somente leitura (se definido nas propriedades do subformulário).<br>• *Formulário lista:* com listas exibidas via os comandos [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection), o registro selecionado é exibido em modo somente leitura na página de detalhe dependendo do valor do parâmetro `enterList`. Na janela de exibição de registros, o registro selecionado é exibido em modo somente leitura na página de detalhe.

### editSubrecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak edit subrecord` | • *List box:* pelo menos uma linha de um list box do tipo "seleção" está selecionada<br>• *Subformulário:* tem foco e um registro está selecionado.<br>• *Formulário lista:* um registro está selecionado na lista. | Botões, Comandos de menu |

• *List box:* o registro correspondente à linha do list box aparece no formulário de detalhe definido para o list box. O usuário pode modificar os valores e depois validar ou cancelar o formulário para retornar ao list box.<br>• *Subformulário:* o subregistro selecionado alterna para o modo de edição, diretamente na lista ou no formulário de detalhe associado (dependendo das propriedades do subformulário).<br>• *Formulário lista:* o registro selecionado alterna para o modo de edição. Com listas exibidas via os comandos [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection), a modificação é realizada na lista ou na página de detalhe dependendo do valor do parâmetro `enterList`. Na janela de exibição de registros, a modificação é realizada na página de detalhe (a ação é equivalente a um duplo clique).

### firstPage

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak next page` | Formulário de múltiplas páginas e você não está na primeira página | Botões, Comandos de menu |

Exibe a primeira página.

### firstRecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak first record` | Um registro está selecionado e não é o primeiro da seleção | Botões, Comandos de menu |

Aceita o registro atual e torna o primeiro registro o atual.

### font/showDialog

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font show dialog` | Nenhuma | Botões, Comandos de menu |

Exibe a caixa de diálogo selecionadora de fontes do sistema.

### fontBold

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font bold` | Nenhuma | Botões, Comandos de menu |

Alterna o atributo de fonte negrito.

### fontItalic

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font italic` | Nenhuma | Botões, Comandos de menu |

Alterna o atributo de fonte itálico.

### fontLineThrough

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font linethrough` | Nenhuma | Botões, Comandos de menu |

Alterna o atributo de fonte tachado.

### fontSize

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font size` | Nenhuma | Comandos de menu, Listas pop-up/drop-down, Menus pop-up hierárquicos |

Exibe o submenu padrão de tamanho de fonte.

### fontSize?value=\<size\>

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font size` | Nenhuma | Botões, Comandos de menu, Itens de lista |

Define o tamanho da fonte para `<size>`. Passe um valor de comprimento CSS em pt. Ex: `fontSize?value=12pt`

### fontStyle

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font style` | Nenhuma | Comandos de menu, Listas pop-up/drop-down, Menus pop-up hierárquicos |

Exibe o submenu padrão de estilo de fonte.

### fontUnderline

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak font underline` | Nenhuma | Botões, Comandos de menu |

Alterna o atributo de fonte sublinhado.

### freezeExpressions

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak freeze expressions` | Nenhuma | Botões, Comandos de menu |

Congela todas as expressões dinâmicas na área.

### gotoPage

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak goto page` | Formulário de múltiplas páginas | Controles de guia, List boxes, Grades de botões, Menus Pop-up/Listas Drop-down |

Exibe a página do formulário (se existir) que corresponde ao número do item selecionado (controle de guia, linha do list box, botão na grade, item do menu pop-up). Veja também [Ação Goto Page](../FormObjects/tabControl.md#goto-page-action).

### gotoPage?value=\<page\>

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak goto page` | Formulário de múltiplas páginas | Botões, Comandos de menu |

Exibe a página do formulário que corresponde ao número `<page>`.

### lastPage

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak last page` | Formulário de múltiplas páginas e você não está na última página | Botões, Comandos de menu |

Exibe a última página.

### lastRecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak last record` | Um registro está selecionado e não é o último da seleção | Botões, Comandos de menu |

Aceita o registro atual e torna o último registro o atual.

### msc

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak msc` | Nenhuma (pode ser tratada pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões, Comandos de menu |

Exibe a janela do [Centro de Manutenção e Segurança](../MSC/overview.md).

:::note

Ao usar o comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), um item associado a esta ação não será automaticamente ocultado dependendo do contexto.

:::

### nextPage

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak next page` | Formulário de múltiplas páginas e você não está na última página | Botões, Comandos de menu |

Exibe a próxima página.

### nextRecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak next record` | Um registro está selecionado e não é o último da seleção | Botões, Comandos de menu |

Aceita o registro atual e torna o próximo registro o atual.

### openBackURL

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak open back url` |[Apenas áreas Web](../FormObjects/webArea_overview.md). Uma URL anterior foi carregada | Botões, Comandos de menu |

Abre a URL anterior na sequência de navegação realizada pelo usuário na área Web. Desativado se não houver URL anterior; em outras palavras, se o usuário só tiver exibido uma única página na área Web.

### openForwardURL

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak open forward url` |[Apenas áreas Web](../FormObjects/webArea_overview.md). `openBackURL` executado anteriormente | Botões, Comandos de menu |

Abre a próxima URL na sequência de navegação realizada pelo usuário na área Web. Desativado se não houver próxima URL; em outras palavras, se o usuário nunca tiver voltado uma página na sequência.

### paste

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak paste` | A área editável tem o foco. Área de Transferência não vazia | Botões, Comandos de menu |

Insere o conteúdo da Área de Transferência na posição do ponto de inserção.

### previousPage

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak previous page` | Formulário de múltiplas páginas e você não está na primeira página | Botões, Comandos de menu |

Exibe a página anterior.

### previousRecord

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak previous record` | Um registro está selecionado e não é o primeiro da seleção | Botões, Comandos de menu |

Aceita o registro atual e torna o registro anterior o atual.

### quit

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak quit` | Nenhuma (pode ser tratada pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões, Comandos de menu |

Exibe uma caixa de diálogo de confirmação "Tem certeza?", e sai do aplicativo 4D se a validação ocorrer. Caso contrário, a operação é cancelada. Quando esta ação é atribuída a um botão com o qual um método de objeto também está associado, a seguinte sequência é executada: primeiro, a caixa de diálogo de confirmação aparece. Se for validada, o 4D executa o método de objeto. Após sua execução, o aplicativo é encerrado.

:::note

No macOS, o comando de menu associado à ação `quit` é colocado automaticamente no menu do sistema do aplicativo, quando o banco de dados está sendo executado nesse ambiente. Esse mecanismo simplifica o gerenciamento do comando Sair no macOS.

:::

:::note

Ao usar o comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), um item associado a esta ação não será automaticamente ocultado dependendo do contexto.

:::

### redo

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak redo` | A área editável tem o foco. Uma ação de desfazer foi realizada | Botões, Comandos de menu |

Repete a última ação cancelada (= comando Refazer do menu Editar).

### refreshCurrentURL

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak refresh current url` |[Apenas áreas Web](../FormObjects/webArea_overview.md). `openBackURL` executado anteriormente (pode ser tratado pelo comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botões, Comandos de menu |

Recarrega o conteúdo atual da área Web.

### selectAll

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak select all` | A área editável tem o foco. O objeto com foco tem uma área editável | Botões, Comandos de menu |

Seleciona todos os elementos selecionáveis no contexto.

### showClipboard

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak show clipboard` | Sempre disponível | Botões, Comandos de menu |

Abre uma nova janela que exibe o conteúdo atual da Área de Transferência.

### spell

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Nenhuma | Comandos de menu |

Exibe o menu completo de verificação ortográfica.

### spell/autoCorrectionEnabled

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Ativa/desativa o modo de correção automática.

### spell/autoDashSubstitutionsEnabled

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Ativa/desativa a substituição de hífenes duplos (`--`) por travessões (`—`) durante a digitação (apenas macOS).

### spell/autoLanguageEnabled

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Ativa/desativa a identificação do idioma do dicionário a ser usado com base no conteúdo do texto (apenas macOS).

### spell/autoQuoteSubstitutionsEnabled

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Ativa/desativa a substituição de aspas retas por aspas tipográficas (apenas macOS).

### spell/autoSubstitutionsEnabled

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Ativa/desativa a substituição de texto.

### spell/enabled

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Nenhuma | Botões, Comandos de menu |

Ativa/desativa a verificação ortográfica na área (a opção Verificação Ortográfica Automática deve estar marcada para a área).

### spell/forgetIgnore

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Limpa a lista de palavras ignoradas.

### spell/grammarEnabled

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Ativa/desativa a verificação gramatical do texto (apenas macOS).

### spell/ignore

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada / Uma palavra desconhecida está selecionada ou tem o cursor | Botões, Comandos de menu |

A palavra desconhecida é mantida sem alterações e não é mais sublinhada.

### spell/learn

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada / Uma palavra desconhecida está selecionada ou tem o cursor | Botões, Comandos de menu |

A palavra desconhecida é adicionada ao dicionário.

### spell/removeSubstitution

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada / Uma palavra substituída está selecionada ou tem o cursor | Botões, Comandos de menu |

Remove a substituição selecionada.

### spell/showDialog

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Exibe uma caixa de diálogo de verificação ortográfica.

### spell/suggestion?index=\<1-number\<=10\>

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada / Palavra com erro ortográfico selecionada | Botões, Comandos de menu |

O número é a N-ésima sugestão de correção para a primeira palavra com erro ortográfico na seleção. Ex: `spell/suggestion?index=1` substituirá a palavra com erro ortográfico atual na visualização com foco pela primeira sugestão.

### spell/unLearn

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada / Uma palavra aprendida está selecionada ou tem o cursor | Botões, Comandos de menu |

Remove a palavra aprendida selecionada da lista de palavras aprendidas.

### spell/visibleSubstitutions

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| - | Verificação ortográfica ativada | Botões, Comandos de menu |

Ativa/desativa o sublinhado azul para possíveis substituições no texto.

### stopLoadingURL

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak stop loading url` |[Apenas áreas Web](../FormObjects/webArea_overview.md). URL sendo carregada | Botões, Comandos de menu |

Interrompe o carregamento da página e/ou objetos da URL atual na área Web.

### undo

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak undo` | A área editável tem o foco. Uma ação de edição foi realizada | Botões, Comandos de menu |

Cancela a última ação realizada (= comando Desfazer do menu Editar). Desfazer não deve ser confundido com Cancelar (= cancela todas as modificações feitas em um registro durante sua visualização e retorna ao formulário de saída).

### visibleReferences

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
| `ak show reference` | Nenhuma | Botões, Comandos de menu |

Exibe todas as expressões dinâmicas como referências.

### writingTools 

| Constante (se houver) | Condições de ativação | Disponível com |
|---|---|---|
|-| *apenas macOS* | Botões, Comandos de menu |

Para [documentos 4D Write Pro](../category/4d-write-pro) e [objetos de formulário de entrada](../FormObjects/input_overview.md). Exibe as [Ferramentas de Escrita](../FormObjects/properties_Entry.md#writing-tools) para a área, usando o contêiner onde o cursor está localizado e a seleção atual como contexto. O texto selecionado (ou o contêiner inteiro se não houver seleção) é substituído pela modificação retornada. A ação é desativada se a área não for inserível ou não estiver habilitada, no Windows, ou quando o Apple Intelligence estiver desativado.


## Veja também

- [Ações padrão do 4D Write Pro](../WritePro/user-legacy/standard-actions.md)
- [Baixar banco de dados HDI](http://download.4d.com//Demos/4D_v16_R3/HDI_NewStandardActions.zip)