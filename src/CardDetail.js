import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function CardDetail({ pathname }) {
    return (
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography>Dashboard content for {pathname}</Typography>
      </Box>
    );
  }
  
  CardDetail.propTypes = {
    pathname: PropTypes.string.isRequired,
  };

  export default CardDetail;
