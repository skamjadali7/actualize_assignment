class register {
    static userRegistrationRequestSchema = {
        username: { type: 'string', description: "User's username" },
        email: { type: 'string', format: 'email', description: "User's email address" },
        password: { type: 'string', description: "User's password" }
    };

    // Response body schema (success)
    static userRegistrationSuccessResponseSchema = {
        userId: { type: 'string', description: 'Unique user identifier' },
        message: { type: 'string', description: 'User registered successfully' }
    };

    // Response body schema (error - user already exists)
    static userRegistrationErrorResponseSchema = {
        error: { type: 'string', description: 'User with this email already exists' }
    };

}