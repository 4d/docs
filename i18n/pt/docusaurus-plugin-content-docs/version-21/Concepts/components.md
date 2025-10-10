---
id: components
title: Componentes
---

Um componente 4D é um conjunto de código 4D e formulários que representam uma ou mais funcionalidades que pode instalar e usar nos seus projectos. Por exemplo, o [componente 4D SVG](https://github.com/4d/4D-SVG) adiciona comandos avançados e um mecanismo de renderização integrado que pode ser usado para exibir arquivos SVG.

## Instalação de componentes

Installation and loading of components in your 4D projects are handled through the [4D Dependency manager](../Project/components.md).

Several components are [developed by 4D](../Extensions/overview.md#components-developed-by-4d), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component&type=Repositories). Além disso, você pode [desenvolver seus próprios componentes 4D](../Extensions/develop-components.md).

## Utilização de componentes

O código de componente exposto (métodos e funções) assim como os formulários podem ser usados como elementos padrão no seu desenvolvimento 4D.

Quando um componente instalado contém métodos, classes e funções, estes aparecem no tema Component Methods da página Métodos do Explorador:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

Se o componente for compilado, seu [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) será escrito entre parênteses após seu nome. Utilize este espaço de nomes para aceder às funções do componente.

:::

Pode seleccionar um componente método de projecto ou classe e clicar no botão Documentação do Explorador para obter informações sobre o mesmo, se existir.

![alt-text](../assets/en/Project/compDoc.png)

:::note

Interpreted component code can be [edited directly from the host project](../Extensions/develop-components.md#editing-components-from-the-host) if the context is supported.

:::