"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51745"],{334986:function(e,n,r){r.r(n),r.d(n,{default:()=>A,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-split-cells","title":"WP TABLE SPLIT CELLS","description":"WP TABLE SPLIT CELLS ( objAlvo ) | ( TableRef ; startColumn ; startRow {; columnCount{; rowCount}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-split-cells.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-split-cells","permalink":"/docs/pt/WritePro/commands/wp-table-split-cells","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-split-cells.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-split-cells","title":"WP TABLE SPLIT CELLS","slug":"/WritePro/commands/wp-table-split-cells","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table range","permalink":"/docs/pt/WritePro/commands/wp-table-range"},"next":{"title":"WP Text range","permalink":"/docs/pt/WritePro/commands/wp-text-range"}}'),t=r("785893"),d=r("250065");let l={id:"wp-table-split-cells",title:"WP TABLE SPLIT CELLS",slug:"/WritePro/commands/wp-table-split-cells",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP TABLE SPLIT CELLS"})," ( ",(0,t.jsx)(n.em,{children:"objAlvo"})," ) | ( ",(0,t.jsx)(n.em,{children:"TableRef"})," ; ",(0,t.jsx)(n.em,{children:"startColumn"})," ; ",(0,t.jsx)(n.em,{children:"startRow"})," {; ",(0,t.jsx)(n.em,{children:"columnCount"}),"{; ",(0,t.jsx)(n.em,{children:"rowCount"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objAlvo"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Intervalo ou elemento ou documento 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TableRef"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia de TAbela"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"startColumn"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o da primeira c\xe9lula de coluna"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"startRow"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o da primeira linha da coluna"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"columnCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de colunas a dividir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rowCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de linhas a dividir"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"WP TABLE SPLIT CELLS"})," divide a sele\xe7\xe3o de intersec\xe7\xe3o de c\xe9lulas em ",(0,t.jsx)(n.em,{children:"targetObj"})," ou ",(0,t.jsx)(n.em,{children:"tableRef"})," (definido por ",(0,t.jsx)(n.em,{children:"startColumn"}),", ",(0,t.jsx)(n.em,{children:"startRow"}),", ",(0,t.jsx)(n.em,{children:"columnCount"})," e ",(0,t.jsx)(n.em,{children:"rowCount"}),"). Uma c\xe9lula ser\xe1 dividida s\xf3 se tiver sido combinada horizontalmente, verticalmente, ou ambas; do contrario, a c\xe9lula n\xe3o ser\xe1 modificada."]}),"\n",(0,t.jsx)(n.p,{children:"Passe qualquer uma das duas:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"targetObj:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"um intervalo ou"}),"\n",(0,t.jsx)(n.li,{children:"um elemento (tabela / linha / corpo / par\xe1grafo / imagem ancorada / cabe\xe7alho / rodap\xe9 / se\xe7\xe3o / subse\xe7\xe3o), ou"}),"\n",(0,t.jsx)(n.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Se ",(0,t.jsx)(n.em,{children:"targetObj"})," n\xe3o intersectar com uma tabela ou intervalo de texto onde se possa recuperar uma sele\xe7\xe3o de c\xe9lulas, o comando n\xe3o faz nada."]}),"\n",(0,t.jsxs)(n.p,{children:["Se ",(0,t.jsx)(n.em,{children:"targetObj"})," intersectar uma ou muitas c\xe9lulas que n\xe3o forem fusionadas antes, o comando ",(0,t.jsx)(n.strong,{children:"WP TABLE SPLIT CELLS"})," n\xe3o faz nada."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ou"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["startColumn e ",(0,t.jsx)(n.em,{children:"startRow"})," - definen as coordenadas superior esquerda da primera c\xe9lula a dividir."]}),"\n",(0,t.jsx)(n.li,{children:"columnCount e rowCount (opcionais) - especificam respectivamente o n\xfamero de colunas e o n\xfamero de l\xednhas a dividir."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Se rowCount for omitido, \xe9 equivalente de passar 1 (valor normal). Se tanto columnCount quanto rowCount, forem omitidos, equivale a dividir una \xfanica c\xe9lula e se n\xe3o forem fusionados antes n\xe3o acontece nada."}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser atribuir a um intervalo de c\xe9lulas (que contenha algumas c\xe9lulas j\xe1 combinadas) e divid\xed-lo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0WP TABLE SPLIT CELLS($table;3;2;1;1)\n\xa0\xa0//o\n\xa0$cells:=WP Table get cells($table;3;2;1;1)\n\xa0WP TABLE SPLIT CELLS($cells)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Resultado:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(412701).Z+"",width:"600",height:"96"})}),"\n",(0,t.jsx)(n.p,{children:"Os dados da c\xe9lula j\xe1 fusionada s\xe3o mantidos todos na primeira c\xe9lula (superior esquerda) depois da divis\xe3o, as outras c\xe9lulas resultantes da divis\xe3o permanecem vazias."}),"\n",(0,t.jsxs)(n.p,{children:["Para mais detalles, consulte ",(0,t.jsx)(n.em,{children:"Fundir e separar c\xe9lulas"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Gerenciar tabelas"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-table-merge-cells",children:"WP TABLE MERGE CELLS"})]})]})}function A(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},412701:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABgCAYAAADB0Aw1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowNjoyMCAwNjozNDoxNXY95RgAABFwSURBVHhe7d37b1V1usfxp0BvYKEFKnIp96tAL5SqIAICERWZc6LJOSeeCBhnYqInZoiJ/qI/nT9AfzgxQUi4iD+NkhlzJuESSrVQyk0sdxAoooJyUS7l1hY9+/P9ruXe2703U2fWtHD2+5UskVWI5ul3rfVZa+0+T87PMQYAAIDIdAt+BQAAQEQIWAAAABEjYAEAAESMgAUAABAxAhYAAEDECFgAAAARI2ABAABEjIAFAAAQMQIWAABAxAhYAAAAEcs4Kke7W1tb7aeffgr2oFu3bm67ffu2qw881URUE+oS1717d3f8UJM4rZXc3Nxf1kxn0nHb0tLCOS1BTk7OL+uUusSpLj169HBrhrrEheuFa2Aync8KCgosPz8/2ONlDFiHDh2yCxcuuL+oosJc4NTCUhG74gJxt7p+/bo7GenCyVrxdFK+evWq9ezZ09UFntbKwIEDbdSoUVZYWBjs/ee7du2a7dmzx/bu3WulpaXBXty6dct+/PFH6927t1ur8G7evGk//PCD9evXL+Wimc1u3Lhh58+ft/vvv98FCnhaL6rH888/H+zxMgaslStXuoumTkZKrDD79ttv7ZtvvrHx48dbnz59gr3YuXOnlZSU2LBhwywvLy/Ym90Uxuvq6qyiosIGDBgQ7MXRo0fdiWjhwoWdWhddLOvr692JcOrUqdx9By5evOiCp85pOn6pi3fu3DnbtWuX1dTUuDAB7+zZs7Zt2zabM2eOC5+sF+/MmTN24MABe/nll5PyUsaA9cEHH7gT0dixYwlYgSNHjlhTU5PNmjXLHnjggWAv1q1b555KKExwF+zpQr5q1Sp74oknbOTIkcFe7Nixw44dO2bz5s1za6azKEhs377dioqK3PELTxfMTz/91B27EyZMCPZCN9O1tbU2c+ZMFzzhffXVV7Z+/Xp3gzRo0KBgL06dOuXWy+LFi5PyUsb3XHrV097ezvvnBOF7Z1J7MtVDa4W6xFGP9HQM6dzS2a+Sw/8m35NUqgnn+WSqCXVJj7p0HB8kAgAAiBgBCwAAIGIELAAAgIgRsAAAACJGwAIAAIgYAQtA1ujsn168V1CX9KhLqvAncvG33TFgJf6oKpsfeUJNUjfVwx1usV9j/2CLbTmx7edYbdJ9LWu3cJ10IS4MqbhgpgprQl1SUZf00tUkY6PR5cuXu6Z8aiZGo1GvubnZNRRTU76+ffsGe6FGhcUlJTZqzBjGJwQ0UmLz5s2uWS9NaUM5dvDAfuverZv9y+9+16l1USd3NUj84osvbNy4ccFeXLlyxb788ksrKyujY3mCS5cuuakDarStKRXw1LBXHct1DSwuLg72QuOmNI7r7bffThqjlzFgvffee9bW1uba4ROwPI3JUedjHXSMyonbuWuXtXQrsH5Dyiy3Rw/3RCvbqQY64BQ4NXIKZt1zc+3UsWNWPmyg/ee//1unB6wtW7a4OWpTpkwJ9kIXTM1nHBO7OaJjeZxG5WiEUGVlZadOHLjb6frX2Nhojz76KIE8wXfffWcnTpyw1157reOjcsrLy12Y4ALhHT582Pbv3+/GJ/BUIu6jdevsVFuuDZlUaXl5+cGrseymx8U60Jg6H5ffs9D2NTZY6Y2L9tyCp2xAJweshoYGN8rpscceC/ZCFwbNaJw8ebKbRwhPo3I0S3TGjBkEzwSnT5+2jRs32oIFCwieCTRCSG9ylixZ0rGAtXbtWpfeddARsLxDhw65gMUswmR/+ugj++p2vg1VwMonYCG9/MJCa9q+zYpbztmzTz/Z6QFLswjvu+8+ZhEmCGcR6mb6wQcfDPYinEWoMD58+PBgL8JZhM8884wNHjw42IvfPItQlL24+44L60FNkiXWhY3tb23uM+9dxP33keSX7wt+EdaEuqSiLh1HmwYAAICIEbAAAAAiRsACAACIGAELAAAgYgQsAACAiGUMWGEfH1rix6ke6tJKTZLlJHSuBe5WOnbz8vKC30HCmlCXZNQlPV37VJP8/PxgDyTMS7+WsQ/WypUrXadWRuXEqQeIurWqPxijcjxFzc1bttjN/mU2snKq5dJoFBmEfbBKWs7bsws6vw+WRhepX82kSZP4MfOARsKov9/IkSNd40jq4mm9HDx40CZOnOimmVAXT5MQ1Pn/oYceciOEqIt34cIF+/777+3111/v2KicZcuWWWtrq/Xv359GozFKqBqVc+bMGdd8tXfv3iyuGC2mHTt3Wp+JNTZm6sOWm5tHwEJaXRmwNCtMjQB1k6SmmhpSnu10TlPAUvNkBawhQ4ZQlxjVRQFr3759rvmqHjRwrvd1UcDavXu31dTUuGxAXTzVRVMRli5d2rGApVE5OuhGjBjBE6wYLS4NRT1y5Ig98sgjVlpayuKK0WL637/+1c7nl9iw8ipjVA4y6eonWBqVo5tFHb8cu54uDOpwryc1o0ePpi4BXSy1XqZNm+be4lAXTx3uNdNz/vz5BM8EeviyY8cOe/HFF5PyUsaA9eGHH1pVVRWzCBMoXOmuhlmEyf708cd2qq2HDZ0UC1iMykEGXR2wFCSKiorc8QtPQSIclTNhwoRgL8IgoVE5zCKM0xPgDRs2uFE5Cp7w9NEDrZdFixYlBayMn05W7mJQbTLVQ4/QqUkyH6j44D/ufrwCS6ZzmWpCXZJRl8yoS3rpcgE//gUAABAxAhYAAEDECFgAAAARI2ABAABEjIAFAAAQsYwBS32f1J4hsWlWttOPX2pTbRDXzdUk+A1wlwrPaYgLa5KbmxvsgVCXzKhLKq2XdFkpYx+s1atX2/Dhw62srIyQFaMCNjc329GjR23q1KlufAJ8XdZv3GiXevW34eXV9MFCRl3dB0v9nq5du+bGfPBj5v7Y1YiPXbt22bhx41xj6QyXg6yiupw7d841jtS5nhFCnupy9uxZq6+vt9mzZ9NoNIEmvGi00iuvvNKxRqPvv/++6/ukIib+hWylkPn111+7jq0an8CoHE912R47ERWNr7LR1YzKQWZdPSpn06ZNrlmwjl8Clr9gXrlyxdVk6NChLkhQF1+XcEajgiezCD3VRTcqTU1Nbh4vswjjVJfLly/bG2+84eoUyhiwVq1a5cbB6KAjYPnFpS62J0+etIqKCre44OtSW1dnt/oPtREV1ZabR8BCel39BGvbtm3W3t7unkrA0xOsPXv2uPmqdCyP0+BePdnT0049ZICnJzU6jubOnWt9+/YN9kJ1UfB86aWXOvYES6NydCLSfCoClnfs2DE3KmfGjBmMyknw8bp1drJVo3IqeUWIjLo6YDU2NrpRORp/Ai8claObRoUseIzKSU8PGTZu3OhG5ejhCzyNyqmrq7MXXnghKS9l/HCVcldrayuPjBO0tbW5O+AMmTRr6VUycLfTcctaTaaa6BxPXZKFdeH6l0prhfWSKt1a4dPrAAAAESNgAQAARIyABQAAEDECFgAAQMQIWAAAABG7Y8BSE8nEplnZTvWgJqlyYjUB7gUcu6lUE+qSLKwJdUlFXdJLV5OMfbDWrFnj+qKMGjWKPlgxKp76YKm77/Tp0xkTEFDg/PNf/mLf9ehtwyZX0QcLGXV1H6yGhgYrKCiwmTNncuwG1FBTfbDKy8ttwoQJ1CWgxpHqg6WehxoZR12806dPuz5YTz/9tA0ePJi6BFSXzz77zJYsWdKxRqPLli1zf5BO7p6ChJqJqZCTJ0+24uJiFleM6vJZfb0VjC63sVMfoZM7MurqgLV+/XrXKFijcujj428ar1696uaralTOgAED6PsUo7pohJBupseOHetG5VAXXxcdRzqG1JhWndypi6dRXC0tLfbWW2+5a2LojrMINTVbT2oS/0K20uLSHELNI9SdXp8+fYKvZDfVpWH7dh+wqhWwcjnokFZXByx1WtaF8+GHH+bmKPDrYc/wwmHP1dXVNmjQoGAvwmHPs2bNcoEcnp54KpC/+uqrHXuCxaicVIzKSY9ROeiIrg5Y22M3Ar169XIXB3i6YIavCPVkD55G5dTW1rpROXpFCE+jcvQkWKNy9IoQnt5u6ZXy4sWLk/JSxkdTyl2MyknGqJz0eN2Ce4meurLFt1C6r2Xrlijd17N5C6X7WjZv6fDuDwAAIGIELAAAgIgRsAAAACJGwAIAAIgYAQsAACBidwxYd/p0PJCKtYI7YX0AyB53DFhq0cAW39SeIdzSfT1bN1+Pn+127N/Z/KZ6KFD8FKtNuq9n7xY7fvzppdPpZjE3Nzf4HURNpPPy8tyGOOqSno4h6pJKdUnXkD1jo9EVK1ZYUVGRlZWV0Wg0RgU8efKkNTc3W2VlpRsTAF+XzbVb7ILl2YARo90FLMOSyiqqQVt7u/WIHTtMQvBy8/PtaFOTjSkutP947l87vdHopk2bXLPgiRMnskYDly9fdqNy1ExTnbmpi6fRJ+rMrearJSUlwd7spnO9Ov83xY7hKVOmuHFx8C5evOi2N998M+l8f8dZhGogqVE5BCx/R6M5hOrwq4Oud+/enIxiVJfGxh1WqDA+bDh3NoFbt27Z559/7kaQEMY9rZWjhw9bad9ie+7ZZzt1GoICljpza9xVVVWVe/Ka7XTBVJDQBVND/TWPkLr4uuhiuXfvXtfhnhmNnuqiEUI7d+5046ZKS0u5BgbOnz/vxugtXbq0YwFLo3ImTZrkLhCaSZjtVLSDBw/a/v37bfbs2dztBVSXdevW2QMD7reqyirr2atX8JXspU8atbRctdWr19hTTz1lI5jx5qgu2xsb7WRzs82dO7fTA1ZDQ4O7AZg+fTrHbkAXTNVF5/oxY8ZQl4BGCG3dutWtlSFDhlCXgG5QdKPy5JNPcg1MoHClUVxLlizp2CzCtWvXuldh48ePJ2AF9MhYAUuzzJhFGKeApSedejKgWW8wu3btmq1Zs8bmz5/PEN0EOgmdOHHC5s2b95uPoRMrZtjog/9tP7/zeLCn48JZhPrYw8yZM4O9CGcRVlRUuCH28MJZhForw4YNC/ZCswg3bNjgZhEyBDsunEW4aNGijs0iFGUvEmpcWA9qkoyapKIe6f3DdXl3jntVkTNjhZ0Idv0WvOpJpe8JdUkWntOoSyrVhLqkSndu49O3AO4Jo36/1V/4av9otu0PNlpBK2eGrfh7khYA/JMRsADcWx5/J3jCUGt/tG32h9G+X98MkhaAuwgBC8A96nF7J3iV4x9q/Y9tCb4CAF2NgAXgHrXFlrrXhDk2512zR5f/VyxyAcDdgYAF4C4SD03xbWnyk6ktS4P9c+xde9SWH/dPsbb+flTwBwCg690xYOnHDXUig6d6qO8TNUmmerBWkrFW0ktswvdbqU2D6pnjH1fZcfd6cKt1NFfp7zIqJ1lYE+qSTOuUuqQK1wsNpZOpLunObRn7YK1cudL1qRk8eHBSX4dsph4gx48fd/3B+vXrF+yF+sWoD5YaFebn5wd7s1tra6t98sknNm3aNHcMwdu3b59dv37dFixY0Kl9sNSZe/Pmza5zeU1NDT9mHqOLguqye/du11Ba43IyXA6yiuoSdiyvrq62gQMHUpcY1UV90+rr612zbZ3zqYunumjklDq5J+aljAGrrq7OzR0qKCj4h+46/z+5evWqayCp0SckeC886LRO1MSRMO61t7e7rsc6CfXs2TPYm920VnROUYNChRyNm+osN27csMOHD9uBAwfczREBy2tra3PzCHXs6hjmgunpBunSpUtu3p5uGqmLpxFgCuU6hlgvcVovygQLFy4M9ngZA5ZOQDdv3nTzCOHpAqGwqdqwsOJUE9WDmiSjLql0DBUWFnZ6ENf3QCHrypUr7v+B74kX1kK/CnXxqEt6qoeuf/o1rBF8XRTEfz0AO2PAAgAAwN+Hd38AAAARI2ABAABEjIAFAAAQMQIWAABAxAhYAAAAESNgAQAARIyABQAAEDECFgAAQMQIWAAAABEjYAEAAESMgAUAABAxAhYAAEDECFgAAACRMvs/hfk/K6qvcwcAAAAASUVORK5CYII="},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var s=r(667294);let t={},d=s.createContext(t);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);