---
id: set-query-destination
title: SET QUERY DESTINATION
slug: /commands/set-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY DESTINATION.Syntax-->**SET QUERY DESTINATION** ( *destinoTipo* {; *destinoObjeto* {; *destPunt*}} )<!-- END REF-->
<!--REF #_command_.SET QUERY DESTINATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| destinoTipo | Integer | &#8594;  | 0 = selección actual, 1 = conjunto, 2 = selección temporal, 3 = variable |
| destinoObjeto | Text, Variable | &#8594;  | Nombre del conjunto o Nombre de la selección temporal o variable |
| destPunt | Pointer | &#8594;  | Puntero a la variable local si destinoTipo=3 |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET QUERY DESTINATION.Summary-->El comando **SET QUERY DESTINATION** permite indicar a 4D donde ubicar el resultado de todas las búsquedas posteriores a la llamada a este comando en el proceso actual.<!-- END REF-->

Especifique el tipo de destino en el parámetro *destinoTipo.* 4D ofrece las siguientes constantes predefinidas, que se encuentran en el tema *Destinos de búsqueda* *:*  

| Constante              | Tipo         | Valor |
| ---------------------- | ------------ | ----- |
| Into current selection | Entero largo | 0     |
| Into named selection   | Entero largo | 2     |
| Into set               | Entero largo | 1     |
| Into variable          | Entero largo | 3     |

Especifique el destino de la búsqueda en el parámetro opcional *destinoObjeto* de acuerdo a la siguiente tabla:  

| **Parámetro destinoTipo** | **Parámetro destinoObjeto**                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 0 (selección actual)      | Omita el parámetro                                                                                         |
| 1 (conjunto)              | Pase el nombre de un conjunto (existente o a crear)                                                        |
| 2 (selección temporal)    | Pase el nombre de la selección temporal (existente o a crear)                                              |
| 3 (variable)              | Pase una variable numérica (existente), bien sea una cadena vacía "" para utilizar el parámetro *destPunt* |

* Con:

```4d
 SET QUERY DESTINATION(Into current selection)
```

Los registros encontrados por la búsqueda se colocarán en la selección actual de la tabla en la cual se efectúa la búsqueda.

* Con:

```4d
 SET QUERY DESTINATION(Into set;"miConjunto")
```

Los registros encontrados por la búsqueda se ubicarán en el conjunto *"miConjunto"*. La selección actual y el registro actual de la tabla en la cual realiza la búsqueda permanecen iguales. 

* Con:

```4d
 SET QUERY DESTINATION(Into named selection;"miSeleccionTemporal")
```

Los registros encontrados por la búsqueda se ubicarán en la selección temporal *"miSeleccionTemporal"*. La selección actual y el registro actual para la tabla en la que se efectúa la búsqueda permanecen iguales. 

**Notas:** 

* Si la selección temporal no existe de antemano, se creará automáticamente al final de la búsqueda.
* Este comando administra las selecciones temporales como el comando [CUT NAMED SELECTION](cut-named-selection.md): solo se conservan las referencias. Una vez se utiliza la selección temporal, ya no existe.
Con:   
  
```4d
 SET QUERY DESTINATION(Into variable;$vlResult)
```
  
  
**Nota**: con esta sintaxis, la variable **$vlResult* debe haber sido definida previamente, de lo contrario se genera un error. 

O:

```4d
 SET QUERY DESTINATION(Into variable;"";->$vlResult)
```

**Nota**: este segunda sintaxis facilita el uso conjunto del comando con [GET QUERY DESTINATION](get-query-destination.md). 

El número de registros encontrado por la búsqueda se ubicará en la variable *$vlResult*. La selección actual y el registro actual para la tabla en la que se efectúa la búsqueda permanecen iguales. 

**Advertencia:** **SET QUERY DESTINATION** afecta todas las búsquedas siguientes en el proceso actual. RECUERDE siempre compensar una llamada a **SET QUERY DESTINATION** (donde *destinoTipe#0*) con una llamada a **SET QUERY DESTINATION**(0) para restaurar el modo de búsqueda estándar. 

**SET QUERY DESTINATION** cambia únicamente el comportamiento de los comandos de búsqueda, es decir:

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)
Por otra parte, **SET QUERY DESTINATION** no afecta otros comandos que modifican la selección actual de la tabla como [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md), etc.

#### Ejemplo 1 

Se crea un formulario que muestra los registros de la tabla *\[Libreta telefonica\]*. Se crea un objeto de tipo pestaña llamado *asRolodex* (con una pestaña para cada letra del alfabeto) y un subformulario que muestra los registros de la tabla *\[Libreta telefonica\]*. Al elegir una pestaña, muestra los registros que corresponden a la letra. 

En su aplicación, la tabla *\[Libreta telefonica\]* contiene un conjunto de de datos estáticos, de manera que no necesita realizar una búsqueda cada vez que selecciona una pestaña. De esta manera, puede ahorrar tiempo precioso al ejecutar las búsquedas. 

Para hacer esto, puede redireccionar sus búsquedas en las selecciones temporales para reutilizarlas cuando sea necesario. Escriba el método de objeto de la pestaña *asRolodex* como se indica a continuación:

```4d
  // Método de objeto asRolodex
 Case of
    :(FORM Event=On Load)
  // Antes de que el formulario aparezca en la pantalla,
  // inicializar el rolodex y el array de booleanos que
  // nos indica si una búsqueda para la letra correspondiente
  // ha sido realizada o no
       ARRAY STRING(1;asRolodex;26)
       ARRAY BOOLEAN(abQueryDone;26)
       For($vlElem;1;26)
          asRolodex{$vlElem}:=Char(64+$vlElem)
          abQueryDone{$vlElem}:=False
       End for
 
    :(FORM Event=On Clicked)
  // Cuando un usuario hace clic en la pestaña, verificar si la búsqueda correspondiente
  // ha sido realizada o no
       If(Not(abQueryDone{asRolodex}))
  // Si no, redireccionar la próxima búsqueda a una selección temporal
          SET QUERY DESTINATION(Into named selection;"temp")
  // Efectuar la búsqueda
          QUERY([Libreta telefonica];[Libreta telefonica]Last name=asRolodex{asRolodex}+"@")
  // Restaurar el modo de búsqueda estándar
          SET QUERY DESTINATION(Into current selection)
  // Utilizar los registros encontrados
          USE NAMED SELECTION("temp")
          COPY NAMED SELECTION([Phone book];"Rolodex+asRolodex{asRolodex})
  // La próxima vez que seleccionemos esta letra, no realizaremos la búsqueda nuevamente
          abQueryDone{asRolodex}:=True
       Else
  // Utilice la selección temporal existente para mostrar los registros correspondientes a la letra seleccionada
          USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex}
       End if
 
    :(FORM Event=On Unload)
  // Luego el formulario desaparece de la pantalla
  // Borrar las selecciones temporales
       For($vlElem;1;26)
          If(abQueryDone{$vlElem})
             CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElem})
          End if
       End for
  // Borrar los dos arrays que ya no necesitamos
       CLEAR VARIABLE(asRolodex)
       CLEAR VARIABLE(abQueryDone)
 End case
```

#### Ejemplo 2 

El método de proyecto ValoresUnicos en este ejemplo le permite verificar si los valores son únicos para los campos en una tabla. El registro actual puede ser un registro existente o un registro nuevo. 

```4d
  // Método de proyecto ValoresUnicos
  // ValoresUnicos ( Puntero ; Puntero { ; Puntero... } ) -> Booleano
  // ValoresUnicos ( ->Tabla ; ->Campo { ; ->Campo2... } ) -> Yes o No
 
 var $0 : Boolean
 var ${1} : Pointer
 var $vlCampo;$vlNbCampos;$vlEncontrado;$vlRegistroActual : Integer
 $vlNbCampos:=Count parameters-1
 $vlRegistroActual:=Record number($1->)
 If($vlNbCampos>0)
    If($vlRegistroActual#-1)
       If($vlRegistroActual<0)
  // El registro actual es un nuevo registro que no ha sido guardado (número de registro -3);
  // por lo tanto podemos detener la búsqueda tan pronto como se encuentre al menos un registro
          SET QUERY LIMIT(1)
       Else
  // El registro actual es un registro existente;
  // por lo tanto podemos detener la búsqueda tan pronto como se encuentren al menos dos registros.
          SET QUERY LIMIT(2)
       End if
  // La búsqueda devolverá su resultado en $vlFound
  // sin cambiar el registro actual ni la seleccióna actual
       SET QUERY DESTINATION(Into variable;$vlFound)
  // Construir la búsqueda de acuerdo al número de campos especificados
       Case of
          :($vlNbCampos=1)
             QUERY($1->;$2->=$2->)
          :($vlNbCampos=2)
             QUERY($1->;$2->=$2->;*)
             QUERY($1->;&;$3->=$3->)
          Else
             QUERY($1->;$2->=$2->;*)
             For($vlCampo;2;$vlNbCampos-1)
                QUERY($1->;&;${1+$vlCampo}->=${1+$vlCampo}->;*)
             End for
             QUERY($1->;&;${1+$vlNbCampos}->=${1+$vlNbCampos}->)
       End case
       SET QUERY DESTINATION(Into current selection) // Restaurar el modo de búsqueda estándar
       SET QUERY LIMIT(0) // No hay límites de búsquedas
  // Procesar el resultado de la búsqueda
       Case of
          :($vlEncontrado=0)
             $0:=True // No hay valores duplicados
          :($vlEncontrado=1)
             If($vlRegistroActual<0)
                $0:=False // Se encontró un registro existente con los mismos valores que el nuevo registro
             Else
                $0:=True // No hay valores duplicado, encontramos el mismo registro
             End if
          :($vlEncontrado=2)
             $0:=False // Cualquiera que sea el caso, los valores están duplicados
       End case
    Else
       If(◊DebugOn) // No tiene sentido; señálelo durante la versión de desarrollo
          TRACE // ¡ATENCIÓN! Este método es llamado sin registro actual
       End if
       $0:=False // No es posible garantizar el resultado
    End if
 Else
    If(◊DebugOn) // No tiene sentido; señálelo si la versión de desarrollo
       TRACE // ¡ATENCIÓN! Este método es llamado sin condición de búsqueda
    End if
    $0:=False // No puedo garantizar el resultado
 End if
```

Después de implementar este método de proyecto en su aplicación, puede escribir:

```4d
  // ...
 If(ValoresUnicos(->[Contactos];->[Contactos]Empresa;->[Contactos]Apellido;->[Contactos]Nombre))
  // Realice acciones apropiadas para el registro que tiene valores únicos
 Else
    ALERT("Ya existe un contacto con este nombre para esta empresa.")
 End if
  // ...
```

#### Ver también 

[GET QUERY DESTINATION](get-query-destination.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY LIMIT](set-query-limit.md)  