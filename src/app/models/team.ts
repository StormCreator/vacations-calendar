import { User } from './user';

export interface Team{
    realm: string,
    participants: User[]
}