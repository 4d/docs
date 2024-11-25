---
id: generate-password-hash
title: Generate password hash
slug: /commands/generate-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Generate password hash.Syntax-->**Generate password hash** ( *contrasena* {; *opciones*} ) : Text<!-- END REF-->
<!--REF #_command_.Generate password hash.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| contrasena | Text | &#8594;  | La contraseña del usuario. Sólo se utilizan los primeros 72 caracteres. |
| opciones | Object | &#8594;  | Un objeto que contiene opciones. |
| Resultado | Text | &#8592; | Devuelve la contraseña hash. |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Generate password hash.Summary-->La función **Generate password hash** devuelve un hash de *contrasena* seguro generado por un algoritmo de hash criptográfico.<!-- END REF-->

Pase un valor de cadena en el parámetro *contrasena*. **Generate password hash** devuelve una cadena de hash para la contraseña. Múltiples pases de la misma contraseña darán lugar a cadenas hash diferentes.

En el objeto *opciones*, pase las propiedades que se utilizarán al generar el hash de la contraseña. Los valores disponibles se muestran en la siguiente tabla:  

| **Propiedad** | **Tipo de valor** | **Descripción**                                                                                       | **Valor por defecto** |
| ------------- | ----------------- | ----------------------------------------------------------------------------------------------------- | --------------------- |
| algorithm     | cadena            | algoritmo que se utilizará. Actualmente sólo se admite "bcrypt" (sensible a mayúsculas y minúsculas). | bcrypt                |
| cost          | numérico          | velocidad que se utilizará. Los valores admitidos para bcrypt están entre 4 y 31.                     | 10                    |

**Nota**: si un valor en el objeto de *opciones* no es válido, se devolverá un mensaje de error y una cadena vacía.

##### Gestión de errores 

Se pueden devolver los siguientes errores. Puede revisar un error con los comandos [Last errors](last-errors.md)  y [ON ERR CALL](on-err-call.md).  

| **Número** | **Mensaje**                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| 850        | Password-hash: Algoritmo no soportado.                                              |
| 852        | Password-hash: No disponible bcrypt costo parámetro, ofrece un valor entre 4 y 31\. |

##### Sobre bcrypt 

bcrypt es una función de hashing de contraseñas basada en el cifrado Blowfish. Además de incorporar una sal para proteger contra los ataques tabla arco iris, es una función adaptativa en la que el recuento de la iteración puede aumentarse para hacerla más lenta, por lo que sigue siendo resistente a los ataques de fuerza bruta incluso con el aumento del poder computacional, porque toma demasiado tiempo y es costoso.

#### Ejemplo 

Este ejemplo genera un hash de contraseña utilizando bcrypt con un factor de costo 4.

```4d
 var $password : Text
 var $hash : Text
 var $options : Object
 
 $options:=New object("algorithm";"bcrypt";"cost";4)
 $password:=Request("Please enter your password")
 
 $hash:=Generate password hash($password;$options)
 [Users]hash:=$hash
 SAVE RECORD([Users])
```

**Nota**: múltiples pasadas de la misma contraseña darán lugar a cadenas hash diferentes. Este es un comportamiento estándar para algoritmos como bcrypt, ya que la mejor práctica es crear una nueva sal aleatoria para cada hash. Consulte la descripción [Verify password hash ](verify-password-hash.md) para ver un ejemplo de cómo comprobar las contraseñas.

#### Ver también 

  
[Generate digest](generate-digest.md)  
[Verify password hash ](verify-password-hash.md)  