---
id: web-service-set-parameter
title: WEB SERVICE SET PARAMETER
slug: /commands/web-service-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET PARAMETER.Syntax-->**WEB SERVICE SET PARAMETER** ( *nome* ; *valor* {; *tipoSoap*} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET PARAMETER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nome | Text | &#8594;  | Nome do parâmetro a incluir na petição SOAP |
| valor | Variable | &#8594;  | Variável 4D que contém o valor do parâmetro |
| tipoSoap | Text | &#8594;  | Tipo SOAP do parâmetro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SERVICE SET PARAMETER.Summary-->O comando WEB SERVICE SET PARAMETER permite a definição de um parâmetro utilizado por uma petição SOAP cliente.<!-- END REF--> Chame este comando por cada parâmetro na petição (o número de vezes que for chamado o comando depende do número de parâmetros).

Passe em *nome* o nome do parâmetro tal como aparece na petição SOAP.  
  
Em *valor*, passe a variável 4D que contém o valor do parâmetro. No caso dos métodos proxy, esta variável é geralmente *$1, $2, $3*, etc., correspondente a um parâmetro 4D passado ao método proxy durante sua chamada. Entretanto, é possível utilizar variáveis intermediárias.  
  
**Nota**: cada variável ou array 4D utilizado deve ser declarada previamente utilizando os comandos dos temas *Compilador* ou *Arrays*.  
  
Como padrão, 4D determina automaticamente o tipo SOAP mais apropriado para o parâmetro *nome* de acordo ao conteúdo de *valor*. A indicação do tipo está incluída na petição.  
  
Entretanto, poderia “forçar” a definição do tipo SOAP de um parâmetro. Neste caso, pode passar o parâmetro opcional tipoSOAP utilizando uma das seguintes cadeias de caracteres (tipos de dados primários):

| **tipoSOAP**                | **Descrição** string                                                 | Text |
| --------------------------- | -------------------------------------------------------------------- | ------ |
| int                         | Inteiro longo                                                        |        |
| booleam                     | Booleano                                                             |        |
| float                       | Real 32 bits                                                         |        |
| decimal                     | Real com decimal                                                     |        |
| double                      | Real 64 bits                                                         |        |
| duratiom                    | Duração em anos, meses, dias, horas, minutos, segundos, por exemplo: |        |
| P1Y2M3DT10H30M              |                                                                      |        |
| datetime                    | Data e hora em formato ISO8601, por exemplo 2003-05-31T13:20:00      |        |
| time                        | Hora, por exemplo 13:20:00                                           |        |
| date                        | Data, por exemplo 2003-05-31                                         |        |
| gyearmonth                  | Ano e mês (calendário gregoriano), por exemplo 2003-05               |        |
| gyear                       | Ano (calendário gregoriano), por exemplo 2003                        |        |
| gmonthday                   | Mês e dia (calendário gregoriano), por exemplo --05-31               |        |
| gday                        | Dia (calendário gregoriano), por exemplo ---31                       |        |
| gmonth                      | Mês (calendário gregoriano), por exemplo --10--                      |        |
| hexbinary                   | Valor expresso em hexadecimal                                        |        |
| base64binary                | BLOB                                                                 |        |
| anyuri                      | Uniform Resource Identifier (URI), por exemplo                       |        |
| http://www.empresa.com/page |                                                                      |        |
| qname                       | Nome XML qualificado (espaço de nome e parte local)                  |        |
| notation                    | Atributo notação                                                     |        |

**Nota:** 

* para maior informação sobre tipos de dados XML, consulte a URL <http://www.w3.org/TR/xmlschema-2/>
* Esse comando não é compatível com objetos blob (tipo 4D.Blob). Veja *Passing blobs and blob objects to 4D commands* em developer.4d.com.

#### Exemplo 

Este exemplo define dois parâmetros: 

```4d
 var $1 : Text
 var $2 : Text
 WEB SERVICE SET PARAMETER("cidade";$1)
 WEB SERVICE SET PARAMETER("país";$2)
```

#### Ver também 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE GET RESULT](web-service-get-result.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 777 |
| Thread-seguro | &check; |


