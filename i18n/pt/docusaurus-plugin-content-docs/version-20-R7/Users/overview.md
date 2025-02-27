---
id: overview
title: Descrição geral do controlo de acesso
---

Se mais de uma pessoa usar uma aplicação, que geralmente é o caso em arquitetura cliente-servidor ou interfaces Web, você precisa controlar o acesso ou fornecer diferentes recursos, conforme os usuários conectados. É também essencial garantir a segurança de dados sensíveis, mesmo em aplicações usuário único.

A estratégia de controle de acesso 4D depende da configuração de sua implementação:

- em aplicações multi-usuário, pode confiar nos usuários e grupos 4D,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> Consulte la documentación [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/) para una visión de conjunto de las funciones de seguridad de 4D.

## Controlo de acesso em aplicações multi-usuário

Aplicações multi-usuário são implementadas com 4D Server. Incluem aplicações cliente-servidor, Web ou REST.

En las aplicaciones multiusuario, el control de acceso se realiza a través de [usuarios y grupos 4D](handling_users_groups.md). Você cria usuários, atribuir senhas, criar grupos de acesso que tenham diferentes níveis de privilégios na aplicação.

Inicie el sistema de control de acceso por contraseña 4D con 4D Server, [ asignando una contraseña al usuario Diseñador](handling_users_groups.md#designer-and-administrator). Quando uma senha for estabelecida para o Designer, todos os privilégios de acesso têm efeito. Para conectarse a la aplicación o a un [servidor con acceso protegido](handling_users_groups.md#assigning-group-access), los usuarios remotos deben introducir un nombre de usuario/contraseña. Qualquer parte da aplicação pode ser aberta.

Quando uma senha for estabelecida para o Designer, todos os privilégios de acesso têm efeito. Inicie el sistema de control de acceso por contraseña 4D con 4D Server, [ asignando una contraseña al usuario Diseñador](handling_users_groups.md#designer-and-administrator).

Para desativar o sistema de acesso a senhas, precisa remover a senha Designer.

## Controlo de acesso em aplicações usuário único

As aplicações usuário único são aplicações de desktop, implantados com 4D ou mesclados com 4D Volume License. En las aplicaciones monopuesto todos los usuarios que abren la aplicación son los [Diseñadores](handling_users_groups.md#designer-and-administrator), tienen todos los privilegios y su nombre es "Diseñador". El control de acceso no se basa en los usuarios y los grupos de 4D, sino en las **sesiones usuario**.

### Identificação de usuário

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) command, which returns the user who opened the system session. Assim, a autenticação do usuário é delegada ao nível do SO.

You can then allow or deny access within your application by using code such as:

```4d
If(Current system user = $user) //você pode armazenar os usuários em uma tabela de banco de dados
	//dar acesso a alguns recursos
End if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### Protecção do acesso

#### Privilégios

On a machine that is shared by several users, you can install the 4D application in a folder and give appropriate user access privileges to the folder at the OS level.

#### Encriptação de dados

Si desea proteger el acceso a los datos de la aplicación, se recomienda [encriptar los datos](MSC/encrypt.md) y proveer la clave de encriptación al usuario o usuarios autorizados.
