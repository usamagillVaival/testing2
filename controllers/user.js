const { user: userService } = require("../service");
const Voter = require('../models/voter')














exports.getVoters  = async (req, res) => {
  try {
    res.header( "Access-Control-Allow-Origin" );

    const userDetails = await Voter.find({
      // account_type: "gallery",
      // invitation_status: payload.invitation_status,
      // gallery_signup_step: payload.gallery_signup_step,
      // pause_status:payload.pause_status
      // approved: true,
    })
      // .populate("artist_artwork")
      .lean();
    if (userDetails) {
      return res.status(200).json({
        data: userDetails,
      });
    } else {
      throw "Voter not found";
    }

    // throw "User not found";
  } catch (ex) {
    throw "Voter not found";
  }
};

 
exports.getVotersByMobile  = async (req, res) => {
  try {
    const { mobile} =   req.body
    res.header( "Access-Control-Allow-Origin" );

    const userDetails = await Voter.find({
      ref_id : mobile
      //  mobile:mobile,
      //  account_type:'voter'
      // account_type: "gallery",
      // invitation_status: payload.invitation_status,
      // gallery_signup_step: payload.gallery_signup_step,
      // pause_status:payload.pause_status
      // approved: true,
    })
      // .populate("artist_artwork")
      .lean();
    if (userDetails) {
      return res.status(200).json({
        data: userDetails,
      });
    } else {
      throw "Voter not found";
    }

    // throw "User not found";
  } catch (ex) {
    throw "Voter not found";
  }
};


exports.getAllKarkun  = async (req, res) => {
  try {
    const { mobile} =   req.body
    res.header( "Access-Control-Allow-Origin" );

    const userDetails = await Voter.find({
      // ref_id : mobile
      //  mobile:mobile,
       account_type:'user'
      // account_type: "gallery",
      // invitation_status: payload.invitation_status,
      // gallery_signup_step: payload.gallery_signup_step,
      // pause_status:payload.pause_status
      // approved: true,
    })
      // .populate("artist_artwork")
      .lean();
    if (userDetails) {
      return res.status(200).json({
        data: userDetails,
      });
    } else {
      throw "Voter not found";
    }

    // throw "User not found";
  } catch (ex) {
    throw "Voter not found";
  }
};


exports.login  = async (req, res) => {
  try {
    const { mobile,password} =   req.body
    res.header( "Access-Control-Allow-Origin" );

    const userDetails = await Voter.findOne({
       mobile:mobile,
       password:password
     
    })
      // .populate("artist_artwork")
      .lean();
      console.log('user',userDetails)
    if (userDetails) {
      return res.status(200).json({
        data: userDetails,
      }); 
      
    } else {
      res.status(200).json({
        error:'Incorrect UserName Or Password'
      });

    }

    // throw "User not found";
  } catch (ex) {
    throw "Voter not found";
  }
};


exports.createAccount = async (req, res) => {
  const { 
    name,
    password,
    mobile,
    whatsapp,
    same,
    cnic,
    role,
    block_code, 
    gender,
    district,
    tehsil,
    city,
    area,
    block_number,

    street_number,
    street_name,
    near,
    house_number,
    remarks,


    voter_type,
    na,
    pp,
    qualification,
    occupation,
    martial_status,
    relation,
    account_type,
    ref_id

   } = req.body;
  const result = await userService.createUser(
   
    name,
    password,
    mobile,
    whatsapp,
    same,
    cnic,
    role,
    block_code, 
    gender,
    district,
    tehsil,
    city,
    area,
    block_number,
    street_number,
    street_name,
    near,
    house_number,
    remarks,
    voter_type,
    na,
    pp,
    qualification,
    occupation,
    martial_status,
    relation,
   
    account_type,
    ref_id,
    res

  );
};


