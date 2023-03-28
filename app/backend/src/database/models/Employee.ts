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
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  departmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Employee',
  tableName: 'Employees',
  timestamps: false,
});

Employee.belongsTo(Department, { foreignKey: 'departmentId', as: 'departmentName' });
Department.hasMany(Employee, { foreignKey: 'id' })

export default Employee;