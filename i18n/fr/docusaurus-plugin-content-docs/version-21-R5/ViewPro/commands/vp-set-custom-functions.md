---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| formulaObj | Object | -> | Objet formule                           |

</div>
<!-- END REF -->

## Description

La commande `VP SET CUSTOM FUNCTIONS` <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->désigne les formules 4D qui peuvent être appelées directement à partir de formules 4D View Pro<!-- END REF -->. Les fonctions personnalisées n'étant pas stockées dans le document, la commande `VP SET CUSTOM FUNCTIONS` doit être exécutée dans l'événement formulaire `On Load`.

Les formules spécifiées par `VP SET CUSTOM FUNCTIONS` apparaissent dans un menu pop-up lorsque la première lettre de leur nom est saisie. Voir la page [Formules et fonctions](../formulas.md).

> Si `VP SET CUSTOM FUNCTIONS` est appelé plusieurs fois pour la même zone, dans la même session, seul le dernier appel est pris en compte.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre *formulaObj*, passez un objet contenant les formules 4D qui peuvent être appelées à partir des formules 4D View Pro ainsi que des propriétés supplémentaires. Chaque propriété `customFunction` passée dans *formulaObj* devient le nom d'une fonction dans la zone 4D View Pro.

| Propriété          |            |                                                                                | Type                | Description                                                                                                                                                                                                                                                                  |
| ------------------ | ---------- | ------------------------------------------------------------------------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                                                | Object              | Description de la fonction personnalisée. `<customFunction>` définit le nom de la fonction personnalisée à afficher dans les formules de 4D View Pro (les espaces ne sont pas autorisés)                                                  |
|                    | formula    |                                                                                | Object              | Objet formule 4D (obligatoire). Voir la commande `Formula`.                                                                                                                                                               |
|                    | parameters |                                                                                | Collection d'objets | Collection de paramètres (dans l'ordre dans lequel ils sont définis dans la formule). Pour plus d'informations, veuillez vous reporter à la section [Paramètres](../formulas.md#parameters).                              |
|                    |            | \[ ].name | Text                | Nom du paramètre à afficher dans 4D View Pro                                                                                                                                                                                                                                 |
|                    |            | \[ ].type | Number              | Type de paramètre. Type de paramètre. Type de paramètre. Si *type* est `Is object`, l'objet est envoyé dans une propriété `.value`. Voir la section [Paramètres](../formulas.md#parameters). |
|                    | summary    |                                                                                | Text                | Description de la formule à afficher dans 4D View Pro                                                                                                                                                                                                                        |
|                    | minParams  |                                                                                | Number              | Nombre minimum de paramètres                                                                                                                                                                                                                                                 |
|                    | maxParams  |                                                                                | Number              | Nombre maximum de paramètres. Passer un nombre supérieur à la taille de *parameters* permet de déclarer des paramètres "optionnels" avec un type par défaut                                                                                                  |

> **ATTENTION**

> - Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les méthodes autorisées par la commande [VP SET ALLOWED METHODS](vp-set-allowed-methods.md) (s'il y en a) sont ignorées dans la zone 4D View Pro.
> - Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les fonctions basées sur les commandes `SET TABLE TITLES` et `SET FIELD TITLES` sont ignorées dans la zone 4D View Pro.

## Exemple

Vous souhaitez utiliser des objets formule dans une zone de 4D View Pro pour ajouter des nombres, récupérer le nom de famille et le genre d'un client, ainsi que le mois le plus chargé de l'entreprise :

```4d
Case of
    :(FORM Event.code=On Load)
 
       var $o : Object
       $o:=New object
 
// Créer la fonction "addnum" depuis une méthode nommée "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))
 
// Créer la fonction "ClientLastName" depuis un champ de la base
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"
 
// Créer la fonction"label" depuis une expression 4D avec un paramètre
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))
 
// Créer la fonction "AverageValues" depuis une méthode nommée "AverageValues"
       $o.AverageValues:=New object
       $o.AverageValues.formula:=Formula(AverageValues)
       $o.AverageValues.parameters:=New collection
       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))
        
// Créer la fonction "Title" depuis une variable nommée "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)
 
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 
End case
```

## Voir également

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: enhancement of custom functions (blog post)](https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions)