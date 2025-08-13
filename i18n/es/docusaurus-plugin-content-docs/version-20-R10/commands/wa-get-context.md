---
id: wa-get-context
title: WA Get context
---

<!--REF #_command_.WA Get context.Syntax-->**WA Get context** ( {* ;} *object* ) -> *contextObj*<!-- END REF-->

<!--REF #_command_.WA Get context.Params-->

| Parámetros | Tipo     |                             | Descripción                                                                                                                                           |
| ---------- | -------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador | &#8594; | Si se especifica, *object* es un nombre de objeto (cadena). Si se omite, *object* es una variable. |
| object     | any      | &#8594; | Nombre del objeto (si se especifica \*) o Variable (si se omite \*).                            |
| contextObj | Object   | &#8592; | Objeto contexto si se ha definido previamente, en caso contrario `null`.                                                              |

<!-- END REF-->

### Descripción

El comando `WA Get context`<!--REF #_command_.WA Get context.Summary--> recupera el objeto de contexto definido para `$4d` en el área Web designada por los parámetros \* y *object* utilizando [`WA SET CONTEXT`](./wa-set-context.md).<!-- END REF--> If `WA SET CONTEXT` was not called for the web area the command returns `null`.

:::note

The command is only usable with an embedded web area where the [**Use embedded web rendering engine**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) and **Access 4D methods** parameters are set to `true`.

:::

### Ejemplo

Verificación de la existencia de un contexto:

```4d
 var $contextObj:=WA Get context(*; "myWebArea")

 If ($contextObj=Null)
	ALERT("No context set for this web area.")
 Else 
	ALERT("Context is defined!")
 End if
```

### Ver también

[WA SET CONTEXT](wa-set-context.md)

### Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1849                        |
| Hilo seguro       | &cross; |
