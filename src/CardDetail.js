import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";
import axios from 'axios';

function CardDetail({ selectedCard,cardPage }) {




    return (
        <div style={{ 
            position: 'fixed', 
            top: "20%", 
            left: "8%", 
            width: '100%', 
            height: '100%', 
            overflow: 'hidden' 
        }}>
        <Typography>Dashboard content for {selectedCard}</Typography>
            <iframe
                src={cardPage} // Buraya açmak istediğiniz URL'yi koyun
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Mini Web View"
            />
            </div>
    );
  }
  
  CardDetail.propTypes = {
    selectedCard: PropTypes.string.isRequired,
  };

  export default CardDetail;
