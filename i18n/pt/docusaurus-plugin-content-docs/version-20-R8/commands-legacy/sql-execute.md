---
id: sql-execute
title: SQL EXECUTE
slug: /commands/sql-execute
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE.Syntax-->**SQL EXECUTE** ( *instrucaoSQL* {; *objAssoc*}{; *objAssoc2* ; ... ; *objAssocN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| instrucaoSQL | Text | &#8594;  | Comando SQL a executar |
| objAssoc | Variable, Field | &#8592; | Recebe resultado (se necessário) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SQL EXECUTE.Summary-->O comando SQL EXECUTE é utilizado para executar um comando SQL e associar o resultado a objetos 4D (arrays, variáveis ou campos).<!-- END REF-->

Para que o comando possa ser executado, uma conexão válida precisa ser especificada no processo atual. 

O parâmetro *instrucaoSQL* contem o comando SQL a executar. *objAssoc* recebe os resultados. As variáveis estão associadas na ordem de sequência da coluna, o que significa que as colunas restantes são ignoradas.

:::note

O comando suporta até 127 parâmetros *boundObj*.  

:::

Se os campos 4D são passados como parâmetros em *objAssoc*, o comando criará registros e os guardará automaticamente. Os campos 4D devem vir da mesma tabela (não é possível passar um campo da tabela 1 e um campo da tabela 2 na mesma chamada). Se forem passados campos de diferentes tabelas, um erro é gerado.

Atenção: Quando passe os campos 4D nos parâmetros *objAssoc* e execute o comando *SELECT*, sempre são os dados da fonte 4D remota os que se modificam. Se você quer recuperar dados de uma fonte remota localmente, deve utilizar arrays locais intermediários e chamar ao comando *INSERT* (ver o exemplo 6).

Se passa arrays 4D nos parâmetros *objAssoc*, é recomendável declarar antes de chamar o comando com o objetivo de controlar o tipo de dados processados. Os arrays são redimensionados automaticamente quando for necessário.

No caso de uma variável 4D, apenas um registro é recuperado a cada vez. Os outros resultados são ignorados..

Nota: Para maior informação sobre o referenciado das expressões 4D em pesquisas SQL, consulte a seção *Introdução aos comandos SQL*.

#### Exemplo 1 

Neste exemplo, obteremos a coluna ename da tabela emp da fonte de dados externos. O resultado é armazenado no campo 4D \[Empregados\]Nome. Os registros 4D são criados automaticamente: 

```4d
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;[Empregados]Nome)
 SQL LOAD RECORD(SQL all records)
```

#### Exemplo 2 

Para controlar a criação de registros, é possível incluir o código numa transação e confirmá-la unicamente se a operação teste for satisfatória: 

```4d
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="SELECT campo _alfa FROM ap_Tabela_Testea"
 START TRANSACTION
 SQL EXECUTE(SQLStmt;[Tabela 2]Campo1)
 While(Not(SQL End selection))
    SQL LOAD RECORD
    ... //Escrever o código de validação de dados aqui
 End while
 VALIDATE TRANSACTION //Validação da transação
```

#### Exemplo 3 

Neste exemplo, queremos obter a coluna ename da tabela emp da fonte de dados externos. O resultado será armazenado em um array *Nome*. Obtemos os registros de 10 em 10\. 

```4d
 ARRAY STRING(30;Nome;20)
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;Nome)
 While(Not(SQL End selection))
    SQL LOAD RECORD(10)
 End while
```

#### Exemplo 4 

Neste exemplo, queremos obter as colunas ename e job da tabela emp para um ID especifico ID (cláusula WHERE) da fonte de dados externa. O resultado é armazena nas variáveis 4D *vNome* e *vJob*. Só se recupera o primeiro registro. 

```4d
 SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"
 SQL EXECUTE(SQLStmt;vNome;vJob)
 SQL LOAD RECORD
```

#### Exemplo 5 

Neste exemplo, queremos obter a coluna Campo\_Blob da tabela Test na fonte de dados. O resultado é armazenado em uma variável BLOB cujo valor é atualizado cada vez que um registro for carregado. 

```4d
 var MeuBlob : Blob
 SQL LOGIN
 SQL EXECUTE("SELECT Campo_Blob FROM Test";MeuBlob)
 While(Not(SQL End selection))
  //Buscamos nos resultados
    SQL LOAD RECORD
  //O valor de MeuBlob é atualizado a cada chamada
```

#### Exemplo 6 

Para recuperar dados localmente de um banco de dados remoto 4D server onde está armazenado. Para fazer isso, deve usar arrays intermediários:

```4d
  // Log in ao banco de dados remoto
 SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)
 If(OK=1)
  // Começando daqui todos os SQL requests serão feitas no banco de dados remoto
    var $LastName_value : Text // 4D variable usada em search statement
    ARRAY TEXT($a_LastName;0) // Armazenamento Temporário dos valores remotos para LastName
    ARRAY TEXT($a_FirstName;0) // Armazenamento temporário dos valores remotos para FirstName
    var $UseSQL : Boolean //Escolha dos modos para armazenamento local de dados do banco de dados remoto
  // (demo only)
 
    $LastName_value:="Smith" // Initializa o 4D variable
 
  // Associa o 4D $LastName_value variável com o primeiro  "?" em SQL request
    SQL SET PARAMETER($LastName_value;SQL param in)
 
  // Da tabela remota PERSONS, recupera os valores dos campos LastName e  FirstName
  // onde "LastName = Smith" e armazena-as em arrays $a_LastName e $a_FirstName
    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)
    If(Not(SQL End selection)) // Se ao menos um registro for encontrado
 
       SQL LOAD RECORD(SQL all records) // Carrega todos os registros
 
       $UseSQL:=True // Escolhe o modo para integrar os dados (só demo)
 
       If($UseSQL) // Usa SQL requests
          SQL LOGOUT // Log out do banco de dados remoto
          SQL LOGIN(SQL_INTERNAL;"user";"password") // Log in ao banco de dados local
  // A partir daqui todas as requisições  SQL são feitas no banco de dados local 
  // Salva os arrays $a_LastName e $a_FirstName na tabela local PERSONS
          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")
 
       Else // Usa 4D commands
          For($i;1;Size of array($a_LastName))
             CREATE RECORD([PERSONS])
             [PERSONS]LastName:=$a_LastName{$i}
             [PERSONS]FirstName:=$a_FirstName{$i}
             SAVE RECORD([PERSONS])
          End for
       End if
    End if
    SQL LOGOUT // Fecha a conexão
 End if
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK retorna 1, do contrário retorna 0.

#### Ver também 

[SQL LOAD RECORD](sql-load-record.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 820 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


