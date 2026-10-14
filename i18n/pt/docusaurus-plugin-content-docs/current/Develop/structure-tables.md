---
id: structure-tables
title: Tabelas
---

Tabelas são a base de todo banco de dados 4D. Cada tabela define uma coleção de registros que compartilham o mesmo conjunto de campos e propriedades. No editor de Estrutura, as tabelas são representadas como objetos gráficos que você pode criar, renomear ou excluir, e cujos atributos podem ser configurados individualmente.

Utilizando as ferramentas fornecidas pelo 4D, você pode:

- Definir tabelas e gerenciar suas chaves primárias e relações
- Definir e editar propriedades no nível da tabela, como triggers, visibilidade e replicação
- Controlar regras de nomenclatura e organizar tabelas em pastas para facilitar a manutenção

## Criando uma tabela

Você pode criar uma nova tabela diretamente na janela de Estrutura ou através de uma caixa de diálogo. A criação direta é mais rápida; porém, a criação usando a caixa de diálogo permite especificar certos parâmetros da tabela e cancelar a operação quando necessário. Também é possível criar tabelas usando copiar e colar.

- Para criar uma nova tabela diretamente:

1. Clique com o botão direito em uma área vazia da janela do editor de Estrutura e escolha **Adicionar Tabela...** no menu de contexto.
**OU**
No menu de adicionar objetos da [barra de ferramentas do editor de Estrutura](./structure-editor.md#toolbar), escolha a opção Tabela.

O 4D cria a tabela diretamente no editor de Estrutura. Você pode então alterar seu nome, adicionar campos, etc.

:::note

Se você quiser colocar a tabela em uma pasta específica, é necessário usar a Home Page do Explorer.

:::

- Para criar uma nova tabela usando a caixa de diálogo "Nova tabela":

1. Escolha **Novo > Tabela...** no menu **Arquivo** (ou no botão **Novo** da barra de ferramentas do 4D).
**OU**
Na página Tabelas do Explorer, clique no botão **\[+]**.

A caixa de diálogo "Nova tabela" aparece. O 4D nomeia a primeira tabela como `Table_1` e depois as numera sequencialmente:

![](../assets/en/Develop/new-table.png)

2. (opcional) Modifique o [nome da tabela](../Concepts/identifiers.md#tables-and-fields) que deseja criar.
3. (opcional) Especifique a pasta na qual deseja colocar a nova tabela.
Por padrão, a tabela é colocada no nível mais alto da hierarquia de pastas ("Nível Superior"). As pastas são gerenciadas na Home Page do Explorer.
4. Clique em **OK** para validar.
O 4D cria uma nova imagem de tabela. Ela se torna a tabela selecionada na janela do editor de Estrutura.

- Para criar uma nova tabela por copiar e colar:

1. Selecione e copie a(s) tabela(s) a serem duplicadas.
2. Cole a(s) tabela(s) na janela do editor de Estrutura.

A tabela é colada com todos os seus campos e propriedades.

## Renomeando uma tabela

Você pode renomear tabelas a qualquer momento. Se você utilizou o nome antigo da tabela em um método, o 4D altera automaticamente para o novo nome, desde que o método esteja fechado. Se o método estiver aberto, você deve fazer as alterações manualmente. Cada nome de tabela deve ser único no banco de dados.

Você pode renomear uma tabela diretamente no editor de Estrutura, no Explorer ou usando a paleta Inspetor.

Para renomear uma tabela diretamente (editor de Estrutura ou página Tabelas do Explorer), **clique duas vezes** no nome da tabela (se a tabela já estiver selecionada, clique uma vez), para que ela entre no modo de edição:

![](../assets/en/Develop/table-rename.png)

Digite o novo nome e clique fora da tabela.

Para renomear uma tabela usando a paleta Inspetor do editor de Estrutura, clique duas vezes no nome da tabela (ou selecione **Propriedades da Tabela...** no menu de contexto da tabela) e digite o novo nome na área "Nome".

![](../assets/en/Develop/table-rename-2.png)

O 4D exibe o nome e as propriedades da tabela selecionada na paleta Inspetor. Essa paleta também indica o número da tabela. Se a paleta Inspetor já estiver aberta, mas exibindo as propriedades de outra tabela ou objeto, basta selecionar a imagem da tabela desejada e a paleta exibirá suas propriedades.

## Excluindo uma tabela

Você pode excluir tabelas do seu banco de dados. Existem duas formas de excluir tabelas no 4D: **exclusão permanente** (a tabela e seus dados são realmente removidos do banco de dados) e **exclusão não permanente** (a tabela é simplesmente colocada na Lixeira do Explorer e pode ser recuperada posteriormente).

:::info

Você também pode remover tabelas usando o [motor SQL do 4D](https://doc.4d.com/4Dv21/4D/21/4D-SQL-Reference.100-7649299.en.html).

:::

### Exclusão permanente

Para excluir permanentemente uma ou mais tabelas do banco de dados no editor de Estrutura:

Selecione a(s) tabela(s) a serem excluídas e escolha **Limpar** no menu **Editar** ou escolha **Excluir** no menu de contexto da tabela.

Uma caixa de diálogo de aviso solicitará a confirmação da operação. Ao clicar em **OK**, o 4D executa as seguintes operações:

- A tabela é excluída permanentemente da estrutura. Todos os dados associados à tabela são excluídos permanentemente do arquivo de dados.
- Qualquer método trigger associado à tabela é excluído.
- Os formulários e listas associados à tabela são transformados em formulários de projeto e colocados na Lixeira do Explorer.

### Exclusão não permanente

A exclusão não permanente de uma tabela consiste em colocá-la na Lixeira do projeto (acessível via Explorer), assim como os mecanismos de exclusão de arquivos implementados pelo Windows e macOS.

A tabela então não aparece mais nos editores do 4D e seu conteúdo se torna inacessível, mas ainda pode ser recuperada enquanto a Lixeira não for esvaziada.

Para colocar uma ou mais tabelas na Lixeira a partir do editor de Estrutura, escolha o comando **Mover para a Lixeira** no menu de contexto da tabela ou selecione a(s) tabela(s) a serem excluídas e pressione a tecla **Delete** ou **Backspace**. Uma caixa de diálogo de confirmação aparece. Se você clicar em **OK**, a tabela é colocada na Lixeira. Ela pode ser recuperada a qualquer momento na página Lixeira do Explorer.

### Numeração das tabelas excluídas

Quando uma tabela é excluída, as outras tabelas do banco de dados não são renumeradas, para evitar comprometer a estabilidade do banco de dados. Assim, é possível, por exemplo, ter um banco de dados com três tabelas numeradas 2, 4 e 5.

Observe que os números das tabelas excluídas permanentemente são reutilizados quando novas tabelas são criadas posteriormente.

## Propriedades da tabela

Você pode definir várias propriedades para as tabelas usando a **paleta Inspetor** ou, para certas propriedades, usando o menu de contexto das tabelas.

### Triggers

Um [trigger](./triggers) é um método que é executado automaticamente quando certos eventos relacionados à tabela ocorrem. Os eventos de trigger podem ser definidos na **paleta Inspetor** ou usando o menu de contexto associado à tabela (clique com o botão direito na área do título da tabela). Marque cada evento para o qual deseja [ativar o trigger](./triggers#activating-and-creating-a-trigger).

Você pode acessar o trigger de uma tabela diretamente do editor de Estrutura clicando no botão **Editar...** na paleta Inspetor ou selecionando **Editar Método...** no submenu de contexto. Também é possível criar e exibir triggers pela **página Métodos** do Explorer.

A [barra de informações](./structure-editor.md#information-bar) do **editor de Estrutura** indica os triggers ativados para cada tabela.

### Atributos

Você pode definir diferentes atributos para configurar a aparência e o comportamento geral de cada tabela.

#### Invisível

Esta opção permite tornar uma tabela invisível no modo Aplicação e para plug-ins. Você pode ativar esta opção para tabelas utilitárias ou tabelas que não estão sendo usadas temporariamente.

Tornar uma tabela invisível permite limitar as operações que um usuário pode realizar em uma tabela, tornando a tabela e seus campos invisíveis em todos os editores e algumas caixas de diálogo que aparecem no ambiente de Aplicação. Ela também não pode ser usada por plug-ins.

Os editores e caixas de diálogo afetados no ambiente de Aplicação incluem:

- Todos os editores de consulta
- Editor de ordenação
- [Editor de etiquetas](../Desktop/labels.md)
- Editor de relatório rápido
- Caixas de diálogo de exportação e importação de dados
- Editor de fórmulas

Em cada um desses editores, o usuário não consegue ver ou escolher a tabela ou qualquer um de seus campos. Por exemplo, o usuário não pode incluir campos de uma tabela invisível em um relatório ou etiqueta.

:::note Notas

- Ao usar esses editores, os usuários têm a opção de salvar suas especificações (por exemplo, a consulta ou ordenação criada) em arquivos no disco. Nesse caso, quaisquer tabelas ou campos especificados que posteriormente forem tornados invisíveis ainda poderão ser usados na operação.
- Os usuários podem digitar os nomes de tabelas e campos invisíveis na caixa de diálogo.
- Também é possível definir esse atributo individualmente para cada campo.

:::

Tabelas e campos invisíveis são exibidos em *itálico* na janela do editor de Estrutura.

#### Cor da imagem da tabela

Uma cor pode ser atribuída a cada tabela. O uso de cores ajuda a organizar a estrutura de um banco de dados grande. Por exemplo, você pode usar uma cor para todas as tabelas relacionadas a clientes e outra para tabelas relacionadas a estoque.

:::note

Também é possível atribuir uma cor individualmente a cada campo, bem como a cada relação.

:::

Para definir a cor de uma ou mais tabelas, faça sua seleção e escolha a cor usando:

- O botão **Cor** da barra de ferramentas do editor de Estrutura
- O comando **Cor** no menu de contexto das tabelas
- A opção **Cor** na **paleta Inspetor**

A opção **Automático** pode ser usada para aplicar a cor padrão original à tabela.

#### Expor como recurso REST

Esta opção controla se a [tabela é exposta para requisições REST](../REST/configuration.md#exposing-tables).

:::note Notas

- Você também pode definir esta opção no nível de cada campo da tabela.
- Esta opção é usada no contexto dos [recursos de datastore remoto ORDA](../ORDA/remoteDatastores.md).

:::

#### Registros excluídos definitivamente

Esta opção permite otimizar a exclusão de uma seleção de registros feita usando o comando [`DELETE SELECTION`](../commands/delete-selection).

Quando o 4D exclui uma seleção, os marcadores de registro também são excluídos. Um marcador de registro é um cabeçalho anexado ao registro que contém informações relativas a esse registro. Excluir tanto os marcadores quanto os registros é mais lento do que excluir apenas os registros. Em certos casos, pode ser desejável não excluir automaticamente os marcadores de registro.

Para acelerar a exclusão de uma grande seleção feita usando o comando [`DELETE SELECTION`](../commands/delete-selection), desmarque a opção **Registros excluídos definitivamente**. Os marcadores de registro não serão excluídos. Esta opção não pode ser definida por programação.

#### Habilitar replicação

:::info Obsoleto

Os mecanismos de replicação e sincronização usando SQL estão obsoletos a partir do 4D 20 R3. Eles ainda são suportados, mas agora é recomendado usar o [recurso de Global Stamp baseado em ORDA](../ORDA/global-stamp.md), que oferece uma solução flexível e robusta para implementar replicação e sincronização no 4D.

:::

#### Incluir no Arquivo de Log

Por padrão, esta opção está marcada para todas as novas tabelas criadas e para todas as tabelas em bancos de dados convertidos. Marque esta opção para que as operações realizadas nos dados da tabela sejam incluídas no [arquivo de log do banco de dados](../Backup/log.md) (quando ele for gerado).

Esta opção geralmente deve ser marcada para a maioria das tabelas. No entanto, para fins de otimização, você pode desmarcá-la, por exemplo, para tabelas temporárias ou tabelas usadas para importação de dados.

É importante observar que esta opção apenas indica que os dados da tabela devem ser registrados no log se o banco de dados usar um arquivo de log; ela não habilita o procedimento de registro em log no nível do banco de dados.

:::note Notas

- Esta opção fica desabilitada quando a tabela não possui uma chave primária.
- O 4D exibe um ícone de aviso à direita da opção **Incluir no Arquivo de Log** quando as condições necessárias não são atendidas. Enquanto este ícone for exibido, o registro em log ainda não está habilitado.

:::

#### Criptografável

Esta opção controla se os dados armazenados na tabela devem ser criptografados em disco quando a [criptografia do arquivo de dados estiver ativada](../MSC/encrypt.md).

Como criptografar/descriptografar pode consumir tempo, selecionar as tabelas a serem criptografadas permite otimizar o desempenho de bancos de dados criptografados. Por exemplo, você pode definir apenas as tabelas que contêm dados pessoais como **Criptografáveis**.

Observe que esta opção apenas sinaliza a(s) tabela(s); ela não executa nenhuma operação de criptografia ou descriptografia. Para realmente criptografar ou descriptografar a(s) tabela(s) selecionada(s) no arquivo de dados, você deve usar o [MSC](../MSC/encrypt.md) ou chamar o comando [`Encrypt data file`](../commands/encrypt-data-file).

:::warning

- Ao modificar o valor desta opção para uma tabela em um banco de dados já criptografado, você também deve usar o [MSC](../MSC/encrypt.md) ou chamar o comando [`Encrypt data file`](../commands/encrypt-data-file) para preservar a consistência dos dados. Caso contrário, não será possível salvar dados na tabela modificada (erros serão retornados pelo 4D ao tentar salvar registros).
- A criptografia de dados armazenados fora do arquivo de dados não é gerenciada por esta opção.

:::

### Comentários

A área **Comentários** da **paleta Inspetor** permite armazenar informações adicionais sobre a tabela. Esses comentários estão disponíveis para todos os desenvolvedores. Observe que cada campo e cada relação possuem sua própria área de comentários.

### SQL

- O menu "Schemas" lista todos os schemas SQL especificados no banco de dados. Você pode usar este menu para definir o schema ao qual a tabela pertencerá (também é possível modificar esta propriedade via comandos SQL). Todo banco de dados possui pelo menos um schema, chamado **DEFAULT_SCHEMA**. Por padrão, todas as tabelas pertencem a este schema. Para mais informações sobre schemas SQL, consulte a seção [**Schemas**](https://doc.4d.com/4Dv21/4D/21/4D-SQL-engine-implementation.300-7649386.en.html#148386) no *guia de Referência SQL do 4D*.
- A área de informações indica se o nome da tabela respeita as regras de nomenclatura SQL (por exemplo, ao contrário do 4D, o SQL não permite que um nome de campo contenha espaços).

### Chaves primárias

Uma chave primária designa o(s) campo(s) usados para identificar de forma única os registros em uma tabela. Definir uma chave primária é necessário para os [recursos de registro em log](../Backup/log.md).

Você cria, edita e/ou remove chaves primárias diretamente usando o menu de contexto do editor de Estrutura ou o [gerenciador de chave primária](#primary-key-manager).

> **Nota:** Chaves primárias também podem ser definidas usando a linguagem SQL por meio da cláusula **PRIMARY KEY** seguida da lista de colunas.

#### Regras para uso de campos de chave primária

Campos de chave primária devem ser tratados com cuidado para garantir a integridade dos dados em todos os momentos. Em particular, um campo de chave primária deve respeitar as seguintes regras:

- não pode estar vazio,
- deve ser único,
- uma vez criado, não deve (em princípio) ser modificado, especialmente se:
  - [Recursos de Global stamp](../ORDA/global-stamp.md) estiverem habilitados,
  - [Recurso REST (ou similar)](../REST/gettingStarted.md) estiver habilitado,
  - o banco de dados for periodicamente sincronizado (backup ou espelhamento lógico usando o [arquivo de log](../Backup/log.md)).

Modificar o valor do campo de chave primária é altamente desencorajado, mesmo que o 4D permita isso para casos específicos.
Se for absolutamente necessário modificar o valor de uma chave primária (por exemplo, você usou um campo de número de seguridade social como chave primária e valores incorretos foram inseridos), é preferível desabilitar (remover) a chave primária atual e adicionar um novo campo usado como chave primária com atribuição automática.

Campos de chave primária podem ser do tipo inteiro longo ou formato UUID (tipo alfa). Na maioria dos casos, recomendamos o formato UUID com a opção Auto UUID ativada. Embora o tipo inteiro longo ocupe menos espaço em disco, UUIDs têm muitas vantagens, por exemplo, facilitando a fusão de bancos de dados independentes, importação/exportação de dados, implementação de estratégias elaboradas de espelhamento/replicação ou sincronização com sistemas externos.

#### Definindo chaves primárias

Para criar uma chave primária a partir do editor de Estrutura:

1. Selecione o(s) campo(s) que compõem a chave primária da tabela.
2. Clique com o botão direito e escolha **Criar chave primária** no menu de contexto (este comando só é exibido para campos cujo tipo é elegível para chaves primárias).

Não é possível ter mais de uma chave primária para cada tabela. Se uma chave primária já estiver especificada, uma caixa de diálogo de aviso aparecerá indicando que a chave primária existente será desabilitada primeiro.

A chave primária é criada imediatamente. Os campos incluídos na chave primária ficam *sublinhados* no editor e sua descrição SQL exibe a palavra-chave **PRIMARY KEY**.

Ao criar uma chave primária em uma tabela que já contém registros (usando um campo existente ou adicionando um novo), o 4D verifica a conformidade de todos os valores presentes ou executa automaticamente operações de atualização:

- O(s) campo(s) pertencentes à chave primária não podem conter valores duplicados. Se existirem valores duplicados para a chave nos registros da tabela, uma caixa de diálogo de aviso aparecerá indicando que não é possível criar a chave por esse motivo.
- Se os valores duplicados forem em branco ou nulos (caso de um campo de chave adicionado), você pode marcar a opção correspondente de geração automática (para campos Alfa ou para campos Longint).
Neste caso, o 4D examina todos os registros da tabela e atribui automaticamente um valor calculado a cada chave primária. Observe que esse processo é sequencial e pode exigir um tempo significativo se houver um grande número de registros.

> **Nota:** As colunas pertencentes à chave primária não aceitam valores NULL.

#### Removendo chaves primárias

Para remover uma chave primária de uma tabela:

1. Clique com o botão direito na tabela que contém a chave primária e escolha **Remover chave primária** no menu de contexto:

[imagem aqui]

Uma caixa de diálogo de confirmação aparece. Clique em **OK** para remover a chave primária.

#### Campo de chave primária padrão

Toda nova tabela criada no banco de dados contém uma chave primária por padrão. Este campo, chamado **"ID"** por padrão, é do tipo Longint e possui, em particular, os seguintes atributos:

- Único,
- Rejeita entrada de valor NULL,
- Autoincremento,
- Índice automático.

Você pode usar este campo como está, ou alterar seu nome e/ou suas propriedades se desejar (por exemplo, você pode querer usar um campo UUID). Também é possível excluí-lo caso queira usar outro(s) campo(s) como chave(s) primária(s). No entanto, é fortemente recomendado manter pelo menos uma chave primária em cada tabela 4D.

:::note

Na [página Estrutura das Preferências](../Preferences/structure.md), você pode modificar o nome e o tipo das chaves primárias que são criadas por padrão.

:::

:::info

Chaves primárias padrão não são adicionadas a tabelas criadas usando o comando SQL **CREATE TABLE**, ou tabelas importadas para o banco de dados.

:::

## Gerenciador de chave primária

O **Gerenciador de chave primária** é um assistente destinado a facilitar a resolução de erros relacionados à presença de tabelas sem chaves primárias, especialmente no contexto de um banco de dados com registro em log:

![](../assets/en/Develop/pk-manager.png)

Você pode usar este assistente para:

- diagnosticar a compatibilidade de cada tabela do banco de dados com o mecanismo de registro em log do 4D,
- propor uma correção para cada tabela encontrada que não seja compatível, principalmente criando uma chave primária.

### Acessando o assistente

Existem duas formas de exibir a janela do **Gerenciador de chave primária**:

- A partir da **janela de erro de chave primária**: clique no botão **Executar assistente** para exibir a janela do assistente.

**Nota:** O Gerenciador de chave primária é exibido no modo Design. Se o banco de dados iniciar no modo Aplicação, o assistente não aparecerá imediatamente e será necessário alternar para o modo Design.

- A partir do **editor de Estrutura**: clique no botão na [barra de ferramentas](./structure-editor.md#toolbar) desta janela para exibir o assistente.

### Usando o assistente

A janela do **Gerenciador de chave primária** exibe uma linha para cada tabela do banco de dados:

![](../assets/en/Develop/pk-1.png)

O assistente não considera as tabelas colocadas na Lixeira.

O ícone no início de cada linha indica se a tabela requer atenção do usuário:

| Ícone | Status | Descrição |
|------|---------|-------------|
| ![](../assets/en/Develop/pk-icon1.png)| OK | Uma chave primária válida está definida para a tabela. |
| ![](../assets/en/Develop/pk-icon2.png) | Sem chave primária, campo(s) elegível(is) | A tabela não possui uma chave primária, mas contém pelo menos um campo que pode se tornar a chave primária. |
| ![](../assets/en/Develop/pk-icon3.png) | Sem chave primária, sem campos elegíveis | A tabela não possui uma chave primária e não possui campos que possam se tornar uma (será necessário criar um campo de chave primária). |
| ![](../assets/en/Develop/pk-icon4.png)| Aviso | A tabela não possui uma chave primária, mas não está registrada no log (opção "Incluir no Arquivo de Log" desabilitada para a tabela). É possível ocultar tabelas com este status desmarcando a opção para exibir avisos. |

Para cada tabela registrada no log que não possui uma chave primária, o assistente exibe um menu para definir a ação a ser realizada. Você pode escolher entre as seguintes opções:

- **Ignorar:** não modifica a tabela. Os erros não são corrigidos e o status da tabela não é alterado. Use esta opção se desejar intervir posteriormente ou se quiser criar a chave primária fora do assistente. Esta opção é necessária, em particular, quando você deseja criar uma chave primária baseada em vários campos da tabela.

- **Usar campo existente** (exibido apenas para tabelas com pelo menos um campo elegível para ser chave primária): designa um dos campos da tabela como chave primária. Ao escolher esta opção, o assistente sugere o campo mais apropriado por padrão. Se quiser usar outro campo ou se o assistente não identificar um campo particularmente adequado (o assistente exibe *Selecione um campo*), clique no segundo menu da linha para exibir a lista de campos elegíveis.

- **Criar um novo campo:** cria um novo campo de chave primária na tabela. Este campo terá as mesmas características daquele [adicionado por padrão quando uma nova tabela é criada](#default-primary-key-field). Por padrão, o assistente propõe criar um campo do tipo Longint, chamado “ID”. Você pode modificar o nome e o tipo dos campos de chave primária padrão nas [Preferências](../Preferences/structure.md#primary-key). Também é possível alterar o nome e/ou tipo do campo diretamente na janela do Gerenciador de chave primária.

- **Não registrar esta tabela no log:** desmarca a opção [**Incluir no Arquivo de Log**](#include-in-log-file) para a tabela. Você pode escolher esta opção no caso de tabelas temporárias. Após validar esta caixa de diálogo, um status de “Aviso” é atribuído à tabela.

Depois de definir suas configurações, clique em **Aplicar...** para aplicar as alterações ao banco de dados ou em **Fechar** para fechar a caixa de diálogo sem modificar o banco de dados. Ao clicar em **Aplicar...**, uma caixa de diálogo de confirmação aparece listando as operações a serem realizadas; você pode confirmar ou cancelar a operação.

Se você designou campos existentes como chaves primárias, o 4D verifica cada tabela para garantir que seus dados existentes respeitam as regras de unicidade e valores nulos para esse tipo de campo. Se, por exemplo, um campo contiver valores duplicados ou nulos, um erro será gerado. Você precisará encontrar e remover essas anomalias antes de poder habilitar o registro em log para os dados.

:::note

Para facilitar a correção de erros relacionados a chaves primárias, os valores das chaves primárias são exibidos na [página **Análise de atividade** do Centro de Manutenção e Segurança](../MSC/analysis.md).

:::
