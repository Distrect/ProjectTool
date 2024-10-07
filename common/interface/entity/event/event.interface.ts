import { CreatedAtAttribute } from '@common/tools';

export type IEventPrimaryKey = {
  eventID: string;
};

export type IEventMetaData = {
  eventType: string;
};

export type IEvent<Payload = any> = Readonly<
  IEventPrimaryKey &
    IEventMetaData &
    Readonly<CreatedAtAttribute> & {
      payload: Payload;
    }
>;

export enum EventType {
  FUNCTION_POINT_SAVE = 'FunctionPointSave',
  COCOMO_SAVE = 'CocomoSave',
}
