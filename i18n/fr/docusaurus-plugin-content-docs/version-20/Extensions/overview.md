---
id: overview
title: Extensions
---

[L'architecture des projets](../Project/architecture.md) 4D est modulaire. Vous pouvez fournir des fonctionnalités supplémentaires à vos projets 4D en installant des [**composants**](Concepts/components.md) et des [**plug-ins**](../Concepts/plug-ins.md). Les composants sont constitués de code 4D, tandis que les plug-ins peuvent être créés à l'aide de n'importe quel langage.


## Composants 4D préinstallés

4D includes by default a set of built-in 4D components, that you can see in the **Component Methods** theme of the Explorer's Methods page. All these components can also be found on the [4D github repository](https://github.com/4d).


| Composant                                                            | Description                                                                                               | Principales fonctionnalités                                                             |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [4D Labels](https://github.com/4d/4D-Labels)                         | Composant interne requis pour la création de modèles de labels                                            |                                                                                         |
| [4D NetKit](https://github.com/4d/4D-NetKit)                         | Ensemble d'outils permettant de se connecter à des API tierces                                            | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`        |
| [4D Progress](https://github.com/4d/4D-Progress)                     | Ouvrir une ou plusieurs barres de progression dans la même fenêtre                                        | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| [4D SVG](https://github.com/4d/4D-SVG)                               | Créez et manipulez des objets graphiques svg courants                                                     | `SVGTool_Display_viewer`, multiple `SVG_` methods                                       |
| [4D ViewPro](ViewPro/getting-started.md)                             | Fonctions de tableur dans vos formulaires                                                                 | Voir la [documentation de 4D View Pro](ViewPro/getting-started.md)                      |
| [4D Widgets](https://github.com/4d/4D-Widgets)                       | Gérez les widgets 4D DatePicker, TimePicker et SearchPicker                                               | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| [Interface 4D WritePro](https://github.com/4d/4D-WritePro-Interface) | Manage [4D Write Pro](https://doc.4d.com/4Dv20/4D/20/4D-Write-Pro-Reference.100-6229455.en.html) palettes | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`          |


## Composants tiers

Vous pouvez développer et installer vos propres composants 4D. Consultez [cette section](develop-components.md) pour plus d'informations.

De nombreux développeurs de la communauté 4D ont partagé des composants 4D que vous pouvez installer et utiliser dans vos projets.

Parcourez GitHub pour obtenir la liste de composants 4D publics rassemblés sous le thème [`4d-component`](https://github.com/topics/4d-component).


## Plugins

Les plugins font des choses que 4D ne fait pas nativement (par exemple, une technologie de plateforme spécifique), ou qui seraient très difficiles à écrire en utilisant uniquement 4D. Comme décrit dans [cette page](develop-plug-ins.md), vous pouvez développer vos propres plugins.

De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants. Parcourez GitHub pour obtenir la liste de plugins 4D publics rassemblés sous le thème [`4d-plugin`](https://github.com/topics/4d-plugin).


