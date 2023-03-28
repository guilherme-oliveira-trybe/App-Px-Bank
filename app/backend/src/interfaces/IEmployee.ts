export interface ICreate {
  name: string,
  cpf: string,
  salary: number,
  dateOfBirth: Date,
  departmentId: number,
}

export default interface IUpdate extends ICreate {
  id: number,
}