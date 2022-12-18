import { Notification } from "@aplication/entities/notification";
import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface GetRecipientNotificationsRequest {
    recipientId: string
}

interface GetRecipientNotificationsResponse {
    notifications: Notification[]
};

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
        const { recipientId } = request;

        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

        return {
            notifications
        }
    }
}