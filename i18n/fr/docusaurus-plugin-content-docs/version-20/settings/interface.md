---
id: interface
title: Page Interface
---

 
La page Interface vous permet de régler diverses options liées à l'interface du projet.

## Général

Cette zone vous permet de personnaliser diverses options d'affichage.

![](../assets/en/settings/interface-page.png)

### Police à utiliser avec la commande MESSAGE

Le bouton **Sélectionner...** vous permet de définir la police et la taille des caractères utilisés par la commande `MESSAGE`.

La police et la taille de police par défaut dépendent de la plate-forme d'exécution de 4D.

> Les parties suivantes de 4D sont également affectées par cette propriété : <li>certaines zones d’aperçu de l’Explorateur,</li><li>la règle de L'Editeur de formulaires</li>
### Afficher fenêtres

D'autres options permettent de configurer l'affichage de diverses fenêtres du mode Application.

-   **Accueil** : lorsque cette option est désélectionnée, la [fenêtre d’accueil (ou “splash screen”) de la barre de menus courante](Menus/bars.md#splash-screen) en mode Application n’apparaît pas. Lorsque vous masquez cette fenêtre, c'est à vous de gérer l'affichage de toutes vos fenêtres par programmation, par exemple dans la méthode base `On Startup`.

-   **Ecriture du cache** : Lorsque cette option est cochée, 4D affiche une fenêtre en bas à gauche de l'écran pendant que les données du cache sont vidées. Etant donné que cette opération bloque momentanément les actions de l'utilisateur, l'affichage de cette fenêtre lui permet de savoir que l'écriture du cache est en cours.

:::note

Vous pouvez définir la [fréquence d'écriture du cache](database.md#memory-page) dans **Propriétés** > **Base de données** > **Mémoire**.

:::

-   **Progression de l'impression** : permet, lors de l'impression, d'activer ou de désactiver l'affichage de la boîte de dialogue de progression de l'impression.

-   **Use SDI mode on Windows**: When this option checked, 4D enables automatically the [SDI mode (Single-Document Interface)](../Menus/sdi.md) in your application when executed in a [supported context](../Menus/sdi.md#sdi-mode-availability). When you select this option, on Windows the **Run** menu of the 4D menu bar allows you to select the mode in which you want to test the application:

    ![](../assets/en/settings/sdi-mdi.png)

:::note

Cette option peut être sélectionnée sur macOS mais sera ignorée lorsque l'application sera exécutée sur cette plateforme.

:::



### Apparence

Ce menu vous permet de sélectionner la palette de couleurs à utiliser au niveau de l'application principale. Une palette de couleurs définit un ensemble global de couleurs d'interface pour les textes, les arrière-plans, les fenêtres, etc., utilisés dans vos formulaires.

> Cette option fonctionne uniquement sur macOS. Sous Windows, la palette "Light" est toujours utilisée.

Les palettes suivants sont disponibles :

-   **Clair** : l'application utilisera le thème clair par défaut ![](../assets/en/settings/light-appearance.png)
-   **Foncé**: l'application utilisera le thème foncé par défaut ![](../assets/en/settings/dark-appearance.png)
-   **Héritée** (par défaut) : l'application hérite du niveau de priorité le plus élevé (c'est-à-dire les préférences de l'utilisateur du système d'exploitation)

> Les thèmes par défaut peuvent être gérés par du CSS. Pour plus d'informations, veuillez consulter la section [Media Queries](../FormEditor/createStylesheet.md#media-queries).

La palette d'application principale sera appliquée aux formulaires par défaut. Toutefois, elle peut être remplacée :

-   par la commande [SET APPLICATION COLOR SCHEME](https://doc.4d.com/4dv19R/help/command/en/page1762.html) au niveau de la session de travail ;
-   en utilisant la propriété de formulaire [Color Scheme](../FormEditor/propertiesForm.html#color-scheme) à chaque niveau de formulaire (niveau de priorité le plus élevé). **Note** : à l'impression, les formulaires utilisent toujours la palette "Light".

## Raccourcis

La zone Raccourcis clavier permet d'afficher et de modifier les raccourcis clavier par défaut pour trois opérations de base du formulaire 4D dans vos applications desktop. Ces raccourcis clavier sont identiques pour les deux plateformes. Les icônes des touches indiquent les touches correspondant à Windows et à macOS.

Les raccourcis clavier par défaut sont les suivants :

-   Acceptation de saisie : **Entrée**
-   Annulation de saisie : **Echap**
-   Ajout d'un sous-formulaire : **Ctrl+Shift+/** (Windows) ou **Command+Shift+/** (macOS)

Pour modifier le raccourci d'une opération, cliquez sur le bouton **Modifier** correspondant. La boîte de dialogue suivante apparaît :

![](../assets/en/settings/shortcut.png)

Pour modifier le raccourci clavier, tapez la nouvelle combinaison de touches sur votre clavier et cliquez sur **OK**. Si vous préférez ne pas avoir de raccourci pour une opération, cliquez sur **Effacer**.


