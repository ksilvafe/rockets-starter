import { UserPostgresEntity } from '@concepta/nestjs-user/dist/entities/user-postgres.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { UserRoleEntity } from './user-role.entity';
import { UserOtpEntity } from './user-otp.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { Resume } from 'src/resume/entities/resume.entity';
import { FederatedEntity } from './federated-entity';

@Entity('user')
export class UserEntity extends UserPostgresEntity {
  @OneToMany(() => UserRoleEntity, (userRole) => userRole.assignee)
  userRoles!: UserRoleEntity[];

  @OneToMany(() => UserOtpEntity, (userOtp) => userOtp.assignee)
  userOtps?: UserOtpEntity[];

  @OneToOne(() => UserEntity, (userOtp) => userOtp.Skill)
  Skill: Skill;

  @OneToOne(() => UserEntity, (userOtp) => userOtp.Resume)
  Resume: Resume;

  @OneToOne(() => UserEntity, (userOtp) => userOtp.Federated)
  Federated: FederatedEntity;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dob: string;

  @Column()
  phone: number;

  @Column()
  workingWith: string;

  @Column()
  level: number;
}
