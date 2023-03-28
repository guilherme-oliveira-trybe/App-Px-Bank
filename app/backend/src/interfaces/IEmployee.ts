export interface ICreate {
  name: string,
  cpf: number,
  salary: number,
  dateOfBirth: Date,
  departmentId: number,
}

export default interface IUpdate extends ICreate {
  id: number,
}