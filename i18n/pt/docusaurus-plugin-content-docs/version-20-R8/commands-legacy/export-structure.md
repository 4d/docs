---
id: export-structure
title: EXPORT STRUCTURE
slug: /commands/export-structure
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT STRUCTURE.Syntax-->**EXPORT STRUCTURE** ( *estruturaXML* {; *formato*} )<!-- END REF-->
<!--REF #_command_.EXPORT STRUCTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| estruturaXML | Text | &#8592; | Exportação da definição XML da estrutura de banco de dados 4D |
| formato | Text | &#8594;  | Formato de exportação: formato xml (padrão) ou formato html |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXPORT STRUCTURE.Summary-->O comando **EXPORT STRUCTURE** exporta, em *estruturaXML*, a definição da estrutura da base 4D atual ao formato XML.<!-- END REF--> Este comando utiliza os mesmos mecanismos que o comando de menu **Exportar > Definição de estrutura ao arquivo XML...** que se encontra na interface do modo Desenho de 4D (ver *Exportar e importar definições de estrutura*).

Em *estruturaXML*, passe a variável texto destinada a armazenar a definição da estrutura. A definição exportada inclui as tabelas, os campos, os índices e as relações, assim como também seus atributos e todas as características necessárias para obter uma descrição completa da estrutura. Os elementos invisíveis se exportam com o atributo correspondente. No entanto, os elementos eliminados não se exportam.

By default if you omit the format parameter, the command exports the structure definition in XML format. Otherwise, you can pass one of the following constants in the format parameter:

| Constante   | Valor |
| ----------- | ----- |
| html format | html  |
| xml format  | xml   |

O comando gera o mesmo código XML ou HTML que os itens de menu Export > Structure definition to XML file... ou Export > Structure definition to HTML file... (veja *Exportar e importar definições de estrutura*).

xml format: a gramática interna das definições de estrutura 4D está documentada em arquivos DTD - também usados para a validação de arquivos XML. Os arquivos DTD usados por 4D estão agrupados juntos na pasta DTD, ao lado da aplicação 4D. Os arquivos base\_core.dtd e common.dtd são usados para definições de estrutura. Para saber mais, consulte estes arquivos com os comentários que contêm.

Uma definição de estrutura exportada em formato XML pode ser importada em outra database (ver [IMPORT STRUCTURE](import-structure.md)).

html format: o comando gera código HTML raw que inclui referências a uma pasta contendo recursos externos tais como imagens ou css, exigido para a representação HTML. Se quiser salvar este código em uma página HTML a ser exibida no navegador, pode reutilizar a pasta criada pelo item de mneu Export > Structure definition to HTML file... , ou criar sua pasta de recursos própria. 

#### Exemplo 1 

Se quiser exportar a estrutura de banco de dados atual em um arquivo texto:

```4d
 var $vTStruc : Text
 EXPORT STRUCTURE($vTStruc)
 TEXT TO DOCUMENT("myStructure.xml";$vTStruc)
```

#### Exemplo 2 

Se quiser exportar a estrutura atual do banco de dados em formato html:

```4d
 var $vHtml : Text
 EXPORT STRUCTURE($vHtml;html format)
 File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)
```

#### Ver também 

[IMPORT STRUCTURE](import-structure.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1311 |
| Thread-seguro | &check; |


