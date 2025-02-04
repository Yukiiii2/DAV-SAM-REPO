<template>
    <div class="register-container">
      <div class="register-card">
        <div class="card-header">
          <h2 class="card-title">Create Account</h2>
          <p class="card-subtitle">Join us to start your learning journey</p>
        </div>
  
        <form @submit.prevent="handleRegister" class="register-form">
          <!-- Name Field -->
          <div class="form-group">
            <label for="name">Full Name</label>
            <div class="input-wrapper">
              <i class="fas fa-user"></i>
              <input
                v-model="name"
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>
  
          <!-- Email Field -->
          <div class="form-group">
            <label for="email">Email Address</label>
            <div class="input-wrapper">
              <i class="fas fa-envelope"></i>
              <input
                v-model="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
  
          <!-- Password Field -->
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <i class="fas fa-lock"></i>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                placeholder="Create a strong password"
                required
              />
              <button 
                type="button" 
                class="toggle-password"
                @click="showPassword = !showPassword"
              >
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
          </div>
  
          <!-- Confirm Password Field -->
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <div class="input-wrapper">
              <i class="fas fa-lock"></i>
              <input
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                id="confirmPassword"
                placeholder="Re-enter your password"
                required
              />
              <button 
                type="button" 
                class="toggle-password"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
            <span v-if="passwordMismatch" class="error-message">
              <i class="fas fa-exclamation-circle"></i>
              Passwords do not match
            </span>
          </div>
  
          <button type="submit" class="submit-button" :disabled="isLoading || passwordMismatch">
            <span>{{ isLoading ? 'Creating Account...' : 'Create Account' }}</span>
            <i class="fas fa-arrow-right"></i>
          </button>
  
          <div class="divider">
            <span>OR</span>
          </div>
  
          <div class="social-login">
            <button type="button" class="social-button google">
              <i class="fab fa-google"></i>
              <span>Continue with Google</span>
            </button>
            <button type="button" class="social-button facebook">
              <i class="fab fa-facebook-f"></i>
              <span>Continue with Facebook</span>
            </button>
          </div>
        </form>
  
        <p class="login-link">
          Already have an account?
          <router-link to="/login">Sign in</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterForm",
    data() {
      return {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLoading: false,
        showPassword: false,
        showConfirmPassword: false
      };
    },
    computed: {
      passwordMismatch() {
        return this.password !== this.confirmPassword && this.confirmPassword.length > 0;
      },
    },
    methods: {
      async handleRegister() {
        if (this.passwordMismatch) return;
        
        this.isLoading = true;
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000));
          this.$router.push('/login');
        } catch (error) {
          console.error('Registration failed:', error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .register-card {
    background: white;
    border-radius: 24px;
    padding: 2.5rem;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  
  .card-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }
  
  .card-subtitle {
    color: #6b7280;
    font-size: 1.1rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    display: block;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    transition: all 0.3s ease;
  }
  
  .input-wrapper:focus-within {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
  
  .input-wrapper i {
    color: #6b7280;
    margin-right: 0.75rem;
  }
  
  .input-wrapper input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: #1f2937;
  }
  
  .input-wrapper input:focus {
    outline: none;
  }
  
  .toggle-password {
    background: none;
    border: none;
    color: #6b7280;
    cursor: pointer;
    padding: 0;
  }
  
  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
  
  .submit-button {
    width: 100%;
    padding: 1rem;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .submit-button:hover {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
  }
  
  .submit-button:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
  
  .divider {
    position: relative;
    text-align: center;
    margin: 1.5rem 0;
  }
  
  .divider::before,
  .divider::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: #e5e7eb;
  }
  
  .divider::before { left: 0; }
  .divider::after { right: 0; }
  
  .divider span {
    background: white;
    padding: 0 1rem;
    color: #6b7280;
    font-size: 0.875rem;
  }
  
  .social-login {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .social-button {
    width: 100%;
    padding: 1rem;
    border-radius: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
    background: white;
    color: #374151;
    cursor: pointer;
  }
  
  .social-button:hover {
    background: #f8fafc;
    transform: translateY(-2px);
  }
  
  .social-button i {
    font-size: 1.25rem;
  }
  
  .social-button.google i { color: #ea4335; }
  .social-button.facebook i { color: #1877f2; }
  
  .login-link {
    text-align: center;
    color: #6b7280;
    margin-top: 2rem;
  }
  
  .login-link a {
    color: #4f46e5;
    font-weight: 500;
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 640px) {
    .register-card {
      padding: 2rem;
      margin: 1rem;
    }
  
    .card-title {
      font-size: 1.75rem;
    }
  }
  </style>