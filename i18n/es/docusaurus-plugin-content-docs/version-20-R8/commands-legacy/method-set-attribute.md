---
id: method-set-attribute
title: METHOD SET ATTRIBUTE
slug: /commands/method-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTE.Syntax-->**METHOD SET ATTRIBUTE** ( *ruta* ; *tipoAtrib* ; *valorAtrib* {; *tipoAtrib2* ; *valorAtrib2* ; ... ; *tipoAtribN* ; *valorAtribN*}{; *operador*} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text | &#8594;  | Ruta del método proyecto |
| tipoAtrib | Integer | &#8594;  | Tipo de atributo |
| valorAtrib | Boolean, Text | &#8594;  | True = seleccionar el atributo  False = deseleccionar el atributo |
| operador | * | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un  componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD SET ATTRIBUTE.Summary-->El comando **METHOD SET ATTRIBUTE** permite definir el valor del atributo *tipoAtrib* para el método proyecto designado por el parámetro *ruta*.<!-- END REF--> Este comando sólo funciona con métodos proyecto. Si pasa una *ruta* invalida, se genera un error. 

En el parámetro *tipoAtrib*, pase un valor que indique el tipo de atributo a definir. Puede utilizar las siguientes constantes, del tema *Acceso objetos diseño*:

| Constante                    | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute executed on server | Entero largo | 8     | Corresponde a la opción "Ejecutar en servidor"                                                                                                                                                                                                                                                                                                                                                    |
| Attribute folder name        | Entero largo | 1024  | Nombre de la carpeta para el método (atributo "carpeta"). Cuando pase esta constante, debe pasar un nombre de carpeta en *attribValue*:<br/>si el nombre corresponde a una carpeta válida, el método se coloca en esta carpeta padre,si la carpeta no existe, el comando no cambia nada en el nivel de la carpeta padre,si pasa una cadena vacía, el método se ubica al nivel de la raíz. |
| Attribute invisible          | Entero largo | 1     | Corresponde a la opción "Invisible"                                                                                                                                                                                                                                                                                                                                                               |
| Attribute published SOAP     | Entero largo | 3     | Corresponde a la opción "Ofrecido como servicio web"                                                                                                                                                                                                                                                                                                                                              |
| Attribute published SQL      | Entero largo | 7     | Corresponde a la opción "Disponible vía SQL"                                                                                                                                                                                                                                                                                                                                                      |
| Attribute published Web      | Entero largo | 2     | Corresponde a la opción "Disponible vía las etiquetas HTML y los URLs 4D (4DACTION...)"                                                                                                                                                                                                                                                                                                           |
| Attribute published WSDL     | Entero largo | 4     | Corresponde a la opción "Publicado en WSDL"                                                                                                                                                                                                                                                                                                                                                       |
| Attribute shared             | Entero largo | 5     | Corresponde a la opción "Compartido entre componentes y base local"                                                                                                                                                                                                                                                                                                                               |

Puede pasar en el parámetro *valorAtrib:*

* **True** para seleccionar la opción correspondiente y **False** para deseleccionarla o,
* una cadena (nombre de carpeta) si utilizó la constante Attribute folder name en *tipoAtrib*.

Puede pasar múltiples pares *tipoAtrib*;*valorAtrib* en una sola llamada.

Puede ejecutar este comando desde un componente, pero en este caso debe pasar el parámetro *\**, por el acceso en sólo escritura al código del componente. Si omite el parámetro *\** en este contexto, se genera el error -9763.

##### 

Este comando no puede ejecutarse en modo compilado. Cuando se llama en este modo, generará el error -9762\. 

#### Ejemplo 1 

Selección de la propiedad "Compartido entre componentes y la base local" para el método proyecto "Selección diálogo":

```4d
 METHOD SET ATTRIBUTE("Selección diálogo";Attribute shared;True)
```

#### Ejemplo 2 

Definición de varios pares de atributos/valores:

```4d
 METHOD SET ATTRIBUTE(vPath;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vFolder;*)
```

#### Ver también 

*Acceso objetos diseño*  
[METHOD Get attribute](method-get-attribute.md)  
[METHOD SET ATTRIBUTES](method-set-attributes.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1192 |
| Hilo seguro | &cross; |


