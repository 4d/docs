---
id: overview
title: Descrição geral do controlo de acesso
---

Se mais de uma pessoa usar uma aplicação, que geralmente é o caso em arquitetura cliente-servidor ou interfaces Web, você precisa controlar o acesso ou fornecer diferentes recursos, conforme os usuários conectados. É também essencial garantir a segurança de dados sensíveis, mesmo em aplicações usuário único.

A estratégia de controle de acesso 4D depende da configuração de sua implementação:

- em aplicações multi-usuário, pode confiar nos usuários e grupos 4D,
- em aplicações de usuário único, o acesso do usuário é controlado por meio da sessão do sistema, usando comandos como [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).




## Controle de acesso em aplicativos multiusuário

Aplicações multi-usuário são implementadas com 4D Server. Incluem aplicações cliente-servidor, Web ou REST.

Em aplicações multiusuário, o controle de acesso é feito através de [usuários e grupos 4D](handling_users_groups.md). Você cria usuários, atribuir senhas, criar grupos de acesso que tenham diferentes níveis de privilégios na aplicação.

O sistema de controle de acesso por senha 4D é iniciado com 4D Server, [atribuindo uma senha ao usuário Designer](handling_users_groups.md#designer-and-administrator). Até você dar uma senha ao Designer, todo o acesso da aplicação será feito com os direitos de acesso do Designer mesmo que você tenha [configurado usuários e grupos](handling_users_groups.md) (quando o aplicativo abrir, nenhum ID é necessária). Qualquer parte da aplicação pode ser aberta.

Quando uma senha for estabelecida para o Designer, todos os privilégios de acesso têm efeito. Para se conectar à aplicação ou a um servidor [protegido com acesso](handling_users_groups.md#assigning-group-access), os usuários remotos devem informar login/senha.

Para desativar o sistema de acesso a senhas, precisa remover a senha Designer.


## Controlo de acesso em aplicações usuário único



As aplicações usuário único são aplicações de desktop, implantados com 4D ou mesclados com 4D Volume License. Em aplicações únicas, todos os usuários que abrem à aplicação são [Designers](handling_users_groups.md#designer-and-administrator), eles têm todos os privilégios e seu nome é "Designer". Controle de Acesso não é baseado em usuários 4D e grupos, mas em **sessões usuários**.

### Identificação de usuário

Para identificar o usuário atual em um aplicativo 4D de usuário único, você pode contar com o comando [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html), que retorna o usuário que abriu a sessão do sistema. Assim, a autenticação do usuário é delegada ao nível do SO.

Você pode então permitir ou negar acesso em sua aplicação usando códigos, tais como:

```4d
If(Current system user = $user) //pode armazenar usuários em uma tabela de database
    // dá acesso a funcionalidades End if
```

Se quiser usar o nome de usuário do sistema em 4D em vez de "Desenhador" (por exemplo, em arquivos de registro), é possível chamar o comando [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html), por exemplo:

```4d
SET USER ALIAS(Current system user)
```

### Protecção do acesso

#### Privilégios

Em uma máquina que é compartilhada por vários usuários Você pode instalar o aplicativo 4D em uma pasta e dar privilégios de acesso ao usuário para a pasta no nível do SO

#### Encriptação de dados

Se você deseja proteger o acesso aos dados do aplicativo, recomendamos [criptografar dados](MSC/encrypt.md) e fornecer a chave de criptografia do(s) usuário(s) autorizado(s). 