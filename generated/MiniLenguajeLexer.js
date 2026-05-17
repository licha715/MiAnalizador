// Generated from MiniLenguaje.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0013t\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0006\u0010c\n\u0010\r\u0010\u000e\u0010d\u0003",
    "\u0011\u0003\u0011\u0007\u0011i\n\u0011\f\u0011\u000e\u0011l\u000b\u0011",
    "\u0003\u0012\u0006\u0012o\n\u0012\r\u0012\u000e\u0012p\u0003\u0012\u0003",
    "\u0012\u0002\u0002\u0013\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013\u0003\u0002\u0006",
    "\u0003\u00022;\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u0002v\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0003%\u0003",
    "\u0002\u0002\u0002\u0005.\u0003\u0002\u0002\u0002\u00077\u0003\u0002",
    "\u0002\u0002\tD\u0003\u0002\u0002\u0002\u000bM\u0003\u0002\u0002\u0002",
    "\rO\u0003\u0002\u0002\u0002\u000fQ\u0003\u0002\u0002\u0002\u0011S\u0003",
    "\u0002\u0002\u0002\u0013U\u0003\u0002\u0002\u0002\u0015W\u0003\u0002",
    "\u0002\u0002\u0017Y\u0003\u0002\u0002\u0002\u0019[\u0003\u0002\u0002",
    "\u0002\u001b]\u0003\u0002\u0002\u0002\u001d_\u0003\u0002\u0002\u0002",
    "\u001fb\u0003\u0002\u0002\u0002!f\u0003\u0002\u0002\u0002#n\u0003\u0002",
    "\u0002\u0002%&\u0007r\u0002\u0002&\'\u0007t\u0002\u0002\'(\u0007q\u0002",
    "\u0002()\u0007i\u0002\u0002)*\u0007t\u0002\u0002*+\u0007c\u0002\u0002",
    "+,\u0007o\u0002\u0002,-\u0007c\u0002\u0002-\u0004\u0003\u0002\u0002",
    "\u0002./\u0007r\u0002\u0002/0\u0007t\u0002\u000201\u0007q\u0002\u0002",
    "12\u0007e\u0002\u000223\u0007g\u0002\u000234\u0007u\u0002\u000245\u0007",
    "c\u0002\u000256\u0007t\u0002\u00026\u0006\u0003\u0002\u0002\u000278",
    "\u0007o\u0002\u000289\u0007c\u0002\u00029:\u0007p\u0002\u0002:;\u0007",
    "g\u0002\u0002;<\u0007l\u0002\u0002<=\u0007c\u0002\u0002=>\u0007t\u0002",
    "\u0002>?\u0007G\u0002\u0002?@\u0007t\u0002\u0002@A\u0007t\u0002\u0002",
    "AB\u0007q\u0002\u0002BC\u0007t\u0002\u0002C\b\u0003\u0002\u0002\u0002",
    "DE\u0007k\u0002\u0002EF\u0007o\u0002\u0002FG\u0007r\u0002\u0002GH\u0007",
    "t\u0002\u0002HI\u0007k\u0002\u0002IJ\u0007o\u0002\u0002JK\u0007k\u0002",
    "\u0002KL\u0007t\u0002\u0002L\n\u0003\u0002\u0002\u0002MN\u0007-\u0002",
    "\u0002N\f\u0003\u0002\u0002\u0002OP\u0007/\u0002\u0002P\u000e\u0003",
    "\u0002\u0002\u0002QR\u0007,\u0002\u0002R\u0010\u0003\u0002\u0002\u0002",
    "ST\u00071\u0002\u0002T\u0012\u0003\u0002\u0002\u0002UV\u0007?\u0002",
    "\u0002V\u0014\u0003\u0002\u0002\u0002WX\u0007=\u0002\u0002X\u0016\u0003",
    "\u0002\u0002\u0002YZ\u0007*\u0002\u0002Z\u0018\u0003\u0002\u0002\u0002",
    "[\\\u0007+\u0002\u0002\\\u001a\u0003\u0002\u0002\u0002]^\u0007}\u0002",
    "\u0002^\u001c\u0003\u0002\u0002\u0002_`\u0007\u007f\u0002\u0002`\u001e",
    "\u0003\u0002\u0002\u0002ac\t\u0002\u0002\u0002ba\u0003\u0002\u0002\u0002",
    "cd\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002e \u0003\u0002\u0002\u0002fj\t\u0003\u0002\u0002gi\t\u0004\u0002",
    "\u0002hg\u0003\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002k\"\u0003\u0002\u0002\u0002lj",
    "\u0003\u0002\u0002\u0002mo\t\u0005\u0002\u0002nm\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002rs\b\u0012\u0002\u0002s$\u0003\u0002",
    "\u0002\u0002\u0006\u0002djp\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiniLenguajeLexer extends antlr4.Lexer {

    static grammarFileName = "MiniLenguaje.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'programa'", "'procesar'", "'manejarError'", 
                         "'imprimir'", "'+'", "'-'", "'*'", "'/'", "'='", 
                         "';'", "'('", "')'", "'{'", "'}'" ];
	static symbolicNames = [ null, "PROGRAMA", "PROCESAR", "MANEJARERROR", 
                          "IMPRIMIR", "PLUS", "MINUS", "MULT", "DIV", "ASSIGN", 
                          "SEMI", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                          "Number", "Identifier", "WS" ];
	static ruleNames = [ "PROGRAMA", "PROCESAR", "MANEJARERROR", "IMPRIMIR", 
                      "PLUS", "MINUS", "MULT", "DIV", "ASSIGN", "SEMI", 
                      "LPAREN", "RPAREN", "LBRACE", "RBRACE", "Number", 
                      "Identifier", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

MiniLenguajeLexer.EOF = antlr4.Token.EOF;
MiniLenguajeLexer.PROGRAMA = 1;
MiniLenguajeLexer.PROCESAR = 2;
MiniLenguajeLexer.MANEJARERROR = 3;
MiniLenguajeLexer.IMPRIMIR = 4;
MiniLenguajeLexer.PLUS = 5;
MiniLenguajeLexer.MINUS = 6;
MiniLenguajeLexer.MULT = 7;
MiniLenguajeLexer.DIV = 8;
MiniLenguajeLexer.ASSIGN = 9;
MiniLenguajeLexer.SEMI = 10;
MiniLenguajeLexer.LPAREN = 11;
MiniLenguajeLexer.RPAREN = 12;
MiniLenguajeLexer.LBRACE = 13;
MiniLenguajeLexer.RBRACE = 14;
MiniLenguajeLexer.Number = 15;
MiniLenguajeLexer.Identifier = 16;
MiniLenguajeLexer.WS = 17;



