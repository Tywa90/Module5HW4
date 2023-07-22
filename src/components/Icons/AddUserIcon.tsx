import Box from '@mui/material/Box';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          mr: 2,
        },
        display: "flex"
      }}
    >
      <AddReactionOutlinedIcon fontSize="medium"/>
    </Box>
  );
}