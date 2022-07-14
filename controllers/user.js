const { user: userService } = require("../service");
const Voter = require('../models/voter')
const Data = require('../models/data')
const mongoose = require("mongoose");
// mongoose.














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



exports.addV  = async (req, res) => {
  const { City} =   req.body

  const user = new Data({
 
  
});
await user.save(async(err, user) => {

  if (err) {
    console.log(err);
    return res.status(400).json({
      // error: errorHandler(err)
      error: err.message,
    });
  }





  return res.status(200).json({
    message: "created",
    success:true,
    data:user
    // token: user.confirmationCode,
    //  user:user
  });
});

}
exports.getVotersByCnic  = async (req, res) => {
  try {
    const { cnic} =   req.body
    // console.log(cnic)
    res.header( "Access-Control-Allow-Origin" );

    const userDetails = await Data.findOne({
     'CNIC #' :cnic
    })
      // .populate("artist_artwork")
      .lean();
    if (userDetails) {
      return res.status(200).json({
        data: userDetails,
      });
    } else {
      return res.status(200).json({
        error: "No Voter Found",
      });
    }

    // throw "User not found";
  } catch (ex) {
    return res.status(200).json({
      error: "No Voter Found",
    });
  }
};


exports.getAllKarkun  = async (req, res) => {
  try {
    console.log('cc')
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


exports.getStat  = async (req, res) => {
  try {
    res.header( "Access-Control-Allow-Origin" );

    const userDetails = await Voter.find({
      // ref_id : mobile
      //  mobile:mobile,
       account_type:'voter'
      // account_type: "gallery",
      // invitation_status: payload.invitation_status,
      // gallery_signup_step: payload.gallery_signup_step,
      // pause_status:payload.pause_status
      // approved: true,
    })
      // .populate("artist_artwork")
      .lean();

      // console.log('userDetails',userDetails)
    if (userDetails) {
      const memberCount = userDetails?.filter(e => e.remarks === 'Member')?.length;
      const promisingCount = userDetails?.filter(e => e.remarks === 'Promising Voter')?.length;
      const nonPromisingCount = userDetails?.filter(e => e.remarks === 'Non-Promising Voter')?.length;
      const refusingCount = userDetails?.filter(e => e.remarks === 'Refusing Voter')?.length;
      const opponentCount = userDetails?.filter(e => e.remarks === 'Opponent Voter')?.length;

      console.log(memberCount)
      console.log(promisingCount)
      console.log(nonPromisingCount)
      console.log(refusingCount)
      console.log(opponentCount)
      
      
      
      return res.status(200).json({
        // data: userDetails,
        memberCount,
        promisingCount,
        nonPromisingCount,
        refusingCount,
        opponentCount
        
      });
    } else {
      //throw "Voter not found";
    }

    // throw "User not found";
  } catch (ex) {
    throw "Voter not found";
  }
};

exports.getUserStat  = async (req, res) => {
  try {
    const { mobile} =   req.body


    res.header( "Access-Control-Allow-Origin" );

    const userDetails = await Voter.find({
      ref_id : mobile,
      //  mobile:mobile,
       account_type:'voter'
      // account_type: "gallery",
      // invitation_status: payload.invitation_status,
      // gallery_signup_step: payload.gallery_signup_step,
      // pause_status:payload.pause_status
      // approved: true,
    })
      // .populate("artist_artwork")
      .lean();

      // console.log('userDetails',userDetails)
    if (userDetails) {
      const memberCount = userDetails?.filter(e => e.remarks === 'Member')?.length;
      const promisingCount = userDetails?.filter(e => e.remarks === 'Promising Voter')?.length;
      const nonPromisingCount = userDetails?.filter(e => e.remarks === 'Non-Promising Voter')?.length;
      const refusingCount = userDetails?.filter(e => e.remarks === 'Refusing Voter')?.length;
      const opponentCount = userDetails?.filter(e => e.remarks === 'Opponent Voter')?.length;

      console.log(memberCount)
      console.log(promisingCount)
      console.log(nonPromisingCount)
      console.log(refusingCount)
      console.log(opponentCount)
      
      
      
      return res.status(200).json({
        // data: userDetails,
        memberCount,
        promisingCount,
        nonPromisingCount,
        refusingCount,
        opponentCount
        
      });
    } else {
      //throw "Voter not found";
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


