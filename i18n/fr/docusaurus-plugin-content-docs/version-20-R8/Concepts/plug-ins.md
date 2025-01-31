---
id: plug-ins
title: Plug-ins
---

Au fur et à mesure que vous développerez une application 4D, vous découvrirez de nombreuses fonctionnalités que vous n'aviez pas remarqué lorsque vous avez démarré. Vous pouvez même étendre la version standard de 4D en ajoutant des **plug-ins** à votre environnement de développement 4D.

## Qu'est-ce qu'un plug-in et à quoi sert-il ?

Un plug-in est un morceau de code, écrit dans n'importe quel langage tel que C ou C++, que 4D lance au démarrage. Il ajoute des fonctionnalités à 4D et augmente ainsi sa capacité. Un plug-in contient généralement un ensemble de routines fournies au développeur 4D. Il peut gérer des zones externes et exécuter des process externes.

## Où se trouvent les plug-ins ?

De nombreux plug-ins ont déjà été écrits par la communauté 4D. Les plug-ins publiés [sont disponibles sur GitHub](https://github.com/search?q=4d-plugin\&type=Repositories). De plus, vous pouvez [développer vos propres plug-ins](Extensions/develop-plug-ins.md).

## Installer un plug-in

Installez les plug-ins dans l'environnement 4D en copiant leurs fichiers dans le dossier **Plugins**, au [même niveau que le dossier Project](../Project/architecture.md#plugins).

Les plug-ins et les composants sont chargés par 4D lors du lancement de l’application. Vous devez donc quitter votre application 4D avant d’effectuer vos copies de fichiers ou dossiers. Si l’utilisation d'un plug-in nécessite une licence spécifique, le plug-in est chargé mais n’est pas actif.

## Utilisation des plug-ins

Les commandes de plug-ins peuvent être utilisées comme des commandes 4D classiques de votre développement 4D. Les commandes de plug-ins apparaissent dans la page **Plug-ins** de l'Explorateur.
