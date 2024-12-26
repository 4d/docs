---
id: integrate-mirror-log-file
title: INTEGRATE MIRROR LOG FILE
slug: /commands/integrate-mirror-log-file
displayed_sidebar: docs
---

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Syntax-->**INTEGRATE MIRROR LOG FILE** ( *viaAcesso* ; *numOperacao* {; *mode* {; *errObject*}} )<!-- END REF-->
<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| viaAcesso | Text | &#8594;  | Nome ou via de acesso do arquivo de histórico a integrar |
| numOperacao | Real | &#8594;  | Número da última operação integrada |
| &#8592; | Novo Número da última operação integrada |
| mode | Integer | &#8594;  | 0 = modo estrito (modo padrão), 1 =  modo auto reparo |
| errObject | Object | &#8592; | Operações com erro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Summary-->**Nota preliminar:** este comando só funciona com 4D Server.<!-- END REF--> Só pode ser executado através do comando [Execute on server](execute-on-server.md) ou em um procedimento armazenado.

O **INTEGRATE MIRROR LOG FILE**  integra o arquivo de histórico designado por *viaAcesso* em uma base 4D Server, a partir da operação *numOperacao* (opcional).

O comando aceita integrar todo arquivo de histórico na base, inclusive se não corresponde ao arquivo de dados. Este comando está destinado especificamente para seu uso no contexto de uma base espelho.

**Nota:** a partir de 4D v14, é possível utilizar um arquivo de histórico no contexto de uma base "espelho": a opção "Utilizar arquivo de histórico" agora pode selecionar nas propriedades da base 4D Server utilizada como um espelho lógico, portanto, permitindo a implementação de uma série de servidores espelho em série(ver *Configurar um espelho lógico* no mamual 4D Server).  
  
A diferença do comando *\_o\_INTEGRATE LOG FILE*, ao final de sua execução **INTEGRATE MIRROR LOG FILE** não substitui o arquivo de histórico atual integrado ao histórico atual da base: o arquivo de histórico da base continua sendo utilizado. Consequentemente, qualquer mudança realizada durante a integração foi guardada no arquivo de histórico atual.

Em *viaAcesso*, passe uma via absoluta ou relativa a pasta da base. Se passar uma cadeia vazia neste parâmetro, aparecerá uma caixa de diálogo padrão de abertura do arquivo para que possa designar o arquivo a integrar. Se cancelar esta caixa de diálogo, nenhum arquivo se integra e a variável sistema OK toma o valor 0.

Por padrão, quando se omite o parâmetro *numOperacao*, o comando integra todas as operações do arquivo de histórico.  
Se passar um valor no parâmetro *numOperacao*, a integração começa no valor especificado. Depois da integração, se passou uma variável em *numOperacao*, este parâmetro contém o número da última operação integrada. Isto lhe permite seguir adiante com posteriores integrações do arquivo de histórico, passando diretamente o valor devolvido em *numOperacao* durante a seguinte chamada a **INTEGRATE MIRROR LOG FILE**.

Nota de compatibilidade: em versões anteriores a 4D v15 R4, o parâmetro operationNum era opcional: entretanto, de agora em diante, se o parâmetro operationNum for omitido, um erro é gerado. Para restaurar o funcionamento original de seu código anterior, pode passar -2 no parâmetro variável.   
  
Em modo, pode passar o modo de integração que quiser ativar. Pode usar uma das seguintes constantes encontradas no tema "*Backup*":  
  
| Constante        | Tipo          | Valor | Comentário                                                                                                     |
| ---------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------- |
| Auto repair mode | Inteiro longo | 1     | Utilizar o modo flexível com as ações de reparação automática e preencher o parâmetro *errObject* (se houver ) |
| Strict mode      | Inteiro longo | 0     | Utilize o modo de integração estrito (por padrão)                                                              |

  
 Modo estrito: Neste modo, logo que um erro ocorre durante integração, ele é parado e é necessário usar o MSC de modo a rastrear o erro. O modo seguro é usado como padrão e é recomendado na maioria dos casos.  
  
 Modo auto reparo: Neste modo, quando um erro não crítico ocorre, ele é ignorado e a integração continua. Se passar o parâmetro errObjet, cada erro é registrado e pode ser analisado depois.  
 Casos de erros não críticos são:  
 As requisições de registro para adicionar um registro, mas este registro já existe nos dados.  
 Ação de reparo: 4D atualiza o registro.  
 O registro exige para atualizar um registro, mas este registro ainda não existe.  
 Ação de reparo: 4D adiciona o registro.  
 O histórico exige apagar um registro, mas este registro não existe.  
 Ação de reparo: 4D não faz nada.  
  
Nota: em modo estrito (padrão) integração para no primeiro erro encontrado. Neste caso, se quiser continuar com a integração precisará usar o MSC.  
  
Quando uma das anomalias ocorre no modo auto-reparo, o registro em questão é automaticamente "reparado" e a operação relacionada é registrada no parâmetro erroObjeto. Depois que a execução for completa, o parâmetro errObjeto lista todos os registros reparados. Contém um objeto de array chamado "operações" construído como abaixo:

O diagrama seguinte (pseudo código) detalha o processo de integração dependendo dos diferentes casos. No arquivo de histórico a integrar, X é o número da primeira operação e Y é o número da última:

```json
{"operations":    [        {            "operationType":24,            "operationName":"Create record",            "operationNumber":2,            "contextID":48,            "timeStamp":"2015-07-10T07:53:02.413Z",            "dataLen":24,            "recordNumber":0,            "tableID":"F4CXXXXX",            "tableName":"Customers",            "fields": {                "1": 9,                "2": "test value",                "3": "2003-03-03T00:00:00.000Z",                "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",                "8": "BlobID: 2"              }        },        {...}    ]
```
  
  
Aviso: o modo auto-reparo pode ser usado em casos específicos já que ultrapassa as propriedades de checagem de integridade interna de dados de 4D. Pode ser usado, por exemplo, com um arquivo de histórico intermediário que foi perdido ou corrompido e queira recuperar tantas operações quantas possíveis. Neste caso é necessário rpestar atenção à integridade dos dados quando usar este modo.

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
* *fields*: array dos valores campo
* *sequenceNumber*: número de sequência.

#### Exemplo 

Para integrar um arquivo mirror de log no servidor em modo autoreparo:

```4d
  //para ser executado no servidor
 var $err : Object
 var $num : Integer //0 por padrão
 INTEGRATE MIRROR LOG FILE("c:\\mirror\\logNew.journal";$num;Auto repair mode;$err)
```

#### Variáveis e conjuntos do sistema 

Se a integração é efetuada corretamente, a variável sistema OK recebe o valor 1; caso contrário, recebe o valor 0\. 

#### Ver também 

[LOG FILE TO JSON](log-file-to-json.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1312 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


