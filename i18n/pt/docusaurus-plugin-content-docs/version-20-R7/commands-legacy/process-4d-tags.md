---
id: process-4d-tags
title: PROCESS 4D TAGS
slug: /commands/process-4d-tags
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS 4D TAGS.Syntax-->**PROCESS 4D TAGS** ( *dadosEntrada* ; *dadosSaida* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.PROCESS 4D TAGS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dadosEntrada | Text | &#8594;  | Dados que contém as etiquetas HTML a processar |
| dadosSaida | Text | &#8592; | Dados processados |
| param | Expression | &#8594;  | Parâmetros passados ao template sendo executado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PROCESS 4D TAGS.Summary-->O comando PROCESS 4D TAGS provoca o processamento das etiquetas de transformação 4D contidas em *dadosEntrada* (campo ou variável de tipo Texto ou BLOB) enquanto opcionalmente insere valores utilizando os valores via os parâmetros *param* e retorna os dados resultantes em *dadosSaida*.<!-- END REF--> Para uma descrição completa das etiquetas, veja *Etiquetas HTML 4D*

Este comando permite executar um texto de tipo "template" que contém as etiquetas e as referências as expressões ou variáveis 4D e produz um resultado dependendo do contexto de execução e/ou dos valores passados em parâmetro.   
  
Por exemplo, pode utilizar este comando para gerar e guardar as páginas HTML baseadas em **páginas** **semi-dinâmicas** que contém as etiquetas de transformação 4D (sem que seja necessário que o servidor Web de 4D se inicie). Pode utilizar para enviar mensagens de e-mail em formato HTML que contenham processamentos e/ou referências aos dados contidos na base através de 4D Internet Commands. É possível processar qualquer tipo de dados baseados ​​em texto, tais como XML, SVG ou texto multi-estilo.

Passe os dados que contém as etiquetas a processar no parâmetro *dadosEntrada*. Este parâmetro pode ser um campo ou uma variável de tipo Texto.

Todas as etiquetas de transformação de 4D são compatíveis (4DTEXT, 4DHTML, 4DSCRIPT, 4DLOOP, 4DEVAL, etc.),

  
**Nota de compatibilidade**: A partir da versão 12 de 4D, quando utilizar parâmetros de tipo BLOB, o comando considera automaticamente que o conjunto de caracteres utilizado por os BLOBs é MacRomam. Para maior eficiência, se recomenda utilizar os parâmetros de tipo Texto para os quais os processos se realizam em modo Unicode.

Todas as etiquetas de transformação de 4D são compatíveis (*4DTEXT, 4DHTML, 4DSCRIPT, 4DLOOP*, *4DEVAL,* etc.),,

**Nota**: Quando utilizar a etiqueta *4DINCLUDE* fora do marco do servidor web (processo web):

* Com 4D em modo local ou 4D Server, a pasta por padrão é a pasta que contém o arquivo de estrutura do banco,
* Com 4D em modo remoto, a pasta por padrão é a pasta que contém a aplicação 4D.

O comando **PROCESS 4D TAGS** suporta um número indefinido de parâmetros *param* que podem ser inseridos no código que se executa. Igualmente com os métodos projeto, tais parâmetros podem conter valores escalares de tipos variados (texto, data, hora, inteiro longo, real, etc) além de objetos ou coleções. Também pode utilizar os arrays, por meio de ponteiros de arrays. Dentro do código processado pelas etiquetas 4D, estes parâmetros são acessíveis por meio de argumentos padrão ($1, $2, etc.), igual que nos métodos 4D (ver exemplo).   

Um conjunto dedicado de variáveis locais se define no contexto de execução do comando **PROCESS 4D TAGS**. Estas variáveis podem ser escritas ou lidas durante o processamento.

Depois da execução do comando, o parâmetro *dadosSaida* recebe os dados do parâmetro *dadosEntrada*, junto com o resultado do processo das etiquetas HTML 4D que contém, quando aplicável. Se *dadosEntrada* não conter etiquetas 4D ou produzir uma etiqueta vazia, o conteúdo de *dadosSaida* é idêntico ao de *dadosEntrada*.

O parâmetro *dadosSaida* pode ser um campo ou uma variável de tipo Texto.

Nota: este comando nunca chama a [On Web Authentication database method](on-web-authentication-database-method.md).

**Nota**: este comando já não chama ao [On Web Authentication database method](on-web-authentication-database-method.md).

#### Exemplo 1 

Este exemplo carrega um documento de tipo "planilha", processa as etiquetas que contenha e depois o armazena:

```4d
 var $inputText_t : Text
 var $outputText_t : Text
 
 $inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)
 PROCESS 4D TAGS($inputText_t;$outputText_t)
 TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)
```

#### Exemplo 2 

Este exemplo gera um texto utilizando os dados dos arrays:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:=""
 $input:=$input+""
 $input:=$input+" "
 $input:=$input+""
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world"
```

#### Ver também 

*Etiquetas HTML 4D*  