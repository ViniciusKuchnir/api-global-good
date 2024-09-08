import { SkuGenerator } from './interface/sku.interface';
import { getTime } from 'date-fns';

export class TimeSkuGenerator implements SkuGenerator {
  generate(): string {
    const current_timestamp = new Date();
    const time: string = getTime(current_timestamp).toString();

    return `TIME-${time}`;
  }
}
