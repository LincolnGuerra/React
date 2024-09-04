import { createRoot } from "react-dom/client";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

function Header (){
    return (
        <header>    
            <h1><EmojiNatureIcon fontSize="large"></EmojiNatureIcon>Chumbawamba</h1>
        </header>
    );
};

export default Header;