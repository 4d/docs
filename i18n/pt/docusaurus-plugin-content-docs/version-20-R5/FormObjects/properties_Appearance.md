---
id: propertiesAppearance
title: Aparência
---

## Botão predefinido

The default button property designates the button that gets the initial focus at runtime when no button of the form has the [Focusable](properties_Entry.md#focusable) property.

Só pode haver um botão predefinido por página de formulário.

In addition, on macOS, the default button property modifies the button's appearance in order to indicate a "recommended choice" to the user and is automatically bound to the **Enter** key, even if it does not have the focus. O botão padrão pode diferir do botão selecionado. Os botões predefinidos têm um aspeto azul específico no macOS:

![](../assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> O botão tem de ter uma altura padrão para obter o aspeto de botão predefinido.

On Windows, the concept of "recommended choice" is not supported: only the focused button has a different appearance at runtime and the **Enter** key is bound to the focused button. No entanto, no editor de formulários 4D, o botão padrão é representado por um contorno azul:

![](../assets/en/FormObjects/property_defaultButtonWindows.en.png)

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| defaultButton | boolean       | true, false       |

#### Objectos suportados

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)

---

## Esconder retangulo foco

Durante a execução, um campo ou qualquer área introduzível é delineado por um retângulo de seleção quando tem o foco (através da tecla Tab ou de um único clique). Pode ocultar este retângulo ativando esta propriedade. Ocultar o retângulo de foco pode ser útil no caso de interfaces específicas.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| hideFocusRing | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Subform](subform_overview.md)

---

## Esconder ressalte seleção

`List boxes de tipo de seleção`

Esta propriedade é utilizada para desativar o realce de seleção nos list boxes.

Quando esta opção estiver habilitada, o destaque de seleção não fica mais visível para as seleções feitas nas caixas de lista. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

Por defeito, esta opção não está activada.

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis |
| ------------------- | ------------- | ----------------- |
| hideSystemHighlight | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Altura linha

Uma ferramenta de interface que permite ao usuário mover a área de visualização para a esquerda ou direita.

Valores disponíveis:

| Lista de propriedades | Valor JSON  | Descrição                                                                                                                                                                                                 |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sim                   | "visible"   | A barra de rolagem está sempre visível, mesmo quando não é necessária (em outras palavras, quando o tamanho do conteúdo do objeto é menor do que o tamanho do quadro). |
| Não                   | "hidden"    | A barra de deslocação nunca é visível                                                                                                                                                                     |
| Automático            | "automatic" | A barra de rolagem aparece automaticamente sempre que necessário e o usuário pode inserir texto maior do que a largura do objeto                                                                          |

> Os objetos de imagem podem ter barras de rolagem quando o formato de exibição da imagem estiver definido como "Truncado (não centralizado)".

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis                |
| ------------------- | ------------- | -------------------------------- |
| scrollbarHorizontal | text          | "visible", "hidden", "automatic" |

#### Objectos suportados

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### Veja também

[Vertical scroll bar](#vertical-scroll-bar)

---

## Resolução

Define a resolução do ecrã para o conteúdo da área 4D Write Pro. Por padrão, ele é definido como 72 dpi (macOS), que é a resolução padrão para formulários 4D em todas as plataformas. Definir essa propriedade como 96 dpi definirá uma renderização de janelas/web nas plataformas macOS e Windows. Setting this property to **automatic** means that document rendering will differ between macOS and Windows platforms.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis   |
| ---- | ------------- | ------------------- |
| dpi  | number        | 0=automatic, 72, 96 |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar fundo

Apresenta/oculta as imagens de fundo e a cor de fundo.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                       |
| -------------- | ------------- | --------------------------------------- |
| showBackground | boolean       | true (padrão), false |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar rodapés

Displays/hides the footers when [Page view mode](#view-mode) is set to "Page".

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                       |
| ----------- | ------------- | --------------------------------------- |
| showFooters | boolean       | true (padrão), false |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar barra de fórmulas

Quando activada, a barra de fórmulas é visível por baixo da interface da barra de ferramentas na área 4D View Pro. Se não estiver selecionada, a barra de fórmulas fica oculta.

> This property is available only for the [Toolbar](#user-interface) interface.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                       |
| -------------- | ------------- | --------------------------------------- |
| withFormulaBar | boolean       | true (padrão), false |

#### Objectos suportados

[4D View Pro area](viewProArea_overview.md)

---

## Mostrar cabeçalhos

Displays/hides the headers when [Page view mode](#view-mode) is set to "Page".

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                       |
| ----------- | ------------- | --------------------------------------- |
| showHeaders | boolean       | true (padrão), false |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar caracteres ocultos

Apresenta/oculta caracteres invisíveis

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                       |
| --------------- | ------------- | --------------------------------------- |
| showHiddenChars | boolean       | true (padrão), false |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar régua horizontal

Displays/hides the horizontal ruler when the document view is in [Page mode](#view-mode).

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis                       |
| ------------------- | ------------- | --------------------------------------- |
| showHorizontalRuler | boolean       | true (padrão), false |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar HTML WYSYWIG

Ativa/desativa a visualização HTML WYSIWYG, na qual todos os atributos avançados do 4D Write Pro que não são compatíveis com todos os navegadores são removidos.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                       |
| --------------- | ------------- | --------------------------------------- |
| showHTMLWysiwyg | boolean       | true, false (padrão) |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar moldura da página

Displays/hides the page frame when [Page view mode](#view-mode) is set to "Page".

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| showPageFrames | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar referências

Displays all 4D expressions inserted in the 4D Write Pro document as _references_. When this option is disabled, 4D expressions are displayed as _values_. Por padrão, quando você insere um campo ou expressão 4D, o 4D Write Pro calcula e exibe seu valor atual. Selecione essa propriedade se quiser saber qual campo ou expressão é exibido. O campo ou as referências de expressão em seguida, aparecem em seu documento, com um fundo cinza.

Por exemplo, se você tiver inserido a data atual junto com um formato, a data será exibida:

![](../assets/en/FormObjects/writePro1.png)

Com a propriedade Mostrar as referências ativada, a referência é apresentada:

![](../assets/en/FormObjects/writeProExpr.png)

> 4D expressions can be inserted using the `ST INSERT EXPRESSION` command.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                       |
| -------------- | ------------- | --------------------------------------- |
| showReferences | boolean       | true, false (padrão) |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar régua vertical

Displays/hides the vertical ruler when the document view is in [Page mode](#view-mode).

#### Gramática JSON

| Nome              | Tipo de dados | Valores possíveis                       |
| ----------------- | ------------- | --------------------------------------- |
| showVerticalRuler | boolean       | true (padrão), false |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Direção de tabulação

É possível definir a direção dos controles de tabulação nos formulários. Esta propriedade está disponível em todas as plataformas, mas só pode ser exibida no macOS. Você pode escolher colocar os controles de abas no topo (padrão) ou na parte inferior.

Quando os controles de aba com uma direção personalizada são exibidos no Windows, eles retornam automaticamente à direção padrão (superior).

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| labelsPlacement | boolean       | "top", "bottom"   |

#### Objectos suportados

[Tab Control](tabControl.md)

---

## Interface do usuário

É possível adicionar uma interface às áreas do 4D View Pro para permitir que os usuários finais realizem modificações básicas e manipulações de dados. 4D View Pro offers two optional interfaces to choose from, **Ribbon** and **Toolbar**.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                       |
| ------------- | ------------- | ------------------------------------------------------- |
| userInterface | text          | "none" (padrão), "ribbon", "toolbar" |

#### Objectos suportados

[4D View Pro area](viewProArea_overview.md)

#### Veja também

[4D View Pro reference guide](../ViewPro/getting-started.md)

---

## Barra rolagem vertical

Uma ferramenta de interface que permite ao usuário mover a área de visualização para cima e para baixo.

Valores disponíveis:

| Lista de propriedades | Valor JSON  | Descrição                                                                                                                                                                                                 |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sim                   | "visible"   | A barra de rolagem está sempre visível, mesmo quando não é necessária (em outras palavras, quando o tamanho do conteúdo do objeto é menor do que o tamanho do quadro). |
| Não                   | "hidden"    | A barra de deslocação nunca é visível                                                                                                                                                                     |
| Automático            | "automatic" | A barra de rolagem aparece automaticamente sempre que necessário (em outras palavras, quando o tamanho do conteúdo do objeto é maior do que o tamanho do quadro)                       |

> Os objetos de imagem podem ter barras de rolagem quando o formato de exibição da imagem estiver definido como "Truncado (não centralizado)".

> Se um objeto de entrada de texto não tiver uma barra de rolagem, o usuário poderá rolar as informações usando as teclas de seta.

#### Gramática JSON

| Nome              | Tipo de dados | Valores possíveis                |
| ----------------- | ------------- | -------------------------------- |
| scrollbarVertical | text          | "visible", "hidden", "automatic" |

#### Objectos suportados

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### Veja também

[Horizontal scroll bar](#horizontal-scroll-bar)

---

## Modo de visualização

Define o modo de exibição do documento 4D Write Pro na área do formulário. Há três valores disponíveis:

- **Page**: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc.
- **Draft**: draft mode with basic document properties
- **Embedded**: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc. This mode can also be used to produce a web-like view output (if you also select the [96 dpi resolution](#resolution) and the [Show HTML WYSIWYG](#show-html-wysiwyg) properties).

> A propriedade Mode vista só é utilizada para a renderização no ecrã. Para os parâmetros de impressão, são usadas automaticamente regras de renderização específicas.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis           |
| ---------- | ------------- | --------------------------- |
| layoutMode | text          | "page", "draft", "embedded" |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)

---

## Zoom

Define a porcentagem de zoom para a exibição do conteúdo da área do 4D Write Pro.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| ---- | ------------- | ----------------- |
| zoom | number        | mínimo = 0        |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md)
