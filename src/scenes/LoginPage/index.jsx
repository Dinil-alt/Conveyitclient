import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import itlogo from "../../Images/logo.png"
import user from "../../Images/user.png"
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="46px" style={{color:'green'}} >
        <img src={itlogo} width={40} style={{borderRadius:'10px'}} alt="" /> ConveyIt
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography  fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to ConveyIt App, the complete social media platform you need!
        </Typography>
        <div style={{textAlign:'center'}}> 
          <img src={user} width={120} alt="" />
        </div>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;