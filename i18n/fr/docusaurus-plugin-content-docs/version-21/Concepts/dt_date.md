---
id: date
title: Date
---

Les variables, champs ou expressions de type Date peuvent être compris entre 1/1/100 et 31/12/32767.

Bien que le mode de représentation des dates puisse fonctionner avec des dates jusqu'à l'année 32 767, certaines opérations passant par le système imposent une limite inférieure.

**Note :** Dans le manuel de référence du langage 4D, les paramètres de type Date dans les descriptions des commandes sont appelés Date, sauf spécification explicite.

## Constantes littérales de type date

Une constante littérale de type date est comprise entre deux points d'exclamation (!…!). Une date doit être structurée avec le format ISO (!YYYY-MM-DD!). Voici quelques exemples de constantes dates :

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

Une date nulle s’écrit *!00-00-00!*.

**Astuce :** L'éditeur de code comprend un raccourci pour saisir une date nulle. Pour entrer une date nulle, tapez un point d’exclamation (!) et appuyez sur Entrée. et appuyez sur Entrée.

**Notes :**

- Pour des raisons de compatibilité, 4D accepte la saisie de dates en utilisant le format du système avec des années sur deux chiffres, telles que !12/04/98!. Une année sur deux chiffres est supposée appartenir au XXe ou au XXIe siècle si elle est respectivement supérieure ou inférieure à 30, sauf si ce paramètre par défaut a été modifié à l'aide de la commande `SET DEFAULT CENTURY`.
- Si vous avez coché l'option "Utiliser langage français et paramètres régionaux système" (cf. Page Méthodes), vous devez utiliser le format de date défini dans votre système. Généralement dans un environnement français, une date est saisie sous la forme jour/mois/année, une barre oblique "/" séparant les valeurs.

## Opérateurs sur les dates

| Opération           | Syntaxe                               | Retourne | Expression                  | Valeur       |
| ------------------- | ------------------------------------- | -------- | --------------------------- | ------------ |
| Différence          | Date - Date                           | Number   | !2017-01-20! - !2017-01-01! | 19           |
| Addition            | Date + Numérique                      | Date     | !2017-01-20! + 9            | !2017-01-29! |
| Soustraction        | Date - Numérique                      | Date     | !2017-01-20! !2017-01-20!   | !2017-01-11! |
| Egalité             | Date = Date                           | Boolean  | !2017-01-20! = !2017-01-01! | True         |
|                     |                                       |          | !2017-01-20! !2017-01-20!   | False        |
| Inégalité           | Date # Date                           | Boolean  | !2017-01-20! !2017-01-20!   | True         |
|                     |                                       |          | !2017-01-20! !2017-01-20!   | False        |
| Supérieur à         | Date > Date                           | Boolean  | !2017-01-20! !2017-01-20!   | True         |
|                     |                                       |          | !2017-01-20! !2017-01-20!   | False        |
| Inférieur à         | Date < Date  | Boolean  | !2017-01-20! !2017-01-20!   | True         |
|                     |                                       |          | !2017-01-20! !2017-01-20!   | False        |
| Supérieur ou égal à | Date >= Date                          | Boolean  | !2017-01-20! !2017-01-20!   | True         |
|                     |                                       |          | !2017-01-01!>=!2017-01-20!  | False        |
| Inférieur ou égal à | Date <= Date | Boolean  | !2017-01-20! !2017-01-20!   | True         |
|                     |                                       |          | !2017-01-20! !2017-01-20!   | False        |

## Conversion de dates à partir de JavaScript

Comme les dates en JavaScript sont des objets, elles sont envoyées à 4D sous forme de texte contenant leur forme JSON comme n'importe quel autre objet. Ce principe est mis en œuvre en particulier lors de l'utilisation des [commandes JSON](../commands/theme/JSON.md) ou des [zones Web](../FormObjects/webArea_overview.md).

La forme JSON des objets Date JavaScript suit la norme ISO 8601, par exemple "2013-08-23T00:00:00Z". Il est de votre ressort de convertir ce texte en une date 4D. Deux solutions sont possibles :

Utiliser la commande [`JSON Parse`](../commands-legacy/json-parse.md) :

```4d
 var $dateIso : Text // réception d'une date au format ISO
 var $date4D : Date 
 $date4D:=JSON Parse("\""+$dateIso+"\""Is date))
```

Utiliser la commande [`Date`](../commands-legacy/date.md) :

```4d
 var $dateIso : Text // réception d'une date au format ISO
 var $date4D : Date 
 $date4D:=Date($dateIso)
```

Notez la différence entre ces deux solutions : [`JSON Parse`](../commands-legacy/json-parse.md) respecte le [mode de conversion défini à l'aide de `SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md#dates-inside-objects-85) (s'il est défini), alors que [`Date`](../commands-legacy/date.md) n'y est pas soumis. La conversion à l'aide de la commande [`Date`](../commands-legacy/date.md) tient toujours compte du fuseau horaire local.

:::note

Lorsque le paramétrage courant de stockage de la date est [`date type`](../commands-legacy/set-database-parameter.md#dates-inside-objects-85) (par défaut), les chaînes de date JSON au format "YYYY-MM-DD" sont automatiquement traitées comme des valeurs de date par les commandes [`JSON Parse`](../commands-legacy/json-parse.md) et [`Date`](../commands-legacy/date.md).

:::