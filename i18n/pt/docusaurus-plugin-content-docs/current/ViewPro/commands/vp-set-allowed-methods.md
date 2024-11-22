---
id: vp-set-allowed-methods
title: VP SET ALLOWED METHODS
---

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->

**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->

| Parâmetro | Tipo   |    | Descrição                                |                  |
| --------- | ------ | -- | ---------------------------------------- | ---------------- |
| methodObj | Object | -> | Métodos permitidos nas áreas 4D View Pro | <!-- END REF --> |

> **Compatibidade**

> For greater flexiblity, it is recommended to use the [`VP SET CUSTOM FUNCTIONS`](vp-set-custom-functions.md) command which allows you to designate 4D formulas that can be called from 4D View Pro areas. As soon as `VP SET CUSTOM FUNCTIONS` is called, `VP SET ALLOWED METHODS` calls are ignored. 4D View Pro also supports 4D's generic `SET ALLOWED METHODS` command if neither `VP SET CUSTOM FUNCTIONS` nor `VP SET ALLOWED METHODS` are called, however using the generic command is not recommended.

#### Descrição

The `VP SET ALLOWED METHODS` command <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->designates the project methods that can be called in 4D View Pro formulas<!-- END REF -->. Esse comando se aplica a todas as áreas do 4D View Pro inicializadas após sua chamada durante a sessão. Ele pode ser chamado várias vezes na mesma sessão para inicializar diferentes configurações.

By default for security reasons, if you do not execute the `VP SET ALLOWED METHODS` command, no method call is allowed in 4D View Pro areas -- except if 4D's generic `SET ALLOWED METHODS` command was used (see compatibility note). A utilização de um método não autorizado numa fórmula imprime um error #NOME? erro na área 4D View Pro.

In the *methodObj* parameter, pass an object in which each property is the name of a function to define in the 4D View Pro areas:

| Propriedade      |            |                                                                                | Tipo                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | ---------- | ------------------------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<functionName>` |            |                                                                                | Object                 | Definição da função personalizada. The `<functionName>` property name defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                  | method     |                                                                                | Text                   | (obrigatório) Nome do método projeto 4D existente para permitir                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                  | parameters |                                                                                | Uma coleção de objetos | Coleção de parâmetros (na ordem em que são definidos no método). Para obter mais informações, consulte a seção [Parâmetros](../formulas.md#parameters).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                  |            | \[ ].name | Text                   | Nome de um parâmetro a ser exibido para o `<functionName>`.**Nota**: os nomes dos parâmetros não devem conter caracteres de espaço.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                  |            | \[ ].type | Number                 | Tipo do parâmetro. Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>*type* can be omitted (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). <br/> If *type* is omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object.  Se *type* é `Is object`, o objeto é enviado em uma propriedade `.value`. Consulte a seção [Parâmetros](../formulas.md#parameters). |
|                  | resumo     |                                                                                | Text                   | Descrição da função a ser exibida no 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                  | minParams  |                                                                                | Number                 | Número mínimo de parâmetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | maxParams  |                                                                                | Number                 | Número máximo de parâmetros. Passar um número maior que o comprimento dos parâmetros permite declarar parâmetros "opcionais" com o tipo padrão                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Exemplo

Pretende permitir dois métodos nas suas áreas 4D View Pro:

```4d
C_OBJECT($allowed)
$allowed:=New object //parameter for the command
 
$allowed.Hello:=New object //create a first simple function named "Hello"
$allowed.Hello.method:="My_Hello_Method" //sets the 4D method
$allowed.Hello.summary:="Hello prints hello world"
 
$allowed.Byebye:=New object //create a second function with parameters named "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3
 
VP SET ALLOWED METHODS($allowed)
```

Depois que esse código é executado, as funções definidas podem ser usadas nas fórmulas do 4D View Pro:

![](../../assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)

> Nas fórmulas do 4D View Pro, os nomes das funções são automaticamente exibidos em letras maiúsculas.

#### Veja também

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET CUSTOM FUNCTIONS](vp-set-custom-functions.md)
