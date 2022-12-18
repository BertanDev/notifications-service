import { Module } from '@nestjs/common';
import { SendNotification } from '@aplication/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@aplication/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@aplication/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@aplication/use-cases/get-recipient-notifications';
import { ReadNotification } from '@aplication/use-cases/read-notification';
import { UnreadNotification } from '@aplication/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
