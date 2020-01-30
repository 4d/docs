---
id: date
title: Date
---

- Les variables, champs ou expressions de type Date peuvent être compris entre 1/1/100 et 31/12/32767.
- Bien que le mode de représentation des dates par C_DATE permette de manipuler des dates allant jusqu'à l'année 32 767, certaines opérations passant par le système imposent une limite plus basse. 

**Note :** Dans ce manuel de référence du langage 4D, les paramètres de type Date dans les descriptions des commandes sont appelés Date, sauf spécification explicite.

## Constantes littérales de type date

Une constante littérale de type date est comprise entre deux points d'exclamation (!…!). Une date doit être structurée avec le format ISO (!YYYY-MM-DD!). Voici quelques exemples de constantes dates :

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

Une date nulle s’écrit *!00-00-00!*.

**Astuce :** L'éditeur de méthodes dispose d'un raccourci pour entrer une date nulle. Pour cela, tapez un point d’exclamation (!) et appuyez sur la touche Entrée.

**Notes:**

- Pour des raisons de compatibilité, 4D accepte que l'année soit saisie sur deux chiffres. Dans ce cas, le programme considère qu’elle appartient au XXe ou au XXIe siècle selon qu'elle est supérieure ou inférieure à 30, sauf si ce fonctionnement par défaut a été modifié à l'aide de la commande ```SIECLE PAR DEFAUT``` 
- Si vous avez coché l'option "Utiliser langage français et paramètres régionaux système" (cf. Page Méthodes), vous devez utiliser le format de date défini dans votre système. Généralement dans un environnement français, une date est saisie sous la forme jour/mois/année, une barre oblique "/" séparant les valeurs.

## Opérateurs sur les dates

| Operation                | Syntax           | Returns | Expression                  | Value        |
| ------------------------ | ---------------- | ------- | --------------------------- | ------------ |
| Différence               | Date - Date      | Nombre  | !2017-01-20! - !2017-01-01! | 19           |
| Addition                 | Date + Numérique | Date    | !2017-01-20! + 9            | !2017-01-29! |
| Soustraction             | Date - Numérique | Date    | !2017-01-20! - 9            | !2017-01-11! |
| Equality                 | Date = Date      | Boolean | !2017-01-01! =!2017-01-01!  | True         |
|                          |                  |         | !2017-01-20! = !2017-01-01! | False        |
| Inequality               | Date # Date      | Boolean | !2017-01-20! # !2017-01-01! | True         |
|                          |                  |         | !2017-01-20! # !2017-01-20! | False        |
| Greater than             | Date > Date      | Boolean | !2017-01-20! > !2017-01-01! | True         |
|                          |                  |         | !2017-01-20! > !2017-01-20! | False        |
| Less than                | Date < Date      | Boolean | !2017-01-01! < !2017-01-20! | True         |
|                          |                  |         | !2017-01-20! < !2017-01-20! | False        |
| Greater than or equal to | Date >= Date     | Boolean | !2017-01-20! >=!2017-01-01! | True         |
|                          |                  |         | !2017-01-01!>=!2017-01-20!  | False        |
| Less than or equal to    | Date <= Date     | Boolean | !2017-01-01!<=!2017-01-20!  | True         |
|                          |                  |         | !2017-01-20!<=!2017-01-01!  | False        |