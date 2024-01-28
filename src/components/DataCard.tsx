import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { CardProps } from '@mui/material';

interface StructuredText {
  header: string;
  paragraph: string;
}

interface DataCardProps extends CardProps {
  title: string;
  text: string;
  structuredText?: StructuredText[];
  imageUrl: string;
  backgroundColor?: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, text, imageUrl, backgroundColor, structuredText }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    maxHeight: '90vh',
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, m: 2, backgroundColor: backgroundColor || 'default' }} onClick={handleOpen}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
            {text}
          </Typography>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <CardMedia
            component="img"
            height="650"
            image={imageUrl}
            alt={title}
          />
          <br>
          </br>
          <br>
          </br>
          {structuredText ? (
            structuredText.map((section, index) => (
              <Box key={index} mb={2}>
                <Typography variant="h5" component="h5">
                  {section.header}
                </Typography>
                <Typography variant="body1">
                  {section.paragraph}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {text}
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default DataCard;

