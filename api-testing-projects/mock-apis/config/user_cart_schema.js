class addCart {
    // Request body schema
    static addToCartRequestSchema = {
        bookId: { type: 'string', description: 'Unique book identifier' },
        quantity: { type: 'integer', description: 'Quantity of books to add' }
    };
    // Response body schema (success)
    static addToCartSuccessResponseSchema = {
        message: { type: 'string', description: 'Book added to cart successfully' }
    };
    // Response body schema (error - book not found)
    static addToCartErrorResponseSchema = {
        error: { type: 'string', description: 'Book with this ID not found' }
    };

}