---
id: form-get-color-scheme
title: FORM Get color scheme
slug: /commands/form-get-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get color scheme.Syntax-->**FORM Get color scheme**  : Text<!-- END REF-->
<!--REF #_command_.FORM Get color scheme.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Esquema de cores do formulário atual "light" ou "dark" |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM Get color scheme.Summary-->O comando **FORM Get color scheme** retorna o nome do esquema atual de cores do formulário atualmente sendo exibido .<!-- END REF--> Se não houver formulário atual, o comando retorna uma string vazia.

**Nota**: Em Windows, esse comando sempre retorna "light/claro".

O esquema de cores atual de um formulário é definido:

* pela propriedade de formulário "Color Scheme" (ver *colorScheme*);
* se "Color Scheme" for estabelecido como "inherited", pela chamada ao comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md);
* se [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) não for chamado, ou for chamado com o parâmetro "inherited", use Configurações (Configurações do banco de dados host no caso de um componente);
* se Configurações for estabelecido como "inherited", use as preferências de usuário do sistema operacional

Veja o comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) para detalhles sobre nomes de esquemas de cores. 

#### Exemplo 

Se quiser carregar uma imagem dependendo do esquema atual do formulário:

```4d
 $txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")
 READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)
```

**Nota:** é recomendado usar *css* para adaptar o design de objetos formulário para o esquema atual. 

#### Ver também 

[Get application color scheme](get-application-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1761 |
| Thread-seguro | &check; |
| Proibido no servidor ||


