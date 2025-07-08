---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->

<!--REF #_command_.SET ALLOWED METHODS.Params-->

| Paramètres   | Type       |                             | Description                 |
| ------------ | ---------- | --------------------------- | --------------------------- |
| methodsArray | Text array | &#8594; | Tableau de noms de méthodes |

<!-- END REF-->

## Description

<!--REF #_command_.SET ALLOWED METHODS.Summary-->The **SET ALLOWED METHODS** command designates the project methods that can be entered via the application.<!-- END REF-->

4D inclut un mécanisme de sécurité filtrant les méthodes projet saisissables depuis les contextes suivants :

- L'éditeur de formules - les méthodes autorisées apparaissent à la fin de la liste des commandes par défaut et peuvent être utilisées dans les formules (voir la section *Description de l'éditeur de formules*).
- L'éditeur d'étiquettes - les méthodes autorisées sont listées dans le menu **Appliquer** si elles sont également partagées avec le composant (voir la section *Description de l'éditeur d'étiquettes*).
- Les formules insérées dans des zones de texte stylées ou dans des documents 4D Write Pro par la commande [ST INSERT EXPRESSION](../commands-legacy/st-insert-expression.md) - les méthodes non autorisées sont automatiquement rejetées.
- Les documents 4D View Pro - par défaut, si la commande [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) n'a jamais été appelée au cours de la session, les formules 4D View Pro n'acceptent que les méthodes définies par **SET ALLOWED METHODS**. Cependant, il est recommandé d'utiliser [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md). Voir [Déclarer une méthode autorisée](../ViewPro/formulas.md#declaring-allowed-methods).

Par défaut, si vous n'utilisez pas la commande **SET ALLOWED METHODS**, aucune méthode n'est appelable (l'utilisation d'une méthode non autorisée dans une expression provoque une erreur).

Dans le paramètre *methodsArray*, passez le nom d'un tableau contenant la liste des méthodes à autoriser. Le tableau doit avoir été défini précédemment.

Vous pouvez utiliser le caractère "joker" (@) dans les noms des méthodes pour définir un ou plusieurs groupe(s) de méthodes autorisées.

Si vous souhaitez que l'utilisateur puisse appeler des commandes 4D non autorisées par défaut ou des commandes de plug-in, vous devez utiliser des méthodes spécifiques chargées d’exécuter ces commandes.

**Note :** Le filtrage des commandes et méthodes peut être désactivé pour tous les utilisateurs ou pour le Super_Utilisateur et l'Administrateur via [une option sur la page "Sécurité" des Paramètres](../settings/security.md#options). Si l'option "Désactivé pour tous" est sélectionnée, la commande **SET ALLOWED METHODS** n'aura aucun effet.

:::warning

Cette commande ne filtre que la **saisie** des méthodes, pas leur **exécution**. Elle ne contrôle pas l'exécution des formules créées en dehors de l'application.

:::

## Exemple

Cet exemple autorise la saisie de toutes les méthodes commençant par "formula" et de la méthode "Total_general" par l'utilisateur dans des contextes protégés :

```4d
 ARRAY TEXT(methodsArray;2)
 methodsArray{1}:="formula@"
 methodsArray{2}:="Total_general"
 SET ALLOWED METHODS(methodsArray)
```

## Voir également

[EDIT FORMULA](../commands-legacy/edit-formula.md)\
[GET ALLOWED METHODS](../commands-legacy/get-allowed-methods.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 805                         |
| Thread safe        | &cross; |


