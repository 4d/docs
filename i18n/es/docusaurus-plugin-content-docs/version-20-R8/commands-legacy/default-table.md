---
id: default-table
title: DEFAULT TABLE
slug: /commands/default-table
displayed_sidebar: docs
---

<!--REF #_command_.DEFAULT TABLE.Syntax-->**DEFAULT TABLE** ( *tabla* )<!-- END REF-->
<!--REF #_command_.DEFAULT TABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a definir como tabla por defecto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DEFAULT TABLE.Summary-->**Tip:** aunque utilizar **DEFAULT TABLE** y omitir el nombre de la tabla pueden hacer el código más fácil de leer, muchos programadores consideran que la utilización de este comando en realidad trae más inconvenientes que ventajas.<!-- END REF--> En particular, note que [DEFAULT TABLE](default-table.md) es prioritario cuando utiliza por ejemplo el comando [DIALOG](../commands/dialog.md) con un formulario proyecto y hay un formulario de la tabla por defecto con el mismo nombre.

**DEFAULT TABLE** define *tabla* como la tabla por defecto para el proceso actual. 

Un proceso no tiene tabla por defecto hasta que el comando **DEFAULT TABLE** se ejecuta. Después de que se define una tabla por defecto, cualquier comando que omita el parámetro *tabla* funcionará sobre la tabla por defecto. Por ejemplo, considere este comando:

```4d
 FORM SET INPUT([Tabla];"formulario")
```

Si \[Tabla\] fue definida previamente como la tabla por defecto el mismo comando podría escribirse de esta forma:

```4d
 FORM SET INPUT("formulario")
```

  
Una de las razones para definir la tabla por defecto es crear código que no sea específico para una tabla. Esto permite operar el mismo código para diferentes tablas. También puede utilizar punteros hacia tablas para escribir código que no se específico de tablas. Para mayor información sobre esta técnica, vea la descripción del comando [Table name](table-name.md).

**DEFAULT TABLE** no permite la omisión de nombres de tablas cuando se refiere a los campos. Por ejemplo:

```4d
 [My Table]My Field:="Una Cadena" //Correcto
```

no puede ser escrita como:

```4d
 DEFAULT TABLE([Mi Tabla])
 My Field:="Una cadena" //INCORRECTO
```

porque una tabla por defecto ha sido definida.

En 4D, todas las tablas están “abiertas” y listas para ser utilizadas. **DEFAULT TABLE** no abre una tabla, define una tabla actual, o prepara la tabla para entrada o salida. **DEFAULT TABLE** es simplemente una facilidad de programación para facilitar la digitación y lectura del código.

#### Ejemplo 

El siguiente ejemplo presenta primero el código sin el comando DEFAULT TABLE. Luego muestra el mismo código, con DEFAULT TABLE. El código es un bucle comúnmente utilizado para añadir nuevos registros a una base de datos. Los comandos [FORM SET INPUT](form-set-input.md "FORM SET INPUT") y [ADD RECORD](add-record.md "ADD RECORD") necesitan una tabla como primer parámetro:

```4d
 FORM SET INPUT([Clientes];"Añadir Registros")
 Repeat
    ADD RECORD([Clientes])
 Until(OK=0)
```

En este código se especifica el resultado de la tabla por defecto:

```4d
 DEFAULT TABLE([Clientes])
 FORM SET INPUT("Añadir Registros")
 Repeat
    ADD RECORD
 Until(OK=0)
```

#### Ver también 

[Current default table](current-default-table.md)  
[NO DEFAULT TABLE](no-default-table.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 46 |
| Hilo seguro | &check; |


