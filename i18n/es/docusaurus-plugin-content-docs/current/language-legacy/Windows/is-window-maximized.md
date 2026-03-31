---
id: is-window-maximized
title: Is window maximized
slug: /commands/is-window-maximized
displayed_sidebar: docs
---

<!--REF #_command_.Is window maximized.Syntax-->**Is window maximized** ( *ventana* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window maximized.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594; | Número de referencia de la ventana |
| Resultado | Boolean | &#8592; | True si la ventana está maximizada, False en caso contrario |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|20 R5|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Is window maximized.Summary-->El comando **Is window maximized** devuelve **True** si la ventana cuyo número de referencia se pasa en *ventana* está actualmente maximizada, y **False** en caso contrario.<!-- END REF-->

## Ejemplo 

Quiere cambiar entre el estado maximizado y el anterior:

```4d
 If(Is window maximized($winRef))
    MINIMIZE WINDOW($winRef)
 Else
    MAXIMIZE WINDOW($winRef)
 End if
```

## Ver también 

[Is window reduced](../commands/is-window-reduced)  
[MAXIMIZE WINDOW](../commands/maximize-window)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1830 |
| Hilo seguro | no |


