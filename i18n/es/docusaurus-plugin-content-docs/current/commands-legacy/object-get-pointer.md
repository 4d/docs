---
id: object-get-pointer
title: OBJECT Get pointer
slug: /commands/object-get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get pointer.Syntax-->**OBJECT Get pointer** {( *selector* {; *nomObjeto* {; *nomSubFormulario*}})} : Pointer<!-- END REF-->
<!--REF #_command_.OBJECT Get pointer.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Categoría del objeto |
| nomObjeto | Text | &#8594;  | Nombre de objeto |
| nomSubFormulario | Text | &#8594;  | Nombre del objeto subformulario |
| Resultado | Pointer | &#8592; | Puntero a la variable del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get pointer.Summary-->El comando **OBJECT Get pointer** devuelve un puntero a la variable de un objeto de formulario.<!-- END REF-->   
  
Este comando se puede utilizar para designar diferentes tipos de objetos en función del valor del parámetro selector. Puede pasar en este parámetro una de las siguientes constantes (del tema *Objetos de formulario (Acceso)*):  

* Object current o *selector* omitido: si se omite el parámetro *selector* o pasar este selector, el comando devuelve un puntero a la variable asociada al objeto actual (objeto cuyo método está en ejecución).  
**Nota**: este funcionamiento es estrictamente equivalente al funcionamiento previo del comando [Self](self.md). El comando [Self](self.md) se conserva únicamente por razones de compatibilidad.
* Object with focus: si pasa este selector, el comando devuelve un puntero a la variable asociada al objeto que tiene el foco en el formulario. Los últimos dos parámetros opcionales se ignoran si se pasan.  
**Nota**: este funcionamiento es estrictamente equivalente al comando [Focus object](focus-object.md). El comando [Focus object](focus-object.md) ahora es obsoleto a partir de 4D v12.
* Object subform container: si pasa este selector, el comando devuelve un puntero a la variable vinculada con el contenedor del subformulario. Los últimos dos parámetros opcionales se ignoran si se pasan. Este selector por lo tanto sólo puede utilizarse en el contexto de un formulario que se utiliza como un subformulario, con el fin de acceder a la variable asociada al objeto contenedor.
* Object named: si pasa este selector, también debe pasar el segundo parámetro, nomObjeto. En este caso, el comando devuelve un puntero a la variable asociada al objeto cuyo nombre se pasó en este parámetro.  
**Nota**: si *nomObjeto* corresponde a un subformulario y la opción "Subformulario salida" está seleccionada, el comando devuelve un puntero a la tabla del subformulario si una tabla fuente está especificada, de lo contrario devuelve Nil.

**Nota:** When it is used in the context of a list box, **OBJECT Get pointer** with Object current or Object with focus selectors returns a pointer to the list box, the column, or the header, depending on the context. For more information, please refer to the *Gestión programada de los objetos de tipo List box* page.

  
El parámetro opcional *nomSubForm* permite recuperar un puntero a un objeto *nomObjeto* que no pertenece al contexto actual, es decir, al formulario padre. Para poder utilizar este parámetro, debe haber pasado el selector Object named.   
Cuando se pasa el parámetro *nomSubForm*, el comando **OBJECT Get pointer** primero busca el objeto subformulario objeto llamado *nomSubForm* en el formulario actual, luego busca al interior de este subformulario un objeto llamado *nomObjeto*. Si este objeto se encuentra, se devuelve un puntero a la variable de este objeto.

#### Ejemplo 

Dado un formulario "SF" utilizado dos veces como subformulario en el mismo formulario padre. Los objetos subformularios se llaman "SF1" y "SF2". El formulario "SF" contiene un objeto llamado *ValorActual*. En el evento "On Load" del método de formulario del formulario padre, queremos inicializar el objeto *Valor Actual* de SF1 en "Enero" y el de SF2 en "Febrero": 

```4d
 var $Ptr : Pointer
 $Ptr:=OBJECT Get pointer(Object named;"Valor actual";"SF1")
 $Ptr->:="Enero"
 $Ptr:=OBJECT Get pointer(Object named;"Valor actual";"SF2")
 $Ptr->:="Febrero"
```

#### Ver también 

[Focus object](focus-object.md)  
[OBJECT Get name](object-get-name.md)  
[OBJECT Get subform container value](object-get-subform-container-value.md)  
*Objetos (Formularios)*  
*Objetos de formulario (Acceso)*  
[Self](self.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1124 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


