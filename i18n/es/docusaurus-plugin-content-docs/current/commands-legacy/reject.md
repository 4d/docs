---
id: reject
title: REJECT
slug: /commands/reject
displayed_sidebar: docs
---

<!--REF #_command_.REJECT.Syntax-->**REJECT** {( *unCampo* )}<!-- END REF-->
<!--REF #_command_.REJECT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo a rechazar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REJECT.Summary-->**REJECT** tiene dos sintaxis.<!-- END REF--> La primera sintaxis no tiene parámetros. En este caso, el comando rechaza la totalidad de la entrada y obliga al usuario a permanecer en el formulario. La segunda sintaxis rechaza solamente el *campo* y obliga al usuario a permanecer en el campo. 

**Nota:** debe considerar utilizar las herramientas integradas de validación de datos antes de utilizar este comando.

La primera sintaxis de **REJECT** evita que el usuario acepte un registro incompleto. Puede alcanzar el mismo resultado sin utilizar **REJECT**, asocie la tecla Intro con un botón Sin acción y utilice los comandos [ACCEPT](accept.md) y[CANCEL](cancel.md)  para aceptar o cancelar el registro, una vez los campos hayan sido introducidos correctamente. Es recomendable utilizar esta segunda técnica y no la primera sintaxis de **REJECT**.

Si utiliza la primera sintaxis, usted ejecuta **REJECT** para evitar que el usuario acepte un registro, generalmente porque el registro está incompleto o tiene entradas incorrectas. Si el usuario trata de aceptar el registro, la ejecución de **REJECT** evita la aceptación del registro; el registro permanece visualizado en el formulario. El usuario debe continuar con la entrada de datos hasta que el registro sea aceptable o se cancele el registro.

El mejor lugar para el comando **REJECT**, cuando se utiliza esta sintaxis, es el método de objeto de un botón Aceptar asociado a la tecla Intro. De esta forma, la validación ocurre sólo cuando el registro es aceptado y el usuario no puede forzar la validación presionando la tecla Enter.

La segunda sintaxis de **REJECT** se ejecuta con el parámetro *campo*. En este caso, el cursor permanece en el área de entrada del campo, que obliga al usuario a introducir un valor correcto.   
Con esta sintaxis, el comando **REJECT** debe obligatoriamente ser llamado en el evento formulario On Data Change.Debe colocar esta sintaxis del comando **REJECT** en el método de formulario o en el método de objeto del área de entrada. Si está utilizando **REJECT** para el formulario detallado de un subformulario para una tabla, colóquelo en el método de formulario o método de objeto para el formulario detallado. Este comando no tiene efecto en campos de subformularios.

Puede utilizar [HIGHLIGHT TEXT](highlight-text.md) para seleccionar los datos en el campo que están siendo rechazados. 

#### Ejemplo 1 

El siguiente ejemplo es sobre un registro de transacción bancaria que ilustra la primera sintaxis de REJECT utilizada en el método de objeto de un botón Aceptar. La tecla Enter está definida como un equivalente del botón. Esto significa que incluso si el usuario presiona la tecla Enter para aceptar el registro, el método de objeto del botón se ejecutará. Si la transacción es un cheque, entonces debe haber un número de cheque. Si no hay un número de cheque, se rechaza la validación: 

```4d
 Case of
    :(([Operacion]Transaccion="Cheque") & ([Operacion]Número Cheque="")) // Si es un cheque sin número.
       ALERT("Por favor introduzca el número del cheque.") // Alerta del usuario
       REJECT // Rechazar la entrada
       GOTO OBJECT([Operacion]Número Cheque) // Ir al campo Número Cheque
 End case
```

#### Ejemplo 2 

El siguiente ejemplo es parte de un método de objeto para un campo *\[Employees\]Salary*. El método de objeto prueba el campo *Employees\]Salary* y rechaza el campo si el valor es menor que 10 000 EUR. Puede efectuar la misma operación especificando un valor mínimo para el campo en el editor de formularios: 

```4d
 Case of
    :(FORM Event=On Data Change)
       If([Employees]Salary<10000)
          ALERT("Salary must be greater than $10,000")
          REJECT([Employees]Salary)
       End if
 End case
```

#### Ver también 

[ACCEPT](accept.md)  
[CANCEL](cancel.md)  
[GOTO OBJECT](goto-object.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 38 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


