---
id: listbox-set-footer-calculation
title: LISTBOX SET FOOTER CALCULATION
slug: /commands/listbox-set-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Syntax-->**LISTBOX SET FOOTER CALCULATION** ( {* ;} *objeto* ; *calculo* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| calculo | Integer | &#8594;  | Cálculo para el área de pie |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Summary-->El comando **LISTBOX SET FOOTER CALCULATION** permite definir el cálculo automático asociado al área de pie del list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
El parámetro *objeto* puede designar:

* la variable o el nombre de un área de pie de página. En este caso, el comando aplica a esta área.
* la variable o el nombre de una columna de list box. En este caso, el comando aplica al área de pie de esta columna.
* la variable o el nombre de un list box. En este caso, el comando aplica a las áreas de pie del listbox.

En el parámetro *calculo*, pase una de las siguientes constantes del tema *List box cálculo pie* , con el fin de definir el cálculo a efectuar:  
  
| Constante                    | Tipo         | Valor | Comentario                                                                                                                                                |
| ---------------------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Listbox footer std deviation | Entero largo | 7     | Utilizable con las columnas de tipo numérico u hora (list boxes de tipo array únicamente)<br/> Tipo de resultado por defecto: Real                |
| lk footer average            | Entero largo | 6     | Utilizable con las columnas de tipo numérico, hora<br/> Tipo de resultado por defecto:Real                                                        |
| lk footer count              | Entero largo | 5     | Utilizable con las columnas de tipo numérico, texto, fecha, hora, booleano, imagen<br/> Tipo de resultado por defecto: Entero largo               |
| lk footer custom             | Entero largo | 1     | Ningún cálculo es efectuado por 4D. La variable del pie debe calcularse por programación. Típo por defecto del resultado del cálculo: tipo de la variable |
| lk footer max                | Entero largo | 3     | Utilizable con las columnas de tipo numérico, fecha, hora, booleano<br/>Tipo de resultado por defecto: tipo del array o campo de la columna       |
| lk footer min                | Entero largo | 2     | Utilizable con las columnas de tipo numérico, fecha, hora, booleano<br/>Tipo por defecto del resultado: tipo del array o campo de la columna      |
| lk footer sum                | Entero largo | 4     | Utilizable con las columnas de tipo numérico, hora, booleano<br/>Tipo de resultado por defecto: tipo del array o campo de la columna              |
| lk footer sum squares        | Entero largo | 9     | Utilizable con las columnas de tipo numérico, hora (listbox de tipo array únicamente)<br/>Tipo por defecto del resultado: Real                    |
| lk footer variance           | Entero largo | 8     | Utilizable con las columnas de tipo numérico, hora (listbox de tipo array únicamente)<br/>Tipo por defecto del resultado: Real                    |
  
  
Note que los cálculos predefinidos tiene en cuenta todos los valores de la columna del list box, incluyendo los valores de las posibles líneas ocultas. Si desea restringir un cálculo a las líneas visibles, debe utilizar la constante lk footer custom y efectuar un cálculo personalizado.   
  
Si el tipo de datos de la columna o de al menos una columna del list box (si objeto designa un list box) no es compatible con el *calculo* definido, el pie no se modifica y se genera el error 18\. Si una columna contiene una fórmula (list box de tipo selección), se genera el error 10.

**Nota:** las variables del área pie se definen automáticamente (cuando no se definen por programación) en función del tipo de cálculo definido en la Lista de propiedades (*Propiedades específicas de los pies de list box*). Si el tipo de la variable no corresponde al resultado esperado por el comando **LISTBOX SET FOOTER CALCULATION**, se genera un error. Por ejemplo, para una columna que muestra fechas, si el pie hace un cálculo 'Maximum', la variable *pie* será definida en fecha. Si ejecuta la instrucción **LISTBOX SET FOOTER CALCULATION** (pie;lk footer count), se genera un error por el tipo del resultado esperado (entero largo) difiere del tipo de la variable.

#### Ver también 

[LISTBOX Get footer calculation](listbox-get-footer-calculation.md)  