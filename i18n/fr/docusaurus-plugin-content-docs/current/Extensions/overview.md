---
id: overview
title: Extensions
---

[L'architecture des projets](../Project/architecture.md) 4D est modulaire. Vous pouvez ajouter des fonctionnalités supplémentaires dans vos projets 4D en installant des [**composants**](Concepts/components.md) et des [**plug-ins**](../Concepts/plug-ins.md). Les composants sont constitués de code 4D, tandis que les plug-ins peuvent être créés à l'aide de n'importe quel langage.

## Composants 4D préinstallés

4D inclut par défaut un ensemble de composants 4D intégrés, que vous pouvez voir dans le thème **Méthodes composants** de la page Méthodes de l'Explorateur. Tous ces composants sont également présents sur le [dépôt github de 4D](https://github.com/4d).

| Composant                                                             | Description                                                                                                                                                                                                                                                                                                                                 | Principales fonctionnalités                                                                                                             |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [4D AiIKit](https://github.com/4d/4D-AIKit)                           | Set of classes to connect to third-party OpenAI APIs                                                                                                                                                                                                                                                                                        | `OpenAIChat`, `OpenAIImage`...                                                          |
| [4D Labels](https://github.com/4d/4D-Labels)                          | Composant interne requis pour la création de modèles de labels                                                                                                                                                                                                                                                                              |                                                                                                                                         |
| [4D NetKit](https://developer.4d.com/4D-NetKit)                       | Set of web service tools to connect to third-party APIs                                                                                                                                                                                                                                                                                     | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| [4D Progress](https://github.com/4d/4D-Progress)                      | Ouverture d'une ou plusieurs barres de progression dans la même fenêtre                                                                                                                                                                                                                                                                     | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| [4D SVG](https://github.com/4d/4D-SVG)                                | Création et manipulation d'objets graphiques svg courants                                                                                                                                                                                                                                                                                   | `SVGTool_Display_viewer`, multiple `SVG_` methods                                                                                       |
| [4D View Pro](ViewPro/getting-started.md)                             | Fonctions de tableur dans vos formulaires                                                                                                                                                                                                                                                                                                   | Voir la [documentation de 4D View Pro](ViewPro/getting-started.md)                                                                      |
| [4D Widgets](https://github.com/4d/4D-Widgets)                        | Gestion des widgets 4D DatePicker, TimePicker et SearchPicker                                                                                                                                                                                                                                                                               | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| [4D Write Pro Interface](https://github.com/4d/4D-WritePro-Interface) | Manage [4D Write Pro palettes](https://doc.4d.com/4Dv20R9/4D/20-R9/Entry-areas.300-7543821.en.html and [table wizard](../WritePro/writeprointerface.md#table-wizard) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## Composants tiers

Vous pouvez développer et installer vos propres composants 4D. Consultez [cette section](develop-components.md) pour plus d'informations.

De nombreux développeurs de la communauté 4D ont partagé des composants 4D que vous pouvez installer et utiliser dans vos projets.

Parcourez GitHub pour obtenir la liste de composants 4D publics rassemblés sous le thème [`4d-component`](https://github.com/topics/4d-component).

## Plugins

Les plugins font des choses que 4D ne fait pas nativement (par exemple, une technologie de plateforme spécifique), ou qui seraient très difficiles à écrire en utilisant uniquement 4D. Comme décrit dans [cette page](develop-plug-ins.md), vous pouvez développer vos propres plugins.

De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants. De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants.


