import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Почтовый адрес обязательное поле.' })
  @IsEmail(undefined, { message: 'Не является почтовым адресом.' })
  @Length(5, 32, { message: 'Длина почтового адреса от 5 до 32 символов.' })
  email: string;

  @IsNotEmpty({ message: 'Пароль обязательное поле.' })
  @Length(6, 32, { message: 'Длина пароля от 6 до 32 символов.' })
  password?: string;
}
