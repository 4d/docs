---
id: database-measures
title: Database measures
slug: /commands/database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Database measures.Syntax-->**Database measures** {( *opcoes* )} : Object<!-- END REF-->
<!--REF #_command_.Database measures.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opcoes | Object | &#8594;  | Opções de retorno |
| Resultado | Object | &#8592; | Objeto que contém as medidas da base |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Database measures.Summary-->O comando **Database measures** lhe permite obter informação detalhada sobre os eventos do motor de base de dados 4D.<!-- END REF--> A informação devolvida inclui o acesso leitura/escritura dos dados desde/até o disco ou a memória cachê, assim como também o acesso aos índices da base de dados, as pesquisas e as ordenações.  
  
**Database measures** devolve um único objeto que contém todas as medidas relevantes. O parâmetro *opcoes* lhe permite configurar as opções para a informação devolvida.

##### Apresentação do objeto devolvido 

O objeto devolvido contém uma só propriedade chamada "DB", que têm a seguinte estrutura básica:

```json
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

Este objeto está composto de oito propriedades que contém as medidas básicas ("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount") e propriedades adicionais ("dataSegment1 "," indexSegment ", "tables", "index") que também podem conter propriedades elementares, mas a um nível diferente e com um alcance diferente (ver mais a frente).   
  
**Nota**: uma propriedade só está presente no interior do objeto se este recebe conteúdo. Quando uma propriedade não tem nenhum conteúdo, não está incluída no objeto. Por exemplo, se a base foi aberta em modo de leitura e os índices não foram utilizados, o objeto devolvido não conterá "diskWriteBytes", "diskWriteCount", "indexSegment" e "indexes".

##### Propriedades elementares 

As propriedades elementares podem ser encontradas nos diferentes níveis do objeto DB. As propriedades elementares devolvem a mesma informação mas com alcances diferentes. Esta é uma descrição das propriedades elementares:   
  
| **Nome**       | **Informação devolvida**            |
| -------------- | ----------------------------------- |
| diskReadBytes  | Bytes lidos desde o disco           |
| cacheReadBytes | Bytes lidos desde o cachê           |
| cacheMissBytes | Bytes faltantes do cachê            |
| diskWriteBytes | Bytes escritos no disco             |
| diskReadCount  | Acesso em leitura desde o disco     |
| cacheReadCount | Acesso em leitura desde o cachê     |
| cacheMissCount | Acesso de leitura faltante no cachê |
| diskWriteCount | Acesso em escritura no disco        |

As oito propriedades elementares têm a mesma estrutura do objeto, por exemplo:

```json
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // optional
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

* "**value**" (número): a propriedade "value" contém um número que representa ou uma quantidade de bytes ou uma contagem de acessos. Basicamente, este valor é a soma dos valores do objeto "history" (ainda que o objeto "history" não esteja presente).
"**history**" (array de objetos): o array de objetos "history" é uma compilação de valores de eventos agrupados por segundo. A propriedade "history" só está presente se solicitar através do parâmetro *opcoes* (ver a continuação). O array history terá um máximo de 200 elementos. Cada elemento do array é em si mesmo um objeto que contém duas propriedades: "value" e "time".  
* "value" (número): quantidade de bytes ou acessos manipulados durante o período de tempo designado na propriedade "time" associada.
"time" (número): número de segundos passados desde que foi chamada a função. No exemplo anterior ("time": -1649) significa 1649 segundos atrás (ou mais precisamente entre 1649 e 1650 segundos). Durante este período de um segundo, 54,202 bytes foram lidos no disco.   
O array history não contém valores sequenciais (-1650, -1651, -1652, etc.) O valor anterior é -1665, o que significa que nada foi lido no disco no período de 15 segundos entre 1650 e 1665\.   
**Nota:** Por padrão, o array conterá somente informação útil.  
Dado que o tamanho máximo do array é 200, se a base de dados se utiliza intensivamente (algo é lido a cada segundo no disco), a longitude máxima da história será de 200 segundos. Por outro lado, se quase não passa nada, exceto, por exemplo, uma vez cada 3 minutos, o tamanho da história será de 600 minutos (3\*200).   
Este exemplo pode ser representado no seguinte diagrama:  
![](../assets/en/commands/pict1510781.en.png) 

##### dataSegment1 e indexSegment 

As propriedades "dataSegment1" e "indexSegment" podem conter até quatro propriedades elementares (quando estão disponíveis): 

```json
"dataSegment1": {    "diskReadBytes": {…},    "diskWriteBytes": {…},    "diskReadCount": {…},    "diskWriteCount": {…}    },"indexSegment": {    "diskReadBytes": {…},    "diskWriteBytes": {…},    "diskReadCount": {…},    "diskWriteCount": {…}    }
```

Estas propriedades devolvem a mesma informação que as propriedades elementares, mas detalhada para cada arquivo da base: 

* "dataSegment1" representa o arquivo de dados .4dd no disco
* "indexSegment" representa o arquivo de índice .4dx no disco

  
Por exemplo, pode ser obtido o seguinte objeto:

```json
{
"DB": {
"diskReadBytes": {
    "value": 718260
    },
"diskReadCount": {
    "value": 229
    },

"dataSegment1": {
    "diskReadBytes": {
    "value": 679092
    },
    "diskReadCount": {
    "value": 212
    }
    },
"indexSegment": {
    "diskReadBytes": {
    "value": 39168
    },
    "diskReadCount": {
    "value": 17
    }
}
```

Os valores devolvidos correspondem as fórmulas seguintes:

*diskReadBytes.value = dataSegment1.diskReadBytes.value + indexSegment.diskReadBytes.value* 
*diskWriteBytes.value = dataSegment1.diskWriteBytes.value + indexSegment.diskWriteBytes.value* 
*diskReadCount.value = dataSegment1.diskReadCount.value + indexSegment.diskReadCount.value* 
*diskWriteCount.value = dataSegment1.diskWriteCount.value + indexSegment.diskWriteCount.value* 

##### tables 

A propriedade "tables" contém tantas propriedades como tabelas que tenham sido acessadas, seja em modo de leitura ou escritura desde a abertura da base. O nome de cada propriedade é o nome da tabela em questão. Por exemplo:  
  
```json
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```
  
  
Cada objeto "table" contém 12 propriedades:
* As primeiras oito propriedades são as *propriedades elementares* (ver mais acima) com os valores relacionados a tabela implicada.
* As outras duas propriedades, "records" e "blobs", também tem as mesmas oito propriedades elementares, mas limitadas a certos tipos de campos:
* * A propriedade "records" se refere A todos os campos da tabela (cadeias, datas, números, etc.) a exceção de texto, imagens e BLOBs.  
   * A propriedade "blobs" se refere aos campos de tipo texto, imagem e BLOB da tabela.  
   * Uma ou duas propriedades adicionais, "fields" e "queries", também poden estar presentes em função das pesquisas e as ordenações realizadas na tabela concernente:  
   * * A propriedade "fields" contém o maior número de atributos "nome de campo" (que também são sub-objetos) como o número de campos que se utilizam para as pesquisas ou ordenações.  
         Cada objeto nome de campo contém:  
                  * um objeto "queryCount" (com ou sem história, dependendo do parâmetro *opcoes*) se uma pesquisa foi realizada utilizando este campo  
                  * e/ou um objeto "sortCount" (com o sem história, dependendo do parâmetro *opcoes*) se uma ordenação foi realizada utilizando este campo.  
         Este atributo não se baseia no uso de índices; Todos os tipos de pequisas e de ordenações são levadas em conta.  
         Exemplo: desde o lançamento da base, várias pesquisas e ordenações foram levadas a cabo utilizando os campos *CompID*, *Name* *e FirstName*. TEl objeto devolvido contém o seguinte sub-objeto "fields" (*opcoes* com rota e sem histórico):  
                 
         ```json  
         {  
             "DB": {  
                 "tables": {  
                     "Employees": {  
                         "fields": {  
                             "CompID": {  
                                 "queryCount": {  
                                     "value": 3  
                                 }  
                             },  
                             "Name": {  
                                 "queryCount": {  
                                     "value": 1  
                                 },  
                                 "sortCount": {  
                                     "value": 3  
                                 }  
                             },  
                             "FirstName": {  
                                 "sortCount": {  
                                     "value": 2  
                                 }  
                             }  
         (...)  
         ```  
                 
         **Nota**: o atributo "fields" é criado unicamente se uma pesquisa ou uma ordenação foi realizada na tabela; caso contrário este atributo não estará presente.  
   * "queries" é um array de objetos que oferece uma descrição de cada pesquisa realizada na tabela. Cada elemento do array conterá três atributos:  
         * "queryStatement" (cadeia): cadeia de pesquisa (que contém os nomes dos campos, mas não os valores procurados). Por exemplo: "(Companies.PK\_ID != ?)"  
         * "queryCount" (objeto):  
                  * "value" (número): número de vezes que a cadeia de pesquisa foi executado, sem importar os valores procurados.  
                  * "history" (array de objetos) (se solicitar em *opcoes*): propriedades do histórico estandarte "value" e "time"  
         * "duration" (objeto) (se "value" é >0)  
                  * "value" (número): número de milissegundos  
                  * "history" (array de objetos) (se solicitar em *opcoes*): propriedades do histórico estandarte "value" e "time"  
Exemplo: desde o momento em que se lança a base, uma só pesquisa foi realizada na tabela Employees (*opcoes* são com rota e com histórico):  
```json  
{  
            "DB": {  
              "tables": {  
                "Employees": {  
                    "queries": [  
                    {  
                        "queryStatement": "(Employees.Name == ?)",  
                        "queryCount": {<p>                            "value": 1,  
                            "history": [  
                                {  
                                    "value": 1,  
                                    "time": -2022  
                                }  
                            ]  
                        },  
                        "duration": {  
                            "value": 2,  
                            "history": [  
                                {  
                                    "value": 2,  
                                    "time": -2022  
                                }  
                            ]  
                        }  
                    },  
(...)  
```  
    
**Nota:** o atributo "queries" é criado quando pelo menos uma pesquisa foi realizada na tabela.

##### indexes 

Este é o objeto mais complexo. Todas as tabelas as quais tiveram acesso utilizando um ou vários de seus índices se armazenam como propriedades e no interior das propriedades, também se incluem os nomes dos índices utilizados como propriedades. Os índices de palavras chaves aparecem por separado e seus nomes estão seguidos por "*(Keyword)*". Por último, cada objeto nome de índice contém as oito propriedades elementares relacionadas com este índice assim como um máximo de quatro sub-objetos em função do uso do índice da base desde seu lançamento (cada sub-objeto só existe se pelo menos uma operação correspondente foi realizado em algum momento desde o lançamento de base).

Exemplo: desde o lançamento da base, vários índices do campo \[Employees\] EmpLastName foram solicitados. Além disso, 2 registros foram criados e 16 se suprimiram na tabela \[Companies\]. Esta tabela tem um campo "name" que está indexado. A tabela também consultou e ordenou utilizando este campo. O objeto resultante conterá:

```json
"indexes": {
    "Employees": {
        "EmpLastName": {
                    "diskReadBytes": {…},
                    "cacheReadBytes": {…},
                    "cacheMissBytes": {…},
                    "diskWriteBytes": {…},

                    "diskReadCount": {…},
                    "cacheReadCount": {…},
                    "cacheMissCount": {…},
                    "diskWriteCount": {…}
            }
        "EmpLastName (Keyword)": {...},
        "index3Name": {…},
        "index4Name": {…},
        …
        }
        "Companies": {
            "Name": 
            (...)
                "queryCount": {
                    "value": 41
                },
                "sortCount": {
                    "value": 3
                },
                "insertKeyCount": {
                    "value": 2
                },
                "deleteKeyCount": {
                    "value": 16
                }
    table3Name: {…}
}
```

##### Parâmetro opções 

O parâmetro *opcoes* lhe permite personalizar a informação real que devolve o comando. Em *opcoes*, se passar um objeto que pode conter até três propriedades: "withHistory", "historyLength" e "path".

| **Propriedade** | **Tipo** | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "withHistory"   | Booleano | "true" significa que o objeto "history" será devolvido pela função dentro do objeto devolvido; "false" significa que o objeto devolvido pela função não irá conter o objeto "history"                                                                                                                                                                                                                                                                                                                                                      |
| "historyLength" | número   | Define o tamanho do array history devolvido em segundos(\*).                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| "path"          | cadeia   | Rota completa da propriedade específica ou arrays de rotas completas das propriedades específicas que deseja obter. Se passar uma cadeia, só o valor correspondente se devolve no objeto "DB" (se a rota é válida). Exemplo "DB.tables.Employees.records.diskWriteBytes". Quando passar um array de cadeias, todos os valores correspondentes são devolvidos no objeto "DB" (se as rotas são álidas). Exemplo: \["DB.tables.Employee.records.diskWriteBytes", "DB.tables.Employee.records.diskReadCount","DB.dataSegment1.diskReadBytes"\] |

(\*) Como se descreveu anteriormente, a história não se armazena como uma sequência de segundos, somente com valores relevantes. Se não ocorre nada durante um par de segundos ou mais, nada se armazena e uma brecha aparecerá no array de histórico interno. "time" pode conter, por exemplo, -2, -4, -5, -10, -15, -30 com valores de 200, 300, 250, 400, 500,150\. Se a propriedade "historyLength" está definida em 600 (10 minutos), logo o array devolvido irá conter 0, -1, -2, -3 ... -599 para "time" e só os valores -2, -4, - 5, -10, -15, -30 serão preenchidos. Todos os outros valores ficarão em 0 (zero) como valor. Também como foi descrito anteriormente, o único limite do array interno é o tamanho (200), não o tempo. Isto significa que se há uma baixa atividade para uma propriedade específica, o tempo mais antigo pode ser bem grande (por exemplo: -3600 faz uma hora). Também pode conter menos de 200 valores se a base acabou de iniciar. Nestes casos, se o tempo do histórico interno é menor ao solicitado ou se todos os valores importantes que já foram definidos no array devolvido, o valor devolvido será -1.  
Exemplo: a base só foi iniciada faz 20 segundos e a história da petição é de 60 segundos. Os valores devolvidos entre 0 e -20 se definem com valores ou zeros e os outros se estabelecerão com -1\. Quando um valor "-1" se devolve, isto significa que, ou bem o tempo de solicitação é muito antigo ou que o valor já não está no array de história interna (ou seja, chegou ao limite dos 200 elementos e foram eliminados os valores maiores).

##### Cliente/servidor e componentes 

Este comando devolve a informação sobre o uso da base de dados. Isto significa que lhe devolve um objeto válido com valores relevantes só quando é chamado: 

* em modo local 4D (se chamado desde um componente, devolve informação sobre a base de dados do host)
* no servidor em modo cliente/servidor.

Se o comando é chamado desde um 4D remoto, logo o objeto é deixado vazio.   
Neste contexto, se necessita obter informação sobre a base de dados no servidor, a forma mais simples de realizar esta ação é criar um método com a opção "executar no servidor" ativada.   
Este princípio também funciona para um recipiente: se o componente se utiliza em um contexto local 4D, devolverá a informação sobre a base local; em um contexto 4D remoto, devolverá a informação sobre a base do servidor.

#### Exemplo 1 

Você deseja obter o objeto "history" no objeto devolvido:

```4d
 var $param : Object
 var $measures : Object
 OB SET($param;"withHistory";True)
 $measures:=Database measures($param)
```

#### Exemplo 2 

Só queremos saber o número total de bytes lidos na memória cachê ("cacheReadBytes"):   
  
```4d
 var $oStats : Object
 var $oParams : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 $oStats:=Database measures($oParams)
```

O objeto devolvido contém, por exemplo:

```json
{
    "DB": {
        "cacheReadBytes": {
            "value": 9516637
        }
    }
}
```

#### Exemplo 3 

Queremos obter as medidas de bytes de cachê nos últimos dois minutos:

```4d
 var $oParams : Object
 var $measures : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 OB SET($oParams;"withHistory";True)
 OB SET($oParams;"historyLength";2*60)
 $measures:=Database measures($oParams)
```


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1314 |
| Thread-seguro | &check; |


