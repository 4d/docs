---
id: abort-process-by-id
title: ABORT PROCESS BY ID
slug: /commands/abort-process-by-id
displayed_sidebar: docs
---

<!--REF #_command_.ABORT PROCESS BY ID.Syntax-->**ABORT PROCESS BY ID** ( *IDunico* : Integer )<!-- END REF-->
<!--REF #_command_.ABORT PROCESS BY ID.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| IDunico | Integer | &#8594; | ID de proceso único |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|17 R4|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.ABORT PROCESS BY ID.Summary-->El comando **ABORT PROCESS BY ID** detiene un proceso específico en el servidor 4D.<!-- END REF-->

En el parámetro *IDunico*, pase el ID único del proceso que se ejecuta en el servidor que desea detener. Puede recuperar el ID del proceso con los comandos [Process activity](../commands/process-activity) o los comandos [Process info](../commands/process-info).

**Notas**:

* Este comando solo puede ejecutarse en 4D Server. Si el método que llama al comando se ejecuta localmente en un cliente remoto o en un solo usuario 4D, **ABORT PROCESS BY ID** no hace nada.
* Este comando solo se puede utilizar con la capa de red *ServerNet*. Ver   *Nueva capa de red ServerNet (compatibilidad)*.
* Este comando solo debe utilizarse para buscar errores o propósitos de administración, no como un procedimiento ordinario.

## Ejemplo 

Desea detener el proceso seleccionado de la colección de procesos que se muestra en un list box:

```4d
  //variable =curItemPosition
 
  // Recupera la lista de procesos en el servidor y la muestra en el list box
 $activity:=Get process activity(Processes only).processes
 ...
  // El proceso seleccionado se detiene en el servidor
 ABORT PROCESS BY ID($activity[curItemPosition].ID)
```

## Ver también 

[PAUSE PROCESS](../commands/pause-process)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1634 |
| Hilo seguro | yes |



