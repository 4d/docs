---
id: compact
title: Compact Page
---

Esta página é utilizada para aceder às funções de compactação de arquivos de dados.

## Porquê compactar seus arquivos?

A compactação de ficheiros responde a dois tipos de necessidades:

- **Redução do tamanho e otimização dos arquivos**: os arquivos podem conter espaços não utilizados ("ocos"). De fato, quando se eliminam registos, o espaço que estes ocupavam anteriormente no arquivo fica vazio. 4D reutiliza esses espaços vazios sempre que possível, mas como o tamanho dos dados é variável, eliminações ou modificações sucessivas inevitavelmente geram espaço inutilizável para o programa. O mesmo acontece quando uma grande quantidade de dados acaba de ser eliminada: os espaços vazios ficam por atribuir no arquivo. A relação entre o tamanho do arquivo de dados e o espaço efetivamente utilizado para os dados é a taxa de ocupação dos dados. Uma taxa demasiado baixa pode levar, para além de um desperdício de espaço, à deterioração do desempenho da base de dados. A compactação pode ser utilizada para reorganizar e otimizar o armazenamento dos dados, de modo a eliminar os "buracos". A área "Informação" resume os dados relativos à fragmentação do arquivo e sugere operações a realizar. O separador [Data](information.md#data) na página "Information" (Informações) do MSC indica a fragmentação do arquivo de dados atual.

- **Atualização completa dos dados** aplicando a formatação atual definida no arquivo de estrutura. Isto é útil quando os dados da mesma tabela foram armazenados em formatos diferentes, por exemplo, após uma alteração na estrutura da base de dados.
> A compactação só está disponível no modo de manutenção. Se tentar realizar essa operação em modo padrão, uma caixa de diálogo de aviso informará que o banco de dados será fechado e reiniciado em modo manutenção. Pode compactar um arquivo de dados que não esteja aberto pelo banco de dados (ver [Compactar os registros e os índices](#compact-records-and-indexes) abaixo).

## Compactação standard

Para iniciar diretamente a compactação do arquivo de dados, clique no botão de compactação na janela MSC.

![](../assets/en/MSC/MSC_compact.png)
> Já que a compactação envolve a duplicação do arquivo original, o botão é desativado quando não existir espaço suficiente disponível no disco que contém o arquivo.

Esta operação compacta o arquivo principal, bem como quaisquer arquivos de índice. 4D copia os arquivos originais e os coloca em uma pasta chamada **Replaced Files (Compacting)**, que é criada ao lado do arquivo original. Se tiver efetuado várias operações de compactação, é criada uma nova pasta de cada vez. Será denominado "arquivos substituídos (compactação)_1", "arquivos substituídos (compactação)_2", e assim por diante. Pode modificar a pasta onde os arquivos originais são guardados utilizando o modo avançado.

Quando a operação estiver concluída, os arquivos compactados substituem automaticamente os arquivos originais. O banco de dados fica operacional imediatamente sem outras manipulações.
> Quando a base de dados está encriptada, a compactação inclui passos de desencriptação e encriptação e, por isso, requer a chave de encriptação de dados atual. Se ainda não tiver sido fornecida uma chave de dados válida, é apresentada uma caixa de diálogo que pede a frase-chave ou a chave de dados.

**Aviso:** Cada operação de compactação envolve a duplicação do arquivo original, o que aumenta o tamanho da pasta da aplicação. É importante ter isto em conta (especialmente em macOS onde as aplicações 4D aparecem como pacotes) para que o tamanho da aplicação não aumente excessivamente. A remoção manual das cópias do arquivo original dentro do pacote pode ser útil para manter o tamanho do pacote reduzido.

## Abrir arquivo de registo

Depois que a compactação terminar, 4D gera um arquivo de histórico na pasta Logs do banco de dados. Este arquivo permite visualizar todas as operações efectuadas. É criada no formato XML e se chama  *DatabaseName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml*" onde:

- *NomBase* é o nome do arquivo de estrutura sem extensão, por exemplo "Faturas",
- *yyyy-mm-dd hh-mm-ss* é o carimbo de data/hora do arquivo, com base na hora do sistema local quando a operação de manutenção foi iniciada, por exemplo "2019-02-11 15-20-45".

Quando clica no botão **Abrir arquivo de registo** , 4D mostra o arquivo de registo mais recente no navegador predefinido da máquina.


## Modo avançado

A página Compactar contém um botão **Advanced>** , que pode ser utilizado para acessar uma página de opções para compactar o arquivo de dados.

### Compactação de registros e índices

A área **Compact records and indexes** apresenta o nome do caminho do arquivo de dados atual, bem como um botão **[...]** que pode ser utilizado para especificar outro arquivo de dados. Quando se clica neste botão, é apresentada uma caixa de diálogo padrão Abrir documento para que se possa designar o arquivo de dados a compactar. É necessário selecionar um arquivo de dados que seja compatível com o arquivo de estrutura aberta. Uma vez validada esta caixa de diálogo, o nome do caminho do arquivo a compactar é indicado na janela.

O segundo botão **[...]** pode ser utilizado para especificar outra localização para os arquivos originais a serem guardados antes da operação de compactação. Esta opção pode ser utilizada mais particularmente para compactar ficheiros volumosos enquanto utiliza discos diferentes.

### Forçar a atualização dos registos

Quando esta opção estiver marcada, 4D reescreve cada registo para cada tabela durante a operação de compactação, de acordo com a sua descrição na estrutura. Se esta opção não estiver marcada, 4D apenas reorganiza o armazenamento de dados no disco. Esta opção é útil nos seguintes casos:

- Quando os tipos de campo são alterados na estrutura da aplicação depois de os dados terem sido introduzidos. Por exemplo, pode ter alterado um campo Longint para um tipo Real. 4D até permite mudanças entre dois tipos muito diferentes (com riscos de perda de dados), por exemplo, um campo Real pode ser mudado para Texto e vice-versa. Neste caso, 4D não converte dados já introduzidos retroativamente; os dados são convertidos apenas quando os registos são carregados e depois guardados. Esta opção força a conversão de todos os dados.

- Quando uma opção de armazenamento externo para dados de Texto, Imagem ou BLOB tiver sido alterada após a introdução dos dados. Isto pode acontecer quando as bases de dados são convertidas a partir de uma versão anterior à v13. Como é o caso da redigitação descrita acima, 4D não converte dados já inseridos retroativamente. Para isso, é possível forçar a atualização dos registros para aplicar o novo modo de armazenamento aos registros que já foram entrados.

- Quando as tabelas ou campos foram eliminados. Neste caso, a compactação com atualização de registos recupera o espaço destes dados removidos, reduzindo assim o tamanho do arquivo.
> Todos os índices são atualizados quando esta opção é selecionada.

### Compactar a tabela de endereços

(opção apenas ativa quando a opção anterior está marcada)

Esta opção reconstrói completamente a tabela de endereços para os registos durante a compactação. Isto optimiza o tamanho da tabela de endereços e é utilizado principalmente para bases de dados onde foram criados e depois eliminados grandes volumes de dados. Noutros casos, a otimização não é um fator decisivo.

Note que esta opção atrasa substancialmente a compactação e invalida quaisquer conjuntos guardados com o comando `SAVE SET` . Além disso, recomendamos vivamente a eliminação dos conjuntos guardados neste caso, porque a sua utilização pode levar a selecções de dados incorrectos.

:::note Notas

- A compactação tem em conta os registos das tabelas que foram colocadas no Lixo. Se houver um grande número de registos no Lixo, este pode ser um fator adicional que pode tornar a operação mais lenta.
- A utilização desta opção torna a tabela de endereços e, consequentemente, a base de dados, incompatível com o arquivo de diário atual (se existir). Será salvado automaticamente e um novo arquivo de histórico será criado na próxima vez que o banco for lançado.
- Pode decidir se a tabela de endereços precisa de ser compactada, comparando o número total de registos e o tamanho da tabela de endereços na página [Information](information.md) do MSC.
- O comando [`TRUNCATE TABLE`](https://doc.4d.com/4dv19R/help/command/en/page1051.html) reinicia automaticamente a tabela de endereços para a tabela especificada.

:::
