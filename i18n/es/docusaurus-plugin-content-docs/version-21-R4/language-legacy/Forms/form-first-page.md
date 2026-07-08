---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Renombrar|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.FORM FIRST PAGE.Summary-->FORM FIRST PAGE cambia la página actual del formulario por la primera página del formulario.<!-- END REF-->Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](../commands/form-load), o si la primera página del formulario ya se muestra, FORM FIRST PAGE no hace nada.

## Ejemplo 

El siguiente ejemplo es un método de una línea, llamado por un comando de menú, el cual muestra la primera página de un formulario.

```4d
 FORM FIRST PAGE
```

## Ver también 

[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 250 |
| Hilo seguro | no |



