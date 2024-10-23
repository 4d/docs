---
id: window-list
title: WINDOW LIST
slug: /commands/window-list
displayed_sidebar: docs
---

<!--REF #_command_.WINDOW LIST.Syntax-->**WINDOW LIST** ( *ventanas* {; *} )<!-- END REF-->
<!--REF #_command_.WINDOW LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventanas | Array | &#8592; | Array de los números de referencia de las ventanas |
| * | Operador | &#8594;  | Si se especifica, tiene en cuenta las ventanas flotantes Si se omite, ignora las ventanas flotantes |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WINDOW LIST.Summary-->El comando WINDOW LIST llena el array *ventanas* con los números de referencia de las ventanas abiertas actualmente en todos los procesos (procesos kernel o usuario).<!-- END REF--> Sólo las ventanas "visibles" (ventanas no ocultas) se devuelven. 

Si no pasa el parámetro opcional *\**, se ignoran las ventanas flotantes.

#### Ejemplo 

El siguiente método de proyecto coloca en mosaico todas las ventanas abiertas actualmente, excepto las ventanas flotantes y las cajas de diálogo: 

```4d
  // Método de proyecto TILE WINDOWS
 
 WINDOW LIST($alWnd)
 $vlLeft:=10
 $vlTop:=80 // Dejar espacio para la barra de herramientas
 For($vlWnd;1;Size of array($alWnd))
    If(Window kind($alWnd{$vlWnd})#Modal dialog)
       GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlWR:=$vlLeft+($vlWR-$vlWL)
       $vlWB:=$vlTop+($vlWB-$vlWT)
       $vlWL:=$vlLeft
       $vlWT:=$vlTop
       SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlLeft:=$vlLeft+10
       $vlTop:=$vlTop+25
    End if
 End for
```

**Nota:** este método puede mejorarse añadiendo pruebas del tamaño de la ventana principal (en Windows) o del tamaño y ubicación de las pantallas (en Macintosh).

#### Ver también 

[Window kind](window-kind.md)  
[Window process](window-process.md)  