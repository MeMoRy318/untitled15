    import {useContext} from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

import {ThemeContext} from "../../hok";


const SwitchToggle = () => {


    const {theme,setTheme} = useContext(ThemeContext);


    return (
        <DarkModeToggle
            mode={theme}
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
                setTheme(mode)
            }}
        />
    );
};

export {SwitchToggle};