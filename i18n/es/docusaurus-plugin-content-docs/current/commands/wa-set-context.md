---
id: wa-set-context
title: WA SET CONTEXT
displayed_sidebar: docs
---

<!--REF #_command_.WA SET CONTEXT.Syntax-->**WA SET CONTEXT** ( {* ;} *object* ; *contextObj* )<!-- END REF-->

<!--REF #_command_.WA SET CONTEXT.Params-->

| Parámetros | Tipo     |                             | Descripción                                                                                                                                           |
| ---------- | -------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador | &#8594; | Si se especifica, *object* es un nombre de objeto (cadena). Si se omite, *object* es una variable. |
| object     | any      | &#8594; | Nombre del objeto (si se especifica \*) o Variable (si se omite \*).                            |
| contextObj | Object   | &#8594; | Objeto que contiene las funciones que se pueden llamar con `$4d`.                                                                     |

<!-- END REF-->

### Descripción

El comando `WA SET CONTEXT` <!--REF #_command_.WA SET CONTEXT.Summary--> define un objeto contextual *contextObj* para `$4d` en el área Web designado por los parámetros \* y *object*. Cuando se utiliza este comando, `$4d` sólo puede acceder a los contenidos declarados dentro del *contextObj* proporcionado. Cuando no se establece ningún objeto contexto, `$4d` tiene acceso a todos los métodos 4D y no puede acceder a las clases usuario.<!-- END REF-->

:::note

El comando solo es utilizable con un área web integrada en la que los parámetros [**Utilizar el motor de renderizado web integrado**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) y **Acceder a los métodos 4D** estén configurados como `true`.

:::

Pasar en *contextObj* las instancias de clases usuario o las fórmulas a autorizar en `$4d` como objetos. Las funciones de clase que empiezan por `_` se consideran ocultas y no pueden utilizarse con `$4d`.

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
$4d.myMethod(); // Permitido
$4d.myMethod2(); // Permitido
$4d.someOtherMethod(); // No accesible
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
