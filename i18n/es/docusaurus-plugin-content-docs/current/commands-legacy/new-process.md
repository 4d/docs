---
id: new-process
title: New process
slug: /commands/new-process
displayed_sidebar: docs
---

<!--REF #_command_.New process.Syntax-->**New process** ( *metodo* ; *pila* {; *nombre* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.New process.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodo | Text | &#8594;  | Método a ejecutar en el proceso |
| pila | Integer | &#8594;  | Tamaño de la pila en bytes |
| nombre | Text | &#8594;  | Nombre del proceso creado |
| param | Expression | &#8594;  | Parámetros del método |
| * | Operador | &#8594;  | Proceso único |
| Resultado | Integer | &#8592; | Número del proceso creado recientemente o del proceso que está siendo ejecutado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.New process.Summary-->El comando New process inicia un nuevo proceso (en el mismo equipo) y devuelve el número de este proceso.<!-- END REF-->

Si no se pudo crear el proceso (por ejemplo, si no hay suficiente memoria), New process devuelve cero (0) y se genera un error. Puede interceptar este error utilizando un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

##### Método de proceso 

 En *metodo*, se pasa el nombre del método de gestión del nuevo proceso. Una vez que 4D haya definido el contexto para el nuevo proceso, comienza la ejecución de este método que se convierte en el método de proceso.

Si el contexto de ejecución soporta el modo apropiativo y si el *metodo* se declara "hilo seguro", el nuevo proceso 4D se ejecutará en un hilo seguro apropiativo cuando la aplicación se ejecute en modo compilado. Para más información, consulte la página *Procesos 4D apropiativos*. 

##### Pila del proceso 

El parámetro *pila*, le permite indicar la cantidad de memoria asignada para la pila del proceso. Este valor representa el espacio en memoria utilizado para “apilar” las llamadas de métodos, las variables locales, los parámetros de subrutinas y los registros apilados.

* Pase 0 en *pila* para utilizar un tamaño de pila predeterminado, adecuado para la mayoría de aplicaciones (valor recomendado).
* En ciertos casos particulares, es posible que desee utilizar un valor personalizado. Debe expresarse en bytes. Esta configuración debe utilizarse con precaución, depende de la cadena de proceso y la plataforma.

**Nota:** la pila NO es la memoria total reservada para el proceso. Los procesos comparten memoria para los registros, las variables interproceso, etc. Un proceso utiliza igualmente la memoria extra para almacenar sus variables proceso. La pila contiene diferente información 4D: la cantidad de información depende del número de llamadas de métodos anidados, el número de formularios que abrirá antes de cerrarlos y el número y tamaño de variables locales utilizadas en cada llamada de método anidado.

##### Nombre del proceso 

 Pase el nombre del nuevo proceso en *nombre*. Este nombre aparecerá en la lista de procesos del Explorador de ejecución y será devuelto por el comando [Process info](../commands/process-info.md) cuando se aplica a este nuevo proceso. Puede omitir este parámetro; si lo hace, el nombre del proceso será una cadena vacía. Puede crear un proceso local colocando como prefijo el símbolo dólar (*$*). 

**Importante:** Recuerde que en cliente/servidor, los procesos locales no deben acceder a los datos. Para más información, consulte la sección *Procesos globales y locales*. 

##### Parámetros del método proceso 

 Puede pasar parámetros al método proceso utilizando uno o más parámetros *param*. Puede pasar parámetros de la misma manera que para las subrutinas (ver la sección ). Una vez que haya comenzado la ejecución en el contexto del nuevo proceso, el método proceso recibe los valores de los parámetros en *$1*, *$2* , etc. Recuerde que los arrays no pueden pasarse como parámetros a un método. Además, estas consideraciones adicionales deben ser tomadas en cuenta en el contexto del comando **New process**:

* Se permite punteros a tablas o campos.
* Los punteros a las variables, particularmente las variables locales y proceso, no se recomiendan ya que estas variables pueden estar indefinidas en el momento en que método proceso las accede.
* Los parámetros estándar de tipo objeto o colección se pasan **por copia**, es decir, 4D creará una copia del objeto o la colección en el proceso de destino en lugar de una referencia. Si desea pasar un objeto o un parámetro de colección **por referencia**, debe utilizar un objeto o colección compartidos (ver *Objetos y colecciones compartidos*).

**Nota**: si pasa los parámetros al método proceso, debe pasar el parámetro *nombre*; no puede omitirse en este caso. 

##### Parámetro opcional \* 

Le indica a 4D que debe verificar primero si se está ejecutando un proceso con el nombre que usted pasó en *nombre*. Si es así, 4D no inicia un nuevo proceso y devuelve el número del proceso con ese nombre.

#### Ejemplo 

Dado el siguiente método proyecto:  

```4d
  // ADD CUSTOMERS
 SET MENU BAR(1)
 Repeat
    ADD RECORD([Customers];*)
 Until(OK=0)
```

Si asocia este método de proyecto a un comando de menú creado en el Editor de barras de menú y le asigna la propiedad Iniciar un nuevo proceso, 4D automáticamente iniciará un nuevo proceso en el momento de la ejecución del método. La llamada [SET MENU BAR](set-menu-bar.md)(1) asocia esta barra de menús al nuevo proceso. En ausencia de ventanas (que podría haber abierto con [Open window](open-window.md)), la llamada a [ADD RECORD](add-record.md) abrirá automáticamente una.

Para poder iniciar el proceso Add Customers haciendo clic en un botón situado en un panel de control personalizado, puede escribir:  

```4d
  // Método de objeto botón bAddCustomers
 $vlProcessID:=New process("Add Customers";0;"Adding Customers")
```

El botón hace lo mismo que el comando de menú personalizado.  
  
Si cuando selecciona el elemento de menú o hace clic en el botón, usted quiere que el proceso comience (si no existe) o pasado al primer plano (si ya se está ejecutando), puede crear el método START ADD CUSTOMERS:  

```4d
  // START ADD CUSTOMERS
 $vlProcessID:=New process("Add Customers";0;"Adding Customers";*)
 If($vlProcessID#0)
    BRING TO FRONT($vlProcessID)
 End if
```

  
El método de objeto de bAddCustomers se convierte en:

```4d
  // Método objeto del botón bAddCustomers
 START ADD CUSTOMERS
```

  
En el editor de barras de menús, puede reemplazar ADD CUSTOMERS por el método START ADD CUSTOMERS, y deseleccionar la propiedad **Iniciar un nuevo proceso** para el comando de menú. 

#### Ver también 

[Execute on server](execute-on-server.md)  
*Procesos*  
*Procesos 4D apropiativos*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 317 |
| Hilo seguro | &check; |


