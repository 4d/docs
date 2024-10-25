---
id: qr-set-destination
title: QR SET DESTINATION
slug: /commands/qr-set-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DESTINATION.Syntax-->**QR SET DESTINATION** ( *area* ; *tipo* {; *especificos*} )<!-- END REF-->
<!--REF #_command_.QR SET DESTINATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| tipo | Integer | &#8594;  | Tipo de informe |
| especificos | Text, Variable | &#8594;  | Específicos del tipo de salida |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR SET DESTINATION.Summary-->El comando QR SET DESTINATION permite definir el *tipo* de salida del informe rápido en *area*.<!-- END REF-->

En el parámetro *tipo*, pase una de las constantes del tema *QR Destino de salida*. El contenido del parámetro *especificos* depende del valor de *tipo*. La siguiente tabla describe los valores que pueden pasarse en los parámetros *tipo* y *especificos*:

| Constante    | Tipo         | Valor | Comentario                                                       |
| ------------ | ------------ | ----- | ---------------------------------------------------------------- |
| qr HTML file | Entero largo | 5     | *detalles*: ruta de acceso al archivo.                           |
| qr printer   | Entero largo | 1     | *detalles:* "\*" para eliminar las cajas de diálogo de impresión |
| qr text file | Entero largo | 2     | *detalles*: ruta de acceso al archivo.                           |

*qr printer* (1): si pasa una cadena que contiene un asterisco ("\*") en el parámetro *especificos*, no se mostrará una caja de diálogo durante la impresión, los parámetros de impresión actuales se utilizarán automáticamente. Esta configuración es necesaria si desea imprimir el reporte en el servidor.

*qr text file* (2): si pasa una cadena vacía como en el parámetro *especificos*, se muestra una caja de diálogo estándar de guardar archivo. Si pasa una ruta de acceso valida, el informe rápido se guardará en la ubicación indicada.  
Por defecto, el delimitador del campo es el carácter tab (ASCII 9). El delimitador de registro por defecto es el carácter retorno de carro (ASCII 13). Puede cambiar estos caracteres por defecto asignando valores a las variables sistema: FldDelimit y RecDelimit. Si en Windows, FldDelimit es igual a 13, un carácter 10 (salto de de línea) será añadido después del retorno de carro. Tenga en cuenta que estas variables son utilizadas por otros comandos como por ejemplo [IMPORT TEXT](import-text.md). Toda modificación de estas variables repercute en toda la aplicación.

*qr HTML file* (5): se crea un archivo HTML utilizando la plantilla definida por [QR SET HTML TEMPLATE](qr-set-html-template.md). Para mayor información sobre el modo de conversión de los datos, consulte el manual de Diseño.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el valor del destino *tipo* es incorrecto, se genera el error -9852.

#### Ejemplo 

El siguiente código define el archivo texto Midoc.txt como tipo de destino del informe rápido y lo ejecuta: 

```4d
 QR SET DESTINATION(MiArea;qr text file;"MiDoc.txt")
 QR RUN(MiArea)
```

#### Ver también 

[QR GET DESTINATION](qr-get-destination.md)  