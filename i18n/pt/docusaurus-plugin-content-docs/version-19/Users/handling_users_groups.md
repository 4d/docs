---
id: editing
title: Gestão de usuários e grupos 4D
---


4D fornece aos usuários privilégios de acesso comuns e certos poderes. Quando o usuário e sistema de grupos tiver sido iniciado, esses privilégios começam a funcionar.

## Designer e Administrador

O usuário mais poderoso é chamado **Designer**. No aspect of the application is closed to the Designer. O Designer pode:

- access all application servers without restriction,
- criar usuários e grupos,
- atribuir privilégios de acesso a grupos,
- acessar o ambiente Design. Em ambiente monousuário, direitos de acesso de Designer são sempre usados. Em ambiente cliente/servidor, atribuir uma senha ao Designer ativa a exibição do diálogo de login de usuário 4D.  Acesso ao ambiente Design é apenas leitura.

Depois do Designer, o usuário mais poderoso é o **Administrador**, ao qual é geralmente dada a tarefa de gerenciamento de acesso ao sistema e administração de funcionalidades.

O administrador pode:

- criar usuários e grupos,
- acessar ao monitor e janela de Administração 4D Server
- acessar a janela MSC para gerenciar cópias de segurança, restaurações ou servidor.

O Administrador não pode:

- editar o usuário Designer
- by default, access to protected parts of the application. O Administrador não pode acessar o modo Design se for restringido. O Administrador não pode acessar o modo Design se for restringido. O administrador é inscrito em todo novo grupo, mas é possível remover o nome do Administrador de qualquer grupo.

Both the Designer and Administrator are available by default in all applications. No diálogo de [gestão de usuários](#users-and-groups-editor), os ícones de Designer e Administrator são exibidos em verde e vermelho, respectivamentes:

- Ícone Designer: ![](../assets/en/Users/iconDesigner.png)
- Ícone de Administrador: ![](../assets/en/Users/iconAdmin.png)

Pode renomear os usuários Designer e Administardor. Na linguagem, o ID de Designer é sempre 1 e a ID de Administrador é sempre 2.

O Designer e Administrador podem cada um criar até 16.000 grupos e 16 mil usuários.

## Editor de usuários

O editor de usuários está na Barra de Ferramentas de 4D.

![](../assets/en/Users/editor.png)

### Adicionar e modificar usuários

Para usar o editor de usuários para criar contas de usuário, estabeleça as propriedades e atribua aos vários grupos.

Para adicionar um usuário da Barra de Ferramentas:

1. Selecione **Tool Box > Users** do menu**Design** ou clique no botão **Tool Box** da barra 4D. 4D exibe o editor de usuários.

A lista de usuários exibe todos os usuários, incluindo o[Designer and the Administrator](#designer-and-administrator).

2. Clique no botão ![](../assets/en/Users/PlussNew.png) que está abaixo da lista de usuários. OR Right-click in the list of users and choose **Add** or **Duplicate** in the context menu.

> O comando **Duplicate** pode ser usado para criar rapidamente vários usuários com as mesmas características.

4D adiciona um novo usuário para a lista, chamado "Novo usuárioX" como padrão.

3. Digite o nome de usuário. Digite o nome de usuário. Pode renomear um usuário a qualquer momento usando o comando **Rename** do menu contextual ou usando os atalhos Alt+clique (Windows) ou Opção+clique (macOS), ou ainda clicando duas vezes no nome que quiser mudar.

4. Para digitar uma senha para o usuário, clique o botão **Edit...** na área de propriedades de usuário e digite a senha daus vezes na caixa de diálogo. Pode usar até 15 caracteres alfanuméricos para a senha. O editor de senhas é sensível a maiúsculas ou minúsculas.

> Users can change their password at any time according to the options in the "Security" page of the structure settings, or using the `CHANGE PASSWORD` command.

5. Estabeleça os grupos aos quais o usuário vai pertencer com a tabela "Membro de Grupos". Pode adicionar ou remover os usuários selecionados de ou para um grupo marcando a opção correspondente na coluna Membro.

A adesão do usuário aos diferentes grupos também pode ser estabelecida por grupo na página [Grupos](#configuring-access-groups).

### Apagar um usuário

Para apagar um usuário, selecione-o e clique no botão apagar ou use o comando **Delete** no menu contextual. ![](../assets/en/Users/MinussNew.png)

Usuários deletados não aparecem mais no editor de Usuários. Note que as IDs de usuários deletados são retribuídas quando novas contas de usuário forem criadas.

### Propriedades de usuário

- **Tipo de usuário**: O campo Tipo de usuário/User Kind contém "Designer", "Administrador", ou (Para todos os outros usuários) "Usuário".

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the application (optional). Esse método pode ser usado por exemplo para carregar as preferências de usuário.

## Editor de grupos

O editor para grupos está na Barra de ferramentas de 4D.

### Grupos de configuração

Pode usar o editor de grupos para estabelecer os elementos que cada grupo conter (usuários ou outros grupos) e distribuir acesso aos plug-ins.

Lembre que se um grupo for criado não pode ser apagado. Se quiser desativar um grupo, precisa remover primeiro todos seus usuários.

Para criar um gurpo:

1. Selecione **Tool Box > Grupos** no menu **Design** ou clique no botão **Tool Box** da barra 4D e depois no botão **Grupos**. 4D exibe a janela de editor de grupos. The list of groups displays all the groups of the application project.

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of groups.  
   OR  
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> O comando Dupplicate/Duplicar pode ser usado para criar vários grupos tendo as mesmas características.

4D adiciona um novo grupo para a lista, chamado "Novo grupoX".

3. Digite o nome do novo grupo. O nome de grupo pode ter até 15 caracteres. The group name can be up to 15 characters long. You can rename a group at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

### Colocar usuários ou grupos dentro de grupos

Pode colocar qualquer usuário ou grupo dentro de um grupo, e pode também colocar um grupo dentro de vários outros grupos. Não é obrigatório colocar um usuário em um grupo.

Para colocar um usuário ou grupo em um grupo, precisa marcar a opção "Membro" para cada usuário ou grupo na área de atribuição de membros:

![](../assets/en/Users/groups.png)

Se marcar o nome de usuário, esse usuário é adicionado ao grupo. Se marcar o nome de um grupo, todos os usuários do grupo serão adicionados ao novo grupo. The affiliated user or group will then have the same access privileges as those assigned to the new group.

Placing groups into other groups lets you create a user hierarchy. The users of a group placed in another group will have the access privileges of both groups. See "[An access hierarchy scheme](#an-access-hierarchy-scheme)" below.

To remove a user or group from another group, you just need to deselect the corresponding option in the member attribution area.

### Assigning a group to a plug-in or to a server

You can assign a group privileges to any plug-ins installed in the project. This includes all the 4D plug-ins and any third-party plug-ins.

Distributing access to the plug-ins lets you control the use of the licenses you possess for these plug-ins. Any users that do not belong to the access group of a plug-in cannot load this plug-in.

> Used licenses remain attached to 4D user accounts in the group for the whole 4D session.

The “Plug-in” area on the Groups page of the tool box lists all the plug-ins loaded by the 4D application. To give a group access to a plug-in, you simply need to check the corresponding option.

![](../assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. These licenses are considered as plug-in licenses by 4D Server. Therefore, in the same way as for plug-ins, you can restrict the right to use these licenses to a specific group of users.

### An access hierarchy scheme

The best way to ensure the security of your application and provide users with different levels of access is to use an access hierarchy scheme. Users can be assigned to appropriate groups and groups can be nested to create a hierarchy of access rights. This section discusses several approaches to such a scheme.

In this example, a user is assigned to one of three groups depending on their level of responsibility. Users assigned to the Accounting group are responsible for data entry. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.

The groups are then nested so that privileges are correctly distributed to the users of each group.

- The General Management group contains only “high-level” users. ![](../assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well. ![](../assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well. ![](../assets/en/Users/schema3.png)

You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.

Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.
