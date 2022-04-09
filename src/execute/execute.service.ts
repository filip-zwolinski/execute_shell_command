import { execSync } from 'child_process';

export class ExecuteService {
  public async executeShellCommand(command: string): Promise<string> {
    try {
      const output = await execSync(command);
      return output.toString();
    } catch (error) {
      throw new Error('There was an error running command');
    }
  }
}
