import {Typography} from "@mui/material";

function StakedComponent({leftUrl, rightUrl, leftName, rightName}) {
    return(
        <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg">
           <Typography className="text-xl">Staked</Typography>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center">
              <img src={leftUrl} alt="left" className="w-28 h-28"/>
              <Typography className="text-xl">{leftName}</Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={rightUrl} alt="left" className="w-28 h-28"/>
              <Typography className="text-xl">{rightName}</Typography>
            </div>
          </div>
        </div>
    )
}

export default StakedComponent;