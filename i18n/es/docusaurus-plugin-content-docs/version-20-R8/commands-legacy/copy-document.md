---
id: copy-document
title: COPY DOCUMENT
slug: /commands/copy-document
displayed_sidebar: docs
---

<!--REF #_command_.COPY DOCUMENT.Syntax-->**COPY DOCUMENT** ( *nomFuente* ; *nomDest* {; *nuevNombre*} {; *} )<!-- END REF-->
<!--REF #_command_.COPY DOCUMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomFuente | Text | &#8594;  | Nombre del documento a copiar |
| nomDest | Text | &#8594;  | Nombre del documento copiado |
| nuevNombre | Text | &#8594;  | Nuevo nombre del archivo o carpeta copiado |
| * | Operador | &#8594;  | Reemplazar documento existente si lo hay |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COPY DOCUMENT.Summary-->El comando **COPY DOCUMENT** copia el documento especificado por *nomFuente* en la ubicación especificada por *nomDest*.<!-- END REF--> 
En este caso, el parámetro *nomFuente* debe contener una ruta de acceso completa del archivo, expresada con respecto a la raíz del volumen.  
El parámetro *nomDest* puede contener varios tipos de lugares:  
   * una ruta de acceso completa del archivo expresada con respecto a la raíz del volumen: el archivo se copia en esta ubicación  
   * un nombre de archivo o una ruta de acceso del archivo relativa: el archivo se copia en la carpeta de la base (las subcarpetas ya deben existir)  
   * una ruta de acceso completa de la carpeta o una ruta relativa a la carpeta de la base (*nomDest* debe terminar con el separador de carpeta de la plataforma): el archivo se copia en la carpeta designada. Estas carpetas ya deben existir en el disco, no se crean.  
Se generará un error si ya hay un documento llamado *nomDest* a menos que haya especificado el parámetro opcional *\** que le indica a **COPY DOCUMENT** que borre y remplace el documento en la ubicación de destino en este caso.
* **Copia de carpeta**  
Para indicar que se designa una carpeta, las cadenas pasadas en *nomFuente* y *nomDest* deben terminar con un separador de carpetas de la plataforma. Por ejemplo, en Windows "C: \\\\Element\\\\" designa una carpeta y "C:\\\\Element" designa un archivo.  
Para copiar una carpeta, pase su ruta de acceso completa en *nomFuente*. Esta carpeta debe existir en el disco. Cuando una carpeta se define en el parámetro *nomFuente*, una carpeta también deberá designarse en el parámetro *nomDest*. Debe pasar una ruta de acceso completa de carpeta (cada elemento ya debe existir en el disco).  
Si ya existe una carpeta con el mismo nombre de la carpeta designada por el parámetro *nomFuente* en la ubicación definida por el parámetro *nomDest* y no está vacía, 4D verifica su contenido antes de copiar los elementos. Un error se genera cuando ya existe un archivo con el mismo nombre, a menos que haya pasado el parámetro opcional *\**, que indica al comando borrar y remplazar el archivo en la ubicación de destino.
Note que puede pasar un archivo en el parámetro *nomFuente* y una carpeta en el parámetro *nomDest*, para copiar un archivo en una carpeta.  
  
El parámetro opcional *nuevoNombre*, si se pasa, permite renombrar el documento copiado a su ubicación de destino (archivo o carpeta). Cuando se pasa en el contexto de una copia de archivo, este parámetro remplaza el nombre (si lo hay) pasado en el parámetro *nomDest*.

#### Ejemplo 1 

El siguiente ejemplo duplica un documento en su propia carpeta:

```4d
 COPY DOCUMENT("C:\\CARPETA\\DocNombre";"C:\\CARPETA\\DocNombre2")
```

#### Ejemplo 2 

El siguiente ejemplo copia un documento en la carpeta de la base (siempre y cuando C:\\\\CARPETA no sea la carpeta de la base):

```4d
 COPY DOCUMENT("C:\\CARPETA \\DocNombre";"DocNombre")
```

#### Ejemplo 3 

El siguiente ejemplo copia un documento de un volumen a otro:

```4d
 COPY DOCUMENT("C:\\CARPETA \\DocNombre";"F:\\Archivos\\DocNombre.OLD")
```

#### Ejemplo 4 

El siguiente ejemplo duplica un documento en su propia carpeta, sobrescribiendo una copia existente:

```4d
 COPY DOCUMENT("C:\\CARPETA \\DocNombre";"C:\\CARPETA \\DocNombre2";*)
```

#### Ejemplo 5 

Copia de un archivo en una carpeta específica conservando el mismo nombre:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\")
```

#### Ejemplo 6 

Copiar un archivo en una carpeta específica conservando el mismo nombrey remplazando el documento existente:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\"; *)
```

#### Ejemplo 7 

Copia de una carpeta en otra carpeta (ambas carpetas deben existir en el disco):

```4d
 COPY DOCUMENT("C:\\Projects\\";"C\\Archives\\2011\\")
```

#### Ejemplo 8 

Los siguientes ejemplos crean diferentes archivos y carpetas en la carpeta de la base (ejemplos bajo Windows). En cada caso, la carpeta "folder2" debe existir:

```4d
 COPY DOCUMENT("folder1\\name1";"folder2\\")
  //crea el archivo "folder2/name1"
 
 COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
  //crea el archivo "folder2/new"
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2")
  //crea el archivo "folder2/name2"
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2";"new")
  //crea el archivo "folder2/new" (name2 se ignora)
 
 COPY DOCUMENT("folder1\\" ; "folder2\\")
  //crea la carpeta "folder2/folder1/"
 
 COPY DOCUMENT("folder1\\" ; "folder2\\" ; "new")
  //crea la carpeta "folder2/new/"
```

#### Ver también 

*Documentos del sistema*  
[MOVE DOCUMENT](move-document.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 541 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


