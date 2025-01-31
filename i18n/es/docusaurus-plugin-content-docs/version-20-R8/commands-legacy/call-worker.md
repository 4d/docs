---
id: call-worker
title: CALL WORKER
slug: /commands/call-worker
displayed_sidebar: docs
---

<!--REF #_command_.CALL WORKER.Syntax-->**CALL WORKER** ( *proceso* ; *metodo* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.CALL WORKER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Text, Integer | &#8594;  | Nombre o número del proceso worker |
| metodo | Object, Text | &#8594;  | Nombre del método proyecto a llamar |
| param | Expression | &#8594;  | Parámetros pasados al método |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CALL WORKER.Summary-->El comando **CALL WORKER** crea o llama al proceso worker cuyo nombre o ID se pasa en *proceso* y pide la ejecución del código designado por *formula* en su contexto con el parámetro opcional *param*.<!-- END REF-->

El comando **CALL WORKER** encapsula los parámetros *param* en un mensaje y lo envía en el buzón de mensajes del worker. Para obtener más información sobre los procesos worker, por favor consulte la sección *Sobre workers*.

En el parámetro *proceso*, puede especificar el worker utilizando su nombre o su número de proceso:

* Si pasa el número de un proceso que no existe, o si el proceso especificado no fue creado por **CALL WORKER** ni por 4D (tal como el proceso principal de la aplicación), **CALL WORKER** no hace nada.
* Si pasa el nombre de un proceso que no existe, se crea un nuevo proceso worker.

**Nota:** el **proceso principal**, creado por 4D para la interfaz de usuario y el modo de aplicación cuando se abre una base, es un proceso worker y puede ser llamado por **CALL WORKER**.Sin embargo, ya que su nombre puede variar en función del lenguaje de 4D, es preferible designar este proceso utilizando su número (siempre 1) cuando se utiliza **CALL WORKER**.

El proceso worker aparece en la lista de procesos del Explorador de ejecución y es devuelto por el comando [Process info](../commands/process-info.md) cuando se aplica a este proceso.

En *formula*, designe el código 4D que se ejecutará en el contexto del proceso padre de *ventana*. Puede pasar:

* un **objeto fórmula** (ver *Objetos Fórmula*). Los objetos fórmula pueden encapsular cualquier expresión ejecutable, incluyendo funciones y métodos proyecto;
* una **cadena** que contenga el nombre de un método proyecto. Se puede pasar una cadena vacía; en este caso, el worker ejecuta el método que se utilizó originalmente para iniciar su proceso, si lo hay (es decir, el método de inicio del worker).  
**Nota**: no es posible pasar una cadena vacía en *formula* cuando el comando llama al proceso principal (proceso número 1) ya que no fue iniciado utilizando un método proyecto. Como resultado, **CALL WORKER* (1;"")* no hace nada.

También puede pasar parámetros a la fórmula utilizando uno o más parámetros *param*. Puede utilizar *parámetros secuenciales* o, si la expresión de la fórmula es una función o un método de proyecto, *parámetros nombrados*. Al iniciar la ejecución en el contexto del formulario, la fórmula proceso recibe los valores parámetro en *$1*, *$2*, etc. Recuerde que los arrays no pueden ser pasados ​​como parámetros a un método. Además, en el contexto del comando **CALL WORKER**, las siguientes consideraciones adicionales deben tenerse en cuenta:

* Se permite punteros a tablas o campos.
* Los punteros a las variables, particularmente las variables locales y de proceso, no se recomiendan ya que estas variables pueden estar indefinidas en el momento de su acceso por el método de proceso.
* Los parámetros de tipo de colección u objeto estándar se pasan **por copia**, es decir, 4D creará una copia del objeto o la colección en el proceso de destino si el worker está en un proceso diferente del que llama al comando **CALL WORKER**. En este contexto, si desea pasar un objeto o un parámetro colección **by reference**, debe utilizar un objeto o colección compartidos (ver *Objetos y colecciones compartidos*).
* Si pasa un parámetro de tipo Objeto o una Colección, 4D crea una copia del objeto o de la colección en el proceso de destino si el worker se encuentra en un proceso diferente del que llama al comando **CALL WORKER**.

Un proceso worker se mantiene vivo hasta que la aplicación esté cerrada o el comando [KILL WORKER](kill-worker.md) se llame explícitamente. Para liberar memoria, no olvide llamar a este comando una vez un proceso worker ya no sea necesario.

#### Ejemplo 

En un formulario, un botón inicia un cálculo, por ejemplo las estadísticas con respecto al año seleccionado. El botón crea o llama a un proceso de worker que va a calcular los datos mientras el usuario puede continuar trabajando en el formulario.  
  
El método del botón es:

```4d
  //llamar al worker myWorker con el parámetro
 var $vYear: Integer
 $vYear:=2015 // podría haber sido seleccionado por el usuario en el formulario
 CALL WORKER("myWorker";Formula(workerMethod);$vYear;Current form window)
```

El código de *workerMethod* es:

```4d
  // este es el método del worker
  // puede ser apropiativo o cooperativo
 #DECLARE($vYearInteger;$windowInteger) //referencia de la ventana y año
 var $vStatResults : Object //para almacenar los resultados estadísticos
 ... //calcular estadísticas
  //una vez terminado, vuelve a llamar el formulario con los valores calculados
  //$vStatResults podría mostrar los resultados en el formulario
 CALL FORM($window;Formula(displayStats);$vStatResults)
```

#### Ver también 

[CALL FORM](call-form.md)  
[Current process name](current-process-name.md)  
[KILL WORKER](kill-worker.md)  
*Sobre workers*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1389 |
| Hilo seguro | &check; |


