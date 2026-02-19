---
id: wa-get-context
title: WA Get context
displayed_sidebar: docs
---

<!--REF #_command_.WA Get context.Syntax-->**WA Get context** ( * ; *object* : Text ) -> Object<br/>**WA Get context** ( *object* : Variable ) -> Object<!-- END REF-->

<!--REF #_command_.WA Get context.Params-->

<div class="no-index">

| Parámetros | Tipo           |                             | Descripción                                                                                                                                           |
| ---------- | -------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador       | &#8594; | Si se especifica, *object* es un nombre de objeto (cadena). Si se omite, *object* es una variable. |
| object     | Text, Variable | &#8594; | Nombre del objeto (si se especifica \*) o Variable (si se omite \*).                            |
| Resultado  | Object         | &#8592; | Objeto contexto si se ha definido previamente, en caso contrario `null`.                                                              |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R9       | Añadidos       |

</details>
</div>

### Descripción

El comando `WA Get context`<!--REF #_command_.WA Get context.Summary--> recupera el objeto de contexto definido para `$4d` en el área Web designada por los parámetros \* y *object* utilizando [`WA SET CONTEXT`](./wa-set-context.md).<!-- END REF--> Si `WA SET CONTEXT` no fue llamado para el área web, el comando devuelve `null`.

:::note

El comando solo es utilizable con un área web integrada en la que los parámetros [**Utilizar el motor de renderizado web integrado**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) y **Acceder a los métodos 4D** estén configurados como `true`.

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

|                   |      |
| ----------------- | ---- |
| Número de comando | 1849 |
| Hilo seguro       | no   |
