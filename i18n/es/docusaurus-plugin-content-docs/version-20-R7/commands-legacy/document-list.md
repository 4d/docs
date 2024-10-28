---
id: document-list
title: DOCUMENT LIST
slug: /commands/document-list
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT LIST.Syntax-->**DOCUMENT LIST** ( *nombreRuta* ; *documentos* {; *opciones*} )<!-- END REF-->
<!--REF #_command_.DOCUMENT LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreRuta | Text | &#8594;  | Ruta de acceso al volumen o a la carpeta |
| documentos | Text array | &#8592; | Nombres de los documentos presentes en esta ubicación |
| opciones | Integer | &#8594;  | Opciones para crear la lista |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOCUMENT LIST.Summary-->El comando **DOCUMENT LIST** llena el array de tipo Texto *documentos* con los nombres del los documentos ubicados en la ubicación pasada en *rutaAcceso*.<!-- END REF--> 

**Nota:** el parámetro *rutaAcceso* sólo acepta rutas de acceso absolutas. 

Por defecto, si omite el parámetro *opciones*, sólo los nombres de los documentos se devuelven en el array *documentos*. Puede modificar este funcionamiento pasando en el parámetro *opciones*, una o más de las siguientes constantes, que se encuentran en el tema *Documentos sistema*:

| Constante         | Tipo         | Valor | Comentario                                                                                   |
| ----------------- | ------------ | ----- | -------------------------------------------------------------------------------------------- |
| Absolute path     | Entero largo | 2     | El array documentos contiene las rutas de acceso absolutas                                   |
| Ignore invisible  | Entero largo | 8     | Los documentos invisibles no se listan                                                       |
| Posix path        | Entero largo | 4     | El array *documentos* contiene las rutas de acceso al formato POSIX                          |
| Recursive parsing | Entero largo | 1     | El array documentos contiene los archivos y todas las subcarpetas de la carpeta especificada |

**Notas:**

* Con la opción Recursive parsing en modo relativo (opción 1 únicamente), las rutas de los documentos ubicadas en las subcarpetas comienzan con los caracteres ":" o "\\" dependiendo de la plataforma.
* Con la opción Posix path en modo relativo (opción 4 únicamente), las rutas no comienzan por "/".
* Con la opción Posix path en modo absoluto (opción 4 + 2), las rutas siempre comienzan por "/".

Si no hay documentos en la ubicación especificada, el comando devuelve un array vacío. Si la ruta de acceso pasada en *rutaAcceso* es invalida, **DOCUMENT LIST** genera un error de gestión de archivo que se puede interceptar utilizando un método [ON ERR CALL](on-err-call.md).

#### Ejemplo 1 

Lista de todos los documentos en una carpeta (sintaxis por defecto):

```4d
 DOCUMENT LIST("C:\\";arrFiles)
```

\-> arrFiles:  
 Text1.txt  
 Text2.txt

#### Ejemplo 2 

Lista de todos los documentos en una carpeta en modo absoluto:

```4d
 DOCUMENT LIST("C:\\";arrFiles; Absolute path)
```

\-> arrFiles:  
 C:\\Text1.txt  
 C:\\Text2.txt

#### Ejemplo 3 

Lista de todos los documentos en modo recursivo (relativo):

```4d
 DOCUMENT LIST("C:\\";arrFiles;Recursive parsing)
```

  
\-> arrFiles:  
 Text1.txt  
 Text2.txt  
 \\Folder1\\Text3.txt  
 \\Folder1\\Text4.txt  
 \\Folder2\\Text5.txt  
 \\Folder2\\Folder3\\Picture1.png

#### Ejemplo 4 

Lista de todos los documentos en modo recursivo absoluto:

```4d
 DOCUMENT LIST("C:\\";arrFiles;Recursive parsing)
```

\-> arrFiles:  
 C:\\MyFolder\\MyText1.txt  
 C:\\MyFolder\\MyText2.txt  
 C:\\MyFolder\\Folder1\\MyText3.txt  
 C:\\MyFolder\\Folder1\\MyText4.txt  
 C:\\MyFolder\\Folder2\\MyText5.txt  
 C:\\MyFolder\\Folder2\\Folder3\\MyPicture1.png

#### Ejemplo 5 

Lista de todos los documentos en modo recursivo Posix (relativo):

#code4D\]DOCUMENT LIST("C:\\\\MyFolder\\\\";arrFiles;Recursive parsing+Posix path)\[#/code4D\]

\-> arrFiles:  
 MyText1.txt  
 MyText2.txt  
 Folder1/MyText3.txt  
 Folder1/MyText4.txt  
 Folder2/MyText5.txt  
 Folder2/Folder3/MyPicture1.png

#### Ver también 

[FOLDER LIST](folder-list.md)  
[VOLUME LIST](volume-list.md)  