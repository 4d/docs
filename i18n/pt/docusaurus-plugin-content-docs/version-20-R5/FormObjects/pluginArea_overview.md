---
id: pluginAreaOverview
title: Área Plug-in
---

Uma área de plug-in é uma área no formulário que é totalmente controlada por um plug-in. A capacidade de incorporar plug-ins aos formulários oferece possibilidades ilimitadas para a criação de aplicativos personalizados. Um plug-in pode executar uma tarefa simples, como a exibição de um relógio digital em um formulário, ou uma tarefa complexa, como o fornecimento de recursos completos de processamento de texto, planilhas ou gráficos.

Ao abrir uma aplicação, 4D cria uma lista interna dos plug-ins [instalados em sua aplicação](#installing-plug-ins). Quando tiver inserido uma área Plug-in em um formulário, pode atribuir um plug-in para a área diretamente na lista **Tipo** na Lista de propriedades:

![](../assets/en/FormObjects/pluginArea.png)

> Alguns plug-ins, como 4D Internet Commands, não podem ser usados em formulários ou janelas externas. Quando um plug-in não pode ser usado em um formulário, ele não aparece na lista de plug-ins da Lista de propriedades.

Se você desenhar uma área de plugin muito pequena, 4D irá exibi-lo como um botão cujo título é o nome da variável associada à área. Durante a execução, o usuário pode clicar nesse botão para abrir uma janela específica que exiba o plug-in.

## Propriedades avançadas

Se opções avançadas são fornecidas pelo autor do plug-in, um tema **Plug-in** contendo uma [**Propriedades Avançadas**](properties_Plugins.md) botão pode ser ativado na lista de propriedades. Nesse caso, você pode clicar nesse botão para definir essas opções, geralmente por uma caixa de diálogo personalizada.

## Instalação de plug-ins

Para adicionar um plug-in no seu ambiente 4D, primeiro precisa de sair do 4D. Os plug-ins são carregados quando se inicia 4D. Para obter mais informações sobre a instalação de plug-ins, consulte [Instalando plugins ou componentes](https://doc.4d.com/4Dv17R6/4D/17-R6/Installing-plugins-or-components.300-4354866.en.html).

## Criação de plug-ins

Se estiver interessado em projetar seus próprios plug-ins, você poderá receber informações abrangentes sobre como criar e implementar plug-ins. 4D fornece um [kit completo (no github)](https://github.com/4d/4D-Plugin-SDK) para ajudá-lo a escrever plugins personalizados.

## Propriedades compatíveis

[Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Propriedades Avançadas](properties_Plugins.md) - [Clase](properties_Object.md#css-class) - [Arrastável](properties_Action.md#draggable-and-droppable) - [Droppable](propriedades_Action.md#draggable-and-droppable) - [Tipo de Expressão](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Altura](propriedades_CoordinatesAndSizing.md#height) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Ezquerda](propriedades_Coordinates_AndSizing.md#left) - [Método](properties_Action.md#method) - [Nome do objeto](properties_Object.md#object-name) - [Tipo de plug-in](properties_Object.md#plug-in-kind) - [Direita](properties_CoordinatesAndSizing.md#right) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](propriedades_Object.md#type) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - [Tamanho Vertical](properties_ResizingOps.md#vertical-sizing) - [Visibilidade](propriedades_Display.md#visibiliity) - [Largura](properties_CoordinatesAndSizing.md#width)
