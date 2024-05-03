---
id: components
title: Componentes
---

Um componente 4D é um conjunto de código 4D e formulários que representam uma ou mais funcionalidades que pode instalar e usar nos seus projectos. For example, the [4D SVG component](https://doc.4d.com/4Dv20/4D/20/4D-SVG-Component.100-6342795.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## Instalação de componentes

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component\&type=Repositories). Additionnally, you can [develop your own 4D components](Extensions/develop-components.md).

Installation and loading of components in your 4D projects are handled through the [4D package manager](../Project/components.md).

## Utilização de componentes

O código de componente exposto (métodos e funções) assim como os formulários podem ser usados como elementos padrão no seu desenvolvimento 4D.

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Utilize este espaço de nomes para aceder às funções do componente.

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
