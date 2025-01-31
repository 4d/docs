---
id: overview
title: Presentación del control de acceso
---

Si diferentes personas utilizan una aplicación, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades según de los usuarios conectados. También es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto.

La estrategia de control de acceso 4D depende de la configuración de su despliegue:

- en las aplicaciones multiusuario, puede confiar en los usuarios y grupos 4D,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](../commands-legacy/current-system-user.md).

> Consulte la documentación [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/) para una visión de conjunto de las funciones de seguridad de 4D.

## Control de acceso en las aplicaciones multiusuario

Las aplicaciones multiusuario se despliegan con 4D Server. Incluyen aplicaciones cliente-servidor, web o REST.

En las aplicaciones multiusuario, el control de acceso se realiza a través de [usuarios y grupos 4D](handling_users_groups.md). Puede crear usuarios, asignar contraseñas, crear grupos de acceso con diferentes niveles de privilegios en la aplicación.

Inicie el sistema de control de acceso por contraseña 4D con 4D Server, [ asignando una contraseña al usuario Diseñador](handling_users_groups.md#designer-and-administrator). Hasta que no le asigne una contraseña al Diseñador, todos los accesos a la aplicación se hacen con los derechos de acceso del Diseñador, incluso si ha [configurado usuarios y grupos](handling_users_groups.md) (cuando se abre la aplicación, no se requiere  Se puede abrir cualquier parte de la aplicación.

Cuando se asigna una contraseña al Diseñador, todos los privilegios de acceso entran en vigor. Para conectarse a la aplicación o a un [servidor con acceso protegido](handling_users_groups.md#assigning-group-access), los usuarios remotos deben introducir un nombre de usuario/contraseña.

Para desactivar el sistema de acceso por contraseña, basta con eliminar la contraseña del Diseñador.

## Control de acceso en las aplicaciones monopuesto

Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume Desktop. En las aplicaciones monopuesto todos los usuarios que abren la aplicación son los [Diseñadores](handling_users_groups.md#designer-and-administrator), tienen todos los privilegios y su nombre es "Diseñador". El control de acceso no se basa en los usuarios y los grupos de 4D, sino en las **sesiones usuario**.

### Identificación del usuario

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](../commands-legacy/current-system-user.md) command, which returns the user who opened the system session. Por lo tanto, la autenticación de los usuarios se delega al sistema operativo.

A continuación, puede permitir o denegar el acceso dentro de su aplicación utilizando un código como:

```4d
If(Current system user = $user) //puede almacenar los usuarios en una tabla base
	// dar acceso a algunas funcionalidades
End if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### Protección del acceso

#### Privilegios

En una máquina compartida por varios usuarios, puede instalar la aplicación 4D en una carpeta y dar privilegios de acceso usuario apropiados a la carpeta a nivel del sistema operativo.

#### Cifrado de datos

Si desea proteger el acceso a los datos de la aplicación, se recomienda [encriptar los datos](MSC/encrypt.md) y proveer la clave de encriptación al usuario o usuarios autorizados.
