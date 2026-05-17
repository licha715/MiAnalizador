// Generated from MiniLenguaje.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniLenguajeListener from './MiniLenguajeListener.js';
import MiniLenguajeVisitor from './MiniLenguajeVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013Q\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002\u0017\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003#\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0007",
    "\u00064\n\u0006\f\u0006\u000e\u00067\u000b\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0007\bD\n\b\f\b\u000e\bG\u000b\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tO\n\t\u0003\t\u0002\u0002",
    "\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0003\u0003\u0002\u0007",
    "\n\u0002P\u0002\u0012\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002",
    "\u0002\u0006$\u0003\u0002\u0002\u0002\b)\u0003\u0002\u0002\u0002\n1",
    "\u0003\u0002\u0002\u0002\f:\u0003\u0002\u0002\u0002\u000e@\u0003\u0002",
    "\u0002\u0002\u0010N\u0003\u0002\u0002\u0002\u0012\u0013\u0007\u0003",
    "\u0002\u0002\u0013\u0014\u0007\u0012\u0002\u0002\u0014\u0018\u0007\u000f",
    "\u0002\u0002\u0015\u0017\u0005\u0004\u0003\u0002\u0016\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001b\u0003\u0002",
    "\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0010",
    "\u0002\u0002\u001c\u001d\u0007\u0002\u0002\u0003\u001d\u0003\u0003\u0002",
    "\u0002\u0002\u001e#\u0005\u0006\u0004\u0002\u001f#\u0005\b\u0005\u0002",
    " #\u0005\f\u0007\u0002!#\u0005\n\u0006\u0002\"\u001e\u0003\u0002\u0002",
    "\u0002\"\u001f\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"",
    "!\u0003\u0002\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$%\u0007\u0012",
    "\u0002\u0002%&\u0007\u000b\u0002\u0002&\'\u0005\u000e\b\u0002\'(\u0007",
    "\f\u0002\u0002(\u0007\u0003\u0002\u0002\u0002)*\u0007\u0004\u0002\u0002",
    "*+\u0005\n\u0006\u0002+,\u0007\u0005\u0002\u0002,-\u0007\r\u0002\u0002",
    "-.\u0007\u0012\u0002\u0002./\u0007\u000e\u0002\u0002/0\u0005\n\u0006",
    "\u00020\t\u0003\u0002\u0002\u000215\u0007\u000f\u0002\u000224\u0005",
    "\u0004\u0003\u000232\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u0002",
    "53\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000268\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u000289\u0007\u0010\u0002\u00029\u000b\u0003",
    "\u0002\u0002\u0002:;\u0007\u0006\u0002\u0002;<\u0007\r\u0002\u0002<",
    "=\u0005\u000e\b\u0002=>\u0007\u000e\u0002\u0002>?\u0007\f\u0002\u0002",
    "?\r\u0003\u0002\u0002\u0002@E\u0005\u0010\t\u0002AB\t\u0002\u0002\u0002",
    "BD\u0005\u0010\t\u0002CA\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002",
    "\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002F\u000f\u0003",
    "\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002HO\u0007\u0011\u0002\u0002",
    "IO\u0007\u0012\u0002\u0002JK\u0007\r\u0002\u0002KL\u0005\u000e\b\u0002",
    "LM\u0007\u000e\u0002\u0002MO\u0003\u0002\u0002\u0002NH\u0003\u0002\u0002",
    "\u0002NI\u0003\u0002\u0002\u0002NJ\u0003\u0002\u0002\u0002O\u0011\u0003",
    "\u0002\u0002\u0002\u0007\u0018\"5EN"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MiniLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiniLenguaje.g4";
    static literalNames = [ null, "'programa'", "'procesar'", "'manejarError'", 
                            "'imprimir'", "'+'", "'-'", "'*'", "'/'", "'='", 
                            "';'", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "PROGRAMA", "PROCESAR", "MANEJARERROR", 
                             "IMPRIMIR", "PLUS", "MINUS", "MULT", "DIV", 
                             "ASSIGN", "SEMI", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "Number", "Identifier", "WS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "excepcion", 
                         "bloque", "imprimir", "expresion", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniLenguajeParser.ruleNames;
        this.literalNames = MiniLenguajeParser.literalNames;
        this.symbolicNames = MiniLenguajeParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniLenguajeParser.RULE_programa);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(MiniLenguajeParser.PROGRAMA);
	        this.state = 17;
	        this.match(MiniLenguajeParser.Identifier);
	        this.state = 18;
	        this.match(MiniLenguajeParser.LBRACE);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniLenguajeParser.PROCESAR) | (1 << MiniLenguajeParser.IMPRIMIR) | (1 << MiniLenguajeParser.LBRACE) | (1 << MiniLenguajeParser.Identifier))) !== 0)) {
	            this.state = 19;
	            this.instruccion();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(MiniLenguajeParser.RBRACE);
	        this.state = 26;
	        this.match(MiniLenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniLenguajeParser.RULE_instruccion);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MiniLenguajeParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.asignacion();
	            break;
	        case MiniLenguajeParser.PROCESAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.excepcion();
	            break;
	        case MiniLenguajeParser.IMPRIMIR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.imprimir();
	            break;
	        case MiniLenguajeParser.LBRACE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 31;
	            this.bloque();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniLenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(MiniLenguajeParser.Identifier);
	        this.state = 35;
	        this.match(MiniLenguajeParser.ASSIGN);
	        this.state = 36;
	        this.expresion();
	        this.state = 37;
	        this.match(MiniLenguajeParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniLenguajeParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(MiniLenguajeParser.PROCESAR);
	        this.state = 40;
	        this.bloque();
	        this.state = 41;
	        this.match(MiniLenguajeParser.MANEJARERROR);
	        this.state = 42;
	        this.match(MiniLenguajeParser.LPAREN);
	        this.state = 43;
	        this.match(MiniLenguajeParser.Identifier);
	        this.state = 44;
	        this.match(MiniLenguajeParser.RPAREN);
	        this.state = 45;
	        this.bloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniLenguajeParser.RULE_bloque);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(MiniLenguajeParser.LBRACE);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniLenguajeParser.PROCESAR) | (1 << MiniLenguajeParser.IMPRIMIR) | (1 << MiniLenguajeParser.LBRACE) | (1 << MiniLenguajeParser.Identifier))) !== 0)) {
	            this.state = 48;
	            this.instruccion();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(MiniLenguajeParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniLenguajeParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(MiniLenguajeParser.IMPRIMIR);
	        this.state = 57;
	        this.match(MiniLenguajeParser.LPAREN);
	        this.state = 58;
	        this.expresion();
	        this.state = 59;
	        this.match(MiniLenguajeParser.RPAREN);
	        this.state = 60;
	        this.match(MiniLenguajeParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniLenguajeParser.RULE_expresion);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.termino();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniLenguajeParser.PLUS) | (1 << MiniLenguajeParser.MINUS) | (1 << MiniLenguajeParser.MULT) | (1 << MiniLenguajeParser.DIV))) !== 0)) {
	            this.state = 63;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniLenguajeParser.PLUS) | (1 << MiniLenguajeParser.MINUS) | (1 << MiniLenguajeParser.MULT) | (1 << MiniLenguajeParser.DIV))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 64;
	            this.termino();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniLenguajeParser.RULE_termino);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MiniLenguajeParser.Number:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.match(MiniLenguajeParser.Number);
	            break;
	        case MiniLenguajeParser.Identifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(MiniLenguajeParser.Identifier);
	            break;
	        case MiniLenguajeParser.LPAREN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.match(MiniLenguajeParser.LPAREN);
	            this.state = 73;
	            this.expresion();
	            this.state = 74;
	            this.match(MiniLenguajeParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniLenguajeParser.EOF = antlr4.Token.EOF;
MiniLenguajeParser.PROGRAMA = 1;
MiniLenguajeParser.PROCESAR = 2;
MiniLenguajeParser.MANEJARERROR = 3;
MiniLenguajeParser.IMPRIMIR = 4;
MiniLenguajeParser.PLUS = 5;
MiniLenguajeParser.MINUS = 6;
MiniLenguajeParser.MULT = 7;
MiniLenguajeParser.DIV = 8;
MiniLenguajeParser.ASSIGN = 9;
MiniLenguajeParser.SEMI = 10;
MiniLenguajeParser.LPAREN = 11;
MiniLenguajeParser.RPAREN = 12;
MiniLenguajeParser.LBRACE = 13;
MiniLenguajeParser.RBRACE = 14;
MiniLenguajeParser.Number = 15;
MiniLenguajeParser.Identifier = 16;
MiniLenguajeParser.WS = 17;

MiniLenguajeParser.RULE_programa = 0;
MiniLenguajeParser.RULE_instruccion = 1;
MiniLenguajeParser.RULE_asignacion = 2;
MiniLenguajeParser.RULE_excepcion = 3;
MiniLenguajeParser.RULE_bloque = 4;
MiniLenguajeParser.RULE_imprimir = 5;
MiniLenguajeParser.RULE_expresion = 6;
MiniLenguajeParser.RULE_termino = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_programa;
    }

	PROGRAMA() {
	    return this.getToken(MiniLenguajeParser.PROGRAMA, 0);
	};

	Identifier() {
	    return this.getToken(MiniLenguajeParser.Identifier, 0);
	};

	LBRACE() {
	    return this.getToken(MiniLenguajeParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiniLenguajeParser.RBRACE, 0);
	};

	EOF() {
	    return this.getToken(MiniLenguajeParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_asignacion;
    }

	Identifier() {
	    return this.getToken(MiniLenguajeParser.Identifier, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniLenguajeParser.ASSIGN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SEMI() {
	    return this.getToken(MiniLenguajeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_excepcion;
    }

	PROCESAR() {
	    return this.getToken(MiniLenguajeParser.PROCESAR, 0);
	};

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	MANEJARERROR() {
	    return this.getToken(MiniLenguajeParser.MANEJARERROR, 0);
	};

	LPAREN() {
	    return this.getToken(MiniLenguajeParser.LPAREN, 0);
	};

	Identifier() {
	    return this.getToken(MiniLenguajeParser.Identifier, 0);
	};

	RPAREN() {
	    return this.getToken(MiniLenguajeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_bloque;
    }

	LBRACE() {
	    return this.getToken(MiniLenguajeParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiniLenguajeParser.RBRACE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(MiniLenguajeParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(MiniLenguajeParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniLenguajeParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(MiniLenguajeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniLenguajeParser.PLUS);
	    } else {
	        return this.getToken(MiniLenguajeParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniLenguajeParser.MINUS);
	    } else {
	        return this.getToken(MiniLenguajeParser.MINUS, i);
	    }
	};


	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniLenguajeParser.MULT);
	    } else {
	        return this.getToken(MiniLenguajeParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniLenguajeParser.DIV);
	    } else {
	        return this.getToken(MiniLenguajeParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLenguajeParser.RULE_termino;
    }

	Number() {
	    return this.getToken(MiniLenguajeParser.Number, 0);
	};

	Identifier() {
	    return this.getToken(MiniLenguajeParser.Identifier, 0);
	};

	LPAREN() {
	    return this.getToken(MiniLenguajeParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniLenguajeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLenguajeListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLenguajeVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniLenguajeParser.ProgramaContext = ProgramaContext; 
MiniLenguajeParser.InstruccionContext = InstruccionContext; 
MiniLenguajeParser.AsignacionContext = AsignacionContext; 
MiniLenguajeParser.ExcepcionContext = ExcepcionContext; 
MiniLenguajeParser.BloqueContext = BloqueContext; 
MiniLenguajeParser.ImprimirContext = ImprimirContext; 
MiniLenguajeParser.ExpresionContext = ExpresionContext; 
MiniLenguajeParser.TerminoContext = TerminoContext; 
