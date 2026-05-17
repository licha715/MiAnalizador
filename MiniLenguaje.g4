grammar MiniLenguaje;

programa
    : PROGRAMA Identifier LBRACE instruccion* RBRACE EOF
    ;

instruccion
    : asignacion
    | excepcion
    | imprimir
    | bloque
    ;

asignacion
    : Identifier ASSIGN expresion SEMI
    ;

excepcion
    : PROCESAR bloque MANEJARERROR LPAREN Identifier RPAREN bloque
    ;

bloque
    : LBRACE instruccion* RBRACE
    ;

imprimir
    : IMPRIMIR LPAREN expresion RPAREN SEMI
    ;

expresion
    : termino ((PLUS | MINUS | MULT | DIV) termino)*
    ;

termino
    : Number
    | Identifier
    | LPAREN expresion RPAREN
    ;

PROGRAMA : 'programa';
PROCESAR : 'procesar';
MANEJARERROR : 'manejarError';
IMPRIMIR : 'imprimir';

PLUS : '+';
MINUS : '-';
MULT : '*';
DIV : '/';

ASSIGN : '=';
SEMI : ';';

LPAREN : '(';
RPAREN : ')';

LBRACE : '{';
RBRACE : '}';

Number : [0-9]+;
Identifier : [a-zA-Z_][a-zA-Z0-9_]*;

WS : [ \t\r\n]+ -> skip;