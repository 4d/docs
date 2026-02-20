---
id: overview
title: Extension des applications 4D
---

## Vue d’ensemble

L'architecture des [projets 4D](../Project/architecture.md) est ouverte et peut être étendue de différentes manières. Si vous avez besoin d'une fonctionnalité qui n'est pas disponible de manière native dans 4D, vous pouvez toujours l'intégrer dans votre application de différentes manières :

- les [**System workers**](../API/SystemWorkerClass.md) permettent au code 4D d'appeler n'importe quel process externe (une commande shell, PHP, un script, etc.) et d'en contrôler l'exécution.
- les [**commandes SQL**](../commands/theme/SQL) vous permettent de vous connecter à diverses sources de données SQL et de les utiliser .
- Le [**client HTTP intégré**](../API/HTTPRequestClass.md) peut envoyer des requêtes à n'importe quel serveur HTTP et traiter les données.
- les [**zones web**](../FormObjects/webArea_overview.md) peuvent donner accès à des pages web ou à divers contenus HTML à l'intérieur de vos formulaires.
- les [**Composants**](Concepts/components.md). Les composants sont faits de code 4D. 4D propose un ensemble de composants utilitaires (voir ci-dessous) que vous pouvez installer et utiliser en fonction de vos besoins. Vous pouvez également [développer vos propres composants 4D](develop-components.md), ou utiliser des composants tiers. De nombreux développeurs de la communauté 4D ont partagé des composants 4D (consultez Github pour obtenir une liste des composants 4D publics rassemblés dans le topic [`4d-component`](https://github.com/topics/4d-component)).
- les [**Plug-ins**](../Concepts/plug-ins.md). Les plug-ins peuvent être créés dans n'importe quel langage. Les plugins font des choses que 4D ne fait pas nativement (par exemple, une technologie de plateforme spécifique), ou qui seraient très difficiles à écrire en utilisant uniquement 4D. Comme décrit dans [cette page](develop-plug-ins.md), vous pouvez développer vos propres plugins. De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants. Parcourez GitHub pour obtenir la liste des plugins 4D publics rassemblés sous le topic [`4d-plugin`](https://github.com/topics/4d-plugin).

## Composants développés par 4D

4D propose différents composants à la communauté 4D, couvrant de nombreux besoins de développement. Tous les composants 4D sont présents sur le [dépôt github de 4D](https://github.com/4d).

Un sous-ensemble de ces composants est listé par défaut dans le [Gestionnaire de dépendances](../Project/components.md), notamment :

| Composant             | Dépôt Github                                                                | Description                                                                                             | Principales fonctionnalités                                                                                                             |
| --------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | Ensemble de classes permettant de se connecter à des API OpenAI tierces                                 | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | Ensemble d'outils de services web permettant de se connecter à des API tierces                          | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | Ouverture d'une ou plusieurs barres de progression dans la même fenêtre                                 | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D QPDF               | https://github.com/4d/4D-QPDF               | Extraire les pièces jointes des fichiers PDF/A-3                                                        | `PDF Get attachments`                                                                                                                   |
| 4D SVG                | https://github.com/4d/4D-SVG                | Création et manipulation d'objets graphiques svg courants                                               | `SVGTool_Display_viewer`, multiple `SVG_` methods                                                                                       |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | Fonctions de tableur dans vos formulaires                                                               | Voir la [documentation de 4D View Pro](ViewPro/getting-started.md)                                                                      |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | Gestion des widgets 4D DatePicker, TimePicker et SearchPicker                                           | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interface 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Gestion de palettes et de [l'assistant de tableaux](../WritePro/writeprointerface.md) dans 4D Write Pro | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |
| Build4D               | https://github.com/4d-depot/Build4D         | Compiler, construire et signer des projets                                                              | CI/CD                                                                                                                                   |



