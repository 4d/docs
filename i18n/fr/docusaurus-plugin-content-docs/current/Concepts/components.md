---
id: components
title: Composants
---

A 4D component is a set of 4D code and forms representing one or more functionalities that you can install and use in your projects. Par exemple, le [composant 4D SVG](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) ajoute des commandes avancées et un moteur de rendu intégré qui peut être utilisé pour afficher des fichiers SVG.

## Où se trouvent les composants ?

Plusieurs composants sont [préinstallés dans l'environnement de développement 4D](Extensions/overview.md), mais de nombreux composants 4D de la communauté 4D [sont disponibles sur GitHub](https://github.com/search?q=4d-component&type=Repositories). De plus, vous pouvez [développer vos propres composants 4D](Extensions/develop-components.md).


## Installation des composants

Pour installer un composant, il suffit de copier les fichiers du composant dans le dossier [`Components` du projet](Project/architecture.md). Vous pouvez utiliser des alias ou des raccourcis.

Un projet hôte fonctionnant en mode interprété peut utiliser des composants interprétés ou compilés. Un projet hôte fonctionnant en mode compilé ne peut pas utiliser de composants interprétés. Dans ce cas, seuls les composants compilés peuvent être utilisés.

## Utilisation des composants

Exposed component code (methods and functions) as well as forms can be used as standard elements in your 4D development.

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Use this namespace to access the component's functions.

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
