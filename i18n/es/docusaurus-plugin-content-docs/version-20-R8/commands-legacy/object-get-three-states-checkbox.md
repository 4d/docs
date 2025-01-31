---
id: object-get-three-states-checkbox
title: OBJECT Get three states checkbox
slug: /commands/object-get-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get three states checkbox.Syntax-->**OBJECT Get three states checkbox** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get three states checkbox.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| Resultado | Boolean | &#8592; | True = casilla de selección de tres estados, False = casilla de selección estándar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get three states checkbox.Summary-->El comando **OBJECT Get three states checkbox** devuelve el estado actual de la propiedad "Tres estados" de la(s) casilla(s) de selección designada(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
La propiedad "Tres estados" se puede definir ya sea usando la lista de propiedades, o utilizando el comando [OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md) si se llama en el proceso actual.

#### Ver también 

[OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1250 |
| Hilo seguro | &cross; |


