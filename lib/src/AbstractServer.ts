import * as express from "express";

export abstract class AbstractServer {
	constructor(port: number) {
		express().listen(port, () =>
			console.log(`Server listening on port ${port}`)
		);
	}
}
