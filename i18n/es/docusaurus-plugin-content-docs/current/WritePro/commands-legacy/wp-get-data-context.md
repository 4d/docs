---
id: wp-get-data-context
title: WP Get data context
slug: /WritePro/commands/wp-get-data-context
displayed_sidebar: docs
---

<!--REF #_command_.WP Get data context.Syntax-->**WP Get data context** ( *wpDoc* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get data context.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| Resultado | Object | &#8592; | Objeto de contexto de datos |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP Get data context.Summary-->El comando **WP Get data context** devuelve el contexto de datos del documento wpDoc.<!-- END REF--> Los contextos de datos se definen con el comando [WP SET DATA CONTEXT](wp-set-data-context.md).

En *wpDoc*, pase el documento 4D Write Pro cuyo contexto de datos desea obtener.

#### Ejemplo 

Puede obtener un contexto de datos de un documento y reutilizarlo en otro método dentro del mismo proceso.  
  
El siguiente método establece un contexto de datos: 

```4d
  // method1
 var $person: Object
 var $wpArea : Object
 
 $wpArea:=WP New()
 
  // Crear el objeto person
 $person:=New object()
 $person.firstName:="John"
 $person.lastName:="Doe"
 
  // Definir el contexto utilizando el objeto person
 WP SET DATA CONTEXT($wpArea;$person)
 
 method2($wpArea) //llamar al otro método
```

method2 podría ser algo así:

```4d
  //method2
 #DECLARE($document Object)
 var $context : Object
 
 $context:=WP Get data context($document)
 ALERT(JSON Stringify($context)) // Muestra {"firstName":"John","lastName":"Doe"}
```

#### Ver también 

  
[WP SET DATA CONTEXT](wp-set-data-context.md)  