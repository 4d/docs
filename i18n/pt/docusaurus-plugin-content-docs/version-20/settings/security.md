---
id: security
title: Página segurança
---

Esta página contém opções relacionadas ao acesso e à proteção de dados para seus aplicativos de desktop.

**Note**: Para uma visão geral dos recursos de segurança de 4D, consulte o [guia de segurança 4D](https://blog.4d.com/4d-security-guide/).

## Acesso aos dados / Acesso de usuários remotos

> Essas configurações não se aplicam às bases de dados do projeto abertas no modo de usuário único.

-   **Acesso ao Gerenciador de Design e Execução**: Dá ao grupo especificado a capacidade de entrar no ambiente de Design do banco de dados e exibe o Explorador de Runs.

    Observe que:
    -   Definir um grupo de acesso no ambiente de Design também permite desativar a opção **Criar tabela** na caixa de diálogo de importação de dados. Para obter mais informações sobre esta caixa de diálogo, consulte [Importando dados de arquivos](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

    -   O Designer e o Administrador sempre têm acesso ao ambiente de Design e ao Explorador de Runas, mesmo que eles não façam explicitamente parte do grupo de acesso especificado. ou mais informações sobre usuários e grupos de usuários, consulte o capítulo [Usuários e grupos](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html).

-   **Usuário padrão**: Quando um usuário padrão for definido, cada usuário que abre o banco de dados ou logs no mesmo tem os mesmos privilégios e restrições definidos para este Usuário Padrão. Já não é necessário introduzir um nome de usuário. Além disso, se você não tiver associado uma senha com o usuário padrão, a caixa de diálogo de senha não aparece mais e o banco de dados abre diretamente. Esta opção simplifica o acesso ao banco de dados, mantendo um sistema completo de controle de dados.

    -   Se você associou uma senha ao usuário padrão, uma caixa de diálogo aparece quando o banco de dados está aberto e os usuários devem inserir uma senha.
    -   Se você não associou uma senha ao usuário padrão, a caixa de diálogo de identificação de usuário não aparecerá.**Nota:** Você pode "forçar" a exibição da caixa de diálogo de identificação do usuário quando o modo "Usuário Padrão" estiver ativo, por exemplo, a fim de conectar como Administrador ou Designer. Para fazer isso, pressione a tecla **Shift** enquanto abre o banco de dados ou se conecta a ele.

-   **Mostrar lista de usuários na caixa de diálogo de senha**: Se esta opção estiver marcada, os usuários devem escolher seu nome na lista de usuários e digitar sua senha na caixa de diálogo de identificação de usuário. Se essa opção não estiver marcada, os usuários deverão digitar o nome e a senha. Para obter mais informações sobre as duas versões da caixa de diálogo de senha, consulte a seção "Visão geral do controle de acesso" em [Visão geral do controle de acesso](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

    -   Lista de Usuários **na Ordem Alfabética** (somente disponível se a opção anterior estiver marcada): Quando esta opção é marcada, a lista de usuários na caixa de diálogo de entrada de senha é classificada por ordem alfabética.

-   **os usuários podem alterar sua senha**: Quando esta opção é marcada, um botão **Alterar** é exibido na caixa de diálogo de identificação do usuário. Este botão permite ao usuário acessar uma caixa de diálogo que pode ser usada para alterar sua senha (para mais informações sobre esta caixa de diálogo, consulte a "Modificação de senha pelo usuário" no [Assegurando a manutenção do sistema](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). Se desejar, você pode ocultar o botão **Alterar** para que os usuários não possam modificar suas senhas. Para o fazer, basta desmarcar esta opção.

## Opções

-   **Filtragem de comandos e métodos de projeto no editor de fórmula e no 4D View Pro e 4D Write Pro documentos**: Por razões de segurança, por padrão 4D restringe o acesso aos comandos, funções e métodos de projeto no editor de fórmula [](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) no modo Aplicação ou adicionado a áreas de vários estilos (usando [ST INSERIR EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html)4D Write Pro e 4D View Pro documentos: apenas certas funções 4D e métodos de projeto que foram explicitamente declarados usando o comando [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) podem ser usados. Você pode remover completamente ou parcialmente esta filtragem usando as seguintes opções.
    -   **Ativado para todos** (opção padrão): O acesso a comandos, funções e métodos de projeto é restrito para todos os usuários, incluindo o Designer e o Administrador.
    -   **Desativado para o Designer e o Administrator**: Esta opção oferece acesso completo aos comandos 4D e aos métodos só para o Designer e Administrator. Ele pode ser usado para definir um modo de acesso ilimitado para comandos e métodos, enquanto permanece no controle das operações realizadas. Durante a fase de desenvolvimento, este modo pode ser usado para testar livremente todas as fórmulas, relatórios e assim por diante. Durante a operação, pode ser usado para configurar soluções seguras que permitam o acesso a comandos e métodos temporários. Isso consiste em mudar o usuário (através do comando [CHANGE CURRENTE USUÁRIO](https://doc.4d.com/4dv19R/help/command/en/page289.html) antes de chamar uma caixa de diálogo ou iniciar um processo de impressão que requer acesso total aos comandos, depois retornando para o usuário original quando a operação específica for concluída. **Nota:** Se o acesso completo foi habilitado usando a opção anterior, esta opção não terá efeito.
    -   **Desativado para todos**: Esta opção desativa o controle sem fórmulas. Quando esta opção estiver marcada, os usuários terão acesso a todos os comandos 4D e plug-ins, bem como a todos os métodos do projeto (exceto para os invisíveis). **Nota:** essa opção tem prioridade sobre o comando [SET PERMITIDO DE METES](https://doc.4d.com/4dv19R/help/command/en/page805.html). Quando está selecionado, este comando não faz nada.

-   **Habilite as configurações do usuário**: Você precisa marcar esta opção para ser capaz de exibir caixas de diálogo separadas para configurações de usuário. Quando esta opção estiver marcada, até três caixas de diálogo estão disponíveis: **Configurações da Estrutura**, **Configurações de Usuário**e **Configurações de Usuário para o Arquivo de Dados**. Para mais informações, consulte as [configurações do usuário](overview.md#user-settings).

-   **Execute "On Host Database Event" método dos componentes**: The [on Host Database Event method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitará as fases de inicialização e backup para componentes 4D. Por razões de segurança, você deve autorizar explicitamente a execução deste método em cada banco de dados de host. Para o efeito, é necessário marcar esta opção. Por padrão, não está marcada.

    Quando esta opção está seleccionada:
    * os componentes 4D são carregados,
    * cada [No Banco de Dados do Servidor do Banco de Dados do Evento](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) do componente (se houver) é chamado pelo banco de dados de hosts,
    * o código do método é executado.

    Quando não é verificado:
    * Os componentes 4D são carregados, mas eles têm que gerenciar suas fases de inicialização e backup por conta própria.
    * o desenvolvedor do componente tem que publicar os métodos do componente que devem ser chamados pelo banco de dados de host durante estas fases (inicialização e desligamento)
    * o desenvolvedor da base de dados de host deve chamar os métodos apropriados do componente no momento certo (deve ser coberto na documentação do componente).