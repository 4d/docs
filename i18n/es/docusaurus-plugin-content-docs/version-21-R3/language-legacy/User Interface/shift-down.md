---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Estado de la tecla Mayús |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Shift down.Summary-->Shift down devuelve TRUE si la tecla Mayús está presionada.<!-- END REF-->

## Ejemplo 

El siguiente método de objeto para el botón *bUnBoton* efectúa diferentes acciones en función de las teclas de modificación presionadas cuando se hace clic en el botón:

```4d
  // Método de objeto bUnBoton
 Case of
  // Otras combinaciones diferentes pueden probarse aquí
  // ...
    :(Shift down&Windows Ctrl down)
  // Las teclas Mayús y Ctrl Windows (o Comando Mac OS) son presionadas
       DO ACTION1
  // ...
    :(Shift down)
  // Sólo está presionada Mayús
       DO ACTION2
  // ...
    :(Windows Ctrl down)
  // Sólo está presionada Ctrl Windows (o Comando Mac OS)
       DO ACTION3
  // ...
  // Otras teclas pueden probarse individualmente aquí
  // ...
 End case
```

## Ver también 

[Caps lock down](../commands/caps-lock-down)  
[Macintosh command down](../commands/macintosh-command-down)  
[Macintosh control down](../commands/macintosh-control-down)  
[Macintosh option down](../commands/macintosh-option-down)  
[Windows Alt down](../commands/windows-alt-down)  
[Windows Ctrl down](../commands/windows-ctrl-down)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 543 |
| Hilo seguro | yes |


