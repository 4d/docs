---
id: field-properties-legacy
title: Campos
---
<!-- REF my.section.id.Desc -->
## Definição

A área "Definição" da [paleta Inspetor](../Develop/structure-editor.md#inspector-palette) configura as propriedades básicas dos campos. Algumas propriedades estão disponíveis apenas quando certos tipos de campos são selecionados.

### Cor

Você pode atribuir uma cor a cada nome de campo. As cores podem ser usadas para distinguir campos de acordo com seu papel ou atributos. Por exemplo, você pode usar uma cor para campos únicos e outra para campos obrigatórios. Também é possível atribuir uma [cor individualmente para cada tabela](../Develop/structure-tables.md#color-of-the-table-image) e para cada relação.  

Para definir a cor de um ou mais campos, selecione-os e escolha uma cor usando:

- O **botão Cor** na barra de ferramentas do editor de Estrutura,
- O comando **Cor** no menu de contexto dos campos,
- A opção **Cor** na **paleta Inspetor**.

A opção **Automático** pode ser usada para aplicar a cor padrão original ao nome do campo.

### Invisível

Você pode tornar um campo invisível no ambiente de Aplicação e para os plug-ins selecionando a propriedade **Invisível** para este campo. O atributo **Invisível** oculta o campo do usuário. Um campo com este atributo não aparece em nenhum editor padrão do 4D e caixas de diálogo que aparecem no ambiente de Aplicação. Além disso, ele não pode ser usado por plug-ins. Os seguintes **editores** e **caixas de diálogo** no ambiente de Aplicação são afetados:

- Todos os editores de **Consulta**,
- O **editor de Ordenação**,
- O **editor de Etiquetas**,
- Os **Relatórios rápidos**,
- As caixas de diálogo de **Exportação e importação de dados**,
- O **editor de Fórmulas**.

Em cada um desses locais, o usuário não consegue ver ou escolher o campo. Por exemplo, o usuário não pode escolher um campo invisível para um design criado com o [editor de Etiquetas](../Desktop/labels.md).  

**Nota:** Ao usar os editores, os usuários têm a opção de salvar suas especificações (por exemplo, a consulta ou ordenação criada) em arquivos de disco. Nesse caso, quaisquer campos especificados que posteriormente sejam declarados invisíveis ainda serão usados na operação. Além disso, os usuários podem digitar os nomes dos campos invisíveis no **editor de Fórmulas**.

Campos invisíveis são exibidos em *itálico* na janela do editor de Estrutura.


### Único

Use o atributo **Único** quando você quiser garantir que cada registro tenha um valor diferente (único) neste campo. O atributo Único deve ser usado para o campo que identifica exclusivamente cada registro na tabela. O atributo Único é útil para validar campos que armazenam números de Funcionário, números de Seguro Social, números de Pedido de Compra, e assim por diante.

O atributo Único impede a duplicação de valores vazios assim como de quaisquer entradas. Um campo vazio não pode ser duplicado em outro registro.

A [barra de informações](../Develop/structure-editor.md#information-bar) do editor de Estrutura indica se a propriedade Único está marcada para um campo.

No 4D, campos com o atributo Único devem ser indexados. Um sinal visual indica que um índice será criado (se ainda não existir) quando você selecionar o atributo Único para um campo: 

![](../assets/en/Develop/field-unique.png)

O editor impede que você remova o índice de um campo Único (opção **Nenhum** ou comandos de remoção não disponíveis para índices quando tal campo está selecionado). Se você quiser remover o índice de um campo único, é necessário remover antes o atributo Único.


### Expor como recurso REST

Esta opção controla se o [campo é exposto para requisições REST](../REST/configuration.md#exposing-field).  

:::note Notas

- Você também pode definir esta opção no nível da tabela.  
- Esta opção é usada no contexto dos [recursos de datastore remoto do ORDA](../ORDA/remoteDatastores.md).

:::

### Rejeitar entrada de valor NULL  

Esta propriedade é usada para impedir o armazenamento de valores NULL. Quando esta propriedade está marcada para um campo, não será possível armazenar o valor NULL neste campo. Se um campo com este atributo receber um valor NULL, um erro será gerado. Esta propriedade de baixo nível corresponde exatamente ao atributo NOT NULL do SQL. 

:::note

No 4D, os campos também podem ter o atributo "Obrigatório" (veja abaixo). Os dois conceitos são semelhantes, mas seu escopo é diferente: o atributo "Obrigatório" é um controle de entrada de dados, enquanto o atributo "Rejeitar entrada de valor NULL" atua no nível do mecanismo do banco de dados.

:::

### Mapear valores NULL para valores em branco  

Esta propriedade torna o processamento de valores "em branco" e valores NULL consistente para o campo via a linguagem 4D. 

:::warning Compatibilidade com ORDA

Não é recomendado usar esta opção em desenvolvimentos baseados em [ORDA](../ORDA/overview.md), onde os valores NULL são totalmente suportados.

:::

Por razões de compatibilidade, valores NULL armazenados em tabelas do banco de dados 4D são automaticamente convertidos em valores padrão quando manipulados via a linguagem 4D. Por exemplo, no caso da seguinte instrução:

```4d
$myTextVar:=[myTable]myTextField
```

... se o campo *myTextField* contiver um valor NULL, a variável *$myTextVar* conterá "" (string vazia). Os [valores padrão](../Concepts/data-types.md#default-values) dependem do tipo de dado. Por outro lado, esse mecanismo em princípio não se aplica ao processamento realizado no nível do mecanismo do banco de dados 4D, como consultas. De fato, buscar por um valor “em branco” (por exemplo $myvalue=0) não encontrará registros que armazenam o valor NULL, e vice-versa. Quando ambos os tipos de valores (valores padrão e NULL) estão presentes nos registros para o mesmo campo, certos processamentos podem ser alterados ou exigir código adicional. Para evitar esses inconvenientes, a opção **Mapear valores NULL para valores em branco** pode ser usada para padronizar todo o processamento na linguagem 4D. Esta propriedade pode ser usada para estender o princípio de uso de valores padrão para todo o processamento. Campos contendo valores NULL serão sistematicamente considerados como contendo valores padrão.

:::note Notas

- Os campos Alpha no formato UUID que não são gerados não são considerados como NULL (veja formato UUID).
- Esta propriedade é considerada em um nível muito baixo do mecanismo do banco de dados. Ela atua mais particularmente sobre o comando [`Is field value Null`](../commands/is-field-value-null).

:::


### Autoincremento  

A propriedade **Autoincremento** gera números sequenciais na tabela. Pode ser usada com campos dos tipos [Integer, Long Integer e Integer 64 bits](../Concepts/data-types.md).

Um campo com esta propriedade é automaticamente incrementado cada vez que um registro é criado na tabela. O número sequencial atribuído ao campo corresponde ao "contador interno" da tabela, mantido pelo 4D. Este contador interno também pode ser acessado usando os comandos 4D [`Sequence number`](../commands/sequence-number) e [`Get database parameter`](../commands/get-database-parameter) e usando o marcador `#N` (veja Valores padrão).

Os números atribuídos nunca são reutilizados na tabela, mesmo quando registros são excluídos. Números gerados durante uma transação que é cancelada são "perdidos". A propriedade Autoincremento corresponde ao atributo SQL AUTO_INCREMENT e pode ser especificada usando esta linguagem. O rótulo AUTO INCREMENT também aparece na área de informações SQL do [Inspetor](../Develop/structure-editor.md#inspector-palette) para campos com este atributo.

:::warning

Embora sejam únicos na tabela quando gerados, números autoincrementados NÃO são recomendados para preencher campos de chave primária de ID único para registros, especialmente quando a estrutura é usada com vários arquivos de dados, pois nesse caso o contador interno pode ser dessincronizado. Além disso, o contador interno de uma tabela pode ser redefinido usando o comando [`SET DATABASE PARAMETER`](../commands/set-database-parameter). Para criar IDs únicos de registros, é altamente recomendado usar UUIDs, que oferecem as seguintes vantagens:

- UUIDs geram IDs que são únicos entre todas as tabelas e bancos de dados.  
- Para gerar UUID você pode combinar a opção **Auto UUID** (veja abaixo) e o comando [`Generate UUID`](../commands/generate-uuid). 

:::



### Armazenado no registro, arquivo de dados ou fora do arquivo de dados  

Este menu de opções está disponível apenas para campos dos tipos Text, BLOB, Picture e Object [type](../Concepts/data-types.md). Você pode definir um local de armazenamento para os dados do campo. 

#### No registro

Os dados são armazenados com cada registro. Geralmente, você não deve escolher esta opção para campos que contenham dados volumosos. No entanto, ela é selecionada por padrão para campos Text porque esse tipo de armazenamento é necessário se você quiser usar índices B-Tree "padrão". O menu de seleção de índice é oculto quando dados Text são armazenados fora dos registros.

#### No arquivo de dados

Os dados são armazenados no arquivo de dados, mas fora de cada registro. Esta opção é selecionada por padrão para campos BLOB e Picture. Você pode otimizar o funcionamento do banco de dados ao trabalhar com dados volumosos armazenando textos, imagens, Blobs e objetos fora dos registros. 

#### Fora do arquivo de dados

Os dados são armazenados em arquivos separados, fora do [arquivo de dados](../Project/architecture.md#data). Esta opção é descrita em **Armazenamento externo de dados**.

:::note Notas
- Esta opção só é considerada para novos registros criados posteriormente na tabela. Quando você define esta opção para uma tabela onde registros já foram inseridos, eles não são modificados e a tabela funcionará em modo misto de armazenamento interno/externo. Se você quiser estender este modo também para os registros existentes, é necessário [compactar os dados](../MSC/compact.md) usando a opção [**Forçar atualização dos registros**](../MSC/compact.md#force-updating-of-the-records). 
- Dados armazenados fora do arquivo de dados não são tratados pelo [recurso de criptografia de dados](../MSC/encrypt.md), se estiver habilitado.
- Esta opção não está disponível para [campos do tipo Object](../Concepts/dt_object.md).

:::

#### Tamanho máximo de armazenamento interno  

Como descrito na seção anterior, para fins de otimização, por padrão os dados dos campos dos tipos BLOB, Picture, Text e Object são armazenados fora dos registros ou fora do arquivo de dados. Nesta configuração, pode ser interessante, por razões de desempenho, "forçar" os dados a serem armazenados nos registros quando seu tamanho for limitado. Este funcionamento é particularmente otimizado quando sua aplicação lida com dados BLOB, Picture, texto ou objeto de tamanhos inconsistentes. O valor inserido nesta área representa o tamanho em bytes abaixo do qual os dados do campo serão armazenados no registro. Por exemplo, se você inserir 30.000 para um campo de imagem, uma imagem de 20 KB será armazenada no registro e uma imagem de 40 KB será armazenada no local definido nas configurações (no arquivo de dados ou fora dele). Por padrão, o valor é 0: todos os dados do campo são armazenados fora dos registros. 

### Formato UUID  

Esta propriedade está disponível para campos do tipo [Alpha](../Concepts/data-types.md). Ela indica que o campo armazena identificadores UUID. Os dados armazenados devem estar em conformidade com o formato UUID (combinação de 32 letras (A-F, a-f) e números (0-9)). Para isso, você pode usar a propriedade [**Auto UUID**](#auto-uuid), o comando [`Generate UUID`](../commands/generate-uuid) ou qualquer algoritmo personalizado.

Se você tentar armazenar uma string que não esteja em conformidade com o formato UUID neste campo, o 4D a converte automaticamente. A mesma operação também é aplicada ao conteúdo de campos existentes que não sejam Alpha e que sejam transformados em campos UUID: ao carregar os registros, os valores são reformatados e então armazenados novamente.

Campos com a propriedade de formato UUID podem ser exibidos em formulários e permanecem editáveis. Seu conteúdo aparece em caracteres maiúsculos. Você deve passar por uma variável se quiser exibir caracteres minúsculos. 

:::note Notas

- Campos com o formato UUID não podem ser associados a índices de palavras-chave nem a listas de escolha.
- Você pode criar uma relação entre dois campos que ambos tenham o formato UUID, mas não pode vincular um campo Alpha padrão a um campo com formato UUID.
- Um campo UUID que é inicializado (gerado) e que tem valor NULL retorna uma string vazia. Um campo UUID que não é gerado não é NULL e retorna "000..." (o número de zeros é igual ao número de caracteres). A propriedade não é considerada para campos UUID não gerados (exibição de "000...").

:::

#### Auto UUID  

Esta opção só está ativa quando você seleciona a propriedade [**Formato UUID**](#uuid-format). Você pode usar a propriedade **Auto UUID** para gerar automaticamente um número UUID no campo.

Este número é calculado automaticamente nos seguintes contextos:

- quando um registro é criado,
- quando um registro é carregado cujo campo UUID contém um valor Null. Isso ocorre mais particularmente para registros criados e salvos antes do campo UUID ser adicionado na tabela, quando a opção [**Mapear valores NULL para valores em branco**](#map-null-values-to-blank-values) estava desmarcada.
Naturalmente, em todos os casos, o registro deve ser salvo para que o UUID gerado automaticamente seja salvo no campo.

:::note

Quando dados são importados, mesmo com esta propriedade selecionada, o 4D não gera um novo número, mas usa os valores importados (e os transforma quando necessário se o formato não for válido). No entanto, se o valor do campo importado estiver vazio, um UUID é gerado automaticamente.

:::

<!-- END REF -->



Consultas e ordenações em texto sem tags  
Esta propriedade está disponível para campos Text e Alpha. Quando você seleciona esta opção, consultas e ordenações realizadas nos dados armazenados no campo não levam em conta nenhuma tag de estilo.

Esta opção está relacionada à capacidade do 4D de aplicar diferentes estilos dentro da mesma área de texto (rich text) em um formulário. Para mais informações sobre esta função, consulte Multi-estilo (Área de texto rica).

A definição de estilos é feita inserindo tags HTML no texto. Essas tags são interpretadas quando a área de texto é exibida. 

As tags de estilo são armazenadas com os dados. Por exemplo, se você escrever "fim de semana" em um campo Text, o 4D armazena `"fim <SPAN STYLE = "color: #D81E05">de semana</SPAN>"`. Esta operação é transparente para o usuário no nível do formulário. No entanto, para consultas e ordenações, uma configuração específica é necessária para que o 4D ignore as tags de estilo. Para a palavra "fim de semana", a consulta pode encontrá-la apenas se você tiver selecionado a opção Consultas e ordenações em texto sem tags para o campo no editor de Estrutura.

Nota: Com esta opção, uma consulta pelo valor entre os dados do campo é equivalente a executar esta instrução dentro do 4D:

 QUERY BY FORMULA(OBJECT Get plain text(thefield)="thevalue")
Indexação  
A propriedade Índice está disponível para todos os tipos de campo, exceto para BLOBs e Imagens. A propriedade Índice de Palavras-chave está disponível para campos dos tipos Alpha, Text e Picture. 

O uso de índices ajuda a acelerar o processamento e as buscas entre os dados.

O gerenciamento de índices é detalhado em Criando e modificando índices.

Controles de Entrada de Dados  
Você pode estabelecer controles de entrada de dados para campos e objetos editáveis no nível do formulário. Os controles de entrada de dados restringem o que o usuário pode digitar no campo ou objeto editável em um determinado formulário.

Obrigatório  
Quando o atributo Obrigatório está definido para um campo, o usuário deve inserir um valor nesse campo durante a entrada de dados. O 4D não aceita um registro que contenha um campo obrigatório vazio. Você deve definir o atributo Obrigatório para um campo que contenha informações essenciais para seu banco de dados. O campo que identifica exclusivamente cada registro é um bom candidato para o atributo Obrigatório. Números de Seguro Social, números de fatura, certas datas ou números de funcionário podem precisar ter o atributo Obrigatório definido para proteger a integridade dos registros.

Você também pode definir este atributo para um campo em um formulário específico. Se você selecionar o atributo Obrigatório no editor de Estrutura, não poderá desmarcá-lo em um formulário específico. No entanto, você pode aplicar o atributo Obrigatório em um formulário para um campo que não tenha este atributo no editor de Estrutura. Para informações sobre como definir o atributo Obrigatório para um campo em um formulário, consulte a seção Atributos Editável e Obrigatório e propriedades de campo.

Nota: No 4D, os campos também podem ter a propriedade "Rejeitar entrada de valor NULL" (veja acima). Os dois conceitos são semelhantes, mas seu escopo é diferente: o atributo “Obrigatório” é um controle de entrada de dados, enquanto a propriedade “Rejeitar entrada de valor NULL” atua no nível do mecanismo do banco de dados.

Não pode modificar  
Se este atributo estiver definido para um campo, o 4D valida o valor inicialmente inserido no campo, mas não permite que o usuário modifique o valor após o registro ter sido salvo. O usuário pode editar uma entrada em tal campo apenas durante a criação inicial do registro, antes que o registro seja validado. Uma vez que o usuário salva o registro, o valor no campo não é editável. O valor só pode ser modificado por um método ou no ambiente de Design após você primeiro remover esta opção.

Use Não pode modificar para campos que devem fornecer uma trilha de auditoria, como Data de Recebimento, Data de Pagamento, e assim por diante. O atributo Não pode modificar é frequentemente usado para o campo que identifica exclusivamente cada registro na tabela.

Nota: Este atributo só funciona em campos exibidos em um formulário de entrada no modo Página. Em outros casos (entrada em lista, entrada em um subformulário em modo Lista ou Página), o valor do campo ainda pode ser modificado.

Somente exibição  
O usuário não pode digitar valores pelo teclado em um campo que tenha o atributo Somente exibição definido. Você deve usar um valor padrão para tal campo ou escrever um método que insira um valor no campo. Um campo com o atributo Somente exibição é útil para exibir valores que você não deseja que os usuários do banco de dados modifiquem, como totais calculados ou um número sequencial atribuído por um método.

Você também pode tornar qualquer campo não editável em um formulário específico. Para informações sobre como tornar um campo não editável, consulte a seção Atributos Editável e Obrigatório e propriedades de campo.

Multilinha  
Esta opção está disponível apenas para campos do tipo Text. Quando está marcada, o campo Text é automaticamente configurado, em formulários criados posteriormente, para conter várias linhas de texto. Suas características padrão são as seguintes:

Altura correspondente a várias linhas,
Barra de rolagem horizontal,
Durante a execução, um retorno de carro causa uma quebra de linha.
Quando esta opção não está marcada, a aparência padrão dos campos Text em formulários é a mesma dos campos Alpha: altura de uma única linha e sem barra de rolagem; um retorno de carro o levará ao próximo campo do formulário. 

É possível alterar a aparência padrão do campo a qualquer momento usando o editor de Formulários.

Permitir lista de escolha  
Use o atributo Permitir lista de escolha se quiser exibir uma lista de escolha para inserir informações no campo. Para usar este atributo, primeiro é necessário criar a lista de escolha usando o editor de Listas (veja Listas).

Use o atributo Permitir lista de escolha quando quiser padronizar as entradas no campo e evitar erros de digitação. Use uma lista de escolha para um campo que tenha um número limitado de entradas válidas ou um número limitado de entradas usuais. O uso de uma lista de escolha não impede necessariamente que o usuário digite um valor diferente (um que não apareça na lista de escolha).

Você também pode atribuir uma lista de escolha a um campo em um formulário específico. No entanto, quando você atribui uma lista de escolha apenas em um formulário, a lista não é exibida em outros editores e caixas de diálogo, como o editor de Consulta. Para informações sobre o uso de uma lista de escolha em um formulário, consulte a seção Controles e assistência de entrada de dados.

Nota: Também é possível definir listas de escolha de valores obrigatórios e valores excluídos no nível do formulário. 

Ao marcar a opção Permitir lista de escolha, o menu suspenso associado é habilitado. Você pode então selecionar uma lista de escolha existente que deseja atribuir ao campo ou clicar em [...] para acessar diretamente o editor de Listas (veja Listas).

Dica de ajuda  
Você pode fornecer informações adicionais aos usuários sobre um campo adicionando uma dica de ajuda ao campo. Quando uma dica é inserida na área Dicas de Ajuda, ela aparece ao lado do campo sempre que um usuário posiciona o ponteiro sobre o campo em qualquer formulário em que o campo esteja incluído. Uma Dica de Ajuda é exibida em todas as plataformas.

Quando o usuário posiciona o ponteiro do mouse sobre o campo, a dica aparece abaixo do campo, conforme mostrado abaixo:



Nota: As dicas de ajuda podem ser globalmente desativadas ou ativadas para a aplicação usando o seletor Tips enabled do comando SET DATABASE PARAMETER.

Você também pode associar mensagens de ajuda aos campos de duas outras maneiras:

no nível do editor de formulários. Neste caso, a dica de ajuda do campo não aparecerá nos outros formulários. Para mais informações sobre o uso de dicas de ajuda com formulários, consulte a seção Mensagens de ajuda.
usando o comando OBJECT SET HELP TIP, para o processo atual.
Comentários  
A área Comentários da paleta Inspetor pode ser usada para armazenar informações adicionais sobre o campo. Esses comentários estão disponíveis para todos os desenvolvedores.
Observe que cada tabela e relação possui sua própria área de comentários.

SQL  
A área SQL da paleta Inspetor fornece várias informações úteis sobre o campo do ponto de vista de seu uso via a linguagem SQL.

Esta área indica mais particularmente se o nome do campo respeita as regras relativas à nomenclatura SQL (por exemplo, ao contrário do 4D, o SQL não permite que um nome de campo contenha espaços).

Nota: O SQL também define uma lista de palavras reservadas, incluindo funções SQL e palavras-chave SQL. Você pode visualizar essas palavras reservadas no editor de Métodos.

Para campos, a área de informações SQL também indica seus atributos SQL (tipo e propriedades).
