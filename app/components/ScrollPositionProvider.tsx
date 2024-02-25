// ScrollPositionContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Props {
    children: React.ReactNode
}

interface ScrollPositionContextType {
    scrollPosition: number;
    setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

const ScrollPositionContext = createContext<ScrollPositionContextType>({
    scrollPosition: 0,
    setScrollPosition: () => { },
});

export const useScrollPosition = (): ScrollPositionContextType =>
    useContext(ScrollPositionContext);

export const ScrollPositionProvider: React.FC<Props> = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    return (
        <ScrollPositionContext.Provider value={{ scrollPosition, setScrollPosition }}>
            {children}
        </ScrollPositionContext.Provider>
    );
};
