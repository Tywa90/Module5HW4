import Box from '@mui/material/Box';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
      <SettingsOutlinedIcon fontSize="medium"/>
    </Box>
  );
}