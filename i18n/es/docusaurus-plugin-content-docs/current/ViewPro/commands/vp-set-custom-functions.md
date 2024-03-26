---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( _vpAreaName_ : Text ; _formulaObj_ : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| formulaObj | Object | -> | Objeto fórmula                               | <!-- END REF --> |

#### Descripción

The `VP SET CUSTOM FUNCTIONS` command <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designates the 4D formulas that can be called directly from 4D View Pro formulas<!-- END REF -->. Because custom functions are not stored in the document,`VP SET CUSTOM FUNCTIONS` must be executed in the `On Load` form event.

The formulas specified by `VP SET CUSTOM FUNCTIONS` appear in a pop-up menu when the first letter of their name is entered. See the [Formulas and Functions](../formulas.md) page.

> If `VP SET CUSTOM FUNCTIONS` is called multiple times for the same area, in the same session, only the last call is taken into account.

Pase el nombre del área de 4D View Pro en _vpAreaName_. Si pasa un nombre que no existe, se devuelve un error.

In the _formulaObj_ parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each `customFunction` property passed in _formulaObj_ becomes the name of a function in the 4D View Pro area.

| Propiedad          |            |                                                              | Tipo                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ---------- | ------------------------------------------------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                              | Object               | Definición de la función personalizada. `<customFunction>` defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                    | formula    |                                                              | Object               | Objeto fórmula 4D (obligatorio). Ver el comando `Formula`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                    | parameters |                                                              | Colección de objetos | Colección de parámetros (en el orden en que están definidos en la fórmula). For more information, please refer to the [Parameters](../formulas.md#parameters) section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                    |            | [ ].name | Text                 | Nombre del parámetro a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                    |            | [ ].type | Number               | Tipo de parámetro. Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>_type_ can be omitted or the default value (-1) can be passed (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). <br/> If _type_ is omitted or -1, the value is automatically sent with its type, except date or time values which are sent as an object. If _type_ is `Is object`, the object is sent in a `.value` property. See [Parameters](../formulas.md#parameters) section. |
|                    | summary    |                                                              | Text                 | Descripción de la Fórmula a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                    | minParams  |                                                              | Number               | Número mínimo de parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                    | maxParams  |                                                              | Number               | Número máximo de parámetros. Passing a number higher than the length of _parameters_ allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

> **ATENCIÓN**

> - As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by the [VP SET ALLOWED METHODS](vp-set-allowed-methods.md) command (if any) are ignored in the 4D View Pro area.
> - En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, las funciones basadas en los comandos `SET TABLE TITLES` y `SET FIELD TITLES` son ignoradas en el área 4D View Pro.

#### Ejemplo

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

#### Ver también

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: enhancement of custom functions (blog post)](https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions)
