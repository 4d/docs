---
id: object-get-pointer
title: OBJECT Get pointer
slug: /commands/object-get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get pointer.Syntax-->**OBJECT Get pointer** {( *seletor* {; *nomeObjeto* {; *nomeSubformulario*}})} : Pointer<!-- END REF-->
<!--REF #_command_.OBJECT Get pointer.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Integer | &#8594;  | Categoria objeto |
| nomeObjeto | Text | &#8594;  | Nome do objeto |
| nomeSubformulario | Text | &#8594;  | Nome de objeto de subformulário |
| Resultado | Pointer | &#8592; | Ponteiro à variável de objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get pointer.Summary-->O comando OBJECT Get pointer retorna um ponteiro à variável de um objeto de formulário.<!-- END REF-->  

Este comando pode ser utilizado para designar diferentes tipos de objetos em função do valor do parâmetro *seletor*. Pode passar neste parâmetro uma das próximas constantes (do tema "*Objetos de formulário (Acesso)*"):

* Object current ou *seletor* omitido: se for omitido o parâmetro seletor ou passar este seletor, o comando retorna um ponteiro a a variável associada ao objeto atual (objeto cuyo método está em execução).  
**Nota**: este funcionamento é estritamente equivalente ao funcionamento previo do comando [Self](self.md). O comando [Self](self.md) se conserva apenas por razões de compatibilidade.
* Object with focus: se passar este seletor, o comando retorna um ponteiro a variável associada ao objeto que tem o foco no formulário. Os últimos dos parâmetros opcionais são ignorados se forem passados.  
**Nota**: este funcionamento é estritamente equivalente ao comando [Focus object](focus-object.md). Esse comando agora é obsoleto a partir de 4D v12.
* Object subform container: se passar este seletor, o comando retorna um ponteiro a variável vinculada com o container do subformulário. Os últimos dois parâmetros opcionais são ignorados se forem passados. Este seletor portanto só pode ser utilizado no contexto de um formulário que é utilizado como um subformulário, com o objetivo de acessar à variável associada ao objeto contentor.
* Object named: se passar este seletor, também deve passar o segundo parâmetro, *nomObjeto*. Neste caso, o comando retorna um ponteiro à variável associada ao objeto cujo nome foi passado neste parâmetro.  
**Nota**: se *nomObjeto* corresponde a um subformulário e a opção "Subformulário saída" estiver selecionada, o comando retorna um ponteiro a tabela do sub-formulário se uma tabela fonte estiver especificada, do contrário retorna Nil.

**Nota:** Quando usado no contexto de uma list box, **OBJECT Get pointer** com Object current ou Object with focus seletor retorna um ponteiro ao list box, a coluna, ou o cabeçalho dependendo do contexto. Para saber mais veja *Gestão de objetos List Box*.

O parâmetro opcional *nomeSubform* permite recuperar um ponteiro a um objeto *nomObjeto* que não pertence ao contexto atual, ou seja, ao formulário pai. Para poder utilizar este parâmetro, deve ter passado o seletor Object named.  
Quando for passado o parâmetro *nomSubForm*, o comando OBJECT Get pointer primeiro procura o objeto subformulário objeto chamado *nomSubForm* no formulário atual, depois busca no interior deste subformulário um objeto chamado *nomObjeto*. Se este objeto for encontrado, um ponteiro é retornado à variável deste objeto.

#### Exemplo 

Dado um formulário "SF" utilizado duas vezes como sub-formulário no mesmo formulário pai. Os objetos sub-formulários são chamados "SF1" e "SF2". O formulário "SF" contém um objeto chamado ValorAtual. No evento "On Load" do método de formulário do formulário pai, queremos inicializar o objeto Valor Atual de SF1 em "Janeiro" e o de SF2 em "Fevereiro": 

```4d
 var $Ptr : Pointer
 $Ptr:=OBJECT Get pointer(Object named;"Valor atual";"SF1")
 $Ptr->:="Janeiro"
 $Ptr:=OBJECT Get pointer(Object named;"Valor atual";"SF2")
 $Ptr->:="Fevereiro"
```

#### Ver também 

[Focus object](focus-object.md)  
[OBJECT Get name](object-get-name.md)  
[OBJECT Get subform container value](object-get-subform-container-value.md)  
*Objetos (Formulários)*  
*Objetos de formulário (Acesso)*  
[Self](self.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1124 |
| Thread-seguro | &check; |
| Proibido no servidor ||


