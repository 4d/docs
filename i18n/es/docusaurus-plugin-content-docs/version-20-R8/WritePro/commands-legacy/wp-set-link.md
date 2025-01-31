---
id: wp-set-link
title: WP SET LINK
slug: /WritePro/commands/wp-set-link
displayed_sidebar: docs
---

<!--REF #_command_.WP SET LINK.Syntax-->**WP SET LINK** ( *objRango* ; *objEnlace* )<!-- END REF-->
<!--REF #_command_.WP SET LINK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| objEnlace | Object | &#8594;  | Valor enlace |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP SET LINK.Summary-->**WP SET LINK** aplica una referencia de hipervínculo al *objRango*.<!-- END REF--> Se soportan enlaces a URL, métodos 4D y marcadores. El enlace activa una acción cuando el usuario hace clic en él (o utiliza **Ctrl+clic** en Windows o **Cmd+clic** en macOS si el texto no es de solo lectura para abrir URL).  
  
En *objRango*, pase el objeto 4D Write Pro donde se aplicará el enlace. Puedes pasar:

* un rango, o
* un elemento (tabla / fila / párrafo / cuerpo / encabezado / pie de página / sección / subsección), o
* un documento 4D Write Pro

Por ejemplo, si pasa un encabezado, el contenido completo del encabezado se mostrará como un hipervínculo. Al insertar enlaces en sus documentos, 4D Write Pro aplica las siguientes reglas:

* Si define un enlace a un *objRango* que contiene varios párrafos, se definirán varios enlaces separados.
* Si define un enlace a un *objRango* que ya contiene enlace(s):  
   * todos los enlaces existentes que están completamente incluidos en el *objRango* se eliminan y el nuevo enlace se aplica a *objRango*.  
   * Si un enlace se selecciona parcialmente (se cruza con *objRango*), se reduce para que la parte externa mantenga el enlace anterior y el nuevo enlace se aplique a *objRango*.

En el parámetro *objEnlace*, pase un objeto que describa el hipervínculo. Debe contener solo una de las siguientes propiedades (excepto la propiedad del parámetro que se puede utilizar junto con la propiedad del método):

| **Propiedad** | **Tipo**        | **Descripción**                                                                                                                                                 | **Acción de hipervínculo**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url           | Texto           | Destino para un hipervínculo de tipo URL (url codificado).                                                                                                      | Hace referencia a una dirección web estándar (http o https://*website*, mailto:*abc@xyz.com,* etc.): abre la URL en la aplicación predeterminada (generalmente un navegador)Hace referencia a una ruta de archivo (absoluta o relativa al archivo de estructura 4D). Al hacer referencia a un archivo .4wp o .4w7 (file://*filepath* o *filepath/file.4wp*): carga y reemplaza el documento actual. Al hacer referencia a otros tipos de archivos, abre el archivo en la aplicación predeterminada del sistema para el tipo de archivo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| bookmark      | Texto           | Nombre del marcador                                                                                                                                             | Accede al marcador especificado en el documento actual. (Consulte *Comandos Marcadores*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| method        | Texto           | Nombre del método del proyecto: el método debe existir y se debe permitir con el comando [SET ALLOWED METHODS](../../commands/set-allowed-methods.md).   | Ejecuta el método 4D cuando se hace clic. El método recibe automáticamente dos parámetros en $1 y $2:<br/><table><tbody><tr><td>**Parámetro**</td><td>**Propiedad**</td><td>**Tipo**</td><td>**Descripción**</td></tr><tr><td>$1</td><td></td><td>Texto</td><td>Nombre del área 4D Write Pro</td></tr><tr><td>$2</td><td></td><td>Objeto</td><td></td></tr><tr><td></td><td>método</td><td>Texto</td><td>Nombre del método 4D</td></tr><tr><td></td><td>parámetro</td><td>Texto \| Número</td><td>Parámetro del usuario enviado al método a través de la propiedad del parámetro (opcional, ver abajo)</td></tr><tr><td></td><td>rango</td><td>Objeto</td><td>Rango de *objRango*</td></tr></tbody></table> |
| parámetro     | Texto \| Número | Solo se utiliza con un enlace de tipo *método*, no es obligatorio si el método no requiere un parámetro. Contiene un parámetro adicional para enviar al método. | Recibido en el parámetro $2\. dentro del método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

**Notas:** 

* 4D Write Pro solo acepta URL válidas (codificadas). Los caracteres especiales en los enlaces no están traducidos. Si los caracteres especiales (es decir,% 20 para espacios) son necesarios, debe codificarlos expresamente. Si el enlace no es válido, se genera un error.
* Los enlaces a los métodos 4D se eliminan de los documentos 4D Write Pro cuando se exportan en formato HTML, MIME HTML o .docx.
* Si desea eliminar un enlace de *objRango*, consulte el párrafo *Gestión de URLs*.

#### Ejemplo 1 

Desea agregar un enlace a su sitio web en el área del pie de página de su documento:  

```4d
 var $footer : Object
 $footer:=WP Get footer(WPArea;1)
 WP SET TEXT($footer;"Please visit our website";wk replace)
 WP SET LINK($footer;New object("url";"http://www.4d.com"))
```

#### Ejemplo 2 

Desea crear una tabla de contenido con enlaces utilizando todos los marcadores en su documento:

```4d
 var $i;$n;$p;$memoStart : Integer
 var $range;$link;$toc;$tocRange;$positionInfo;$target : Object
 var $text : Text
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea1;$_bookmarks) //encuentra todos los marcadores
 
 $n:=Size of array($_bookmarks)
 If($n>0)
    $tocRange:=WP Text range(WParea1;wk start text;wk start text) //encuentra el comienzo del texto
    WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range) //agrega un salto de página antes del texto
 
    For($i;1;$n) // Inserta la tabla de contenidos y enlaces
       $range:=WP Bookmark range(WParea1;$_bookmarks{$i})
       $positionInfo:=WP Get position($range)
       $memoStart:=$tocRange.end
       WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)
 
       $target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))
       $link:=New object("bookmark";$_bookmarks{$i})
       WP SET LINK($target;$link)
       WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)
    End for
 End if
```

#### Ejemplo 3 

Desea definir un enlace a un método 4D en cada cadena "4D" en el documento:

```4d
 var $text,$find : Text
 var $p : Integer
 var $range;$link : Object
 
 $text:=WP Get text(wpArea;wk expressions as value) //recupera todo el texto del documento
 
 $find:="4D" //destino para el enlace


 $p:=Position($find;$text) //recorre el texto para encontrar todas las instancias del objetivo
 If($p>0)
    $range:=WP Text range(wpArea;$p;$p+Length($find)) //define la longitud del objetivo
  //create the link object
    $link:=New object("method";"myAlert";"parameter";"4D rocks!") //No se olvide de autorizar con SET ALLOWED METHODS  
 
    WP SET LINK($range;$link)
 End if


```

#### Ver también 

  
[WP Get links](wp-get-links.md)  