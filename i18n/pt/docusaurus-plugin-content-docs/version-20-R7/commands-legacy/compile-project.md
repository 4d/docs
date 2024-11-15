---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project**  {( {*arquivoProjeto*}{;}{*opções*} )} : Object<!-- END REF-->
<!--REF #_command_.Compile project.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arquivoProjeto | 4D.File | &#8594;  | Arquivo .4DProject a compilar |
| opções | Object | &#8594;  | Objeto que especifica opções de compilação |
| Resultado | Object | &#8592; | Objeto que contém informação do status da compilação |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Compile project.Summary-->**Compile project** permite compialr o projeto do host atual ou o projeto especificado no parâmetro *projectFile*.<!-- END REF--> Para saber mais sobre compilação, veja *a página de compilação em developer.4d.com*.

Como padrão, o comando usa as opções de compilador definidas nas Configurações de Estrutura. Pode ignorá-las usando o parâmetro *options*. As sintaxes abaixo são permitidas:

* **Compile project** (): compila o projeto aberto usando as opções definidas na Configurações de Estrutura
* **Compile project** (*options*): compila o projeto aberto. As *options* definidas ignoram as Configurações de Estrutura
* **Compile project** (*projectFile*): compila *projectFile* 4DProject usando as opções definidas nas Configurações de Estrutura
* **Compile project** (*projectFile*; *options*): compila o *projectFile* 4DProject e as *opções* definidas ignoram as Configurações de Estrutura

**Nota:** Bancos de dados binários não podem ser compilados usando esse comando.

Diferente da janela do Compilador, esse comando precisa que determine explicitamente os componentes a compilar. Quando compilar um projeto com **Compile project** , precisa declarar seus componentes usando a propriedade componentes do parâmetro *options*. Lembre que os componentes já devem estar compilados (componentes binários são permitidos).

O modo resultante compilado será armazenado na pasta DerivedData ou Libraries do projeto, dependendo da propriedade *targets/alvos* do parâmetro *options*. Se quiser criar arquivos .4dz, ainda precisa zipar/comprimir manualmente o projeto compilado ou usa a funcionalidade *build application*.

Se passar uma coleção vazia em *targets*, **Compile project** executa uma checagem de sintaxe sem compilar.

Erros de compilação, se houverem, serão retornadas como objetos na coleção *erros*.

**Nota:** não se pode chamar esse comando quando outra compilação estiver rodando (por exemplo uma compilação lançada na janela Compilation).

##### Parâmetro options 

O parâmetro *options*  é um objeto. As opções de compilação disponíveis estão abaixo:

| **Propriedade**        | **Tipo**              | **Descrição**                                                                                                                                                                                       |
| ---------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components             | Colección             | Coleção de objetos 4D.File para componentes dependentes (devem estar compilados)                                                                                                                    |
| targets                | collection of strings | Valores possíveis: "x86\_64\_generic", "arm64\_macOS\_lib". Passe uma coleção vazia para executar apenas checagem de sintaxe                                                                        |
| typeInference          | Text                | "all": Digite todas as variáveis, "locals": Processo e interprocesso são digitadas, "none": Todas as variáveis são digitadas                                                                        |
| defaultTypeForNumerics | Integer               | Valor possível: Is real ou Is longint                                                                                                                                                               |
| defaultTypeForButtons  | Integer               | Valor possível: Is real ou Is longint                                                                                                                                                               |
| generateSymbols        | Boolean               | True para gerar informação de simbolo no objeto retornado .symbol\[#tab/                                                                                                                            |
| generateSyntaxFile     | Boolean               | True para gerar um arquivo de sintaxe para completar código na pasta \\Resources\\en.lproj do projeto                                                                                               |
| generateTypingMethods  | Text                | Reseta ou anexa para gerar métodos digitação. Se valor for "append"/anexar, declarações de variável existentes ão são modificadas (comportamento janela de compilador)                              |
| plugins                | Objeto 4D.Folder      | Pasta Plug-ins a ser usada em vez da [pasta Plugins do projeto atual](https://developer.4d.com/docs/Project/architecture#plugins). Essa propriedade só está disponível com a sintaxe *projectFile*. |
| targets                | Coleção de strings    | Valores possíveis: "x86\_64\_generic", "arm64\_macOS\_lib". Passe uma coleção vazia para executar apenas checagem de sintaxe                                                                        |
| typeInference          | Text                | "all": Digita todas as variáveis, "locals": Processo e interprocesso são digitadas, "none": Todas as variáveis são digitadas                                                                        |

##### Resultado da função 

O objeto retornado por **Compile project**  tem três propriedades:

| **Propriedade**                                                          | **Tipo**              | **Descrição**                                                                                                      |
| ------------------------------------------------------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| success                                                                  | Boolean               | True se a ação salvar tiver sucesso. Senão False.                                                                  |
| **Disponível só em caso de erro ou aviso:**                              |                       |                                                                                                                    |
| errors                                                                   | Collection of objects | coleção de objetos descrevendo avisos ou erros de compilação                                                       |
| isError                                                                  | Boolean               | Erro se True, senão um aviso                                                                                       |
| message                                                                  | Text                | Mensagem de erro                                                                                                   |
| code                                                                     | Object                | *Objeto code*                                                                                                      |
| line                                                                     | Number                | Número de linha de erro no código. Para métodos de classe, número de linha na função                               |
| lineInFile                                                               | Number                | Número linha no arquivo (diferente de métodos classe "line" , e leva em consideração os %attributes linha prefixo) |
| **Disponível só se a opção generateSymbols for estabelecida como True:** |                       |                                                                                                                    |
| symbols                                                                  | Object                |                                                                                                                    |
| interprocessVariables                                                    | Object                | Lista de todas as variáveis interprocesso                                                                          |
| variables                                                                | Collection            | Coleção de *Objetos variable*                                                                                      |
| size                                                                     | Number                |                                                                                                                    |
| processVariables                                                         | Object                | Lista de todos as variáveis processo                                                                               |
| variables                                                                | Collection            | Coleção de *Objetos variable*                                                                                      |
| size                                                                     | Number                |                                                                                                                    |
| localVariables                                                           | Coleção de objetos    | Lista de variáveis locais por método                                                                               |
| code                                                                     | Object                | *Objeto code*                                                                                                      |
| variables                                                                | Collection            | Coleção de *Objetos variable*                                                                                      |
| methods                                                                  | Coleção de objetos    | Lista de métodos                                                                                                   |
| code                                                                     | Object                | *Objeto code*                                                                                                      |
| callCount                                                                | Number                | Número de vezes que esse método foi chamado                                                                        |
| params                                                                   | Collection            | Coleção de tipos parâmetros (Códigos númericos de tipo valor)                                                      |
| threadSafe                                                               | Boolean               | Indica se este método é thread safe                                                                                |

Para saber mais, veja *Compilation tools*.

###### Objetos variable 

Tanto interprocessVariables.variables quanto processVariables.variables contém objetos com as estruturas abaixo:

| **Propriedade** | **Tipo** | **Descrição**                                                                          |
| --------------- | -------- | -------------------------------------------------------------------------------------- |
| name            | Text   | Nome da variável                                                                       |
| type            | number   | Ttipo da variável (como comando tipo Value)                                            |
| arrayDimension  | number   | Apenas para arrays: 1 para arrays dimensão mono, 2 para arrays duas dimensões          |
| code            | Object   | Para variáveis processos e interprocessos: descripitor de onde a variável foi definida |

###### Objeto code 

a propriedade *code* em **methods\[ \].code** e **errors\[ \].code** é um objeto com as propriedades abaixo:

| **Propriedade**                                        | **Tipo** | **Descrição**                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                   | Text   | "projectMethod", "formObjectMethod", "formmethod","databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the *Executar no atributo servidor*.), "executeFormula" (when executing a formula via [PROCESS 4D TAGS](process-4d-tags.md) or the evaluation of a formula in a 4D Write Pro document.), "class", "classFunction"|
| path                                                   | Text   | Rota método (mesmo formato que [METHOD OPEN PATH](method-open-path.md))                                                                                                                                                                                                                                                                                                                   |
| file                                                   | 4D.File  | Arquivo de método                                                                                                                                                                                                                                                                                                                                                                         |
| **Retornado dependendo do valor da propriedade tipo:** |          |                                                                                                                                                                                                                                                                                                                                                                                           |
| methodName                                             | Text   | método projeto                                                                                                                                                                                                                                                                                                                                                                            |
| table                                                  | Number   | Número da tabela (retornado para um trigger, um método formulário tabela ou método objeto formulário tabela)                                                                                                                                                                                                                                                                              |
| formName                                               | Text   | nome formulário (retornado para um método formulário)                                                                                                                                                                                                                                                                                                                                     |
| objectName                                             | Text   | Nome objeto formulário (retornado para um método objeto)                                                                                                                                                                                                                                                                                                                                  |
| className                                              | Text   | Class name                                                                                                                                                                                                                                                                                                                                                                                |
| functionName                                           | Text   | nome função Class                                                                                                                                                                                                                                                                                                                                                                         |
| databaseMethod                                         | Number   | índice método de Database                                                                                                                                                                                                                                                                                                                                                                 |

#### Advertência 

Para fazer uma checagem de sintaxe apenas, passe uma coleção vazia aos parâmetros alvos:

  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection //Coleção vazia para checar sintaxe
 $status:=Compile project($options)
```

Compilar o projeto atual usando as opções compilador da Configuração Estrutura apenas:  
  
```4d
 var $status : Object
 $status:=Compile project
```

Em um Silicon Mac, compile o projeto atual para apenas ARM:  
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

Compilar um projeto outro que o projeto atual :  
  
```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

Compile um projeto e declare seus componentes:  
  
```4d
 var $options;$status : Object
 var $component : 4D.File
 $options:=New object
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

#### Ver também 

[BUILD APPLICATION](build-application.md)  