export default function makeResponseError(response: Response) {
  return new Error(`${response.status} ${response.statusText}`);
}
