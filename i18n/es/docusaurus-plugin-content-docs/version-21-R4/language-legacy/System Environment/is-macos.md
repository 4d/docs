---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** : Boolean<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si el sistema operativo = macOS, de lo contrario False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|17|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Is macOS.Summary-->El comando **Is macOS** devuelve True si el sistema operativo actual es macOS.<!-- END REF-->

## Ejemplo 

Usted desea determinar si el sistema operativo actual es macOS:

```4d
 If(Is macOS)
    ALERT("It's macOS")
 Else
    ALERT("It's not macOS")
 End if
```

## Ver también 

[System info](../commands/system-info)  
[Is Windows](../commands/is-windows)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1572 |
| Hilo seguro | yes |


