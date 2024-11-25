---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Estado de la tecla Mayús |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Shift down.Summary-->Shift down devuelve TRUE si la tecla Mayús está presionada.<!-- END REF-->

#### Ejemplo 

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

#### Ver también 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  