---
id: overview
title: Extensions
---

[L'architecture des projets](../Project/architecture.md) 4D est modulaire. Vous pouvez ajouter des fonctionnalités supplémentaires dans vos projets 4D en installant des [**composants**](Concepts/components.md) et des [**plug-ins**](../Concepts/plug-ins.md). Les composants sont constitués de code 4D, tandis que les plug-ins peuvent être créés à l'aide de n'importe quel langage.

## Components developed by 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| Composant             | Github repository                                                           | Description                                                                       | Principales fonctionnalités                                                                                                             |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | Set of classes to connect to third-party OpenAI APIs                              | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | Set of web service tools to connect to third-party APIs                           | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | Ouverture d'une ou plusieurs barres de progression dans la même fenêtre           | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D SVG                | https://github.com/4d/4D-SVG                | Création et manipulation d'objets graphiques svg courants                         | `SVGTool_Display_viewer`, multiple `SVG_` methods                                                                                       |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | Fonctions de tableur dans vos formulaires                                         | Voir la [documentation de 4D View Pro](ViewPro/getting-started.md)                                                                      |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | Gestion des widgets 4D DatePicker, TimePicker et SearchPicker                     | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interface 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## Composants tiers

Vous pouvez développer et installer vos propres composants 4D. Consultez [cette section](develop-components.md) pour plus d'informations.

De nombreux développeurs de la communauté 4D ont partagé des composants 4D que vous pouvez installer et utiliser dans vos projets.

Parcourez GitHub pour obtenir la liste de composants 4D publics rassemblés sous le thème [`4d-component`](https://github.com/topics/4d-component).

## Plugins

Les plugins font des choses que 4D ne fait pas nativement (par exemple, une technologie de plateforme spécifique), ou qui seraient très difficiles à écrire en utilisant uniquement 4D. Comme décrit dans [cette page](develop-plug-ins.md), vous pouvez développer vos propres plugins.

De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants. De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants.


