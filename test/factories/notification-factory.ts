import { Content } from "@aplication/entities/content";
import { Notification, NotificationProps } from "@aplication/entities/notification";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-2',
        ...override
      });
}