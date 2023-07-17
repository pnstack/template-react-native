import dayjs from 'dayjs';

export class Logger {
  constructor(private readonly context: string) {}

  log(...args: any[]) {
    console.log(
      `[${dayjs().toISOString()}] [Context: ${this.context}] LOG - `,
      ...args,
    );
  }

  info(...args: any[]) {
    console.info(
      `[${dayjs().toISOString()}] [Context: ${this.context}] INFO - `,
      ...args,
    );
  }

  warn(...args: any[]) {
    console.warn(
      `[${dayjs().toISOString()}] [Context: ${this.context}] WARN - `,
      ...args,
    );
  }

  debug(...args: any[]) {
    console.debug(
      `[${dayjs().toISOString()}] [Context: ${this.context}] DEBUG - `,
      ...args,
    );
  }

  error(...args: any[]) {
    console.error(
      `[${dayjs().toISOString()}] [Context: ${this.context}] ERROR - `,
      ...args,
    );
  }

  trace(...args: any[]) {
    console.trace(
      `[${dayjs().toISOString()}] [Context: ${this.context}] TRACE - `,
      ...args,
    );
  }
}
