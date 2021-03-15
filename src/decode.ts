export default function<T>(value: string): T {
  const buffer = Buffer.from(value, 'base64');

  return JSON.parse(buffer.toString('utf-8'));
}
