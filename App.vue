<template>
  <div id="app" class="min-h-screen flex flex-col bg-gradient">
    <header class="header">
      <div class="navbar">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <i class="fas fa-graduation-cap"></i>
            <span>Bright <span class="text-gradient">Minds</span></span>
          </router-link>
        </div>
        
        <nav class="nav-links">
          <router-link to="/" class="nav-link">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </router-link>
          <router-link to="/courses" class="nav-link">
            <i class="fas fa-book"></i>
            <span>Courses</span>
          </router-link>
          <router-link to="/messages" class="nav-link">
            <i class="fas fa-comments"></i>
            <span>Messaging</span>
          </router-link>
          <router-link to="/quiz-creator" class="nav-link">
            <i class="fas fa-tasks"></i>
            <span>Quiz Creator</span>
          </router-link>
          <router-link to="/parent" class="nav-link">
            <i class="fas fa-user-shield"></i>
            <span>Parent Dashboard</span>
          </router-link>
        </nav>

        <div class="nav-buttons">
          <router-link to="/login" class="auth-button login">
            <i class="fas fa-sign-in-alt"></i>
            <span>Login</span>
          </router-link>
          <router-link to="/register" class="auth-button register">
            <i class="fas fa-user-plus"></i>
            <span>Register</span>
          </router-link>
        </div>
      </div>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2025 Bright Minds Elementary School. All Rights Reserved.</p>
        <div class="social-links">
          <a href="#" class="social-link">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* Modern color variables */
:root {
  --primary: #4f46e5;
  --primary-light: #818cf8;
  --primary-dark: #4338ca;
  --secondary: #f8fafc;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
}

/* Global styles */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}

.bg-gradient {
  background: var(--bg-gradient);
}

/* Header styles */
.header {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo styles */
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
}

.logo-link i {
  font-size: 1.75rem;
  color: var(--primary);
  filter: drop-shadow(0 2px 4px rgba(79, 70, 229, 0.2));
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navigation links */
.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link i {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: var(--primary);
  background: rgba(79, 70, 229, 0.08);
  transform: translateY(-1px);
}

.nav-link:hover i {
  transform: scale(1.1);
}

.router-link-active {
  color: var(--primary);
  background: rgba(79, 70, 229, 0.08);
  font-weight: 600;
}

/* Auth buttons */
.nav-buttons {
  display: flex;
  gap: 1rem;
}

.auth-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.auth-button.login {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.auth-button.register {
  background: var(--primary);
  color: white;
  border: none;
}

.auth-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.auth-button.login:hover {
  background: rgba(79, 70, 229, 0.08);
}

.auth-button.register:hover {
  background: var(--primary-dark);
}

/* Main content */
.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

/* Footer styles */
.footer {
  background: white;
  border-top: 1px solid rgba(79, 70, 229, 0.1);
  padding: 2rem 0;
}

.footer-content {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--secondary);
}

.social-link:hover {
  color: var(--primary);
  background: rgba(79, 70, 229, 0.08);
  transform: translateY(-2px);
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive design */
@media (max-width: 1024px) {
  .navbar {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-buttons {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .nav-link span {
    display: none;
  }

  .nav-link {
    padding: 0.75rem;
  }

  .nav-link i {
    font-size: 1.25rem;
  }

  .auth-button span {
    display: none;
  }

  .auth-button {
    padding: 0.75rem;
  }

  .auth-button i {
    margin: 0;
    font-size: 1.25rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>