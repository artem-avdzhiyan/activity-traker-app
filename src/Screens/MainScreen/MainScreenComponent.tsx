import React from 'react';
import './MainScreen.css';
import { mainScreenBlockInterface } from './mainScreenInterfaces';
type Props = {
    blocks: mainScreenBlockInterface[];
}
const MainScreenComponent: React.FC<Props> = ({ blocks }) => {

    return (
        <div className="container">
            {blocks.map((block) => <div key={block.key} className="block-container block-color" >
                <h3>{block.title}</h3>
            </div>)}

        </div>
    );
}

export default MainScreenComponent;
