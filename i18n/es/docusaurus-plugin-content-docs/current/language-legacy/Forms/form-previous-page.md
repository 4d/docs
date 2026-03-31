---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**FORM PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
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

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->FORM PREVIOUS PAGE cambia la página actual de un formulario para mostrar la página anterior.<!-- END REF--> Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](../commands/form-load) o si ya se muestra la primera página del formulario, FORM PREVIOUS PAGE no hace nada.

## Ejemplo 

El siguiente ejemplo es un método de una línea llamado por un comando de menú, el cual muestra la página del formulario anterior a la página mostrada actualmente:

```4d
 FORM PREVIOUS PAGE
```

## Ver también 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 249 |
| Hilo seguro | no |



