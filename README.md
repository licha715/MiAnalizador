# Mini Analizador con ANTLR4 y JavaScript

## Autor

- Nombre: Castro Lisandro
- Legajo: 53317

---

# Descripción

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y JavaScript.

El lenguaje desarrollado permite:

- Declarar programas
- Realizar asignaciones
- Evaluar expresiones aritméticas
- Imprimir resultados
- Manejar excepciones mediante bloques `procesar` y `manejarError`

El proyecto:

- Genera tokens
- Construye el árbol sintáctico
- Detecta errores sintácticos
- Traduce el lenguaje a JavaScript
- Ejecuta automáticamente el código generado

---

# Tecnologías utilizadas

- ANTLR4
- JavaScript
- Node.js
- Git y GitHub

---

# Cómo ejecutar el proyecto

## 1. Instalar dependencias

```bash
npm install
```

---

## 2. Generar parser y lexer

```bash
java -jar antlr-4.9.3-complete.jar -Dlanguage=JavaScript -visitor -listener -o generated MiniLenguaje.g4
```

---

## 3. Ejecutar el analizador

```bash
npm start
```

---

# Estructura del proyecto

```txt
Mi_Analizador/
│
├── generated/
├── node_modules/
├── MiniLenguaje.g4
├── index.js
├── input.txt
├── package.json
└── README.md
```



# Funcionalidades implementadas

- Análisis léxico
- Análisis sintáctico
- Tabla de tokens
- Árbol sintáctico concreto
- Detección de errores
- Traducción a JavaScript
- Ejecución automática del código