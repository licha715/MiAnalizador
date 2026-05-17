import antlr4 from 'antlr4';
import fs from 'fs';

import MiniLenguajeLexer from './generated/MiniLenguajeLexer.js';
import MiniLenguajeParser from './generated/MiniLenguajeParser.js';

const input = fs.readFileSync('input.txt', 'utf8');

console.log("\nCódigo fuente:\n");
console.log(input);

const chars = new antlr4.InputStream(input);
const lexer = new MiniLenguajeLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

tokens.fill();

console.log("\nTabla de Tokens:");
console.log("--------------------------------");

const parser = new MiniLenguajeParser(tokens);
tokens.tokens.forEach(token => {
    if (token.type !== -1) {
        console.log(
            `Lexema: ${token.text} -> Token: ${parser.symbolicNames[token.type]}`
        );
    }
});


parser.buildParseTrees = true;

const tree = parser.programa();

if (parser._syntaxErrors === 0) {
    console.log("\nEntrada válida.");
    console.log("\nÁrbol sintáctico:\n");
    console.log(tree.toStringTree(parser.ruleNames));
} else {
    console.log("\nSe encontraron errores sintácticos.");
}