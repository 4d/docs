---
id: client-server
title: Página Cliente/Servidor
---

As páginas Cliente-servidor agrupam parâmetros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configurações só são levadas em conta quando o banco de dados é usado no modo remoto.

## Página Opções rede

### Rede

#### Publicar a base de dados no arranque

Essa opção permite que você indique se o banco de dados do 4D Server aparecerá ou não na lista de bancos de dados publicados.

- Cuando esta opción está marcada (por defecto), la base de datos se hace pública y aparece en la lista de bases de datos publicadas (pestaña**Disponible**).
- Quando a opção não estiver marcada, o banco de dados não será tornado público e não aparecerá na lista de bancos de dados publicados. Para conectarse, los usuarios deben introducir manualmente la dirección de la base de datos en la pestaña **Personalizada** de la caja de diálogo de conexión.

:::note

Se você modificar esse parâmetro, deverá reiniciar o banco de dados do servidor para que ele seja levado em consideração.

:::

#### Nome da publicação

This option lets you change the publication name of a 4D Server database, *i.e.*, the name displayed on the dynamic **Available** tab of the connection dialog box (see the [Opening a remote project](../Desktop/clientServer/md#opening-a-remote-project) paragraph). Por padrão, 4D Server usa o nome do arquivo de projeto. Pode introduzir qualquer nome personalizado que pretenda.

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
- **Servidor de aplicaciones**: 19813 por defecto (puede modificarse a través de la página "Cliente-Servidor/Configuración" de las Preferencias, ver arriba).
- **Servidor DB4D** (servidor de base de datos): 19814 por defecto. This port number cannot be modified directly but it always consists of the application server port number + 1.\
  When a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\
  Note that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.

#### Autenticação do usuário com o servidor de domínio

Esta opción le permite implementar las funcionalidades SSO (*Single Sign On*) en su base de datos 4D Server en Windows. Quando você marca essa opção, 4D se conecta de forma transparente ao Active Directory do servidor de domínio do Windows e obtém os tokens de autenticação disponíveis. This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html) section.

#### Service Principal Name

Quando o Single Sign On (SSO) estiver ativado (veja acima), você deverá preencher esse campo se quiser usar o Kerberos como protocolo de autenticação. This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html) section.

#### Camada de rede

Esta caja desplegable contiene 3 opciones de capa de red a elegir entre: **legacy**, **ServerNet** y **QUIC** (sólo en modo proyecto), que se utilizan para manejar las comunicaciones entre 4D Server y las máquinas 4D remotas (clientes).

- **Legal**: esta antigua capa de red "Legal" sigue siendo soportada para garantizar la compatibilidad de las bases de datos creadas antes de la v15. Esta capa de red también puede habilitarse por programación utilizando el comando [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html).
- **ServerNet** (by default): Enables the ServerNet network layer on the server (available since 4D v15).
- **QUIC** (disponible solo en modo proyecto): activa la capa de red QUIC en el servidor.

  **Notas**:

  - Al seleccionar esta opción, se anula la opción Utilizar capa de red heredada en caso de que se haya definido mediante el comando [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html).
  - Puede saber si una aplicación 4D se está ejecutando con una capa de red QUIC utilizando el comando [Get application info](https://doc.4d.com/4Dv20/help/command/page1599.html).
  - Como o QUIC usa o protocolo UDP, certifique-se de que o UDP seja permitido em suas configurações de segurança de rede.
  - O QUIC liga-se automaticamente à porta 19813 tanto para o servidor de aplicações como para o servidor DB4D.
  - Quando a opção de camada QUIC é selecionada:
    - Uma mensagem beta e um ícone de alerta são exibidos perto do seletor.
    - [los parámetros del tiempo de espera de las conexiones cliente-servidor](#Client-Server-Connections-Timeout) están ocultos
    - La casilla de verificación [Encriptar comunicación Cliente-Servidor](#Encrypt-Client-Server-Communications) está oculta (las comunicaciones QUIC son siempre en TLS, sea cual sea su modo seguro).
  - **Compatibilidad**: necesita desplegar sus aplicaciones cliente/servidor con 4D v20 o superior antes de cambiar a la capa de red QUIC.

:::note

No caso de uma modificação, você precisa reiniciar o aplicativo para que a alteração seja levada em conta. Todos os aplicativos clientes que foram conectados também devem ser reiniciados para poderem se conectar à nova camada de rede.

:::

#### Tempo para desconectar cliente-servidor

Esse dispositivo é usado para definir o tempo limite (período de inatividade além do qual a conexão é fechada) entre o 4D Server e as máquinas clientes que se conectam a ele. A opção Ilimitado remove o tempo limite. Quando essa opção é selecionada, o controle de atividade do cliente é eliminado.

Quando um tempo limite for selecionado, o servidor fechará a conexão de um cliente se não receber nenhuma solicitação dele durante o tempo limite especificado.

### Comunicação cliente-servidor

#### Registrar clientes na inicialização para Execute On Client

Quando essa opção estiver marcada, todas as máquinas remotas 4D conectando à base de dados podem executar os métodos remotamente. Este mecanismo se detalla en la sección [Procedimientos almacenados en las máquinas cliente](https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html).

#### Encriptar as comunicações cliente-servidor

Essa opção permite que você ative o modo seguro para comunicações entre a máquina do servidor e as máquinas remotas 4D. Esta opción se detalla en la sección [Cifrar las de conexiones cliente/servidor](https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html).

#### Atualizar a pasta Resources durante uma sessão

This setting can be used to globally set the updating mode for the local instance of the **Resources** folder on the connected 4D machines when the **Resources** folder of the database is modified during the session (the **Resources** folder is automatically synchronized on the remote machine each time a session is opened). Estão disponíveis três parâmetros:

- **Nunca**: la carpeta local **Resources** no se actualiza durante la sesión. A notificação enviada pelo servidor é ignorada. La carpeta **Resources** local puede actualizarse manualmente mediante el comando **Update Local Resources** del menú de acción (ver [Uso del explorador de recursos](https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html)).
- **Siempre**: la sincronización de la carpeta local **Resources** se realiza automáticamente durante la sesión cada vez que el servidor envía una notificación.
- **Preguntar**: cuando la notificación es enviada por el servidor, se muestra una caja de diálogo en las máquinas cliente, indicando la modificación. The user can then accept or refuse the synchronization of the local **Resources** folder.\
  The **Resources** folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Mecanismos automáticos ou manuais podem ser usados para notificar cada cliente quando o conteúdo dessa pasta tiver sido modificado. Para más información, consulte la sección [Gestión de la carpeta Resources](https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html).

## Página Configuração IP

### Tabela de configuração Autorização-Rejeição

Essa tabela permite definir regras de controle de acesso para o banco de dados, dependendo dos endereços IP da máquina remota 4D. Essa opção permite reforçar a segurança, por exemplo, para aplicativos estratégicos.

> Esta tabela de configuração não controla as ligações Web.

O comportamento da tabela de configuração é o seguinte:

- A coluna "Allow-Deny" permite selecionar o tipo de regra a ser aplicada (Allow ou Deny) usando um menu pop-up. Para adicionar uma regra, clique no botão Adicionar. Aparece uma nova linha na tabela. El botón **Borrar** permite eliminar la línea actual.
- A coluna "IP Address" (Endereço IP) permite definir o(s) endereço(s) IP afetado(s) pela regra. Para especificar um endereço, clique na coluna e digite o endereço da seguinte forma: 123.45.67.89 (formato IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Você pode usar um caractere \* (asterisco) para especificar endereços do tipo "começa com". Por exemplo, 192.168.\* indica todos os endereços que começam com 192.168.
- A aplicação das regras é baseada na ordem de exibição da tabela. Se duas regras forem contraditórias, a prioridade será dada à regra localizada na parte mais alta da tabela. Você pode reordenar as linhas modificando a classificação atual (clique no cabeçalho da coluna para alternar a direção da classificação). Você também pode mover as linhas usando o recurso de arrastar e soltar.
- Por motivos de segurança, somente os endereços que realmente correspondem a uma regra terão permissão para se conectar. Em outras palavras, se a tabela contiver apenas uma ou mais regras Deny, todos os endereços serão recusados porque nenhum corresponderá a pelo menos uma regra. Se você quiser negar apenas determinados endereços (e permitir outros), adicione uma regra Allow \* no final da tabela. Por exemplo:
  - Negar 192.168.\* (negar todos os endereços que comecem por 192.168)
  - Autorizar \* (e autorizar outros)

Por padrão, nenhuma restrição de conexão é aplicada pelo 4D Server: a primeira linha da tabela contém o rótulo Allow e o caractere \* (todos os endereços).
