---
id: quickTour
title: A Quick Tour in ORDA
---

Since ORDA is object-based, using ORDA requires basic knowledge in object programmming.

## Exploring the datastore

The ORDA datastore is automatically based upon a 4D database structure, provided it complies with the [ORDA prerequisites](overview.md#orda-prerequisites).

This example will use the following simple 4D database structure:

![](../assets/en/ORDA/struc.png)

To know what is exposed as the datastore, create a new project method, write the following line:

```code4d
TRACE
```

Execute the method -- it simply calls the debugger window. In the Expression area, double-click to insert an expression and enter `ds`. It returns the datastore object. Deploy the object, you can see that tables and fields are automatically exposed by ORDA as properties of the `ds` object:

![](../assets/en/ORDA/debug1.png)

It means for example that, whenever you need to refer to the city field of the [Company] table, in ORDA you just need to write:

```code4d
ds. Company.city //returns the name of the city
```

> In the ORDA world, a record is an **entity** -- an entity is itself an object. A command that is attached to a specific object is called a **member method**.

> ORDA is case sensitive. `ds.company.city` will not refer to the ds. Company.city attribute.

You have also noticed the extra `hires` property in the ds. Company dataclass. It does not correspond to a field. `hires` is actually the name of the *One to many* relation between Company and Employee:

![](../assets/en/ORDA/struc2s.png) *Name of the relation as defined in the Inspector*

It means that, whenever you need to access the list of employees working for a company, in ORDA you just need to write:

```code4d
ds. Company.hires //returns the list of employees
```

But don't go too fast. Let's see now how to record data in ORDA dataclasses.

## Adding data

In ORDA, you can add a record to a dataclass using the `new()` command.
> In the ORDA world, ds. Company is a **dataclass**. A command that is attached to a specific object is called a **member method**.

```code4d
$entity:=ds. Company.new() //create a new entity reference
//in the Company dataclass  
//and assign it to the $entity variable
```

A new entity object contains a "copy" of all attributes of its parent dataclass, thus you can assign values to them:

```code4d
$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID is automatically filled
```

Right now, the entity only exists in memory. To store it in the data file, you need to save it using the `save()` member method:

```code4d
$status:=$entity.save()
```

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

3. Digite o nome de usuário. Enter the user name. Pode renomear um usuário a qualquer momento usando o comando **Rename** do menu contextual ou usando os atalhos Alt+clique (Windows) ou Opção+clique (macOS), ou ainda clicando duas vezes no nome que quiser mudar.

4. Para digitar uma senha para o usuário, clique o botão **Edit...** na área de propriedades de usuário e digite a senha daus vezes na caixa de diálogo. Pode usar até 15 caracteres alfanuméricos para a senha. O editor de senhas é sensível a maiúsculas ou minúsculas.

> Os usuários podem mudar suas senhas a qualquer momento de acordo com as opções na página "Segurança" das configurações de banco de dados ou usando o comando `CHANGE PASSWORD`.

5. Estabeleça os grupos aos quais o usuário vai pertencer com a tabela "Membro de Grupos". Pode adicionar ou remover os usuários selecionados de ou para um grupo marcando a opção correspondente na coluna Membro.

A adesão do usuário aos diferentes grupos também pode ser estabelecida por grupo na página [Grupos](#configuring-access-groups).

### Apagar um usuário

Para apagar um usuário, selecione-o e clique no botão apagar ou use o comando **Delete** no menu contextual. ![](../assets/en/Users/MinussNew.png)

Usuários deletados não aparecem mais no editor de Usuários. Note que as IDs de usuários deletados são retribuídas quando novas contas de usuário forem criadas.

### Propriedades de usuário

- **Tipo de usuário**: O campo Tipo de usuário/User Kind contém "Designer", "Administrador", ou (Para todos os outros usuários) "Usuário".

- **Método de início Method**: Nome do método associado que será executado automaticamente quando o usuário abrir o banco de dados (opcional). Esse método pode ser usado por exemplo para carregar as preferências de usuário.

## Editor de grupos

O editor para grupos está na Barra de ferramentas de 4D.

### Grupos de configuração

Pode usar o editor de grupos para estabelecer os elementos que cada grupo conter (usuários ou outros grupos) e distribuir acesso aos plug-ins.

Lembre que se um grupo for criado não pode ser apagado. Se quiser desativar um grupo, precisa remover primeiro todos seus usuários.

Para criar um gurpo:

1. Selecione **Tool Box > Grupos** no menu **Design** ou clique no botão **Tool Box** da barra 4D e depois no botão **Grupos**. 4D exibe a janela de editor de grupos. A lista de grupos exibe todos os grupos do banco de dados.

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

You can assign a group privileges to any plug-ins installed in the database. This includes all the 4D plug-ins and any third-party plug-ins.

Distributing access to the plug-ins lets you control the use of the licenses you possess for these plug-ins. Any users that do not belong to the access group of a plug-in cannot load this plug-in.

You can also restrict the use of the 4D Client Web server and SOAP server via the plug-in access area.

The “Plug-in” area on the Groups page of the tool box lists all the plug-ins loaded by the 4D application. To give a group access to a plug-in, you simply need to check the corresponding option.

![](../assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. These licenses are considered as plug-in licenses by 4D Server. Therefore, in the same way as for plug-ins, you can restrict the right to use these licenses to a specific group of users.

### An access hierarchy scheme

The best way to ensure the security of your database and provide users with different levels of access is to use an access hierarchy scheme. Users can be assigned to appropriate groups and groups can be nested to create a hierarchy of access rights. This section discusses several approaches to such a scheme.

In this example, a user is assigned to one of three groups depending on their level of responsibility. Users assigned to the Accounting group are responsible for data entry. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.

The groups are then nested so that privileges are correctly distributed to the users of each group.

- The General Management group contains only “high-level” users. ![](../assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well. ![](../assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well. ![](../assets/en/Users/schema3.png)

You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.

Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.
