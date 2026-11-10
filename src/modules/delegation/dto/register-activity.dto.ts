import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class RegisterActivityDto {
  @IsString()
  @IsNotEmpty()
  delegationCode: string;

  @IsUUID()
  @IsNotEmpty()
  activityId: string;
}
