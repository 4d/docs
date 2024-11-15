---
id: parse-formula
title: Parse formula
slug: /commands/parse-formula
displayed_sidebar: docs
---

<!--REF #_command_.Parse formula.Syntax-->**Parse formula** ( *formula* {; *opciones*}{; *mensajeError*} ) : Text<!-- END REF-->
<!--REF #_command_.Parse formula.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| formula | Text | &#8594;  | Fórmula de texto sin formato |
| opciones | Integer | &#8594;  | Instrucciones para entrada/salida |
| mensajeError | Text | &#8592; | Mensaje de error (cadena vacía si no hay error) |
| Resultado | Text | &#8592; | Fórmula transformada (texto sin formato) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Parse formula.Summary-->La función **Parse formula** analiza la *formula* 4D, verifica su sintaxis y devuelve su formula normalizada.<!-- END REF--> Esto permite que la fórmula siga siendo válida en el caso de que se cambie el nombre de un lenguaje 4D o elemento de estructura (comando, constante, tabla, campo o Plugin 4D).

**Parse formula** se puede usar para evaluar y traducir fórmulas de la siguiente manera:

* Los nombres reales de tabla/campo se pueden convertir a nombres de estructura\* virtual (nombres personalizados) o equivalentes tokenizados \*\*
* Los equivalentes de tabla/campo tokenizados se pueden convertir a nombres de estructura virtual o nombres reales de tabla/campo
* Las estructuras virtuales se pueden convertir a nombres reales de tabla/campo o equivalentes simbólicos
* Los elementos de lenguaje 4D se pueden convertir a equivalentes de lenguaje 4D tokenizados
* Los equivalentes del lenguaje 4D tokenizados se pueden convertir a elementos de lenguaje 4D

**\*** **Las estructuras virtuales se definen utilizando los comandos [SET TABLE TITLES](set-table-titles.md) y [SET FIELD TITLES](set-field-titles.md) (\** **parámetro requerido).* 

**\*\*** **Los equivalentes tokenizados son elementos* **de estructura* *y del lenguaje 4D en texto sin formato expresados ​​con la sintaxis del token, como se muestra a continuación (consulte también* *Utilizar tokens en fórmulas):* 

```RAW
[Table:1]Field:1+String:C10(1)
```

En *formula*, pase una fórmula en texto sin formato. Puede usar nombres de estructuras reales o virtuales, así como equivalentes tokenizados.

Sin importar los tipos de nombre utilizados en *formula*, por defecto **Parse formula** devuelve el lenguaje 4D real o los nombres de los elementos de la estructura sin tokens de texto.

El parámetro opcional *opciones* le permite especificar cómo se expresa y/o se devuelve *formula* utilizando las siguientes constantes del tema *Fórmulas*. Puede combinar constantes para designar tanto el formato de entrada como el de salida de la fórmula devuelta.

| Constante                          | Valor | Comentario                                                                                                      |
| ---------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| Formula in with virtual structure  | 1     | La fórmula contiene nombres personalizados (virtual). Por defecto, la fórmula devuelta contiene nombres reales. |
| Formula out with virtual structure | 2     | La fórmula devuelta debe contener nombres personalizados (virtual).                                             |
| Formula out with tokens            | 4     | La fórmula devuelta debe contener texto tokenizado (por ejemplo: Cxx).                                          |

El parámetro opcional *mensajeE* *rror* recibirá un mensaje de error si hay un error de sintaxis en *formula*. Si no hay ningún error, se devolverá una cadena vacía.

#### Ejemplo 1 

```4d
 ARRAY TEXT($t1;1)
 ARRAY LONGINT($t2;1)
 $t1{1}:="Virtual table"
 $t2{1}:=1
 SET TABLE TITLES($t1;$t2;*)
 
 ARRAY TEXT($tf1;1)
 ARRAY LONGINT($tf2;1)
 $tf1{1}:="Virtual field"
 $tf2{1}:=2
 SET FIELD TITLES([Table_1];$tf1;$tf2;*)
 
  //Estructura virtual para tabla y nombre de campo equivalente
 $parsedFormula:=Parse formula("[Virtual table]Virtual field";Formula in with virtual structure;$errorMessage)
  //return [Table_1]Field_2
 
  //Nombre de tabla y campo para equivalente de estructura virtual
 $parsedFormula:=Parse formula("[Table_1]Field_2";Formula out with virtual structure;$errorMessage)
  //return [Virtual table]Virtual field
 
  //Tabla y nombre de campo para el formulario tokenizado equivalente
 $parsedFormula:=Parse formula("String([Table_1]Field_2)";Formula out with tokens;$errorMessage)
  //return String:C10([Table_1:1]Field_2:2)
 
 
```

#### Ejemplo 2 

Utilizando las tablas del **Ejemplo 1**:

```4d
  //pide al usuario que escriba su fórmula favorita
 $formula:=""
 EDIT FORMULA([Table_1];$formula)
 
  //guarda la fórmula del usuario para un uso posterior
 CREATE RECORD([users_preferences])
 $persistentFormula:=Parse formula($formula;Formula out with tokens)
 [users_preferences]formula:=$persistentFormula
 
  //luego: ejecuta la fórmula guardada anteriormente
 CREATE RECORD([Table_1])
 EXECUTE FORMULA([users_preferences]formula)
```

#### Ver también 

[Formula from string](formula-from-string.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
*Utilizar tokens en fórmulas*  