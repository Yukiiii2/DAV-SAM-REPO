import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import CourseList from "@/components/CourseList.vue";
import MessagingComponent from "@/components/Messaging.vue";
import QuizCreator from "@/components/QuizCreator.vue";
import ParentDashboard from "@/views/ParentDashboard.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/courses", component: CourseList },
  { path: "/messages", component: MessagingComponent },
  { path: "/quiz-creator", component: QuizCreator },
  { path: "/parent", component: ParentDashboard },
  { path: "/login", component: LoginForm},
  { path: "/register", component: RegisterForm}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
