/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomError } from '@globals/helpers/custom.error';

export class UserEntity {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public emailValidated: boolean,
    public password: string,
    public role: string[],
    public country: string,
    public profilePicture?: string,
    public img?: string,
  ) { }

  static fromObject(object: { [key: string]: any; }) {
    const { id, _id, name, email, emailValidated, password, role, country, profilePicture, img } = object;

    if (!_id && !id) {
      throw CustomError.badRequest('Missing id');
    }

    if (!name) throw CustomError.badRequest('Missing name');
    if (!email) throw CustomError.badRequest('Missing email');
    if (emailValidated === undefined) throw CustomError.badRequest('Missing emailValidated');
    if (!password) throw CustomError.badRequest('Missing password');
    if (!role) throw CustomError.badRequest('Missing role');
    if (!country) throw CustomError.badRequest('Missing country');

    return new UserEntity(
      _id || id,
      name,
      email,
      emailValidated,
      password,
      role,
      country,
      profilePicture,
      img
    );
  }
}
