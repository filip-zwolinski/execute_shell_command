import childProcess from 'child_process';
import { ExecuteService } from '../../execute/execute.service';

jest.mock('child_process', () => ({
  _esModule: true,
  execSync: jest.fn(),
}));

const execSyncMock = jest.spyOn(childProcess, 'execSync');

describe('Execute Service', () => {
  const service = new ExecuteService();
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('executeShellCommand', () => {
    it('should return error if exec failed', async () => {
      const command = 'ls -la';
      execSyncMock.mockImplementation((command: string) => `Executed Command: ${command}`);
      const actualValue = await service.executeShellCommand(command);
      expect(actualValue).toEqual(`Executed Command: ${command}`);
    });
    it('should return output if exec succeeded', async () => {
      execSyncMock.mockImplementation(() => {
        throw new Error('Error');
      });
      const command = 'error';
      try {
        await service.executeShellCommand(command);
      } catch (error) {
        expect((error as Error).message).toEqual('There was an error running command');
      }
    });
  });
});
