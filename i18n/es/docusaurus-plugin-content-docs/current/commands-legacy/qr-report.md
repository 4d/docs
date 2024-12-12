---
id: qr-report
title: QR REPORT
slug: /commands/qr-report
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT.Syntax-->**QR REPORT** ( {*tabla* ;} *doc* {; *nomMetodo*}{; *} )<!-- END REF-->
<!--REF #_command_.QR REPORT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a utilizar para el informe o tabla por defecto si se omite |
| doc | Text | &#8594;  | Documento de informe rápido a cargar |
| nomMetodo | Text | &#8594;  | Nombre del método a llamar |
| * | Operador | &#8594;  | Eliminación de las cajas de diálogo de impresión |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR REPORT.Summary-->**QR REPORT** imprime un informe para *tabla*, con ayuda del editor de informes rápidos de 4D.<!-- END REF--> Este editor permite a los usuarios crear sus propios informes. Para mayor información sobre la creación de informes rápidos con la ayuda del editor de informes rápidos, consulte la sección *Informes rápidos* en el *Manual de Diseño* de 4D.

**Notas:**

* El editor no aparece si la *tabla* ha sido declarada “Invisible.”
* Cuando el editor se llama utilizando el comando QR REPORT, las relaciones entre las tablas conservan su estado manual, donde aplique. Este principio permite al desarrollador administrar él mismo este estado utilizando los comandos [SET AUTOMATIC RELATIONS](set-automatic-relations.md) y [SET FIELD RELATION](set-field-relation.md). Sin embargo, tenga en cuenta que las funcionalidades automáticas se desactivan cuando las tablas relacionadas se visualizan en un formulario listado mostrado utilizando [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md) o un subformulario. Ver *Relaciones manuales y automáticas*.
* El editor se llama en una ventana externa y no es posible utilizar el comando [QR ON COMMAND](qr-on-command.md) en este contexto. Sin embargo, puede utilizar el parámetro *nomMetodo* para ejecutar código personalizado cuando un comando de interfaz se activa (ver abajo).

El parámetro *documento* es un documento de informe que fue creado con el editor de informes rápidos y guardado en disco. El documento guarda las especificaciones del informe, no lo registros a imprimir. Si una cadena vacía ("") se pasa en *documento*, **QR REPORT** muestra una caja de diálogo de apertura de archivos, en la cual el usuario puede seleccionar el informe a imprimir.   
Si el parámetro *documento* especifica un documento que no existe (por ejemplo, si pasa [Char](char.md)**(1)** en *documento*), se muestra el editor de informes rápidos.

El parámetro *nomMetodo* designa un método de proyecto 4D que se ejecuta cada vez que un comando del editor de informes rápidos es llamado por la selección de un elemento del menú o hacer clic en un botón. Utilizar este parámetro es equivalente a utilizar [QR ON COMMAND](qr-on-command.md) en el contexto de la ventana del editor de informes rápidos ([QR ON COMMAND](qr-on-command.md) sólo funciona en el contexto de un área incluida). Por ejemplo, se puede utilizar este parámetro para cambiar el juego de caracteres utilizado por el informe rápido. El método *nomMetodo* recibe dos parámetros:  

| **Parámetro** | **Tipo**     | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $1            | Entero largo | Referencia del área                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| $2            | Entero largo | Número del comando seleccionado (entero largo). Puede comparar este valor con las constantes del tema *QR Comandos* (solo son soportados los eventos listados): <table> <thead> <tr> <td>Constante</td> <td>Valor</td> <td>Comentario</td> </tr> </thead> <tbody> <tr> <td>qr cmd generate</td> <td>2008</td> <td>Compatible editor 64 bits (uso del comando [QR RUN](qr-run.md) recomendado)</td> </tr><tr> <td>qr cmd open</td> <td>2001</td> <td></td> </tr><tr> <td>qr cmd page setup</td> <td>2006</td> <td>Compatible editor 64 bits</td> </tr><tr> <td>qr cmd print preview</td> <td>2007</td> <td>Compatible editor 64 bits</td> </tr><tr> <td>qr cmd save</td> <td>2002</td> <td></td> </tr><tr> <td>qr cmd save as</td> <td>2003</td> <td></td> </tr> </tbody> </table> |

**Nota:** si desea compilar su base, debe declarar los parámetros $1 y $2 explícitamente como enteros largos, incluso si no los utiliza.

Si desea ejecutar el comando inicial elegido por el usuario, utilice la siguiente instrucción en el método *nomMetodo*:

```4d
 QR EXECUTE COMMAND($1;$2)
```

Si el parámetro *nomMetodo* es una cadena vacía ( "") o se omite, ningún método se llama y se aplica la operación estándar de **QR REPORT**.

Una vez seleccionado un informe, se muestran las cajas de diálogo de impresión, a menos que se especifique el parámetro *\*.* Si se especifica este parámetro, no se muestran estas cajas de diálogo y se imprime el informe.

Si no se involucar al editor de informes rápidos, la variable sistema OK toma el valor 1 si se imprime un informe; de lo contrario, toma el valor 0 (cero) (por ejemplo, si el usuario hace clic en **Cancelar** en las cajas de diálogo de impresión).

**4D Server:** este comando puede ejecutarse en el servidor 4D Server en el marco de un procedimiento almacenado. En este contexto:

* Asegúrese de que no aparezca ninguna caja de diálogo en el equipo servidor (excepto para un requerimiento especifico). Para hacer esto, es necesario llamar al comando con el parámetro *\**.
* La sintaxis que hace aparecer el editor Quick Report no funciona con 4D Server; en este caso, la variable sistema OK toma el valor 0.
* En el caso de un problema relacionado con la impresora (sin papel, impresora desconectada, etc.), no se genera un error.

#### Ejemplo 1 

El siguiente ejemplo permite al usuario efectuar una búsqueda en la tabla \[Personas\], y luego imprime automáticamente el informe “Lista detallada”: 

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];"Detailed Listing";*)
 End if
```

#### Ejemplo 2 

El siguiente ejemplo permite al usuario efectuar una búsqueda en la tabla \[Personas\], y luego seleccionar el informe a imprimir:

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];"")
 End if
```

#### Ejemplo 3 

El siguiente ejemplo permite al usuario efectuar una búsqueda en la tabla \[Personas\], y luego muestra el editor de informes rápidos de manera que el usuario pueda diseña, guardar, cargar e imprimir informes: 

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];Char(1))
 End if
```

#### Ejemplo 4 

Consulte el ejemplo del comando [SET FIELD RELATION](set-field-relation.md "SET FIELD RELATION"). 

#### Ejemplo 5 

Usted desea convertir el conjunto de caracteres utilizado en un informe rápido llamado utilizando **QR REPORT** en Mac Roman:

```4d
 QR REPORT([MyTable];Char(1);"myCallbackMeth")
```

El método myCallbackMeth convierte el informe cuando se genera:

```4d
 var $1;$2 : Integer
 If($2=qr cmd generate) //si generamos un informe
    var $myblob : Blob
    var $path;$text : Text
    var $type : Integer
    QR EXECUTE COMMAND($1;$2) //ejecución del comando
    QR GET DESTINATION($1;$type;$path) //recuperación del destino
    If(($type=qr HTML file)|($type=qr text file))
       DOCUMENT TO BLOB($path;$myblob)
  //conversión del texto utilizando UTF-8
       $text:=Convert to text($myblob;"UTF-8")
  //uso del conjunto MacRoman
       CONVERT FROM TEXT($text;"MacRoman";$myblob)
  //Devuelve el informe convertido
       BLOB TO DOCUMENT($path;$myblob)
    End if
 Else //de lo contrario, ejecución del comando
    QR EXECUTE COMMAND($1;$2)
 End if
```

#### Ver también 

[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  