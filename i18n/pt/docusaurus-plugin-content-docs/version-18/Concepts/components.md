---
id: components
title: Componentes
---

Um componente 4D é um conjunto de métodos e formulários 4D que representam uma ou várias funcionalidades que possam ser instaladas em diferentes bancos de dados. Por exemplo, pode desenvolver um componente 4D de correio eletrônico que gerencie todos os aspectos do envio, a recepção e o armazenamento de correios eletrônicos em bancos de dados 4D.

Criar e instalar componentes 4D é realizado diretamente a partir de 4D. Basicamente, os componentes são geridos como [plug-ins](Concepts/plug-ins.md) de acordo com os seguintes princípios:

- Um componente consiste de um arquivo de estrutura regular (compilado ou não) tendo a arquitetura padrão ou na forma de um pacote (ver extensão .4dbase).
- Para instalar um componente em um banco de dados, basta com copiá-lo na pasta "Componentes" do banco de dados, situada junto ao arquivo de estrutura ou junto a aplicação 4D executável.
- Um componente pode chamar a maioria dos elementos 4D: métodos projeto, formulários projeto, barras de menu, listas de escolha, imagens de biblioteca e assim por diante. Não pode chamar métodos de bancos de dados e triggers.
- Não pode usar tabelas padrão ou arquivos de dados em componentes 4D. Entretanto um componente não pode criar ou usar tabelas, campos e arquivos de dados usando mecanismos de bancos de dados externos. São bancos 4D independentes com as que se trabalha utilizando comandos SQL.

## Definições

Os mecanismos de gestão de componentes em 4D requerem a aplicação dos seguintes termos e conceitos:

- **Banco de dados matriz**: banco de dados 4D utilizado para desenvolver o componente. O banco de dados matriz é um banco sem atributos específicos. Um banco de dados matriz forma um único componente. O banco de dados matriz deve ser copiado, compilado ou não, na pasta Components da aplicação 4D ou no banco de dados que usará o componente (banco de dados local).
- **Banco local**: banco de dados na qual se instala e utiliza um componente.
- **Componente**: banco matricial, compilado ou não, copiado na pasta Components da aplicação 4D ou do banco de dados local e cujo conteúdo se utilizam nos bancos de dados locais.

Note que um banco de dados pode ser tanto uma "matriz" quando um "host", ou seja, um banco de dados matriz pode ser usar um ou mais componentes. Entretanto um componente não pode usar por si mesmo "subcomponentes".

### Proteção dos componentes: compilação

Como padrão, todos os métodos de projeto de um banco de dados matriz instalados como um componente são potencialmente visíveis do banco de dados host. Em particular:

- Os métodos de projeto compartilhados são encontrados na página Métodos do Explorer e podem ser chamadas nos métodos do banco de dados local. Seu conteúdo pode ser selecionado e copiado na área de vista prévia do Explorador. Também podem ser vistos no depurador. Entretanto não é possível abrir os métodos no editor de Métodos nem modificar os métodos.
- Os outros métodos projeto do banco de dados matriz não aparecem no Explorer mas também podem ser vistos no depurador do banco de dados host.

Para proteger efetivamente os métodos projeto de um componente, simplesmente compile o banco de dados matriz e o deixe no formato de arquivo .4dc (bancos compilados que não contém o código interpretado). Quando um banco de dados matriz for instalado como componente:

- Os métodos projeto compartilhados são mostrados na Página Métodos do Explorador e podem ser chamados nos métodos do banco de dados host. Entretanto, seu conteúdo não aparecerá na área de vista prévia nem no depurador.
- Os outros métodos de projeto do banco de dados matriz não vão aparecer nunca.

## Partilhar os métodos de projeto

Todos os métodos de projeto de um banco de dados matriz são incluídos por definição no componente (o banco de dados é o componente) o que significa que pode ser chamado e executado pelo componente.

Por outro lado, como padrão esses métodos projeto não serão visíveis, nem poderão ser chamados no banco de dados host local. No banco de dados matriz, deve atribuir explicitamente os métodos que quiser que sejam partilhados com o banco de dados local No banco de dados matriz, deve atribuir explicitamente os métodos que quiser que sejam partilhados com o banco de dados local No banco de dados matriz, deve atribuir explicitamente os métodos que quiser que sejam partilhados com o banco de dados local Esses métodos de projeto podem ser chamados no código do banco de dados local/host (mas não podem ser modificados no editor Métodos do banco de dados host). Estes métodos formam os **pontos de entrada** no componente.

**Nota:** por outro lado, por razões de segurança, o comportamento normal não permite executar métodos de projeto pertencentes ao banco de dados  local. Em certos casos, pode precisar dar permissão para que um componente acesse os métodos projetos de seu banco de dados host. Para fazer isso, deve atribuir explicitamente os métodos de projeto do banco host que queira que tenham acesso aos componentes.

![](../assets/en/Concepts/pict516563.en.png)

## Passar variáveis

As variáveis local, processo e interprocesso não são partilhadas entre componentes e os bancos locais. A única maneira de acessar às variáveis do componente desde o banco local e vice versa é usando ponteiros.

Exemplo usando um array:

```4d
//No banco de dados host:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//No componente, o método de projeto  AMethod contém:
     APPEND TO ARRAY($1->;2)
```

Exemplos usando variáveis:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```

Quando usar ponteiros para que os componentes se comuniquem com o banco de dados, é preciso considerar as particularidades abaixo:

- O comando `Get pointer` não devolverá um ponteiro a uma variável do banco de dados local se for chamada desde um componente e vice versa.

- A arquitetura de componentes permite a coexistência, dentro do mesmo banco de dados interpretado, de componentes interpretados e compilados (por outro lado, em um banco de dados compilado só podem ser usados  componentes compilados). Para utilizar apontadores neste caso, deve respeitar o seguinte princípio: o intérprete pode desconectar um ponteiro construído em modo compilado; no entanto, em modo compilado, não pode deconectar um ponteiro construído em modo interpretado. In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.
- Se o componente C definir a variável `myCvar` , o componente I pode acessar ao valor desta variável utilizando o ponteiro `->myCvar`.
- Se o componente I definir a variável `myIvar` , o componente C não pode acessar essa variável usando o ponteiro `->myIvar`. Esta sintaxe causa um erro de execução.

- A comparação de ponteiros utilizando o comando `RESOLVE POINTER` não é recomendado com os  componentes, já que o principio de partição de variáveis permite a coexistência de variáveis com o mesmo nome mas com conteúdos radicalmente diferentes em um componente e no banco local (ou outro componente). O tipo da variável pode mesmo ser diferente em ambos os contextos. Se o `myptr1` e `myptr2` apontar cada ponto para uma variável, a comparação seguinte produzirá um resultado incorrecto:

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

## Acesso às tabelas do banco local

Apesar dos componentes não poderem usar tabelas, ponteiros podem permitir que bancos host/locais se comuniquem com componentes. Por exemplo, aqui está um método que pode ser chamado a partir de um componente:

```4d
// chamar a um método componente
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Dentro do componente, o código do método `methCreateRec`:

```4d
C_POINTER($1) //Pointer on a table in host database C_POINTER($2) //Pointer on a field in host database C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2 CREATE RECORD($tablepointer->)

$fieldpointer->:=$3 SAVE RECORD($tablepointer->)
```

## Escopo dos comandos de linguagem

Exceto pelos [Comandos não utilizáveis](#unusable-commands), um componente não pode usar qualquer comando da linguagem 4D.

Quando comandos são chamados a partir de um componente, são executados no contexto do componente, exceto pelo comando `EXECUTE METHOD` que utiliza o contexto do método especificado pelo comando. Também é preciso considerar que os comandos de leitura do tema "Usuários e grupos" podem ser usados desde um componente, mas lerão os usuários e grupos do banco local (um componente não tem seus próprios usuários e grupos).

Os comandos `SET DATABASE PARAMETER` e `Get database parameter` são uma exceção: seu alcance é global ao banco de dados. Quando esses comandos forem chamados de um componente, são aplicados ao banco de dados local.

Além disso, medidas especificas foram criadas para os comandos `Structure file` e `Get 4D folder` quando utilizados no marco dos componentes.

O comando `COMPONENT LIST` pode ser utilizado para obter a lista de componentes que carrega o banco local.

### Comandos não utilizáveis

Os comandos abaixo nãoo são compatíveis para seu uso dentro de um componente porque modificam o arquivo de estrutura - que está aberto em apenas leitura. Sua execução em um componente gerará o erro -10511, "O comando NomeComando não pode ser chamado desde um componente":

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
- Os comandos SQL de definição de dados (`CREATE TABLE`, `DROP TABLE`, etc.) não podem ser utilizados no banco de dados do componente. Entretanto são compatíveis com bancos de dados externos (ver o comando SQL`CREATE DATABASE`).

## Gestão de erros

Um [método de gestião de erros](Concepts/error-handling.md) instalado pelo comando `ON ERR CALL` só se aplica ao banco de dados em execução. No caso de um erro gerado por um componente, não se chama ao método de gestão de erros `ON ERR CALL` do banco local, e viceversa.

## Uso de formulários

- Só os "formulários de projeto" (formulários que não estejam associados a nenhuma tabela específica) podem ser utilizados em um componente. Only “project forms” (forms that are not associated with any specific table) can be used in a component.
- Um componente pode chamar formulários tabelas do banco de dados local. Note que nesse caso é necessário usar ponteiros ao invés de nomes de tabelas entre colchetes [] para especificar os formulários no código do componente.

**Nota:** se um componente utilizar o comando `ADD RECORD`, se mostrará o formulário de entrada atual do banco de dados local, no contexto do banco local. Por isso se o formulário incluir variáveis, o componente não terá acesso ao formulário.

- Pode publicar formulários componentes como subformulários no banco de dados local Pode publicar formulários componentes como subformulários no banco de dados local Isso significa que pode desenvolver componentes oferecendo objetos gráficos. Pode publicar formulários componentes como subformulários no banco de dados local Isso significa que pode desenvolver componentes oferecendo objetos gráficos. Por exemplo, Widgets fornecidos por 4D são baseados no uso de subformulários em componentes.

## Uso de tabelas e campos

Um componente não pode usar as tabelas e campos definidos na estrutura 4D do banco de dados matriz. Mas pode criar e usar bancos de dados externos e então usar suas tabelas e campos de acordo com suas necessidades. Pode criar e gerenciar bancos de dados externos usando SQL. However, you can create and use external databases, and then use their tables and fields according to your needs. Usar um banco externo significa designar temporariamente esse banco de dados como o banco atual, em outras palavras, o banco alvo para as pesquisas SQL executadas por 4D. Pode criar bancos externos usando o comando SQL `CREATE DATABASE`.

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
 $Ptr_1:=$2 // recupera dados do banco de dados local através de ponteiros
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
 $Ptr_1:=$2 // acesse aos dados do banco local através de ponteiros
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

Componentes podem usar recursos. De acordo com o princípio de gestão de recursos, se o componente for de arquitetura  .4dbase (arquitetura recomendada), a pasta Resources deve ser colocada dentro desta pasta.

Mecanismos automáticos são operacionais: os arquivos XLIFF encontrados na pasta Resources de um componene serão carregados por esse componente.

Em um banco de dados local que contém um ou mais componentes, cada componente, assim como os bancos de dados locais, tem sua propria "cadeia de recursos." Os recursos estão divididos entre os diferentes bancos de dados: não é possível acessar aos recursos do componente A desde o componente B ou ao banco de dados local.

## Ajuda online para os componentes

Um mecanismo específico foi implementado para permitir que desenvolvedores adicionem ajuda online a seus componentes. O principio é o mesmo que o previsto para os bancos de dados 4D:

- O componente ajuda deve ser fornecido como um arquivo com sufixo .htm, .html ou (em Windows apenas) .chm
- O arquivo de ajuda deve ser colocado do lado do arquivo de estrutura de componente e tem que ter o mesmo nome que o arquivo de estrutura,
- Esse arquivo é então carregado automaticamente no menu Help da aplicação com o título "Help for..." seguido pelo nome do arquivo de ajuda.
