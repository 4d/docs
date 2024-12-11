---
id: log-file-to-json
title: LOG FILE TO JSON
slug: /commands/log-file-to-json
displayed_sidebar: docs
---

<!--REF #_command_.LOG FILE TO JSON.Syntax-->**LOG FILE TO JSON** ( *rotaPastaDest* {; *tamMax* {; *rotaHist* {; *atrCampo*}}} )<!-- END REF-->
<!--REF #_command_.LOG FILE TO JSON.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaPastaDest | Text | &#8594;  | Rota da pasta de destino do arquivo salvo |
| tamMax | Integer | &#8594;  | Tamanho máximo do arquivo JSON a criar (bytes) |
| rotaHist | Text | &#8594;  | Rota do arquivo de histórico a exportar; se omitido, usa o arquivo de histórico atual |
| atrCampo | Integer | &#8594;  | Descrição do atributo do campo: 1 = usa número (padrão), 2 = usa nome |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LOG FILE TO JSON.Summary-->O comando **LOG FILE TO JSON** salva em formato JSON o arquivo de histórico atual ou todo arquivo de histórico especificado.<!-- END REF-->

Quando o histórico (arquivo binário) for salvado em JSON, seu conteúdo pode ser lido e interpretado pelo administrador do banco de dados ou por qualquer usuário com o objetivo de analisar os eventos do banco de dados, por exemplo.

Em *rotaPastaDest*, passe a rota da pasta na que deseja armazenar o arquivo JSON. Este arquivo se chama **JournalExport.json**.

De forma pré-determinada, o tamanho máximo do arquivo JSON exportada é de 10 MB. Quando for alcançado este tamanho, o arquivo é fechado e é criado um novo arquivo. Limitar o tamanho de cada arquivo JSON reduz as exigências de memória para a análise dos arquivos. Pode mudar o tamanho máximo para o arquivo exportado definindo um valor (em bytes) no parâmetro *tamMax*. Passar 0 restaura o tamanho pré-determinado. Passar um valor negativo elimina todo limite de tamanho. 

De forma pré-determinada, se o parâmetro *rotaHist*, for omitido o comando salva o arquivo de histórico atual. Se desejar exportar um arquivo de histórico específico, passe sua rota no parâmetro *rotaHist*. O arquivo de histórico deve ser um arquivo com uma extensão ".journal". Se desejar exportar um arquivo de histórico arquivado (extensão ".4bl"), é necessário converter o arquivo anteriormente com o comando [RESTORE](restore.md). Pode passar uma string vazia ("") para mostrar o diálogo padrão de abrir arquivo, o que permite ao usuário selecionar o arquivo de histórico a salvar. A rota do arquivo de histórico selecionado é devolvido na variável sistema **Document**.

**Nota:** quando o comando guardar o arquivo de histórico atual, o banco de dados não está bloqueado. As novas operações podem ser executadas enquanto o arquivo é escrito no disco, estas operações não são incluidas no arquivo salvo.

Quando exportar o arquivo de historial atual, o parâmetro *atribCampo* lhe permite definir como se descrevem os campos no atributo exportado: por número (pré-determinado), ou por nome. Pode passar uma das seguintes constantes, que se encontra no tema "*Backup*":

| Constante                   | Tipo          | Valor | Comentário                                                                                        |
| --------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------- |
| Field attribute with name   | Inteiro longo | 2     | Os campos são identificados por seu nome. Exemplo: {"Sobrenome":"Gómez"}                          |
| Field attribute with number | Inteiro longo | 1     | Os campos são identificados por seu número (como padrão se for omitido). Exemplo: { "5":"Jones"}. |

**Nota:** quando exportar um arquivo de histórico externo, os campos sempre se identificam por seu número.

O arquivo JSON salvo contém todas as operações registradas no histórico, em forma de um array de objetos JSON. Cada objeto contém várias propriedades que descrevem a operação. Exemplo:

```json
[   {      "operationType":25,      "operationName":"Modify record",      "operationNumber":45,      "contextID":37,      "timeStamp":"2015-06-11T09:13:17.138Z",      "dataLen":42,      "recordNumber":4,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": "primkey5",            "2": -5,            "5": "data 25"        },      "primaryKey": "8"   },   {      "operationType":23,      "operationName":"Save seqnum",      "operationNumber":46,      "contextID":37,      "timeStamp":"2015-06-11T09:13:17.138Z",      "sequenceNumber":23,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem"    },   {      "operationType":24,      "operationName":"Create record",      "operationNumber":47,      "contextID":37,      "timeStamp":"2015-06-11T09:13:17.138Z",      "dataLen":570,      "recordNumber":7,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": 9,            "2": "test value",            "3": "2003-03-03T00:00:00.000Z",            "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "8": "BlobID: 2"       },      "extraData": {          "task_id": 1,          "user_name": "Vanessa Smith",          "user4d_id": 1,          "host_name": "iMac-VSmith-0833",          "task_name": "Application process",          "client_version": -1610541776      },      "primaryKey": "9"   }]
```

**Nota:** se passou Field attribute with name no parâmetro *atribCampo*, o objeto "fields" conterá:  

```json
...      "fields": {            "ID": 9,            "Field_2": "test value",            "Date_Field": "2003-03-03T00:00:00.000Z",            "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "Field_8": "BlobID: 2"       },...
```

##### 

A lista atual de propriedades disponíveis depende do tipo de operação (por exemplo: criar registros, apagar registros, modificar registros, etc.). Aqui estão algumas das propriedades principais:

* *operationType*: código interno para a operação
* *operationName*: tipo da operação, por exemplo "criar registro", "modificar registro"
* *operationNumber*: número interno da operação no arquivo de log
* *contextID*: ID do contexto da execução
* *timeStamp*: timestamp da operação no arquivo de log
* *dataLen*: tamanhos dos dados
* *recordNumber*: número interno do registro
* *tableID*: ID interna da tabela
* *tableName*: nome da tabela
* *fields*: objeto contendo a lista dos nùmeros de campo (ou nomes de campo) com seus valores. Quaisquer campos com um valor modificado estão logados.  
No caso de valores Blob ou imagem, diferentes informações são oferecidas baseadas na localização do armazenamento:  
   * Se o Blob ou imagem for armazenado dentro do arquivo de dados, a propriedade será "BlobID:"+ um número interno Blob, por exemplo: "BlobID:1"  
   * Se o Blob ou imagem for armazenado fora do arquivo de dados, a propriedade será "BlobPath:" + o caminho para os dados, por exemplo: "BlobPath: Table 1/Field 6/Data\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData*: dados contextual de usuário, incluindo nome do usuário e ID, nome de tarefa e ID, nome da máquina host, e versão cliente.
* *sequenceNumber*: número atual com sequência de auto incremento.
* *primaryKey*: valor da chave primária.

(\*) Nos bancos de dados projeto, a propriedade "user4d\_id" não é devolvida.

#### Exemplo 

Para exportar o arquivo atual de journal em JSON:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs")
```

Para exportar um arquivo de journal arquivado em JSON:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs";0;"c:\\4Dv15\\Backup\\old_myDB.journal";Field attribute with name)
```

#### Variáveis e conjuntos do sistema 

Ocomando **LOG FILE TO JSON** modifica o valor das variáveis OK e Document: se o arquivo JSON for guardado corretamente, OK toma o valor 1 e Document contem o nome de rota do arquivo de histórico. Se for passado "" no parâmetro *rutaLog* e o usuário cancelar o quadro de diálogo de seleção de arquivos, OK toma o valor 0 e o Document contém uma string vazia. Se o usuário selecionar um arquivo não válido, OK toma o valor 0 e o documento contém a rota do arquivo.  

#### Ver também 

  
[INTEGRATE MIRROR LOG FILE](integrate-mirror-log-file.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1352 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document |
| Proibido no servidor ||


