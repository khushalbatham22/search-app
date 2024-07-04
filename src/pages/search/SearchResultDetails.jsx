import { Fade, Modal, Typography } from "@mui/material";
import React from "react";

const SearchResultDetails = ({ resultDetail, handleClose }) => (
  <Modal
    open={Boolean(resultDetail)}
    onClose={handleClose}
    closeAfterTransition
  >
    <Fade in={Boolean(resultDetail)}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          outline: "none",
        }}
      >
        {resultDetail && Boolean(resultDetail) && (
          <>
            <Typography variant="h6">{resultDetail.title}</Typography>
            <Typography variant="body1">
              {resultDetail?.snippet?.replace(/<\/?[^>]+(>|$)/g, "")}
            </Typography>
          </>
        )}
      </div>
    </Fade>
  </Modal>
);

export default SearchResultDetails;
