---
id: analysis
title: Página análise de atividades
sidebar_label: Página análise de atividades
---

A página Análise da atividade permite visualizar o conteúdo do ficheiro de registo atual. Esta função é útil para analisar o uso de um banco de dados ou detectar as operações que causaram erros ou mal funcionamento. No caso de um banco de dados em modo cliente-servidor, permite verificar as operações realizadas por cada máquina cliente.
> Também é possível reverter as operações realizadas nos dados do banco de dados. Para mais informações, consulte [página Retornar](rollback.md).

![](../assets/en/MSC/MSC_analysis.png)

Cada operação registada no ficheiro de registo aparece como uma linha. As colunas fornecem várias informações sobre a operação. Pode reorganizar as colunas conforme pretendido, clicando nos respectivos cabeçalhos.

Essas informações permitem que você identifique a origem e o contexto de cada operação:

- **Operação**: número de sequência da operação no arquivo de registro.
- **Ação**: tipo de operação efetuada sobre os dados. Esta coluna pode conter uma das seguintes operações:
    - Abertura de ficheiro de dados: abertura de um ficheiro de dados.
    - Encerramento do ficheiro de dados: encerramento de um ficheiro de dados aberto.
    - Criação de um contexto: criação de um processo que especifica um contexto de execução.
    - Encerramento de um contexto: encerramento de um processo.
    - Adição: Criação e armazenamento de um registo.
    - Adicionar um BLOB: armazenamento de um BLOB num campo BLOB.
    - Eliminação: eliminação de um registo.
    - Modificação: modificação de um registo.
    - Início da transação: a transação foi iniciada.
    - Validação da transação: transação validada.
    - Cancelamento da transação: transação cancelada.
    - Contexto de atualização: alteração em dados adicionais (por exemplo, uma chamada para `CHANGE CURRENT USER` ou `SET USER ALIAS`).

- **Tabela**: tabela à qual pertence o registro ou BLOB adicionado/excluído/modificado.
- **Chave Primária/BLOB**: conteúdo da chave primária para cada registro (quando a chave primária consiste em vários campos, os valores são separados por ponto e vírgula) ou o número de sequência do BLOB envolvido na operação.
- **Processo**: número interno do processo onde a operação foi executada. Este número interno corresponde ao contexto da operação.
- **Tamanho**: tamanho (em bytes) dos dados processados pela operação.
- **Data e hora**: data e hora em que a operação foi realizada.
- **Usuario**: nome de usuário que realizou a operação. Em modo cliente-servidor, o nome da máquina do lado do cliente é exibido; em modo monousuário, a ID do usuário é exibida.
- **Usuário 4D**: nome de usuário 4D do usuário que executou a operação. Se um alias for definido para o usuário, o alias será exibido em vez do nome de usuário 4D.
- **Valores**: valores de campos para o registro no caso de adição ou modificação. Os valores são separados por ";". Somente os valores representados em formato alfanumérico são exibidos.  
  ***Nota:** se o banco de dados estiver criptografado e nenhuma chave de dados válida correspondente ao arquivo de registro aberto tiver sido fornecida, os valores criptografados não serão exibidos nessa coluna.*
- **Registos**: número de registo.

Clique em **Analisar** para atualizar o conteúdo do arquivo de histórico atual do banco selecionada (chamado como padrão dataname.journal). O botão Navegar pode ser usado para selecionar e abrir outro arquivo de histórico para o banco de dados. O botão **Exportar...** pode ser usado para exportar o conteúdo do arquivo como texto.

