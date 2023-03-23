//popup file is using for storing global messages. generally, we would use Redux to replace this file.

export interface Message { 
    id: number;
    message: string;
    type: NotificationType;
    show: boolean;
}

export let storeMessage: Message[] = [];

export enum NotificationType { 
    error,
    warning,
    info,
    success
}

export const popup = (id: number, message: string, type: NotificationType) => {
    storeMessage.push({
        id, message, type, show: true
    });
    return storeMessage;
}

export const removeMessage = (id: number) => { 
    const index = storeMessage.findIndex(c => c.id === id);
    storeMessage.splice(index, 1);
    return storeMessage;
}