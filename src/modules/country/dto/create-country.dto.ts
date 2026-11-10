import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @Length(2, 2)
  code?: string;
}
