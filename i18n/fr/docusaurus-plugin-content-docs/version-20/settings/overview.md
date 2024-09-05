---
id: overview
title: Propriétés
---

Les Propriétés configurent le fonctionnement du projet en cours. Ces paramètres peuvent être différents pour chaque projet. Ils comprennent les ports d'écoute, les configurations de sauvegarde, les options de sécurité, les paramètres Web, etc.

![](../assets/en/settings/main.png)

> 4D fournit un autre ensemble de paramètres, appelés **Préférences**, qui s'appliquent à l'application 4D IDE. Pour plus d'informations, reportez-vous à la section [Préférences](../Preferences/general.md).


## Accès aux propriétés

Vous pouvez accéder à la boîte de dialogue Propriétés :

-   en utilisant l'option de menu **Développement > Paramètres...**
-   en cliquant sur **Paramètres** dans la barre d'outils 4D
-   sur 4D Server, via l'option de menu **Edition > Paramètres...**

Lorsque le mode [**Paramètres utilisateur** est activé](../Desktop/user-settings.md), **Paramètres...** est renommé **Paramètres de la structure...** et deux commandes de menu supplémentaires sont disponibles à chaque emplacement :

-   **Paramètres utilisateur...** vous donne accès aux paramètres qui peuvent être stockés en externe dans un fichier utilisateur. Si ceux-ci sont modifiés, ils sont utilisés à la place des paramètres de structure.
-   **Paramètres utilisateur pour le fichier de données...** vous donne accès aux paramètres qui peuvent être stockés en externe dans un fichier utilisateur rattaché au fichier de données courant. S'ils sont modifiés, ils sont utilisés à la place des paramètres utilisateur ou des paramètres de structure.

### Informations sur le verrouillage

Le verrouillage peut se produire dans les modes Projet et Client/serveur lorsque :

-   Le fichier *settings.4DSettings* est en 'Lecture seule' (Projets uniquement). La modification d'un paramètre affiche une alerte pour le déverrouiller, le cas échéant.
-   Deux utilisateurs ou plus tentent de modifier les mêmes paramètres en même temps. Les paramètres ne peuvent pas être utilisés jusqu'à ce que le premier utilisateur les libère en fermant la fenêtre. (Client/serveur uniquement)

Dans les deux cas, les paramètres peuvent être ouverts en 'Lecture seule', mais ne peuvent pas être utilisés tant qu'ils sont verrouillés.



## Personnalisation des paramètres

Dans les boîtes de dialogue des Propriétés, les paramètres dont les valeurs ont été modifiées apparaissent **en gras** :

![](../assets/en/settings/customize-settings.png)

Les paramètres indiqués comme personnalisés peuvent avoir été modifiés directement dans la boîte de dialogue, ou avoir été modifiés précédemment dans le cas d'un projet converti.

Un paramètre apparaît toujours en gras même lorsque sa valeur est remplacée manuellement par ses valeurs par défaut. Ainsi, il est toujours possible d'identifier visuellement les paramètres qui ont été personnalisés.

La plupart des paramètres sont appliqués immédiatement. Toutefois, certains d'entre eux (tels que le paramètre de démarrage) ne prennent effet que lorsque la base de données est redémarrée. Dans ce cas, une boîte de dialogue apparaît pour vous informer que la modification prendra effet au prochain démarrage.


## Réinitialisation des paramètres

Pour rétablir les paramètres à leurs valeurs par défaut et supprimer le style gras indiquant qu'ils ont été personnalisés, cliquez sur **Rétablir les paramètres d'usine**.

Ce bouton réinitialise tous les paramètres de la page courante. Il devient actif lorsqu'au moins un paramètre a été modifié sur la page courante.
