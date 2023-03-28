import { Model, DataTypes } from 'sequelize';
import Department from './Department';
import db from '.';

class Employee extends Model {
  public id?: number;
  public name!: string;
  public cpf!: number;
  public salary!: number;
  public dateOfBirth!: Date;
  public departmnetId!: number;
}

Employee.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  cpf: {
    type: DataTypes.INTEGER,
  },
  salary: {
    type: DataTypes.INTEGER,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
  },
  departmentId: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'Employee',
  tableName: 'Employees',
  timestamps: false,
});

Employee.belongsTo(Department, { foreignKey: 'departmentId' });
Department.hasMany(Employee, { foreignKey: 'id' })

export default Employee;