import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['cunning-eft-11093-us1-kafka.upstash.io:9092'],
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: 'Y3VubmluZy1lZnQtMTEwOTMkVnj-ET--8DUdFfp-dJMcQWH-mSMWNB7KS4qot3o',
                  password: 'kZzM6SN0wMPV1Z0ifDz98nacNrWhfhyXuVPxVwbTbtou-J_8YxIhz3GP5vC1nCpYXFvlWQ==',
                },
                ssl: true,
            }
        })
    }
    async onModuleDestroy() {
        await this.close();
    }
}