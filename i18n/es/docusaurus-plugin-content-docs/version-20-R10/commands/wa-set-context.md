---
id: wa-set-context
title: WA SET CONTEXT
---

<!--REF #_command_.WA SET CONTEXT.Syntax-->**WA SET CONTEXT** ( {* ;} *object* ; *contextObj* )<!-- END REF-->

<!--REF #_command_.WA SET CONTEXT.Params-->

| Parámetros | Tipo                  |                             | Descripción                                                                                                                                           |
| ---------- | --------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador              | &#8594; | Si se especifica, *object* es un nombre de objeto (cadena). Si se omite, *object* es una variable. |
| object     | Objetos de formulario | &#8594; | Nombre del objeto (si se especifica \*) o Variable (si se omite \*).                            |
| contextObj | Object                | &#8594; | Object containing the functions that can be called with `$4d`.                                                                        |

<!-- END REF-->

### Descripción

El comando `WA SET CONTEXT` <!--REF #_command_.WA SET CONTEXT.Summary--> define un objeto contextual *contextObj* para `$4d` en el área Web designado por los parámetros \* y *object*. When this command is used, `$4d` can only access contents declared within the provided *contextObj*. When no context object is set, `$4d` has access to all 4D methods and can not access user classes.<!-- END REF-->

:::note

The command is only usable with an embedded web area where the [**Use embedded web rendering engine**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) and **Access 4D methods** parameters are set to `true`.

:::

Pass in *contextObj* user class instances or formulas to be allowed in `$4d` as objects. Class functions that begin with `_` are considered hidden and cannot be used with `$4d`.

- Si *contextObj* es null, `$4d` tiene acceso a todos los métodos 4D.
- Si *contextObj* está vacío, `$4d` no tiene acceso.

### Ejemplo 1

Permitir `$4d` a métodos específicos

```4d
 var $context:={}
 $context.myMethod:=Formula(myMethod)
 $context.myMethod2:=Formula(myMethod2)

 WA SET CONTEXT(*; "myWebArea"; $context)
```

**En JavaScript:**

```js
$4d.myMethod(); // Allowed
$4d.myMethod2(); // Allowed
$4d.someOtherMethod(); // Not accessible
```

### Ejemplo 2

Utilizar un objeto de clase

```4d
 var $myWAObject:=cs.WAFunctions.new()

 WA SET CONTEXT(*; "MyWA"; $myWAObject)
```

**En JavaScript:**

```js
$4d.myWAFunction(); // Permitido
$4d._myPrivateFunction(); // No hará nada porque la función es privada
```

### Ver también

[WA Get context](wa-get-context.md)

### Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1848                        |
| Hilo seguro       | &cross; |
