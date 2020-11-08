export class DatabaseConnectionError extends Error {
	statusCode = 500;
	reason = 'Failed to connect to database';

	constructor() {
		super();
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}

	serializeErrors() {
		return [{ message: this.reason }];
	}
}
