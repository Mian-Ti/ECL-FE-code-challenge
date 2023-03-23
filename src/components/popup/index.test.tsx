import { popup, removeMessage, storeMessage, NotificationType } from './index';

describe('test popup', () => {
  it('test popup success', () => {
    popup(1, "test popup", NotificationType.success);
    expect(storeMessage.length).toBe(1);
    expect(storeMessage[0].message).toBe("test popup");
    expect(storeMessage[0].type).toBe(NotificationType.success);
  });

  it('test removeMessage success', () => {
    removeMessage(1);
    expect(storeMessage.length).toBe(0);
  });

});