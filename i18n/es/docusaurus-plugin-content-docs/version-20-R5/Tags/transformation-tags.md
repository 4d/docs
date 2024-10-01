---
id: transformation-tags
title: Etiquetas de transformación
---

4D ofrece un conjunto de etiquetas de transformación que le permiten insertar referencias a las variables o a las expresiones 4D, o efectuar diferentes tipos de procesamiento en un texto fuente, llamado "plantilla". Estas etiquetas se interpretan durante la ejecución del texto fuente y generan un texto de salida.

Este principio es utilizado en particular por el servidor web 4D para construir [páginas de plantillas web](WebServer/templates.md).

Por lo general, estas etiquetas deben insertarse como comentarios de tipo HTML (`<!--#Tag Contents-->`), pero para algunas de ellas existe una [sintaxis alternativa compatible con xml](#alternative-syntax-for-4dtext-4dhtml-4deval).

Es posible mezclar varios tipos de etiquetas. Por ejemplo, la siguiente estructura HTML es totalmente factible:

```html
<HTML>
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (mtvar=2)-->
   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (Loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (Subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>   (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
```

## Principios de uso de las etiquetas

### Parsing

El análisis del contenido de una fuente _plantilla_ se hace en dos contextos:

- Utilizando el comando `PROCESS 4D TAGS`; este comando acepta una _plantilla_ como entrada, así como los parámetros opcionales y devuelve un texto resultante del procesamiento.

- Utilizando el servidor HTTP integrado de 4D: [páginas plantilla](WebServer/templates.md) enviadas mediante los comandos `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (BLOB de tipo texto/html), `WEB SEND TEXT`, o llamadas utilizando URLs. En este último caso, por razones de optimización, las páginas con sufijo ".htm" y ".html" NO se analizan. Para analizar páginas HTML en este caso, debe añadir el sufijo ".shtm" o ".shtml" (por ejemplo, <http://www.server.com/dir/page.shtm>).

### Tratamiento recursivo

Las etiquetas 4D se interpretan de manera recursiva: 4D siempre intenta reinterpretar el resultado de una transformación y, si se ha producido una nueva transformación, se realiza una interpretación adicional, y así sucesivamente hasta que el producto obtenido ya no requiera ninguna otra transformación. Por ejemplo, dada la siguiente instrucción:

```html
<!--#4DHTML [Mail]Letter_type-->
```

Si el propio campo de texto `[Mail]Letter_type` contiene una etiqueta, por ejemplo `<!--#4DSCRIPT/m_Gender-->`, esta etiqueta se evaluará recursivamente tras la interpretación de la etiqueta 4DHTML.

Este poderoso principio satisface la mayoría de las necesidades relacionadas con la transformación de textos. Tenga en cuenta, sin embargo, que en algunos casos esto también puede permitir que se inserte código malicioso en el contexto web, [lo que puede evitarse](WebServer/templates.md#prevention-of-malicious-code-insertion).

### Identificadores con tokens

Para asegurar la correcta evaluación de las expresiones procesadas a través de las etiquetas, independientemente del lenguaje o de la versión de 4D, se recomienda utilizar la sintaxis tokenizada para los elementos cuyo nombre puede variar a lo largo de las versiones (comandos, tablas, campos, constantes). Por ejemplo, para insertar el comando `Current time`, ingrese `Current time:C178`.

### Utilizando el "." como separador decimal

4D utiliza siempre el punto (.) como separador decimal al evaluar una expresión numérica utilizando una etiqueta 4D `4DTEXT`, `4DHTML` y `4DEVAL`. Los parámetros regionales se ignoran. Esta funcionalidad facilita el mantenimiento del código y la compatibilidad entre los lenguajes y las versiones de 4D.

## 4DBASE

#### Sintaxis: `<!--#4DBASE folderPath-->`

La etiqueta `<!--#4DBASE -->` designa el directorio de trabajo que utilizará la etiqueta `<!--#4DINCLUDE-->`.

Cuando se llama en una página Web, la etiqueta `<!--#4DBASE -->` modifica todas las llamadas posteriores a `<!--#4DINCLUDE-->` en esta página, hasta la siguiente `<!--........-->`, si la hay. Si la carpeta`<!--#4DBASE -->` se modifica desde dentro de un archivo incluido, recupera su valor original del archivo padre.

El parámetro _folderPath_ debe contener un nombre de ruta relativo a la página actual y debe terminar con una barra (`/`). La carpeta designada debe estar ubicada dentro de la carpeta Web.

Pase la palabra clave "WEBFOLDER" para restablecer la ruta por defecto (relativa a la página).

El siguiente código, que debe especificar una ruta relativa para cada llamada:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage1.html-->
<!--#4DINCLUDE folder/subpage2.html-->
<!--#4DINCLUDE folder/subpage3.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

... es equivalente a:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE folder/-->
<!--#4DINCLUDE subpage1.html-->
<!--#4DINCLUDE subpage2.html-->
<!--#4DINCLUDE subpage3.html-->
<!--#4DBASE ../folder/-->
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE WEBFOLDER-->
```

Por ejemplo, para definir un directorio para la página de inicio:

```html
/* Index.html */
<!--#4DIF LangFR=True-->
    <!--#4DBASE FR/-->
<!--#4DELSE-->
    <!--#4DBASE US/-->
<!--#4DENDIF-->
<!--#4DINCLUDE head.html-->
<!--#4DINCLUDE body.html-->
<!--#4DINCLUDE footer.html-->
```

En el archivo "head.html", la carpeta actual es modificada por`<!--#4DBASE -->`, sin que esto modifique su valor en "Index.html":

```html
/* Head.htm */
/* el directorio de trabajo aquí es relativo al archivo incluido (FR/ o US/) */
<!--#4DBASE Styles/-->
<!--#4DINCLUDE main.css-->
<!--#4DINCLUDE product.css-->
<!--#4DBASE Scripts/-->
<!--#4DINCLUDE main.js-->
<!--#4DINCLUDE product.js-->
```

## 4DCODE

#### Sintaxis: `<!--#4DCODE codeLines-->`

La etiqueta `4DCODE` permite insertar un bloque de código 4D de varias líneas en una plantilla.

Cuando una secuencia `<!--#4DCODE` es detectada seguida por un espacio, un CR o un carácter LF, 4D interpreta todas las líneas de código hasta la siguiente secuencia `-->`. El bloque de código en sí puede contener retornos de carro, saltos de línea o ambos; será interpretado secuencialmente por 4D.

Por ejemplo, puede escribir en una plantilla:

```html
<!--#4DCODE
//Inicialización PARÁMETROS
C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
//...su código aquí
If(OB Is defined:C1231($graphParameters;"graphType"))
    $graphType:=OB GET:C1224($graphParameters;"graphType")
    If($graphType=7)
        $nbSeries:=1
        If($nbValues>8)
            DELETE FROM ARRAY:C228 ($yValuesArrPtr{1}->;9;100000)
            $nbValues:=8
        End if
    End if
End if
-->
```

Aquí están las características de la etiqueta 4DCODE:

- El comando `TRACE` está soportado y activa el depurador 4D, permitiéndole así depurar el código de su plantilla.
- Todo error mostrará el diálogo de error estándar que permite al usuario detener la ejecución del código o entrar en el modo depuración.
- El texto entre `<!--#4DCODE` and `-->` se divide en líneas que aceptan toda convención de fin de línea (cr, lf, o crlf).
- El texto se tokeniza en el contexto de la base que llamó `PROCESS 4D TAGS`. Esto es importante para el reconocimiento de los métodos de proyecto, por ejemplo. No se tiene en cuenta la propiedad del método [Disponible a través de etiquetas y URL 4D (4DACTION ...)](WebServer/allowProject.md).
- Incluso si el texto siempre utiliza Inglés-US, se recomienda utilizar la sintaxis token (:Cxxxx) para los nombres de comandos y de constantes para proteger contra eventuales problemas debido a los comandos o a las constantes que se están renombrando de una versión de 4D a otra.

> El hecho de que las etiquetas 4DCODE puedan llamar a cualquiera de los comandos del lenguaje 4D o a los métodos del proyecto podría considerarse un problema de seguridad, especialmente cuando la base de datos está disponible a través de HTTP. Sin embargo, como ejecuta código del lado del servidor llamado desde sus propios archivos de plantilla, la etiqueta en sí no representa un problema de seguridad. En este contexto, como para todo servidor web, la seguridad se maneja principalmente a nivel de los accesos remotos a los archivos del servidor.

## 4DEACH y 4DENDEACH

#### Sintaxis: `<!--#4DEACH variable in expression-->` `<!--#4DENDEACH-->`

El comentario `<!--#4DEACH-->` permite iterar un elemento especificado sobre todos los valores de _expression_. El elemento se define como una _variable_ cuyo tipo depende del tipo de _expression_.

El comentario `<!--#4DEACH-->` puede iterar a través de tres tipos de expresiones:

- [colecciones](#--4deach-item-in-collection--): bucle a través de cada elemento de la colección,
- [selecciones de entidades](#--4deach-entity-in-entityselection--): bucle a través de cada entidad,
- [objetos](#--4deach-property-in-object--): bucle a través de cada propiedad del objeto.

El número de iteraciones se evalúa al inicio y no cambiará durante el proceso. La adición o eliminación de elementos durante el bucle no suele ser recomendable, ya que puede resultar en redundancia o perdidas de iteraciones.

### `<!--#4DEACH item in collection-->`

Esta sintaxis iterará en cada _elemento_ de la _colección_. La porción de código entre `<!--#4DEACH -->` y `<!--#4DENDEACH-->` se repite para cada elemento de la colección.

El parámetro _item_ es una variable del mismo tipo que los elementos de la colección.

La colección debe contener sólo **elementos del mismo tipo**, de lo contrario se devuelve un error en cuanto se asigna a la variable _item_ el primer tipo de valor no coincidente.

El número de bucles se basa en el número de elementos de la colección. En cada iteración, la variable _item_ se rellena automáticamente con el elemento coincidente de la colección. Hay que tener en cuenta los siguientes puntos:

- Si la variable _item_ es de tipo objeto o de tipo colección (es decir, si _expression_ es una colección de objetos o de colecciones), la modificación de esta variable modificará automáticamente el elemento coincidente de la colección (porque los objetos y las colecciones comparten las mismas referencias). Si la variable es de tipo escalar, sólo se modificará la variable.
- La variable _item_ obtiene el mismo tipo que el primer elemento de la colección. Si algún elemento de la colección no es del mismo tipo que la variable, se genera un error y el bucle se detiene.
- Si la colección contiene elementos con un valor Null, se genera un error si el tipo de la variable _item_ no admite valores Null (como las variables entero largo).

#### Ejemplo con una colección de valores escalares

_getNames_ devuelve una colección de cadenas. El método ha sido declarado como "[disponible a través de etiquetas 4D y URLs](WebServer/allowProject.md)".

```html
 <table class="table">    

        <tr><th>Name</th></tr>

          <!--#4DEACH $name in getNames-->
        <tr>
            <td><!--#4DTEXT $name--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Ejemplo con una colección de objetos

_getSalesPersons_ devuelve una colección de objetos.

```html
    <table class="table">    
         <!--#4DCODE
            $salePersons:=getSalesPersons
          -->          
       <tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr>

          <!--#4DEACH $salesPerson in $salePersons-->
        <tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

### `<!--#4DEACH entity in entitySelection-->`

Esta sintaxis itera en cada _entidad_ de la _entitySelection_. La parte de código situada entre `<!--#4DEACH -->` y `<!--#4DENDEACH-->` se repite para cada entidad de la selección de entidades.

El parámetro _entity_ es una variable objeto de la clase de selección de entidades.

El número de bucles se basa en el número de entidades presentes en la selección de entidades. En cada iteración, la variable del objeto _entity_ se llena automáticamente con la entidad coincidente de la selección de entidades.

#### Ejemplo con una tabla html

```html
    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr>

          <!--#4DEACH $customer in ds.Customers.all()-->
        <tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Ejemplo con `PROCESS 4D TAGS`

```4d
var customers : cs.CustomersSelection
var $input; $output : Text

customers:=ds.Customers.all()
$input:="<!--#4DEACH $cust in customers-->"
$input:=$input+"<!--#4DTEXT $cust.name -->"+Char(Carriage return)
$input:=$input+"<!--#4DENDEACH-->"
PROCESS 4D TAGS($input; $output)
TEXT TO DOCUMENT("customers.txt"; $output)
```

### `<!--#4DEACH property in object-->`

Esta sintaxis iterará en cada _propiedad_ del _objeto_. La parte de código situada entre `<!--#4DEACH -->` y `<!--#4DENDEACH-->` se repite para cada propiedad del objeto.

El parámetro _property_ es una variable texto que se llena automáticamente con el nombre de la propiedad actualmente procesada.

Las propiedades del objeto se procesan según su orden de creación. Durante el bucle, se pueden añadir o eliminar propiedades en el objeto, sin modificar el número de bucles que quedarán en función del número original de propiedades del objeto.

#### Ejemplo con las propiedades de un objeto

_getGamers_ es un método proyecto que devuelve un objeto como ("María"; 10; "Ana"; 20; "Juan"; 40) para calcular la puntuación de los jugadores.

```html
    <table class="table">    
          <!--#4DCODE
           $gamers:=getGamers
          -->          

        <tr><th>Gamers</th><th>Scores</th></tr>

          <!--#4DEACH $key in $gamers-->
        <tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

## 4DEVAL

#### Sintaxis: `<!--#4DEVAL expression-->`

#### Sintaxis alternativa: `$4DEVAL(expression)`

La etiqueta `4DEVAL` permite evaluar una variable o expresión 4D. Al igual que la etiqueta [`4DHTML`](#4dhtml), `4DEVAL` no escapa caracteres HTML cuando devuelve texto. Sin embargo, a diferencia de `4DHTML` o [`4DTEXT`](#4dtext), `4DEVAL` permite ejecutar cualquier instrucción 4D válida, incluyendo asignaciones y expresiones que no devuelven ningún valor.

Por ejemplo, puede ejecutar:

```
 $input:="<!--#4DEVAL a:=42-->" //asignación
 $input:=$input+"<!--#4DEVAL a+1-->" //cálculo
 PROCESO 4D TAGS($input;$output)
  //$output = "43"
```

En caso de error durante la interpretación, el texto insertado tendrá la forma: `<!--#4DEVAL expr-->: ## error # código de error`.

> Por razones de seguridad, se recomienda utilizar la etiqueta [`4DTEXT`](#4dtext) al procesar datos introducidos desde fuera de la aplicación, para evitar la [inserción de código malicioso](#prevention-of-malicious-code-insertion).

## 4DHTML

#### Sintaxis: `<!--#4DHTML expression-->`

#### Sintaxis alternativa: `$4DHTML(expression)`

Al igual que la etiqueta `4DTEXT`, esta etiqueta le permite evaluar una variable o expresión 4D que devuelve un valor, e insertarla como una expresión HTML. A diferencia de la etiqueta `4DTEXT`, esta etiqueta no escapa a los caracteres especiales de HTML (por ejemplo, ">").

Por ejemplo, aquí están los resultados del procesamiento de la variable de texto 4D myvar con las etiquetas disponibles:

| Valor myvar    | Etiquetas              | Result                      |
| -------------- | ---------------------- | --------------------------- |
| `myvar:="<B>"` | `<!--#4DTEXT myvar-->` | `&amp;lt;B&amp;gt;` |
| `myvar:="<B>"` | `<!--#4DHTML myvar-->` | `<B>`                       |

En caso de error de interpretación, el texto insertado será `<!--#4DHTML myvar-->: ## error # código de error`.

> Por razones de seguridad, se recomienda utilizar la etiqueta [`4DTEXT`](#4dtext) al procesar datos introducidos desde fuera de la aplicación, para evitar la [inserción de código malicioso](#prevention-of-malicious-code-insertion).

## 4DIF, 4DELSE, 4DELSEIF y 4DENDIF

#### Sintaxis: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

Utilizado con los comentarios `<!--#4DELSEIF-->` (opcional), `<!--#4DELSE-->` (opcional) y `<!--#4DENDIF-->`, el comentario `<!--#4DIF expression-->` ofrece la posibilidad de ejecutar porciones de código condicionalmente.

El parámetro _expression_ puede contener toda expresión 4D válida que devuelva un valor booleano. Debe indicarse entre paréntesis y cumplir con las reglas de sintaxis de 4D.

`<!--#4DIF expression-->` ... Los bloques `<!--#4DENDIF-->` pueden anidarse en varios niveles. Como en 4D, cada `<!--#4DIF expression-->` debe coincidir con un `<!--#4DENDIF-->`.

En caso de error de interpretación, se inserta el texto "`<!--#4DIF expression-->`: se esperaba una expresión booleana" se inserta en lugar del contenido situado entre `<!--#4DIF -->` y `<!--#4DENDIF-->`. Asimismo, si no hay tantos `<!--#4DENDIF-->` como `<!--#4DIF -->`, se inserta el texto "`<!--#4DIF expression-->`: 4DENDIF expected" en lugar del contenido situado entre `<!--#4DIF -->` y `<!--#4DENDIF-->`.

Utilizando la etiqueta `<!--#4DELSEIF-->`, puede probar un número ilimitado de condiciones. Sólo se ejecuta el código que sigue a la primera condición evaluada como `True`. Si no se cumple ninguna condición, no se ejecuta ninguna instrucción (si no existe `<!--#4DELSE-->` final).
Puede utilizar una etiqueta `<!--#4DELSE-->` después de la última `<!--#4DELSEIF-->`. Si todas las condiciones son false, se ejecutan las instrucciones que siguen a `<!--#4DELSE-->`.

Los dos códigos siguientes son equivalentes.

Código utilizando `4DELSE` solamente:

```html
<!--#4DIF Condition1-->
  /* Condition1 es true*/
<!--#4DELSE-->
    <!--#4DIF Condition2-->
        /* Condition2 es true*/
    <!--#4DELSE-->
        <!--#4DIF Condition3-->
            /* Condition3 es true */
        <!--#4DELSE-->
            /*Ninguna de las condiciones es true*/
        <!--#4DENDIF-->
    <!--#4DENDIF-->
<!--#4DENDIF-->
```

Código similar utilizando la etiqueta `4DELSEIF`:

```
<!--#4DIF Condition1-->
     /* Condition1 es true*/
<!--#4DELSEIF Condition2-->
     /* Condition2 es true*/
<!--#4DELSEIF Condition3-->
    /* Condition3 es true */
<!--#4DELSE-->
    /* Ninguna de las condiciones es true*/
<!--#4DENDIF-->
```

Este ejemplo de código insertado en una página HTML estática muestra una etiqueta diferente según el resultado de la expresión `vname#""`:

```html
<BODY>
...
<!--#4DIF (vname#"")-->
Names starting with <!--#4DTEXT vname-->.
<!--#4DELSE-->
No name has been found.
<!--#4DENDIF-->
...
</BODY>
```

Este ejemplo inserta diferentes páginas dependiendo del usuario que esté conectado:

```html
<!--#4DIF LoggedIn=False-->
    <!--#4DINCLUDE Login.htm -->
<!--#4DELSEIF User="Admin" -->
    <!--#4DINCLUDE AdminPanel.htm -->
<!--#4DELSEIF User="Manager" -->
    <!--#4DINCLUDE SalesDashboard.htm -->
<!--#4DELSE-->
    <!--#4DINCLUDE ItemList.htm -->
<!--#4DENDIF-->
```

## 4DINCLUDE

#### Sintaxis: `<!--#4DINCLUDE path-->`

Esta etiqueta está diseñada principalmente para incluir una página HTML (indicada por el parámetro _path_) en otra página HTML. Por defecto, sólo se incluye el cuerpo de la página HTML especificada, es decir, el contenido que se encuentra dentro de las etiquetas `<body> </body>` (las etiquetas en sí no se incluyen). Esto le permite evitar conflictos relacionados con las metaetiquetas presentes en los encabezados.

Sin embargo, si la página HTML especificada no contiene etiquetas `<body>` y `</body>`, se incluye toda la página. Depende de usted verificar la consistencia de las meta-etiquetas.

El comentario `<!--#4DINCLUDE -->` es muy útil para pruebas (`<!--#4DIF-->`) o bucles (`<!--#4DLOOP-->`). Es muy conveniente incluir banners de acuerdo a un criterio o de forma aleatoria.
Al incluir, independientemente de la extensión del nombre del archivo, 4D analiza la página llamada y luego inserta el contenido (modificado o no) en la página que origina la llamada `4DINCLUDE`.

Una página incluida con el comentario `<!--#4DINCLUDE -->` se carga en la caché del servidor Web del mismo modo que las páginas llamadas a través de una URL o enviadas con el comando `WEB SEND FILE`.

En _path_, coloque la ruta que va al documento a incluir. Atención: en el caso de una llamada a `4DINCLUDE`, la ruta es relativa al documento analizado, es decir, al documento "padre". Utilice la barra oblicua (/) como separador de carpetas y los dos puntos (..) para subir un nivel (sintaxis HTML). Cuando utiliza la etiqueta `4DINCLUDE` con el comando `PROCESS 4D TAGS`, la carpeta por defecto es la carpeta del proyecto.

> Puede modificar la carpeta por defecto utilizada por la etiqueta `4DINCLUDE` en la página actual, utilizando la etiqueta `<!--#4DBASE -->` (ver más adelante).

El número de `<!--#4DINCLUDE path-->` dentro de una página es ilimitado. Sin embargo, las llamadas `<!--#4DINCLUDE path-->` sólo pueden hacerse a un nivel. Esto significa que, por ejemplo, no puede insertar `<!--#4DINCLUDE mydoc3.html-->` en el cuerpo de la página _mydoc2.html_, que es llamado por `<!--#4DINCLUDE mydoc2-->` insertado en _mydoc1.html_. Además, 4D verifica que las inclusiones no son recursivas.

En caso de error, el texto insertado es "`<!--#4DINCLUDE path-->` :El documento no puede abrirse".

Ejemplos:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

## 4DLOOP y 4DENDLOOP

#### Sintaxis: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

Este comentario permite la repetición de una porción de código siempre que se cumpla la condición. La parte está delimitada por `<!--#4DLOOP-->` y `<!--#4DENDLOOP-->`.

`<!--#4DLOOP condition-->` ... Los bloques `<!--#4DENDLOOP-->` pueden anidarse. Como en 4D, cada `<!--#4DLOOP condition-->` debe coincidir con un `<!--#4DENDLOOP-->`.

Hay cinco tipos de condiciones:

### `<!--#4DLOOP [table]-->`

Esta sintaxis hace un bucle para cada registro de la tabla selección actual en el proceso actual. La parte de código situada entre los dos comentarios se repite para cada registro de selección actual.

> Cuando se utiliza la etiqueta `4DLOOP` con una tabla, los registros se cargan en modo "Sólo lectura".

El código siguiente:

```html
<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
```

... podría expresarse en lenguaje 4D de la siguiente manera:

```4d
 FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
    NEXT RECORD([People])
 End while
```

### `<!--#4DLOOP array-->`

Esta sintaxis hace un bucle para cada elemento del array. El elemento actual del array se incrementa cuando se repite cada porción de código.

> Esta sintaxis no se puede utilizar con arrays de dos dimensiones. En este caso, es mejor combinar un método con bucles anidados.

El siguiente ejemplo de código:

```html
<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
```

... podría expresarse en lenguaje 4D de la siguiente manera:

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

Esta sintaxis hace un bucle mientras el método devuelva `True`. El método toma un tipo de parámetro Long Integer. Primero se llama con el valor 0 para permitir una etapa de inicialización (si es necesario); luego se llama con los valores 1, luego 2, luego 3 y así sucesivamente, siempre que devuelva `True`.

Por razones de seguridad, dentro de un proceso Web, el método base `On Web Authentication` puede ser llamado una vez justo antes de la etapa de inicialización (ejecución del método con 0 como parámetro). Si la autenticación es correcta, se procederá a la etapa de inicialización.

`C_BOOLEAN($0)` y `C_LONGINT($1)` DEBE ser declarado dentro del método para propósitos de compilación.

El siguiente ejemplo de código:

```html
<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/>
<!--#4DENDLOOP-->
```

... podría expresarse en lenguaje 4D de la siguiente manera:

```4d
 If(AuthenticationWebOK)
    If(my_method(0))
       $counter:=1
       While(my_method($counter))
          ...
          $counter:=$counter+1
       End while
    End if
 End if
```

El método `my_method` puede ser el siguiente:

```4d
 C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) `Initialisation
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False `Stops the loop
    End if
 End if
```

### `<!--#4DLOOP expression-->`

Con esta sintaxis, la etiqueta `4DLOOP` hace un bucle mientras _expression_ devuelva `True`. La expresión puede ser cualquier expresión booleana válida y debe contener una parte variable a evaluar en cada bucle para evitar bucles infinitos.

Por ejemplo, el siguiente código:

```html
<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
```

...produce el siguiente resultado:

```

0

1
2
3
```

### `<!--#4DLOOP pointerArray-->`

En este caso, la etiqueta `4DLOOP` funciona como lo hace con un array: hace un bucle por cada elemento del array referenciado por el puntero. El elemento actual del array se incrementa cada vez que se repite la porción de código.

Esta sintaxis es útil cuando se pasa un puntero array como parámetro al comando `PROCESS 4D TAGS`.

Ejemplo:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}--> "
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
```

En caso de error de interpretación, se inserta el texto "`<!--#4DLOOP expression-->`: descripción" en lugar del contenido situado entre `<!--#4DLOOP -->` y `<!--#4DENDLOOP-->`.

Se pueden mostrar los siguientes mensajes:

- Tipo de expresión inesperado (error estándar);
- Nombre de tabla incorrecto (error en el nombre de la tabla);
- Se esperaba un array (la variable no es un array o es un array de dos dimensiones);
- El método no existe;
- Error de sintaxis (cuando el método se está ejecutando);
- Error de acceso (no tiene los privilegios de acceso adecuados para acceder a la tabla o al método).
- 4DENDLOOP esperado (el número `<!--#4DENDLOOP-->` no coincide con el `<!--#4DLOOP -->`).

## 4DSCRIPT/

#### Sintaxis: `<!--#4DSCRIPT/MethodName/MyParam-->`

La etiqueta `4DSCRIPT` permite ejecutar métodos 4D al procesar la plantilla. La presencia de la etiqueta `<!--#4DSCRIPT/MyMethod/MyParam-->` como comentario HTML lanza la ejecución del método `MyMethod` con el parámetro `Param` como cadena en `$1`.

> Si se llama a la etiqueta en el contexto de un proceso Web, cuando se carga la página, 4D llama al método base `On Web Authentication` (si existe). Si devuelve True, 4D ejecuta el método.

El método debe devolver texto en `$0`. Si la cadena comienza con el caracter de código 1, se considera HTML (el mismo principio se aplica a la etiqueta `4DHTML`).

Por ejemplo, supongamos que inserta el siguiente comentario `"Hoy es <!--#4DSCRIPT/MYMETH/MYPARAM-->"` en una plantilla de página Web. Al cargar la página, 4D llama al método base `On Web Authentication`, luego llama al método `MYMETH` y pasa la cadena "/MYPARAM" como parámetro `$1`. El método devuelve texto en $0 (por ejemplo "31/12/21"); la expresión "`Hoy es <!--#4DSCRIPT/MYMETH/MYPARAM-->`" se convierte por tanto en "Hoy es 31/12/21".

El método `MYMETH` es el siguiente:

```4d
  //MYMETH
 C_TEXT($0;$1) //Estos parámetros deben declararse siempre
 $0:=String(Current date)
```

> Un método llamado por `4DSCRIPT` no debe llamar a elementos de la interfaz (`DIALOG`, `ALERT`, etc.).

Como 4D ejecuta los métodos en su orden de aparición, es absolutamente posible llamar a un método que defina el valor de muchas variables a las que se hace referencia más adelante en el documento, sea cual sea el modo que esté utilizando. Puede insertar tantos comentarios `<!--#4DSCRIPT...-->` como desee en una plantilla.

## 4DTEXT

#### Sintaxis: `<!--#4DTEXT expression-->`

#### Sintaxis alternativa: `$4DTEXT(expression)`

La etiqueta `<!--#4DTEXT expression-->` permite insertar una referencia a una variable 4D o a una expresión que devuelva un valor. Por ejemplo, si se escribe (en una página HTML):

```html
<P>Bienvenido a <!--#4DTEXT vtSiteName-->!</P>
```

El valor de la variable 4D `vtSiteName` se insertará en la página HTML cuando se envíe. Este valor se inserta como texto simple, los caracteres HTML especiales como ">" se escapan automáticamente.

También puede insertar expresiones 4D. Por ejemplo, puede insertar directamente el contenido de un campo (`<!--#4DTEXT [tableName]fieldName-->`), un elemento de array (`<!--#4DTEXT tabarr{1}-->`) o un método que devuelva un valor (`<!--#4DTEXT mymethod-->`). La conversión de las expresiones sigue las mismas reglas que las de las variables. Además, la expresión debe cumplir con las reglas de sintaxis 4D.

> Por razones de seguridad, se recomienda utilizar esta etiqueta cuando se procesen datos introducidos desde fuera de la aplicación, con el fin de evitar la [inserción de código malicioso](#prevention-of-malicious-code-insertion).

En caso de error de evaluación, el texto insertado aparecerá como `<!--#4DTEXT myvar-->: ## error # código de error`.

- Debe utilizar las variables proceso.
- Puede mostrar el contenido de un campo imagen. Sin embargo, no es posible mostrar el contenido de un elemento del array de imágenes.
- Es posible mostrar el contenido de un campo objeto mediante una fórmula 4D. Por ejemplo, puede escribir `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`.
- Normalmente se trabaja con variables de tipo texto. Sin embargo, también se pueden utilizar las variables BLOB. Basta con generar BLOBs en modo `Texto sin longitud`.

## Sintaxis alternativa para 4DTEXT, 4DHTML, 4DEVAL

Varias etiquetas de transformación 4D existentes pueden expresarse utilizando una sintaxis basada en el símbolo $:

#### $4dtag (expression)

puede utilizarse en lugar de

#### `<!--#4dtag expression-->`

Esta sintaxis alternativa sólo está disponible para las etiquetas utilizadas para devolver los valores procesados:

- [4DTEXT](#4dtext)
- [4DHTML](#4dhtml)
- [4DEVAL](#4deval)

(Otras etiquetas, como 4DIF o 4DSCRIPT, deben escribirse con la sintaxis normal).

Por ejemplo, puede escribir:

```html
$4DEVAL(UserName)
```

en lugar de:

```html
<!--#4DEVAL(UserName)-->
```

La principal ventaja de esta sintaxis es que permite escribir plantillas compatibles con XML. Algunos desarrolladores 4D necesitan crear y validar plantillas basadas en XML utilizando herramientas de análisis sintáctico XML estándar. Dado que el caracter "<" no es válido en un valor de atributo XML, no era posible utilizar la sintaxis "`<!-- -->`" de las etiquetas 4D sin romper la sintaxis del documento. Por otro lado, no mencionar el carácter "<" impide que 4D interprete las etiquetas correctamente.

Por ejemplo, el siguiente código provocaría un error de análisis XML debido al primer caracter "<" en el valor del atributo:

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

Utilizando la sintaxis $, el siguiente código es validado por el analizador:

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

Tenga en cuenta que `$4dtag` y `<--#4dtag -->` no son estrictamente equivalentes: a diferencia de `<--#4dtag -->`, el procesamiento `$4dtag` no interpreta las etiquetas 4D [recursivamente](#recursive-processing). Las etiquetas `$` siempre se evalúan una vez y el resultado se considera texto sin formato.

La razón de esta diferencia es evitar la inyección de código malicioso. Como [se explica más adelante](#prevention-of-malicious-code-insertion), se recomienda encarecidamente utilizar etiquetas `4DTEXT` en lugar de etiquetas `4DHTML` cuando se maneja texto de usuario para proteger contra la reinterpretación no deseada de las etiquetas: con `4DTEXT`, los caracteres especiales como "<" se escapan, por lo que cualquier etiqueta 4D que utilice la sintaxis `<!--#4dtag expression -->` perderá su significado particular. Sin embargo, dado que `4DTEXT` no escapa el símbolo `$`, decidimos romper el soporte para la recursividad con el fin de prevenir la inyección maliciosa utilizando la sintaxis `$4dtag (expression)`.

Los siguientes ejemplos muestran el resultado del procesamiento en función de la sintaxis y la etiqueta utilizada:

```4d
  // ejemplo 1
 myName:="<!--#4DHTML QUIT 4D-->" //inyección maliciosa
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //¡4D saldrá!
```

```4d
  // ejemplo 2
 myName:="<!--#4DHTML QUIT 4D-->" //inyección maliciosa
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: <!--#4DHTML QUIT 4D-->"
```

```4d
  // ejemplo 3
 myName:="$4DEVAL(QUIT 4D)" //inyección maliciosa
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: $4DEVAL(QUIT 4D)"
```

Tenga en cuenta que la sintaxis de `$4dtag` admite la correspondencia de pares de comillas o de paréntesis. Por ejemplo, suponga que necesita evaluar la siguiente cadena compleja (irreal):

```
String(1) + "\"(hello)\""
```

Puede escribir:

```4d
 input:="$4DEVAL( String(1)+\"\\\"(hello)\\\"\")"
 PROCESS 4D TAGS(input;output)
 -->la salida es 1"(hello)"
```
