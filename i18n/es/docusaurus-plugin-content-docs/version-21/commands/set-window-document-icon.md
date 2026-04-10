---
id: set-window-document-icon
title: SET WINDOW DOCUMENT ICON
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW DOCUMENT ICON.Syntax-->**SET WINDOW DOCUMENT ICON** ( *winRef* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *image* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *file* )<br/>**SET WINDOW DOCUMENT ICON** (  *winRef* ; *image* ; *file* )<!-- END REF-->

<!--REF #_command_.SET WINDOW DOCUMENT ICON.Params-->

| Parámetros | Tipo                                               |                             | Descripción                        |
| ---------- | -------------------------------------------------- | --------------------------- | ---------------------------------- |
| winRef     | Integer                                            | &#8594; | Número de referencia de la ventana |
| image      | Picture                                            | &#8594; | Ícono personalizado                |
| file       | 4D.File, 4D.Folder | &#8594; | Ruta del archivo o de la carpeta   |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R7       | Añadidos       |

</details>

## Descripción

El comando `SET WINDOW DOCUMENT ICON` <!--REF #_command_.SET WINDOW DOCUMENT ICON.Summary-->permite definir un icono para las ventanas en aplicaciones multiventana utilizando una *image* y/o un *file* con la referencia de ventana *winRef*<!-- END REF-->. El icono será visible dentro de la propia ventana y en la barra de tareas de Windows para ayudar a los usuarios a identificar y navegar por las distintas ventanas.

En el caso de una aplicación MDI en Windows, puede pasar `-1` en *winRef* para definir el icono de la ventana principal. En otros contextos (macOS o [aplicación IDE](../Menus/sdi.md) en Windows), usar -1 no hace nada.

- Si solo se pasa *file*, la ventana utiliza el icono correspondiente al tipo de archivo y la ruta del archivo se muestra en el menú de la ventana.
- Si sólo se pasa *image*, 4D no muestra la ruta y la imagen pasada se utiliza para el icono de la ventana.
- Si se pasan tanto *file* como *image*, la ruta del archivo se muestra en el menú de la ventana y la imagen pasada se utiliza para el icono de la ventana.
- Si sólo se pasa *winRef* o *image* está vacío, se elimina el icono en macOS y se muestra el icono por defecto en Windows (icono de la aplicación).

## Ejemplo

En este ejemplo, queremos crear cuatro ventanas:

1. Utiliza el icono de la aplicación en Windows y ningún icono en macOS (estado por defecto cuando no se utiliza *image* o *file*).
2. Utilice un icono "user".
3. Asociar un documento a la ventana (para ello se utiliza su icono de tipo de archivo).
4. Personalizar el icono asociado al documento.

```4d
 var $winRef : Integer
 var $userImage : Picture
 var $file : 4D.File
 
  // 1- Abrir formulario "Contact"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 SET WINDOW DOCUMENT ICON($winRef)
 DIALOG("Contact";*)
 
  // 2- Abrir formulario "Contact" con icono "user"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)
 SET WINDOW DOCUMENT ICON($winRef;$userImage)
 DIALOG("Contact";*)
 
  // 3- Abrir formulario "Contact" asociado al documento "user"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 $file:=File("/RESOURCES/files/user.txt")
 SET WINDOW DOCUMENT ICON($winRef;$file)
 DIALOG("Contact";*)
 
  // 4- Abrir formulario "Contact" asociado al documento "user" con icono "user"
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)
 $file:=File("/RESOURCES/files/user.txt")
 SET WINDOW DOCUMENT ICON($winRef;$userImage;$file)
 DIALOG("Contact";*)

```

## Ver también

[Create entity selection](create-entity-selection.md)