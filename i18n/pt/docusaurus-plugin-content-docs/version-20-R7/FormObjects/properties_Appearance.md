---
id: propertiesAppearance
title: Aparência
---

## Botão predefinido

A propriedade do botão padrão designa o botão que fica o foco inicial em tempo de execução quando nenhum botão do formulário tem a propriedade [Focusable](properties_Entry.md#focusable).

Só pode haver um botão predefinido por página de formulário.

Além disso, no macOS, a propriedade do botão padrão modifica a aparência do botão para indicar uma "escolha recomendada" ao usuário e é automaticamente vinculada à tecla **Enter**, mesmo que não tenha o foco. O botão padrão pode diferir do botão selecionado. Os botões predefinidos têm um aspeto azul específico no macOS:

![](../assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> O botão tem de ter uma altura padrão para obter o aspeto de botão predefinido.

No Windows, o conceito de "escolha recomendada" não é compatível: somente o botão focalizado tem uma aparência diferente em tempo de execução e a tecla **Enter** está vinculada ao botão focalizado. No entanto, no editor de formulários 4D, o botão padrão é representado por um contorno azul:

![](../assets/en/FormObjects/property_defaultButtonWindows.en.png)

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| defaultButton | boolean       | true, false       |

#### Objectos suportados

[Botão regular](button_overview.md#regular) - [Botão plano](button_overview.md#regular)

---

## Esconder retangulo foco

Durante a execução, um campo ou qualquer área introduzível é delineado por um retângulo de seleção quando tem o foco (através da tecla Tab ou de um único clique). Pode ocultar este retângulo ativando esta propriedade. Ocultar o retângulo de foco pode ser útil no caso de interfaces específicas.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| hideFocusRing | boolean       | true, false       |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Lista jerárquica](list_overview.md) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md) - [Sub formulario](subform_overview.md)

---

## Esconder ressalte seleção

`List boxes de tipo de seleção`

Esta propriedade é utilizada para desativar o realce de seleção nos list boxes.

Quando esta opção estiver habilitada, o destaque de seleção não fica mais visível para as seleções feitas nas caixas de lista. As próprias selecções ainda são válidas e funcionam exatamente da mesma forma que as anteriormente; no entanto, eles não estão mais representados na tela gráfica, e você precisará [definir sua aparência programaticamente](listbox_overview.md#customizing-appearance-of-selected-rows).

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

[Lista jerárquica](list_overview.md#overview) - [Sub formulario](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de entrada](input_overview.md) - [Área 4D Write Pro](writeProArea_overview.md)

#### Veja também

[Barra de rolagem vertical](#vertical-scroll-bar)

---

## Resolução

Define a resolução do ecrã para o conteúdo da área 4D Write Pro. Por padrão, ele é definido como 72 dpi (macOS), que é a resolução padrão para formulários 4D em todas as plataformas. Definir essa propriedade como 96 dpi definirá uma renderização de janelas/web nas plataformas macOS e Windows. Si se define esta propiedad como **automática** significa que la representación del documento diferirá entre las plataformas macOS y Windows.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis   |
| ---- | ------------- | ------------------- |
| dpi  | number        | 0=automatic, 72, 96 |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar fundo

Apresenta/oculta as imagens de fundo e a cor de fundo.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                       |
| -------------- | ------------- | --------------------------------------- |
| showBackground | boolean       | true (padrão), false |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar rodapés

Exibe / oculta os rodapés quando [modo de exibição de página](#view-mode) está definido como "Página".

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                       |
| ----------- | ------------- | --------------------------------------- |
| showFooters | boolean       | true (padrão), false |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar barra de fórmulas

Quando activada, a barra de fórmulas é visível por baixo da interface da barra de ferramentas na área 4D View Pro. Se não estiver selecionada, a barra de fórmulas fica oculta.

> Esta propriedade está disponível apenas para a interface da [barra de ferramentas](#user-interface).

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                       |
| -------------- | ------------- | --------------------------------------- |
| withFormulaBar | boolean       | true (padrão), false |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md)

---

## Mostrar cabeçalhos

Exibe / oculta os cabeçalhos quando [modo de exibição da página](#view-mode) estiver definido como "Página".

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                       |
| ----------- | ------------- | --------------------------------------- |
| showHeaders | boolean       | true (padrão), false |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar caracteres ocultos

Apresenta/oculta caracteres invisíveis

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                       |
| --------------- | ------------- | --------------------------------------- |
| showHiddenChars | boolean       | true (padrão), false |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar régua horizontal

Exibe/oculta a régua horizontal quando a visualização do documento estiver no [modo Página](#view-mode).

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis                       |
| ------------------- | ------------- | --------------------------------------- |
| showHorizontalRuler | boolean       | true (padrão), false |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar HTML WYSYWIG

Ativa/desativa a visualização HTML WYSIWYG, na qual todos os atributos avançados do 4D Write Pro que não são compatíveis com todos os navegadores são removidos.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                       |
| --------------- | ------------- | --------------------------------------- |
| showHTMLWysiwyg | boolean       | true, false (padrão) |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar moldura da página

Exibe/oculta o quadro da página quando o [modo de exibição da página](#view-mode) estiver definido como "Página".

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| showPageFrames | boolean       | true, false       |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar referências

Apresenta todas as expressões 4D inseridas no documento 4D Write Pro como *referências*. Quando esta opção for desativada, expressões 4D são exibidas como *valores*. Por padrão, quando você insere um campo ou expressão 4D, o 4D Write Pro calcula e exibe seu valor atual. Selecione essa propriedade se quiser saber qual campo ou expressão é exibido. O campo ou as referências de expressão em seguida, aparecem em seu documento, com um fundo cinza.

Por exemplo, se você tiver inserido a data atual junto com um formato, a data será exibida:

![](../assets/en/FormObjects/writePro1.png)

Com a propriedade Mostrar as referências ativada, a referência é apresentada:

![](../assets/en/FormObjects/writeProExpr.png)

> As expressões 4D podem ser inseridas usando o comando `ST INSERT EXPRESSION`.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                       |
| -------------- | ------------- | --------------------------------------- |
| showReferences | boolean       | true, false (padrão) |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Mostrar régua vertical

Muestra/oculta la regla vertical cuando la vista del documento está en modo [Página](#view-mode).

#### Gramática JSON

| Nome              | Tipo de dados | Valores possíveis                       |
| ----------------- | ------------- | --------------------------------------- |
| showVerticalRuler | boolean       | true (padrão), false |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Direção de tabulação

É possível definir a direção dos controles de tabulação nos formulários. Esta propriedade está disponível em todas as plataformas, mas só pode ser exibida no macOS. Você pode escolher colocar os controles de abas no topo (padrão) ou na parte inferior.

Quando os controles de aba com uma direção personalizada são exibidos no Windows, eles retornam automaticamente à direção padrão (superior).

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| labelsPlacement | boolean       | "top", "bottom"   |

#### Objectos suportados

[Controle de guias](tabControl.md)

---

## Interface do usuário

É possível adicionar uma interface às áreas do 4D View Pro para permitir que os usuários finais realizem modificações básicas e manipulações de dados. 4D View Pro ofrece dos interfaces opcionales a elegir, **Cinta** y **Barra de herramientas**.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                       |
| ------------- | ------------- | ------------------------------------------------------- |
| userInterface | text          | "none" (padrão), "ribbon", "toolbar" |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md)

#### Veja também

[Guia de referência de 4D View Pro](.../ViewPro/getting-started.md)

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

[Lista jerárquica](list_overview.md#overview) - [Sub formulario](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de entrada](input_overview.md) - [Área 4D Write Pro](writeProArea_overview.md)

#### Veja também

[Barra de rolagem horizontal](#horizontal-scroll-bar)

---

## Modo de visualização

Define o modo de exibição do documento 4D Write Pro na área do formulário. Há três valores disponíveis:

- **Página**: o modo de visualização mais completo, que inclui contornos de página, orientação, margens, quebras de página, cabeçalhos e rodapés, etc.
- **Rascunho**: modo rascunho com propriedades básicas do documento
- **Embutido**: modo de exibição adequado para áreas incorporadas; não exibe margins, rodapés, cabeçalhos, quadros da página, etc. Esse modo também pode ser usado para produzir uma saída de visualização semelhante à da Web (se você também selecionar a opção [resolução de 96 dpi](#resolution) e as propriedades [Mostrar HTML WYSIWYG](#show-html-wysiwyg)).

> A propriedade Mode vista só é utilizada para a renderização no ecrã. Para os parâmetros de impressão, são usadas automaticamente regras de renderização específicas.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis           |
| ---------- | ------------- | --------------------------- |
| layoutMode | text          | "page", "draft", "embedded" |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)

---

## Zoom

Define a porcentagem de zoom para a exibição do conteúdo da área do 4D Write Pro.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| ---- | ------------- | ----------------- |
| zoom | number        | mínimo = 0        |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md)
