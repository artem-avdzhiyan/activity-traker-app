import React from 'react';

import MainScreenComponent from './MainScreenComponent';
import { mainScreenBlockInterface } from './mainScreenInterfaces';

const mainScreenBlocks: mainScreenBlockInterface[] = [
    {
        key: 'tasks',
        name: 'tasks',
        title: 'Задачи',
        type: 1,
        info: {},
        isLoading: false
    },
    {
        key: 'things',
        name: 'things',
        title: 'Мысли',
        type: 1,
        info: {},
        isLoading: false
    },
    {
        key: 'notification',
        name: 'notification',
        title: 'Напоминания',
        type: 1,
        info: {},
        isLoading: false
    },
    {
        key: 'notes',
        name: 'notes',
        title: 'Заметки',
        type: 1,
        info: {},
        isLoading: false,

    }
]

const MainScreenContainer = () => {
    return <MainScreenComponent blocks={mainScreenBlocks} />;
};

export default MainScreenContainer;
