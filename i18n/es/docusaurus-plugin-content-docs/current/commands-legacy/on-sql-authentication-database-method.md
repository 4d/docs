---
id: on-sql-authentication-database-method
title: On SQL Authentication database method
slug: /commands/on-sql-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On SQL Authentication.Syntax-->$user, $pw, $ip -> Método base On SQL Authentication : Boolean<!-- END REF-->
<!--REF #_command_.Metodo base On SQL Authentication.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| $user | Texto | &#8592; | Nombre de usuario |
| $pw | Texto | &#8592; | Contraseña |
| $ip | Texto | &#8592; | (Opcional) Dirección IP del cliente al origen de la petición |
| Resultado | Boolean | &#8592; | True = petición aceptada, False = petición rechazada |

<!-- END REF-->

## 

<!--REF #_command_.Metodo base On SQL Authentication.Summary-->El Método base On SQL Authentication puede utilizarse para filtrar las peticiones enviadas al servidor SQL integrado de 4D.<!-- END REF--> Este filtro puede estar basado en el nombre y contraseña como también de manera opcional en la dirección IP del usuario. El desarrollador puede utilizar su propia tabla de usuarios o la de los usuarios 4D para evaluar los identificadores de conexión. Una vez validada la conexión, el comando [CHANGE CURRENT USER](change-current-user.md) puede utilizarse para controlar el acceso de las peticiones dentro de la base 4D. 

Cuando existe, el Método base On SQL Authentication es llamado automáticamente por 4D o 4D Server en cada conexión externa al servidor SQL. Por lo tanto el sistema interno de gestión de los usuarios de 4D no está activado. La conexión se acepta sólo si el método de base devuelve [True](true.md "True") en $result y si el comando [CHANGE CURRENT USER](change-current-user.md) se ha ejecutado con éxito. Si una de estas condiciones no se cumple, la petición se rechaza.

**Nota**: la instrucción **SQL LOGIN(SQL\_INTERNAL**;$usuario;$contraseña) no llama al Método base On SQL Authentication ya que es una conexión interna en este caso.

El método de base recibe hasta tres parámetros de tipo Texto, pasados por 4D ($user, $pw y $ip) y devuelve un booleano, $result\. Esta es la descripción de estos parámetros:

| **Parámetros** | **Tipo** | **Descripción**                                                   |
| -------------- | -------- | ----------------------------------------------------------------- |
| $user             | Texto    | Nombre de usuario                                                 |
| $pw             | Texto    | Contraseña                                                        |
| $ip             | Texto    | (opcional) Dirección IP del cliente al origen de la petición (\*) |
| $result             | Booleano | True = petición aceptada, False = petición rechazada              |

(\*) 4D devuelve las direcciones IPv4 en un formato híbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la dirección IPv4 192.168.2.34\. Para mayor información, consulte la sección *Soporte de IP v6*. 

Debe declarar estos parámetros de esta forma:

```4d
  // Método de base On Web Authentication
 
 var $user;$pw;$ip;$4 : Text
  // Código para el método
```

La contraseña ($pw) se recibe como texto estándar. 

Debe controlar los identificadores de la conexión SQL en el Método base On SQL Authentication. Por ejemplo, puede verificar el nombre y la contraseña utilizando una tabla de usuarios personalizada. Si los identificadores son válidos, pase [True](true.md "True") en $result para aceptar la conexión y la petición. 4D abre una sesión SQL para el usuario. De lo contrario, pase [False](false.md "False") en $result; en este caso, la conexión se rechaza. 

**Nota:** si el Método base On SQL Authentication no existe, la conexión se evalúa utilizando el sistema integrado de gestión de usuarios de 4D (si está activo, en otras palabras, si una contraseña ha sido asignada al Diseñador). Si este sistema no está activado, los usuarios están conectados con los derechos de acceso del Diseñador (acceso libre).

Si pasa [True](true.md "True") en $result, debe llamar exitosamente al comando [CHANGE CURRENT USER](change-current-user.md) en el Método base On SQL Authentication para que la petición sea aceptada y para que 4D abra una sesión SQL para el usuario. 

El uso de este comando se recomienda porque permite un mayor nivel de seguridad. Esta autenticación virtual tiene la doble ventaja de permitir el control de las acciones de conexión y de ocultar para el exterior los identificadores de la conexión en la sesión SQL 4D.

Cuando el sistema de contraseñas integrado de 4D no está activo, la ejecución del comando [CHANGE CURRENT USER](change-current-user.md) no tiene efecto; los usuarios se conectan con los derechos de acceso del Diseñador. 

Este ejemplo del Método base On SQL Authentication verifica que la petición de conexión provenga de la red interna, valida los identificadores y luego asigna los derechos de accesos "sql\_user" para la sesión SQL.

```4d
 var $user;$pw;$ip;$4 : Text
  //$user: usuario
  //$pw: contraseña
  //{$ip: dirección IP del cliente}
 ON ERR CALL("SQL_error")
 If(DirIPInterna($ip))
  //El método DirIPInterna verifica si la dirección IP es interna
    If($user="victor") & ($pw="hugo")
       CHANGE CURRENT USER("sql_user";"")
       If(OK=1)
          $result:=True
       Else
          $result:=False
       End if
    Else
       $result:=False
    End if
 Else
    $result:=False
 End if
```
