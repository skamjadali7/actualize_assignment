class searchQuery {
    // Response body schema (success)
    static searchBooksSuccessResponseSchema = {
        results: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    bookId: { type: 'string', description: 'Unique book identifier' },
                    title: { type: 'string', description: 'Book title' },
                    author: { type: 'string', description: 'Book author' }
                }
            }
        }
    };
    // Response body schema (error - no results found)
    static searchBooksErrorResponseSchema = {
        message: { type: 'string', description: 'No books found matching the search query' }
    };
}