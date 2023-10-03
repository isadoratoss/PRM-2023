import { Controller, Get } from "@nestjs/common";
import { ProfileService } from "src/services/profile.service";


@Controller('topics')
export class TopicController {

    constructor(private service: ProfileService) { }

    @Get()
    getProfile() {
        return this.service.profile();
    }
}
