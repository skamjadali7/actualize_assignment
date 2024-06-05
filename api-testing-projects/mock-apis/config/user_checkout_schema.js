class checkout {
    // Response body schema (success)
    static checkoutSuccessResponseSchema = {
        message: { type: 'string', description: 'Checkout completed successfully' }
    };
    // Response body schema (error - empty cart)
    static checkoutErrorResponseSchema = {
        error: { type: 'string', description: 'Cart is empty. Add items before checkout.' }
    };

}