---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| formulaObj | Object | -> | Objet formule                           | <!-- END REF --> |

## Description

La commande `VP SET CUSTOM FUNCTIONS` <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->désigne les formules 4D qui peuvent être appelées directement à partir de formules 4D View Pro<!-- END REF -->. Les fonctions personnalisées n'étant pas stockées dans le document, la commande `VP SET CUSTOM FUNCTIONS` doit être exécutée dans l'événement formulaire `On Load`.

Les formules spécifiées par `VP SET CUSTOM FUNCTIONS` apparaissent dans un menu pop-up lorsque la première lettre de leur nom est saisie. Voir la page [Formules et fonctions](../formulas.md).

> Si `VP SET CUSTOM FUNCTIONS` est appelé plusieurs fois pour la même zone, dans la même session, seul le dernier appel est pris en compte.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre *formulaObj*, passez un objet contenant les formules 4D qui peuvent être appelées à partir des formules 4D View Pro ainsi que des propriétés supplémentaires. Chaque propriété `customFunction` passée dans *formulaObj* devient le nom d'une fonction dans la zone 4D View Pro.

| Propriété          |            |                                                                                | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ---------- | ------------------------------------------------------------------------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                                                | Object              | Description de la fonction personnalisée. `<customFunction>` defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    | formula    |                                                                                | Object              | Objet formule 4D (obligatoire). Voir la commande `Formula`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    | parameters |                                                                                | Collection d'objets | Collection de paramètres (dans l'ordre dans lequel ils sont définis dans la formule). Pour plus d'informations, veuillez vous reporter à la section [Paramètres](../formulas.md#parameters).                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                    |            | \[ ].name | Text                | Nom du paramètre à afficher dans 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                    |            | \[ ].type | Number              | Type de paramètre. Type de paramètre. Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>*type* can be omitted or the default value (-1) can be passed (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). If *type* is `Is object`, the object is sent in a `.value` property. See [Parameters](../formulas.md#parameters) section. |
|                    | summary    |                                                                                | Text                | Description de la formule à afficher dans 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                    | minParams  |                                                                                | Number              | Nombre minimum de paramètres                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                    | maxParams  |                                                                                | Number              | Nombre maximum de paramètres. Passing a number higher than the length of *parameters* allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

> **ATTENTION**

> - Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les méthodes autorisées par la commande [VP SET ALLOWED METHODS](vp-set-allowed-methods.md) (s'il y en a) sont ignorées dans la zone 4D View Pro.
> - Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les fonctions basées sur les commandes `SET TABLE TITLES` et `SET FIELD TITLES` sont ignorées dans la zone 4D View Pro.

## Exemple

You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender and the company's peak month:

```4d
Case of
    :(FORM Event.code=On Load)
 
       var $o : Object
       $o:=New object
 
// Define "addnum" function from a method named "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))
 
// Define "ClientLastName" function from a database field
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"
 
// Define "label" function from a 4D expression with one parameter
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))
 
// Define "AverageValues" function from a method named "AverageValues"
       $o.AverageValues:=New object
       $o.AverageValues.formula:=Formula(AverageValues)
       $o.AverageValues.parameters:=New collection
       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))
        
// Define "Title" function from a variable named "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)
 
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 
End case
```

## Voir également

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: enhancement of custom functions (blog post)](https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions)