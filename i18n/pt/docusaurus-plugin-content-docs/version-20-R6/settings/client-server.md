---
id: client-server
title: Página Cliente/Servidor
---

As páginas Cliente-servidor agrupam parâmetros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configurações só são levadas em conta quando o banco de dados é usado no modo remoto.

## Página Opções rede

### Rede

#### Publicar a base de dados no arranque

Essa opção permite que você indique se o banco de dados do 4D Server aparecerá ou não na lista de bancos de dados publicados.

- Quando essa opção está marcada (padrão), o banco de dados é tornado público e aparece na lista de bancos de dados publicados (guia **Disponível**).
- Quando a opção não estiver marcada, o banco de dados não será tornado público e não aparecerá na lista de bancos de dados publicados. Para se conectar, os usuários devem inserir manualmente o endereço do banco de dados na guia **Personalizado** da caixa de diálogo de conexão.

:::note

Se você modificar esse parâmetro, deverá reiniciar o banco de dados do servidor para que ele seja levado em consideração.

:::

#### Nome da publicação

Essa opção permite alterar o nome de publicação de um banco de dados do 4D Server, *ou seja*, o nome exibido na guia dinâmica **Disponível** da caixa de diálogo de conexão (consulte o parágrafo [Abrindo um projeto remoto](../Desktop/clientServer/md#opening-a-remote-project)). Por padrão, 4D Server usa o nome do arquivo de projeto. Pode introduzir qualquer nome personalizado que pretenda.

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

4D Server usa várias portas TCP para comunicações entre servidores internos e clientes:

- **SQL Server**: 19812 por defecto (puede modificarse a través de la página "SQL/Configuración" de las Preferencias).
- **Servidor de aplicações**: 19813 por padrão (pode ser modificado através da página "Servidor/Configuração" das Preferências, veja acima).
- **DB4D Server** (servidor de banco de dados): 19814 por padrão. Esse número de porta não pode ser modificado diretamente, mas sempre consiste no número da porta do servidor de aplicação + 1.\
  Quando um cliente 4D se conecta ao 4D Server, ele usa a porta TCP do servidor de aplicação (19813 ou a porta indicada após os dois pontos ':' no endereço IP mostrado na caixa de diálogo de conexão). A conexão com outros servidores através de suas respectivas portas é então automaticamente; não é mais necessário especificá-los.\
  Note que, no caso de acesso via um roteador ou um firewall, as três portas TCP devem ser abertas explicitamente.
- [**Depurador remoto**](../Debugging/debugging-remote.md): 19815 por padrão. Esse número de porta não pode ser modificado diretamente, mas sempre consiste no número da porta do servidor de aplicativos + 2.

#### Autenticação do usuário com o servidor de domínio

Esta opción le permite implementar las funcionalidades SSO (*Single Sign On*) en su base de datos 4D Server en Windows. Quando você marca essa opção, 4D se conecta de forma transparente ao Active Directory do servidor de domínio do Windows e obtém os tokens de autenticação disponíveis. Essa opção é descrita na seção [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html).

#### Service Principal Name

Quando o Single Sign On (SSO) estiver ativado (veja acima), você deverá preencher esse campo se quiser usar o Kerberos como protocolo de autenticação. Essa opção é descrita na seção [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html).

#### Camada de rede

Essa caixa suspensa contém 3 opções de camada de rede para escolher entre: **legacy**, **ServerNet** e **QUIC** (somente no modo de projeto), usadas para lidar com comunicações entre o 4D Server e máquinas 4D remotas (clientes).

- **Histórico**: essa antiga camada de rede "legado" ainda é mantida para garantir a compatibilidade com bancos de dados criados antes da versão 15. Essa camada de rede também pode ser ativada por programação usando o comando [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html).
- **ServerNet** (por padrão): ativa a camada de rede ServerNet no servidor (disponível desde 4D v15).
- **QUIC** (disponible solo en modo proyecto): activa la capa de red QUIC en el servidor.

  **Notas**:

  - Al seleccionar esta opción, se anula la opción Utilizar capa de red heredada en caso de que se haya definido mediante el comando [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html).
  - Você pode saber se um aplicação 4D está sendo executado com uma camada de rede QUIC usando o comando [Get application info](https://doc.4d.com/4Dv20/help/command/page1599.html).
  - Como o QUIC usa o protocolo UDP, certifique-se de que o UDP seja permitido em suas configurações de segurança de rede.
  - O QUIC liga-se automaticamente à porta 19813 tanto para o servidor de aplicações como para o servidor DB4D.
  - Quando a opção de camada QUIC é selecionada:
    - Uma mensagem beta e um ícone de alerta são exibidos perto do seletor.
    - [As configurações de tempo limite das conexões cliente-servidor](#Client-Server-Connections-Timeout) estão ocultas
    - A caixa de seleção [Criptografar a comunicação entre cliente e servidor](#Encrypt-Client-Server-Communications) está oculta (as comunicações QUIC são sempre em TLS, seja qual for o seu modo de segurança).
  - **Compatibilidade**: você precisa implementar seus aplicativos cliente/servidor com 4D v20 ou superior antes de mudar para a camada de rede QUIC.

:::note

No caso de uma modificação, você precisa reiniciar o aplicativo para que a alteração seja levada em conta. Toda aplicação cliente conectada também devem ser reiniciada para poderem se conectar à nova camada de rede.

:::

#### Tempo para desconectar cliente-servidor

Esse dispositivo é usado para definir o tempo limite (período de inatividade além do qual a conexão é fechada) entre o 4D Server e as máquinas clientes que se conectam a ele. A opção Ilimitado remove o tempo limite. Quando essa opção é selecionada, o controle de atividade do cliente é eliminado.

Quando um tempo limite for selecionado, o servidor fechará a conexão de um cliente se não receber nenhuma solicitação dele durante o tempo limite especificado.

### Comunicação cliente-servidor

#### Registrar clientes na inicialização para Execute On Client

Quando essa opção estiver marcada, todas as máquinas remotas 4D conectando à base de dados podem executar os métodos remotamente. Este mecanismo é detalhado na seção [procedimentos armazenados em máquinas clientes](https://doc.4d.com/4Dv19/4D/19/Stored-procedure res-on-client-machines.300-5422461.en.html).

#### Encriptar as comunicações cliente-servidor

Essa opção permite que você ative o modo seguro para comunicações entre a máquina do servidor e as máquinas remotas 4D. Esta opción se detalla en la sección [Cifrar las de conexiones cliente/servidor](https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html).

#### Atualizar a pasta Resources durante uma sessão

Essa configuração pode ser usada para definir globalmente o modo de atualização da instância local da pasta **Resources** nas máquinas 4D conectadas quando a pasta **Resources** do banco de dados for modificada durante a sessão (a pasta **Resources** é sincronizada automaticamente na máquina remota sempre que uma sessão for aberta). Estão disponíveis três parâmetros:

- **Nunca**: a pasta local **Resources** não é atualizada durante a sessão. A notificação enviada pelo servidor é ignorada. A pasta local **Resources** pode ser atualizada manualmente com o comando do menu de ação **Update Local Resources** (consulte [Usando o explorador de recursos](https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html)).
- **Sempre**: a sincronização da pasta **Resources** local é realizada automaticamente durante a sessão sempre que a notificação é enviada pelo servidor.
- **Perguntar**: quando a notificação for enviada pelo servidor, uma caixa de diálogo é exibida nas máquinas de cliente, indicando a modificação. O usuário pode então aceitar ou recusar a sincronização da pasta local **Resources**.\
  A pasta **Resources** centraliza os arquivos personalizados necessários para a interface do banco de dados (arquivos de tradução, imagens, etc.). Mecanismos automáticos ou manuais podem ser usados para notificar cada cliente quando o conteúdo dessa pasta tiver sido modificado. Para mais informações, por favor consulte a seção [Gerenciando da pasta Resources](https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html).

## Página Configuração IP

### Tabela de configuração Autorização-Rejeição

Essa tabela permite definir regras de controle de acesso para o banco de dados, dependendo dos endereços IP da máquina remota 4D. Essa opção permite reforçar a segurança, por exemplo, para aplicativos estratégicos.

> Esta tabela de configuração não controla as ligações Web.

O comportamento da tabela de configuração é o seguinte:

- A coluna "Allow-Deny" permite selecionar o tipo de regra a ser aplicada (Allow ou Deny) usando um menu pop-up. Para adicionar uma regra, clique no botão Adicionar. Aparece uma nova linha na tabela. O botão **Excluir** permite que você remova a linha atual.
- A coluna "IP Address" (Endereço IP) permite definir o(s) endereço(s) IP afetado(s) pela regra. Para especificar um endereço, clique na coluna e digite o endereço da seguinte forma: 123.45.67.89 (formato IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Você pode usar um caractere \* (asterisco) para especificar endereços do tipo "começa com". Por exemplo, 192.168.\* indica todos os endereços que começam com 192.168.
- A aplicação das regras é baseada na ordem de exibição da tabela. Se duas regras forem contraditórias, a prioridade será dada à regra localizada na parte mais alta da tabela. Você pode reordenar as linhas modificando a classificação atual (clique no cabeçalho da coluna para alternar a direção da classificação). Você também pode mover as linhas usando o recurso de arrastar e soltar.
- Por motivos de segurança, somente os endereços que realmente correspondem a uma regra terão permissão para se conectar. Em outras palavras, se a tabela contiver apenas uma ou mais regras Deny, todos os endereços serão recusados porque nenhum corresponderá a pelo menos uma regra. Se você quiser negar apenas determinados endereços (e permitir outros), adicione uma regra Allow \* no final da tabela. Por exemplo:
  - Negar 192.168.\* (negar todos os endereços que comecem por 192.168)
  - Autorizar \* (e autorizar outros)

Por padrão, nenhuma restrição de conexão é aplicada pelo 4D Server: a primeira linha da tabela contém o rótulo Allow e o caractere \* (todos os endereços).
