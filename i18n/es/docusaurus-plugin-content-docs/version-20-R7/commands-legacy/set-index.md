---
id: set-index
title: SET INDEX
slug: /commands/set-index
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX.Syntax-->**SET INDEX** ( *unCampo* ; *index* {; *} )<!-- END REF-->
<!--REF #_command_.SET INDEX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo del cual crear o borrar el índice |
| index | Boolean, Integer | &#8594;  | • True=Crear el índice, False=Borrar el índice, o • Crear un índice de tipo: -1=palabras claves, 0=por defecto, 1=B-Tree estándar, 3=B-Tree cluster |
| * | Operator |  &#8594;  | Si se pasa * indexación asincrónica |

<!-- END REF-->

#### Nota de compatibilidad 

<!--REF #_command_.SET INDEX.Summary-->**SET INDEX**, aunque es un comando heredado, todavía es totalmente compatible y puede permanecer en su aplicación, no es necesario volver a escribir el código existente.<!-- END REF--> Sin embargo, sería mejor utilizar [CREATE INDEX](create-index.md) y [DELETE INDEX](delete-index.md) para administrar los índices porque brindan más funcionalidades.

#### Descripción 

El comando **SET INDEX** acepta dos sintaxis:

* Si pasa un booleano en el parámetro *index*, el comando crea o borra el índice para el campo que pasó en *campo*.
* Si pasa un entero el parámetro *index*, el comando crea un índice del tipo especificado.

**index = Booleano**

Para indexar el campo, pase True en *index*. El comando crea un índice del tipo por defecto. Si el índice ya existe, el comando no hace nada.   
Si pasa False en *index*, el comando borrará todos los índices estándar (es decir, no compuestos ni palabras claves) asociados al campo. Si el índice no existe, el comando no hace nada.

**index = Entero**  
En este caso, el comando crea un índice del tipo especificado por *campo*. Puede pasar una de las siguientes constantes, que se encuentran en el tema “*Tipo de índice*”:

| Constante            | Tipo         | Valor | Comentario                                                                                                                                                                                               |
| -------------------- | ------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cluster BTree Index  | Entero largo | 3     | Índice de tipo B-Tree utilizando clusters. Este tipo de índice se optimiza cuando el índice contiene pocas palabras claves, es decir cuando los mismos valores se presentan con frecuencia en los datos. |
| Default Index Type   | Entero largo | 0     | 4D define el tipo de índice (excepto los índices de palabras claves) que es el más optimizado en función del contenido del campo.                                                                        |
| Keywords Index       | Entero largo | \-1   | Permite la indexación palabra por palabra del contenido del campo. Este tipo de índice sólo puede utilizarse con campos de tipo Texto o Alfa.                                                            |
| Standard BTree Index | Entero largo | 1     | Índice de tipo B-Tree clásico. Este tipo de índice multi propósito se utiliza en las versiones anteriores de 4D                                                                                          |

**Nota:** un índice B-Tree asociado a un campo de tipo texto almacena como máximo los primeros 1024 caracteres del campo. Por lo tanto en este contexto, las búsquedas en las cadenas que contengan más de 1024 caracteres fallarán.

**SET INDEX** no indexará registros bloqueados; el comando esperará a que el registro sea desbloqueado.

El parámetro opcional *\** indica una indexación asincrónica (simultánea). Una indexación asincrónica permite al método llamante continuar su ejecución inmediatamente después de la llamada, bien sea que la indexación haya terminado o no. Sin embargo, la ejecución se detendrá si un comando requiere la indexación.

**Notas:**

* Los índices creados por este comando no tienen nombres. No pueden ser borrados por el comando [DELETE INDEX](delete-index.md) utilizando la sintaxis basada en el nombre.
* Este comando no permite crear o borrar índices compuestos.
* Este comando no permite borrar un índice de palabras claves creado por el comando [CREATE INDEX](create-index.md).

#### Nota para despliegue 

Dado que este comando modifica la estructura de la base de datos, no puede utilizarse en el contexto de una aplicación empaquetada de sólo lectura (archivo .4dc instalado en la carpeta Archivos de programa o archivo .4dz). 

#### Ejemplo 1 

El siguiente ejemplo indexa el campo *\[Clientes\]ID*:

```4d
 UNLOAD RECORD([Clientes])
 SET INDEX([Clientes]ID;True)
```

#### Ejemplo 2 

Usted quiere indexar el campo *\[Clientes\]Nombre* en modo asincrónico:

```4d
 SET INDEX([Clientes]Nombre;True;*)
```

#### Ejemplo 3 

Creación de un índice de palabras claves:

```4d
 SET INDEX([Libros]Summary;Keywords Index)
```

#### Ver también 

[CREATE INDEX](create-index.md)  
[DELETE INDEX](delete-index.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[ORDER BY](order-by.md)  
[QUERY](query.md)  