---
id: close-window
title: CLOSE WINDOW
slug: /commands/close-window
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE WINDOW.Syntax-->**CLOSE WINDOW** {( *ventana* )}<!-- END REF-->
<!--REF #_command_.CLOSE WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia, o Ventana del primer plano del proceso, si este parámetro se omite |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.CLOSE WINDOW.Summary-->CLOSE WINDOW cierra la ventana activa abierta por el comando [Open window](open-window.md "Open window") u [Open form window](open-form-window.md "Open form window") en el proceso actual.<!-- END REF--> CLOSE WINDOW no hace nada si no hay una ventana personalizada abierta; no cierra las ventanas sistema. CLOSE WINDOW tampoco tiene efecto si se llama mientras que un formulario esté activo en la ventana. Debe llamar CLOSE WINDOW cuando haya terminado de utilizar una ventana abierta por [Open window](open-window.md "Open window") u Open form window. 

Es inútil pasar un número a CLOSE WINDOW cuando lo utiliza para cerrar las ventanas abiertas por [Open window](open-window.md "Open window") u Open form window, ya que CLOSE WINDOW siempre cerrará la última ventana creada por uno de estos comandos*.* Si pasa un número de referencia de ventana externa en el parámetro *extWindowRef*, CLOSE WINDOW cierra la ventana externa especificada. Para mayor información sobre ventanas externas, consulte la función *Open external window*.

#### Ejemplo 

El siguiente ejemplo abre una ventana formulario y crea nuevos registros con el comando [ADD RECORD](add-record.md). Una vez añadidos los registros, la ventana se cierra con **CLOSE WINDOW**:

```4d
 FORM SET INPUT([Employees];"Entry")
 $winRef:=Open form window([Employees];"Entry")
 Repeat
    ADD RECORD([Employees]) //Añadir un nuevo registro de empleado
 Until(OK=0) //Bucle hasta que el usuario cancela
 CLOSE WINDOW //Cierre de la ventana
```

#### Ver también 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  