---
id: markers
title: Markers
---


Essas propriedades permitem que você especifique o local exato dos marcadores na régua vertical de um formulário de tabela ****. Os marcadores são utilizados principalmente em formulários de saída. Eles controlam as informações que são listadas e definem as áreas de cabeçalho, quebras, detalhes e rodapé do formulário. Qualquer objeto colocado nessas áreas é exibido ou impresso no local apropriado.

Sempre que qualquer formulário for usado para saída, seja para exibição na tela ou para impressão, as linhas de marcador de saída entrarão em vigor e as áreas serão exibidas ou impressas nos locais designados. Os marcadores também têm efeito quando um formulário é usado como o formulário de lista em uma área de subformulário. No entanto, não têm nenhum efeito quando é utilizado um formulário para introdução de dados.

Os métodos associados aos objetos nessas áreas são executados quando as áreas são impressas ou exibidas, desde que os eventos apropriados tenham sido ativados. Por exemplo, um método de objeto colocado na área do cabeçalho é executado quando ocorre o evento `On Header` .

---

## Quebra de formulário

As áreas de quebra de formulário são exibidas uma vez no final da lista de registros e são impressas uma vez após a impressão dos registros em um relatório.

A área de quebra é definida como a área entre a linha de controle de detalhes e a linha de controle de quebra. Pode haver [várias áreas de quebra](#additional-areas) em seu relatório.

É possível tornar as áreas de Quebra menor ou maior. É possível usar uma área de quebra para exibir informações que não fazem parte dos registros (instruções, data atual, hora atual etc.) ou para exibir uma linha ou outro elemento gráfico que conclua a exibição da tela. Em um relatório impresso, é possível usar uma área de quebra para calcular e imprimir subtotais e outros cálculos de resumo.

#### Gramática JSON

| Nome        | Tipo de dados                     | Valores possíveis                                                                                               |
| ----------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| markerBreak | integer &#x7c; integer collection | Posição do marcador de quebra ou coleção de posições do marcador de quebra em pixels.<br/>Valor mínimo: 0 |

---

## Formulário detalhado

A área de dFormulário detalhado é exibida na tela e impressa uma vez para cada registro em um relatório. A área de Formulário detalhado é definida como a área entre a linha de controle do cabeçalho e a linha de controle de detalhes.

É possível aumentar ou diminuir a área Detalhe. O que quer que seja colocado na área Detalhes é exibido ou impresso uma vez para cada registro. Na maioria das vezes, você coloca campos ou variáveis na área Detail para que as informações de cada registro sejam exibidas ou impressas, mas também é possível colocar outros elementos na área Detail.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                         |
| ---------- | ------------- | ----------------------------------------- |
| markerBody | integer       | Posição do marcador de detalhe. Mínimo: 0 |

---

## Rodapé do formulário

A área do Rodapé do formulário é exibida na tela na lista de registros. É sempre impresso na parte inferior de cada página de um relatório. A área do rodapé é definida como a área entre a linha de controle Break e a linha de controle Footer.

A área de rodapé pode ser aumentada ou diminuída.

Você pode usar a área do Rodapé para imprimir gráficos, números de página, data atual, ou qualquer texto que você queira no final de cada página de um relatório. Para formulários de saída projetados para uso na tela, a área do rodapé normalmente contém botões que dão ao usuário opções como fazer uma pesquisa ou classificação, imprimir registros ou guardar o relatório atual. São aceitos objetos ativos.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis |
| ------------ | ------------- | ----------------- |
| markerFooter | integer       | mínimo: 0         |

---

## Cabeçalho do formulário

A área de cabeçalho do formulário é exibida na parte superior de cada tela e é impressa na parte superior de cada página de um relatório. A área de Cabeçalho é definida como a área acima da linha de controle do Cabeçalho.

Você pode tornar a área de Cabeçalho menor ou maior. Você pode usar a área do Cabeçalho para nomes de colunas, para instruções, informações adicionais, ou até mesmo um gráfico, como um logotipo de empresa ou um padrão decorativo.

Também é possível colocar e usar objetos ativos na área do cabeçalho dos formulários de saída exibidos como subformulários, na janela de exibição de registros ou usando os comandos `DISPLAY SELECTION` e `MODIFY SELECTION` . Podem ser inseridos os seguintes objetos ativos:

- Botões, botões imagem,
- Combo boxes, listas pendentes, menus pop-up de imagens,
- listas hierárquicas, list boxes
- Botões rádio, caixas de selecção, caixas de selecção 3D,
- Indicadores de progresso, réguas, degraus, fiadeiras.

Ações padrão, como `Add Subrecord`, `Cancel` (listas exibidas usando `DISPLAY SELECTION` e `MODIFY SELECTION`) ou `Automatic splitter` podem ser atribuídas aos botões inseridos. Os eventos a seguir se aplicam aos objetos ativos que você insere na área do Cabeçalho: `On Load`, `On Clicked`, `On Header`, `On Printing Footer`, `On Double Clicked`, `On Drop`, `On Drag Over`, `On Unload`. Lembre-se de que o método de formulário é chamado com o evento `On Header` depois de chamar os métodos de objeto da área.

O formulário pode conter [áreas de cabeçalho adicionais](#additional-areas) para serem associadas a intervalos adicionais. Um cabeçalho de nível 1 é impresso imediatamente antes da impressão dos registros agrupados pelo primeiro campo classificado.

#### Gramática JSON

| Nome         | Tipo de dados                     | Valores possíveis                                                                                                     |
| ------------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| markerHeader | integer &#x7c; integer collection | Posição do marcador de cabeçalho ou coleção de posições do marcador de cabeçalho em pixels.<br/>Valor mínimo: 0 |

## Áreas adicionais

Você pode criar áreas de interrupção e áreas de cabeçalho adicionais para um relatório. Essas áreas adicionais permitem imprimir subtotais e outros cálculos em um relatório e exibir outras informações de forma eficaz.

Áreas adicionais são definidas quando você usa uma coleção de posições nas propriedades [Form Break](#form-break) e [Form Header](#form-header) .

> No editor 4D Form, você cria linhas de controle adicionais mantendo pressionada a tecla **Alt** enquanto clica no marcador de controle apropriado.

Um formulário sempre começa com as áreas Cabeçalho, Detalhe, Quebra nível 0 e Rodapé.

A interrupção no nível 0 zero inclui todos os registros; ela ocorre depois que todos os registros são impressos. Áreas de interrupção adicionais podem ser adicionadas, por exemplo, um nível de interrupção 1, nível de interrupção 2, etc.

Um nível de interrupção 1 ocorre depois que os registros agrupados pelo primeiro campo classificado são impressos.

| Etiqueta | Descrição          | Prints after groups created by: |
| -------- | ------------------ | ------------------------------- |
| B1       | Nível de ruptura 1 | Primeiro campo classificado     |
| B2       | Nível de ruptura 2 | Segundo campo ordenado          |
| B3       | Nível de ruptura 3 | Terceiro campo classificado     |

As áreas de cabeçalho adicionais estão associadas às pausas. Um cabeçalho de nível 1 é impresso imediatamente antes da impressão dos registros agrupados pelo primeiro campo classificado.

| Etiqueta | Descrição            | Prints after groups created by: |
| -------- | -------------------- | ------------------------------- |
| H1       | Cabeçalho no nível 1 | Primeiro campo classificado     |
| H2       | Cabeçalho no nível 2 | Segundo campo ordenado          |
| H3       | Cabeçalho no nível 3 | Terceiro campo classificado     |

Se você usar a função `Subtotal` para iniciar o processamento de Quebra, deverá criar uma área de Quebra para cada nível de Quebra que será gerado pela ordem de classificação, menos um. Se não for necessário imprimir nada em uma das áreas de quebra, é possível reduzir seu tamanho a nada colocando o marcador em cima de outra linha de controle. Se você tiver mais níveis de classificação do que áreas de quebra, a última área de quebra será repetida durante a impressão.
