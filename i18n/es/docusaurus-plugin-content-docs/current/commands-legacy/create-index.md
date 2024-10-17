---
id: create-index
title: CREATE INDEX
slug: /commands/create-index
displayed_sidebar: docs
---

<!--REF #_command_.CREATE INDEX.Syntax-->**CREATE INDEX** ( *tabla* ; *arrayCampos* ; *tipoIndice* ; *nombreIndice* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE INDEX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual crear un índice |
| arrayCampos | Pointer array | &#8594;  | Puntero(s) a el/los campo(s) a indexar |
| tipoIndice | Integer | &#8594;  | Tipo de índice a crear: -1 = Palabras claves, 0 = por defecto, 1 = B-Tree estándar, 3 = B-Tree cluster |
| nombreIndice | Text | &#8594;  | Nombre del índice a crear |
| * | Operador | &#8594;  | Si pasa = indexación asincrónica |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE INDEX.Summary-->El comando **CREATE INDEX** permite crear: 

* Un índice estándar en uno o más campos (índice compuesto) o
* Un índice de palabras claves en un campo.<!-- END REF-->

El índice se crea para la tabla *laTabla* utilizando uno o más campos designados por el array de punteros *arrayCampos*. Este array contiene una sola línea si quiere crear un índice simple y dos o más cuando quiere crear un índice compuesto (excepto en el caso de un índice de palabras claves). En el caso de los índices compuestos, el orden de los campos en el array es importante durante la construcción del índice.

El parámetro *tipoIndice* permite definir el tipo de índice a crear. Puede pasar una de las siguientes constantes, que se encuentran en el tema “*Tipo de índice*”:

| Constante            | Tipo         | Valor | Comentario                                                                                                                                                                                                             |
| -------------------- | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cluster BTree index  | Entero largo | 3     | Índice de tipo B-Tree utilizando clusters. Este tipo de índice se optimiza cuando el índice contiene pocas palabras claves, es decir cuando los mismos valores se presentan con frecuencia en los datos.               |
| Default index type   | Entero largo | 0     | 4D define el tipo de índice (excepto los índices de palabras claves) que es el más optimizado en función del contenido del campo.                                                                                      |
| Keywords index       | Entero largo | \-1   | Permite la indexación palabra por palabra del contenido del campo. Este tipo de índice sólo puede utilizarse con campos de tipo Texto, Alfa e Imagen. Atención los índices de palabras claves no pueden ser compuestos |
| Standard BTree index | Entero largo | 1     | Índice de tipo B-Tree clásico. Este tipo de índice multi propósito se utiliza en las versiones anteriores de 4D                                                                                                        |

**Nota:** un índice B-Tree asociado a un campo de tipo texto almacena como máximo los primeros 1024 caracteres del campo. Por lo tanto en este contexto, las búsquedas en las cadenas que contienen más de 1024 caracteres fallarán. 

Pase en *nomIndice* el nombre del índice a crear. Es necesario dar nombres a los índices si varios índices de diferentes tipos pueden asociarse a un mismo campo y si prefiere poder borrarlos individualmente con la ayuda del comando [DELETE INDEX](delete-index.md). Si el índice *nomIndice* ya existe, el comando no hace nada.

El parámetro opcional *\**, cuando se pasa, permite efectuar la indexación en modo asincrónico. En este modo, el método original continua su ejecución después de la llamada del comando, sin importar si la indexación ha terminado o no. 

Si el comando **CREATE INDEX** encuentra registros bloqueados, estos no se indexarán y el comando esperará a que se desbloqueen. 

Si ocurre un problema durante la ejecución del comando (campo no indexable, intento de creación de un índice de palabras claves de más de un campo, etc.), se genera un error. Este error puede interceptarse utilizando un método de gestión de errores.

#### Nota para despliegue 

Dado que este comando modifica la estructura de la base de datos, no puede utilizarse en el contexto de una aplicación empaquetada de sólo lectura (archivo .4dc instalado en la carpeta Archivos de programa o archivo .4dz). 

#### Ejemplo 1 

Creación de dos índices estándar en los campos “Apellido” y “Teléfono” de la tabla \[Clientes\]:

```4d
 ARRAY POINTER(arrayPtrCampo;1)
 fieldPtrArr{1}:=->[Clientes]Apellido
 CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CustLNameIdx")
 fieldPtrArr{1}:=->[Clientes]Telefono
 CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CustTelIdx")
```

#### Ejemplo 2 

Creación de un índice de palabras claves en el campo “Observaciones” de la tabla \[Clientes\]:

```4d
 ARRAY POINTER(arrayPtrCampo;1)
 fieldPtrArr{1}:=->[Clientes]Observaciones
 CREATE INDEX([Clientes];arrayPtrCampo;Keywords Index;"CustObsIdx")
```

#### Ejemplo 3 

Creación de un índice compuesto en los campos “Ciudad” y “CodigoPostal” de la tabla \[Clientes\]:

```4d
 ARRAY POINTER(arrayPtrCampo;2)
 fieldPtrArr{1}:=->[Clientes]Ciudad
 fieldPtrArr{2}:=->[Clientes]CodigoPostal
 CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CityZip")
```

#### Ver también 

[DELETE INDEX](delete-index.md)  
[RESUME INDEXES](resume-indexes.md)  
[SET INDEX](set-index.md)  