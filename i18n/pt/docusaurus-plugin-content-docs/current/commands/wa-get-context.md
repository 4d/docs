---
id: wa-get-context
title: WA Get context
---

<!--REF #_command_.WA Get context.Syntax-->**WA Get context** ( {* ;} *object* ) -> *contextObj*<!-- END REF-->

<!--REF #_command_.WA Get context.Params-->

| Parâmetro  | Tipo                  |                             | Descrição                                                                                                                                 |
| ---------- | --------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador              | &#8594; | If specified, *object* is an object name (string). If omitted, *object* is a variable. |
| object     | Objecto de formulário | &#8594; | Object name (if \* is specified) or Variable (if \* is omitted).                    |
| contextObj | Object                | &#8592; | Context object if previously defined, otherwise `null`.                                                                   |

<!-- END REF-->

### Descrição

The `WA Get context` command<!--REF #_command_.WA Get context.Summary--> retrieves the context object defined for `$4d` in the Web area designated by the \* and *object* parameters using [`WA SET CONTEXT`](./wa-set-context-object.md).<!-- END REF--> If `WA SET CONTEXT` was not called for the web area the command returns `null`.

:::note

The command is only usable with an embedded web area where the [**Use embedded web rendering engine**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) and **Access 4D methods** parameters are set to `true`.

:::

### Exemplo

Checking if a context exists:

```4d
 var $contextObj:=WA Get context(*; "myWebArea")

 If ($contextObj=Null)
	ALERT("No context set for this web area.")
 Else 
	ALERT("Context is defined!")
 End if
```

### Veja também

[WA SET CONTEXT](wa-set-context.md)

### Propriedades

|                |                             |
| -------------- | --------------------------- |
| Command number | 1849                        |
| Thread safe    | &cross; |
