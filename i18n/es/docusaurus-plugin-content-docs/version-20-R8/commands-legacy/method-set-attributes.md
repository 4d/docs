---
id: method-set-attributes
title: METHOD SET ATTRIBUTES
slug: /commands/method-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTES.Syntax-->**METHOD SET ATTRIBUTES** ( *ruta* ; *atributos* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text, Text array | &#8594;  | Rutas de métodos |
| atributos | Object, Object array | &#8594;  | Atributos para definir los métodos seleccionados |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD SET ATTRIBUTES.Summary-->**Tema:** Acceso objetos diseño

El nuevo comando **METHOD SET ATTRIBUTES** le permite definir los valores de los *atributos* para lo métodos especificados en el parámetro *ruta*.<!-- END REF-->

En *ruta*, puede pasar ya sea un texto que contiene una ruta de método, o un array de texto que contiene una gran variedad de rutas. Debe pasar el mismo tipo de parámetro (cadena o array) en *atributos* con el fin de establecer los atributos adecuados. Este comando sólo funciona con métodos proyecto. Si pasa una *ruta*, no válida, se genera un error.

En *atributos*, se pasa un objeto o un array de objetos (en función del tipo de parámetro pasado en *ruta*) que contiene todos los atributos que desea definir para los métodos.

Los atributos de métodos deben definirse con los comandos [OB SET](ob-set.md) o [OB SET ARRAY](ob-set-array.md), con los valores True o False para los atributos booleanos, o los valores específicos para los atributos extendidos. Sólo los atributos que están presentes en el parámetro *atributos* se actualizarán en los atributos de los métodos.

Si el comando se ejecuta desde un componente, por defecto se aplica a los métodos del componente. Si pasa el parámetro *\**, accede a los métodos de la base local.

**Nota:** el comando existente [METHOD SET ATTRIBUTE](method-set-attribute.md) aún se soporta pero ya que sólo puede manejar valores booleanos, no se puede utilizar para atributos extendidos tales como propiedades 4D Mobile.

##### 

Los atributos soportados son:

```json
{    "invisible" : false, //  true si visible    "preemptive" : "capable" // o "incapable" o "indifferent"    "publishedWeb" : false,  // true si está disponible a través de las etiquetas 4D y URLs     "publishedSoap": false,  // true si se ofrece como servicio web    "publishedWsdl": false,  // si se ha publicado en WSDL    "shared" : false,  //  true si es compartida por los componentes y la base local    "publishedSql" : false,  //  true si está disponible a través de SQL    "executedOnServer" : false, // true si se ejecuta en el servidor}
```

**Nota:** los atributos "published4DMobile" son obsoletos para 4D v18.

#### Ejemplo 

Usted desea modificar un solo atributo:

```4d
 var $attributes : Object
 OB SET($attributes;"executedOnServer";True)
 METHOD SET ATTRIBUTES("aMethod";$attributes) //solo el atributo "executedOnServer" se modifica
```

#### Ver también 

[METHOD GET ATTRIBUTES](method-get-attributes.md)  
[METHOD SET ATTRIBUTE](method-set-attribute.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1335 |
| Hilo seguro | &cross; |


