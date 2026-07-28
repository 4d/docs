---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** ({ *tabla* : Table })<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla de la cual mover el último registro seleccionado o Tabla por defecto, si se omite |
</div>
<!-- END REF-->

## Descripción 

<!--REF #_command_.LAST RECORD.Summary-->**LAST RECORD** designa el último registro de la selección de *tabla* como registro actual y lo carga en memoria.<!-- END REF--> Si la selección actual está vacía o si el registro actual ya es el último de la selección, **LAST RECORD** no tiene efecto.

## Ejemplo 

El siguiente ejemplo designa el último registro de la tabla \[Personas\] como registro actual:

```4d
 LAST RECORD([Personas])
```

## Ver también 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[NEXT RECORD](../commands/next-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 200 |
| Hilo seguro | yes |
| Modifica el registro actual ||


