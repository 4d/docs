---
id: analysis
title: Página análise de atividades
sidebar_label: Página análise de atividades
---

A página Análise da atividade permite visualizar o conteúdo do ficheiro de registo atual. Esta função é útil para analisar o uso de um banco de dados ou detectar as operações que causaram erros ou mal funcionamento. No caso de um banco de dados em modo cliente-servidor, permite verificar as operações realizadas por cada máquina cliente.

> Também é possível reverter as operações realizadas nos dados do banco de dados. Para más información, consulte [Página de retroceso](rollback.md).

![](../assets/en/MSC/MSC_analysis.png)

Cada operação registada no ficheiro de registo aparece como uma linha. As colunas fornecem várias informações sobre a operação. Pode reorganizar as colunas conforme pretendido, clicando nos respectivos cabeçalhos.

Essas informações permitem que você identifique a origem e o contexto de cada operação:

- **Operación**: número de secuencia de la operación en el archivo de historial.

- **Acción**: tipo de operación realizada sobre los datos. Esta coluna pode conter uma das seguintes operações:
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
    - Contexto de actualización: cambio de datos adicionales (por ejemplo, una llamada a `CHANGE CURRENT USER` o `SET USER ALIAS`).

- **Tabla**: tabla a la que pertenece el registro añadido/borrado/modificado o el BLOB.

- **Llave primaria/BLOB**: contenido de la llave primaria de cada registro (cuando la llave primaria se compone de varios campos, los valores se separan con punto y coma) o número de secuencia del BLOB implicado en la operación.

- **Proceso**: número interno del proceso en el que se realizó la operación. Este número interno corresponde ao contexto da operação.

- **Tamaño**: tamaño (en bytes) de los datos procesados por la operación.

- **Fecha y hora**: fecha y hora en que se realizó la operación.

- **Usuario sistema**: nombre del sistema del usuario que realizó la operación. Em modo cliente-servidor, o nome da máquina do lado do cliente é exibido; em modo monousuário, a ID do usuário é exibida.

- **Usuario 4D**: nombre de usuario 4D del usuario que ha realizado la operación. Se um alias for definido para o usuário, o alias será exibido em vez do nome de usuário 4D.

- **Valores**: valores de los campos del registro en caso de adición o de modificación. Os valores são separados por ";". Only values represented in alphanumeric form are displayed.\
    Only values represented in alphanumeric form are displayed.\
    Only values represented in alphanumeric form are displayed.\
    Only values represented in alphanumeric form are displayed.\
    Only values represented in alphanumeric form are displayed.\
    ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*\
    Only values represented in alphanumeric form are displayed.\
    Only values represented in alphanumeric form are displayed.\
    Only values represented in alphanumeric form are displayed.\
    Only values represented in alphanumeric form are displayed.\
    ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*

- **Registros**: número del registro.

Haga clic en **Analizar** para actualizar el contenido del archivo de historial actual de la aplicación seleccionada (llamado por defecto nomdatos.journal). O botão Navegar pode ser usado para selecionar e abrir outro arquivo de histórico para o banco de dados. El botón **Exportar...** puede utilizarse para exportar el contenido del archivo como texto.

