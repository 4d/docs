---
id: wp-set-link
title: WP SET LINK
slug: /WritePro/commands/wp-set-link
displayed_sidebar: docs
---

<!--REF #_command_.WP SET LINK.Syntax-->**WP SET LINK** ( *objRange* ; *objLink* )<!-- END REF-->
<!--REF #_command_.WP SET LINK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objRange | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| objLink | Object | &#8594;  | Valor do hyperlink |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP SET LINK.Summary-->**WP SET LINK** aplica uma referência de hiperlink ao *objRange*.<!-- END REF--> São compatíveis links a URL, métodos 4D e marcadores. O link ativa uma ação quando o usuário clicar nele (ou utilizar **Ctrl+clique** em Windows ou **Cmd+clique** em macOS se o texto não for apenas leitura para abrir URL).  
  
Em *objRange*, passe o objeto 4D Write Pro onde se aplicará o link. Pode passar:

* uma range, ou
* um elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé / seção / subseção), ou
* um documento 4D Write Pro

Por exemplo, se passar um cabeçalho, o conteúdo completo do cabeçalho se mostrará como um link. Ao inserir links em seus documentos, 4D Write Pro aplica as seguintes regras:

* Se definir um link a um *objRange* que conter vários parágrafos, se definirão vários links separados.
* Se definir um link a um *objRange* que já contenha links:  
   * todos os links existentes que estejam completamente incluídos no *objRange* são eliminados e o novo link se aplica a *objRange*.  
   * Se um link for selecionado parcialmente (intersecta *objRange*), ele é reduzido para que a parte externa mantenha o link anterior e o novo link se aplique a *objRange*.

No parâmetro *objLink*, passe um objeto que descreva o hyperlink. Deve conter apenas uma das seguintes propriedades (exceto a propriedade de parâmetro que possa ser utilizada junto com a propriedade de método):

| **Propriedade** | **Tipo**        | **Descrição**                                                                                                                                            | **Ação de hyperlink**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url             | Texto           | Destino para um link de tipo URL (url codificado).                                                                                                       | Faz referência a um endereço web normal (http ou https://*website*, mailto:*abc@xyz.com,* etc.): abre a URL na aplicação predeterminada (geralmente um navegador)Faz referência a uma rota de arquivo (absoluta ou relativa ao arquivo de estrutura 4D). Ao referenciar a um arquivo .4wp ou .4w7 (file://*filepath* ou *filepath/file.4wp*): carrega e substitui o documento atual. Ao referenciar a outros tipos de arquivos, abre o arquivo na aplicação pre-determinada de sistema para o tipo de arquivo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| bookmark        | Texto           | Nome da bookmark                                                                                                                                         | Acessa a bookmark especificada no documento atual. (Consulte *Comandos de Bookmark*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| method          | Texto           | Nome de método de projeto: o método deve existir e deve ser permitido com o comando [SET ALLOWED METHODS](../../commands/set-allowed-methods.md). | Executa o método 4D quando fizer um clique. O método recebe automaticamente dois parâmetros em $1 e $2:<br/><table><tbody><tr><td>**Parâmetro**</td><td>**Propriedade**</td><td>**Tipo**</td><td>**Descrição**</td></tr><tr><td>$1</td><td></td><td>Texto</td><td>Nome da área 4D Write Pro</td></tr><tr><td>$2</td><td></td><td>Objeto</td><td></td></tr><tr><td></td><td>método</td><td>Texto</td><td>Nome de método 4D</td></tr><tr><td></td><td>parâmetro</td><td>Texto \| Número</td><td>Parâmetro de usuário enviado ao método através da propriedade de parâmetro (opcional, ver abaixo)</td></tr><tr><td></td><td>rango</td><td>Objeto</td><td>Range de *objRangE*</td></tr></tbody></table> |
| parâmetro       | Texto \| Número | Só se utiliza com um link de tipo *método*, não é obrigatório se o método não exigir um parâmetro. Contém um parâmetro adicional para enviar ao método.  | Recebido no parâmetro $2\. dentro do método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

**Notas:** 

* 4D Write Pro só aceita URL válidas (codificadas). Os caracteres especiais nos links não estão traduzidos. Se os caracteres especiais (ou seja,% 20 para espaços) são necessários, deve codificá-los expressamente. Se o link não for válido, se gera um erro.
* Os links aos métodos 4D são eliminados dos documentos 4D Write Pro quando se exportam em formato HTML, MIME HTML ou .docx.
* Se desejar eliminar um link de *objRange*, consulte o parágrafo *Manejar URLs*.

#### Exemplo 1 

Se quiser agregar um link a seu website na área de rodapé de seu documento:  

```4d
 var $footer : Object
 $footer:=WP Get footer(WPArea;1)
 WP SET TEXT($footer;"Please visit our website";wk replace)
 WP SET LINK($footer;New object("url";"http://www.4d.com"))
```

#### Exemplo 2 

Se quiser criar uma tabela de conteúdo com links utilizando todos os marcadores em seu documento:

```4d
 var $i;$n;$p;$memoStart : Integer
 var $range;$link;$toc;$tocRange;$positionInfo;$target : Object
 var $text : Text
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea1;$_bookmarks) //encontra todos os marcadores
 
 $n:=Size of array($_bookmarks)
 If($n>0)
    $tocRange:=WP Text range(WParea1;wk start text;wk start text) //encontra o começo do texto
    WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range) //agrega um salto de página antes do texto
 
    For($i;1;$n) // Insere a tabela de conteúdos e links
       $range:=WP Bookmark range(WParea1;$_bookmarks{$i})
       $positionInfo:=WP Get position($range)
       $memoStart:=$tocRange.end
       WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)
 
       $target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))
       $link:=New object("bookmark";$_bookmarks{$i})
       WP SET LINK($target;$link)
       WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)
    End for
 End if
```

#### Exemplo 3 

Se quiser definir um link a um método 4D em cada string "4D" no documento:

```4d
 var $text,$find : Text
 var $p : Integer
 var $range;$link : Object
 
 $text:=WP Get text(wpArea;wk expressions as value) //recupera todo o texto do documento
 
 $find:="4D" //destino para o link


 $p:=Position($find;$text) //recorre o texto para encontrar todas as instâncias de objetivo
 If($p>0)
    $range:=WP Text range(wpArea;$p;$p+Length($find)) //define a longitude de objetivo
  //create the link object
    $link:=New object("method";"myAlert";"parameter";"4D rocks!") //Não se esqueça de autorizar com SET ALLOWED METHODS  
 
    WP SET LINK($range;$link)
 End if


```

#### Ver também 

  
[WP Get links](wp-get-links.md)  