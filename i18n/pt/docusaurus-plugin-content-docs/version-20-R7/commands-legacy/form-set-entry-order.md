---
id: form-set-entry-order
title: FORM SET ENTRY ORDER
slug: /commands/form-set-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET ENTRY ORDER.Syntax-->**FORM SET ENTRY ORDER** ( *nomeObj* {; *numPagina*} )<!-- END REF-->
<!--REF #_command_.FORM SET ENTRY ORDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeObj | Text array | &#8594;  | Array de nomes de objeto na sua ordem de entrada esperada |
| numPagina | Integer | &#8594;  | Números de página para estabelecer a ordem de entrada (página atual se omitido) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM SET ENTRY ORDER.Summary-->O comando **FORM SET ENTRY ORDER** permite definir dinâmicamente a ordem de entrada do formulário atual para o processo atual baseado no array *nomObjetos*.<!-- END REF--> 

Passe em *nomObjetos* um array que contenha os nomes dos objetos de formulário a incluir na ordem de entrada. A ordem dos objetos no array define a ordem de entrada do formulário. Todo objeto de formulário válido pertencente ao formulário atual pode ser listado. Um objeto é válido se:

* tiver a propriedade enfocável (**Nota**: p comando ignora a propriedade **Tabulável** dos objetos),
* existir no formulário (seu nome está definido),
* for utilizado na página atual (ou na página *numPag*, ver abaixo). Lembre que uma página de formulário inclui os objetos da página 0 e os objetos do formulário herdado.

Se for detectado um objeto não válido em tempo de execução, simplesmente se omite e 4D tentará utilizar o seguinte objeto válido no array *nomObjetos*. Pode conhecer a ordem de entrada atual da página atual (baseada em objetos válidos) utilizando o comando [FORM GET ENTRY ORDER](form-get-entry-order.md) com o paràmetro \*. 

Opcionalmente, pode passar o *numPag* para o qual definir a ordem de entrada. Se for omitido, o comando se aplica à página atual.

**Notas:** 

* A ordem de entrada de um subformulário é definida no próprio subformulário. Deve chamar ao comando **FORM SET ENTRY ORDER** no contexto de subformulário.
* Este comando não define o primeiro objeto enfocável no formulário em tempo de execução. Se quiser definir um primeiro objeto na ordem de entrada, deve utilizar o comando [GOTO OBJECT](goto-object.md) no evento On Load de formulário. Se utilizar o comando [OBJECT DUPLICATE](object-duplicate.md), pode definir o objeto duplicado como o primeiro passando a constante Object First in entry order no parâmetro *ligadoA*.

  
**Sobre a ordem de entrada dos dados**  
A ordem de entrada dos dados é a ordem na qual se selecionam os campos, subformulários e todos os demais objetos ativos quando o usuário tocar a tecla **Tab** ou **Retorno de carro** em um formulário. A ordem inversa de entrada de dados também está disponível pressionando as teclas **Maiúscula +Tab** ou **Maiúscula +** **Retorno de carro**. A ordem de entrada pode ser definida como padrão ou ser modifica no editor de formulários. Para mais informação, consulte a seção *Modificar a ordem de entrada dos dados* do manual de *Desenho*.

#### Exemplo 

Se quiser definir a ordem de entrada dos objetos no formulário baseado em seus nomes:

```4d
 ARRAY TEXT(tabNames;0)
 
 FORM GET OBJECTS(tabNames;Form current page+Form inherited) //obtemos os nomes dos objeto de formulário
 SORT ARRAY(tabNames;>) //classifica os nomes em orden ascendente
 FORM SET ENTRY ORDER(tabNames) //utiliza a ordem alfabética para a ordem de entrada
  //são ignorados os objetos não enfocáveis
```

#### Ver também 

[FORM GET ENTRY ORDER](form-get-entry-order.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1468 |
| Thread-seguro | &cross; |


