---
id: drop-position
title: Drop position
slug: /commands/drop-position
displayed_sidebar: docs
---

<!--REF #_command_.Drop position.Syntax-->**Drop position** {( colNum | posXImagen )} : Integer<!-- END REF-->
<!--REF #_command_.Drop position.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| colNum &#124; posXImagen | Entero largo | &#8592; | Número de columna del list box (-1 si el soltar ocurre más allá de la última columna)o <br/>Posición coordenada X en la imagen |
| Resultado | Integer | &#8592; | Número (array/ list box) o posición (lista jerárquica) o Posición en cadena (texto/combo box) o elemento de destino o -1 si soltar ocurrió más allá del último elemento del array o de la lista |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Drop position.Summary-->El comando Drop position puede utilizarse para descubrir la ubicación, en un objeto de destino “complejo”, donde un objeto ha sido (arrastrado y) soltado.<!-- END REF-->

Generalmente, se utiliza Drop position cuando administra un evento arrastrar y soltar que se produce en un array, un list box, una lista jerárquica, un campo de texto o una imagen o un área 4D Write Pro.

* Si el objeto de destino es un array, el comando devuelve un número de elemento.
* Si el objeto de destino es un list box, el comando devuelve un número de línea. En este caso, el comando también devuelve el número de columna donde se soltó en el parámetro opcional *colNum*.
* Si el objeto de destino es una lista jerárquica, el comando devuelve una posición del elemento.
* Si el objeto de destino es una variable o un campo tipo texto, o un combo box, el comando devuelve una posición de carácter al interior de la cadena.  
En todos los casos, el comando puede devolver -1 si el objeto fuente ha sido soltado más allá del último elemento o del último elemento del objeto de destino.
* Si el objeto de destino es una variable o un campo de tipo imagen, la función devuelve la ubicación horizontal del clic y en el parámetro opcional *posYImagen*, la ubicación vertical del clic. Los valores devueltos se expresan en píxeles y con relación al sistema de coordenadas locales.

Si llama Drop position cuando procesa un evento que no es del tipo arrastrar y soltar en un array, un list box, un combo box, una lista jerárquica, un texto o una imagen, o un área 4D Write Pro, el comando devuelve -1.

**Importante:** para que un objeto de formulario acepte los datos soltados, la propiedad **Soltable** debe estar seleccionada. Igualmente, su método de objeto debe ser activado por el evento On Drag Over y/o On Drop, para procesar estos eventos.

#### Ejemplo 

En el siguiente ejemplo, una lista de sumas debe ser desglosada por mes y por persona. La operación se efectúa arrastrando y soltando entre dos list boxes:

![](../assets/en/commands/pict4091260.en.png)

El método de objeto list box de la derecha (origen) contiene el siguiente código:

```4d
 If(Form event code=On Begin Drag Over) //El evento debe seleccionarse para el list box
    var $tomove : Blob
    var $val : Text
    LISTBOX GET CELL POSITION(*;"LBPaid";$col;$row)
    $val:=PaidCol{$row}
    VARIABLE TO BLOB($val;$tomove)
    APPEND DATA TO PASTEBOARD("mydrag";$tomove) //utilice una llave personalizada
 End if
```

El método de objeto list box de la izquierda (destino) contiene el siguiente código:

```4d
 Case of
 
    :(Form event code=On Drag Over) //El evento debe seleccionarse para el list box
       var $toGet : Blob
       var $rownum : Integer
       $rownum:=Drop position($colnum)
       GET PASTEBOARD DATA("mydrag";$toGet) //obtener datos
       If(Pasteboard data size("mydrag")>0)&($colnum#1)) //Si los datos están en el portapapeles
          $0:=0 //podríamos aceptar el soltar
       Else
          $0:=-1 //Se rechaza el soltar
       End if
 
    :(Form event code=On Drop) //el evento debe seleccionarse para el list box
       var $toGet : Blob
       var $rownum;$val : Integer
       $rownum:=Drop position($colnum)
       GET PASTEBOARD DATA("mydrag";$toGet)
       BLOB TO VARIABLE($toGet;$val) //obtener el valor
       If(Pasteboard data size("mydrag")>0))
          If($colnum=1)
             BEEP
          Else
             Case of //Adición de los valores soltados
                :($colnum=2)
                   John{$rownum}:=John{$rownum}+$val
                :($colnum=3)
                   Mark{$rownum}:=Mark{$rownum}+$val
                :($colnum=4)
                   Peter{$rownum}:=Peter{$rownum}+$val
             End case
             DELETE FROM ARRAY(PaidCol;Find in array(PaidCol;$val)) //Actualizar listbox de origen
          End if
       End if
 End case
```

#### Ver también 

*Arrastrar y soltar*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 608 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


