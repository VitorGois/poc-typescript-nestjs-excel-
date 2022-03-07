// TODO: Delete this example file
import { ApiProperty, IsNumber, Min, OmitType, PickType, Type, ValidateNested } from '@gorila-bot/nestjs-core';

import { User } from './user.entity';

export class UserIdDto extends PickType(User, [ 'id' ]) { }

export class UserCreateDto extends OmitType(User, [ 'id', 'originId', 'luckyJoke' ]) { }

export class UserUpdateDto extends PickType(User, [ 'email', 'phone' ]) { }

export class UserCollection {

  @IsNumber() @Min(0)
  public count: number;

  @ApiProperty({ type: [ User ] })
  @ValidateNested({ each: true })
  @Type(() => User)
  public records: User[];

}
