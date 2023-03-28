import { Model, DataTypes } from 'sequelize';
import db from '.';

class Department extends Model {
  public id?: number;
  public department!: string;
}

Department.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  department: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'Department',
  tableName: 'Departments',
  timestamps: false,
});

export default Department;