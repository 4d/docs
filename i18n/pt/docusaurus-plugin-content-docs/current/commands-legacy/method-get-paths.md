---
id: method-get-paths
title: METHOD GET PATHS
slug: /commands/method-get-paths
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS.Syntax-->**METHOD GET PATHS** ( {*nomPasta* ;} *tipoMetodo* ; *arrRotas* {; *marcador*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomPasta | Text | &#8594;  | Nome da página da pasta de inicio |
| tipoMetodo | Integer | &#8594;  | Seletor de tipo de método a recuperar |
| arrRotas | Text array | &#8592; | Arrays de rotas e nomes dos métodos |
| marcador | Real | &#8594;  | Valor mínimo de marcador |
| &#8592; | Novo valor atual |
| * | Operador | &#8594;  | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.METHOD GET PATHS.Summary-->O comando **METHOD GET PATHS** enche o array *arrRotas* com as rotas de acesso internas e os nomes dos métodos da aplicação do tipo definido pelo parâmetro *tipoMetodo*.<!-- END REF-->  
  
Se seu código está organizado em "pastas" no Navegador de 4D (página Inicio), pode passar um nome de pasta no parâmetro opcional *nomPasta*. Neste caso, o array *arrRotas* só contém as rotas dos métodos localizados neste lugar.   
  
**Nota**: não pode utilizar o caractere curinga, "@" em *nomPasta*.  
  
Passe no parâmetro *tipoMetodo* o tipo de método ao qual quer obter a rotas no array *arrRotas*. Pode utilizar as seguintes constantes (individualmente ou em combinação), do tema *Design Object Access*:

| Constante            | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path all objects     | Inteiro longo | \-1   | Combinação das rotas de todos os métodos da base                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Path class           | Inteiro longo | 32    | Rota de definição de classe. Exemplo:<br/>\[class\]/Person<br/>\[class\]/Student                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Path database method | Inteiro longo | 2     | Rota de métodos de banco de dados especificados. Lista desses métodos:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Inteiro longo | 4     | Rota dos métodos formulário projeto e de todos seus métodos objeto. Exemplos:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Path project method  | Inteiro longo | 1     | Nome do método.<br/>Exemplo: MeuMétodoProjeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Path table form      | Inteiro longo | 16    | Rota dos métodos formulário tabela e de todos seus métodos objeto. Exemplos:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Path trigger         | Inteiro longo | 8     | Rota dos triggers da base. Exemplos:<br/>*\[trigger\]/tabela\_1<br/>\[trigger\]/tabela\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

O parâmetro *marcador* permite recuperar as rotas dos métodos modificados a partir de um momento específico. Como parte de um sistema de controle de versão, isso significa que pode atualizar só os métodos modificados desde o último backup.  
O funcionamento é o seguinte: 4D mantém um contador de modificação de métodos. Cada vez que um método se cria ou passa a guardar, este contador se incrementa e seu valor atual é guardado no marcador interno do método.  
Se passado o parâmetro *marcador*, o comando só devolve os métodos cujo marcador é superior ou igual ao valor passado neste parâmetro. Além disso, o comando devolve em *marcador* o novo valor atual do contador de modificação, ou seja o valor mais alto. Se você guardar este valor, pode passar a próxima vez que este comando se chame de maneira que você somente recupere os métodos novos e modificados.   
  
Se executado este comando desde um componente, devolve por defeito as rotas dos métodos do componente. Se passado o parâmetro *\**, o array conterá as rotas dos métodos da base local.  
  
Se o comando detecta um nome de método duplicado, é gerado o erro -9802 ("Object path not unique"). Neste caso, é aconselhável utilizar o CSM com o propósito de verificar a estrutura da base de dados.

#### Exemplo 1 

Recuperação dos métodos de projeto localizados em uma pasta "web":

```4d
 METHOD GET PATHS("web";Path project method;arrPaths)
```

#### Exemplo 2 

Recuperação dos métodos base e dos triggers:

```4d
 METHOD GET PATHS(Path trigger+Path database method;arrPaths)
```

#### Exemplo 3 

Recuperação dos métodos de projeto modificados desde o último backup:

```4d
  // carregamos o último valor armazenado
 $stamp :=Max([Backups]cur_stamp)
 METHOD GET PATHS(Path project method;arrPaths;$stamp)
  // guardamos o novo valor
 CREATE RECORD([Backups])
 [Backups]cur_stamp :=$stamp
 SAVE RECORD([Backups])
```

#### Exemplo 4 

Consulte o exemplo do comando [METHOD SET CODE](method-set-code.md).

#### Ver também 

[Current method path](current-method-path.md)  
[METHOD GET FOLDERS](method-get-folders.md)  