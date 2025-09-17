const questions = [
  {
    question: "What is Python?",
    options: [
      "A snake species",
      "A high-level programming language",
      "A type of operating system",
      "A markup language"
    ],
    answer: 1
  },
  {
    question: "Who created Python?",
    options: [
      "James Gosling",
      "Guido van Rossum",
      "Dennis Ritchie",
      "Bjarne Stroustrup"
    ],
    answer: 1
  },
  {
    question: "Which year was Python first released?",
    options: [
      "1985",
      "1991",
      "2000",
      "1995"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a valid identifier?",
    options: [
      "2name",
      "_value",
      "for",
      "my-name"
    ],
    answer: 1
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: [
      "func",
      "def",
      "function",
      "lambda"
    ],
    answer: 1
  },
  {
    question: "What will keyword.iskeyword('if') return?",
    options: [
      "True",
      "False",
      "Error",
      "None"
    ],
    answer: 0
  },
  {
    question: "Identifiers in Python are ______.",
    options: [
      "Case-sensitive",
      "Case-insensitive",
      "Always uppercase",
      "Always lowercase"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a Python keyword?",
    options: [
      "while",
      "lambda",
      "else",
      "define"
    ],
    answer: 3
  }
  // 👉 Continue adding until 150–200 questions
];
// Continue adding after Q8
questions.push(
  {
    question: "Which of the following is a valid variable name in Python?",
    options: ["first-name", "first_name", "first name", "1stname"],
    answer: 1
  },
  {
    question: "Which function is used to display output in Python?",
    options: ["print()", "echo()", "display()", "output()"],
    answer: 0
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/* */", "<!-- -->"],
    answer: 1
  },
  {
    question: "What will be the output of: print(2 ** 3)?",
    options: ["6", "8", "9", "Error"],
    answer: 1
  },
  {
    question: "Identifiers in Python can start with ______.",
    options: ["a letter or underscore", "a number", "a symbol", "a digit only"],
    answer: 0
  },
  {
    question: "Which of these is NOT a valid identifier?",
    options: ["_value", "value2", "class", "val_ue"],
    answer: 2
  },
  {
    question: "Python is an example of ______ language.",
    options: ["compiled", "interpreted", "assembly", "machine"],
    answer: 1
  },
  {
    question: "What is the correct file extension for Python files?",
    options: [".pt", ".pyt", ".py", ".python"],
    answer: 2
  },
  {
    question: "Which function returns the data type of a variable?",
    options: ["typeof()", "datatype()", "type()", "class()"],
    answer: 2
  },
  {
    question: "What will be the output of: print(10 // 3)?",
    options: ["3.33", "3", "3.0", "Error"],
    answer: 1
  },
  {
    question: "Which one is a reserved keyword in Python?",
    options: ["number", "while", "integer", "switch"],
    answer: 1
  },
  {
    question: "Can identifiers contain spaces?",
    options: ["Yes", "No"],
    answer: 1
  },
  {
    question: "What will keyword.iskeyword('True') return?",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Which function is used to take input from the user?",
    options: ["get()", "input()", "scan()", "read()"],
    answer: 1
  },
  {
    question: "Python variables are ______ typed.",
    options: ["statically", "dynamically"],
    answer: 1
  },
  {
    question: "Which operator is used for exponentiation?",
    options: ["^", "**", "pow", "exp"],
    answer: 1
  },
  {
    question: "Which one is the assignment operator?",
    options: ["=", "==", "===", "!="],
    answer: 0
  },
  {
    question: "What will be the output of: print(type(3.5))?",
    options: ["<class 'float'>", "<class 'int'>", "<class 'double'>", "Error"],
    answer: 0
  },
  {
    question: "Is 'def' a keyword in Python?",
    options: ["Yes", "No"],
    answer: 0
  },
  {
    question: "What is the maximum length of an identifier in Python?",
    options: ["31 chars", "63 chars", "No fixed limit", "128 chars"],
    answer: 2
  },
  {
    question: "Which function gives the list of Python keywords?",
    options: ["help()", "keyword.kwlist", "dir()", "keywords()"],
    answer: 1
  },
  {
    question: "Which of these is a valid identifier?",
    options: ["my var", "3var", "_myVar", "for"],
    answer: 2
  },
  {
    question: "What will be the output of: print(5 % 2)?",
    options: ["2.5", "1", "0", "Error"],
    answer: 1
  },
  {
    question: "Identifiers are case sensitive in Python. True or False?",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What will be the output of: print('Hello' + 'World')?",
    options: ["HelloWorld", "Hello World", "Error", "None"],
    answer: 0
  },
  {
    question: "Which data type is returned by input() function in Python 3?",
    options: ["int", "str", "float", "depends on input"],
    answer: 1
  },
  {
    question: "Can an identifier start with a digit?",
    options: ["Yes", "No"],
    answer: 1
  },
  {
    question: "Which keyword is used for defining a class?",
    options: ["class", "Class", "struct", "defclass"],
    answer: 0
  },
  {
    question: "Which function is used to convert string to integer?",
    options: ["float()", "str()", "int()", "chr()"],
    answer: 2
  },
  {
    question: "What will be the output of: print(bool(0))?",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Identifiers can only contain letters, digits, and ______.",
    options: ["@", "_", "-", "#"],
    answer: 1
  },
  {
    question: "Which operator is used for floor division?",
    options: ["/", "//", "%", "÷"],
    answer: 1
  },
  {
    question: "What is the output of: print('A' * 3)?",
    options: ["AAA", "Error", "A3", "None"],
    answer: 0
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: ["stop", "break", "exit", "end"],
    answer: 1
  },
  {
    question: "Python keywords are written in ______.",
    options: ["UPPERCASE", "camelCase", "lowercase", "any case"],
    answer: 2
  },
  {
    question: "What is the output of: print(10 == 10)?",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the correct way to declare multiple variables?",
    options: [
      "x = 10, y = 20, z = 30",
      "x = y = z = 10",
      "Both of the above",
      "None of the above"
    ],
    answer: 2
  },
  {
    question: "What will keyword.iskeyword('print') return?",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "What is the output of: print(3 != 5)?",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Identifiers can include Unicode characters. True or False?",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Which one is not a core data type in Python?",
    options: ["List", "Tuple", "Class", "Dictionary"],
    answer: 2
  },
  {
    question: "What is the result of: 5 > 2 and 3 < 1?",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Which function is used to get length of a string?",
    options: ["size()", "len()", "length()", "count()"],
    answer: 1
  },
  {
    question: "What will be the output of: print(type([]))?",
    options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "Error"],
    answer: 0
  },
  {
    question: "Which one is NOT a valid operator in Python?",
    options: ["+", "-", "++", "*"],
    answer: 2
  },
  {
    question: "What will be the output of: print(10/2)?",
    options: ["5", "5.0", "Error", "None"],
    answer: 1
  },
  {
    question: "Identifiers can be of unlimited length. True or False?",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Which function converts a number to string?",
    options: ["str()", "chr()", "ord()", "repr()"],
    answer: 0
  },
  {
    question: "Which is the correct way to check Python version?",
    options: [
      "python --version",
      "py --version",
      "import sys; print(sys.version)",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Identifiers should not be the same as ______.",
    options: ["variables", "functions", "keywords", "modules"],
    answer: 2
  },
  {
    question: "What will be the output of: print('5' + '5')?",
    options: ["10", "55", "Error", "None"],
    answer: 1
  },
  {
    question: "Which is correct about Python?",
    options: [
      "Python is case-sensitive",
      "Python is case-insensitive",
      "Python does not allow identifiers",
      "None"
    ],
    answer: 0
  }
);

questions.push(
  {
    question: "Which of the following is a dynamically typed language?",
    options: ["C", "C++", "Python", "Java"],
    answer: 2
  },
  {
    question: "What is the output of: print(2*3+4)?",
    options: ["14", "10", "12", "24"],
    answer: 1
  },
  {
    question: "Which operator is used to check equality?",
    options: ["=", "==", "===", "!="],
    answer: 1
  },
  {
    question: "Which operator is used to check identity?",
    options: ["is", "==", "in", "==="],
    answer: 0
  },
  {
    question: "Which operator is used for membership testing?",
    options: ["in", "is", "==", "has"],
    answer: 0
  },
  {
    question: "What is the output of: print(3 < 2 or 5 > 2)?",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What is the output of: print(not True)?",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Which of these is not a valid assignment?",
    options: ["x = 5", "y = x = 2", "1x = 10", "z=3"],
    answer: 2
  },
  {
    question: "What is the output of: print(10 % 4)?",
    options: ["2", "2.5", "0", "Error"],
    answer: 0
  },
  {
    question: "Which operator is used to perform bitwise AND?",
    options: ["&", "&&", "and", "AND"],
    answer: 0
  },
  {
    question: "Which operator is used to perform bitwise OR?",
    options: ["|", "||", "or", "OR"],
    answer: 0
  },
  {
    question: "Which operator is used to perform bitwise XOR?",
    options: ["^", "**", "xor", "XOR"],
    answer: 0
  },
  {
    question: "What is the output of: print(5 & 3)?",
    options: ["1", "2", "3", "5"],
    answer: 0
  },
  {
    question: "What is the output of: print(5 | 3)?",
    options: ["7", "6", "5", "8"],
    answer: 0
  },
  {
    question: "What is the output of: print(5 ^ 3)?",
    options: ["6", "7", "2", "8"],
    answer: 0
  },
  {
    question: "What is the output of: print(~5)?",
    options: ["-6", "-5", "4", "Error"],
    answer: 0
  },
  {
    question: "Identifiers are also known as ______.",
    options: ["names", "keywords", "constants", "datatypes"],
    answer: 0
  },
  {
    question: "Which function converts an integer to float?",
    options: ["float()", "int()", "str()", "complex()"],
    answer: 0
  },
  {
    question: "What will be the output of: print(int(3.9))?",
    options: ["3.9", "3", "4", "Error"],
    answer: 1
  },
  {
    question: "What will be the output of: print(float(3))?",
    options: ["3", "3.0", "Error", "None"],
    answer: 1
  },
  {
    question: "Which of the following is mutable?",
    options: ["Tuple", "List", "String", "Int"],
    answer: 1
  },
  {
    question: "Which of the following is immutable?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    answer: 2
  },
  {
    question: "Which operator is used for string concatenation?",
    options: ["&", "+", ".", "concat"],
    answer: 1
  },
  {
    question: "Which operator is used to repeat strings?",
    options: ["*", "+", "^", "&"],
    answer: 0
  },
  {
    question: "What is the output of: print('hi' * 2)?",
    options: ["hi2", "hihi", "hi hi", "Error"],
    answer: 1
  },
  {
    question: "Which data type is used to represent True/False values?",
    options: ["int", "str", "bool", "float"],
    answer: 2
  },
  {
    question: "What is the output of: print(type(True))?",
    options: ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "Error"],
    answer: 0
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&&", "and", "&", "AND"],
    answer: 1
  },
  {
    question: "Which operator is used for logical OR?",
    options: ["||", "or", "|", "OR"],
    answer: 1
  },
  {
    question: "Python was developed by ______.",
    options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: 1
  },
  {
    question: "Python was first released in which year?",
    options: ["1989", "1991", "1995", "2000"],
    answer: 1
  },
  {
    question: "Identifiers are also used to name ______.",
    options: ["variables", "functions", "classes", "All of the above"],
    answer: 3
  },
  {
    question: "Which is a valid identifier?",
    options: ["_1value", "value$", "for", "val ue"],
    answer: 0
  },
  {
    question: "Python code is executed ______.",
    options: ["line by line", "all at once", "in machine code", "after compilation"],
    answer: 0
  },
  {
    question: "Which of the following is not a data type?",
    options: ["int", "float", "bool", "real"],
    answer: 3
  },
  {
    question: "Which of these is a complex number in Python?",
    options: ["5+3j", "5+3i", "complex(5)", "5+i3"],
    answer: 0
  },
  {
    question: "What will be the output of: print(type(3+4j))?",
    options: ["<class 'complex'>", "<class 'int'>", "<class 'float'>", "Error"],
    answer: 0
  },
  {
    question: "What is the default value of uninitialized variables in Python?",
    options: ["0", "None", "Undefined", "Error"],
    answer: 1
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["def", "func", "function", "define"],
    answer: 0
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["break", "return", "yield", "exit"],
    answer: 1
  },
  {
    question: "Which keyword is used to create a loop?",
    options: ["loop", "for", "iterate", "repeat"],
    answer: 1
  },
  {
    question: "What will be the output of: print(len('Python'))?",
    options: ["6", "7", "5", "Error"],
    answer: 0
  },
  {
    question: "Which function converts a character to its ASCII value?",
    options: ["ord()", "chr()", "ascii()", "ordval()"],
    answer: 0
  },
  {
    question: "Which function converts an ASCII value to character?",
    options: ["ord()", "chr()", "ascii()", "ordval()"],
    answer: 1
  },
  {
    question: "What is the output of: print(ord('A'))?",
    options: ["65", "97", "66", "Error"],
    answer: 0
  },
  {
    question: "What is the output of: print(chr(97))?",
    options: ["a", "A", "z", "Error"],
    answer: 0
  },
  {
    question: "Which of the following are keywords in Python?",
    options: ["try", "catch", "except", "Both try and except"],
    answer: 3
  },
  {
    question: "Which of the following can be an identifier?",
    options: ["lambda", "_lambda", "def", "True"],
    answer: 1
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "except", "finally", "All of the above"],
    answer: 3
  },
  {
    question: "Which keyword is used to define a block of code in loops?",
    options: ["do", "end", ":", "loop"],
    answer: 2
  },
  {
    question: "Python uses ______ indentation to define code blocks.",
    options: ["Braces {}", "Semicolons", "Indentation", "Parentheses"],
    answer: 2
  }
);

// Add after your existing questions
const moreQuestions = [
  // Q51 - Q100
  {
    question: "Which of the following is NOT a Python data type?",
    options: ["int", "float", "stringify", "bool"],
    answer: "stringify"
  },
  {
    question: "Identifiers in Python are:",
    options: ["Names for variables, functions, classes", "Only for variables", "Only for functions", "Only for classes"],
    answer: "Names for variables, functions, classes"
  },
  {
    question: "Which symbol is allowed in identifiers?",
    options: ["@", "#", "_", "$"],
    answer: "_"
  },
  {
    question: "What is the output of: type(3+4j)?",
    options: ["<class 'float'>", "<class 'int'>", "<class 'complex'>", "<class 'str'>"],
    answer: "<class 'complex'>"
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "def", "function", "lambda"],
    answer: "def"
  },
  {
    question: "Python is:",
    options: ["Low-level language", "High-level language", "Machine language", "Assembly language"],
    answer: "High-level language"
  },
  {
    question: "Which of the following are relational operators?",
    options: ["==, !=, >, <", "+, -, *, /", "and, or, not", "&, |, ^"],
    answer: "==, !=, >, <"
  },
  {
    question: "What does keyword.iskeyword('if') return?",
    options: ["True", "False", "None", "Error"],
    answer: "True"
  },
  {
    question: "Which of the following is a valid identifier?",
    options: ["9value", "value_9", "value-9", "value 9"],
    answer: "value_9"
  },
  {
    question: "Python code is executed by:",
    options: ["Compiler only", "Interpreter", "Assembler", "Both compiler and interpreter"],
    answer: "Interpreter"
  },
  {
    question: "What is the output: bool(0)?",
    options: ["True", "False", "0", "None"],
    answer: "False"
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "exp", "pow"],
    answer: "**"
  },
  {
    question: "The ‘is’ operator checks:",
    options: ["Equality of values", "Identity of objects", "Membership", "Assignment"],
    answer: "Identity of objects"
  },
  {
    question: "Which of the following is NOT a Python keyword?",
    options: ["return", "print", "global", "while"],
    answer: "print"
  },
  {
    question: "Output of: 5 // 2?",
    options: ["2.5", "3", "2", "Error"],
    answer: "2"
  },
  {
    question: "Which function gives the length of a string?",
    options: ["len()", "length()", "count()", "strlen()"],
    answer: "len()"
  },
  {
    question: "Which data type stores True/False?",
    options: ["int", "str", "bool", "float"],
    answer: "bool"
  },
  {
    question: "Which method converts a string to lowercase?",
    options: ["lowercase()", "toLower()", "lower()", "down()"],
    answer: "lower()"
  },
  {
    question: "What is the output: '5' + '6'?",
    options: ["11", "'56'", "56", "Error"],
    answer: "'56'"
  },
  {
    question: "Python identifiers are case sensitive?",
    options: ["Yes", "No", "Sometimes", "Depends on OS"],
    answer: "Yes"
  },
  {
    question: "Which of the following is a membership operator?",
    options: ["is", "==", "in", "!="],
    answer: "in"
  },
  {
    question: "Which operator is used for modulus (remainder)?",
    options: ["//", "%", "/", "^"],
    answer: "%"
  },
  {
    question: "Which of the following variable names is valid?",
    options: ["my var", "my-var", "my_var", "2var"],
    answer: "my_var"
  },
  {
    question: "What is the default value of an uninitialized variable in Python?",
    options: ["0", "None", "False", "Error"],
    answer: "Error"
  },
  {
    question: "Which function returns the type of an object?",
    options: ["datatype()", "typeof()", "type()", "class()"],
    answer: "type()"
  },
  {
    question: "What is the output: bool(1)?",
    options: ["True", "False", "1", "None"],
    answer: "True"
  },
  {
    question: "Which of these is a correct assignment?",
    options: ["int a = 5", "a = 5", "var a = 5", "let a = 5"],
    answer: "a = 5"
  },
  {
    question: "Python comments start with:",
    options: ["//", "#", "/*", "--"],
    answer: "#"
  },
  {
    question: "Which keyword is used to define a class?",
    options: ["class", "object", "defclass", "struct"],
    answer: "class"
  },
  {
    question: "Python uses which type of memory management?",
    options: ["Manual", "Garbage Collection", "Assembly-based", "Pointer arithmetic"],
    answer: "Garbage Collection"
  },
  {
    question: "Which function is used to take input from user?",
    options: ["scan()", "cin>>", "input()", "read()"],
    answer: "input()"
  },
  {
    question: "What is the result of: 10 % 3?",
    options: ["3", "1", "0", "10"],
    answer: "1"
  },
  {
    question: "Which operator is used for floor division?",
    options: ["/", "//", "%", "div"],
    answer: "//"
  },
  {
    question: "Python was developed by:",
    options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"],
    answer: "Guido van Rossum"
  },
  {
    question: "Which is valid: 'Hello' * 3?",
    options: ["HelloHelloHello", "Error", "3Hello", "None"],
    answer: "HelloHelloHello"
  },
  {
    question: "Which function converts string to integer?",
    options: ["str()", "int()", "float()", "eval()"],
    answer: "int()"
  },
  {
    question: "Which operator checks equality?",
    options: ["=", "==", "===", "is"],
    answer: "=="
  },
  {
    question: "What is a variable?",
    options: ["A reserved word", "A named memory location to store data", "A keyword", "An operator"],
    answer: "A named memory location to store data"
  },
  {
    question: "Which is a valid float number?",
    options: ["1.0", "2", "True", "hello"],
    answer: "1.0"
  },
  {
    question: "Identifiers cannot be:",
    options: ["Case-sensitive", "Keywords", "Alphanumeric", "Underscore-prefixed"],
    answer: "Keywords"
  },
  {
    question: "What is the output of: 2 ** 3?",
    options: ["5", "6", "8", "9"],
    answer: "8"
  },
  {
    question: "What is Python primarily used for?",
    options: ["System drivers", "Web, Data, AI, Automation", "Only games", "Only hardware"],
    answer: "Web, Data, AI, Automation"
  },
  {
    question: "Which of the following is a logical operator?",
    options: ["and", "or", "not", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which function gives absolute value?",
    options: ["abs()", "fabs()", "absolute()", "math.abs()"],
    answer: "abs()"
  },
  {
    question: "Which assignment operator adds and assigns?",
    options: ["+=", "=+", "++", "+=="],
    answer: "+="
  },
  {
    question: "What is the default return value of a function without return?",
    options: ["0", "None", "False", "Error"],
    answer: "None"
  },
  {
    question: "Which method removes whitespace from string ends?",
    options: ["strip()", "trim()", "remove()", "cut()"],
    answer: "strip()"
  },
  {
    question: "Which is a valid complex number in Python?",
    options: ["4+3j", "4+3i", "complex(4,3)", "Both A and C"],
    answer: "Both A and C"
  },
  {
    question: "Identifiers must begin with:",
    options: ["Digit", "Letter or _", "Special symbol", "None"],
    answer: "Letter or _"
  },
  {
    question: "Which operator is NOT supported in Python?",
    options: ["++", "--", "?:", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output of: not True?",
    options: ["True", "False", "None", "Error"],
    answer: "False"
  }
];

questions.push(...moreQuestions);

const moreQuestions2 = [
  // Q101 - Q150
  {
    question: "What is the output of: 10 == 10?",
    options: ["True", "False", "10", "None"],
    answer: "True"
  },
  {
    question: "Which of the following is a mutable datatype in Python?",
    options: ["list", "tuple", "str", "int"],
    answer: "list"
  },
  {
    question: "What is the output: len('Python')?",
    options: ["5", "6", "7", "Error"],
    answer: "6"
  },
  {
    question: "Which operator is used for string concatenation?",
    options: ["&", "+", "*", "."],
    answer: "+"
  },
  {
    question: "Python source code is converted into:",
    options: ["Binary machine code", "Bytecode", "Assembly", "C code"],
    answer: "Bytecode"
  },
  {
    question: "Identifiers in Python cannot:",
    options: ["Start with an underscore", "Contain digits after letters", "Be a keyword", "Contain letters"],
    answer: "Be a keyword"
  },
  {
    question: "What is the output: 7 % 2?",
    options: ["1", "3", "5", "Error"],
    answer: "1"
  },
  {
    question: "Which of the following is NOT a comparison operator?",
    options: ["==", "!=", "><", "<="],
    answer: "><"
  },
  {
    question: "Python keywords are written in:",
    options: ["Uppercase only", "Lowercase only", "Case-sensitive", "CamelCase"],
    answer: "Case-sensitive"
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "and", "AND"],
    answer: "and"
  },
  {
    question: "Output of: 'a' * 3?",
    options: ["aaa", "a3", "Error", "None"],
    answer: "aaa"
  },
  {
    question: "Which operator checks membership?",
    options: ["is", "in", "==", "!="],
    answer: "in"
  },
  {
    question: "Which of these is a Python built-in function?",
    options: ["input()", "echo()", "scanf()", "printline()"],
    answer: "input()"
  },
  {
    question: "What is the output: type(True)?",
    options: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "<class 'NoneType'>"],
    answer: "<class 'bool'>"
  },
  {
    question: "Python supports which programming paradigm?",
    options: ["Procedural", "Object-oriented", "Functional", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which is a correct way to declare a variable?",
    options: ["let a = 5", "int a = 5", "a = 5", "declare a = 5"],
    answer: "a = 5"
  },
  {
    question: "What does the id() function return?",
    options: ["Value of a variable", "Data type of a variable", "Memory address of an object", "Size of an object"],
    answer: "Memory address of an object"
  },
  {
    question: "Which operator is used to compare identity?",
    options: ["is", "==", "in", "="],
    answer: "is"
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/* */", "--"],
    answer: "#"
  },
  {
    question: "What is the output of: 2 != 3?",
    options: ["True", "False", "Error", "None"],
    answer: "True"
  },
  {
    question: "Python variables are:",
    options: ["Statically typed", "Dynamically typed", "Strongly typed only", "Weakly typed only"],
    answer: "Dynamically typed"
  },
  {
    question: "Which operator returns quotient without decimal?",
    options: ["/", "//", "%", "div()"],
    answer: "//"
  },
  {
    question: "What is the output: bool('')?",
    options: ["True", "False", "None", "Error"],
    answer: "False"
  },
  {
    question: "Which function finds the maximum value?",
    options: ["max()", "maximum()", "high()", "largest()"],
    answer: "max()"
  },
  {
    question: "Which operator is overloaded in Python for string repetition?",
    options: ["+", "*", "&", "%"],
    answer: "*"
  },
  {
    question: "Which is NOT a valid identifier?",
    options: ["_value", "value123", "Value", "value-123"],
    answer: "value-123"
  },
  {
    question: "What is the result of: type(5.0)?",
    options: ["<class 'float'>", "<class 'int'>", "<class 'complex'>", "<class 'decimal'>"],
    answer: "<class 'float'>"
  },
  {
    question: "Which assignment operator multiplies and assigns?",
    options: ["*=", "x=", "mul=", "**="],
    answer: "*="
  },
  {
    question: "What is the output: not False?",
    options: ["True", "False", "None", "Error"],
    answer: "True"
  },
  {
    question: "Which function is used to convert a number into a string?",
    options: ["str()", "int()", "repr()", "Both A and C"],
    answer: "Both A and C"
  },
  {
    question: "What is the default type of division in Python 3 (5/2)?",
    options: ["Integer division", "Float division", "Error", "None"],
    answer: "Float division"
  },
  {
    question: "Which of the following are valid Boolean values?",
    options: ["True and False", "Yes and No", "0 and 1", "T and F"],
    answer: "True and False"
  },
  {
    question: "Which operator is used to assign values?",
    options: ["=", "==", "===", "->"],
    answer: "="
  },
  {
    question: "Which function rounds a number?",
    options: ["round()", "ceil()", "floor()", "int()"],
    answer: "round()"
  },
  {
    question: "Which of the following is immutable?",
    options: ["list", "set", "tuple", "dict"],
    answer: "tuple"
  },
  {
    question: "What is the output: 5 > 3 and 2 < 1?",
    options: ["True", "False", "None", "Error"],
    answer: "False"
  },
  {
    question: "What is Python’s file extension?",
    options: [".py", ".p", ".python", ".txt"],
    answer: ".py"
  },
  {
    question: "What does len([]) return?",
    options: ["0", "1", "Error", "None"],
    answer: "0"
  },
  {
    question: "Which operator checks inequality?",
    options: ["!=", "==", "=", "is"],
    answer: "!="
  },
  {
    question: "Which of the following is a valid complex number?",
    options: ["3+4j", "3+4i", "3+j4", "complex[3,4]"],
    answer: "3+4j"
  },
  {
    question: "What is the result of 4 ** 0?",
    options: ["0", "1", "4", "Error"],
    answer: "1"
  },
  {
    question: "Which function gives minimum value?",
    options: ["low()", "min()", "minimum()", "smallest()"],
    answer: "min()"
  },
  {
    question: "What is the output of: 3 == 3.0?",
    options: ["True", "False", "Error", "None"],
    answer: "True"
  },
  {
    question: "Which operator is right-associative?",
    options: ["=", "**", "+", "and"],
    answer: "**"
  },
  {
    question: "Which of the following cannot be an identifier?",
    options: ["_temp", "myVar", "for", "value1"],
    answer: "for"
  },
  {
    question: "What is the size of True + True in Python?",
    options: ["Error", "2", "1", "TrueTrue"],
    answer: "2"
  },
  {
    question: "Which operator is overloaded for string addition?",
    options: ["+", "*", "concat()", "&"],
    answer: "+"
  },
  {
    question: "What is the output of: bool([])?",
    options: ["True", "False", "None", "Error"],
    answer: "False"
  },
  {
    question: "Which operator has highest precedence?",
    options: ["()", "**", "*", "+"],
    answer: "()"
  },
  {
    question: "Which keyword defines a block of code?",
    options: ["if", "else", "def", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following are valid identifier names?",
    options: ["_abc", "abc123", "ABC", "All of the above"],
    answer: "All of the above"
  }
];

questions.push(...moreQuestions2);

// Add these at the end of your existing questions array
questions.push(
  // --- Strings ---
  {
    question: "What is the output of 'hello'.upper()?",
    options: ["HELLO", "hello", "Hello", "Error"],
    answer: "HELLO"
  },
  {
    question: "Which operator is used to concatenate two strings?",
    options: ["+", "&", "*", "%"],
    answer: "+"
  },
  {
    question: "What is the output of len('Python')?",
    options: ["5", "6", "7", "Error"],
    answer: "6"
  },
  {
    question: "Which method removes whitespace from both ends of a string?",
    options: ["trim()", "strip()", "split()", "rstrip()"],
    answer: "strip()"
  },

  // --- Lists & Tuples ---
  {
    question: "Which of these creates a list?",
    options: ["[]", "{}", "()", "<>"],
    answer: "[]"
  },
  {
    question: "What is the output of [1,2,3] * 2?",
    options: ["[1,2,3,1,2,3]", "[2,4,6]", "[1,2,3]*2", "Error"],
    answer: "[1,2,3,1,2,3]"
  },
  {
    question: "Which of these is an immutable data type?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: "Tuple"
  },
  {
    question: "Which method adds an element to the end of a list?",
    options: ["insert()", "append()", "add()", "extend()"],
    answer: "append()"
  },

  // --- Dictionaries & Sets ---
  {
    question: "How do you create an empty dictionary?",
    options: ["{}", "[]", "()", "set()"],
    answer: "{}"
  },
  {
    question: "Which method returns all keys in a dictionary?",
    options: ["values()", "keys()", "items()", "get()"],
    answer: "keys()"
  },
  {
    question: "What is the output of len({1,2,2,3})?",
    options: ["2", "3", "4", "Error"],
    answer: "3"
  },
  {
    question: "Which method removes a key from a dictionary?",
    options: ["del", "pop()", "remove()", "discard()"],
    answer: "pop()"
  },

  // --- Functions ---
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    answer: "def"
  },
  {
    question: "What is the default return value of a function without return statement?",
    options: ["0", "None", "Error", "Empty string"],
    answer: "None"
  },
  {
    question: "What are functions inside functions called?",
    options: ["Inner functions", "Nested functions", "Sub functions", "Child functions"],
    answer: "Nested functions"
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["return", "output", "yield", "exit"],
    answer: "return"
  },

  // --- Modules & Packages ---
  {
    question: "Which keyword is used to import a module?",
    options: ["load", "require", "import", "include"],
    answer: "import"
  },
  {
    question: "What is the built-in module to work with math functions?",
    options: ["statistics", "math", "numpy", "random"],
    answer: "math"
  },
  {
    question: "Which function gives all attributes of a module?",
    options: ["list()", "dir()", "help()", "type()"],
    answer: "dir()"
  },
  {
    question: "Which file is used to mark a folder as a Python package?",
    options: ["__package__.py", "__init__.py", "__main__.py", "package.py"],
    answer: "__init__.py"
  },

  // --- Exception Handling ---
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "catch", "except", "handle"],
    answer: "except"
  },
  {
    question: "What is the base class for all exceptions in Python?",
    options: ["Error", "Exception", "BaseError", "Throwable"],
    answer: "Exception"
  },
  {
    question: "Which keyword is used to raise an exception?",
    options: ["throw", "raise", "error", "except"],
    answer: "raise"
  },
  {
    question: "Which block always runs whether exception occurs or not?",
    options: ["try", "except", "finally", "else"],
    answer: "finally"
  },

  // --- File Handling ---
  {
    question: "Which function is used to open a file in Python?",
    options: ["open()", "file()", "read()", "with()"],
    answer: "open()"
  },
  {
    question: "What does 'r' mode mean in open()?",
    options: ["read", "write", "append", "read & write"],
    answer: "read"
  },
  {
    question: "Which method reads all lines of a file?",
    options: ["read()", "readline()", "readlines()", "lines()"],
    answer: "readlines()"
  },
  {
    question: "What is the correct way to ensure file is closed after opening?",
    options: ["close()", "delete()", "with open()", "end()"],
    answer: "with open()"
  },

  // --- OOP Basics ---
  {
    question: "Which keyword is used to create a class in Python?",
    options: ["class", "object", "define", "struct"],
    answer: "class"
  },
  {
    question: "Which method is called automatically when an object is created?",
    options: ["__create__()", "__start__()", "__init__()", "constructor()"],
    answer: "__init__()"
  },
  {
    question: "What is the first argument of instance methods?",
    options: ["this", "self", "cls", "obj"],
    answer: "self"
  },
  {
    question: "Which concept allows one class to use methods from another?",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    answer: "Inheritance"
  },

  // --- NumPy & Pandas Basics ---
  {
    question: "Which library is mainly used for numerical operations in Python?",
    options: ["numpy", "pandas", "scipy", "math"],
    answer: "numpy"
  },
  {
    question: "Which pandas data structure is 1D?",
    options: ["DataFrame", "Series", "Array", "Tuple"],
    answer: "Series"
  },
  {
    question: "Which function creates a numpy array?",
    options: ["array()", "np()", "list()", "make()"],
    answer: "array()"
  },
  {
    question: "Which method is used to read CSV files in pandas?",
    options: ["read_csv()", "load_csv()", "import_csv()", "csv()"],
    answer: "read_csv()"
  },

  // --- Mix MCQs ---
  {
    question: "Which function is used to get user input in Python 3?",
    options: ["input()", "scan()", "read()", "get()"],
    answer: "input()"
  },
  {
    question: "What is the keyword used for creating anonymous functions?",
    options: ["def", "func", "lambda", "anon"],
    answer: "lambda"
  },
  {
    question: "Which loop is used when the number of iterations is not known?",
    options: ["for", "while", "do-while", "loop"],
    answer: "while"
  },
  {
    question: "Which operator is used for floor division?",
    options: ["/", "//", "%", "**"],
    answer: "//"
  },
  {
    question: "What is the output of bool(0)?",
    options: ["True", "False", "0", "None"],
    answer: "False"
  },
  {
    question: "Which function is used to find the type of a variable?",
    options: ["type()", "id()", "class()", "var()"],
    answer: "type()"
  },
  {
    question: "Which built-in function returns length of an object?",
    options: ["size()", "len()", "length()", "count()"],
    answer: "len()"
  },
  {
    question: "Which keyword is used to define a generator function?",
    options: ["generate", "yield", "gen", "return"],
    answer: "yield"
  },
  {
    question: "Which Python version introduced f-strings?",
    options: ["2.7", "3.5", "3.6", "3.8"],
    answer: "3.6"
  },
  {
    question: "Which function returns the memory address of an object?",
    options: ["id()", "address()", "loc()", "mem()"],
    answer: "id()"
  }
);

questions.push(
  // --- Conditional Statements ---
  {
    question: "What is the output of: if 5 > 3: print('Yes')?",
    options: ["Yes", "No", "Error", "None"],
    answer: "Yes"
  },
  {
    question: "Which keyword is used for multiple conditions in Python?",
    options: ["elseif", "elif", "else if", "end"],
    answer: "elif"
  },
  {
    question: "What is the output of: if False: print(1) else: print(0)?",
    options: ["1", "0", "True", "Error"],
    answer: "0"
  },
  {
    question: "Which statement is used to end the execution of a loop prematurely?",
    options: ["exit", "break", "stop", "end"],
    answer: "break"
  },

  // --- Loops ---
  {
    question: "How many times will 'Hello' be printed? for i in range(3): print('Hello')",
    options: ["2", "3", "4", "Error"],
    answer: "3"
  },
  {
    question: "What is the output of list(range(2,6))?",
    options: ["[2,3,4,5,6]", "[2,3,4,5]", "[3,4,5]", "[2,6]"],
    answer: "[2,3,4,5]"
  },
  {
    question: "Which loop executes at least once even if the condition is false?",
    options: ["for", "while", "do-while", "None"],
    answer: "None"
  },
  {
    question: "Which keyword is used to skip the current iteration of a loop?",
    options: ["break", "continue", "pass", "skip"],
    answer: "continue"
  },

  // --- Functions (deep dive) ---
  {
    question: "What will print(len([1,2,3,4])) return?",
    options: ["3", "4", "5", "Error"],
    answer: "4"
  },
  {
    question: "What is the scope of a variable defined inside a function?",
    options: ["Global", "Local", "Class", "Module"],
    answer: "Local"
  },
  {
    question: "Which keyword is used to declare global variables inside a function?",
    options: ["global", "extern", "static", "var"],
    answer: "global"
  },
  {
    question: "What will be printed? def f(): pass; print(f())",
    options: ["None", "0", "Error", "Empty string"],
    answer: "None"
  },

  // --- Data Types (extras) ---
  {
    question: "What is the output of type(3.0)?",
    options: ["int", "float", "double", "complex"],
    answer: "float"
  },
  {
    question: "What is the output of bool('False')?",
    options: ["True", "False", "Error", "None"],
    answer: "True"
  },
  {
    question: "Which data type is mutable?",
    options: ["str", "list", "tuple", "int"],
    answer: "list"
  },
  {
    question: "What is the result of set([1,2,2,3,3,3])?",
    options: ["[1,2,3]", "{1,2,3}", "(1,2,3)", "Error"],
    answer: "{1,2,3}"
  },

  // --- Operators (deeper) ---
  {
    question: "What is the output of 2 ** 3?",
    options: ["6", "8", "9", "Error"],
    answer: "8"
  },
  {
    question: "What is the result of 7 // 2?",
    options: ["3", "3.5", "4", "Error"],
    answer: "3"
  },
  {
    question: "What is the result of 7 % 2?",
    options: ["1", "2", "3", "Error"],
    answer: "1"
  },
  {
    question: "Which operator is used to check object identity?",
    options: ["==", "is", "equals", "==="],
    answer: "is"
  },

  // --- Advanced Strings ---
  {
    question: "What is 'Python'[::-1]?",
    options: ["Python", "nohtyP", "Error", "None"],
    answer: "nohtyP"
  },
  {
    question: "What is the output of 'a' * 5?",
    options: ["aaaaa", "a5", "Error", "5a"],
    answer: "aaaaa"
  },
  {
    question: "What is the output of 'Hello'.find('e')?",
    options: ["0", "1", "2", "-1"],
    answer: "1"
  },
  {
    question: "What is the output of 'Hello World'.split()[0]?",
    options: ["Hello", "World", "Hello World", "Error"],
    answer: "Hello"
  },

  // --- Exception Handling (extra) ---
  {
    question: "Which exception occurs when dividing by zero?",
    options: ["ZeroDivisionError", "DivideError", "MathError", "ValueError"],
    answer: "ZeroDivisionError"
  },
  {
    question: "Which exception occurs when converting 'abc' to int?",
    options: ["TypeError", "ValueError", "NameError", "KeyError"],
    answer: "ValueError"
  },
  {
    question: "Which exception occurs when accessing undefined variable?",
    options: ["KeyError", "NameError", "IndexError", "TypeError"],
    answer: "NameError"
  },
  {
    question: "Which exception occurs when accessing invalid index in a list?",
    options: ["IndexError", "ValueError", "KeyError", "TypeError"],
    answer: "IndexError"
  },

  // --- File Handling (extra) ---
  {
    question: "What does 'a' mode mean in open()?",
    options: ["append", "all", "array", "after"],
    answer: "append"
  },
  {
    question: "What is the output of open('file.txt','w').mode?",
    options: ["r", "w", "a", "x"],
    answer: "w"
  },
  {
    question: "What is the output of open('file.txt','r').read(0)?",
    options: ["'' (empty string)", "None", "Error", "0"],
    answer: "'' (empty string)"
  },
  {
    question: "Which function closes an opened file?",
    options: ["end()", "close()", "exit()", "finish()"],
    answer: "close()"
  },

  // --- OOP (extra) ---
  {
    question: "Which type of method is defined with @classmethod decorator?",
    options: ["class method", "static method", "instance method", "private method"],
    answer: "class method"
  },
  {
    question: "Which type of method does not require self parameter?",
    options: ["static method", "class method", "instance method", "all"],
    answer: "static method"
  },
  {
    question: "Which OOP concept hides the internal details of an object?",
    options: ["Encapsulation", "Polymorphism", "Abstraction", "Inheritance"],
    answer: "Abstraction"
  },
  {
    question: "Which OOP concept allows same method name but different behavior?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Overloading"],
    answer: "Polymorphism"
  },

  // --- Python Standard Library ---
  {
    question: "Which module is used to generate random numbers?",
    options: ["random", "math", "numpy", "os"],
    answer: "random"
  },
  {
    question: "Which module is used for working with operating system?",
    options: ["sys", "os", "platform", "shutil"],
    answer: "os"
  },
  {
    question: "Which module provides date and time functions?",
    options: ["time", "datetime", "calendar", "date"],
    answer: "datetime"
  },
  {
    question: "Which module is used to serialize objects in Python?",
    options: ["pickle", "json", "marshal", "all of the above"],
    answer: "all of the above"
  },

  // --- Mixed Output Predictions ---
  {
    question: "What will print(2==2 and 3==4) output?",
    options: ["True", "False", "Error", "None"],
    answer: "False"
  },
  {
    question: "What will print(10>5 or 3>7) output?",
    options: ["True", "False", "Error", "None"],
    answer: "True"
  },
  {
    question: "What will print(not 0) output?",
    options: ["True", "False", "Error", "0"],
    answer: "True"
  },
  {
    question: "What will be the output of print(type([]) is list)?",
    options: ["True", "False", "Error", "None"],
    answer: "True"
  }
);