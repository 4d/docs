---
id: components
title: Composants
---

Un composant 4D est un ensemble de code et de formulaires 4D représentant une ou plusieurs fonctionnalités que vous pouvez installer et utiliser dans vos projets. For example, the [4D SVG component](https://doc.4d.com/4Dv20/4D/20/4D-SVG-Component.100-6342795.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## Installation des composants

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component\&type=Repositories). Additionnally, you can [develop your own 4D components](Extensions/develop-components.md).

Installation and loading of components in your 4D projects are handled through the [4D package manager](../Project/components.md).

## Utilisation des composants

Le code exposé des composants (méthodes et fonctions) ainsi que les formulaires peuvent être utilisés comme éléments standard dans votre développement 4D.

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Utilisez ce namespace pour accéder aux fonctions du composant.

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
