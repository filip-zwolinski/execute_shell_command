import { IsString } from 'class-validator';

export class ExecuteCommandDto {
	@IsString({
		message: 'Command must be a string',
	})
	public command!: string;
}
