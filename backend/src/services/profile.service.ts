import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService {

profile() {
    return{
        fullname: 'Isadora P Toss',
        username: 'IsaToss',
        description: 'Isso é um teste',
        createdAt: '2022-08-13'
    }
}

}