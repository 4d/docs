---
id: get-application-color-scheme
title: Get Application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get Application color scheme.Syntax-->**Get Application color scheme** ( * ) : Text<!-- END REF-->
<!--REF #_command_.Get Application color scheme.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Devuelve el esquema de color de la base local |
| Resultado | Text | &#8592; | Esquema de color de la aplicación actual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|19|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Get Application color scheme.Summary-->El comando **Get Application color scheme** devuelve el nombre del esquema de color real en uso en el nivel de la aplicación.<!-- END REF--> 

**Nota:** en Windows, este comando siempre devuelve "claro".

El esquema de color real está definido por:

* una llamada al comando [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme);
* si [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) no fue llamado o llamado con un valor de parámetro "heredado", la Configuración (Configuración de la base local en el caso de un componente);
* si la configuración se define como "heredada", las preferencias del usuario del sistema operativo.

El parámetro *\** es útil cuando se llama al comando desde un componente: cuando se pasa, el comando devuelve el esquema de color de la base local.

Consulte la descripción del comando [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) para obtener detalles sobre los nombres de los esquemas de color.

## Ejemplo 

```4d
 var $colorScheme : Text
 
  // Recuperar el esquema de color de la base local
 $colorScheme:=Get Application color scheme(*)
```

## Ver también 

[FORM Get color scheme](../commands/form-get-color-scheme)  
[SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1763 |
| Hilo seguro | no |


