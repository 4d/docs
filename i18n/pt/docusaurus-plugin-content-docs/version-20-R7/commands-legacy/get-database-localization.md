---
id: get-database-localization
title: Get database localization
slug: /commands/get-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.Get database localization.Syntax-->**Get database localization** {( {*tipoIdioma*}{;}{*} )} : Text<!-- END REF-->
<!--REF #_command_.Get database localization.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoIdioma | Integer | &#8594;  | Tipo de idioma |
| * | Operador | &#8594;  | Retorna informação sobre banco de dados host |
| Resultado | Text | &#8592; | Idioma atual do banco |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get database localization.Summary-->O comando Get database localization \[#descv\] retorna o idioma padrão ou a linguagem do banco de dados especificado pelo *tipoLinguagem*, expresso no padrão definido pela RFC 3066\.<!-- END REF--> \[#descv\] Normalmente, o comando retorna "en" para Inglês, "es" para o espanhol, etc Para mais informações sobre esta norma e os valores retornados por este comando, consulte o manual de referência de design.  
  
Diversas configurações de idioma podem ser usados simultaneamente no aplicativo. Para designar a configuração a ser obtida, em *tipoLinguagem* você pode passar uma das seguintes constantes, encontrada no tema *Ambiente 4D*:  
  
| Constante                | Tipo          | Valor | Comentário                                                                                                                        |
| ------------------------ | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------- |
| Current localization     | Inteiro longo | 1     | Linguagem atual da aplicação: linguagem padrão ou linguagem definida através dos comandos *SET DATABASE LOCALIZATION*.            |
| Default localization     | Inteiro longo | 0     | Linguagem determinada automaticamente por 4D no início de acordo com a pasta Resources e o ambiente de sistema (não modificável). |
| Internal 4D localization | Inteiro longo | 3     | Linguagem usada por 4D para ordenar e comparar textos (definido nas Preferências da aplicação).                                   |
| User system localization | Inteiro longo | 2     | Linguagem definida pelo usuário atual do sistema.                                                                                 |

Por padrão, se você omitir o parâmetro *tipoIdioma*, o comando retorna o idioma padrão (0). 

O parâmetro opcional *\** é útil no caso de uma arquitetura que utiliza componentes: pode ser utilizado para determinar o banco de dados (local ou componente) para o qual quer averiguar o idioma.

* Quando chamar ao comando desde um componente:  
   * Se passar o paâámetro *\**, o comando devolve a configuração de idioma do banco de dados local.  
   * Se não passar o parâmetro *\**, o comando devolve a configuração de idioma do banco de dados componente.

Quando chamar ao comando desde um método do banco de dados local, sempre devolve a configuração de idioma do banco de dados local (*\** se ignora).

  
O idioma atual do banco de dados pode ser usada para determinar a pasta. lproj onde o programa irá procurar os itens localizados do banco de dados. 4D determina automaticamente a linguagem corrente na inicialização do banco de dados de acordo com o conteúdo da pasta de  e do ambiente do sistema. Como funciona: 4D carrega a primeira pasta .lproj do banco de dados que corresponde a referência do idioma, com a seguinte ordem de prioridade:

1. Idioma do Sistema (no Mac OS, vários idiomas podem ser definidos por ordem de preferência, 4D usa essa configuração ).
2. Idioma da aplicação 4D.
3. Inglês
4. Primeiro idioma encontrado na pasta .

**Nota:** Se o banco não tem uma pasta .lproj, 4D aplica a seguinte ordem de prioridade: 1\. Idioma do Sistema, 2\. Inglês (caso o idioma do sistema não possa ser identificado).

#### Ver também 

[Localized document path](localized-document-path.md)  
[SET DATABASE LOCALIZATION](set-database-localization.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1009 |
| Thread-seguro | &check; |
| Proibido no servidor ||


