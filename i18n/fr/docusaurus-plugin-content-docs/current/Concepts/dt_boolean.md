---
id: boolean
title: Boolean
---

Un champ, une variable ou une expression de type booléen peut être soit VRAI soit FAUX.

## Fonctions booléennes

Les fonctions booléennes de 4D traitent des valeurs telles que `Vrai`, `Faux` et `Non` dans le thème **Booléens** consacré. Pour plus d'informations, veuillez vous reporter à la description de ces commandes.

### Exemple

L'exemple suivant retourne Vrai dans la variable monBooléen si l'utilisateur a cliqué sur le bouton monBouton et Faux s'il n'a pas cliqué dessus. . Lorsqu'un bouton reçoit un clic, la variable du bouton prend la valeur 1.

```4d
 If(monBouton=1) // Si le bouton a reçu un clic
    monBooléen:=True// monBooléen prend la valeur True
 Else // Si le bouton n'a pas reçu de clic,
    monBooléen:=False //monBooléen prend la valeur False
 End if
```

L'exemple ci-dessus peut être simplifié et écrit en une seule ligne .

```4d
monBooléen:=(monBouton=1)
```

## Opérateurs logiques

4D supporte deux opérateurs logiques : l'opérateur d'intersection (AND) et l'opérateur de réunion inclusive (OR). Le AND logique retourne TRUE si les deux expressions sont VRAIES. Le OR logique retourne TRUE si au moins une des expressions est VRAIE. Le tableau suivant décrit les opérateurs logiques :

| Opération | Syntaxe                                   | Retourne | Expression                                                                       | Valeur |
| --------- | ----------------------------------------- | -------- | -------------------------------------------------------------------------------- | ------ |
| AND       | Booléen & Booléen     | Boolean  | ("A" = "A") & (15 # 3) | True   |
|           |                                           |          | ("A" = "B") & (15 # 3) | False  |
|           |                                           |          | ("A" = "B") & (15 = 3) | False  |
| OU        | Booléen &amp; Booléen | Boolean  | ("A" = "A") \| (15 # 3)                    | True   |
|           |                                           |          | ("A" = "B") \|  (15 # 3)                   | True   |
|           |                                           |          | ("A" = "B") \|  (15 = 3)                   | False  |

Voici la "table de vérité" pour l'opérateur logique "AND" :

| Expr1 | Expr2 | Expr1 & Expr2 |
| ----- | ----- | --------------------------------- |
| True  | True  | True                              |
| True  | False | False                             |
| False | True  | False                             |
| False | False | False                             |

Voici la "table de vérité" pour l'opérateur logique "OR" :

| Expr1 | Expr2 | Expr1 \| Expr2 |
| ----- | ----- | -------------- |
| True  | True  | True           |
| True  | False | True           |
| False | True  | True           |
| False | False | False          |

**Astuce :** Si vous devez calculer une réunion exclusive (le "Ou" exclusif) entre Expr1 et Expr2, écrivez :

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```

> Dans les contextes booléens, le langage 4D prend également en charge les [opérateurs de court-circuit](operators.md#short-circuit-operators) (`&&` et `||`) et le concept de [truthy et falsy](operators.md#truthy-and-falsy).
