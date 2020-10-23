import { MigrationInterface, QueryRunner } from 'typeorm';
import User from '../../models/User';

export default class CreateSeedUser1603429283286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          name: 'josé victor hendz martins',
          email: 'jose.vitor.hendz@outlook.com',
          password: '$08$bob5CFWXvi.csmde5sMvM.3IIi/ztrT.w/f8Eit9hlgGtipI32NZm',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('users');
  }
}
