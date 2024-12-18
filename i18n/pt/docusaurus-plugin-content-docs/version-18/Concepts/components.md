---
id: components
title: Componentes
---

Um componente 4D é um conjunto de métodos e formulários 4D que representam uma ou mais funcionalidades que podem ser instaladas em diferentes bancos de dados. Por exemplo, você pode desenvolver um componente de e-mail 4D que gerencia todos os aspectos de envio, recebimento e armazenamento de e-mails em bancos de dados 4D.

Criar e instalar componentes 4D é realizado diretamente a partir de 4D. Basicamente, os componentes são gerenciados como [plug-ins](Concepts/plug-ins.md) conforme os seguintes princípios:

- Um componente consiste em um arquivo de estrutura regular (compilado ou não) que tem a arquitetura padrão ou na forma de um pacote (ver extensão .4dbase).
- Para instalar um componente em um banco de dados, basta copiá-lo para a pasta "Components" do banco de dados, colocada ao lado do arquivo de estrutura ou ao lado da aplicação executável 4D.
- Um componente pode chamar a maioria dos elementos 4D: métodos projeto, formulários projeto, barras de menu, listas de opções, imagens da biblioteca e assim por diante. Não pode chamar métodos de bancos de dados e triggers.
- Não é possível utilizar tabelas standard ou ficheiros de dados em componentes 4D. Entretanto um componente não pode criar ou usar tabelas, campos e arquivos de dados usando mecanismos de bancos de dados externos. São bancos 4D independentes com as que se trabalha utilizando comandos SQL.

## Definições

Os mecanismos de gerenciamento de componentes em 4D exigem a implementação dos seguintes termos e conceitos:

- **Banco de dados matriz**: banco de dados 4D usado para desenvolver o componente. O banco de dados matriz é um banco de dados padrão sem atributos específicos. Uma base matriz forma um único componente. A base de dados matrix destina-se a ser copiada, compilada ou não, na pasta Components da aplicação 4D ou do banco de dados que usará o componente (banco de dados de host).
- **Banco de dados do host**: banco de dados onde um componente é instalado e usado.
- **Componente**: banco de dados matriz, compilado ou não, copiado na pasta Components da aplicação 4D ou no banco de dados host e cujo conteúdo é usado nos bancos de dados host.

Deve-se observar que um banco de dados pode ser tanto uma "matriz" quanto um "host", em outras palavras, um banco de dados matriz pode usar um ou mais componentes. No entanto, um componente não pode utilizar ele próprio "subcomponentes".

### Proteção dos componentes: compilação

Por padrão, todos os métodos projeto de um banco de dados matriz instalado como um componente são potencialmente visíveis no banco de dados host. Em particular:

- Os métodos projeto compartilhados são encontrados na página de métodos do Explorer e podem ser chamados nos métodos do banco de dados host. Seu conteúdo pode ser selecionado e copiado na área de vista prévia do Explorador. Também podem ser vistos no depurador. No entanto, não é possível abri-los no editor de métodos nem modificá-los.
- Os outros métodos de projeto do banco de dados matriz não aparecem no Explorer, mas também podem ser visualizados no depurador do banco de dados host.

Para proteger os métodos projeto de um componente de forma eficaz, basta compilar a base de dados matrix e fornecê-la na forma de um arquivo .4dc (banco de dados compilado que não contém o código interpretado). Quando um banco de dados matriz compilado é instalado como um componente:

- Os métodos projeto compartilhados são mostrados na página de métodos do Explorer e podem ser chamados nos métodos do banco de dados host. No entanto, seu conteúdo não aparecerá na área de visualização nem no depurador.
- Os outros métodos projeto do banco de dados de matriz nunca aparecerão.

## Partilhar os métodos de projeto

Todos os métodos projeto de um banco de dados matrix são, por definição, incluídos no componente (o banco de dados é o componente), que significa que eles podem ser chamados e executados pelo componente.

Por outro lado, por padrão, esses métodos projeto não serão visíveis nem poderão ser chamados no banco de dados host. No banco de dados matriz, você deve designar explicitamente os métodos que deseja compartilhar com o banco de dados host. Esses métodos projeto podem ser chamados no código do banco de dados host (mas eles não podem ser modificados no editor de métodos da base de dados host). Esses métodos formam **pontos de entrada** no componente.

**Nota:** por razões de segurança, por padrão um componente não pode executar métodos projeto pertencentes ao banco de dados host. Em alguns casos, talvez seja necessário permitir que um componente acesse os métodos de projeto do seu banco de dados host. Para fazer isso, você deve designar explicitamente os métodos de projeto do banco de dados host que deseja tornar acessíveis aos componentes.

![](../assets/en/Concepts/pict516563.en.png)

## Passar variáveis

As variáveis locais, de processo e interprocessos não são compartilhadas entre componentes e bancos de dados host. A única maneira de acessar variáveis de componentes do banco de dados host e vice-versa é usando ponteiros.

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

Quando você usa ponteiros para permitir que os componentes e o banco de dados host se comuniquem, é necessário considerar as seguintes especificidades:

- O comando `Get pointer` não retornará um ponteiro para uma variável do banco de dados host se for chamado de um componente e vice-versa.

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

Embora os componentes não possam usar tabelas, os ponteiros podem permitir que os bancos de dados host e os componentes se comuniquem entre si. Por exemplo, aqui está um método que pode ser chamado a partir de um componente:

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

Quando os comandos são chamados de um componente, eles são executados no contexto do componente, exceto pelo comando `EXECUTE METHOD`, que usa o contexto do método especificado pelo comando. Observe também que os comandos de leitura do tema "Usuários e grupos" podem ser usados a partir de um componente, mas lerão os usuários e grupos do banco de dados host (um componente não tem seus próprios usuários e grupos).

Os comandos `SET DATABASE PARAMETER` e `Get database parameter` são uma exceção: seu alcance é global para o banco de dados. Quando esses comandos são chamados de um componente, eles são aplicados ao banco de dados host.

Além disso, medidas especificas foram criadas para os comandos `Structure file` e `Get 4D folder` quando utilizados no marco dos componentes.

O comando `COMPONENT LIST` pode ser utilizado para obter a lista de componentes carregados pelo banco de dados host.

### Comandos não utilizáveis

Os comandos abaixo não são compatíveis para seu uso dentro de um componente porque modificam o arquivo de estrutura - que está aberto em apenas leitura. Sua execução em um componente irá gerar erro -10511, "O comando CommandName não pode ser chamado a partir de um componente”:

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

Um [método de tratamento de erros](Concepts/error-handling.md) instalado pelo comando `ON ERR CALL` só se aplica ao banco de dados em execução. No caso de um erro gerado por um componente, o método de tratamento de erros `ON ERR CALL` do banco de dados host não é chamado, e vice-versa.

## Uso de formulários

- Só os "formulários projeto" (formulários que não estejam associados a nenhuma tabela específica) podem ser utilizados em um componente. Qualquer formulário projeto presente no banco de dados matrix pode ser usado pelo componente.
- Um componente pode chamar formulários tabela do banco de dados local. Note que nesse caso é necessário usar ponteiros ao invés de nomes de tabelas entre colchetes [] para especificar os formulários no código do componente.

**Nota:** se um componente usa o comando `ADD RECORD`, a forma atual de entrada do banco de dados host será exibida, no contexto do banco de dados host. Por isso se o formulário incluir variáveis, o componente não terá acesso às mesmas.

- Pode publicar formulários componentes como subformulários nos bancos de dados locais. Pode publicar formulários componentes como subformulários no banco de dados local Isso significa que pode desenvolver componentes oferecendo objetos gráficos. Por exemplo, Widgets fornecidos por 4D são baseados no uso de subformulários em componentes.

## Uso de tabelas e campos

Um componente não pode usar as tabelas e os campos definidos na estrutura 4D do banco de dados matriz. Mas pode criar e usar bancos de dados externos e então usar suas tabelas e campos de acordo com suas necessidades. Pode criar e gerenciar bancos de dados externos usando SQL. Uma base de dados externa é uma base de dados 4D independente da base de dados principal da 4D, mas com isso você pode trabalhar a partir da base de dados principal 4D. Usar um banco externo significa designar temporariamente esse banco de dados como o banco atual, em outras palavras, o banco alvo para as pesquisas SQL executadas por 4D. Pode criar bancos externos usando o comando SQL `CREATE DATABASE`.

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

Em um banco de dados host contendo um ou mais componentes, cada componente, bem como os bancos de dados de host tem sua própria "string de recursos." Os recursos são particionados entre os diferentes bancos de dados: não é possível acessar os recursos do componente A do componente B ou do banco de dados host.

## Ajuda on-line para componentes

Um mecanismo específico foi implementado para permitir que desenvolvedores adicionem ajuda on-line a seus componentes. O princípio é o mesmo que o previsto para os bancos de dados 4D:

- A ajuda do componente deve ser fornecida como um arquivo com sufixo .htm, .html ou (apenas Windows) .chm,
- O arquivo de ajuda deve ser colocado ao lado do arquivo de estrutura do componente e ter o mesmo nome que o arquivo de estrutura
- Este arquivo é então carregado automaticamente no menu Ajuda da aplicação com o título "Ajuda..” seguido pelo nome do arquivo de ajuda.
