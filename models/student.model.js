module.exports = (sequelize, DataTypes, Model) => {

class Student extends Model {}

Student.init({
        
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {isLowercase: true}
            
            // // get() {
            // //     const rawValue = this.getDataValue('lastName');
            // //     return rawValue ? rawValue.toUpperCase() : null;
            // //   }

            // set(value) {
            //     // Storing passwords in plaintext in the database is terrible.
            //     // Hashing the value with an appropriate cryptographic hash function is better.
            //     this.setDataValue('firstName', value+ ' :::::: Nodejs' );
            //   }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false    
        }
}, {
    sequelize,
    modelName: 'Student',
    freezeTableName: true,
    tableName: 'Students'
    // timestamps: false

});

console.log(Student === sequelize.models.Student); 

return Student;

}