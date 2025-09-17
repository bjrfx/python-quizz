// Python Playground - Main JavaScript File
class PythonPlayground {
  constructor() {
    this.editor = null;
    this.isDarkTheme = true;
    this.skulptLoaded = false;
    this.isRunning = false;
    
    // Debug logging
    console.log('PythonPlayground constructor called');
    
    this.sampleCode = {
      hello: `# Hello World - Your first Python program
print("Hello, World!")
print("Welcome to Python Playground!")

name = input("What's your name? ")
print(f"Nice to meet you, {name}!")`,
      
      variables: `# Variables and Data Types
# Numbers
age = 25
height = 5.9
temperature = -10

# Strings
name = "Python"
message = 'Learning is fun!'

# Boolean
is_learning = True
is_expert = False

# Lists
colors = ["red", "green", "blue"]
numbers = [1, 2, 3, 4, 5]

# Print all variables
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Temperature: {temperature}°C")
print(f"Learning: {is_learning}")
print(f"Colors: {colors}")
print(f"Numbers: {numbers}")`,

      loops: `# Loops and Conditions
# For loop
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(f"Count: {i}")

print("\\nEven numbers from 0 to 10:")
for num in range(11):
    if num % 2 == 0:
        print(num, end=" ")

print("\\n\\nWhile loop example:")
count = 0
while count < 3:
    print(f"Iteration: {count}")
    count += 1

# Conditional statements
age = 20
if age >= 18:
    print("\\nYou are an adult!")
elif age >= 13:
    print("\\nYou are a teenager!")
else:
    print("\\nYou are a child!")`,

      functions: `# Functions in Python
def greet(name, age=None):
    """A function to greet someone"""
    if age:
        return f"Hello {name}! You are {age} years old."
    else:
        return f"Hello {name}!"

def calculate_area(length, width):
    """Calculate rectangle area"""
    return length * width

def fibonacci(n):
    """Generate fibonacci sequence"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Function calls
print(greet("Alice"))
print(greet("Bob", 25))

area = calculate_area(5, 3)
print(f"Rectangle area: {area}")

print("\\nFibonacci sequence:")
for i in range(8):
    print(fibonacci(i), end=" ")`,

      lists: `# Lists and Dictionaries
# Lists
fruits = ["apple", "banana", "orange"]
print("Original fruits:", fruits)

# List operations
fruits.append("grape")
fruits.insert(1, "kiwi")
print("After adding:", fruits)

fruits.remove("banana")
print("After removing banana:", fruits)

# List comprehension
squared = [x**2 for x in range(5)]
print("Squared numbers:", squared)

# Dictionaries
student = {
    "name": "John",
    "age": 20,
    "grades": [85, 92, 78, 90],
    "is_enrolled": True
}

print(f"\\nStudent: {student['name']}")
print(f"Age: {student['age']}")
print(f"Grades: {student['grades']}")
print(f"Average grade: {sum(student['grades']) / len(student['grades']):.1f}")

# Dictionary operations
student["major"] = "Computer Science"
student["age"] = 21
print(f"Updated student: {student}")`,

      classes: `# Classes and Objects
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.hobbies = []
    
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."
    
    def add_hobby(self, hobby):
        self.hobbies.append(hobby)
        print(f"{self.name} now enjoys {hobby}!")
    
    def birthday(self):
        self.age += 1
        print(f"Happy birthday! {self.name} is now {self.age} years old.")

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
        self.courses = []
    
    def enroll(self, course):
        self.courses.append(course)
        print(f"{self.name} enrolled in {course}")

# Create objects
person = Person("Alice", 25)
print(person.introduce())

person.add_hobby("reading")
person.add_hobby("coding")
person.birthday()

student = Student("Bob", 20, "CS101")
print(student.introduce())
student.enroll("Python Programming")
student.enroll("Data Structures")

print(f"\\n{student.name}'s courses: {student.courses}")
print(f"{person.name}'s hobbies: {person.hobbies}")`
    };
    
    this.init();
  }

  async init() {
    console.log('Initializing Python Playground...');
    try {
      console.log('Loading Monaco Editor...');
      await this.initializeMonacoEditor();
      console.log('Monaco Editor loaded successfully');
      
      console.log('Initializing Skulpt...');
      this.initializeSkulpt();
      console.log('Skulpt initialized successfully');
      
      console.log('Setting up event listeners...');
      this.setupEventListeners();
      console.log('Event listeners set up successfully');
      
      console.log('Loading saved code...');
      this.loadSavedCode();
      console.log('Saved code loaded successfully');
      
      console.log('Hiding loading overlay...');
      this.hideLoading();
      console.log('Python Playground initialized successfully!');
    } catch (error) {
      console.error('Failed to initialize playground:', error);
      this.showError('Failed to initialize Python Playground. Please refresh the page.');
      this.hideLoading();
    }
  }

  async initializeMonacoEditor() {
    console.log('Starting Monaco Editor initialization...');
    return new Promise((resolve, reject) => {
      // Check if require is available
      if (typeof require === 'undefined') {
        console.error('RequireJS not available');
        reject(new Error('RequireJS not available'));
        return;
      }
      
      require.config({ 
        paths: { 
          'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' 
        },
        // Add error handling for CDN loading
        waitSeconds: 30,
        onError: function(err) {
          console.error('Monaco Editor loading error:', err);
          reject(err);
        }
      });
      
      console.log('RequireJS configured, loading Monaco...');
      
      require(['vs/editor/editor.main'], (monaco) => {
        try {
          console.log('Monaco module loaded, creating editor...');
          this.editor = monaco.editor.create(document.getElementById('editor'), {
            value: `# Welcome to Python Playground!
# Write your Python code here and click "Run Code" to execute it.

print("Hello, Python World!")
print("Let's start coding!")

# Try some basic Python:
name = "Python Playground"
print(f"Welcome to {name}")

# Calculate something
for i in range(5):
    print(f"Number: {i}, Square: {i**2}")`,
            language: 'python',
            theme: 'vs-dark',
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: {
              enabled: true
            },
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: "on",
            tabSize: 4,
            insertSpaces: true,
            wordWrap: 'on',
            bracketMatching: 'always',
            autoIndent: 'full',
            formatOnPaste: true,
            formatOnType: true
          });

          // Add keyboard shortcut for running code
          this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            console.log('Keyboard shortcut triggered: Run code');
            this.runCode();
          });

          console.log('Monaco Editor created successfully');
          resolve();
        } catch (error) {
          console.error('Error creating Monaco Editor:', error);
          reject(error);
        }
      }, (error) => {
        console.error('Error loading Monaco Editor module:', error);
        reject(error);
      });
    });
  }

  initializeSkulpt() {
    console.log('Starting Skulpt initialization...');
    
    // Check if Skulpt is available
    if (typeof Sk === 'undefined') {
      console.error('Skulpt not loaded - typeof Sk:', typeof Sk);
      throw new Error('Skulpt library not loaded');
    }
    
    // Check if Skulpt has the required methods
    if (!Sk.configure) {
      console.error('Skulpt.configure not available');
      throw new Error('Skulpt library incomplete - configure method missing');
    }
    
    if (!Sk.misceval || !Sk.misceval.asyncToPromise) {
      console.error('Skulpt.misceval not available');
      throw new Error('Skulpt library incomplete - asyncToPromise method missing');
    }
    
    console.log('Skulpt library detected and verified, configuring...');
    
    try {
      // Configure Skulpt
      Sk.pre = "output";
      Sk.configure({
        output: (text) => {
          console.log('Skulpt output:', text);
          this.addToConsole(text, 'output');
        },
        read: (filename) => {
          if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
            throw "File not found: '" + filename + "'";
          }
          return Sk.builtinFiles["files"][filename];
        },
        inputfun: (prompt) => {
          return new Promise((resolve) => {
            this.handleInput(prompt, resolve);
          });
        },
        inputfunTakesPrompt: true,
        __future__: Sk.python3
      });
      
      this.skulptLoaded = true;
      console.log('Skulpt configured successfully');
      
      // Test Skulpt with a simple program
      this.testSkulpt();
    } catch (configError) {
      console.error('Error configuring Skulpt:', configError);
      throw new Error(`Failed to configure Skulpt: ${configError.message}`);
    }
  }

  // Test Skulpt functionality
  async testSkulpt() {
    try {
      console.log('Testing Skulpt with simple Python code...');
      await Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody("<test>", false, "# Skulpt test\nresult = 1 + 1", true);
      });
      console.log('Skulpt test successful!');
    } catch (testError) {
      console.warn('Skulpt test failed:', testError);
      // Don't throw here as basic functionality might still work
    }
  }

  setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Run button
    const runBtn = document.getElementById('runBtn');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        console.log('Run button clicked');
        this.runCode();
      });
      console.log('Run button listener added');
    } else {
      console.error('Run button not found');
    }

    // Clear button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        console.log('Clear button clicked');
        this.clearConsole();
      });
      console.log('Clear button listener added');
    }

    // Save button
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        console.log('Save button clicked');
        this.saveCode();
      });
      console.log('Save button listener added');
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        console.log('Theme toggle clicked');
        this.toggleTheme();
      });
      console.log('Theme toggle listener added');
    }

    // Help toggle
    const helpToggle = document.getElementById('helpToggle');
    if (helpToggle) {
      helpToggle.addEventListener('click', () => {
        console.log('Help toggle clicked');
        this.toggleHelp();
      });
      console.log('Help toggle listener added');
    }

    // Close help
    const closeHelp = document.getElementById('closeHelp');
    if (closeHelp) {
      closeHelp.addEventListener('click', () => {
        console.log('Close help clicked');
        this.toggleHelp();
      });
      console.log('Close help listener added');
    }

    // Sample code dropdown
    const sampleItems = document.querySelectorAll('[data-sample]');
    sampleItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const sample = e.target.getAttribute('data-sample');
        console.log('Sample selected:', sample);
        this.loadSample(sample);
      });
    });
    console.log('Sample dropdown listeners added:', sampleItems.length);

    // Auto-save on code change
    if (this.editor) {
      this.editor.onDidChangeModelContent(() => {
        this.autoSave();
      });
      console.log('Auto-save listener added');
    }
    
    console.log('All event listeners set up successfully');
  }

  async runCode() {
    console.log('runCode called, isRunning:', this.isRunning);
    
    if (this.isRunning) {
      console.log('Code is already running, ignoring request');
      return;
    }
    
    if (!this.skulptLoaded) {
      console.error('Skulpt not loaded');
      this.addToConsole('Error: Python runtime not loaded!', 'error');
      return;
    }
    
    if (!this.editor) {
      console.error('Editor not available');
      this.addToConsole('Error: Code editor not available!', 'error');
      return;
    }
    
    const code = this.editor.getValue();
    console.log('Code to run:', code.substring(0, 100) + '...');
    
    if (!code.trim()) {
      console.log('No code to run');
      this.addToConsole('No code to run!', 'error');
      return;
    }

    this.isRunning = true;
    const runBtn = document.getElementById('runBtn');
    const originalContent = runBtn.innerHTML;
    runBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i>Running...';
    runBtn.disabled = true;

    this.addToConsole(`>>> Running Python code...\n`, 'input');
    console.log('Starting code execution...');

    try {
      await Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody("<stdin>", false, code, true);
      });
      this.addToConsole(`\n>>> Code execution completed.\n`, 'input');
      console.log('Code execution completed successfully');
    } catch (error) {
      console.error('Code execution error:', error);
      this.addToConsole(`Error: ${error.toString()}\n`, 'error');
    }

    this.isRunning = false;
    runBtn.innerHTML = originalContent;
    runBtn.disabled = false;
    console.log('runCode completed');
  }

  addToConsole(text, type = 'output') {
    const output = document.getElementById('output');
    const welcome = output.querySelector('.console-welcome');
    
    if (welcome) {
      welcome.remove();
    }

    const line = document.createElement('div');
    line.className = 'console-line';
    
    const timestamp = document.createElement('span');
    timestamp.className = 'console-timestamp';
    timestamp.textContent = `[${new Date().toLocaleTimeString()}] `;
    
    const content = document.createElement('span');
    content.className = `console-${type}-text`;
    content.textContent = text;
    
    line.appendChild(timestamp);
    line.appendChild(content);
    output.appendChild(line);
    
    // Auto-scroll to bottom
    output.scrollTop = output.scrollHeight;
  }

  clearConsole() {
    console.log('Clearing console...');
    const output = document.getElementById('output');
    output.innerHTML = `
      <div class="console-welcome">
        <i class="fab fa-python console-python-icon"></i>
        <div class="welcome-text">
          <h5>Console Cleared!</h5>
          <p>Ready for new code execution.</p>
          <p class="text-muted small">
            <i class="fas fa-play me-1"></i>
            Try running: <code>print("Hello, World!")</code>
          </p>
        </div>
      </div>
    `;
  }

  handleInput(prompt, resolve) {
    this.addToConsole(prompt, 'input');
    
    const inputLine = document.createElement('div');
    inputLine.className = 'console-line console-input-line';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control form-control-sm d-inline-block';
    input.style.width = '200px';
    input.style.background = 'rgba(255,255,255,0.1)';
    input.style.border = '1px solid rgba(255,255,255,0.3)';
    input.style.color = 'white';
    input.placeholder = 'Enter your input...';
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const value = input.value;
        inputLine.innerHTML = `<span class="console-timestamp">[${new Date().toLocaleTimeString()}] </span><span class="console-input-text">> ${value}</span>`;
        resolve(value);
      }
    });
    
    inputLine.appendChild(input);
    document.getElementById('output').appendChild(inputLine);
    
    // Auto-scroll and focus
    const output = document.getElementById('output');
    output.scrollTop = output.scrollHeight;
    input.focus();
  }

  saveCode() {
    console.log('Saving code...');
    const code = this.editor.getValue();
    localStorage.setItem('pythonPlaygroundCode', code);
    this.addToConsole('Code saved successfully!\n', 'output');
    
    // Visual feedback
    const saveBtn = document.getElementById('saveBtn');
    const originalContent = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="fas fa-check me-1"></i>Saved!';
    saveBtn.classList.add('btn-success');
    saveBtn.classList.remove('btn-outline-secondary');
    
    setTimeout(() => {
      saveBtn.innerHTML = originalContent;
      saveBtn.classList.remove('btn-success');
      saveBtn.classList.add('btn-outline-secondary');
    }, 2000);
  }

  autoSave() {
    clearTimeout(this.autoSaveTimeout);
    this.autoSaveTimeout = setTimeout(() => {
      const code = this.editor.getValue();
      localStorage.setItem('pythonPlaygroundAutoSave', code);
    }, 2000);
  }

  loadSavedCode() {
    const savedCode = localStorage.getItem('pythonPlaygroundCode') || 
                     localStorage.getItem('pythonPlaygroundAutoSave');
    
    if (savedCode && this.editor) {
      this.editor.setValue(savedCode);
    }
  }

  loadSample(sampleName) {
    console.log('Loading sample:', sampleName);
    if (this.sampleCode[sampleName] && this.editor) {
      this.editor.setValue(this.sampleCode[sampleName]);
      this.addToConsole(`Loaded sample: ${sampleName}\n`, 'output');
    } else {
      console.error('Sample not found or editor not available:', sampleName);
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const themeBtn = document.getElementById('themeToggle');
    
    if (this.isDarkTheme) {
      monaco.editor.setTheme('vs-dark');
      themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
      document.body.classList.remove('theme-light');
    } else {
      monaco.editor.setTheme('vs-light');
      themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
      document.body.classList.add('theme-light');
    }
  }

  toggleHelp() {
    const sidebar = document.getElementById('helpSidebar');
    sidebar.classList.toggle('show');
  }

  showError(message) {
    console.error('Playground error:', message);
    this.addToConsole(`System Error: ${message}\n`, 'error');
  }

  // Debug function to test if everything is working
  testPlayground() {
    console.log('Testing playground components...');
    console.log('Editor available:', !!this.editor);
    console.log('Skulpt loaded:', this.skulptLoaded);
    console.log('Monaco available:', typeof monaco !== 'undefined');
    console.log('Skulpt available:', typeof Sk !== 'undefined');
    
    if (this.editor && this.skulptLoaded) {
      console.log('Playground is ready!');
      return true;
    } else {
      console.log('Playground is not ready');
      return false;
    }
  }

  hideLoading() {
    const loading = document.getElementById('loadingOverlay');
    if (loading) {
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
      }, 300);
    }
  }
}

// Initialize playground when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, starting playground initialization...');
  
  // Show loading overlay
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.style.display = 'flex';
  }
  
  // Wait for Skulpt to load before creating playground
  if (typeof waitForSkulpt === 'function') {
    waitForSkulpt(() => {
      try {
        console.log('Creating playground instance...');
        window.playground = new PythonPlayground();
      } catch (error) {
        console.error('Error creating playground:', error);
        showInitializationError(error);
      }
    });
  } else {
    // Fallback if waitForSkulpt function is not available
    setTimeout(() => {
      try {
        console.log('Creating playground instance (fallback)...');
        window.playground = new PythonPlayground();
      } catch (error) {
        console.error('Error creating playground:', error);
        showInitializationError(error);
      }
    }, 2000);
  }
});

function showInitializationError(error) {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.innerHTML = `
      <div class="loading-spinner">
        <i class="fas fa-exclamation-triangle" style="color: #ff6b6b; font-size: 3rem; margin-bottom: 1rem;"></i>
        <p>Failed to Initialize Python Playground</p>
        <p class="small">Error: ${error.message}</p>
        <button class="btn btn-light mt-2" onclick="location.reload()">
          <i class="fas fa-redo me-1"></i>Try Again
        </button>
        <a href="playground-simple.html" class="btn btn-warning mt-2 ms-2">
          <i class="fas fa-rocket me-1"></i>Use Simple Version
        </a>
      </div>
    `;
  }
}

// Backup initialization for libraries that load slowly
window.addEventListener('load', () => {
  console.log('Window fully loaded');
  
  // If playground wasn't created yet, try again
  if (!window.playground) {
    setTimeout(() => {
      if (!window.playground) {
        console.log('Attempting backup initialization...');
        try {
          window.playground = new PythonPlayground();
        } catch (error) {
          console.error('Backup initialization failed:', error);
          showInitializationError(error);
        }
      }
    }, 3000); // Wait longer for backup
  }
});

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + Enter to run code
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    if (window.playground && !window.playground.isRunning) {
      window.playground.runCode();
    }
  }
  
  // Ctrl/Cmd + S to save
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    if (window.playground) {
      window.playground.saveCode();
    }
  }
});

// Handle window resize for Monaco Editor
window.addEventListener('resize', () => {
  if (window.playground && window.playground.editor) {
    window.playground.editor.layout();
  }
});