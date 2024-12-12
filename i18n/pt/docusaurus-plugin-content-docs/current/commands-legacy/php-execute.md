---
id: php-execute
title: PHP Execute
slug: /commands/php-execute
displayed_sidebar: docs
---

<!--REF #_command_.PHP Execute.Syntax-->**PHP Execute** ( *rotaScript* {; *nomeFuncao* {; *resultadoPHP* {; *param*} {; *param2* ; ... ; *paramN*}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.PHP Execute.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaScript | Text | &#8594;  | Rota de acesso ao script PHP ou "" para executar a função PHP |
| nomeFuncao | Text | &#8594;  | Função PHP a ser executada |
| resultadoPHP | *, Variable, Field | &#8592; | Resultado da função PHP executada ou * para não receber nenhum resultado |
| param | Text, Boolean, Real, Integer, Date, Time | &#8594;  | Parâmetros da função PHP |
| Resultado | Boolean | &#8592; | True =execução correta; False = erro de execução |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


:::info Compatibilidade

**PHP está obsoleto em 4D**. Recomenda-se usar a classe [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::


#### Descrição 

<!--REF #_command_.PHP Execute.Summary-->O comando PHP Execute permite executar um script ou uma função PHP.<!-- END REF-->

Passe no parâmetro *rutaScrip*t a rota de acesso do arquivo de script PHP a executar. Pode ser uma rota de acesso relativa se o arquivo está localizado junto à estrutura do banco ou de uma rota absoluta. A rota de acesso pode ser expressa em sintaxe sistema ou POSIX.   
Se deseja executar diretamente uma função PHP padrão, passe uma string vazia ("") em *rotaScript*. O nome da função deve ser passada no segundo parâmetro.

Passe no parâmetro *nomFunção* um nome de função PHP se quer executar uma função específica no script *rotaScript*. Se passa uma string vazia ou omite o parâmetro *nomFunção*, o script se executa completamente.

**Nota:** PHP considera as maiúsculas e minúsculas dos caracteres no nome da função. Não utilize parênteses, introduza unicamente o nome da função.

O parâmetro *resultPHP* recebe o resultado da execução da função PHP. Pode passar:

* uma variável, um array ou um campo para receber o resultado,
* o caractere \* se a função não devolve nenhum resultado ou se não quer recuperar o resultado.

O parâmetro *resultPHP* pode ser de tipo texto, inteiro longo, real, booleano ou data assim como também (exceto para arrays) BLOB ou hora. 4D efetuará a conversão dos dados e os ajustes necessários seguindo os princípios descritos na seção a continuação.

* se passa um nome de função no parâmetro *nomFuncao*, *resultPHP* receberá o que o desenvolvedor PHP devolve com o comando return do corpo da função.
* Se utiliza o comando sem passar um nome de função no parâmetro *nomFuncao*, *r* *esultPHP* receberá o que o desenvolvedor PHP devolveu com o comando echo ( ou um comando similar).

 Se chama a uma função PHP que espera argumentos, utilize os parâmetros *param1...N* para passar um ou vários valores. Os valores devem estar separados por ponto e vírgula. Pode passar valores de tipo alfa, texto, booleano, real, inteiro, inteiro longo, data ou hora. As imagens e os BLOBs não são aceitos. Pode enviar um array; neste caso deve passar um ponteiro no array ao comando PHP Execute, do contrário o índice atual do array se enviará como um inteiro (ver o exemplo). O comando aceita todos os tipos de arrays exceto os arrays ponteiro, os arrays imagem e os arrays 2D.  
Os parâmetros *param1...N* são enviados em PHP no formato JSON em UTF-8\. Eles são codificados automaticamente com o comando PHP **json\_decode** antes de ser enviados à função PHP *nomeFunçao*.

**Nota:** por razões técnicas, o tamanho dos parâmetros passados através do protocolo FastCGI não deve passar os 64 KB. Deve considerar esta limitação se utiliza parâmetros de tipo Texto.

O comando devolve True se a execução for realizada corretamente do lado de 4D, em outras palavras, se o lançamento do ambiente de execução, a abertura do script e o estabelecimento da comunicação com o intérprete PHP foram exitosos. Do contrário, se gera um erro, que pode interceptar com o comando [ON ERR CALL](on-err-call.md "ON ERR CALL") e analizar com [Last errors](get-last-error-stack.md "Last errors").   
Além disso, o script mesmo pode gerar erros PHP. Neste caso, deve utilizar o comando [PHP GET FULL RESPONSE](php-get-full-response.md "PHP GET FULL RESPONSE") para analizar a fonte do erro (ver exemplo 4). 

**Nota:** PHP permite configurar a gestão de erros. Para maior informação, consulte por exemplo a página: <http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting>.

##### Conversão dos dados devolvidos 

A tabela a seguir especifica como 4D interpreta e converte os dados devolvidos em função do tipo do parâmetro *resultPHP*.

| **Tipo do parâmetro *resultPHP*** | **Processo 4D**                                                                                                                                                                                                                           | **Exemplo**                                                                                          |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| BLOB                              | 4D recupera os dados recebidos sem nenhuma modificação(\*).                                                                                                                                                                               |                                                                                                      |
| Texto                             | 4D espera os dados codificados em UTF-8 (\*). O desenvolvedor PHP pode necessitar utilizar o comando PHP **utf8\_encode**.                                                                                                                | Exemplo de script PHP: echo utf8\_encode(meuTexto)                                                   |
| Data                              | 4D espera uma data enviada como uma string em formato RFC 3339 (também chamado DATE\_ATOM em PHP). Este formato é de tipo "AAAA-MM-DDTHH:MM:SS", por exemplo: 2005-08-15T15:52:01+00:00\. 4D ignora a parte hora e devolve a data em UTC. |                                                                                                      |
| Hora                              | 4D espera uma hora enviada em forma de string em formato RFC 3339 (ver o tipo Data). 4D ignora a parte data e devolve o número de segundos transcorridos desde a meia noite considerando a data na zona horária local.                    | Exemplo de script PHP para enviar 2h30'45": echo date( DATE\_ATOM, mktime( 2,30,45))                 |
| Inteiro ou Real                   | 4D interpreta o valor numérico expresso com números, signo + ou - e/ou o exponente com o prefixo 'e'. Todo carácter '.' ou ',' se interpreta como um separador decimal.                                                                   | Exemplo de script PHP: echo -1.4e-16;                                                                |
| Booleano                          | 4D devolve True se recebe a string "true" desde PHP ou se a avaliação numérica dá um valor não nulo.                                                                                                                                      | Exemplo de script PHP: echo (a==b);                                                                  |
| Array                             | 4D considera que o array PHP foi devolvido no formato JSON.                                                                                                                                                                               | Exemplo de script PHP para devolver um array dos textos: echo json\_encode( array( "ola", "mundo")); |

(\*) Por padrão, não são devolvidos os cabeçalhos HTTP:  
\- Se utiliza [PHP Execute](php-execute.md) ao passar uma função no parâmetro *nomFuncao*, os cabeçalhos HTTP nunca são devolvidos em *resultPHP*. Só estão disponíveis através do comando [PHP GET FULL RESPONSE](php-get-full-response.md).  
\- Se utiliza [PHP Execute](php-execute.md) sem um nome de função (o parâmetro *nomFunçao* se omite ou contém uma string vazia), pode devolver os cabeçalhos HTTP fixando a opção PHP Raw result em True utilizando o comando [PHP SET OPTION](php-set-option.md).

**Nota:** se precisar recuperar grandes volumes de dados utilizando PHP, é mais eficiente passar pelo canal do buffer *stdOut* (comando **echo** ou similar) que pelo retorno de função. Para maior informação, consulte a descrição do comando [PHP GET FULL RESPONSE](php-get-full-response.md). 

##### Usar variáveis de ambiente 

Pode utilizar o comando [SET ENVIRONMENT VARIABLE](set-environment-variable.md "SET ENVIRONMENT VARIABLE") para definir as variáveis de ambiente utilizadas pelo script. Atenção: depois de chamar [LAUNCH EXTERNAL PROCESS](launch-external-process.md "LAUNCH EXTERNAL PROCESS") ou PHP Execute, o conjunto das variáveis de ambiente se apaga.

##### Funções especiais 

4D oferece as seguintes funções especiais:

* **quit\_4d\_php**: permite sair do intérprete PHP e de todos seus processos filhos. Se ao menos um dos processos filho está executando um script, o intérprete não sai e o comando PHP Execute devolve False.
* **relaunch\_4d\_php**: permite relançar o intérprete PHP.

Note que o intérprete é relançado automaticamente quando a primeira petição é enviada por PHP Execute. 

#### Exemplo 1 

Chamada do script "myPhpFile.php" sem função. Este é o conteúdo do script:

```PHP

```

O código 4D a seguir:

```4d
 var $result : Text
 var $isOK : Boolean
 $isOK:=PHP Execute("C:\php\myPhpFile.php";"";$result)
 ALERT($Result)
```

... mostrará a versão atual do PHP.

#### Exemplo 2 

Chamada da função *myPhpFunction* no script "myNewScript.php" com parâmetros. Este é o conteúdo do script:

```PHP

```

Chamada com função:

```4d
 var $result : Text
 var $param1 : Text
 var $param2 : Text
 var $isOk : Boolean
 $param1 :="Olá"
 $param2 :="mundo 4D!"
 $isOk:=PHP Execute("C:\MyFolder\myNewScript.php";"myPhpFunction";$result;$param1;$param2)
 ALERT($result) // Mostra "Olá mundo 4D!"
```

#### Exemplo 3 

Sair do intérprete PHP:

```4d
 $ifOk:=PHP Execute("";"quit_4d_php")
```

#### Exemplo 4 

Gestão de erros:

```4d
  // Instalação do método de gestão de erros
 phpCommError:="" // Modificado por PHPErrorHandler
 $T_saveErrorHandler :=Method called on error
 ON ERR CALL("PHPErrorHandler")

 // Execução do script
 var $T_result : Text
 If(PHP Execute("C:\MyScripts\MiscInfos.php";"";$T_result))
  // Nenhum erro, $T_Result contém o resultado
 Else
  // Se detectou um erro, administrado por PHPErrorHandler
    If(phpCommError="")
       ... // error PHP, utilize PHP GET FULL RESPONSE
    Else
       ALERT(phpCommError)
    End if
 End if
 
  // Desinstalação do método
 ON ERR CALL($T_saveErrorHandler)


```

O método PHP\_errHandler é o seguinte:

```4d
 phpCommError:=""
 GET LAST ERROR STACK(arrCodes;arrComps;arrLabels)
 For($i;1;Size of array(arrCodes))
    phpCommError:=phpCommError+String(arrCodes{$i})+" "+arrComps{$i}+" "+
    arrLabels{$i}+Char(Carriage return)
 End for
```

#### Exemplo 5 

Criação dinâmica por 4D de um script antes de sua execução:

```4d
 DOCUMENT TO BLOB("C:\Scripts\MyScript.php";$blobDoc)
 If(OK=1)
    $strDoc:=BLOB to text($blobDoc;UTF8 text without length)
 
    $strPosition:=Position("function2Rename";$strDoc)
 
    $strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)
 
    TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)
    BLOB TO DOCUMENT("C:\Scripts\MyScript.php";$blobDoc)
    If(OK#1)
       ALERT("Error on script creation")
    End if
 End if
```

Se executa o script:

```4d
 $err:=PHP Execute("C:\Scripts\MyScript.php";"function2Rename_v2";*)
```

#### Exemplo 6 

Recuperação direta de um valor de tipo data e hora. Este é o conteúdo do script:

```PHP

```

Recepção da data do lado 4D:

```4d
 var $phpResult_date : Date
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_date)
  //$phpResult_date is !05/04/2009 !
 
 var $phpResult_time : Time
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_time)
  //$phpResult_time is ?01 :02 :03 ?
```

#### Exemplo 7 

Distribuição de dados em arrays:

```4d
 ARRAY TEXT($arText ;0)
 ARRAY LONGINT($arLong ;0)
 $p1 :=","
 $p2 :="11,22,33,44,55"
 $phpok :=PHP Execute("";"explode";$arText;$p1;$p2)
 $phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)
 
  // $arText contém os valores Alfa "11", "22", "33", etc.
  // $arLong contém os números, 11, 22, 33, etc.
```

#### Exemplo 8 

Inicialização de um array:

```4d
 ARRAY TEXT($arText ;0)
 $phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"indefinido")
  // Execute em PHP: $arrTest = array_pad($arrTest, 50, ’indefinido’);
  // Preencher o array $arText com 50 elementos "indefinido"
```

#### Exemplo 9 

Passo de parâmetros através de um array:

```4d
 ARRAY INTEGER($arInt;0)
 $phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")
  // Execute en PHP: $arInt = json_decode(’[13,51,69,42,7]’);
  // Preencha o array com os valores iniciais
```

#### Exemplo 10 

Este é um exemplo da utilização básica da função trim, para eliminar espaços adicionais e/ou caracteres invisíveis de princípio a fim de uma cadeia:

```4d
 var $T_String : Text
 $T_String:="   Hello  "
 var $B : Boolean
 $B:=PHP Execute("";"trim";$T_String;$T_String)
```

Para obter mais informação sobre a função trim, por favor, consulte a documentação de PHP.

#### Ver também 

*Executar scripts PHP em 4D*  
[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  