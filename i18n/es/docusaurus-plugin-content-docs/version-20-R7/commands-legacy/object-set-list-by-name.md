---
id: object-set-list-by-name
title: OBJECT SET LIST BY NAME
slug: /commands/object-set-list-by-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET LIST BY NAME.Syntax-->**OBJECT SET LIST BY NAME** ( {* ;} *objeto* {; *listType*}; *lista* )<!-- END REF-->
<!--REF #_command_.OBJECT SET LIST BY NAME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| listType | Integer | &#8594;  | Tipo de lista: Lista de selección, Lista obligatoria o Lista de excluidos |
| lista | Text | &#8594;  | Nombre de la lista a utilizar (definida en el entorno Diseño) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET LIST BY NAME.Summary-->El comando OBJECT SET LIST BY NAME define, reemplaza o disocia la lista asociada al objeto o al grupo de objetos designado por *objeto.<!-- END REF-->* La lista cuyo nombre se pasa en el parámetro *lista* debe haber sido creada en el editor de listas en el entorno Diseño*.*

Este comando puede aplicarse a un formulario de entrada o diálogo, a campos y variables editables cuyos valores pueden introducirse como texto.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena)*.* Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, usted especifica una referencia de un campo o de una variable (campo o variable de tipo objeto únicamente) en lugar de una cadena. 

**Nota:** este comando no puede utilizarse con campos ubicados en un formulario listado de un subformulario.

El comando **OBJECT SET LIST BY NAME** le permite definir o remplazar todos los tipos de listas asociadas a los objetos designados por los parámetros *objeto* y *\**: listas de selección, lista de valores obligatorios y listas de valores excluidos. Para ello, en el parámetro *tipoLista* pase una de las siguientes constantes, que se encuentra en el tema "*Propiedades de los objetos*":

| Constante     | Tipo         | Valor | Comentario                                                                                         |
| ------------- | ------------ | ----- | -------------------------------------------------------------------------------------------------- |
| Choice list   | Entero largo | 0     | Lista simple de selección de valores (opción "Lista" en la Lista de Propiedades) (por defecto)     |
| Excluded list | Entero largo | 2     | Lista de valores no aceptados para la entrada (Opción "Exclusiones" en la lista de propiedades)    |
| Required list | Entero largo | 1     | Lista sólo los valores aceptados para la entrada (Opción "Obligatoria" en la Lista de Propiedades) |

Si omite este parámetro, el valor 0 (lista de selección) se utiliza por defecto.

En el proceso actual, para desvincular una lista que se asoció al *objeto*, pase una cadena vacía ("") en el parámetro *lista* para el tipo de lista concerniente.

La lista de valores existente se sustituye en función de cómo se asocie la lista al objeto formulario:

* utilizando una lista de selección: se sustituye la propia lista.
* utilizando un array: la lista se copia en elementos de array.
* utilizando un objeto (*no soportado en bases de datos binarias*): la lista se copia como elementos de la colección en la propiedad *values* del objeto.

#### Ejemplo 1 

El siguiente ejemplo define una lista asociada a un campo Envío. Si el envío debe realizarse en la noche, entonces la lista muestra las empresas que realizan envíos en la noche. De lo contrario, se asignan las empresas de envíos estándar:

```4d
 If([Envios]Overnight)
    
OBJECT SET LIST BY NAME([Envios]Empresa;"Envios de noche")
 Else
    OBJECT SET LIST BY NAME([Envios]Empresa;"Envios estándar")
 End if


```

#### Ejemplo 2 

Asocia la lista "color\_choice" como una lista desplegable simple llamada "DoorColor":

```4d
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"color_choice")
  // en este caso, el tercer parámetro (constante) puede omitirse
```

#### Ejemplo 3 

Usted desea asociar la lista "color\_choice" al combo box "WallColor". Como este combo box es editable, usted desea que no sea posible usar ciertos colores como el "negro", "morado", etc. Estos colores se colocan en la lista "excl\_colors":

```4d
 OBJECT SET LIST BY NAME(*;"WallColor";Choice list;"color_choice")
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"excl_colors")
```

#### Ejemplo 4 

Usted quiere eliminar la lista de asociaciones:

```4d
  // eliminación de una lista de selección
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"")
  // eliminación de una lista de valores que que no son permitidos
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"")
```

#### Ver también 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  