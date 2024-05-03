---
id: editing
title: Gestão de usuários e grupos 4D
---

4D fornece aos usuários privilégios de acesso comuns e certos poderes. Quando o usuário e sistema de grupos tiver sido iniciado, esses privilégios começam a funcionar.

## Usuários e grupos em projectos

Em aplicações projecto (ficheiros .4DProject ou .4dz), os utilizadores e grupos 4D podem ser configurados tanto em ambientes usuário único como multi-usuário. However, **access control** is only effective with 4D Server. A tabela abaixo lista as principais funcionalidades de usuários e grupos e sua disponibilidade:

|                                                            | 4D (usuário único)                   | 4D Server |
| ---------------------------------------------------------- | ------------------------------------------------------- | --------- |
| Adicionar/editar usuários e grupos                         | sim                                                     | sim       |
| Atribuir acesso de usuário/grupo a servidores              | sim                                                     | sim       |
| Identificação de usuário                                   | não (todos os usuários são Designer) | sim       |
| Controle de acesso quando o Designer for atribuído a senha | não (todos os acessos são Designer)  | sim       |

> For information about user identification and access control in single-user deployments, see [this paragraph](overview.md#access-control-in-single-user-applications).

## Designer e Administrador

The most powerful user is named **Designer**. Nenhum aspecto do banco de dados é fechado ao Designer.
O Designer pode:

- acessar todos os servidores de banco de dados sem restrição,
- criar usuários e grupos,
- atribuir privilégios de acesso a grupos,
- acessar o ambiente Design.
  Em ambiente monousuário, direitos de acesso de Designer são sempre usados.
  Em ambiente cliente/servidor, atribuir uma senha ao Designer ativa a exibição do diálogo de login de usuário 4D.  Acesso ao ambiente Design é apenas leitura.

After the Designer, the next most powerful user is the **Administrator**, who is usually given the tasks of managing the access system and administration features.

O Administrador não pode:

- criar usuários e grupos,
- acessar ao monitor e janela de Administração 4D Server
- acessar a janela MSC para gerenciar cópias de segurança, restaurações ou servidor.

O administrador pode:

- editar o usuário Designer
- como padrão, acessar as partes protegidas do banco de dados. O Administrador não pode acessar o modo Design se for restringido. In particular, the Administrator cannot access to the Design mode if it is restricted. O administrador é inscrito em todo novo grupo, mas é possível remover o nome do Administrador de qualquer grupo.

Tanto o Designer quanto o Administrador estão disponíveis como padrão em todos os bancos de dados. In the [user management dialog box](#users-and-groups-editor), the icons of the Designer and Administrator are displayed in red and green respectively:

- Designer icon: ![](../assets/en/Users/iconDesigner.png)
- Administrator icon: ![](../assets/en/Users/iconAdmin.png)

Pode renomear os usuários Designer e Administardor. Na linguagem, o ID de Designer é sempre 1 e a ID de Administrador é sempre 2.

O Designer e Administrador podem cada um criar até 16.000 grupos e 16 mil usuários.

## Editor de grupos

O editor de usuários está na Barra de Ferramentas de 4D.

![](../assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4dv19R/help/command/en/page281.html) command.
> The whole users and groups configuration can also be edited during application execution using 4D language commands of the `Users and Groups` theme.

### Adicionar e modificar usuários

Para usar o editor de usuários para criar contas de usuário, estabeleça as propriedades e atribua aos vários grupos.

Para adicionar um usuário da Barra de Ferramentas:

1. Select **Tool Box > Users** from the **Design** menu or click on the **Tool Box** button of the 4D toolbar.
   4D exibe o editor de usuários.

The list of users displays all the users, including the [Designer and the Administrator](#designer-and-administrator).

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of users.
   OR
   Right-click in the list of users and choose **Add** or **Duplicate** in the context menu.

> The **Duplicate** command can be used to create several users having the same characteristics quickly.

4D adiciona um novo usuário para a lista, chamado "Novo usuárioX" como padrão.

3. Digite o nome de usuário.
   Enter the user name. You can rename a user at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

4. To enter a password for the user, click the **Edit...** button in the user properties area and enter the password twice in the dialog box.
   Pode usar até 15 caracteres alfanuméricos para a senha. O editor de senhas é sensível a maiúsculas ou minúsculas.

> Users can change their password at any time according to the options in the "Security" page of the structure settings, or using the `CHANGE PASSWORD` command.

5. Estabeleça os grupos aos quais o usuário vai pertencer com a tabela "Membro de Grupos".
   Pode adicionar ou remover os usuários selecionados de ou para um grupo marcando a opção correspondente na coluna Membro.

The membership of users to different groups can also be set by group on the [Groups page](#configuring-access-groups).

### Apagar um usuário

To delete a user, select it then click the deletion button or use the **Delete** command of the context menu.
![](../assets/en/Users/MinussNew.png)

Usuários deletados não aparecem mais no editor de Usuários. Note que as IDs de usuários deletados são retribuídas quando novas contas de usuário forem criadas.

### Propriedades de usuário

- **User Kind**: The User Kind field contains "Designer", "Administrator", or (for all other users) "User".

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the application (optional). Esse método pode ser usado por exemplo para carregar as preferências de usuário.

## Editor de usuários

O editor para grupos está na Barra de ferramentas de 4D.

### Grupos de configuração

Pode usar o editor de grupos para estabelecer os elementos que cada grupo conter (usuários ou outros grupos) e distribuir acesso aos plug-ins.

Lembre que se um grupo for criado não pode ser apagado. Se quiser desativar um grupo, precisa remover primeiro todos seus usuários.

Para criar um gurpo:

1. Select **Tool Box > Groups** in the **Design** menu or click  on the **Tool Box** button of the 4D toolbar then on the **Groups** button.
   4D exibe a janela de editor de grupos. A lista de grupos exibe todos os grupos do banco de dados.

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of groups.\
   OR\
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> O comando Dupplicate/Duplicar pode ser usado para criar vários grupos tendo as mesmas características.

4D adiciona um novo grupo para a lista, chamado "Novo grupoX".

3. Digite o nome do novo grupo.
   O nome de grupo pode ter até 15 caracteres.
   You can rename a group at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

### Colocar usuários ou grupos dentro de grupos

Pode colocar qualquer usuário ou grupo dentro de um grupo, e pode também colocar um grupo dentro de vários outros grupos. Não é obrigatório colocar um usuário em um grupo.

Para colocar um usuário ou grupo em um grupo, precisa marcar a opção "Membro" para cada usuário ou grupo na área de atribuição de membros:

![](../assets/en/Users/groups.png)

Se marcar o nome de usuário, esse usuário é adicionado ao grupo. Se marcar o nome de um grupo, todos os usuários do grupo serão adicionados ao novo grupo.
The affiliated user or group will then have the same access privileges as those assigned to the new group.

A colocação de grupos noutros grupos permite-lhe criar uma hierarquia de usuários. The users of a group placed in another group will have the access privileges of both groups. See "[An access hierarchy scheme](#an-access-hierarchy-scheme)" below.

To remove a user or group from another group, you just need to deselect the corresponding option in the member attribution area.

### Atribuição de um grupo a um plug-in ou a um servidor

You can assign a group privileges to any plug-ins installed in the database. Isto inclui todos os plug-ins 4D e de terceiros.

Distributing access to the plug-ins lets you control the use of the licenses you possess for these plug-ins. Any users that do not belong to the access group of a plug-in cannot load this plug-in.

> Used licenses remain attached to 4D user accounts in the group for the whole 4D session.

The “Plug-in” area on the Groups page of the tool box lists all the plug-ins loaded by the 4D application. To give a group access to a plug-in, you simply need to check the corresponding option.

![](../assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. Essas licenças são consideradas como licenças de plug-in por 4D Server. Therefore, in the same way as for plug-ins, you can restrict the right to use these licenses to a specific group of users.

### Um esquema de acesso hierárquico

The best way to ensure the security of your database and provide users with different levels of access is to use an access hierarchy scheme. Users can be assigned to appropriate groups and groups can be nested to create a hierarchy of access rights. Esta secção discute várias abordagens a esse esquema.

In this example, a user is assigned to one of three groups depending on their level of responsibility. Usuários atribuídos ao grupo Accounting são responsáveis pela entrada de dados. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.

The groups are then nested so that privileges are correctly distributed to the users of each group.

- The General Management group contains only “high-level” users.
  ![](../assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well.
  ![](../assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well.
  ![](../assets/en/Users/schema3.png)

You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.

Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.

## Atribuir grupos de acesso

Groups are assigned access privileges to specific parts or features of the application:

- Acesso ao ambiente Desenho e ao Explorador de execução,
- Servidor HTTP,
- Servidor REST,
- Servidor SQL.

Estes acessos são definidos no diálogo Parâmetros. O exemplo abaixo mostra direitos de acesso ao explorador de Execução e ao Design sendo atribuidos ao grupo "Devs":

![](../assets/en/Users/Access1.png)

You also use groups to [distribute available licenses](#assigning-a-group-to-a-plug-in-or-to-a-server). Esta distribuição é definida no editor Grupos.

## Ficheiro Directory.json

Users, groups, as well as their access rights are stored in a specific project file named **directory.json**.

This file can be stored at the following locations, depending on your needs:

- If you want to use the same directory for all data files (or if you use a single data file), store the **directory.json** file in the user settings folder, i.e. in the "Settings" folder at the [same level as the "Project" folder](Project/architecture.md#project-folder) (default location).
- If you want to use a specific directory file per data file, store the **directory.json** file in the data settings folder, i.e. in the ["Settings" folder of the "Data" folder](Project/architecture.md#settings). If a **directory.json** file is present at this location, it takes priority over the file in the user settings folder. This custom/local Users and Groups configuration will left untouched by an application upgrade.

> To allow for safe changes of passwords and group memberships in a deployed environment, you can include your **directory.json** file in the server application during the build, using the [corresponding build application option](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).
