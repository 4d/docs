---
id: method-get-paths-form
title: METHOD GET PATHS FORM
slug: /commands/method-get-paths-form
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS FORM.Syntax-->**METHOD GET PATHS FORM** ( {*laTabla* ;} *arrRutas* {; *filtro*}{; *marcador*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS FORM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Referencia de tabla |
| arrRutas | Text array | &#8592; | Array de rutas y nombres de los métodos |
| filtro | Text | &#8594;  | Filtros de nombres |
| marcador | Real | &#8594;  | Valor mínimo de marcador |
| &#8592; | Nuevo valor actual |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.METHOD GET PATHS FORM.Summary-->El comando **METHOD GET PATHS FORM** llena el array *arrRutas* con las rutas de acceso internas y los nombres de los métodos de todos los objetos de los formularios así como también de los métodos formulario.<!-- END REF--> Los métodos formulario se etiquetan {formMethod}.  
  
Sólo los objetos que contienen código se listan. Por ejemplo, no se devuelven los botones que estén asociados únicamente con una acción estándar.  
  
Si pasa el parámetro *laTabla*, el comando devuelve los objetos de los formularios tabla asociados a esta tabla. Si omite este parámetro, el comando devuelve los objetos de formularios proyecto de la base.   
  
Puede limitar esta lista de formularios pasando una cadena de comparación en el parámetro *filtro*, en este caso, sólo se devuelven los formularios cuyos nombres coincidan con el filtro. Puede utilizar el carácter @ para definir los filtros de tipo "comienza por", "termina en" o "contiene". Si pasa una cadena vacía, el parámetro *filtro* se ignora.  
  
El parámetro *marcador* permite recuperar las rutas de los métodos modificados a partir de un momento específico. Como parte de un sistema de control de versión, esto significa que puede actualizar sólo los métodos modificados desde el último backup.  
El funcionamiento es el siguiente: 4D mantiene un contador de modificación de métodos. Cada vez que un método se crea o se vuelve a guardar, este contador se incrementa y su valor actual se guarda en el marcador interno del método.  
Si pasa el parámetro *marcador*, el comando sólo devuelve los métodos cuyo marcador es superior o igual al valor pasado en este parámetro. Además, el comando devuelve en *marcador* el nuevo valor actual del contador de modificación, es decir el valor más alto. Si guarda este valor, puede pasarlo la próxima vez que este comando se llame de manera usted sólo recupera los métodos nuevos o modificados.  
  
Si se ejecuta este comando desde un componente, devuelve por defecto las rutas de los métodos del componente. Si pasa el parámetro *\**, el array contendrá las rutas de los métodos de la base local.  
  
**Nota**: el comando no lista los objetos de los formularios heredados o de los subformularios. 

Si el comando detecta un nombre de método duplicado, se genera el error -9802 ("Object path not unique"). En este caso, es aconsejable utilizar el CSM con el fin de verificar la estructura de la base de datos.

#### Ejemplo 1 

Lista de todos los objetos del formulario "input" de la tabla \[Empleados\]. Note que los métodos formulario tabla (y los métodos formulario proyecto) se procesan como objetos que pertenecen al formulario:

```4d
 METHOD GET PATHS FORM([Employees];arrPaths;"input")
  // Contenido de arrPaths (por ejemplo)
  // [tableForm]/input/{formMethod} -> Método formulario
  // [tableForm]/input/bOK -> Método objeto
  // [tableForm]/input/bCancel -> Método objeto
```

#### Ejemplo 2 

Lista de los objetos del formulario proyecto "dial":

```4d
 METHOD GET PATHS FORM(arrPaths;"dial")
```

#### Ejemplo 3 

Lista de todos los objetos de los formularios "input" de la tabla \[Empleados\] a partir de un componente:

```4d
 METHOD GET PATHS FORM(([Empleados];arrPaths;"input@";*)
```

#### Ver también 

[FORM GET NAMES](form-get-names.md)  