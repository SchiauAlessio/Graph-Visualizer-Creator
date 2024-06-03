export const samples: { [key: string]: string } = {
  "State Machine": `digraph finite_state_machine {
      rankdir=LR;
      size="8,5"

      node [shape = doublecircle]; LR_0 LR_3 LR_4 LR_8;
      node [shape = circle];

      LR_0 -> LR_2 [ label = "SS(B)" ];
      LR_0 -> LR_1 [ label = "SS(S)" ];
      LR_1 -> LR_3 [ label = "S($end)" ];
      LR_2 -> LR_6 [ label = "SS(b)" ];
      LR_2 -> LR_5 [ label = "SS(a)" ];
      LR_2 -> LR_4 [ label = "S(A)" ];
      LR_5 -> LR_7 [ label = "S(b)" ];
      LR_5 -> LR_5 [ label = "S(a)" ];
      LR_6 -> LR_6 [ label = "S(b)" ];
      LR_6 -> LR_5 [ label = "S(a)" ];
      LR_7 -> LR_8 [ label = "S(b)" ];
      LR_7 -> LR_5 [ label = "S(a)" ];
      LR_8 -> LR_6 [ label = "S(b)" ];
      LR_8 -> LR_5 [ label = "S(a)" ];
    }
    `,
  "Data Structures": `digraph g {
      fontname="Helvetica,Arial,sans-serif"
      node [fontname="Helvetica,Arial,sans-serif"]
      edge [fontname="Helvetica,Arial,sans-serif"]
      graph [
      rankdir = "LR"
      ];
      node [
      fontsize = "16"
      shape = "ellipse"
      ];
      edge [
      ];
      "node0" [
      label = "<f0> 0x10ba8| <f1>"
      shape = "record"
      ];
      "node1" [
      label = "<f0> 0xf7fc4380| <f1> | <f2> |-1"
      shape = "record"
      ];
      "node2" [
      label = "<f0> 0xf7fc44b8| | |2"
      shape = "record"
      ];
      "node3" [
      label = "<f0> 3.43322790286038071e-06|44.79998779296875|0"
      shape = "record"
      ];
      "node4" [
      label = "<f0> 0xf7fc4380| <f1> | <f2> |2"
      shape = "record"
      ];
      "node5" [
      label = "<f0> (nil)| | |-1"
      shape = "record"
      ];
      "node6" [
      label = "<f0> 0xf7fc4380| <f1> | <f2> |1"
      shape = "record"
      ];
      "node7" [
      label = "<f0> 0xf7fc4380| <f1> | <f2> |2"
      shape = "record"
      ];
      "node8" [
      label = "<f0> (nil)| | |-1"
      shape = "record"
      ];
      "node9" [
      label = "<f0> (nil)| | |-1"
      shape = "record"
      ];
      "node10" [
      label = "<f0> (nil)| <f1> | <f2> |-1"
      shape = "record"
      ];
      "node11" [
      label = "<f0> (nil)| <f1> | <f2> |-1"
      shape = "record"
      ];
      "node12" [
      label = "<f0> 0xf7fc43e0| | |1"
      shape = "record"
      ];
      "node0":f0 -> "node1":f0 [
      id = 0
      ];
      "node0":f1 -> "node2":f0 [
      id = 1
      ];
      "node1":f0 -> "node3":f0 [
      id = 2
      ];
      "node1":f1 -> "node4":f0 [
      id = 3
      ];
      "node1":f2 -> "node5":f0 [
      id = 4
      ];
      "node4":f0 -> "node3":f0 [
      id = 5
      ];
      "node4":f1 -> "node6":f0 [
      id = 6
      ];
      "node4":f2 -> "node10":f0 [
      id = 7
      ];
      "node6":f0 -> "node3":f0 [
      id = 8
      ];
      "node6":f1 -> "node7":f0 [
      id = 9
      ];
      "node6":f2 -> "node9":f0 [
      id = 10
      ];
      "node7":f0 -> "node3":f0 [
      id = 11
      ];
      "node7":f1 -> "node1":f0 [
      id = 12
      ];
      "node7":f2 -> "node8":f0 [
      id = 13
      ];
      "node10":f1 -> "node11":f0 [
      id = 14
      ];
      "node10":f2 -> "node12":f0 [
      id = 15
      ];
      "node11":f2 -> "node1":f0 [
      id = 16
      ];
      }`,
  "Color Wheel": `graph Color_wheel {
\tgraph [
\t\tlayout = neato
\t\tlabel = "Color wheel, 33 colors.\\nNeato layout"
\t\tlabelloc = b
\t\tfontname = "Helvetica,Arial,sans-serif"
\t\tstart = regular
\t\tnormalize = 0
\t]
\tnode [
\t\tshape = circle
\t\tstyle = filled
\t\tcolor = "#00000088"
\t\tfontname = "Helvetica,Arial,sans-serif"
\t]
\tedge [
\t\tlen = 2.7
\t\tcolor = "#00000088"
\t\tfontname = "Helvetica,Arial,sans-serif"
\t]
\tsubgraph Dark {
\t\tnode [fontcolor = white width = 1.4]
\t\tcenter [width = 1 style = invis shape = point]
\t\tcenter -- darkred [label = "0°/360°"]
\t\tdarkred [fillcolor = darkred]
\t\tbrown [fillcolor = brown]
\t\tbrown -- center [label = "30°"]
\t\tolive [fillcolor = olive]
\t\tolive -- center [label = "60°"]
\t\tdarkolivegreen [fillcolor = darkolivegreen fontsize = 10]
\t\tdarkolivegreen -- center [label = "90°"]
\t\tdarkgreen [fillcolor = darkgreen]
\t\tdarkgreen -- center [label = "120°"]
\t\t"dark hue 0.416" [color = ".416 1 .6" fontcolor = white]
\t\t"dark hue 0.416" -- center [label = "150°"]
\t\tdarkcyan [fillcolor = darkcyan]
\t\tdarkcyan -- center [label = "180°"]
\t\t"dark hue 0.583" [color = ".583 1 .6" fontcolor = white]
\t\t"dark hue 0.583" -- center [label = "210°"]
\t\tdarkblue [fillcolor = darkblue]
\t\tdarkblue -- center [label = "240°"]
\t\t"dark hue 0.750" [color = ".750 1 .6"]
\t\t"dark hue 0.750" -- center [label = "270°"]
\t\tdarkmagenta [fillcolor = darkmagenta]
\t\tdarkmagenta -- center [label = "300°"]
\t\t"dark hue 0.916" [color = ".916 1 .6"]
\t\t"dark hue 0.916" -- center [label = "330°"]
\t}
\tsubgraph Tue {
\t\tnode [width = 1.3]
\t\t"hue 0.083" -- brown
\t\t"hue 0.083" [color = ".083 1 1"]
\t\t"hue 0.125" [color = ".125 1 1"]
\t\t"hue 0.166" -- olive
\t\t"hue 0.166" [color = ".166 1 1"]
\t\t"hue 0.208" [color = ".208 1 1"]
\t\t"hue 0.250" -- darkolivegreen
\t\t"hue 0.250" [color = ".250 1 1"]
\t\t"hue 0.291" [color = ".291 1 1"]
\t\t"hue 0.333" -- darkgreen
\t\t"hue 0.333" [color = ".333 1 1"]
\t\t"hue 0.375" [color = ".375 1 1"]
\t\t"hue 0.416" -- "dark hue 0.416"
\t\t"hue 0.416" [color = ".416 1 1"]
\t\t"hue 0.458" [color = ".458 1 1"]
\t\t"hue 0.500" -- darkcyan
\t\t"hue 0.500" [color = ".500 1 1"]
\t\t"hue 0.541" [color = ".541 1 1"]
\t\tnode [fontcolor = white]
\t\t"hue 0.000" [color = ".000 1 1"]
\t\t"hue 0.000" -- darkred
\t\t"hue 0.041" [color = ".041 1 1"]
\t\t"hue 0.583" -- "dark hue 0.583"
\t\t"hue 0.583" [color = ".583 1 1"]
\t\t"hue 0.625" [color = ".625 1 1"]
\t\t"hue 0.666" -- darkblue
\t\t"hue 0.666" [color = ".666 1 1"]
\t\t"hue 0.708" [color = ".708 1 1"]
\t\t"hue 0.750" -- "dark hue 0.750"
\t\t"hue 0.750" [color = ".750 1 1"]
\t\t"hue 0.791" [color = ".791 1 1"]
\t\t"hue 0.833" -- darkmagenta
\t\t"hue 0.833" [color = ".833 1 1"]
\t\t"hue 0.875" [color = ".875 1 1"]
\t\t"hue 0.916" -- "dark hue 0.916"
\t\t"hue 0.916" [color = ".916 1 1"]
\t\t"hue 0.958" [color = ".958 1 1"]
\t\tedge [len = 1]
\t\t"hue 0.000" -- "hue 0.041" -- "hue 0.083" -- "hue 0.125" -- "hue 0.166" -- "hue 0.208"
\t\t"hue 0.208" -- "hue 0.250" -- "hue 0.291" -- "hue 0.333" -- "hue 0.375" -- "hue 0.416"
\t\t"hue 0.416" -- "hue 0.458" -- "hue 0.500" --"hue 0.541" -- "hue 0.583" -- "hue 0.625"
\t\t"hue 0.625" -- "hue 0.666" -- "hue 0.708" -- "hue 0.750" -- "hue 0.791" -- "hue 0.833"
\t\t"hue 0.833" -- "hue 0.875" -- "hue 0.916" -- "hue 0.958" -- "hue 0.000"
\t}
\tsubgraph Main_colors {
\t\tnode [width = 2 fontsize = 20]
\t\tred [fillcolor = red fontcolor = white]
\t\torangered [fillcolor = orangered]
\t\torange [fillcolor = orange]
\t\tgold [fillcolor = gold]
\t\tyellow [fillcolor = yellow]
\t\tyellowgreen [fillcolor = yellowgreen]
\t\tdeeppink [fillcolor = deeppink fontcolor = white]
\t\tfuchsia [label = "fuchsia\\nmagenta" fillcolor = fuchsia fontcolor = white]
\t\tpurple [fillcolor = purple fontcolor = white]
\t\tblue [fillcolor = blue fontcolor = white]
\t\tcornflowerblue [fillcolor = cornflowerblue]
\t\tdeepskyblue [fillcolor = deepskyblue]
\t\taqua [fillcolor = aqua label = "aqua\\ncyan"]
\t\tspringgreen [fillcolor = springgreen]
\t\tgreen [fillcolor = green]
\t\tpurple -- fuchsia -- deeppink -- red
\t\tcornflowerblue -- blue -- purple
\t\tcornflowerblue -- deepskyblue -- aqua [len = 1.7]
\t\taqua -- springgreen -- green -- yellowgreen -- yellow
\t\tyellow -- gold -- orange -- orangered -- red [len = 1.6]
\t\torange -- "hue 0.083"
\t\tdeeppink -- "hue 0.916"
\t\tdeeppink -- "hue 0.875"
\t\tred -- "hue 0.000"
\t\tyellowgreen -- "hue 0.250"
\t\tblue -- "hue 0.666"
\t\tyellow -- "hue 0.166"
\t\tgold -- "hue 0.125"
\t\tgreen -- "hue 0.333"
\t\tspringgreen -- "hue 0.416"
\t\taqua -- "hue 0.500"
\t\tcornflowerblue -- "hue 0.583"
\t\tdeepskyblue -- "hue 0.541"
\t\tpurple -- "hue 0.791"
\t\tpurple -- "hue 0.750"
\t\tfuchsia -- "hue 0.833"
\t}
\tsubgraph Light_colors {
\t\tnode [width = 2 fontsize = 20]
\t\tnode [shape = circle width = 1.8]
\t\tedge [len = 2.1]
\t\tpink [fillcolor = pink]
\t\tpink -- red
\t\tlightyellow [fillcolor = lightyellow]
\t\tlightyellow -- yellow
\t\tmediumpurple [fillcolor = mediumpurple]
\t\tmediumpurple -- purple
\t\tviolet [fillcolor = violet]
\t\tviolet -- fuchsia
\t\thotpink [fillcolor = hotpink]
\t\thotpink -- deeppink
\t\t"light hue 0.250" [color = ".250 .2 1"]
\t\t"light hue 0.250" -- yellowgreen
\t\tlightcyan [fillcolor = lightcyan]
\t\tlightcyan -- aqua
\t\tlightslateblue [fillcolor = lightslateblue]
\t\tlightslateblue -- blue
\t\tlightgreen [fillcolor = lightgreen]
\t\tlightgreen -- green
\t\tlightskyblue [fillcolor = lightskyblue]
\t\tlightskyblue -- deepskyblue
\t\tpeachpuff [fillcolor = peachpuff]
\t\tpeachpuff -- orange
\t\t"light hue 0.416" [color = ".416 .2 1"]
\t\t"light hue 0.416" -- springgreen
\t}
\tsubgraph Tints {
\t\tnode [width = 1]
\t\tedge [len = 2.4]
\t\t"hue 0 tint" -- pink
\t\t"hue 0 tint" [color = "0 .1 1"]
\t\t"hue 0.041 tint" [color = ".041 .1 1"]
\t\t"hue 0.083 tint" -- peachpuff
\t\t"hue 0.083 tint" [color = ".083 .1 1"]
\t\t"hue 0.125 tint" [color = ".125 .1 1"]
\t\t"hue 0.166 tint" -- lightyellow
\t\t"hue 0.166 tint" [color = ".166 .1 1"]
\t\t"hue 0.208 tint" [color = ".208 .1 1"]
\t\t"hue 0.250 tint" -- "light hue 0.250"
\t\t"hue 0.250 tint" [color = ".250 .1 1"]
\t\t"hue 0.291 tint" [color = ".291 .1 1"]
\t\t"hue 0.333 tint" -- lightgreen
\t\t"hue 0.333 tint" [color = ".333 .1 1"]
\t\t"hue 0.375 tint" [color = ".375 .1 1"]
\t\t"hue 0.416 tint" -- "light hue 0.416"
\t\t"hue 0.416 tint" [color = ".416 .1 1"]
\t\t"hue 0.458 tint" [color = ".458 .1 1"]
\t\t"hue 0.5 tint" -- lightcyan
\t\t"hue 0.5 tint" [color = ".5 .1 1"]
\t\t"hue 0.541 tint" -- lightskyblue
\t\t"hue 0.541 tint" [color = ".541 .1 1"]
\t\t"hue 0.583 tint" [color = ".583 .1 1"]
\t\t"hue 0.625 tint" [color = ".625 .1 1"]
\t\t"hue 0.666 tint" -- lightslateblue
\t\t"hue 0.666 tint" [color = ".666 .1 1"]
\t\t"hue 0.708 tint" [color = ".708 .1 1"]
\t\t"hue 0.750 tint" -- mediumpurple
\t\t"hue 0.750 tint" [color = ".750 .1 1"]
\t\t"hue 0.791 tint" [color = ".791 .1 1"]
\t\t"hue 0.833 tint" -- violet
\t\t"hue 0.833 tint" [color = ".833 .1 1"]
\t\t"hue 0.875 tint" [color = ".875 .1 1"]
\t\t"hue 0.916 tint" -- hotpink
\t\t"hue 0.916 tint" [color = ".916 .1 1"]
\t\t"hue 0.958 tint" [color = ".958 .1 1"]
\t\tedge [len = 2]
\t\t"hue 0 tint" -- "hue 0.041 tint" -- "hue 0.083 tint" -- "hue 0.125 tint" -- "hue 0.166 tint" -- "hue 0.208 tint"
\t\t"hue 0.208 tint" -- "hue 0.250 tint" -- "hue 0.291 tint" -- "hue 0.333 tint" -- "hue 0.375 tint" -- "hue 0.416 tint"
\t\t"hue 0.416 tint" -- "hue 0.458 tint" -- "hue 0.5 tint" --"hue 0.541 tint" -- "hue 0.583 tint" -- "hue 0.625 tint"
\t\t"hue 0.625 tint" -- "hue 0.666 tint" -- "hue 0.708 tint" -- "hue 0.750 tint" -- "hue 0.791 tint" -- "hue 0.833 tint"
\t\t"hue 0.833 tint" -- "hue 0.875 tint" -- "hue 0.916 tint" -- "hue 0.958 tint" -- "hue 0 tint"
\t}
\t// © 2022 Costa Shulyupin, licensed under EPL
}`,

};
