---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**FORM NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
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

<!--REF #_command_.FORM NEXT PAGE.Summary-->FORM NEXT PAGE cambia la página actual del formulario para mostrar la página siguiente.<!-- END REF-->Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](../commands/form-load), o si ya se muestra la última página del formulario, FORM NEXT PAGE no hace nada.

## Ejemplo 

El siguiente ejemplo es un método de una línea, llamado por un comando de menú, el cual muestra la página del formulario que sigue a la página mostrada actualmente:

```4d
 FORM NEXT PAGE
```

## Ver también 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 248 |
| Hilo seguro | no |



