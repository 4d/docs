---
id: wa-set-context
title: WA SET CONTEXT
---

<!--REF #_command_.WA SET CONTEXT.Syntax-->**WA SET CONTEXT** ( {* ;} *object* ; *contextObj* )<!-- END REF-->

<!--REF #_command_.WA SET CONTEXT.Params-->

| Parâmetro  | Tipo                  |                             | Descrição                                                                                                                                       |
| ---------- | --------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador              | &#8594; | Se especificado, *object* é um nome de objeto (string). Se omitido, *object* é uma variável. |
| object     | Objecto de formulário | &#8594; | Nome do objeto (se \* for especificado) ou Variável (se \* for omitido).                  |
| contextObj | Object                | &#8594; | Object containing the functions that can be called with `$4d`.                                                                  |

<!-- END REF-->

### Descrição

The `WA SET CONTEXT` command <!--REF #_command_.WA SET CONTEXT.Summary--> defines a context object *contextObj* for `$4d` in the Web area designated by the \* and *object* parameters. When this command is used, `$4d` can only access contents declared within the provided *contextObj*. When no context object is set, `$4d` has access to all 4D methods and can not access user classes.<!-- END REF-->

:::note

The command is only usable with an embedded web area where the [**Use embedded web rendering engine**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) and **Access 4D methods** parameters are set to `true`.

:::

Passe em *contextObj* as instâncias de classes usuário ou as fórmulas a serem permitidas em `$4d` como objetos. Class functions that begin with `_` are considered hidden and cannot be used with `$4d`.

- Se *contextObj* for null, `$4d` terá acesso a todos os métodos 4D.
- Se *contextObj* estiver vazio, `$4d` não terá acesso.

### Exemplo 1

Permitir `$4d` a métodos específicos

```4d
 var $context:={}
 $context.myMethod:=Formula(myMethod)
 $context.myMethod2:=Formula(myMethod2)

 WA SET CONTEXT(*; "myWebArea"; $context)
```

**Em JavaScript:**

```js
$4d.myMethod(); // Permitiu
$4d.myMethod2(); // Permitiu
$4d.someOtherMethod(); // Não acessível
```

### Exemplo 2

Using a Class Object

```4d
 var $myWAObject:=cs.WAFunctions.new()

 WA SET CONTEXT(*; "MyWA"; $myWAObject)
```

**Em JavaScript:**

```js
$4d.myWAFunction(); // Permitido
$4d._myPrivateFunction(); // Não fará nada porque a função é privada
```

### Veja também

[WA Get context](wa-get-context.md)

### Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1848                        |
| Thread safe       | &cross; |
