---
id: structure-exporting-and-importing 
title: Exportando e importando definições de estrutura
---

O 4D permite exportar a definição da estrutura do banco de dados como um arquivo XML ou HTML. Por outro lado, é possível utilizar uma definição de estrutura salva em formato XML para gerar um novo banco de dados 4D instantaneamente. Essas possibilidades atendem a diferentes necessidades:

- Permitir que estruturas sejam representadas em formatos personalizados (relatórios, tabelas, etc.) ou analisadas em outros ambientes,
- Permitir que bancos de dados sejam gerados a partir de arquivos de definição.

## Formato de uma definição de estrutura 4D

As definições de estrutura do 4D são baseadas no formato XML.  
Você pode exibir uma definição de estrutura usando um editor de texto simples. O formato XML também permite prever qualquer tipo de uso, em particular via transformações XSL. Além disso, o 4D utiliza um arquivo .XSL para exportar a definição da estrutura em formato HTML.

Uma definição de estrutura inclui tabelas, campos, índices e relações, juntamente com seus atributos e as diversas características necessárias para uma definição completa da estrutura. A “gramática” interna das definições de estrutura do 4D é documentada por meio de arquivos DTD — também utilizados para validação de arquivos XML. Os arquivos DTD usados pelo 4D estão agrupados na pasta DTD, localizada ao lado do aplicativo 4D. Os arquivos **base_core.dtd** e **common.dtd** são usados para a definição da estrutura. Para mais informações sobre definições de estrutura do 4D, consulte esses arquivos, bem como os comentários que eles contêm.

## Exportando uma definição de estrutura

O 4D permite exportar uma estrutura em formato XML ou HTML. Escolha o formato que melhor atenda às suas necessidades:

- **Formato XML:** Uma estrutura em formato XML pode ser visualizada usando um editor de texto simples ou utilizada de várias maneiras (transformação XSL personalizada, importação e análise em outro software, etc.).  
  Escolha este formato quando quiser usar a definição da estrutura para criar novos bancos de dados.

- **Formato HTML:** Este formato permite a representação da estrutura na forma de um relatório que pode ser visualizado e impresso via navegador.

Para exportar uma definição de estrutura em XML:

1. Selecione o comando **Exportar > Definição de estrutura para arquivo XML...** no menu Arquivo do 4D.  
2. Uma caixa de diálogo padrão Salvar como aparece para que você possa especificar o nome e o local, bem como o tipo de arquivo a ser exportado.  
3. Especifique o nome e o local da exportação e valide a caixa de diálogo.

Para exportar uma definição de estrutura em HTML:

1. Selecione o comando **Exportar > Definição de estrutura para arquivo HTML...** no menu Arquivo do 4D.  
2. Uma caixa de diálogo para seleção de pasta aparece para que você possa indicar o local onde os arquivos HTML serão armazenados.  
3. Clique em **Criar nova pasta** ou especifique uma pasta existente.  
   O 4D cria automaticamente, no local especificado, uma pasta chamada *“Mystructure.4db Structure Export”* que contém os itens exportados (*Mystructure.4db* representa o nome do banco de dados).  
4. Uma caixa de diálogo permite visualizar os resultados da exportação diretamente no navegador padrão. Definições de estrutura em formato HTML se parecem com isto:
[imagem aqui]

### Personalizando a transformação XSL

Para gerar as páginas HTML da definição de estrutura, o 4D realiza transformações XSL por padrão usando o arquivo **“Structure_to_html.xsl”** colocado na subpasta */Resource/language.lproj* do aplicativo.

:::note 

Se este arquivo não estiver presente, a exportação em HTML não estará disponível na caixa de diálogo de exportação.

:::

Você pode personalizar essas transformações conforme desejar usando um arquivo de folha de estilo XSL personalizado. Para isso, basta criar um arquivo chamado **“Structure_to_html.xsl”** (você pode duplicar o arquivo padrão) e colocá-lo no mesmo nível do arquivo *.4db*. O 4D então usará este arquivo para gerar a definição de estrutura em formato HTML.


## Criando um banco de dados a partir de uma definição de estrutura

Definições de estrutura exportadas em formato XML podem ser usadas para criar novos bancos de dados idênticos instantaneamente. Neste caso, a definição de estrutura pode ser considerada como um modelo de estrutura, que pode ser duplicado à vontade.

Uma definição de estrutura XML pode ser usada como está ou pode ser modificada previamente via um editor XML. Isso significa que pode-se considerar o uso de qualquer tipo de mecanismo para gerar estruturas por programação.

Além disso, como o formato interno dos arquivos XML de definição de estrutura do 4D é público (veja a seção “Formato de uma definição de estrutura 4D” acima),  
é possível construir esse tipo de arquivo a partir de outros ambientes de banco de dados ou qualquer aplicativo de design para gerar bancos de dados 4D automaticamente.

Para criar um banco de dados a partir de uma definição de estrutura:

1. Selecione o comando **Novo > Banco de dados a partir de definição de estrutura...** no menu Arquivo do 4D.  
   Uma caixa de diálogo padrão Abrir documento aparece para que você possa especificar o arquivo de definição a ser aberto.  
   Você deve selecionar um arquivo em formato XML que respeite a “gramática” das definições de estrutura do 4D (o programa valida o arquivo DTD).  
2. Selecione um arquivo XML de definição de estrutura e clique em **OK**.  
   O 4D exibe uma caixa de diálogo que pode ser usada para escolher o nome e o local do banco de dados a ser criado.  
3. Escolha o nome e o local do banco de dados a ser criado e clique em **OK**.
Se o arquivo XML for válido, o 4D fecha o banco de dados atual (se aplicável) e cria o novo banco de dados usando o arquivo de definição de estrutura e exibe sua janela do Explorer.  
Um arquivo de dados vazio também é criado.
