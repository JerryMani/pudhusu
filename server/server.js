const express = require("express")
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser")

const apiBaseUrl = "http://localhost:3000";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: apiBaseUrl, credentials: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matrimony",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database!");
});

// Routes
// app.post("/api/register", (req, res) => {
//   const {profile,looking, mobile,password,conform } = req.body;
//   console.log(req.body)

//   const selectQuery = "SELECT * FROM register WHERE  mobile = ?";
//   db.query(selectQuery, [mobile], (err, results, fields) => {
//     if (err) {
//       res.json({ error: "Internal Server Error" });
//     } else if (results.length > 0) {
//       res.json({ error: "User already exists" });
//     } else {
//       const sql =
//         "INSERT INTO register (`profile`,`looking`, `mobile`, `password`,`conform_password`) VALUES (?, ?, ?, ?, ?)";
//       db.query(sql, [profile,looking, mobile, password,conform], (err, result) => {
//         if (err) {
//             throw err
//             res.json({ error: "Internal Server Error" });
//         } else {
//             res.json({ auth: true, user: mobile, message: "User registered successfully!" });
//           }
//       });
//     }
//   });
// });

app.post("/api/register", (req, res) => {
  const {profile,looking, mobile,password,conform } = req.body;

  const selectQuery = "SELECT * FROM register WHERE  mobile = ?";
  db.query(selectQuery, [mobile], (err, results, fields) => {
    if (err) {
      res.json({ error: "Internal Server Error" });
    } else if (results.length > 0) {
      res.json({ error: "User already exists" });
    } else if (password !== conform) {
      res.json({ error: "Password doesn't match" })
    } else if (password === conform){
      const sql =
        "INSERT INTO register (`profile`,`looking`, `mobile`, `password`,`conform_password`) VALUES (?, ?, ?, ?, ?)";
      db.query(sql, [profile,looking, mobile, password,conform], (err, result) => {
        if (err) {
            throw err
            res.json({ error: "Internal Server Error" });
        } else {
            // res.json({ auth: true, user: mobile, message: "User registered successfully!" });
            const sqls = "SELECT * FROM register WHERE mobile = ?";
            db.query(sqls, [mobile], (err, data) => {
              if(err) {
                throw err
              } else if (data.length > 0){
                const userMob = data[0].mobile
                res.json({ auth: true, user: userMob, message: "User registered successfully!" });
              }
            })
          }
      });
    }
  });
});

// app.get("/api/basic-info/:id", (req,res)=>{
//     const { id } =req.params;
//     const sql= "SELECT * FROM register WHERE id=?";
//     db.query(sql,id, (err, data) =>{
//         if(err){
//             throw err;
//         }
//         res.send(data)
//     })
// })

app.post("/api/basic-info", (req,res) => {
    const {first,last,dob,gender,profile, marital,tongue,email,user,alt
} = req.body
console.log(req.body);
const sql = "INSERT INTO basic_info (`first_name`,`last_name`,`dob`,`gender`,`profile_for`,`marital_status`,`mother_tongue`,`email`,`mobile_number`,`altermobile_number`) VALUES (?, ?, ?, ?,?,?,?,?,?,?)";
    db.query(sql, [first,last,dob,gender,profile,marital, tongue,email,user,alt], (err, result) => {
        if(err) {
            throw err;
        } else {
            res.json({auth:true,basicInfo:{firstName:first,lastName:last,dob:dob,gender:gender,profile:profile,marital:marital,tongue: tongue,email:email,alt:alt}, message: "User registered successfully"})
        }
    })
})

// app.post("/api/basic-info", (req,res) => {
//   const {first,last,dob,gender,profile, marital,tongue,email,user,alt
// } = req.body
// console.log(req.body);
// const sql = "INSERT INTO basic_info (`first_name`,`last_name`,`dob`,`gender`,`profile_for`,`marital_status`,`mother_tongue`,`email`,`mobile_number`,`altermobile_number`) VALUES (?, ?, ?, ?,?,?,?,?,?,?)";
//   db.query(sql, [first,last,dob,gender,profile,marital, tongue,email,user,alt], (err, result) => {
//       if(err) {
//           throw err;
//       } else {
//           res.json({auth:true,basicInfo:{firstName:first,lastName:last,dob:dob,gender:gender,profile:profile,marital:marital,tongue: tongue,email:email,alt:alt}, message: "User registered successfully"})
//       }
//   })
// })

app.post("/api/Contact", (req,res) => {
  const {address,address1,city,state, country,address2,address3,city1,state1,    country1,
} = req.body
console.log(req.body);
const sql = "INSERT INTO contact_details (`address`,`address1`,`city`,`state`,`country`,`address2`,`address3`,`city1`,`state1`,`country1`) VALUES (?, ?, ?, ?,?,?,?,?,?,?)";
  db.query(sql, [ address,address1,city,state,country,address2,address3,city1,state1,country1,], (err, result) => {
      if(err) {
          throw err;
      } else {
          res.json({auth:true, address:address,address1:address1,city:city,state:state,country:country,address2:address2,address3:address3,city1:city1,state1:state1,country1:country1, message: "User registered successfully"})
      }
  })
})

app.post("/api/FamilyDetails", (req,res) => {
  const {father,fcaste,fkulam,mother,mcaste,mkulam,fstatus,ftype,fvalues,sisters,brothers,msisters,mbrothers,parentsno} = req.body
console.log(req.body);
const sql = "INSERT INTO family_details (`father_name`,	`father_caste`,	`father_kulam`,	`mother_name`,	`mother_caste`,	`mother_kulam`,	`family_status`,	`family_type`,	`family_values`,	`no_of_sisters`,	`no_of_brothers`,	`married_sisters`,	`married_brothers`,`parents_number`) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?)";
 db.query(sql, [father,fcaste,fkulam,mother,mcaste,mkulam,fstatus,ftype,fvalues,sisters,brothers,msisters,mbrothers,parentsno], (err, result) => {
      if(err) {
          throw err;
      } else {
          res.json({auth:true,FamilyDetails:{ father:father,fcaste:fcaste,fkulam:fkulam,mother:mother,mcaste:mcaste,mkulam:mkulam,fstatus:fstatus,ftype:ftype,fvalues:fvalues,sisters:sisters,brothers:brothers,msisters:msisters,mbrothers:mbrothers,parentsno:parentsno}, message: "User registered successfully"})
      }
  })
})

app.post("/api/ReligiousInformation", (req,res) => {
  const {religion,caste,Kulam,star,raasi,chevvai,naga} = req.body
console.log(req.body);
const sql = "INSERT INTO religious_details (`religion`,	`caste`	,`kulam`,	`star`,	`raasi`	,`chevvai_dosham`,	`naga_dosham`	) VALUES (?, ?, ?, ?,?,?,?)";
 db.query(sql, [religion,caste,Kulam,star,raasi,chevvai,naga], (err, result) => {
      if(err) {
          throw err;
      } else {
          res.json({auth:true,ReligiousInformation :{religion:religion,caste:caste,Kulam:Kulam,star:star,raasi:raasi,chevvai:chevvai,naga:naga}, message: "User registered successfully"})
      }
  })
})

app.post("/api/HabitDetails", (req,res) => {
  const {home,land,plat,food,smoking,drinking} = req.body
console.log(req.body);
const sql = "INSERT INTO habit_details (`home_details`,	`agri_land`,	`plat`,	`food_habits`	,`smoking_habits`,	`drinking_habits`) VALUES (?, ?, ?, ?,?,?)";
 db.query(sql, [home,land,plat,food,smoking,drinking], (err, result) => {
      if(err) {
          throw err;
      } else {
          res.json({auth:true,HabitDetails :{home:home,land:land,plat:plat,food:food,smoking:smoking,drinking:drinking}, message: "User registered successfully"})
      }
  })
})


app.post("/api/PersonalDetails", (req,res) => {
  const {education,emptype,occupation,income,height,weight,bodytype,complexion,physical} = req.body
console.log(req.body);
const sql = "INSERT INTO personal_details (`education`,`employment_type`,	`occupation`,	`income`,	`height`,`weight`,	`body_type`,	`complexion`,`physical`) VALUES (?, ?, ?, ?,?,?,?,?)";
 db.query(sql, [education,emptype,occupation,income,height,weight,bodytype,complexion,physical], (err, result) => {
      if(err) {
          throw err;
      } else {
          res.json({auth:true,PersonalDetails:{education:education,emptype:emptype,occupation:occupation,income:income,height:height,weight:weight,bodytype:bodytype,complexion:complexion,physical:physical}, message: "User registered successfully"})
      }
  })
})

app.post("/api/PartnerPreferenceDetails", (req,res) => {
  const {pmarital,peducation,employ,mtongue,occupa,monincome,preligion,pcaste,pkulam,pheight,pweight,pbodytype,pcomplexion,pphysical} = req.body
console.log(req.body);
const sql = "INSERT INTO partner_details(`marital_status` ,	`mother_tongue`,	`highest_education`,	`employment_type`,	`occupation`,	`monthly_income`,	`religion`	,`caste`,	`kulam`	,`height`,	`weight`, `body_type`,	`complexion`,	`physical_status`	) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?)";
 db.query(sql, [pmarital,peducation,employ,mtongue,occupa,monincome,preligion,pcaste,pkulam,pheight,pweight,pbodytype,pcomplexion,pphysical], (err, result) => {
      if(err) {
          throw err;
      } else {
          res.json({auth:true,PartnerPreferenceDetails:{pmarital:pmarital,peducation:peducation,employ:employ,mtongue:mtongue,occupa:occupa,monincome:monincome,preligion:preligion,pcaste:pcaste,pkulam:pkulam,pheight:pheight,pweight:pweight,pbodytype:pbodytype,pcomplexion:pcomplexion,pphysical:pphysical}, message: "User registered successfully"})
      }
  })
})



// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
