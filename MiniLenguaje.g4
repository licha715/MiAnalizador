grammar MiniLenguaje;

programa
    : PROGRAMA Identifier LBRACE instruccion* RBRACE EOF
    ;

instruccion
    : asignacion
    | excepcion
    | bloque
    | imprimir
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
    | String
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

Identifier : [a-zA-Z][a-zA-Z0-9_]*;
Number : [0-9]+ ('.' [0-9]+)?;
String : '"' .*? '"';

WS : [ \t\r\n]+ -> skip;