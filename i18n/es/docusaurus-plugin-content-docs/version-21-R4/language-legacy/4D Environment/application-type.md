---
id: application-type
title: Application type
slug: /commands/application-type
displayed_sidebar: docs
---

<!--REF #_command_.Application type.Syntax-->**Application type**  : Integer<!-- END REF-->
<!--REF #_command_.Application type.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Valor numérico representando el tipo de la aplicación |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Application type.Summary-->El comando Application type devuelve un valor numérico que representa el tipo de entorno 4D que está utilizando.<!-- END REF--> 4D ofrece las siguientes constantes predefinidas:

| Constante         | Valor | Comentario                                                                                                       |
| ----------------- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| 4D Desktop        | 3     |                                                                                                                  |
| 4D Local mode     | 0     |                                                                                                                  |
| 4D Remote mode    | 4     |                                                                                                                  |
| 4D Server         | 5     |                                                                                                                  |
| 4D Volume desktop | 1     |                                                                                                                  |
| tool4d            | 6     | Para más información, consulte [tool4D](http://developer.4d.com/docs/next/Admin/cli#tool4d) en developer.4d.com. |

**Nota:** *4D Desktop* incorpora ciertas ofertas de despliegue, por ejemplo "4D SQL Desktop".

## Ejemplo 

En alguna parte de su código, diferente del *Método base On Server Startup*, debe verificar si está corriendo 4D Server. Puede escribir:

```4d
 If(Application type=4D Server)
  //Realizar las acciones apropiadas
 End if
```

## Ver también 

[Application version](../commands/application-version)  
[Version type](../commands/version-type)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 494 |
| Hilo seguro | yes |


