export interface IDepartment {
  department: string,
}

export default interface IUpdateDepartment extends IDepartment {
  id: number,
}