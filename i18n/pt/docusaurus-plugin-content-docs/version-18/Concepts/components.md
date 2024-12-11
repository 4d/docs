---
id: components
title: Componentes
---

A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different databases. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D databases.

Criar e instalar componentes 4D é realizado diretamente a partir de 4D. Basically, components are managed like [plug-ins](Concepts/plug-ins.md) according to the following principles:

- Um componente consiste em um arquivo de estrutura regular (compilado ou não) que tem a arquitetura padrão ou na forma de um pacote (ver extensão .4dbase).
- To install a component in a database, you simply need to copy it into the "Components" folder of the database, placed next to the structure file or next to the 4D executable application.
- A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, pictures from the library, and so on. Não pode chamar métodos de bancos de dados e triggers.
- Não é possível utilizar tabelas standard ou ficheiros de dados em componentes 4D. Entretanto um componente não pode criar ou usar tabelas, campos e arquivos de dados usando mecanismos de bancos de dados externos. São bancos 4D independentes com as que se trabalha utilizando comandos SQL.

## Definições

The component management mechanisms in 4D require the implementation of the following terms and concepts:

- **Matrix Database**: 4D database used for developing the component. O banco de dados matriz é um banco de dados padrão sem atributos específicos. Uma base matriz forma um único componente. A base de dados matrix destina-se a ser copiada, compilada ou não, na pasta Components da aplicação 4D ou do banco de dados que usará o componente (banco de dados de host).
- **Host Database**: Database in which a component is installed and used.
- **Component**: Matrix database, compiled or not, copied into the Components folder of the 4D application or the host database and whose contents are used in the host databases.

It should be noted that a database can be both a “matrix” and a “host,” in other words, a matrix database can itself use one or more components. No entanto, um componente não pode utilizar ele próprio "subcomponentes".

### Proteção dos componentes: compilação

By default, all the project methods of a matrix database installed as a component are potentially visible from the host database. Em particular:

- The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host database. Seu conteúdo pode ser selecionado e copiado na área de vista prévia do Explorador. Também podem ser vistos no depurador. However, it is not possible to open them in the Method editor nor to modify them.
- The other project methods of the matrix database do not appear in the Explorer but they too can be viewed in the debugger of the host database.

Para proteger os métodos projeto de um componente de forma eficaz, basta compilar a base de dados matrix e fornecê-la na forma de um arquivo .4dc (banco de dados compilado que não contém o código interpretado). Quando um banco de dados matriz compilado é instalado como um componente:

- The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host database. However, their contents will not appear in the preview area nor in the debugger.
- Os outros métodos projeto do banco de dados de matriz nunca aparecerão.

## Partilhar os métodos de projeto

Todos os métodos projeto de um banco de dados matrix são, por definição, incluídos no componente (o banco de dados é o componente), que significa que eles podem ser chamados e executados pelo componente.

On the other hand, by default these project methods will not be visible, nor can they be called in the host database. In the matrix database, you must explicitly designate the methods that you want to share with the host database. Esses métodos projeto podem ser chamados no código do banco de dados host (mas eles não podem ser modificados no editor de métodos da base de dados host). Esses métodos formam **pontos de entrada** no componente.

**Note:** Conversely, for security reasons, by default a component cannot execute project methods belonging to the host database. In certain cases, you may need to allow a component to access the project methods of your host database. To do this, you must explicitly designate the project methods of the host database that you want to make accessible to the components.

![](../assets/en/Concepts/pict516563.en.png)

## Passar variáveis

The local, process and interprocess variables are not shared between components and host databases. The only way to access component variables from the host database and vice versa is using pointers.

Exemplo usando um array:

```4d
//Na base de dados do anfitrião:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//No componente, o método do projecto AMethod contém:
     APPEND TO ARRAY($1->;2)
```

Exemplos usando variáveis:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```

When you use pointers to allow components and the host database to communicate, you need to take the following specificities into account:

- The `Get pointer` command will not return a pointer to a variable of the host database if it is called from a component and vice versa.

- A arquitetura de componentes permite a coexistência, no mesmo banco de dados interpretado, de componentes interpretados e compilados (por outro lado, somente componentes compilados podem ser usados em um banco de dados compilado). Para utilizar apontadores neste caso, deve respeitar o seguinte princípio: o intérprete pode desconectar um ponteiro construído em modo compilado; no entanto, em modo compilado, não pode deconectar um ponteiro construído em modo interpretado. Vamos ilustrar esse princípio com o seguinte exemplo: dados dois componentes, C (compilados) e eu (interpretados), instalados no mesmo banco de dados host.
- Se o componente C definir a variável `myCvar` , o componente I pode acessar ao valor desta variável utilizando o ponteiro `->myCvar`.
- Se o componente I definir a variável `myIvar` , o componente C não pode acessar essa variável usando o ponteiro `->myIvar`. Esta sintaxe causa um erro de execução.

- A comparação de ponteiros usando o comando `RESOLVE POINTER` não é recomendada com componentes, uma vez que o princípio da partição de variáveis permite a coexistência de variáveis com o mesmo nome, mas com conteúdos radicalmente diferentes em um componente e o banco de dados host (ou outro componente). O tipo da variável pode mesmo ser diferente em ambos os contextos. Se o `myptr1` e `myptr2` apontar cada ponto para uma variável, a comparação seguinte produzirá um resultado incorrecto:

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      //Este teste retorna True mesmo se as variáveis forem diferentes
```

Neste caso é preciso usar a comparação de ponteiros:

```4d
     If(myptr1=myptr2) //Este teste retorna False
```

## Acesso a tabelas do banco de dados local

Although components cannot use tables, pointers can permit host databases and components to communicate with each other. Por exemplo, aqui está um método que pode ser chamado a partir de um componente:

```4d
// chamar a um método componente
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Dentro do componente, o código do método `methCreateRec`:

```4d
C_POINTER($1) //Pointer em uma tabela no banco de dados host
C_POINTER($2) //Pointer em um campo no banco de dados host
C_TEXT($3) // Valor a ser inserido

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## Escopo dos comandos de linguagem

Exceto pelos [Comandos não utilizáveis](#unusable-commands), um componente não pode usar qualquer comando da linguagem 4D.

When commands are called from a component, they are executed in the context of the component, except for the `EXECUTE METHOD` command that uses the context of the method specified by the command. Observe também que os comandos de leitura do tema "Usuários e grupos" podem ser usados a partir de um componente, mas lerão os usuários e grupos do banco de dados host (um componente não tem seus próprios usuários e grupos).

The `SET DATABASE PARAMETER` and `Get database parameter` commands are an exception: their scope is global to the database. When these commands are called from a component, they are applied to the host database.

Além disso, medidas especificas foram criadas para os comandos `Structure file` e `Get 4D folder` quando utilizados no marco dos componentes.

The `COMPONENT LIST` command can be used to obtain the list of components that are loaded by the host database.

### Comandos não utilizáveis

Os comandos abaixo não são compatíveis para seu uso dentro de um componente porque modificam o arquivo de estrutura - que está aberto em apenas leitura. Their execution in a component will generate the error -10511, “The CommandName command cannot be called from a component”:

- `ON EVENT CALL`
- `Method called on event`
- `SET PICTURE TO LIBRARY`
- `REMOVE PICTURE FROM LIBRARY`
- `SAVE LIST`
- `ARRAY TO LIST`
- `EDIT FORM`
- `CREATE USER FORM`
- `DELETE USER FORM`
- `CHANGE PASSWORD`
- `EDIT ACCESS`
- `Set group properties`
- `Set user properties`
- `DELETE USER`
- `CHANGE LICENSES`
- `BLOB TO USERS`
- `SET PLUGIN ACCESS`

**Notas:**

- O comando `Current form table` devolve `Nil` quando chamado no contexto de um formulário projeto. Por isso não pode ser usado em um componente.
- Os comandos da linguagem de definição de dados SQL(`CREATE TABLE`, `DROP TABLE`, etc.) não podem ser usados no banco de dados nos componentes. Entretanto são compatíveis com bancos de dados externos (ver o comando SQL`CREATE DATABASE`).

## Gestão de erros

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running database. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host database is not called, and vice versa.

## Uso de formulários

- Só os "formulários projeto" (formulários que não estejam associados a nenhuma tabela específica) podem ser utilizados em um componente. Any project forms present in the matrix database can be used by the component.
- Um componente pode chamar formulários tabela do banco de dados local. Note que nesse caso é necessário usar ponteiros ao invés de nomes de tabelas entre colchetes [] para especificar os formulários no código do componente.

**Note:** If a component uses the `ADD RECORD` command, the current Input form of the host database will be displayed, in the context of the host database. Consequently, if the form includes variables, the component will not have access to it.

- Pode publicar formulários componentes como subformulários nos bancos de dados locais. Pode publicar formulários componentes como subformulários no banco de dados local Isso significa que pode desenvolver componentes oferecendo objetos gráficos. Por exemplo, Widgets fornecidos por 4D são baseados no uso de subformulários em componentes.

## Uso de tabelas e campos

A component cannot use the tables and fields defined in the 4D structure of the matrix database. Mas pode criar e usar bancos de dados externos e então usar suas tabelas e campos de acordo com suas necessidades. Pode criar e gerenciar bancos de dados externos usando SQL. An external database is a 4D database that is independent from the main 4D database, but that you can work with from the main 4D database. Usar um banco externo significa designar temporariamente esse banco de dados como o banco atual, em outras palavras, o banco alvo para as pesquisas SQL executadas por 4D. Pode criar bancos externos usando o comando SQL `CREATE DATABASE`.

### Exemplo

O código abaixo está incluído em um componente e realiza três ações básicas com um banco externo:

- cria o banco externo se não existir ainda
- adiciona dados ao banco externo,
- lê dados do banco externo.

Cria o banco externo:

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) armazena os dados em um diretório autorizado
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );

        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

Escrita no banco de dados externa:

```4d
 $Ptr_1:=$2 // recupera dados do banco de dados host por meio de ponteiros
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL

        USE DATABASE DATAFILE :[<>MyDatabase];

        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);

        USE DATABASE SQL_INTERNAL;


 End SQL
```

Lendo de um banco externo:

```4d
 $Ptr_1:=$2 // acessa dados do banco de dados host por meio de ponteiros
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Begin SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 End SQL
```

## Uso de recursos

Os componentes podem utilizar recursos. Em conformidade com o princípio da gestão dos recursos, se a componente for de arquitetura .4dbase (arquitetura recomendada), a pasta Recursos deve ser colocada dentro desta pasta.

Os mecanismos automáticos estão operacionais: os arquivos XLIFF encontrados na pasta Recursos de um componente serão carregados por este componente.

In a host database containing one or more components, each component as well as the host databases has its own “resources string.” Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database.

## Ajuda on-line para componentes

A specific mechanism has been implemented in order to allow developers to add on-line help to their components. O princípio é o mesmo que o previsto para os bancos de dados 4D:

- A ajuda do componente deve ser fornecida como um arquivo com sufixo .htm, .html ou (apenas Windows) .chm,
- The help file must be put next to the structure file of the component and have the same name as the structure file,
- This file is then automatically loaded into the Help menu of the application with the title “Help for...” followed by the name of the help file.
