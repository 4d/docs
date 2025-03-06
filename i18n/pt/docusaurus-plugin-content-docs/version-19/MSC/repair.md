---
id: repair
title: Página de reparação
sidebar_label: Página de reparação
---

Esta página é utilizada para reparar o ficheiro de dados quando este foi danificado. Geralmente só se usa essas funções sob a supervisão de times técnicos 4D, quando anomalias forem detectadas quando abrir a aplicação ou após uma [verificação](verify.md).

**Aviso:** cada operação de reparo envolve a duplicação do arquivo original, o que aumenta o tamanho da pasta da aplicação. É importante ter isto em conta (especialmente em macOS onde as aplicações 4D aparecem como pacotes) para que o tamanho da aplicação não aumente excessivamente. A remoção manual das cópias do arquivo original no pacote pode ser útil para minimizar o tamanho do pacote.
> O reparo só está disponível no modo manutenção. Se tentar fazer essa operação em modo padrão, um aviso informará que o banco de dados será fechado e reiniciado em modo manutenção.
> Quando o banco de dados está encriptado, a reparação dos dados inclui passos de desencriptação e encriptação e, por isso, requer a chave de encriptação de dados atual. Se nenhuma chave de criptografia válida já tiver sido fornecida, será exibida uma caixa de diálogo solicitando a frase secreta ou a chave de criptografia (consulte a página Criptografar).

## Arquivos

### Ficheiro de dados a reparar

Nome do caminho do ficheiro de dados atual. O botão **[...]** pode ser usado para especificar outro arquivo de dados. Quando você clica nesse botão, uma caixa de diálogo padrão Abrir documento é exibida para você poder designar o arquivo de dados a ser reparado. Se você executar um [reparo padrão](#standard-repair), deverá selecionar um arquivo de dados que seja compatível com o arquivo projeto aberto. Se você executar um reparo de [recuperação por cabeçalhos de registro](#recover-by-record-headers), poderá selecionar qualquer arquivo de dados. Depois que essa caixa de diálogo for validada, o nome do caminho do arquivo a ser reparado será indicado na janela.

### Pasta de cópia de segurança dos ficheiros originais

Por padrão, o arquivo de dados original será duplicado antes da operação de reparo. Ele será colocado em uma subpasta chamada "Replaced files (repairing)" na pasta da aplicação. O segundo botão **[...]** pode ser usado para especificar outro local para os arquivos originais a serem salvos antes do início do reparo. Essa opção pode ser usada mais particularmente ao reparar arquivos volumosos ao usar discos diferentes.

### Ficheiros reparados

4D cria um ficheiro de dados em branco no local do ficheiro original. 4D creates a new blank data file at the location of the original file. O ficheiro em branco é preenchido com os dados recuperados.

## Reparação standard

A reparação padrão deve ser escolhida quando apenas alguns registos ou índices estão danificados (as tabelas de endereços estão intactas). Os dados são compactados e reparados. Esse tipo de reparo só pode ser realizado quando os dados e o arquivo de estrutura coincidem.

Quando o procedimento de reparo for concluído, a página "Reparo" do CSM será exibida. Uma mensagem indica se a reparação foi bem sucedida. Se for assim, pode abrir o banco de dados imediatamente. ![](../assets/en/MSC/MSC_RepairOK.png)

## Recuperar por cabeçalhos de registos

Usar esta opção de reparo de baixo nível somente quando o arquivo de dados estiver gravemente danificado e depois de todas as outras soluções (restaurando de um backup, reparo padrão) provou ser ineficaz.

Os registros 4D variam em tamanho, portanto, é necessário manter o local em que estão armazenados no disco em uma tabela específica, denominada tabela de endereços, para poderem ser encontrados novamente. Portanto, o programa acessa o endereço do registro por um índice e da tabela de endereços. Se apenas os registros ou índices estiverem danificados, a opção de reparo padrão geralmente é suficiente para resolver o problema. No entanto, quando a própria tabela de endereços é afetada, é necessária uma recuperação mais sofisticada, pois será necessário reconstituí-la. Para fazer isso, o CSM usa o marcador localizado no cabeçalho de cada registro. Os marcadores são comparados a um resumo do registro, incluindo a maior parte de suas informações, e a partir do qual é possível reconstruir a tabela de endereços.

> Se desmarcou a opção **Registros eliminados definitivamente** nas propriedades de uma tabela na estrutura do banco de dados, a reparação por marcadores de cabeçalhos pode fazer que reapareçam os registros eliminados anteriormente.
> 
> A recuperação por cabeçalhos não tem em conta as restrições de integridade. Mais especificamente, após essa operação, você poderá obter valores duplicados com campos exclusivos ou valores NULL com campos declarados **Nunca Null**.

Quando você clica em **Reparar...**, 4D realiza uma verificação completa do arquivo de dados. Quando a verificação estiver concluída, os resultados aparecem na janela seguinte:

![](../assets/en/MSC/mscrepair2.png)
> Se todos os registos e todas as tabelas tiverem sido atribuídos, apenas a área principal é mostrada.

A área "Registros encontrados no arquivo de dados" inclui duas tabelas que resumem as informações da varredura do arquivo de dados.

- A primeira tabela lista as informações provenientes da verificação do ficheiro de dados. Cada linha mostra um grupo de registos recuperáveis no ficheiro de dados:
  - A coluna **Ordem** indica a ordem de recuperação do grupo de registros.
  - A coluna **Count** indica o número de registros na tabela.
  - A coluna **tabela de destino** indica os nomes das tabelas que foram automaticamente atribuídas aos grupos de registros identificados. Os nomes das tabelas atribuídas aparecem automaticamente a verde. Os grupos que não foram atribuídos, ou seja, as tabelas que não puderam ser associadas a nenhum registro, aparecem em vermelho.
  - A coluna **Recuperar** permite indicar, para cada grupo, se você deseja recuperar os registros. Por padrão, essa opção é marcada para todos os grupos com registros que podem ser associados a uma tabela.

- A segunda tabela lista as tabelas do ficheiro de projeto.

### Atribuição manual

Se vários grupos de registros não puderem ser atribuídos a tabelas devido a uma tabela de endereços danificada, é possível atribuí-los manualmente. Para fazer isso, primeiro selecione um grupo de registros não atribuído na primeira tabela. A área "Conteúdo dos registros" exibe uma visualização do conteúdo dos primeiros registros do grupo para facilitar a atribuição:

![](../assets/en/MSC/mscrepair3.png)

Em seguida, selecione a tabela que deseja atribuir ao grupo na tabela "Tabelas não atribuídas" e clique no botão **Identificar tabela**. Também pode atribuir uma tabela utilizando a função arrastar e largar. O grupo de registros é então associado à tabela e será recuperado nessa tabela. Os nomes das tabelas atribuídas manualmente aparecem a preto. Use o botão **Ignorar registros** para remover a associação feita manualmente entre a tabela e o grupo de registros.

## Abrir arquivo de registo

Depois que a reparação terminar, 4D gera um arquivo de histórico na pasta Logs do banco de dados. Este arquivo permite visualizar todas as operações efectuadas. É criado no formato XML e chamado: *DatabaseName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*" onde:

- *NomBase* é o nome do arquivo de estrutura sem extensão, por exemplo "Faturas",
- *yyyy-mm-dd hh-mm-ss* é o carimbo de data/hora do arquivo, com base na hora do sistema local quando a operação de manutenção foi iniciada, por exemplo "2019-02-11 15-20-45".

Quando clica no botão **Abrir arquivo de registo** , 4D mostra o arquivo de registo mais recente no navegador predefinido da máquina.
