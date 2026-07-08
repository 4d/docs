---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *arrayComponentes* )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayComponentes | Text array | &#8592; | Nombres de los componentes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.COMPONENT LIST.Summary-->El comando `COMPONENT LIST` dimensiona y llena el array *arrayComponentes* con los nombres de los componentes cargados por la aplicación 4D para el proyecto local actual.<!-- END REF-->

Al abrir un proyecto, 4D carga los componentes válidos:

* encontrados en la [carpeta Components de su proyecto](../../Project/architecture.md#components).
* declarados en el [archivo **dependencies.json** de su proyecto](../../Project/components.md#dependenciesjson-and-environment4djson).

**Recuerde:** si el mismo componente está instalado en diferentes ubicaciones, se aplica un [orden de prioridad](../../Project/components.md#priority).

Este comando puede llamarse desde el proyecto local o desde un componente. Si el proyecto no utiliza componentes, el array *arrayComponentes* se devuelve vacío.

Los nombres de los componentes son los nombres de los archivos de estructura de las bases de las matrices (.4db, .4dc o .4dbase). Este comando puede utilizarse para configurar arquitecturas e interfaces modulares que ofrezcan funcionalidades adicionales de acuerdo a la presencia de los componentes.

Para mayor información sobre componentes 4D, por favor consulte [esta página](../../Concepts/components.md).

## Ver también 

[PLUGIN LIST](plugin-list.md)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1001 |
| Hilo seguro | yes |


