---
id: sdi
title: Mode SDI sous Windows
---


On Windows, 4D developers can test and configure their 4D merged applications to work as SDI (Single-Document Interface) applications. Dans les applications SDI, chaque fenêtre est indépendante des autres et peut avoir sa propre barre de menus. Les applications SDI sont opposées aux applications MDI (Multiple Documents Interface), où toutes les fenêtres sont contenues dans une fenêtre principale, et en dépendent.

:::info

Le concept SDI/MDI n'existe pas sur macOS. Cette fonctionnalité concerne uniquement des applications Windows, et les options s'y référant sont ignorées sous macOS.

:::

## Disponibilité du mode SDI

The SDI mode is available in the following execution environments only:

- Windows
- Merged [stand-alone](../Desktop/building.md#build-stand-alone-application) or [client](../Desktop/building.md#build-client-application) 4D application
- [**Test application** feature](bars.md#previewing-menu-bars) available from the **Run** menu.

## Activation du mode SDI

To enable the SDI mode in your application, just check the **Use SDI mode on Windows** option in the ["Interface" page of the Settings dialog box](../settings/interface.md#display-windows).

Once enabled, to actually run your application in SDI mode, you can either:

- build a merged application (standalone and/or client application) and execute it on Windows, or
- select **Test Application in SDI Mode** from the **Run** menu on Windows to test the development.

:::info

Because the development environment is executed in MDI, switching from development mode to runtime mode using the **Test Application in SDI Mode** menu item is equivalent to restarting your application.

:::


## Gestion des applications en mode SDI

L'exécution d'une application 4D en mode SDI ne requiert aucune implémentation particulière : les barres de menu existantes sont automatiquement déplacées dans les fenêtres SDI elles-mêmes. Cependant, vous devez être attentif aux principes spécifiques énumérés ci-dessous :

### Menus dans les fenêtres

En mode SDI, la barre de menu du process s'affiche automatiquement dans chaque fenêtre "document" ouverte durant la durée de vie du process (ceci exclut par exemple les palettes flottantes). Lorsque la barre de menu du process n'est pas visible, les raccourcis des lignes de menu restent toutefois actifs.

Les menus sont ajoutés au-dessus des fenêtres sans modifier la taille de leur contenu :

![](../assets/en/Menus/sdi1.png)

Les fenêtres peuvent donc être utilisées dans les modes MDI ou SDI sans avoir à recalculer la position des objets.

#### Image d'accueil

- If the **Splash screen** interface option was [selected in the Settings](../settings/interface.md#display-windows), the splash window will contain any menus that would have been displayed in the MDI window. Notez également que la fermeture de la fenêtre d'accueil entraînera la sortie de l'application, tout comme dans le mode MDI.
- Si l'option Accueil n'a pas été cochée dans la base de données, les menus seront affichés uniquement dans les fenêtres ouvertes, selon les choix du Développeur.

### Débogueur

When displayed in SDI mode, the [debugger window](../Debugging/debugger.md) does not contain [editing buttons](../Debugging/debugger.md#tool-bar-buttons), because switching to development environment requires to abort execution and restart the application in MDI mode.

### Arrêt automatique

Lorsqu'elle est exécutée en mode MDI, une application 4D quitte simplement lorsque l'utilisateur ferme la fenêtre de l'application (fenêtre MDI). Cependant, lorsqu'elles sont exécutées en mode SDI, les applications 4D n'ont pas de fenêtre d'application et, d'autre part, la fermeture de la dernière fenêtre ouverte ne signifie pas nécessairement que l'utilisateur souhaite quitter l'application (des process sans interface peuvent être exécutés par exemple) -- mais cela peut être le cas.

Pour gérer cette situation, les applications 4D exécutées en mode SDI incluent un mécanisme pour quitter automatiquement (en appelant la commande `QUIT 4D`) lorsque les conditions suivantes sont remplies :

- l'utilisateur ne peut plus interagir avec l'application
- il n'y a pas de process utilisateur en cours
- les process 4D ou workers sont en attente d'un événement
- the Web server is not started
- the [WebAdmin server](../Admin/webAdmin.md) is not started.

:::note

Lorsqu'un menu avec une action standard associée pour *quitter* est appelé, l'application quitte et toutes les fenêtres sont fermées, quel que soit l'endroit d'où le menu a été appelé.

:::

## Langage

Bien qu'il soit traité de manière transparente par 4D, le mode SDI introduit de légères variations dans la gestion de l'interface d'application. Les spécificités dans le langage 4D sont listées ci-dessous :

| Commande/fonctionnalité           | Spécificité en mode SDI sous Windows                                                                                                                                                                                                                                                                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Open form window`                | Options pour supporter les fenêtres flottantes en SDI (`Controller form window`) et pour supprimer la barre de menu (`Form has no menu bar`)                                                                                                                                                                                                                  |
| `Menu bar height`                 | Retourne la hauteur en pixels d'une ligne de barre de menu unique, même si la barre de menu a été incluse sur une ou plusieurs lignes. Retourne 0 lorsque la commande est appelée à partir d'un process sans fenêtre formulaire                                                                                                                               |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Appliqué uniquement à la fenêtre formulaire courante (d'où le code est exécuté)                                                                                                                                                                                                                                                                               |
| `MAXIMIZE WINDOW`                 | La fenêtre est maximisée à la taille de l'écran                                                                                                                                                                                                                                                                                                               |
| `CONVERT COORDINATES`             | `XY Screen` est le système de coordonnées global dans lequel l'écran principal est positionné à (0,0). Les écrans à gauche ou au-dessus de lui peuvent avoir des valeurs de coordonnées négatives et les écrans à droite ou au-dessous de lui peuvent avoir des valeurs de coordonnées supérieures à celles retournées par `Screen height` ou `Screen width`. |
| `GET MOUSE`                       | Les coordonnées globales sont relatives à l'écran                                                                                                                                                                                                                                                                                                             |
| `GET WINDOW RECT`                 | Lorsque -1 est passé dans le paramètre fenêtre, la commande retourne 0;0;0;0                                                                                                                                                                                                                                                                                  |
| `On Drop database method`         | Non supporté                                                                                                                                                                                                                                                                                                                                                  |

:::info

You can use the [**Get application info**](https://doc.4d.com/4dv19R/help/command/en/page1599.html) command to know the current running mode on Windows.

:::