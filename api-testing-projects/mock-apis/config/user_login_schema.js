class login {
    // Request body schema
    static userLoginRequestSchema = {
        email: { type: 'string', format: 'email', description: "User's email address" },
        password: { type: 'string', description: "User's password" }
    };
    // Response body schema (success)
    static userLoginSuccessResponseSchema = {
        userId: { type: 'string', description: 'Unique user identifier' },
        token: { type: 'string', description: 'Authentication token' }
    };
    // Response body schema (error - invalid credentials)
    static userLoginErrorResponseSchema = {
        error: { type: 'string', description: 'Invalid email or password' }
    };

}