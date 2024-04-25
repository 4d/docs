---
id: plug-ins
title: Plug-ins
---

En développant une application 4D, vous découvrirez de nombreuses fonctionnalités que vous n'aviez pas remarquées au début. You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## Qu'est-ce qu'un plug-in et à quoi sert-il ?

Un plug-in est un morceau de code, écrit dans n'importe quel langage tel que C ou C++, que 4D lance au démarrage. Il ajoute des fonctionnalités à 4D et augmente ainsi sa capacité. Un plug-in contient généralement un ensemble de routines fournies au développeur 4D. Il peut gérer des zones externes et exécuter des process externes.

## Où se trouvent les plug-ins ?

De nombreux plug-ins ont déjà été écrits par la communauté 4D. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin\&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).

## Installer un plug-in

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](../Project/architecture.md#plugins).

Les plug-ins et les composants sont chargés par 4D lors du lancement de l’application. Vous devez donc quitter votre application 4D avant d’effectuer vos copies de fichiers ou dossiers. Si l’utilisation d'un plug-in nécessite une licence spécifique, le plug-in est chargé mais n’est pas actif.

## Utilisation des plug-ins

Les commandes de plug-ins peuvent être utilisées comme des commandes 4D classiques de votre développement 4D. Plug-in commands appear in the **Plug-ins** page of the Explorer.
