// Quiz Application with Modern UI and LocalStorage
class QuizApp {
  constructor() {
    this.currentQuestion = 0;
    this.userAnswers = {};
    this.markedQuestions = new Set();
    this.testNum = this.getTestNumber();
    this.quizQuestions = [];
    this.timeStarted = null;
    this.init();
  }

  getTestNumber() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("test")) || 1;
  }

  init() {
    const perTest = 15;
    const start = (this.testNum - 1) * perTest;
    const end = start + perTest;
    this.quizQuestions = questions.slice(start, end);
    this.timeStarted = Date.now();

    this.setupUI();
    this.renderQuestionNavigation();
    this.showQuestion(0);
    this.updateProgress();
  }

  setupUI() {
    // Update quiz title
    document.getElementById('quizTitle').textContent = `Python Test ${this.testNum}`;
    document.getElementById('totalQuestions').textContent = this.quizQuestions.length;
    
    // Setup navigation event listeners
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Make navigation functions globally available
    window.nextQuestion = () => this.nextQuestion();
    window.previousQuestion = () => this.previousQuestion();
    window.clearResponse = () => this.clearResponse();
    window.submitQuiz = () => this.submitQuiz();
    window.markForReview = () => this.markForReview();
    window.resetQuizData = () => this.resetQuizData();
    window.nextQuiz = () => this.nextQuiz();
    window.goToQuestion = (index) => this.goToQuestion(index);
  }

  renderQuestionNavigation() {
    const nav = document.getElementById('questionNav');
    const navGrid = document.createElement('div');
    navGrid.className = 'nav-grid';
    
    this.quizQuestions.forEach((_, index) => {
      const navBtn = document.createElement('div');
      navBtn.className = 'nav-question';
      navBtn.textContent = index + 1;
      navBtn.onclick = () => this.goToQuestion(index);
      navBtn.id = `nav-${index}`;
      navGrid.appendChild(navBtn);
    });

    nav.innerHTML = '<h6 class="mb-3"><i class="fas fa-th me-2"></i>Question Navigation</h6>';
    nav.appendChild(navGrid);
  }

  showQuestion(index) {
    this.currentQuestion = index;
    const question = this.quizQuestions[index];
    
    // Update question display
    document.getElementById('questionNumber').textContent = `Question ${index + 1}`;
    document.getElementById('currentQuestion').textContent = index + 1;
    
    // Create question content
    const questionContent = document.getElementById('questionContent');
    
    const optionsHTML = question.options.map((opt, i) => `
      <div class="option-item d-flex align-items-center" onclick="selectOption(${index}, ${i})">
        <input type="radio" name="q${index}" value="${opt}" class="form-check-input" id="option-${index}-${i}">
        <label class="form-check-label" for="option-${index}-${i}">${opt}</label>
      </div>
    `).join('');

    questionContent.innerHTML = `
      <h4 class="question-title">${question.question}</h4>
      <div class="options-container">
        ${optionsHTML}
      </div>
    `;

    // Restore previous answer if exists
    if (this.userAnswers[index] !== undefined) {
      const optionIndex = this.userAnswers[index];
      const radio = document.getElementById(`option-${index}-${optionIndex}`);
      if (radio) {
        radio.checked = true;
        radio.closest('.option-item').classList.add('selected');
      }
    }

    // Make selectOption globally available
    window.selectOption = (qIndex, optIndex) => this.selectOption(qIndex, optIndex);

    this.updateNavigation();
    this.updateProgress();
    this.updateQuestionNavigation();
    
    // Add animation
    questionContent.classList.add('fade-in-up');
    setTimeout(() => questionContent.classList.remove('fade-in-up'), 500);
  }

  selectOption(questionIndex, optionIndex) {
    // Clear previous selection
    document.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(radio => {
      radio.closest('.option-item').classList.remove('selected');
    });

    // Set new selection
    const selectedRadio = document.getElementById(`option-${questionIndex}-${optionIndex}`);
    selectedRadio.checked = true;
    selectedRadio.closest('.option-item').classList.add('selected');

    // Store answer
    this.userAnswers[questionIndex] = optionIndex;
    
    // Update navigation
    this.updateQuestionNavigation();
  }

  nextQuestion() {
    if (this.currentQuestion < this.quizQuestions.length - 1) {
      this.showQuestion(this.currentQuestion + 1);
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.showQuestion(this.currentQuestion - 1);
    }
  }

  goToQuestion(index) {
    this.showQuestion(index);
  }

  clearResponse() {
    delete this.userAnswers[this.currentQuestion];
    document.querySelectorAll(`input[name="q${this.currentQuestion}"]`).forEach(radio => {
      radio.checked = false;
      radio.closest('.option-item').classList.remove('selected');
    });
    this.updateQuestionNavigation();
  }

  markForReview() {
    const markBtn = document.getElementById('markBtn');
    if (this.markedQuestions.has(this.currentQuestion)) {
      this.markedQuestions.delete(this.currentQuestion);
      markBtn.innerHTML = '<i class="fas fa-bookmark"></i> Mark for Review';
      markBtn.classList.remove('btn-warning');
      markBtn.classList.add('btn-outline-secondary');
    } else {
      this.markedQuestions.add(this.currentQuestion);
      markBtn.innerHTML = '<i class="fas fa-bookmark"></i> Marked';
      markBtn.classList.remove('btn-outline-secondary');
      markBtn.classList.add('btn-warning');
    }
    this.updateQuestionNavigation();
  }

  updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const markBtn = document.getElementById('markBtn');

    // Update prev/next buttons
    prevBtn.disabled = this.currentQuestion === 0;
    
    if (this.currentQuestion === this.quizQuestions.length - 1) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-block';
    } else {
      nextBtn.style.display = 'inline-block';
      submitBtn.style.display = 'none';
    }

    // Update mark button
    if (this.markedQuestions.has(this.currentQuestion)) {
      markBtn.innerHTML = '<i class="fas fa-bookmark"></i> Marked';
      markBtn.classList.remove('btn-outline-secondary');
      markBtn.classList.add('btn-warning');
    } else {
      markBtn.innerHTML = '<i class="fas fa-bookmark"></i> Mark for Review';
      markBtn.classList.remove('btn-warning');
      markBtn.classList.add('btn-outline-secondary');
    }
  }

  updateProgress() {
    const answered = Object.keys(this.userAnswers).length;
    const total = this.quizQuestions.length;
    const percentage = (answered / total) * 100;
    
    document.getElementById('progressBar').style.width = `${percentage}%`;
  }

  updateQuestionNavigation() {
    this.quizQuestions.forEach((_, index) => {
      const navBtn = document.getElementById(`nav-${index}`);
      if (navBtn) {
        navBtn.className = 'nav-question';
        
        if (index === this.currentQuestion) {
          navBtn.classList.add('current');
        }
        if (this.userAnswers[index] !== undefined) {
          navBtn.classList.add('answered');
        }
        if (this.markedQuestions.has(index)) {
          navBtn.classList.add('marked');
        }
      }
    });
  }

  submitQuiz() {
    const unanswered = this.quizQuestions.length - Object.keys(this.userAnswers).length;
    
    if (unanswered > 0) {
      CustomAlert.confirm(
        `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Do you want to submit anyway?`,
        {
          title: 'Incomplete Quiz',
          confirmText: 'Submit Anyway',
          cancelText: 'Continue Quiz',
          showIcon: true
        }
      ).then((confirmed) => {
        if (confirmed) {
          this.calculateResults();
        }
      });
    } else {
      CustomAlert.confirm(
        'Are you ready to submit your quiz? You cannot change your answers after submission.',
        {
          title: 'Submit Quiz',
          confirmText: 'Submit Quiz',
          cancelText: 'Review Again',
          showIcon: true
        }
      ).then((confirmed) => {
        if (confirmed) {
          this.calculateResults();
        }
      });
    }
  }

  calculateResults() {
    let score = 0;
    const results = [];
    const timeSpent = Math.round((Date.now() - this.timeStarted) / 1000 / 60); // minutes

    this.quizQuestions.forEach((q, index) => {
      const userAnswerIndex = this.userAnswers[index];
      const userAnswer = userAnswerIndex !== undefined ? q.options[userAnswerIndex] : "Not answered";
      const correctAnswerText = typeof q.answer === 'number' ? q.options[q.answer] : q.answer;
      const isCorrect = userAnswer === correctAnswerText;

      if (isCorrect) score++;

      results.push({
        question: q.question,
        userAnswer,
        correctAnswer: correctAnswerText,
        isCorrect,
        index: index + 1
      });
    });

    // Save to localStorage
    this.saveResults(score, this.quizQuestions.length, timeSpent);
    
    // Show results
    this.showResults(score, results, timeSpent);
  }

  saveResults(score, total, timeSpent) {
    const savedResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
    savedResults[`test_${this.testNum}`] = {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      timeSpent,
      date: new Date().toISOString(),
      answers: this.userAnswers
    };
    localStorage.setItem('quizResults', JSON.stringify(savedResults));
  }

  showResults(score, results, timeSpent) {
    const percentage = Math.round((score / this.quizQuestions.length) * 100);
    const performanceClass = percentage >= 80 ? 'text-success' : percentage >= 60 ? 'text-warning' : 'text-danger';
    
    const resultsHTML = `
      <div class="score-display">
        <div class="score-number">${score}</div>
        <div>out of ${this.quizQuestions.length}</div>
        <div class="score-percentage ${performanceClass}">${percentage}% Score</div>
        <small>Time spent: ${timeSpent} minutes</small>
      </div>
      
      <div class="results-summary mb-4">
        <div class="row text-center">
          <div class="col-4">
            <div class="text-success">
              <i class="fas fa-check-circle fa-2x"></i>
              <div>Correct: ${score}</div>
            </div>
          </div>
          <div class="col-4">
            <div class="text-danger">
              <i class="fas fa-times-circle fa-2x"></i>
              <div>Wrong: ${this.quizQuestions.length - score}</div>
            </div>
          </div>
          <div class="col-4">
            <div class="text-info">
              <i class="fas fa-clock fa-2x"></i>
              <div>${timeSpent} min</div>
            </div>
          </div>
        </div>
      </div>

      <h5>Detailed Results:</h5>
      <div class="results-list" style="max-height: 400px; overflow-y: auto;">
        ${results.map(result => `
          <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
            <div class="card-body">
              <div class="result-question">Q${result.index}: ${result.question}</div>
              <div class="result-answer user">Your answer: ${result.userAnswer}</div>
              <div class="result-answer correct">Correct answer: ${result.correctAnswer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('resultsContent').innerHTML = resultsHTML;
    
    // Show next quiz button if available
    const totalTests = Math.ceil(questions.length / 15);
    const nextQuizBtn = document.getElementById('nextQuizBtn');
    if (this.testNum < totalTests) {
      nextQuizBtn.style.display = 'inline-block';
    } else {
      nextQuizBtn.style.display = 'none';
    }
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('resultsModal'));
    modal.show();
  }

  resetQuizData() {
    CustomAlert.confirm(
      `Are you sure you want to reset the data for Test ${this.testNum}? This will permanently delete your saved score and cannot be undone.`,
      {
        title: 'Reset Quiz Data',
        confirmText: 'Yes, Reset',
        cancelText: 'Keep Data',
        showIcon: true
      }
    ).then((confirmed) => {
      if (confirmed) {
        const savedResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
        delete savedResults[`test_${this.testNum}`];
        localStorage.setItem('quizResults', JSON.stringify(savedResults));
        
        // Show success message
        CustomAlert.success(
          'Quiz data has been successfully reset!',
          { title: 'Data Reset Complete' }
        ).then(() => {
          // Close modal and redirect to home
          const modal = bootstrap.Modal.getInstance(document.getElementById('resultsModal'));
          modal.hide();
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 300);
        });
      }
    });
  }

  nextQuiz() {
    const totalTests = Math.ceil(questions.length / 15);
    if (this.testNum < totalTests) {
      window.location.href = `quiz.html?test=${this.testNum + 1}`;
    }
  }
}

// Initialize quiz when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new QuizApp();
});

// Add Bootstrap JS for modal functionality
if (!window.bootstrap) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
  document.head.appendChild(script);
}

// Custom Alert System
class CustomAlert {
  static show(message, type = 'warning', options = {}) {
    return new Promise((resolve) => {
      const modal = document.getElementById('customAlertModal');
      const header = document.getElementById('alertHeader');
      const title = document.getElementById('alertTitle');
      const body = document.getElementById('alertBody');
      const messageEl = document.getElementById('alertMessage');
      const footer = document.getElementById('alertFooter');
      const cancelBtn = document.getElementById('alertCancelBtn');
      const confirmBtn = document.getElementById('alertConfirmBtn');

      // Set up the alert based on type
      header.className = `modal-header ${type}`;
      
      // Set icon and title
      let icon = 'fas fa-exclamation-triangle';
      let titleText = 'Confirmation';
      
      switch(type) {
        case 'warning':
          icon = 'fas fa-exclamation-triangle';
          titleText = 'Warning';
          break;
        case 'danger':
          icon = 'fas fa-times-circle';
          titleText = 'Important';
          break;
        case 'success':
          icon = 'fas fa-check-circle';
          titleText = 'Success';
          break;
        case 'info':
          icon = 'fas fa-info-circle';
          titleText = 'Information';
          break;
      }

      title.innerHTML = `<i class="${icon} me-2"></i>${options.title || titleText}`;
      
      // Add icon to message if specified
      if (options.showIcon) {
        messageEl.innerHTML = `
          <i class="alert-icon ${type} ${icon}"></i>
          ${message}
        `;
      } else {
        messageEl.textContent = message;
      }

      // Configure buttons
      if (options.confirmOnly) {
        cancelBtn.style.display = 'none';
        confirmBtn.textContent = options.confirmText || 'OK';
        confirmBtn.className = `btn btn-${type === 'danger' ? 'danger' : 'primary'}`;
      } else {
        cancelBtn.style.display = 'inline-block';
        cancelBtn.textContent = options.cancelText || 'Cancel';
        confirmBtn.textContent = options.confirmText || 'Confirm';
        confirmBtn.className = `btn btn-${type === 'danger' ? 'danger' : 'primary'}`;
      }

      // Set up event listeners
      const handleConfirm = () => {
        bootstrap.Modal.getInstance(modal).hide();
        resolve(true);
        cleanup();
      };

      const handleCancel = () => {
        bootstrap.Modal.getInstance(modal).hide();
        resolve(false);
        cleanup();
      };

      const cleanup = () => {
        confirmBtn.removeEventListener('click', handleConfirm);
        cancelBtn.removeEventListener('click', handleCancel);
      };

      confirmBtn.addEventListener('click', handleConfirm);
      cancelBtn.addEventListener('click', handleCancel);

      // Show modal
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();

      // Handle modal close via X or backdrop
      modal.addEventListener('hidden.bs.modal', () => {
        resolve(false);
        cleanup();
      }, { once: true });
    });
  }

  static confirm(message, options = {}) {
    return this.show(message, 'warning', { 
      title: 'Confirm Action',
      confirmText: 'Yes',
      cancelText: 'No',
      showIcon: true,
      ...options 
    });
  }

  static alert(message, type = 'info', options = {}) {
    return this.show(message, type, { 
      confirmOnly: true,
      confirmText: 'OK',
      showIcon: true,
      ...options 
    });
  }

  static warning(message, options = {}) {
    return this.show(message, 'warning', { 
      title: 'Warning',
      confirmOnly: true,
      confirmText: 'OK',
      showIcon: true,
      ...options 
    });
  }

  static success(message, options = {}) {
    return this.show(message, 'success', { 
      title: 'Success',
      confirmOnly: true,
      confirmText: 'Great!',
      showIcon: true,
      ...options 
    });
  }

  static error(message, options = {}) {
    return this.show(message, 'danger', { 
      title: 'Error',
      confirmOnly: true,
      confirmText: 'OK',
      showIcon: true,
      ...options 
    });
  }
}

// Make CustomAlert globally available
window.CustomAlert = CustomAlert;