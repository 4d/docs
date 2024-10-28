---
id: sql-set-option
title: SQL SET OPTION
slug: /commands/sql-set-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET OPTION.Syntax-->**SQL SET OPTION** ( *opçao* ; *valor* )<!-- END REF-->
<!--REF #_command_.SQL SET OPTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opçao | Integer | &#8594;  | Número da opçaõ a estabelecer |
| valor | Integer, Text | &#8594;  | Novo valor da opçãop |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SQL SET OPTION.Summary-->O comando SQL SET OPTION é utilizado para modificar o *valor* da opção passada em *opçao*.<!-- END REF-->  
  
*opçao* pode ter um dos seguintes valores, localizados no tema “*SQL*”:  
  
| Constante              | Valor | Comentário                                                                                                                                                                                                                                                                                                               |
| ---------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SQL asynchronous       | 1     | 0 = Conexão crônica (valor por padrão), 1 (ou valor diferente de 0) = Conexão anacrônica                                                                                                                                                                                                                                 |
| SQL charset            | 100   | Codificação do texto utilizada pelas petições enviadas a fontes externas (via SQL pass-through). A modificação é levada a cabo para o processo atual e a conexão atual.<br/>Valores possíveis: identificador MIBEnum (ver nota 2), cadeia "WCHAR" (ver nota 3) ou valor -2 (ver nota 4). Por padrão: 106 (UTF-8) |
| SQL connection timeout | 5     | Tempo máximo de espera durante a execução do comando *SQL LOGIN*. Este valor deve ser definido antes de abrir a conexão para que seja levado em conta.<br/>Valores possíveis: tempo em segundos<br/>Por padrão: não há timeout                                                                           |
| SQL data chunk size    | 6     | Tamanho de chunk de dados que se enviará ao servidor. Esta opção é útil principalmente com o controlador ODBC Sybase, que não admite chunks de dados reais. Definir um valor maior que o predeterminado permite enviar dados maiores a cada vez. <br/>Valor: tamanho em bytes<br/>Por padrão: 8000       |
| SQL max data length    | 3     | Longitude máxima dos dados devolvidos                                                                                                                                                                                                                                                                                    |
| SQL max rows           | 2     | Número máximo de linhas no conjunto resultante (utilizado para pré visualizações)                                                                                                                                                                                                                                        |
| SQL query timeout      | 4     | Tempo máximo de espera ao executar o comando *SQL EXECUTE*. <br/>Valores: tempo em segundos<br/>Por padrão: não há timeout                                                                                                                                                                               |

**Notas**:

1. Quando trabalha com o motor SQL interno de 4D, a opção SQL Asynchronous não tem nenhum propósito já que esse tipo de conexão sempre é Crônica.
2. Os números MIBEmum são referenciados nas seguintes direções: *http://www.iana.org/asSegnments/character-sets.*
3. Quando passa -2 como o valor a SQL Charset, a codificação utilizada pelo servidor SQL de 4D é adaptada automaticamente a plataforma de execução (codificação não UTF):  
   * em Windows, se utiliza ISO8859-1  
   * em Mac OS, se utiliza MAC-ROMAN.

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável Sistema OK retorna 1\. Do contrário, retorna 0.

#### Ver também 

[SQL GET OPTION](sql-get-option.md)  