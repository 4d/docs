---
id: propertiesWebArea
title: Zones Web
---

---
## Accéder aux méthodes 4D

Il est possible d’appeler des méthodes 4D depuis le code JavaScript exécuté dans une zone Web et de recevoir des valeurs en retour. Pour pouvoir appeler des méthodes 4D depuis la zone Web, vous devez cocher l'option Accès méthodes 4D pour la zone dans la Liste des propriétés .

> Cette propriété n'est disponible que si la zone Web [utilise le moteur de rendu Web intégré](properties_WebArea.md#use-embedded-web-rendering-engine).

Lorsque cette propriété est cochée, un objet JavaScript spécial `$4d` est instancié dans la zone Web et permet de [gérer les appels aux méthodes projet de 4D](webArea_overview.md#4d-object).



#### Grammaire JSON

| Nom                  | Type de données | Valeurs possibles          |
| -------------------- | --------------- | -------------------------- |
| methodsAccessibility | string          | "none" (par défaut), "all" |

#### Objets pris en charge

[Zones Web](webArea_overview.md)


---
## Variable Progression

La variable "Progression" est de type Entier long. Elle contient une valeur entre 0 et 100, représentant le pourcentage du chargement complet de la page affichée dans la zone Web. La variable est mise à jour automatiquement par 4D. Il n’est pas possible de la modifier manuellement.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles              |
| -------------- | --------------- | ------------------------------ |
| progressSource | string          | Nom d'une variable Entier long |

#### Objets pris en charge

[Zones Web](webArea_overview.md)




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
| urlSource | string          | Une URL.          |

#### Objets pris en charge

[Zones Web](webArea_overview.md)






---
## Utiliser le moteur de rendu Web intégré

Cette option vous permet de choisir entre deux moteurs de rendus pour la zone Web, en fonction des spécificités de votre application :

*   **non coché** - `valeur JSON : system` (par défaut) : Dans ce cas, 4D utilise le "meilleur" moteur correspondant au système. Sous Windows, 4D utilise automatiquement la plus version la plus récente du navigateur présent sur la machine (IE11, MS Edge, etc.). Sur macOS, 4D utilise la version courante du WebKit (Safari). Ce fonctionnement vous permet de bénéficier automatiquement des dernières avancées en matière de rendu Web, via HTML5 ou JavaScript. En revanche, vous pouvez rencontrer des différences de rendu entre les implémentations d’Internet Explorer/Edge et de WebKit.
*   **coché** - `valeur JSON : embedded` : Dans ce cas, 4D utilise Blink à partir de Google (CEF). L’utilisation d'un moteur Web intégré vous permet d’avoir l’assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d’exécution de 4D (de légères variations de pixels ou des différences liées à l’implémentation réseau pourront toutefois être constatées). L’utilisation d'un moteur Web intégré vous permet d’avoir l’assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d’exécution de 4D (de légères variations de pixels ou des différences liées à l’implémentation réseau pourront toutefois être constatées).

A noter que le moteur Blink est soumis aux restrictions suivantes :

- [WA SET PAGE CONTENT](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.en.html) : l'utilisation de cette commande nécessite le chargement d'au moins une page dans la zone (via un appel à la commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) ou via une affectation à la variable URL associée à la zone).
- Lorsque les déposer d'URL sont rendus possibles par le sélecteur `WA enable URL drop` de la commande [WA SET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html), le premier déposer doit être précédé d'au moins un appel à la commande [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) ou d'une affectation vers la variable d'URL associée à la zone.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles    |
| --------- | --------------- | -------------------- |
| webEngine | string          | "embedded", "system" |

#### Objets pris en charge

[Zones Web](webArea_overview.md)