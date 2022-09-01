---
id: components
title: Composants
---

Un composant 4D est un ensemble de méthodes et de formulaires 4D représentant une ou plusieurs fonctionnalité(s), qu’il est possible d’installer et d'utiliser dans différents projets. Par exemple, le [composant 4D SVG](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) ajoute des commandes avancées et un moteur de rendu intégré qui peut être utilisé pour afficher des fichiers SVG.

## Où se trouvent les composants ?

Plusieurs composants sont [préinstallés dans l'environnement de développement 4D](Extensions/overview.md), mais de nombreux composants 4D de la communauté 4D [sont disponibles sur GitHub](https://github.com/search?q=4d-component&type=Repositories). De plus, vous pouvez [développer vos propres composants 4D](Extensions/develop-components.md).


## Installation des composants

Pour installer un composant, il suffit de copier les fichiers du composant dans le dossier [`Components` du projet](Project/architecture.md). Vous pouvez utiliser des alias ou des raccourcis.

Un projet hôte fonctionnant en mode interprété peut utiliser des composants interprétés ou compilés. Un projet hôte fonctionnant en mode compilé ne peut pas utiliser de composants interprétés. Dans ce cas, seuls les composants compilés peuvent être utilisés.

## Utilisation des composants

Les formulaires et méthodes composant peuvent être utilisés comme éléments standard de votre développement 4D.

Lorsqu'un composant installé contient des méthodes, celles-ci apparaissent dans le thème **Méthodes composant** de la page Méthodes de l'Explorateur.

Vous pouvez sélectionner une méthode composant et cliquer sur le bouton **Documentation** de l'Explorateur pour obtenir des informations à son sujet, [le cas échéant](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
