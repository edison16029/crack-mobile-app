import React from 'react';

const useHome = () => {
    const [isShowSettings, setIsShowSettings] = React.useState(true);

    const toggleShowSettings = React.useCallback(() => {
        setIsShowSettings(!isShowSettings);
    }, [isShowSettings]);

    return {
        isShowSettings,
        toggleShowSettings
    }
}

export { useHome };