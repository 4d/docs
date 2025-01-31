---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| Parâmetro  | Tipo   |    | Descrição                                  |                  |
| ---------- | ------ | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text   | -> | Nome de objeto formulário área 4D View Pro |                  |
| formulaObj | Object | -> | Objecto fórmula                            | <!-- END REF --> |

#### Descrição

The `VP SET CUSTOM FUNCTIONS` command <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designates the 4D formulas that can be called directly from 4D View Pro formulas<!-- END REF -->. Because custom functions are not stored in the document,`VP SET CUSTOM FUNCTIONS` must be executed in the `On Load` form event.

As fórmulas especificadas por `VP SET CUSTOM FUNCTIONS` aparecem em um menu pop-up quando a primeira letra de seu nome é inserida. Veja a página [Fórmulas e Funções](../formulas.md).

> If `VP SET CUSTOM FUNCTIONS` is called multiple times for the same area, in the same session, only the last call is taken into account.

Passe o nome da área 4D View Pro em *vpAreaName*. Se passar um nome que não existe, é devolvido um erro.

In the *formulaObj* parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each `customFunction` property passed in *formulaObj* becomes the name of a function in the 4D View Pro area.

| Propriedade        |            |                                                                                | Tipo                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ---------- | ------------------------------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                                                | Object                 | Definição da função personalizada. `<customFunction>` defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                    | formula    |                                                                                | Object                 | Objeto fórmula 4D (obrigatório). Ver o comando `Formula`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                    | parameters |                                                                                | Uma coleção de objetos | Coleção de parâmetros (pela ordem em que são definidos na fórmula). Para obter mais informações, consulte a seção [Parâmetros](../formulas.md#parameters).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    |            | \[ ].name | Text                   | Nome do parâmetro a mostrar no 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                    |            | \[ ].type | Number                 | Tipo do parâmetro. Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>*type* can be omitted or the default value (-1) can be passed (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). <br/> If *type* is omitted or -1, the value is automatically sent with its type, except date or time values which are sent as an object. Se *type* é `Is object`, o objeto é enviado em uma propriedade `.value`. Consulte a seção [Parâmetros](../formulas.md#parameters). |
|                    | resumo     |                                                                                | Text                   | Descrição da fórmula a mostrar no 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    | minParams  |                                                                                | Number                 | Número mínimo de parâmetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                    | maxParams  |                                                                                | Number                 | Número máximo de parâmetros. Passing a number higher than the length of *parameters* allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

> **AVISO**

> - As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by the [VP SET ALLOWED METHODS](vp-set-allowed-methods.md) command (if any) are ignored in the 4D View Pro area.
> - As soon as `VP SET CUSTOM FUNCTIONS` is called, the functions based upon `SET TABLE TITLES` and `SET FIELD TITLES` commands are ignored in the 4D View Pro area.

#### Exemplo

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

#### Veja também

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: aprimoramento de funções personalizadas (postagem de blog)](https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions)
