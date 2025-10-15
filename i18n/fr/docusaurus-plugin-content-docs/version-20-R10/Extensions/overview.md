---
id: overview
title: Extension des applications 4D
---

L'architecture de 4D est ouverte et peut être étendue de plusieurs façons. Si vous avez besoin d'une fonctionnalité qui n'est pas disponible de manière native dans 4D, vous pouvez toujours l'intégrer dans votre application de différentes manières :

- les [**System workers**](../API/SystemWorkerClass.md) permettent au code 4D d'appeler n'importe quel process externe (une commande shell, PHP, un script, etc.) et d'en contrôler l'exécution.
- les [**commandes SQL**](../commands/theme/SQL) vous permettent de vous connecter à diverses sources de données SQL et de les utiliser .
- Le [**client HTTP intégré**](../API/HTTPRequestClass.md) peut envoyer des requêtes à n'importe quel serveur HTTP et traiter les données.
- les [**zones web**](../FormObjects/webArea_overview.md) peuvent donner accès à des pages web ou à divers contenus HTML à l'intérieur de vos formulaires.
- les [**Composants**](Concepts/components.md). Les composants sont faits de code 4D. 4D inclut par défaut [un ensemble de composants 4D](../Project/components.md#preinstalled-4d-components). Vous pouvez également [développer vos propres composants 4D](develop-components.md), ou utiliser des composants tiers. De nombreux développeurs de la communauté 4D ont partagé des composants 4D (consultez Github pour obtenir une liste des composants 4D publics rassemblés dans le topic [`4d-component`](https://github.com/topics/4d-component)).
- les [**Plug-ins**](../Concepts/plug-ins.md). Les plug-ins peuvent être créés dans n'importe quel langage. Les plugins font des choses que 4D ne fait pas nativement (par exemple, une technologie de plateforme spécifique), ou qui seraient très difficiles à écrire en utilisant uniquement 4D. Comme décrit dans [cette page](develop-plug-ins.md), vous pouvez développer vos propres plugins. De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants. Parcourez GitHub pour obtenir la liste des plugins 4D publics rassemblés sous le topic [`4d-plugin`](https://github.com/topics/4d-plugin).
