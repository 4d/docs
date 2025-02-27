---
id: editing
title: Gestão de usuários e grupos 4D
---

4D fornece aos usuários privilégios de acesso comuns e certos poderes. Quando o usuário e sistema de grupos tiver sido iniciado, esses privilégios começam a funcionar.

## Usuários e grupos em projectos

Em aplicações projecto (ficheiros .4DProject ou .4dz), os utilizadores e grupos 4D podem ser configurados tanto em ambientes usuário único como multi-usuário. Sin embargo, **el control de acceso** sólo es efectivo con 4D Server. A tabela abaixo lista as principais funcionalidades de usuários e grupos e sua disponibilidade:

|                                                            | 4D (usuário único)                   | 4D Server |
| ---------------------------------------------------------- | ------------------------------------------------------- | --------- |
| Adicionar/editar usuários e grupos                         | sim                                                     | sim       |
| Atribuir acesso de usuário/grupo a servidores              | sim                                                     | sim       |
| Identificação de usuário                                   | não (todos os usuários são Designer) | sim       |
| Controle de acesso quando o Designer for atribuído a senha | não (todos os acessos são Designer)  | sim       |

> Para obtener información sobre la identificación de usuarios y el control de acceso en los despliegues monopuesto, consulte [este párrafo](overview.md#access-control-in-single-user-applications).

## Designer e Administrador

El usuario más poderoso se llama el **Diseñador**. Nenhum aspecto do banco de dados é fechado ao Designer.
O Designer pode:

- acessar todos os servidores de banco de dados sem restrição,
- criar usuários e grupos,
- atribuir privilégios de acesso a grupos,
- acessar o ambiente Design.
  Em ambiente monousuário, direitos de acesso de Designer são sempre usados.
  Em ambiente cliente/servidor, atribuir uma senha ao Designer ativa a exibição do diálogo de login de usuário 4D.  Acesso ao ambiente Design é apenas leitura.

Después del Diseñador, el siguiente usuario más poderoso es el **Administrador**, al que se le suelen encomendar las tareas de gestión del sistema de acceso y las funciones de administración.

O Administrador não pode:

- criar usuários e grupos,
- acessar ao monitor e janela de Administração 4D Server
- acessar a janela MSC para gerenciar cópias de segurança, restaurações ou servidor.

O administrador pode:

- editar o usuário Designer
- como padrão, acessar as partes protegidas do banco de dados. O Administrador não pode acessar o modo Design se for restringido. In particular, the Administrator cannot access to the Design mode if it is restricted. O administrador é inscrito em todo novo grupo, mas é possível remover o nome do Administrador de qualquer grupo.

Tanto o Designer quanto o Administrador estão disponíveis como padrão em todos os bancos de dados. En la [caja de diálogo de gestión de usuarios](#users-and-groups-editor), los iconos del Diseñador y del Administrador se muestran en rojo y verde respectivamente:

- Ícone Designer: ![](../assets/en/Users/iconDesigner.png)
- Ícone Administrador: ![](../assets/en/Users/iconAdmin.png)

Pode renomear os usuários Designer e Administardor. Na linguagem, o ID de Designer é sempre 1 e a ID de Administrador é sempre 2.

O Designer e Administrador podem cada um criar até 16.000 grupos e 16 mil usuários.

## Editor de grupos

O editor de usuários está na Barra de Ferramentas de 4D.

![](../assets/en/Users/editor.png)

> El editor de usuarios y grupos se puede mostrar en tiempo de ejecución utilizando el comando [EDIT ACCESS](https://doc.4d.com/4dv19R/help/command/en/page281.html).
> Toda la configuración de usuarios y grupos también puede editarse durante la ejecución de la aplicación utilizando los comandos del lenguaje 4D del tema `Usuarios y Grupos`.

### Adicionar e modificar usuários

Para usar o editor de usuários para criar contas de usuário, estabeleça as propriedades e atribua aos vários grupos.

Para adicionar um usuário da Barra de Ferramentas:

1. Seleccione **Caja de herramientas > Usuarios** en el menú **Diseño** o haga clic en el botón **Caja de herramientas** de la barra de herramientas de 4D.
   4D exibe o editor de usuários.

La lista de usuarios muestra todos los usuarios, incluyendo el [Diseñador y el Administrador](#designer-and-administrator).

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of users.
   OR Right-click in the list of users and choose **Add** or **Duplicate** in the context menu.

> El comando **Duplicar** se puede utilizar para crear varios usuarios que tengan las mismas características rápidamente.

4D adiciona um novo usuário para a lista, chamado "Novo usuárioX" como padrão.

3. Digite o nome de usuário.
   Enter the user name. Puede renombrar un usuario en cualquier momento utilizando el comando **Renombrar** del menú contextual, o utilizando los atajos Alt+clic (Windows) u Opción+clic (macOS), o haciendo dos veces clic en el nombre que quiera cambiar.

4. Para introducir una contraseña del usuario, haga clic en el botón **Editar...** en el área de propiedades del usuario e introduzca la contraseña dos veces en la caja de diálogo.
   Pode usar até 15 caracteres alfanuméricos para a senha. O editor de senhas é sensível a maiúsculas ou minúsculas.

> Los usuarios pueden cambiar su contraseña en cualquier momento según las opciones de la página "Seguridad" de las propiedades de la estructura, o utilizando el comando `CHANGE PASSWORD`.

5. Estabeleça os grupos aos quais o usuário vai pertencer com a tabela "Membro de Grupos".
   Pode adicionar ou remover os usuários selecionados de ou para um grupo marcando a opção correspondente na coluna Membro.

La pertenencia de los usuarios a los distintos grupos también puede definirse por grupos en la página [Grupos](#configuring-access-groups).

### Apagar um usuário

Para eliminar un usuario, selecciónelo y haga clic en el botón de eliminación o utilice el comando **Suprimir** del menú contextual.
![](../assets/en/Users/MinussNew.png)

Usuários deletados não aparecem mais no editor de Usuários. Note que as IDs de usuários deletados são retribuídas quando novas contas de usuário forem criadas.

### Propriedades de usuário

- El campo **Tipo de usuario**: el campo Tipo de usuario contiene "Diseñador", "Administrador" o (para todos los demás usuarios) "Usuario".

- **Método de inicio**: nombre de un método asociado que se ejecutará automáticamente cuando el usuario abra la aplicación (opcional). Esse método pode ser usado por exemplo para carregar as preferências de usuário.

## Editor de usuários

O editor para grupos está na Barra de ferramentas de 4D.

### Grupos de configuração

Pode usar o editor de grupos para estabelecer os elementos que cada grupo conter (usuários ou outros grupos) e distribuir acesso aos plug-ins.

Lembre que se um grupo for criado não pode ser apagado. Se quiser desativar um grupo, precisa remover primeiro todos seus usuários.

Para criar um gurpo:

1. Seleccione **Caja de herramientas > Grupos** en el menú **Diseño** o haga clic en el botón **Caja de herramientas** de la barra de herramientas de 4D luego haga clic en el botón **Grupos**.
   4D exibe a janela de editor de grupos. A lista de grupos exibe todos os grupos do banco de dados.

2. Clique no botão ![](../assets/en/Users/PlussNew.png) localizado abaixo da lista dos grupos.\
   Clique no botão ![](../assets/en/Users/PlussNew.png) localizado abaixo da lista dos grupos.\
   OR\
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> O comando Duplicar pode ser usado para criar vários grupos tendo as mesmas características.

4D adiciona um novo grupo para a lista, chamado "Novo grupoX".

3. Digite o nome do novo grupo.
   O nome de grupo pode ter até 15 caracteres.
   Puede renombrar un grupo en cualquier momento utilizando el comando **Renombrar** del menú contextual, o utilizando los atajos Alt+clic (Windows) u Opción+clic (macOS), o haciendo dos veces clic en el nombre que quiera cambiar.

### Colocar usuários ou grupos dentro de grupos

Pode colocar qualquer usuário ou grupo dentro de um grupo, e pode também colocar um grupo dentro de vários outros grupos. Não é obrigatório colocar um usuário em um grupo.

Para colocar um usuário ou grupo em um grupo, precisa marcar a opção "Membro" para cada usuário ou grupo na área de atribuição de membros:

![](../assets/en/Users/groups.png)

Se marcar o nome de usuário, esse usuário é adicionado ao grupo. Se marcar o nome de um grupo, todos os usuários do grupo serão adicionados ao novo grupo.
O usuário ou grupo afiliado terá então os mesmos privilégios de acesso que os que foram atribuídos ao novo grupo.

A colocação de grupos noutros grupos permite-lhe criar uma hierarquia de usuários. Os usuários de um grupo colocado em outro grupo terão privilégios de acesso de ambos os grupos. Ver "[Un esquema de jerarquía de acceso](#an-access-hierarchy-scheme)" abajo.

Para remover um usuário ou grupo de outro grupo, você só precisa desmarcar a opção correspondente na área de atribuição de membros.

### Atribuição de um grupo a um plug-in ou a um servidor

Você pode atribuir privilégios de grupo a qualquer plug-in instalado no projeto. Isto inclui todos os plug-ins 4D e de terceiros.

A distribuição de acesso ao plug-ins permite que você controle o uso das licenças que você possui para esses plug-ins. Qualquer usuário que não pertence ao grupo de acesso de um plug-in não pode carregar este plug-in.

> Licenças utilizadas permanecem anexadas a contas de usuário 4D no grupo para toda a sessão 4D.

A área "Plug-in" na página de grupos da caixa de ferramentas lista todos os plug-ins carregados pela aplicação 4D. Para dar acesso a um grupo a um plug-in, você precisa simplesmente marcar a opção correspondente.

![](../assets/en/Users/plugins.png)

Las líneas **4D Client Web Server** y **4D Client SOAP Server** permiten controlar la posibilidad de publicación Web y SOAP (Web Services) de cada 4D en modo remoto. Essas licenças são consideradas como licenças de plug-in por 4D Server. Portanto, da mesma forma que para plug-ins, você pode restringir o direito de utilizar essas licenças para um grupo específico de usuários.

### Um esquema de acesso hierárquico

A melhor maneira de garantir a segurança da sua aplicação e fornecer aos usuários diferentes níveis de acesso é usar um esquema de hierarquia de acesso. Os usuários podem ser atribuídos a grupos e grupos apropriados podem ser aninhados para criar uma hierarquia de direitos de acesso. Esta secção discute várias abordagens a esse esquema.

Neste exemplo, um usuário é atribuído a um dos três grupos consoante o seu nível de responsabilidade. Usuários atribuídos ao grupo Accounting são responsáveis pela entrada de dados. Os usuários designados ao grupo Finanças são responsáveis por manter os dados, incluindo atualizações de registros e exclusão de registros desatualizados. Os usuários designados ao grupo geral de gerenciamento são responsáveis por analisar os dados, incluindo a realização de pesquisas e a impressão de relatórios analíticos.

Os grupos são então aninhados para que os privilégios sejam distribuídos corretamente para os usuários de cada grupo.

- The General Management group contains only “high-level” users.
  ![](../assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well.
  ![](../assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well.
  ![](../assets/en/Users/schema3.png)

Você pode decidir quais privilégios de acesso atribuir a cada grupo com base no nível de responsabilidade dos usuários que ele inclui.

Tal sistema hierárquico facilita lembrar para qual grupo um novo usuário deve ser atribuído. Você só tem que atribuir cada usuário para um grupo e usar a hierarquia de grupos para determinar o acesso.

## Atribuir grupos de acesso

Os grupos recebem privilégios de acesso a partes ou recursos específicos da aplicação:

- Acesso ao ambiente Desenho e ao Explorador de execução,
- Servidor HTTP,
- Servidor REST,
- Servidor SQL.

Estes acessos são definidos no diálogo Parâmetros. O exemplo abaixo mostra direitos de acesso ao explorador de Execução e ao Design sendo atribuidos ao grupo "Devs":

![](../assets/en/Users/Access1.png)

También se utilizan grupos para [distribuir las licencias disponibles](#assigning-a-group-to-a-plug-in-or-to-a-server). Esta distribuição é definida no editor Grupos.

## Ficheiro Directory.json

Los usuarios, grupos, así como sus derechos de acceso se almacenan en un archivo específico del proyecto llamado **directory.json**.

Esse arquivo pode ser armazenado nos seguintes locais, dependendo de suas necessidades:

- Se você quiser usar o mesmo diretório para todos os arquivos de dados (ou se você usar um arquivo de dados único), armazene o arquivo **directory.json** na pasta de configurações do usuário, i.e. na pasta "Settings" [no mesmo nível que a pasta "Projeto"](Project/architecture.md#project-folder) (local padrão).
- Si desea utilizar un archivo directorio específico para archivar datos, almacene el archivo **directory.json** en la carpeta["Settings" de la carpeta "Data"](Project/architecture.md#settings). Si un archivo **directory.json** está presente en esta ubicación, tiene prioridad sobre el archivo en la carpeta Settings usuario. Essa configuração personalizada/local de usuários e grupos não será afetada por uma atualização da aplicação.

> To allow for safe changes of passwords and group memberships in a deployed environment, you can include your **directory.json** file in the server application during the build, using the [corresponding build application option](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).
