---
id: method-get-attribute
title: METHOD Get attribute
slug: /commands/method-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get attribute.Syntax-->**METHOD Get attribute** ( *ruta* ; *tipoAtributo* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.METHOD Get attribute.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text | &#8594;  | Ruta de método proyecto |
| tipoAtributo | Integer | &#8594;  | Tipo de atributo a obtener |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |
| Resultado | Boolean | &#8592; | True = atributo seleccionado; de lo contrario False |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.METHOD Get attribute.Summary-->El comando **METHOD Get attribute** devuelve el valor del atributo *tipoAtributo* para el método proyecto designado por el parámetro *ruta*.<!-- END REF--> Este comando sólo funciona con métodos proyecto. Si pasa una *ruta* invalida, se genera un error. 

En el parámetro *tipoAtributo*, pase un valor indicando el tipo de atributo a obtener. Puede utilizar las siguientes constantes del tema *Acceso objetos diseño*:

| Constante                    | Tipo         | Valor | Comentario                                                                              |
| ---------------------------- | ------------ | ----- | --------------------------------------------------------------------------------------- |
| Attribute executed on server | Entero largo | 8     | Corresponde a la opción "Ejecutar en servidor"                                          |
| Attribute invisible          | Entero largo | 1     | Corresponde a la opción "Invisible"                                                     |
| Attribute published SOAP     | Entero largo | 3     | Corresponde a la opción "Ofrecido como servicio web"                                    |
| Attribute published SQL      | Entero largo | 7     | Corresponde a la opción "Disponible vía SQL"                                            |
| Attribute published Web      | Entero largo | 2     | Corresponde a la opción "Disponible vía las etiquetas HTML y los URLs 4D (4DACTION...)" |
| Attribute published WSDL     | Entero largo | 4     | Corresponde a la opción "Publicado en WSDL"                                             |
| Attribute shared             | Entero largo | 5     | Corresponde a la opción "Compartido entre componentes y base local"                     |

Si el comando se ejecuta desde un componente, se aplica por defecto a los métodos del componente. Si pasa el parámetro *\**, accede a los métodos de la base local.

El comando devuelve **True** si se selecciona un atributo y **False** si se deselecciona.

#### Ver también 

[METHOD SET ATTRIBUTE](method-set-attribute.md)  