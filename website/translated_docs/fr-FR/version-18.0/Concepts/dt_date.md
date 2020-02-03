---
id: version-18.0-date
title: Date
original_id: date
---

- Les variables, champs ou expressions de type Date peuvent être compris entre 1/1/100 et 31/12/32767.
- Bien que le mode de représentation des dates par C_DATE permette de manipuler des dates allant jusqu'à l'année 32 767, certaines opérations passant par le système imposent une limite plus basse.

**Note:** In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise.

## Constantes littérales de type date

Une constante littérale de type date est comprise entre deux points d'exclamation (!…!). Une date doit être structurée avec le format ISO (!YYYY-MM-DD!). Voici quelques exemples de constantes dates :

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

A null date is specified by _!00-00-00!_.

**Tip:** The Method Editor includes a shortcut for entering a null date. Pour cela, tapez un point d’exclamation (!) et appuyez sur la touche Entrée.

**Notes :**

- Pour des raisons de compatibilité, 4D accepte que l'année soit saisie sur deux chiffres. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `SET DEFAULT CENTURY` command.
- Si vous avez coché l'option "Utiliser langage français et paramètres régionaux système" (cf. Page Méthodes), vous devez utiliser le format de date défini dans votre système. Généralement dans un environnement français, une date est saisie sous la forme jour/mois/année, une barre oblique "/" séparant les valeurs.

## Opérateurs sur les dates

| Opération           | Syntaxe          | Retourne | Expression                  | Valeur       |
| ------------------- | ---------------- | -------- | --------------------------- | ------------ |
| Différence          | Date - Date      | Nombre   | !2017-01-20! - !2017-01-01! | 19           |
| Addition            | Date + Numérique | Date     | !2017-01-20! + 9            | !2017-01-29! |
| Soustraction        | Date - Numérique | Date     | !2017-01-20! - 9            | !2017-01-11! |
| Egalité             | Date = Date      | Booléen  | !2017-01-01! =!2017-01-01!  | Vrai         |
|                     |                  |          | !2017-01-20! = !2017-01-01! | Faux         |
| Inégalité           | Date # Date      | Booléen  | !2017-01-20! # !2017-01-01! | Vrai         |
|                     |                  |          | !2017-01-20! # !2017-01-20! | Faux         |
| Supérieur à         | Date > Date      | Booléen  | !2017-01-20! > !2017-01-01! | Vrai         |
|                     |                  |          | !2017-01-20! > !2017-01-20! | Faux         |
| Inférieur à         | Date < Date      | Booléen  | !2017-01-01! < !2017-01-20! | Vrai         |
|                     |                  |          | !2017-01-20! < !2017-01-20! | Faux         |
| Supérieur ou égal à | Date >= Date     | Booléen  | !2017-01-20! >=!2017-01-01! | Vrai         |
|                     |                  |          | !2017-01-01!>=!2017-01-20!  | Faux         |
| Inférieur ou égal à | Date <= Date     | Booléen  | !2017-01-01!<=!2017-01-20!  | Vrai         |
|                     |                  |          | !2017-01-20!<=!2017-01-01!  | Faux         |
