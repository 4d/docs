---
id: resource-type-list
title: RESOURCE TYPE LIST
slug: /commands/resource-type-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE TYPE LIST.Syntax-->**RESOURCE TYPE LIST** ( *resTipos* {; *resArchivo*} )<!-- END REF-->
<!--REF #_command_.RESOURCE TYPE LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resTipos | Text array | &#8592; | Lista de tipos de recursos disponibles |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESOURCE TYPE LIST.Summary-->El comando RESOURCE TYPE LIST llena el array *resTipos* con los tipos de recursos presentes en el (los) archivo(s) de recursos abierto(s).<!-- END REF--> 

Si pasa un número de referencia de archivo de recursos válido en el parámetro opcional *resArchivo*, sólo se listan los recursos de ese archivo. Si no pasa *resArchivo*, se listan todos los recursos de los archivos de recursos abiertos. 

Puede predeclarar el array *resTipos* como un array tipo Alfa o Texto antes de llamar a RESOURCE TYPE LIST. Si no predeclara el array, el comando crea *resTipos* como un array tipo Texto. 

Después de la llamada, puede probar el número de tipo de recursos encontrados aplicando el comando [Size of Array](size-of-array.md "Size of Array") al array *resTipos*.

#### Ejemplo 1 

El siguiente ejemplo llena el array *atResTipo* con los tipos de recursos presentes en los archivos de recursos abiertos:

```4d
 RESOURCE TYPE LIST(atResTipo)
```

#### Ejemplo 2 

El siguiente archivo muestra si el archivo de estructura Mac OS utiliza el contenido de los antiguos plug-ins 4D, que deberán ser actualizados para utilizar la base en Windows: 

```4d
 $vhResArchivo:=Open resource file(Structure file)
 RESOURCE TYPE LIST(atResTipo;$vhResArchivo)
 If(Find in array(atResTipo;"4DEX")>0)
    ALERT("Esta base contiene los plug-ins 4D del modelo antiguo."+(Char(13)*2)+
    "Tendrá que actualizarlos para utilizar esta base en Windows.")
 End if
```

**Nota:** el archivo de estructura no es el único archivo en el cual los plug-ins de la versión anterior pueden ser almacenados. La base también puede incluir un archivo Proc.Ext.

#### Ejemplo 3 

El siguiente método de proyecto devuelve el número de recursos presentes en un archivo de recursos:

```4d
  // Método de proyecto Contar recursos
  // Contar recursos ( Hora) -> Entero largo
  // Contar recursos ( DocRef ) -> Número de recursos
 
 var $0 : Integer
 var $1 : Time
 
 $0:=0
 RESOURCE TYPE LIST($atResTipo;$1)
 For($vlElem;1;Size of array($atResTipo))
    RESOURCE LIST($atResTipo{$vlElem};$alResNum;$atResNom;$1)
    $0:=$0+Size of array($alResNum)
 End for
```

Una vez este método de proyecto se implementa en una base, puede escribir:

```4d
 $vhResArchivo:=Open resource file("")
 If(OK=1)
    ALERT("El archivo “"+Document+"” contiene "+String(Count resources($vhResArchivo))+" recurso(s).")
    CLOSE RESOURCE FILE($vhResArchivo)
 End if
```

#### Ver también 

[RESOURCE LIST](resource-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 499 |
| Hilo seguro | &cross; |


