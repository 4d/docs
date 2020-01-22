---
id: propertiesWebArea
title: Zone Web
---

---
## Accéder aux méthodes 4D

Il est possible d’appeler des méthodes 4D depuis le code JavaScript exécuté dans une zone Web et de recevoir des valeurs en retour. Pour pouvoir appeler des méthodes 4D depuis la zone Web, vous devez cocher l'option Accès méthodes 4D pour la zone dans la Liste des propriétés .

> Cette option n’apparaît que si l’option [Utiliser le moteur de rendu Web intégré](#use-embedded-web-rendering-engine) est cochée.

Lorsque cette propriété est cochée, un objet JavaScript spécial `$4d` est instancié dans la zone Web et permet de [gérer les appels aux méthodes projet de 4D](webArea_overview.md#4d-object).



#### Grammaire JSON

| Nom                  | Type de données | Valeurs possibles          |
| -------------------- | --------------- | -------------------------- |
| methodsAccessibility | chaîne          | "none" (par défaut), "all" |

#### Objets pris en charge

[Zone Web](webArea_overview.md)


---
## Variable Progression

La variable "Progression" est de type Entier long. Elle contient une valeur entre 0 et 100, représentant le pourcentage du chargement complet de la page affichée dans la zone Web. La variable est mise à jour automatiquement par 4D. Il n’est pas possible de la modifier manuellement.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles              |
| -------------- | --------------- | ------------------------------ |
| progressSource | chaîne          | Nom d'une variable Entier long |

#### Objets pris en charge

[Zone Web](webArea_overview.md)




---
## Variable URL

La variable "URL" est de type chaîne. Elle contient l’URL chargé ou en cours de chargement par la zone Web associée. L’association entre la variable et la zone Web s’effectue dans les deux sens :

*   Si l’utilisateur affecte un nouvel URL à la variable, l’URL est automatiquement chargé par la zone Web.
*   Toute navigation effectuée à l’intérieur de la zone Web met automatiquement à jour le contenu de la variable.

Schématiquement, cette variable fonctionne comme la zone d’adresse d’un navigateur Web. Vous pouvez la représenter par une zone de texte située au-dessus de la zone Web.

### Variable URL et commande WA OUVRIR URL

La variable URL produit les mêmes effets que la commande [WA OUVRIR URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html). Les différences suivantes sont toutefois à noter :
- Pour les accès aux documents, la variable accepte uniquement des URLs conformes aux RFC ("file://c:/Mon%20Doc") et non les chemins d’accès système ("c:\MonDoc"). La commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) accepte les deux notations.
- Si la variable URL contient une chaîne vide, la zone Web ne tente pas de charger l’URL. La commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) génère une erreur dans ce cas.
- Si la variable URL ne contient pas de protocole (http, mailto, file, etc.), la zone Web ajoute "http://", ce qui n’est pas le cas pour la commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html).
- Lorsque la zone Web n’est pas affichée dans le formulaire (lorsqu’elle se trouve sur une autre page du formulaire), l’exécution de la commande[WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) est sans effet tandis que la valorisation de la variable URL permet de mettre à jour l’URL courant.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles |
| --------- | --------------- | ----------------- |
| urlSource | chaîne          | Une URL.          |

#### Objets pris en charge

[Zone Web](webArea_overview.md)






---
## Utiliser le moteur de rendu Web intégré

Cette option vous permet de choisir entre deux moteurs de rendus pour la zone Web, en fonction des spécificités de votre application :

*   **unchecked** - `JSON value: system` (default): In this case, 4D uses the "best" engine corresponding to the system. On Windows, 4D automatically uses the most recent version of the browser found on the machine (IE11, MS Edge, etc.). On macOS, 4D uses the current version of WebKit (Safari). This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between Internet Explorer/Edge implementations and Web Kit ones.
*   **checked** - `JSON value: embedded`: In this case, 4D uses Blink engine from Google. Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are provided through 4D.

    Note that the Blink engine has the following limitations:
    *   [WA SET PAGE CONTENT](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PAGE-CONTENT.301-4310783.en.html): using this command requires that at least one page is already loaded in the area (through a call to [WA OPEN URL](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-OPEN-URL.301-4310772.en.html) or an assignment to the URL variable associated to the area).
    *   Execution of Java applets, JavaScripts and plug-ins is always enabled and cannot be disabled in Web areas in Blink. The following selectors of the [WA SET PREFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) and [WA GET PREFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-GET-PREFERENCE.301-4310763.en.html) commands are ignored:
        *   `WA enable Java applets`
        *   `WA enable JavaScript`
        *   `WA enable plugins`
    *   When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-OPEN-URL.301-4310772.en.html) or one assignment to the URL variable associated to the area.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles    |
| --------- | --------------- | -------------------- |
| webEngine | chaîne          | "embedded", "system" |

#### Objets pris en charge

[Zone Web](webArea_overview.md)