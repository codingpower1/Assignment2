// Vulnerable TypeScript with issues
interface User {
    id: number;
    name: string;
    password: string;
}

// Hardcoded secrets
const JWT_SECRET = "my-super-secret-key-123";
const ADMIN_PASSWORD = "admin123";

// Any type usage (TypeScript linting issue)
function processData(data: any) {
    return data.value.toUpperCase();
}

// Unsafe regex (potential ReDoS attack)
const unsafeRegex = /^(a+)+$/;

function validateEmail(email: string): boolean {
    // Weak email validation
    return email.includes('@');
}

// Console.log left in code (should be removed in production)
console.log('Application started with config:', {
    secret: JWT_SECRET,
    admin: ADMIN_PASSWORD
});

// Unused variable (linting issue)
const unusedVariable = "This is never used";

export { processData, validateEmail };