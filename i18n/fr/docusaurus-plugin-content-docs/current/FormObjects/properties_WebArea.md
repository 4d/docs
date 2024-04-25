---
id: propertiesWebArea
title: Zones Web
---

---

## Accéder aux méthodes 4D

Il est possible d’appeler des méthodes 4D depuis le code JavaScript exécuté dans une zone Web et de recevoir des valeurs en retour. Pour pouvoir appeler des méthodes 4D depuis la zone Web, vous devez cocher l'option Accès méthodes 4D pour la zone dans la Liste des propriétés .

> This property is only available if the Web area [uses the embedded Web rendering engine](#use-embedded-web-rendering-engine).

When this property is on, a special JavaScript object named `$4d` is instantiated in the Web area, which you can [use to manage calls to 4D project methods](webArea_overview.md#4d-object).

#### Grammaire JSON

| Nom                  | Type de données | Valeurs possibles                             |
| -------------------- | --------------- | --------------------------------------------- |
| methodsAccessibility | string          | "none" (par défaut), "all" |

#### Objets pris en charge

[Web Area](webArea_overview.md)

---

## Variable Progression

La variable "Progression" est de type Entier long. Elle contient une valeur entre 0 et 100, représentant le pourcentage du chargement complet de la page affichée dans la zone Web. La variable est mise à jour automatiquement par 4D. Il n’est pas possible de la modifier manuellement.

> As of 4D v19 R5, this variable is only updated on Windows if the Web area [uses the embedded Web rendering engine](#use-embedded-web-rendering-engine).

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

The URL variable produces the same effects as the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command. Les différences suivantes sont toutefois à noter :

- Pour les accès aux documents, la variable accepte uniquement des URLs conformes aux RFC ("file://c:/Mon%20Doc") et non les chemins d’accès système ("c:\MonDoc"). The [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command accepts both notations.
- Si la variable URL contient une chaîne vide, la zone Web ne tente pas de charger l’URL. The [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command generates an error in this case.
- If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command.
- When the Web area is not displayed in the form (when it is located on another page of the form), executing the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles        |
| --------- | --------------- | ------------------------ |
| urlSource | string          | Une URL. |

#### Objets pris en charge

[Web Area](webArea_overview.md)

---

## Utiliser le moteur de rendu Web intégré

Cette option vous permet de choisir entre deux moteurs de rendus pour la zone Web, en fonction des spécificités de votre application :

- **unchecked** - `JSON value: system` (default): In this case, 4D uses the "best" engine corresponding to the system. Ce fonctionnement vous permet de bénéficier automatiquement des dernières avancées en matière de rendu Web, via HTML5 ou JavaScript. However, you may notice some rendering differences between platforms. On Windows, 4D uses Microsoft Edge WebView2. Sur macOS, 4D utilise la version courante du WebKit (Safari).

> On Windows, if Microsoft Edge WebView2 is not installed, 4D uses the embedded engine as system rendering engine. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel.

- **checked** - `JSON value: embedded`: In this case, 4D uses the Chromium Embedded Framework (CEF). L’utilisation d'un moteur Web intégré vous permet d’avoir l’assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d’exécution de 4D (de légères variations de pixels ou des différences liées à l’implémentation réseau pourront toutefois être constatées). L’utilisation d'un moteur Web intégré vous permet d’avoir l’assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d’exécution de 4D (de légères variations de pixels ou des différences liées à l’implémentation réseau pourront toutefois être constatées).

The CEF engine has the following limitations:

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv19/help/command/en/page1037.html): using this command requires that at least one page is already loaded in the area (through a call to [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) or an assignment to the URL variable associated to the area).
- When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) or one assignment to the URL variable associated to the area.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles    |
| --------- | --------------- | -------------------- |
| webEngine | string          | "embedded", "system" |

#### Objets pris en charge

[Web Area](webArea_overview.md)
