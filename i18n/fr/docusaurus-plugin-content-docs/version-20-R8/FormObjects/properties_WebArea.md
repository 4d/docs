---
id: propertiesWebArea
title: Zones Web
---

---

## Accéder aux méthodes 4D

Il est possible d’appeler des méthodes 4D depuis le code JavaScript exécuté dans une zone Web et de recevoir des valeurs en retour. Pour pouvoir appeler des méthodes 4D depuis la zone Web, vous devez cocher l'option Accès méthodes 4D pour la zone dans la Liste des propriétés .

> Cette option n’apparaît que si l’option [Utiliser le moteur de rendu Web intégré](properties_WebArea.md#use-embedded-web-rendering-engine) est cochée.

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

The URL variable produces the same effects as the [WA OPEN URL](../commands-legacy/wa-open-url.md) command. Les différences suivantes sont toutefois à noter :

- Pour les accès aux documents, la variable accepte uniquement des URLs conformes aux RFC ("file://c:/Mon%20Doc") et non les chemins d’accès système ("c:\MonDoc"). The [WA OPEN URL](../commands-legacy/wa-open-url.md) command accepts both notations.
- Si la variable URL contient une chaîne vide, la zone Web ne tente pas de charger l’URL. The [WA OPEN URL](../commands-legacy/wa-open-url.md) command generates an error in this case.
- If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the [WA OPEN URL](../commands-legacy/wa-open-url.md) command.
- When the Web area is not displayed in the form (when it is located on another page of the form), executing the [WA OPEN URL](../commands-legacy/wa-open-url.md) command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.

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

- [WA SET PAGE CONTENT](../commands-legacy/wa-set-page-content.md): using this command requires that at least one page is already loaded in the area (through a call to [`WA OPEN URL`](../commands-legacy/wa-open-url.md) or an assignment to the URL variable associated to the area).
- When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](../commands-legacy/wa-set-preference.md) command, the first drop must be preceded by at least one call to [WA OPEN URL](../commands-legacy/wa-open-url.md) or one assignment to the URL variable associated to the area.

:::note

You can customize CEF area parameters by creating a local [4DCEFParameters.json configuration file](webArea_overview.md#4dcefparametersjson).

:::

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles    |
| --------- | --------------- | -------------------- |
| webEngine | string          | "embedded", "system" |

#### Objets pris en charge

[Web Area](webArea_overview.md)
