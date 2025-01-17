---
id: object-set-three-states-checkbox
title: OBJECT SET THREE STATES CHECKBOX
slug: /commands/object-set-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Syntax-->**OBJECT SET THREE STATES CHECKBOX** ( {* ;} *objeto* ; *tresEst* )<!-- END REF-->
<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| tresEst | Boolean | &#8594;  | True = casilla de selección de tres estados, False = casilla de selección estándar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Summary-->El comando **OBJECT SET THREE STATES CHECKBOX**  modifica para el proceso actual, la propiedad de "Tres Estados" de la(s) casilla(s) de selección designada(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
La opción de "Tres estados" permite utilizar el estado adicional "semi seleccionado" para las casillas a seleccionar. Para obtener más información, consulte *Casillas de selección de tres estados* en el manual de *Diseño*.  
  
Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
Este comando sólo se aplica a casillas de selección asociadas a las variables, y no a los campos booleanos representados como casillas de selección.  
  
En el parámetro *tresEst*, pase **True** para activar el modo "tres estados", o **False** para desactivarlo.

#### Ver también 

[OBJECT Get three states checkbox](object-get-three-states-checkbox.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1249 |
| Hilo seguro | &cross; |


