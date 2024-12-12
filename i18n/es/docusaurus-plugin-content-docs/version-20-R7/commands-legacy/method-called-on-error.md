---
id: method-called-on-error
title: Method called on error
slug: /commands/method-called-on-error
displayed_sidebar: docs
---

<!--REF #_command_.Method called on error.Syntax-->**Method called on error** {( *alcance* )} : Text<!-- END REF-->
<!--REF #_command_.Method called on error.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| alcance | Integer | &#8594;  | Alcance del método de error |
| Resultado | Text | &#8592; | Nombre del método llamado por error |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Method called on error.Summary-->El comando **Method called on error** devuelve el nombre del método instalado por el comando [ON ERR CALL](on-err-call.md) para el proceso actual o el *alcance* definido.<!-- END REF-->

En el parámetro *alcance*, se pasa el contexto de ejecución para el que se desea obtener el nombre del método manejador de errores. Puede utilizar una de las siguientes constantes:

| Constante                 | Valor | Comentario                                                                                           |
| ------------------------- | ----- | ---------------------------------------------------------------------------------------------------- |
| ek errors from components | 2     | Errores ocurridos en los componentes                                                                 |
| ek global                 | 1     | Errores ocurridos en el contexto de ejecución global del proyecto                                    |
| ek local                  | 0     | Errores ocurridos en el contexto de ejecución local (por defecto si se omite el parámetro *alcance*) |

Si no se ha instalado ningún método para el *alcance*, se devuelve una cadena vacía ("").

#### Ejemplo 

Este comando es particularmente útil en el contexto de componentes porque le permite cambiar temporalmente y luego restaurar los métodos de intercepción de errores:

```4d
 $metActual:=Method called on error
 ON ERR CALL("NuevoMetodo")
  // Si el documento no puede abrirse, se genera un error
 $ref:=Open document("MiDocumento")
  // Reinstalación del método anterior
 ON ERR CALL($metActual)
```

#### Ver también 

*Gestión de errores*  
[ON ERR CALL](on-err-call.md)  