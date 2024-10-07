---
id: get-database-measures
title: Get database measures
slug: /commands/get-database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Get database measures.Syntax-->**Get database measures** {( *opcoes* )} -> Resultado<!-- END REF-->
<!--REF #_command_.Get database measures.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opcoes | Objeto | &#x1F852; | Opções de retorno |
| Resultado | Objeto | &#x1F850; | Objeto que contém as medidas da base |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get database measures.Summary-->O comando **Get database measures** lhe permite obter informação detalhada sobre os eventos do motor de base de dados 4D.<!-- END REF--> A informação devolvida inclui o acesso leitura/escritura dos dados desde/até o disco ou a memória cachê, assim como também o acesso aos índices da base de dados, as pesquisas e as ordenações.  
  
**Get database measures** devolve um único objeto que contém todas as medidas relevantes. O parâmetro *opcoes* lhe permite configurar as opções para a informação devolvida.

##### Apresentação do objeto devolvido 

O objeto devolvido contém uma só propriedade chamada "DB", que têm a seguinte estrutura básica:

```RAW
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

Este objeto está composto de oito propriedades que contém as medidas básicas ("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount") e propriedades adicionais ("dataSegment1 "," indexSegment ", "tables", "index") que também podem conter propriedades elementares, mas a um nível diferente e com um alcance diferente (ver mais a frente).   
  
**Nota**: uma propriedade só está presente no interior do objeto se este recebe conteúdo. Quando uma propriedade não tem nenhum conteúdo, não está incluída no objeto. Por exemplo, se a base foi aberta em modo de leitura e os índices não foram utilizados, o objeto devolvido não conterá "diskWriteBytes", "diskWriteCount", "indexSegment" e "indexes".

##### Propriedades elementares 

```undefined
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // optional
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

##### dataSegment1 e indexSegment 

```undefined
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

##### tables 

```undefined
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```

##### indexes 

```undefined
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
 $measures:=Get database measures($param)
```

#### Exemplo 2 

```undefined
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
 $measures:=Get database measures($oParams)
```
