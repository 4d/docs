---
id: on-err-call
title: ON ERR CALL
slug: /commands/on-err-call
displayed_sidebar: docs
---

<!--REF #_command_.ON ERR CALL.Syntax-->**ON ERR CALL** ( *metodoErro* {; *escopo*} )<!-- END REF-->
<!--REF #_command_.ON ERR CALL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodoErro | Text | &#8594;  | Método de erro a ser chamado, ou string Vazia para não capturar erros |
| escopo | Integer | &#8594;  | Escopo do método de erro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ON ERR CALL.Summary-->O comando **ON ERR CALL** instala o método de projeto, cujo nome se passa em *metodoErro*, como método de tratamento de ocorrências ou método de gestão de erros.<!-- END REF-->

Métodos de manejo de erro são instalados por projeto: componentes e projetos host podem definri seus métodos de captura de erros, só o método do projeto onde o erro ocorreu será chamado. 

Uma vez que se instala um projeto de controle de erros, 4D chama ao método cada vez que se produz um erro durante a execução de um comando de linguagem 4D.

O alcance deste comando determina o contexto de execução onde um erro ativa a chamada do errorMethod. Como padrão, se o parâmetro escopo for omitido, o escopo do comando é o contexto da execução local, ou seja, o processo atual. Pode passar uma das constantes abaixo no parâmetro escopo

| Constante                 | Valor |
| ------------------------- | ----- |
| ek errors from components | 2     |
| ek global                 | 1     |
| ek local                  | 0     |

* se escope = ek local (ou se escopo for omitido), só erros que aconteceram no processo atual vão chamar errorMethod. Pode ter um método de manejo de erro por processo por vez, mas pode ter vários métodos de manejo de erro para vários processos.
* se escopo = ek global, todos os erros que ocorreram na aplicação, qualquer que seja o processo, exceto componentes, vai chamar errorMethod. Note que se um manejo de erro ek local também for definido para um processo, o manejo de erro não é chamado ek global. Esse princípio permite definir um método de manejo de erros genérico que vai pegar os erros, enquanto os métodos de erro locais podem ser estabelecidos para processos específicos
* Note também que um método de erros global é útil no servidor, onde podde manejar erros em funções do lado do servidor.
* se escopo = ek errors from components, só erros gerados dos componentes instalados na aplicação vão chamar errorMethod. Note que, se um método de erros for definido em um componente, é chamado em caso de erro no componente e o ek errors from components conjunto de manejo de erro na aplicação host não é chamado.
* Note: se ON ERR CALL for chamado de um processo para o qual sua execução preemptiva peticionada (em modo compilado), o compilador verifica se errorMethod é uma thread-segura e retorna erros se não for compativa com o modo preemptivo. Para saber mais veja *Processos 4D Preemptivos* .
* Para parar a captura de erros, chame ON ERR CALL de novo com o parâmetro de escopo desejado (se houver) e passe uma string vazia no errorMethod.

Pode identificar erros lendo a variável sistema Error, a qual contém o número de código do erro. Os códigos de erros são listados no tema *Códigos de Erro*. Para maior informação, consulte a seção *Erros de Sintaxe (1 -> 81)*. O valor da variável Error é significativo só no método de gestão de erros; se necessitar o código do erro no método que provocou o erro, copie a variável Error em sua própria variável processo. Também pode acessar as variáveis sistema Error method e Error line as quais contém respectivamente, o nome do método e o número de linha onde ocorreu o erro (ver *Error, Error method, Error line*).

Pode usar o comando [Last errors](last-errors.md) ou [Last errors](last-errors.md)  para obter a sequência de errors (ou seja a pilha de erros) na fonte da interrupçãoo.

O método de gestão de erros deve tratar os erros de maneira apropriada ou mostrar uma mensagem de erro ao usuário. Os erros podem ser gerados por:

* O motor de banco de dados de 4D; por exemplo, quando guarda um registro trata de duplicar uma chave de índice único.
* O ambiente de 4D; por exemplo, quando não tem suficiente memoria para encher um array.
* O sistema operativo no qual é executado o banco; por exemplo, disco cheio ou erros de entrada/saída.

O comando [ABORT](abort.md) pode ser utilizado para terminar o processo. Se não chamar [ABORT](abort.md) no método instalado, 4D devolve o método interrompido e continua a execução do método. Utilize o comando [ABORT](abort.md) quando a execução não pode ser recuperado.

Se ocorrer um erro no método de gestão de erros, 4D retoma o controle da gestão de erros. Portanto, deve ter certeza de que o método de gestão de erros não possa gerar um erro. Igualmente, não pode utilizar **ON ERR CALL** dentro do método de gestão de erros.

#### Exemplo 1 

Pode definir um método de gestão de erros global por exemplo no método base On Open:

```4d
 ON ERR CALL("myGlobalErrorHandler";ek global)
```

#### Exemplo 2 

O método de projeto a seguir trata de criar um documento cujo nome é recebido como parâmetro. Se não for possível criar o documento, o método de projeto retorna 0 (zero) ou o código de erro: 

```4d
  // Método de projeto Criar doc
  // Criar doc ( String ; Pointer ) -> Inteiro longo
  // Criar doc ( DocName ; ->DocRef ) -> Código de erro resultante
 
 gError:=0
 ON ERR CALL("IO GESTOR DE ERROS")
 $2->:=Create document($1)
 ON ERR CALL("")
 $0:=gError
```

O método de projeto IO\_GESTOR\_ERROS é o seguinte:

```4d
  // Método de projeto IO_GESTOR_ERROS
```

```4d
 gError:=Error // Simplesmente copie o código do erro na variável de processo gError
```

Note a utilização da variável processo gError para obter o código do erro no método de execução atual. Quando estes métodos estiverem presentes em seu banco de dados, pode escrever:

```4d
  // ...
 var vhDocRef : Time
 $vlErrCode:=Criar doc($vsDocumentNome;->vhDocRef)
 If($vlErrCode=0)
  //...
    CLOSE DOCUMENT($vlErrCode)
 Else
    ALERT("O documento não pode ser criado, erro de E/S "+String($vlErrCode))
 End if
```

#### Exemplo 3 

Enquanto implementa um conjunto de operações complexas, pode terminar com várias subrotinas que necessitem diferentes métodos de gestão de erros. Só pode ter um método de gestão de erros por processo, de maneira que tem duas opções:  
 \- Manter contato com o método atual cada vez que chama a ON ERR CALL, ou   
\- Utiliza a variável array processo (neste caso, *asMetodoErro*) para “empilhar” os métodos de gestão de erros e um método de projeto (neste caso, ON ERROR CALL) para instalar e reinstalar os métodos de gestão de erros.   
Deve inicializar o array ao começo da execução do processo: 

```4d
  // NAO esqueça inicializar o array ao início
  // do método de processo (o método de projeto que executa o processo)
 ARRAY STRING(63;asMetodoErro;0)
```

Este é o método personalizado ON ERROR CALL:

```4d
  // Método de projeto ON ERROR CALL
  // ON ERROR CALL { ( String) }
  // ON ERROR CALL { ( Nome do método ) }
 
 C_STRING(63;$1;$MetodoErro)
 var $vlElem : Integer
 
 If(Count parameters>0)
    $MetodoErro:=$1
 Else
    $MetodoErro:=""
 End if
 
 If($MetodoErro#"")
    var gError : Integer
    gError:=0
    $vlElem:=1+Size of array(asMetodoErro)
    INSERT IN ARRAY(asMetodoErro;$vlElem)
    asMetodoErro{$vlElem}:=$1
    ON ERR CALL($1)
 Else
    ON ERR CALL("")
    $vlElem:=Size of array(asMetodoErro)
    If($vlElem>0)
       DELETE FROM ARRAY(asMetodoErro;$vlElem)
       If($vlElem>1)
          ON ERR CALL(asMetodoErro{$vlElem-1})
       End if
    End if
 End if
```

Depois, pode chamá-lo desta maneira:

```4d
 gError:=0
 ON ERROR CALL("IO ERRORS") // Instale o método de gestão de erros IO ERRORS
  // ...
 ON ERROR CALL("ALL ERRORS") // Instale o método de gestão de erros ALL ERRORS
```

```4d
  // ...
 ON ERROR CALL // Reinstale o método de gestão de erros ALL ERRORS e reinstale IO ERRORS
  // ...
 ON ERROR CALL // Reinstale o método de gestão de erros IO ERRORS
  // ...
```

#### Exemplo 4 

O método abaixo de gestão de erros ignora as interrupções de usuário e mostra o texto do erro:  
  
```4d
  //Método de projeco Show_errors_only
 If(Error#1006) //esta não é uma interrupção do usuário
    ALERT("The error "+String(Error)+" occurred. The code in question is: \""+Error formula+"\"")
 End if
```

  

#### Ver também 

[ABORT](abort.md)  
*Error Handler*  
[Last errors](last-errors.md)   
[Last errors](last-errors.md)  
[Method called on error](method-called-on-error.md)  
*Variáveis sistema*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 155 |
| Thread-seguro | &check; |
| Proibido no servidor ||


