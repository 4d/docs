---
id: overview
title: Descrição geral do controlo de acesso
---

If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications.

A estratégia de controle de acesso 4D depende da configuração de sua implementação:

- em aplicações multi-usuário, pode confiar nos usuários e grupos 4D,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](../commands-legacy/current-system-user.md).

> Consulte la documentación [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/) para una visión de conjunto de las funciones de seguridad de 4D.

## Controlo de acesso em aplicações multi-usuário

Aplicações multi-usuário são implementadas com 4D Server. Incluem aplicações cliente-servidor, Web ou REST.

En las aplicaciones multiusuario, el control de acceso se realiza a través de [usuarios y grupos 4D](handling_users_groups.md). You create users, assign passwords, create access groups that have different levels of privileges in the application.

Inicie el sistema de control de acceso por contraseña 4D con 4D Server, [ asignando una contraseña al usuario Diseñador](handling_users_groups.md#designer-and-administrator). Hasta que no le asigne una contraseña al Diseñador, todos los accesos a la aplicación se hacen con los derechos de acceso del Diseñador, incluso si ha [configurado usuarios y grupos](handling_users_groups.md) (cuando se abre la aplicación, no se requiere  Qualquer parte da aplicação pode ser aberta.

Quando uma senha for estabelecida para o Designer, todos os privilégios de acesso têm efeito. Para conectarse a la aplicación o a un [servidor con acceso protegido](handling_users_groups.md#assigning-group-access), los usuarios remotos deben introducir un nombre de usuario/contraseña.

Para desativar o sistema de acesso a senhas, precisa remover a senha Designer.

## Controlo de acesso em aplicações usuário único

Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume Desktop. En las aplicaciones monopuesto todos los usuarios que abren la aplicación son los [Diseñadores](handling_users_groups.md#designer-and-administrator), tienen todos los privilegios y su nombre es "Diseñador". El control de acceso no se basa en los usuarios y los grupos de 4D, sino en las **sesiones usuario**.

### Identificação de usuário

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](../commands-legacy/current-system-user.md) command, which returns the user who opened the system session. Assim, a autenticação do usuário é delegada ao nível do SO.

You can then allow or deny access within your application by using code such as:

```4d
If(Current system user = $user) //você pode armazenar os usuários em uma tabela de banco de dados
	//dar acesso a alguns recursos
End if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### Protecção do acesso

#### Privilégios

On a machine that is shared by several users, you can install the 4D application in a folder and give appropriate user access privileges to the folder at the OS level.

#### Encriptação de dados

Si desea proteger el acceso a los datos de la aplicación, se recomienda [encriptar los datos](MSC/encrypt.md) y proveer la clave de encriptación al usuario o usuarios autorizados.
