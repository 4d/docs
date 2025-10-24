---
id: components
title: Composants
---

Un composant 4D est un ensemble de code et de formulaires 4D représentant une ou plusieurs fonctionnalités que vous pouvez installer et utiliser dans vos projets. Par exemple, le [composant 4D SVG](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) ajoute des commandes avancées et un moteur de rendu intégré qui peut être utilisé pour afficher des fichiers SVG.

## Où se trouvent les composants ?

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/topics/4d-component). De plus, vous pouvez [développer vos propres composants 4D](Extensions/develop-components.md).


## Installation des composants

Pour installer un composant, il suffit de copier les fichiers du composant dans le dossier [`Components` du projet](Project/architecture.md). Vous pouvez utiliser des alias ou des raccourcis.

Un projet hôte fonctionnant en mode interprété peut utiliser des composants interprétés ou compilés. Un projet hôte fonctionnant en mode compilé ne peut pas utiliser de composants interprétés. Dans ce cas, seuls les composants compilés peuvent être utilisés.

:::note

Le nom d'un dossier de composant interprété doit être suffixé ".4dbase".

:::

## Utilisation des composants

Le code exposé des composants (méthodes et fonctions) ainsi que les formulaires peuvent être utilisés comme éléments standard dans votre développement 4D.

Lorsqu'un composant installé contient des méthodes, des classes et des fonctions, celles-ci apparaissent dans le thème **Méthodes Composant** de la page Méthodes de l'explorateur :

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

Si le composant est compilé, son [espace de nommage](../Extensions/develop-components.md#declaring-the-component-namespace) est écrit entre parenthèses après son nom. Utilisez ce namespace pour accéder aux fonctions du composant.

:::

Vous pouvez sélectionner une [méthode projet](methods.md) ou [classe](classes.md) de composant et cliquer sur le bouton **Documentation** de l'Explorateur pour obtenir des informations à son sujet, [le cas échéant](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
