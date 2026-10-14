---
id: structure-indexes
title: Índices
---

Você pode associar índices a campos que são frequentemente usados para buscas e ordenações. Por exemplo, você pode indexar LastName, CompanyName ou ProductName se planeja buscar ou ordenar entity selection usando esses atributos. Você também utiliza essa propriedade para campos que estabelecem relações entre tabelas.

Quando um índice é associado a um campo, o 4D cria uma tabela de índice interna para o campo. Essa tabela permite que o 4D realize buscas e ordenações rápidas no campo. Ao buscar ou ordenar um campo não indexado, o 4D percorre os dados sequencialmente, examinando cada registro em ordem. A indexação permite que o 4D busque e ordene sem precisar passar por todos os registros.

Você pode indexar campos dos tipos Alpha, Text, Date, Time, Boolean, Integer, Long integer, Integer 64 bits, Real, Picture e Object. À medida que você adiciona e exclui registros, o 4D atualiza automaticamente sua tabela de índices. Se você criar um índice para um campo que já existe, o 4D indexa automaticamente os dados existentes. Você pode especificar quantos campos indexados desejar. Os índices também são reconstruídos durante operações específicas, como conversão de bancos de dados antigos ou [compactação de dados](../MSC/compact.md).

Cada tabela de índice pode conter até:

- 128 bilhões de chaves para índices Alpha, Text e Float  
- 256 bilhões de chaves para outros tipos de índice (dados escalares)

Não indexe todos os campos. Um índice aumenta o tamanho do banco de dados, utilizando mais espaço em disco. O uso de muitos índices também aumenta o tempo necessário para salvar um registro, já que o 4D atualiza a tabela de índices a cada validação de registro.

Campos indexados são exibidos em **negrito** no editor de Estrutura.


## Tipos de índices

O 4D oferece diferentes tipos de índices. A escolha entre os diferentes tipos geralmente depende do resultado esperado e do tipo de dado presente no campo. Existem quatro tipos principais de índices:

- **Índices padrão:** São índices de campo único usados para acelerar operações padrão de banco de dados (buscas e ordenações). O 4D permite que você escolha a arquitetura interna desse tipo de índice (exceto para campos Object): B-Tree ou Cluster B-Tree.
- **Índices compostos:** Este índice armazena os valores combinados de dois ou mais campos que frequentemente são buscados juntos, por exemplo LastName+FirstName.
- **Índices de palavras-chave:** Esses índices estão disponíveis apenas para campos dos tipos Alpha, Text e Picture. Eles são destinados a facilitar buscas rápidas dentro de textos ou, no caso de imagens, entre as palavras-chave associadas às imagens.
- **Índices vetoriais**: Esses índices são projetados para acelerar consultas baseadas em IA em campos Object que armazenam [embeddings](./field-properties.md#4dvector-class).  

### Índices padrão

Um índice padrão é destinado a acelerar operações de banco de dados (um índice padrão refere-se a um índice genérico, em oposição a um índice de palavras-chave ou composto). O 4D oferece dois tipos de arquiteturas para índices padrão: B-Tree e Cluster B-Tree.

- **B-Tree:** Índice padrão do tipo B-Tree. Este tipo de índice multipropósito atende à maioria das necessidades de indexação.
- **Cluster B-Tree:** Índice do tipo B-Tree usando clusters. Esta arquitetura é mais eficiente quando o índice não contém um grande número de chaves, ou seja, quando os mesmos valores ocorrem frequentemente nos dados.

:::note

Um índice B-Tree associado a um campo do tipo Text armazena os primeiros 1024 caracteres do campo (no máximo). Portanto, nesse contexto, buscas por strings com mais de 1024 caracteres não terão sucesso.

:::

Ao escolher a arquitetura do índice, o 4D também oferece a opção Automático. Nesse caso, o 4D seleciona automaticamente a arquitetura de acordo com o tipo de dado em questão.
A opção **Automático** é a única disponível para campos do tipo Object, exceto se você associar uma classe 4D.Vector ao campo ([veja abaixo](#vector-index)). De fato, com a opção **Automático**, todos os caminhos de atributos são indexados automaticamente.

### Índices compostos

Índices compostos armazenam os valores combinados de dois ou mais campos para cada entrada. O exemplo clássico é um índice composto baseado nos campos FirstName+LastName. Buscar por “Peter Smith” será otimizado em comparação com uma busca padrão (buscar por “Smith” e depois por “Peter”).

O 4D aproveita automaticamente os índices compostos durante consultas e ordenações. Por exemplo, se existir um índice composto “City+ZipCode”, ele será utilizado no caso de uma consulta do tipo “lastname=carter and city=new york and zipcode =102@”.

No editor de estrutura, índices compostos só podem ser criados usando a caixa de diálogo de criação de índice. Para uma descrição detalhada dessa caixa de diálogo, consulte a seção “Criando um índice” abaixo.

### Índice de palavras-chave

Você pode usar um tipo específico de índice com campos Alpha, Text e Picture: um índice de palavras-chave.

- Quando você associa esse tipo de índice a um campo Alpha ou Text, o texto armazenado no campo será indexado palavra por palavra. Todas as palavras serão indexadas, mesmo que tenham apenas 1 ou 2 caracteres. Esse tipo de índice acelera de forma significativa buscas posteriores por palavras-chave em campos de texto.  
  É possível associar tanto um índice padrão quanto um índice de palavras-chave a campos Alpha e Text (quando armazenados nos registros). O 4D usará o índice apropriado dependendo do contexto.

- Quando você associa esse tipo de índice a um campo Picture, buscas entre palavras-chave associadas às imagens (metadados) são muito aceleradas. Atenção: índices de palavras-chave para imagens são baseados exclusivamente em metadados do tipo IPTC/Keywords. Esses tipos de metadados são suportados especialmente pelos formatos TIFF e JPEG (note que BMP, PNG e GIF não os suportam). Outros tipos de metadados não são gerenciados pela indexação.  
  Índices de palavras-chave para imagens são atualizados automaticamente pelo 4D cada vez que o campo Picture é salvo (quando um registro é criado ou modificado, quando dados são importados, etc.). Metadados do tipo IPTC/Keywords são indexados automaticamente pelo 4D quando encontrados na imagem (não é necessário chamar o comando [`SET PICTURE METADATA`](../commands/set-picture-metadata) para incluí-los no índice do campo Picture).

Você pode usar o comando [`DISTINCT VALUES`](../commands/distinct-values) para obter a lista de palavras-chave contidas em um índice de palavras-chave.

Você utiliza índices de palavras-chave de imagem ou texto através do [operador `%`](../Concepts/dt_string.md#keywords): este operador deve ser colocado nas fórmulas de consulta ou ordenação para usar especificamente um valor de índice. Por exemplo:

```4d
QUERY([PICTURES];[PICTURES]Photos %"cats")
// procura fotos associadas à palavra-chave cats
```

Isso funciona da mesma forma para todos os comandos de consulta e ordenação: [`QUERY BY FORMULA`](../commands/query-by-formula), [`QUERY SELECTION`](../commands/query-selection), [`ORDER BY`](../commands/order-by), etc.


### Índice vetorial

Um índice vetorial pode ser associado a um campo do tipo Object que foi configurado como uma [classe](./field-properties.md#4dvector-class) `4D.Vector`. Nesse caso, as seguintes opções estão disponíveis:

![](../assets/en/Develop/vector-index.png)

- **Cosine**: o índice vetorial é otimizado para cálculos de [similaridade cosseno](../API/VectorClass.md#understanding-the-different-vector-computations).
- **Dot**: o índice vetorial é otimizado para cálculos de [similaridade por produto escalar](../API/VectorClass.md#understanding-the-different-vector-computations).
- **Euclidean**: o índice vetorial é otimizado para cálculos de [distância euclidiana](../API/VectorClass.md#understanding-the-different-vector-computations).
- **Automatic**: tipo padrão de índice para campo Object ([veja acima](#standard-indexes)). Você pode selecionar esse tipo de índice para tratar vetores nulos, ele será usado automaticamente nesse caso.

Você pode selecionar um ou mais tipos de índice para seus campos vetoriais, o índice apropriado será usado automaticamente dependendo do cálculo realizado. Por razões de otimização, recomenda-se selecionar apenas os tipos de índice necessários.


:::tip Post relacionado no blog

[Vector Indexing in 4D: Faster Similarity Search for 4D.Vector Fields](http://blog.4d.com/vector-indexing-in-4d-faster-similarity-search-for-4d-vector-fields)

:::

:::warning Limitação: Índices vetoriais e transações

Índices vetoriais não são compatíveis com [processamento de transações](../Develop/transactions). Quando registros indexados por vetor são inseridos, atualizados ou excluídos dentro de uma transação, as alterações correspondentes no índice não são confirmadas nem desfeitas com a transação. Como resultado, o índice vetorial pode ficar inconsistente com o estado do banco de dados após um rollback, e os resultados das buscas podem não refletir os dados persistidos.

:::


## Lista de índices

O botão ![](../assets/en/Develop/index-list.png) da barra de ferramentas no editor de Estrutura exibe a janela Lista de Índices. Esta janela exibe a lista de todos os índices da estrutura, independentemente do tipo:

![](../assets/en/Develop/index-window.png)


A Lista de Índices pode ser usada para visualizar as principais propriedades dos índices:

- **Tipo:** Tipo de índice. Cada tipo de índice (B-tree, Cluster B-tree, Keyword, Euclidean, Cosine, Dot) é representado por um ícone diferente.  
- **Descrição:** Tabela e campo(s) do índice. Para um índice composto, esta lista contém todos os campos do índice.  
- **Nome:** Nome do índice. Esta propriedade é usada em particular pelos comandos da linguagem. Você pode alterar ou adicionar um nome de índice clicando duas vezes nesta coluna.

O botão **[+]** exibe a caixa de diálogo de propriedades do índice e permite editar o índice selecionado ou adicionar um novo índice quando nenhum índice estiver selecionado.   
O botão **[-]** exclui o índice selecionado (uma caixa de confirmação aparece).  
Este botão pode ser usado especialmente para excluir índices compostos.  

Dois comandos adicionais estão disponíveis no menu associado ao botão de ferramenta (habilitados quando um índice está selecionado):

- **Editar:** Exibe as propriedades do índice selecionado na caixa de diálogo de propriedades do índice (veja o próximo parágrafo). Este comando tem o mesmo efeito que clicar duas vezes em uma linha da lista (exceto na área do nome).  
- **Reconstruir:** Pode ser usado para excluir e reconstruir o índice selecionado. Uma caixa de confirmação aparece ao selecionar este comando.

## Criando um índice

Para criar um **índice padrão** diretamente:

1. Selecione um campo e escolha um valor no menu "Índice" da **paleta do Inspetor**. 
**OU**  
Clique com o botão direito no campo e selecione um valor no submenu **Índice>** do menu de contexto.

Para criar um **índice composto** ou qualquer outro tipo de índice usando a caixa de diálogo de criação de índice:

1. Selecione vários campos mantendo pressionada a tecla **Shift** (para seleção adjacente) ou **Ctrl** (Windows) ou **Command** (macOS) e clique com o botão direito em um dos campos e selecione **Novo Índice Composto...** no menu de contexto.
**OU**  
Selecione **Novo Índice...** no menu de contexto da tabela ou selecione **Índice** no menu de adicionar objetos da barra de ferramentas do editor de Estrutura.  



A caixa de diálogo de configuração do índice será exibida.

![](../assets/en/Develop/index-add.png)

Ela contém os seguintes elementos:

- **Tabela:** Lista de todas as tabelas do banco de dados. Escolha a tabela à qual o índice pertencerá neste menu.  
- **Nome:** Área de entrada do nome do índice. Este nome é usado pelos comandos da linguagem 4D.  
- **Tipo:** Menu de seleção para o tipo de índice a ser criado. Se você mantiver a opção "Automático", o 4D escolherá automaticamente o tipo de índice de acordo com o conteúdo do campo.  
- **Lista de Campos:** Esta área é usada para especificar o(s) campo(s) associado(s) ao índice. Pode conter um campo por padrão, dependendo da seleção atual no editor.

Para adicionar um campo ao índice, clique no botão **[+]**. A lista de campos da tabela selecionada será exibida para que você possa indicar o campo a ser adicionado ao índice.

- Se você quiser criar um índice composto, adicione cada campo a ser incluído no índice sucessivamente. Uma vez que a lista esteja completa, você pode reordenar os campos usando os botões de seta ou arrastando e soltando.  
- Se você criar um índice composto baseado em campos de chave primária, certifique-se de colocar os campos na mesma ordem na chave primária e no índice.  
- Se você escolheu o tipo “Índice de Palavras-chave”, apenas campos Alpha ou Text podem ser selecionados. Também nesse caso, você não pode incluir apenas um campo no índice.

Para excluir um campo do índice, selecione-o na lista e clique no botão **[-]**.

Depois que o índice estiver configurado, clique em **OK** para gerar o índice.

## Excluindo um índice no editor de Estrutura

Você pode excluir índices que não são mais úteis a qualquer momento. Isso pode ser feito diretamente no editor de Estrutura ou usando a janela [Lista de Índices](#index-list).

Para excluir um índice padrão no editor de Estrutura:

1. Selecione o campo associado ao índice que deseja excluir e escolha **Nenhum** ou desmarque a opção **Índice de Palavras-chave** (para um índice de palavras-chave) no menu Índice da **paleta do Inspetor**
**OU**  
Clique com o botão direito no campo associado ao índice e escolha **Nenhum** ou desmarque a opção **Palavras-chave** no submenu **Índice>** do menu de contexto.

A exclusão (e visualização) de um índice composto só pode ser feita a partir da janela Lista de Índices, veja acima.

## Reindexando um campo

Você pode reindexar um campo a qualquer momento; ou seja, reconstruir a(s) tabela(s) de índice associada(s) a ele, de acordo com os dados presentes. Isso pode ser útil em casos de manutenção da aplicação.

A reindexação pode ser feita usando o comando **Reconstruir** na janela [Lista de Índices](#index-list).

Observe que modificar o [idioma dos dados](../settings/database.md#text-comparison) ou operações de manutenção como [compactação](../MSC/compact.md) também causarão a reconstrução dos índices.
