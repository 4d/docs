---
id: propertiesWebArea
title: Zones Web
---

---

## Accéder aux méthodes 4D

Il est possible d’appeler des méthodes 4D depuis le code JavaScript exécuté dans une zone Web et de recevoir des valeurs en retour. Pour pouvoir appeler des méthodes 4D depuis la zone Web, vous devez cocher l'option Accès méthodes 4D pour la zone dans la Liste des propriétés .

> This property is only available if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

Lorsque cette propriété est cochée, un objet JavaScript spécial `$4d` est instancié dans la zone Web et permet de [gérer les appels aux méthodes projet de 4D](webArea_overview.md#4d-object).

#### Grammaire JSON

| Nom                  | Type de données | Valeurs possibles                             |
| -------------------- | --------------- | --------------------------------------------- |
| methodsAccessibility | string          | "none" (par défaut), "all" |

#### Objets pris en charge

[Web Area](webArea_overview.md)

---

## Variable Progression

La variable "Progression" est de type Entier long. Elle contient une valeur entre 0 et 100, représentant le pourcentage du chargement complet de la page affichée dans la zone Web. La variable est mise à jour automatiquement par 4D. Il n’est pas possible de la modifier manuellement.

> As of 4D v19 R5, this variable is only updated on Windows if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles              |
| -------------- | --------------- | ------------------------------ |
| progressSource | string          | Nom d'une variable Entier long |

#### Objets pris en charge

[Web Area](webArea_overview.md)

---

## Variable URL

La variable "URL" est de type chaîne. Elle contient l’URL chargé ou en cours de chargement par la zone Web associée. L’association entre la variable et la zone Web s’effectue dans les deux sens :

- Si l’utilisateur affecte un nouvel URL à la variable, l’URL est automatiquement chargé par la zone Web.
- Toute navigation effectuée à l’intérieur de la zone Web met automatiquement à jour le contenu de la variable.

Schématiquement, cette variable fonctionne comme la zone d’adresse d’un navigateur Web. Vous pouvez la représenter par une zone de texte située au-dessus de la zone Web.

### Variable URL et commande WA OUVRIR URL

La variable URL produit les mêmes effets que la commande [WA OUVRIR URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html). Les différences suivantes sont toutefois à noter :

- Pour les accès aux documents, la variable accepte uniquement des URLs conformes aux RFC ("file://c:/Mon%20Doc") et non les chemins d’accès système ("c:\MonDoc"). La commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) accepte les deux notations.
- Si la variable URL contient une chaîne vide, la zone Web ne tente pas de charger l’URL. La commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) génère une erreur dans ce cas.
- Si la variable URL ne contient pas de protocole (http, mailto, file, etc.), la zone Web ajoute "http://", ce qui n’est pas le cas pour la commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html).
- Lorsque la zone Web n'est pas affichée dans le formulaire (lorsqu'elle se trouve sur une autre page du formulaire), l'exécution de la commande [WA OPEN URL](https://doc.4d.com/4dv20/help/command/fr/page1020.html) est sans effet, tandis que l'assignation d'une valeur à la variable URL permet de mettre à jour l'URL courant.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles        |
| --------- | --------------- | ------------------------ |
| urlSource | string          | Une URL. |

#### Objets pris en charge

[Web Area](webArea_overview.md)

---

## Utiliser le moteur de rendu Web intégré

Cette option vous permet de choisir entre deux moteurs de rendus pour la zone Web, en fonction des spécificités de votre application :

- **non coché** - `valeur JSON : system` (par défaut) : Dans ce cas, 4D utilise le "meilleur" moteur correspondant au système. Ce fonctionnement vous permet de bénéficier automatiquement des dernières avancées en matière de rendu Web, via HTML5 ou JavaScript. Cependant, vous pouvez remarquer des différences de rendu entre les plates-formes. Sous Windows, 4D utilise Microsoft Edge WebView2. Sur macOS, 4D utilise la version courante du WebKit (Safari).

> Sur Windows, si Microsoft Edge WebView2 n'est pas installé, 4D utilise le moteur intégré en tant que moteur de rendu système. Pour savoir s'il est installé sur votre système, recherchez "Microsoft Edge WebView2 Runtime" dans votre panneau d'applications.

- **coché** - `JSON value: embedded`: Dans ce cas, 4D utilise le Chromium Embedded Framework (CEF). L’utilisation d'un moteur Web intégré vous permet d’avoir l’assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d’exécution de 4D (de légères variations de pixels ou des différences liées à l’implémentation réseau pourront toutefois être constatées). L’utilisation d'un moteur Web intégré vous permet d’avoir l’assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d’exécution de 4D (de légères variations de pixels ou des différences liées à l’implémentation réseau pourront toutefois être constatées).

Le moteur CEF a les limitations suivantes :

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv20/help/command/fr/page1037.html): l'utilisation de cette commande nécessite qu'au moins une page soit déjà chargée dans la zone (par un appel à [`WA OPEN URL`](https://doc.4d.com/4dv20/help/command/fr/page1020.html) ou une affectation à la variable URL associée à la zone).
- Lorsque les dépôts d'URL sont activés via le sélecteur `WA enable URL drop` de [WA SET PREFERENCE](https://doc.4d.com/4dv20/help/command/fr/page1041.html), le premier dépôt doit être précédé par au moins un appel à [WA OPEN URL](https://doc.4d.com/4dv20/help/command/fr/page1020.html) ou une affectation à la variable URL associée à la zone.

:::note

You can customize CEF area parameters by creating a local [4DCEFParameters.json configuration file](webArea_overview.md#4dcefparametersjson).

:::

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles    |
| --------- | --------------- | -------------------- |
| webEngine | string          | "embedded", "system" |

#### Objets pris en charge

[Web Area](webArea_overview.md)
