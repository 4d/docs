---
id: method-get-path
title: METHOD Get path
slug: /commands/method-get-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get path.Syntax-->**METHOD Get path** ( *tipoMetodo* {; *aTabela*}{; *nomObjeto*{; *nomObjetoForm*}}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.METHOD Get path.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoMetodo | Integer | &#8594;  | Seletor de tipo objeto |
| aTable | Table | &#8594;  | Referência de tabela |
| nomObjeto | Text | &#8594;  | Nome de formulário ou método base |
| nomObjetoForm | Text | &#8592; | Nome do objeto de formulário |
| * | Operador | &#8594;  | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |
| Resultado | Text | &#8592; | Rota de acesso completa do objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD Get path.Summary-->O comando **METHOD Get path** devolve a rota de acesso interna completa de um método.<!-- END REF-->

Passe em *tipoMetodo*, o tipo de método cuja rota quer obter. Pode utilizar as seguintes constantes, do tema *Design Object Access*:

| Constante            | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path database method | Inteiro longo | 2     | Rota de métodos de banco de dados especificados. Lista desses métodos:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Inteiro longo | 4     | Rota dos métodos formulário projeto e de todos seus métodos objeto. Exemplos:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Path project method  | Inteiro longo | 1     | Nome do método.<br/>Exemplo: MeuMétodoProjeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Path table form      | Inteiro longo | 16    | Rota dos métodos formulário tabela e de todos seus métodos objeto. Exemplos:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Path trigger         | Inteiro longo | 8     | Rota dos triggers da base. Exemplos:<br/>*\[trigger\]/tabela\_1<br/>\[trigger\]/tabela\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

Passe os valores nos parâmetros *aTabela*, *nomObjeto* e *nomObjetoForm* em função do tipo de objeto o qual quer obter a rota de acesso do método:  

| **Tipo de objeto**      | *aTabela* | *nomObjeto*  | *nomObjetoForm* |
| ----------------------- | --------- | ------------ | --------------- |
| Rota Formulário projeto | X         | X (opcional) |                 |
| Rota Formulário tabela  | X         | X            | X (opcional)    |
| Rota Método base        | X         |              |                 |
| Rota Método projeto     | X         |              |                 |
| Rota Trigger            | X         |              |                 |

**Nota:** O comando não checa se o objeto design alvo realmente existe no banco de dados (exceto se um nome de método de database inválido for passado, em cujo caso um erro é gerado)

Se o comando for executado desde um componente, retorna como padrão as rotas dos métodos de componente. Se passar o parâmetro \*, o array contém as rotas dos métodos da database host..

#### Exemplo 

```4d
  //Recuperar a rota de acesso do método base "On Startup":
 $path:=METHOD Get path(Path database method;"onStartup")
 
  //Recuperar a rota de acesso do trigger da tabela [Empregados]:
 $path:=METHOD Get path(Path trigger;[Empregados])
 
  //Recuperar a rota de acesso do método do objeto "OK" do formulário "input" da tabela [Empregados]:
 $path:=METHOD Get path(Path table form;[Empregados];"input";"OK")
```

#### Ver também 

[Current method path](current-method-path.md)  
[METHOD OPEN PATH](method-open-path.md)  
[METHOD RESOLVE PATH](method-resolve-path.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1164 |
| Thread-seguro | &cross; |


