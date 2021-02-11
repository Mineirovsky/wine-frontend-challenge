import makeResponseError from '@/repositories/makeResponseError';

describe('repositories/makeResponseError.ts', () => {
  it('returns an error with the status string', () => {
    const response = { status: 404, statusText: 'Not Found' } as Response;

    const result = makeResponseError(response);

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe('404 Not Found');
  });
});
