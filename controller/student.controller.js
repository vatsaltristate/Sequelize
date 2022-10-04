const db = require('../models')
const Student = db.student;
const { QueryTypes } = require('sequelize');

exports.AddS = async (req,res) => {

const StudentData = Student.build({ firstName : 'vatsal', lastName :'Patel'});

// const StudentData = await Student.bulkCreate(
// [   { firstName : 'ketan', lastName :'Patel'},
//     { firstName : 'vatsal', lastName :'Patel'},
//     { firstName : 'dhanji', lastName :'Patel'},
//     { firstName : 'kapil', lastName :'Patel'},
//     { firstName : 'ramesh', lastName :'Patel'},
//     { firstName : 'jay', lastName :'Patel'},
//     { firstName : 'dilip', lastName :'Patel'},
//     { firstName : 'dinesh', lastName :'Patel'},
//     { firstName : 'hitesh', lastName :'Patel'}
// ]);


console.log(StudentData instanceof Student);
console.log(StudentData.lastName);

// StudentData.set({ firstName : 'dhanji', lastName :'Patel'});
  // As above, the database still has "Jane" and "green"
  

await StudentData.save();
console.log('Data was saved to the database!');

console.log(StudentData.toJSON()); 
res.status(200).json(StudentData.toJSON());

}

// exports.find = async (req, res) => {

// const StdFindData = await Student.findAll({

//     where  : {
//         lastName : 'patel'
//     }
// });

// res.status(200).json({  Data : StdFindData});

// }

exports.find = async (req, res) => {

    const StdFindData = await Student.findOne({
    
        where  : {
            lastName : 'patel'
        }
    });
    
    res.status(200).json({'Data :::::::' : StdFindData});
    
}




//---------------------------------------------------------------------------------------------------------

// exports.find = async (req, res) => {

//     const {count,rows} = await Student.findAndCountAll({
    
//         where  : { lastName: 'patel'}
//         // defaults : { firstName : 'Vatsal'}
//     });
    
//    res.status(200).json({  Result : rows, Data : count});
    
// }

//---------------------------------------------------------------------------------------------------------


// exports.gsv = async (req, res) => {

//     const data = await Student.findAll({

//         where  : {
//             lastName : 'patel'
//         }
//     })

//     res.status(200).json({  Result : data });
// };



exports.gsv = async (req, res) => {

    const data = await Student.create({
        firstName: 'Vatsal',
        lastName: 'Patel '
    })

    res.status(200).json({  Result : data });
};

exports.vc = async (req, res) => {

    const data = await Student.create({
        firstName: 'ABC ',
        lastName: 'Patel '
    })
    res.status(200).json({  Result : data });
};


exports.raw = async (req, res) => {

const users = await db.sequelize.query("SELECT * FROM `Students`", 
{ type: QueryTypes.SELECT,
model : Student,
mapToModel : true});

res.status(200).json({  Result : users });

};