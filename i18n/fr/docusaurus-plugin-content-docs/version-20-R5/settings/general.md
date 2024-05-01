---
id: general
title: Page Général
---

La page Général contient des options permettant de configurer les paramètres génériques du projet 4D.

## Développeur

This area contains the **Display toolbar** option. Lorsqu'elle est cochée, la barre d'outils 4D est affichée dans l'environnement de Développement.

## Général

Cette zone vous permet de personnaliser diverses options relatives au démarrage et au fonctionnement du projet.

### Mode de démarrage

You use this menu to select the default startup mode for the database: **Design** or **Application**. A moins que vous ne le spécifiiez, 4D s'ouvre par défaut en mode Développement s’il n’y a pas de mots de passe en contrôlant l’accès.

## Composant

This area allows [component developers](../Extensions/develop-components.md) to configure how their component classes and functions will be exposed in the 4D Code Editor once the component is installed.

### Namespace du composant dans le class store

Utilisez cette zone pour déclarer un espace de nommage pour les classes et les fonctions du composant dans le code des projets hôtes. See [Declaring the component namespace](../Extensions/develop-components.md#declaring-the-component-namespace).

### Générer le fichier de syntaxe pour l'auto-complétion à la compilation

Lorsque vous cochez cette option, un fichier de syntaxe (format JSON) est automatiquement créé lors de la phase de compilation. See [Code completion for compiled components](../Extensions/develop-components.md#code-completion-for-compiled-components).
