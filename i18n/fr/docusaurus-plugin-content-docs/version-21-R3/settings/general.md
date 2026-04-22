---
id: general
title: Page Général
---

La page Général contient des options permettant de configurer les paramètres génériques du projet 4D.

## Développeur

Cette zone comporte l'option **Afficher la barre d'outils**. Lorsqu'elle est cochée, la barre d'outils 4D est affichée dans l'environnement de Développement.

## Général

Cette zone vous permet de personnaliser diverses options relatives au démarrage et au fonctionnement du projet.

### Mode de démarrage

Ce menu permet de sélectionner le mode dans lequel vous souhaitez que la base soit ouverte par défaut : **Développement** ou **Application**. A moins que vous ne le spécifiiez, 4D s'ouvre par défaut en mode Développement s’il n’y a pas de mots de passe en contrôlant l’accès.

## Composant

Cette zone permet aux [développeurs de composants](../Extensions/develop-components.md) de configurer la manière dont les classes et les fonctions de leurs composants seront exposées dans l'éditeur de méthodes 4D une fois que le composant sera installé.

### Namespace du composant dans le class store

Utilisez cette zone pour déclarer un espace de nommage pour les classes et les fonctions du composant dans le code des projets hôtes. Voir [Déclaration du namespace du composant](../Extensions/develop-components.md#declaring-the-component-namespace).

### Générer le fichier de syntaxe pour l'auto-complétion à la compilation

Lorsque vous cochez cette option, un fichier de syntaxe (format JSON) est automatiquement créé lors de la phase de compilation. Voir [Complétion de code pour les composants compilés](../Extensions/develop-components.md#code-completion-for-compiled-components).
