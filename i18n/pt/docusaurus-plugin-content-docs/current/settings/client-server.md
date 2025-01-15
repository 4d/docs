---
id: client-server
title: Página Cliente/Servidor
---

As páginas Cliente-servidor agrupam parâmetros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configurações só são levadas em conta quando o banco de dados é usado no modo remoto.

## Página Opções rede

### Rede

#### Publicar a base de dados no arranque

Essa opção permite que você indique se o banco de dados do 4D Server aparecerá ou não na lista de bancos de dados publicados.

- When this option is checked (default), the database is made public and appears in the list of published databases (**Available** tab).
- Quando a opção não estiver marcada, o banco de dados não será tornado público e não aparecerá na lista de bancos de dados publicados. To connect, users must manually enter the address of the database on the **Custom** tab of the connection dialog box.

:::note

Se você modificar esse parâmetro, deverá reiniciar o banco de dados do servidor para que ele seja levado em consideração.

:::

#### Nome da publicação

This option lets you change the publication name of a 4D Server database, _i.e._, the name displayed on the dynamic **Available** tab of the connection dialog box (see the [Opening a remote project](../Desktop/clientServer.md#opening-a-remote-project) paragraph). Por padrão, 4D Server usa o nome do arquivo de projeto. Pode introduzir qualquer nome personalizado que pretenda.

:::note

Esse parâmetro não é levado em conta em aplicativos cliente-servidor personalizados. Em teoria, o aplicativo cliente se conecta diretamente ao aplicativo servidor, sem passar pela caixa de diálogo de conexão. No entanto, em caso de erro, essa caixa de diálogo pode ser exibida; nesse caso, o nome de publicação do aplicativo do servidor é o nome do projeto compilado.

:::

#### Número do porto

Essa opção permite mudar o número da porta TCP na qual o 4D Server publica o banco de dados. Essas informações são armazenadas no projeto e em cada computador cliente. Por padrão, o número da porta TCP usada pelo 4D Server e 4D no modo remoto é 19813.

A personalização desse valor é necessária quando se deseja usar vários aplicativos 4D na mesma máquina; nesse caso, é necessário especificar um número de porta diferente para cada aplicativo.
Quando você modifica esse valor no 4D Server ou no 4D, ele é automaticamente transmitido a todas as máquinas 4D conectadas ao banco de dados.

Para actualizar las otras máquinas clientes que no estén conectadas, basta con introducir el nuevo número de puerto (precedido de dos puntos) después de la dirección IP del equipo servidor en la pestaña **Personalizado** de la caja de diálogo de conexión  Por exemplo, se o novo número de porta é 19888:

![](../assets/en/settings/client-server-network.png)

> Somente os bancos de dados publicados na mesma porta que a definida no cliente 4D são visíveis na página de publicação dinâmica TCP/IP.

#### 4D Server e números de portas

O 4D Server usa três portas TCP para comunicações entre servidores internos e clientes:

- **SQL Server**: 19812 por defecto (puede modificarse a través de la página "SQL/Configuración" de las Preferencias).
- **Application Server**: 19813 by default (can be modified via the "Client-Server/Configuration" page of the Preferences, see above).
- **DB4D Server** (servidor de banco de dados): 19814 por padrão. This port number cannot be modified directly but it always consists of the application server port number + 1.\
  When a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\
  Note that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.
- [**Depurador remoto**](../Debugging/debugging-remote.md): 19815 por padrão. This port number cannot be modified directly but it always consists of the application server port number + 2.

#### Autenticação do usuário com o servidor de domínio

Esta opción le permite implementar las funcionalidades SSO (_Single Sign On_) en su base de datos 4D Server en Windows. Quando você marca essa opção, 4D se conecta de forma transparente ao Active Directory do servidor de domínio do Windows e obtém os tokens de autenticação disponíveis. This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html) section.

#### Service Principal Name

Quando o Single Sign On (SSO) estiver ativado (veja acima), você deverá preencher esse campo se quiser usar o Kerberos como protocolo de autenticação. This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html) section.

#### Camada de rede

This drop-down box contains 3 network layer options to choose between: **legacy**, **ServerNet** and **QUIC** (only in project mode), which are used to handle communications between 4D Server and remote 4D machines (clients).

- **Legacy**: This former "legacy" network layer is still supported in order to ensure compatibility for databases created prior to v15. This network layer can also be enabled by programming using the [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html) command.
- **ServerNet** (por padrão): ativa a camada de rede ServerNet no servidor (disponível desde 4D v15).
- **QUIC** (disponible solo en modo proyecto): activa la capa de red QUIC en el servidor.

  **Notas**:

  - Al seleccionar esta opción, se anula la opción Utilizar capa de red heredada en caso de que se haya definido mediante el comando [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html).
  - You can know if a 4D application is running with a QUIC network layer using the [Application info](https://doc.4d.com/4Dv20/help/command/page1599.html) command.
  - Como o QUIC usa o protocolo UDP, certifique-se de que o UDP seja permitido em suas configurações de segurança de rede.
  - O QUIC liga-se automaticamente à porta 19813 tanto para o servidor de aplicações como para o servidor DB4D.
  - Quando a opção de camada QUIC é selecionada:
    - Uma mensagem beta e um ícone de alerta são exibidos perto do seletor.
    - [As configurações de tempo limite das conexões cliente-servidor](#Client-Server-Connections-Timeout) estão ocultas
    - The [Encrypt Client-Server communication checkbox](#Encrypt-Client-Server-Communications) is hidden (QUIC communications are always in TLS, whatever your secured mode is.).
  - **Compatibility**: You need to deploy your client/server applications with 4D v20 or higher before switching to the QUIC network layer.

:::note

No caso de uma modificação, você precisa reiniciar o aplicativo para que a alteração seja levada em conta. Todos os aplicativos clientes que foram conectados também devem ser reiniciados para poderem se conectar à nova camada de rede.

:::

#### Tempo para desconectar cliente-servidor

Esse dispositivo é usado para definir o tempo limite (período de inatividade além do qual a conexão é fechada) entre o 4D Server e as máquinas clientes que se conectam a ele. A opção Ilimitado remove o tempo limite. Quando essa opção é selecionada, o controle de atividade do cliente é eliminado.

Quando um tempo limite for selecionado, o servidor fechará a conexão de um cliente se não receber nenhuma solicitação dele durante o tempo limite especificado.

### Comunicação cliente-servidor

#### Registrar clientes na inicialização para Execute On Client

Quando essa opção estiver marcada, todas as máquinas remotas 4D conectando à base de dados podem executar os métodos remotamente. This mechanism is detailed in the section [Stored procedures on client machines](https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html).

#### Encriptar as comunicações cliente-servidor

Essa opção permite que você ative o modo seguro para comunicações entre a máquina do servidor e as máquinas remotas 4D. Esta opción se detalla en la sección [Cifrar las de conexiones cliente/servidor](https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html).

#### Atualizar a pasta Resources durante uma sessão

This setting can be used to globally set the updating mode for the local instance of the **Resources** folder on the connected 4D machines when the **Resources** folder of the database is modified during the session (the **Resources** folder is automatically synchronized on the remote machine each time a session is opened). Estão disponíveis três parâmetros:

- **Never**: The local **Resources** folder is not updated during the session. A notificação enviada pelo servidor é ignorada. The local **Resources** folder may be updated manually using the **Update Local Resources** action menu command (see [Using the Resources explorer](https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html)).
- **Always**: The synchronization of the local **Resources** folder is automatically carried out during the session whenever notification is sent by the server.
- **Ask**: When the notification is sent by the server, a dialog box is displayed on the client machines, indicating the modification. The user can then accept or refuse the synchronization of the local **Resources** folder.\
  The **Resources** folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Mecanismos automáticos ou manuais podem ser usados para notificar cada cliente quando o conteúdo dessa pasta tiver sido modificado. For more information, please refer to the [Managing the Resources folder](https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html) section.

## Página Configuração IP

### Tabela de configuração Autorização-Rejeição

Essa tabela permite definir regras de controle de acesso para o banco de dados, dependendo dos endereços IP da máquina remota 4D. Essa opção permite reforçar a segurança, por exemplo, para aplicativos estratégicos.

> Esta tabela de configuração não controla as ligações Web.

O comportamento da tabela de configuração é o seguinte:

- A coluna "Allow-Deny" permite selecionar o tipo de regra a ser aplicada (Allow ou Deny) usando um menu pop-up. Para adicionar uma regra, clique no botão Adicionar. Aparece uma nova linha na tabela. The **Delete** button lets you remove the current row.
- A coluna "IP Address" (Endereço IP) permite definir o(s) endereço(s) IP afetado(s) pela regra. Para especificar um endereço, clique na coluna e digite o endereço da seguinte forma: 123.45.67.89 (formato IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Você pode usar um caractere \* (asterisco) para especificar endereços do tipo "começa com". Por exemplo, 192.168.\* indica todos os endereços que começam com 192.168.
- A aplicação das regras é baseada na ordem de exibição da tabela. Se duas regras forem contraditórias, a prioridade será dada à regra localizada na parte mais alta da tabela. Você pode reordenar as linhas modificando a classificação atual (clique no cabeçalho da coluna para alternar a direção da classificação). Você também pode mover as linhas usando o recurso de arrastar e soltar.
- Por motivos de segurança, somente os endereços que realmente correspondem a uma regra terão permissão para se conectar. Em outras palavras, se a tabela contiver apenas uma ou mais regras Deny, todos os endereços serão recusados porque nenhum corresponderá a pelo menos uma regra. Se você quiser negar apenas determinados endereços (e permitir outros), adicione uma regra Allow \* no final da tabela. Por exemplo:
  - Negar 192.168.\* (negar todos os endereços que comecem por 192.168)
  - Autorizar \* (e autorizar outros)

Por padrão, nenhuma restrição de conexão é aplicada pelo 4D Server: a primeira linha da tabela contém o rótulo Allow e o caractere \* (todos os endereços).
