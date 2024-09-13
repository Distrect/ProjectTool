import { CreatedAtAttribute } from 'common/tools';

export type IEventPrimaryKey = {
  eventID: number;
};

export type IEventMetaData = {
  eventType: string;
};

export interface IEvent<Payload = any>
  extends IEventPrimaryKey,
    IEventMetaData,
    Readonly<CreatedAtAttribute> {
  payload: Payload;
}
