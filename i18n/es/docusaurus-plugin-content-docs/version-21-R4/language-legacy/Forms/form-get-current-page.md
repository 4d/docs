---
id: form-get-current-page
title: FORM Get current page
slug: /commands/form-get-current-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get current page.Syntax-->**FORM Get current page** ( * ) : Integer<!-- END REF-->
<!--REF #_command_.FORM Get current page.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Devuelve el número de página de subformulario actual |
| Resultado | Integer | &#8592; | Número de la página del formulario mostrada actualmente |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Modificado|
|12|Renombrar|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.FORM Get current page.Summary-->El comando **FORM Get current page** devuelve el número de la página actual del formulario mostrada actualmente o del formulario actual cargado vía el comando [FORM LOAD](../commands/form-load).<!-- END REF--> 

El parámetro *\** es útil cuando el comando se llama en el contexto de un subformulario en página que contiene varias páginas. En este caso, cuando pase este parámetro, el comando cambia la página del subformulario actual (la que llamó al comando). Por defecto, cuando se omite el parámetro *\**, el comando se aplica siempre al formulario padre. 

## Ejemplo 

In a form, when you select a menu item from the menu bar or when the form receives a call from another process, you can perform different actions depending on the form page currently displayed. In this example, you write:

En un formulario, si selecciona un elemento de menú de la barra de menús o si el formulario recibe una llamada de otro proceso, puede realizar diferentes acciones dependiendo de la página del formulario mostrada actualmente. En este ejemplo, usted escribe:

```4d
  // Método de formulario [miTabla];"miForm"
 Case of
    :(FORM Event.code=On Load)
  // ...
    :(FORM Event.code=On Unload)
  // ...
    :(FORM Event.code=On Menu Selected)
       $vlNumeroMenu:=Menu selected>>16
       $vlNumeroCmdo:=Menu selected & 0xFFFF
       Case of
          :($vlNumeroMenu=...)
             Case of
                :($vlNumeroCmdo=...)
                :(FORM Get current page=1)
  // Efectuar una acción apropiada para la página 1
                :(FORM Get current page=2)
  // Efectuar una acción apropiada para la página 2
  // ...
                :($vlItemNumber=...)
  // ...
             End case
          :($vlMenuNumber=...)
  // ...
       End case
    :(FORM Event.code=On Outside Call)
       Case of
          :(FORM Get current page=1)
  // Dar una respuesta apropiada para la página 1
          :(FORM Get current page=2)
  // Dar una respuesta apropiada para la página 2
       End case
  // ...
 End case
```

## Ver también 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 276 |
| Hilo seguro | no |



