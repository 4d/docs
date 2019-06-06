---
id: property_variableOrExpression
title: Property: Variable or Expression
---


This property specifies the source of the data. Each active form object is associated with an object name and a variable name. The variable name can be different from the object’s name. In the same form, you can use the same variable several times but each object name must be unique.

>**Note**<br> 
Object names are limited to a size of 255 bytes and for variable names the size is limited to 31 bytes.

When using 4D’s language, you can refer to an active form object by either its variable name or object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects and variables, refer to [GET REGISTERED CLIENTS](https://doc.4d.com/4Dv17R5/4D/17-R5/GET-REGISTERED-CLIENTS.301-4128067.en.html) (the rules are the same) as well as to [Identifiers](https://doc.4d.com/4Dv17R5/4D/17-R5/Identifiers.300-4128320.en.html) in the 4D Language Reference manual.





#### Variables

Variables associated with form objects can contain any type of expression that returns a value — and not only variable names. You can simply enter the expression directly in the “Variable or Expression” area of the Property List for the object.

Variables can be enterable or non-enterable and can receive data of the Alpha, Text, number, Date, Time and/or Picture type. 


#### Expressions

You can also enter an expression directly in the “Variable or Expression” area of the Property List for the object. Any valid 4D expression is allowed: simple expression, formula, 4D function, project method name or field using the standard ``[Table]Field`` syntax. The expression is evaluated when the form is executed and reevaluated for each form event. Naturally in this case it is not possible to manage the value of the variable by programming. 


>**Note**<br> 
If the value entered corresponds to both a variable name and a method name, 4D considers that you are indicating the method.


<hr>

### JSON Grammar

|Name|Data Type|Possible Values|
|:---|---|---|
|dataSource|string, or string array for hierarchical listbox column|<li> 4D variable<li> field name<li> arbitrary complex language expression.|

<hr>

### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](../Buttons/button_overview.md#regular)|[Toolbar button](../Buttons/button_overview.md#toolbar)|[Bevel button](../Buttons/button_overview.md#bevel)|[Rounded Bevel button](../Buttons/button_overview.md#Rounded-bevel)|[OS X Gradient button](../Buttons/button_overview.md#os-x-gradient)|
||[OS X Textured button](../Buttons/button_overview.md#os-x-textured)|[Office XP button](../Buttons/button_overview.md#office-XP)|[Help button](../Buttons/button_overview.md#help)|[Circle button](../Buttons/button_overview.md#circle)|[Custom button](../Buttons/button_overview.md#custom)| 
