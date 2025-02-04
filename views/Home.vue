<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Transform Your Learning Journey</h1>
          <p class="hero-subtitle">with <span class="accent">Bright Minds</span></p>
          <p class="hero-description">
            Interactive courses, personalized learning paths, and expert guidance all in one place.
          </p>
          <div class="hero-buttons">
            <router-link to="/courses" class="button primary">
              Start Learning
              <i class="fas fa-arrow-right"></i>
            </router-link>
            <router-link to="/demo" class="button secondary">
              Watch Demo
              <i class="fas fa-play"></i>
            </router-link>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">10K+</span>
              <span class="stat-label">Students</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">200+</span>
              <span class="stat-label">Courses</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">95%</span>
              <span class="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img src="@/assets/learning-illustration.svg" alt="Online Learning" class="floating-animation" />
        </div>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">Why Choose <span class="title-accent">Bright Minds?</span></h2>
      <div class="feature-cards">
        <div class="card" v-for="(feature, index) in features" :key="index">
          <div class="card-icon-wrapper">
            <i :class="['fas', `fa-${feature.icon}`]"></i>
          </div>
          <h3 class="card-title">{{ feature.title }}</h3>
          <p class="card-description">{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      features: [
        {
          icon: "graduation-cap",
          title: "Personalized Learning",
          description: "Adaptive learning paths that adjust to your pace and style."
        },
        {
          icon: "chart-line",
          title: "Track Progress",
          description: "Real-time analytics and detailed performance insights."
        },
        {
          icon: "users",
          title: "Community Learning",
          description: "Connect with peers and learn together in study groups."
        },
        {
          icon: "award",
          title: "Certifications",
          description: "Earn recognized certificates upon course completion."
        }
      ]
    }
  }
};
</script>

<style scoped>
.home-page {
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  position: relative;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  border-radius: 32px;
  padding: 4rem;
  overflow: hidden;
  margin-bottom: 4rem;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/pattern.svg') repeat;
  opacity: 0.1;
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.hero-text {
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.accent {
  background: linear-gradient(120deg, #f9fafb 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-accent {
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
}

.hero-description {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.button {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.button.primary {
  background: white;
  color: #4f46e5;
}

.button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.hero-stats {
  display: flex;
  gap: 3rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.floating-animation {
  animation: floating 6s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translate(0, 0px); }
  50% { transform: translate(0, -20px); }
  100% { transform: translate(0, 0px); }
}

.features {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1f2937;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-icon-wrapper i {
  font-size: 1.5rem;
  color: white;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.card-description {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-image {
    order: -1;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 2rem;
  }

  .hero-stats {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>