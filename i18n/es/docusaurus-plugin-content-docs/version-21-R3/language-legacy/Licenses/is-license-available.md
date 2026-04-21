---
id: is-license-available
title: Is license available
slug: /commands/is-license-available
displayed_sidebar: docs
---

<!--REF #_command_.Is license available.Syntax-->**Is license available** ( *licencia* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is license available.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| licencia | Integer | &#8594; | Plug-in al cual realizar una prueba de validez de la licencia |
| Resultado | Boolean | &#8592; | True si el plug-in está disponible,  sino False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14 R3|Modificado|
|2004|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Is license available.Summary-->El comando Is license available le permite conocer la disponibilidad de un plug-in.<!-- END REF--> Es útil, por ejemplo, para mostrar u ocultar funciones que necesitan de la presencia de un plug-in.

El comando Is license available puede utilizarse de tres maneras diferentes:

* El parámetro *licencia* se omite: en este caso, el comando devuelve [False](../commands/false) si la aplicación 4D está en modo demostración.
* Pase en el parámetro *licencia* una de la constantes del tema “*Licencia disponible*”:  

| Constante              | Tipo         | Valor     |  
| ---------------------- | ------------ | --------- |  
| 4D Client SOAP license | Entero largo | 808465465 |  
| 4D Client Web license  | Entero largo | 808465209 |  
| 4D for OCI license     | Entero largo | 808465208 |  
| 4D ODBC Pro license    | Entero largo | 808464946 |  
| 4D REST Test license   | Entero largo | 808465719 |  
| 4D SOAP license        | Entero largo | 808465464 |  
| 4D View license        | Entero largo | 808465207 |  
| 4D Web license         | Entero largo | 808464945 |  
| 4D Write license       | Entero largo | 808464697 |  
    
En este caso, el comando devuelve [True](../commands/true) si el plug-in correspondiente tiene una licencia disponible. El comando tiene en cuenta las licencias efectuadas en modo Diseño o vía el comando [SET PLUGIN ACCESS](../commands/set-plugin-access).  
Is license available devuelve [False](../commands/false) si el plug-in está funcionando en modo demostración.
* Pase en el parámetro *licencia* el número de identificación del recurso “4BNX” del plug-in. En este caso, el comando se comporta como se indicó anteriormente.

## Ver también 

[CHANGE LICENSES](../commands/change-licenses)  
[License info](../commands/license-info)  
[Get plugin access](../commands/get-plugin-access)  
[PLUGIN LIST](../commands/plugin-list)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 714 |
| Hilo seguro | no |



