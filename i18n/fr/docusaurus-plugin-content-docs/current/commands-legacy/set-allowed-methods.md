---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *tabMéthodes* )<!-- END REF-->
<!--REF #_command_.SET ALLOWED METHODS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabMéthodes | Text array | &srarr; | Tableau de noms de méthodes |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET ALLOWED METHODS.Summary-->La commande **SET ALLOWED METHODS** permet de désigner les méthodes projet pouvant être directement appelées depuis l'application.<!-- END REF-->

4D inclut un mécanisme de sécurité filtrant les méthodes projet appelables depuis les contextes suivants :

* L'éditeur de formule -- les méthodes autorisées apparaissent à la fin de la liste des commandes par défaut et peuvent être utilisées dans les formules (cf. section *Description de l'éditeur de formules*).
* L'éditeur d'étiquettes -- les méthodes autorisées sont listées dans le menu **Appliquer** si elles sont également partagées avec le composant (cf. section *Description de l'éditeur d'étiquettes*).
* Les formules insérées dans les zones de texte stylé ou les documents 4D Write Pro via la commande [ST INSERT EXPRESSION](st-insert-expression.md) \- les méthodes non autorisées sont automatiquement rejetées.
* Les documents 4D View Pro -- par défaut, si la commande *VP SET ALLOWED METHODS* n'a jamais été appelée durant la session, les formules 4D View Pro acceptent uniquement les méthodes définies par **SET ALLOWED METHODS.** Toutefois, il est recommandé d'utiliser *VP SET ALLOWED METHODS*. Voir *Références de méthodes projet*.

Par défaut, si vous n’utilisez pas la commande **SET ALLOWED METHODS**, aucune méthode n’est appelable (l'utilisation d'une méthode non autorisée dans une expression provoque une erreur).

Passez dans le paramètre *tabMéthodes* le nom d'un tableau contenant la liste de méthodes à autoriser. Le tableau doit avoir été défini préalablement.   
Vous pouvez utiliser le caractère “joker” (@) dans les noms des méthodes afin de définir un ou plusieurs groupe(s) de méthodes autorisées.

Si vous souhaitez que l’utilisateur puisse appeler des commandes 4D non autorisées par défaut ou des commandes de plug-ins, vous devez utiliser des méthodes spécifiques chargées d’exécuter ces commandes.

**Note :** Le filtrage des commandes et méthodes peut être désactivé pour tous les utilisateurs ou pour le Super\_Utilisateur et l’Administrateur via une option des Propriétés de la base (). Si l'option "Désactivé pour tous" est sélectionnée, la commande **SET ALLOWED METHODS** est sans effet.

#### Exemple 

Cet exemple autorise l'exécution par l'utilisateur en contexte protégé de toutes les méthodes dont le nom débute par “formule” et de la méthode “Total\_général” : 

```4d
 ARRAY TEXT(tabméthodes;2)
 tabméthodes{1}:="formule@"
 tabméthodes{2}:="Total_général"
 SET ALLOWED METHODS(tabméthodes)
```

#### Voir aussi 

[EDIT FORMULA](edit-formula.md)  
[GET ALLOWED METHODS](get-allowed-methods.md)  