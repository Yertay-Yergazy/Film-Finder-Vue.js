https://film-finder-vue-js.vercel.app/

Final Project Assignment: Vue Mega App
(Full Course Coverage)
Create a full Vue project that demonstrates your understanding of all topics covered in the
course.
You may build any type of application (task manager, student catalog, mini-shop, social board,
blog, dashboard, etc.), but your project must include all requirements below.
1. Core Directives
Across your components, you must use the following:
• v-bind
• v-if / v-else / v-show
• v-for
• v-on
• v-model
3. Components & Communication
Your application must include at least 6-8 components, demonstrating:
• passing data via props
• emitting events with emit
• parent–child communication patterns
4. Advanced Reactivity
Your project should contain:
• ref, reactive
• computed properties
• watch or watchEffect
• good reactivity practices (e.g., never mutating props)
5. Lifecycle Hooks & Composition API
Include a component that uses:
• lifecycle hooks (onMounted, onUnmounted, onUpdated, etc.)
• the setup() function
• a reusable composition function (useSomething.js)
6. Vue Router
Your routing setup must include:
• static routes
• dynamic routes (/items/:id)
• nested routes
• navigation between pages
• a basic navigation guard
• a 404 "Not Found" page
7. Pinia Store
Create at least one Pinia module with:
• state
• getters
• actions
• modular store structure (separate file)
8. Forms + Validation
Add a form (e.g., add item, register user, leave a comment) that includes:
• v-model bindings
• basic input validation (length, required, email, etc.)
• error messages for invalid input
9. API Integration
Your project must include at least one API request using:
• fetch or axios
• async/await
• loading state
• error state
• UI rendering of fetched data
10. Styles & Animation
The project must demonstrate:
• scoped styles
• dynamic classes
• at least one animation using CSS transitions or CSS animations
11. Testing with Vitest
Include tests that cover:
• at least 3 component test
• at least one Pinia store test (state + action)
12. Lazy Loading & Code Splitting
Your router must use lazy-loaded components:
component: () => import(‘./pages/YourPage.vue’)
